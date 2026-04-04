package com.freedonuts.ezdonutdiscord.config;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import java.util.List;
import org.bukkit.configuration.file.FileConfiguration;

public final class ConfigManager {

    private final EzDonutDiscordPlugin plugin;

    public ConfigManager(EzDonutDiscordPlugin plugin) {
        this.plugin = plugin;
    }

    public void reload() {
        plugin.reloadConfig();
    }

    public String getLinkRaw() {
        return config().getString("link.raw", "");
    }

    public String getLinkDisplay() {
        return config().getString("link.display", "");
    }

    public boolean isDiscordMessageEnabled() {
        return config().getBoolean("message.discord.enabled", true);
    }

    public List<String> getDiscordLines() {
        return List.copyOf(config().getStringList("message.discord.lines"));
    }

    public List<String> getDiscordHoverLines() {
        return List.copyOf(config().getStringList("message.discord.hover"));
    }

    public boolean isActionBarEnabled() {
        return config().getBoolean("message.actionbar.enabled", false);
    }

    public String getActionBarText() {
        return config().getString("message.actionbar.text", "");
    }

    public boolean isReloadMessageEnabled() {
        return config().getBoolean("message.reload.enabled", true);
    }

    public List<String> getReloadLines() {
        return List.copyOf(config().getStringList("message.reload.lines"));
    }

    public boolean isPlingEnabled() {
        return config().getBoolean("sounds.pling.enabled", true);
    }

    public String getPlingSound() {
        return config().getString("sounds.pling.sound", "BLOCK_NOTE_BLOCK_PLING");
    }

    public float getPlingVolume() {
        return (float) config().getDouble("sounds.pling.volume", 0.5D);
    }

    public float getPlingPitch() {
        return (float) config().getDouble("sounds.pling.pitch", 1.0D);
    }

    public boolean isPlaceholderApiEnabled() {
        return config().getBoolean("placeholderapi.enabled", true);
    }

    private FileConfiguration config() {
        return plugin.getConfig();
    }
}
