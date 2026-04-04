package com.freedonuts.ezdonutdiscord.command;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import com.freedonuts.ezdonutdiscord.config.ConfigManager;
import com.freedonuts.ezdonutdiscord.util.ColorUtil;
import com.freedonuts.ezdonutdiscord.util.MessageUtil;
import com.freedonuts.ezdonutdiscord.util.SoundUtil;
import java.util.Collections;
import java.util.List;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;
import org.bukkit.entity.Player;
import org.bukkit.util.StringUtil;

public final class DiscordCommand implements CommandExecutor, TabCompleter {

    private static final List<String> SUBCOMMANDS = List.of("reload");

    private final EzDonutDiscordPlugin plugin;

    public DiscordCommand(EzDonutDiscordPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (args.length > 0) {
            return handleSubcommand(sender, args);
        }

        if (!plugin.hasDiscordPermission(sender)) {
            plugin.sendMessage(sender, ColorUtil.deserialize("&cYou do not have permission to use this command."));
            return true;
        }

        ConfigManager config = plugin.getConfigManager();
        if (!config.isDiscordMessageEnabled()) {
            plugin.sendMessage(sender, ColorUtil.deserialize("&cThe Discord message is currently disabled."));
            return true;
        }

        MessageUtil.sendDiscordMessage(plugin, sender);

        if (sender instanceof Player player) {
            MessageUtil.sendActionBarIfEnabled(plugin, player);
            SoundUtil.playConfiguredPling(plugin, player);
        }

        return true;
    }

    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        if (!plugin.hasReloadPermission(sender)) {
            return Collections.emptyList();
        }

        if (args.length == 1) {
            return StringUtil.copyPartialMatches(args[0], SUBCOMMANDS, new java.util.ArrayList<>());
        }

        return Collections.emptyList();
    }

    private boolean handleSubcommand(CommandSender sender, String[] args) {
        if (args.length == 1 && args[0].equalsIgnoreCase("reload")) {
            if (!plugin.hasReloadPermission(sender)) {
                plugin.sendMessage(sender, ColorUtil.deserialize("&cYou do not have permission to reload this plugin."));
                return true;
            }

            plugin.reloadPluginConfiguration();

            ConfigManager config = plugin.getConfigManager();
            if (config.isReloadMessageEnabled()) {
                MessageUtil.sendReloadMessage(plugin, sender);
            } else {
                plugin.sendMessage(sender, ColorUtil.deserialize("&aReloaded the EzDonutDiscord config."));
            }

            if (sender instanceof Player player) {
                SoundUtil.playConfiguredPling(plugin, player);
            }

            return true;
        }

        plugin.sendMessage(sender, ColorUtil.deserialize("&cUsage: /discord"));
        if (plugin.hasReloadPermission(sender)) {
            plugin.sendMessage(sender, ColorUtil.deserialize("&cUsage: /discord reload"));
        }
        return true;
    }
}
