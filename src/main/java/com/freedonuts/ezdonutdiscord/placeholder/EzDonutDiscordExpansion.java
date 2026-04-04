package com.freedonuts.ezdonutdiscord.placeholder;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

@SuppressWarnings("deprecation")
public final class EzDonutDiscordExpansion extends PlaceholderExpansion {

    private final EzDonutDiscordPlugin plugin;

    public EzDonutDiscordExpansion(EzDonutDiscordPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public @NotNull String getIdentifier() {
        return "ezdonutdiscord";
    }

    @Override
    public @NotNull String getAuthor() {
        return "FreeDonuts";
    }

    @Override
    public @NotNull String getVersion() {
        return plugin.getDescription().getVersion();
    }

    @Override
    public boolean persist() {
        return true;
    }

    @Override
    public @Nullable String onPlaceholderRequest(Player player, @NotNull String params) {
        return switch (params.toLowerCase()) {
            case "link_raw" -> plugin.getConfigManager().getLinkRaw();
            case "link_display" -> plugin.getConfigManager().getLinkDisplay();
            default -> null;
        };
    }
}
