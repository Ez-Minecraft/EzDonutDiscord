package com.freedonuts.ezdonutdiscord;

import com.freedonuts.ezdonutdiscord.command.DiscordCommand;
import com.freedonuts.ezdonutdiscord.config.ConfigManager;
import com.freedonuts.ezdonutdiscord.listener.CommandVisibilityListener;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Objects;
import java.util.logging.Level;
import net.kyori.adventure.text.Component;
import org.bstats.bukkit.Metrics;
import org.bukkit.OfflinePlayer;
import org.bukkit.command.CommandSender;
import org.bukkit.command.PluginCommand;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

public final class EzDonutDiscordPlugin extends JavaPlugin {

    private static final int BSTATS_PLUGIN_ID = 30562;

    private ConfigManager configManager;
    private Method placeholderSetPlaceholdersMethod;
    private Object placeholderExpansion;

    @Override
    public void onEnable() {
        saveDefaultConfig();
        configManager = new ConfigManager(this);
        new Metrics(this, BSTATS_PLUGIN_ID);
        registerCommands();
        getServer().getPluginManager().registerEvents(new CommandVisibilityListener(this), this);
        syncPlaceholderApiSupport();
    }

    @Override
    public void onDisable() {
        unregisterPlaceholderExpansion();
    }

    public ConfigManager getConfigManager() {
        return configManager;
    }

    public boolean hasDiscordPermission(CommandSender sender) {
        return sender.hasPermission("ezdonutdiscord.discord") || sender.hasPermission("ezdonutdiscord.admin");
    }

    public boolean hasReloadPermission(CommandSender sender) {
        return sender.hasPermission("ezdonutdiscord.reload") || sender.hasPermission("ezdonutdiscord.admin");
    }

    public boolean reloadPluginConfiguration() {
        configManager.reload();
        syncPlaceholderApiSupport();
        return true;
    }

    public boolean canApplyPlaceholderApi(CommandSender sender) {
        return sender instanceof Player && placeholderSetPlaceholdersMethod != null && configManager.isPlaceholderApiEnabled();
    }

    public String applyPlaceholderApi(CommandSender sender, String text) {
        if (!canApplyPlaceholderApi(sender)) {
            return text;
        }

        try {
            return (String) placeholderSetPlaceholdersMethod.invoke(null, (OfflinePlayer) sender, text);
        } catch (ReflectiveOperationException exception) {
            getLogger().log(Level.WARNING, "Failed to apply PlaceholderAPI placeholders.", exception);
            return text;
        }
    }

    public void sendMessage(CommandSender sender, Component component) {
        sender.sendMessage(component);
    }

    private void registerCommands() {
        DiscordCommand discordCommand = new DiscordCommand(this);
        PluginCommand discord = Objects.requireNonNull(getCommand("discord"), "discord command missing from plugin.yml");
        discord.setExecutor(discordCommand);
        discord.setTabCompleter(discordCommand);
    }

    private void syncPlaceholderApiSupport() {
        placeholderSetPlaceholdersMethod = resolvePlaceholderApiMethod();

        if (placeholderSetPlaceholdersMethod == null || !configManager.isPlaceholderApiEnabled()) {
            unregisterPlaceholderExpansion();
            return;
        }

        if (placeholderExpansion != null) {
            return;
        }

        try {
            Class<?> expansionClass = Class.forName("com.freedonuts.ezdonutdiscord.placeholder.EzDonutDiscordExpansion");
            Constructor<?> constructor = expansionClass.getConstructor(EzDonutDiscordPlugin.class);
            Object expansion = constructor.newInstance(this);
            Method registerMethod = expansionClass.getMethod("register");
            boolean registered = (boolean) registerMethod.invoke(expansion);

            if (registered) {
                placeholderExpansion = expansion;
                getLogger().info("Registered PlaceholderAPI expansion for EzDonutDiscord.");
            }
        } catch (ReflectiveOperationException | LinkageError exception) {
            getLogger().log(Level.WARNING, "Failed to register PlaceholderAPI expansion.", exception);
        }
    }

    private Method resolvePlaceholderApiMethod() {
        if (!getServer().getPluginManager().isPluginEnabled("PlaceholderAPI")) {
            return null;
        }

        try {
            Class<?> placeholderApiClass = Class.forName("me.clip.placeholderapi.PlaceholderAPI");
            return placeholderApiClass.getMethod("setPlaceholders", OfflinePlayer.class, String.class);
        } catch (ReflectiveOperationException exception) {
            getLogger().log(Level.WARNING, "PlaceholderAPI was detected but its placeholder method could not be resolved.", exception);
            return null;
        }
    }

    private void unregisterPlaceholderExpansion() {
        if (placeholderExpansion == null) {
            return;
        }

        try {
            Method unregisterMethod = placeholderExpansion.getClass().getMethod("unregister");
            unregisterMethod.invoke(placeholderExpansion);
        } catch (ReflectiveOperationException | LinkageError exception) {
            getLogger().log(Level.WARNING, "Failed to unregister PlaceholderAPI expansion cleanly.", exception);
        } finally {
            placeholderExpansion = null;
        }
    }
}
