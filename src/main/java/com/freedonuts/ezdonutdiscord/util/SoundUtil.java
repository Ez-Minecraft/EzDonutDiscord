package com.freedonuts.ezdonutdiscord.util;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import com.freedonuts.ezdonutdiscord.config.ConfigManager;
import java.util.LinkedHashSet;
import java.util.Locale;
import org.bukkit.Sound;
import org.bukkit.entity.Player;

public final class SoundUtil {

    private static final String MODERN_PLING_KEY = "minecraft:block.note_block.pling";

    private SoundUtil() {
    }

    @SuppressWarnings({"deprecation", "removal"})
    public static void playConfiguredPling(EzDonutDiscordPlugin plugin, Player player) {
        ConfigManager config = plugin.getConfigManager();
        if (!config.isPlingEnabled()) {
            return;
        }

        String configuredSound = config.getPlingSound();
        float volume = config.getPlingVolume();
        float pitch = config.getPlingPitch();

        // Prefer enum playback when the current server exposes a matching Sound constant.
        if (playEnumSound(player, configuredSound, volume, pitch)) {
            return;
        }

        // Fall back to raw string playback so namespaced sounds still work across versions.
        if (playStringSound(player, configuredSound, volume, pitch)) {
            return;
        }

        plugin.getLogger().warning("Invalid sound configured at sounds.pling.sound: " + configuredSound);
    }

    @SuppressWarnings({"deprecation", "removal"})
    private static boolean playEnumSound(Player player, String input, float volume, float pitch) {
        for (String candidate : buildEnumCandidates(input)) {
            try {
                Sound sound = Sound.valueOf(candidate);
                player.playSound(player.getLocation(), sound, volume, pitch);
                return true;
            } catch (IllegalArgumentException ignored) {
                // Try the next alias for this server version.
            }
        }

        return false;
    }

    @SuppressWarnings("deprecation")
    private static boolean playStringSound(Player player, String input, float volume, float pitch) {
        for (String candidate : buildStringCandidates(input)) {
            try {
                player.playSound(player.getLocation(), candidate, volume, pitch);
                return true;
            } catch (IllegalArgumentException ignored) {
                // Keep trying until every candidate has failed.
            }
        }

        return false;
    }

    private static LinkedHashSet<String> buildEnumCandidates(String input) {
        LinkedHashSet<String> candidates = new LinkedHashSet<>();
        String normalized = normalizeEnumName(input);
        if (normalized.isEmpty()) {
            return candidates;
        }

        candidates.add(normalized);

        if (isPlingAlias(normalized)) {
            candidates.add("BLOCK_NOTE_BLOCK_PLING");
            candidates.add("BLOCK_NOTE_PLING");
            candidates.add("NOTE_PLING");
        }

        return candidates;
    }

    private static LinkedHashSet<String> buildStringCandidates(String input) {
        LinkedHashSet<String> candidates = new LinkedHashSet<>();
        if (input != null) {
            String trimmed = input.trim();
            if (!trimmed.isEmpty()) {
                candidates.add(trimmed);
            }
        }

        for (String candidate : buildEnumCandidates(input)) {
            if (isPlingAlias(candidate)) {
                candidates.add(MODERN_PLING_KEY);
            } else {
                candidates.add(toNamespacedKey(candidate));
            }
        }

        return candidates;
    }

    private static boolean isPlingAlias(String soundName) {
        return soundName.equals("BLOCK_NOTE_BLOCK_PLING")
            || soundName.equals("BLOCK_NOTE_PLING")
            || soundName.equals("NOTE_PLING");
    }

    private static String normalizeEnumName(String input) {
        if (input == null) {
            return "";
        }

        String normalized = input.trim();
        if (normalized.isEmpty()) {
            return "";
        }

        int namespaceSeparator = normalized.indexOf(':');
        if (namespaceSeparator >= 0 && namespaceSeparator < normalized.length() - 1) {
            normalized = normalized.substring(namespaceSeparator + 1);
        }

        return normalized
            .replace('.', '_')
            .replace('-', '_')
            .replace(' ', '_')
            .toUpperCase(Locale.ROOT);
    }

    private static String toNamespacedKey(String enumName) {
        return "minecraft:" + enumName.toLowerCase(Locale.ROOT).replace('_', '.');
    }
}
