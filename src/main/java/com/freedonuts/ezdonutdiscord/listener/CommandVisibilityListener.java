package com.freedonuts.ezdonutdiscord.listener;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerCommandSendEvent;

public final class CommandVisibilityListener implements Listener {

    private final EzDonutDiscordPlugin plugin;

    public CommandVisibilityListener(EzDonutDiscordPlugin plugin) {
        this.plugin = plugin;
    }

    @EventHandler
    public void onPlayerCommandSend(PlayerCommandSendEvent event) {
        if (!plugin.hasReloadPermission(event.getPlayer())) {
            event.getCommands().remove("ezdonutdiscord:discord");
        }
    }
}
