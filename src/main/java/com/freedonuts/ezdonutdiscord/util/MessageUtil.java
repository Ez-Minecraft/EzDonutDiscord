package com.freedonuts.ezdonutdiscord.util;

import com.freedonuts.ezdonutdiscord.EzDonutDiscordPlugin;
import com.freedonuts.ezdonutdiscord.config.ConfigManager;
import java.util.List;
import java.util.stream.Collectors;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.TextComponent;
import net.kyori.adventure.text.event.ClickEvent;
import net.kyori.adventure.text.event.HoverEvent;
import net.kyori.adventure.text.format.Style;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public final class MessageUtil {

    private static final String LINK_MARKER = "{DONUTDISCORD_LINK_MARKER}";

    private MessageUtil() {
    }

    public static void sendDiscordMessage(EzDonutDiscordPlugin plugin, CommandSender sender) {
        ConfigManager config = plugin.getConfigManager();
        for (String line : config.getDiscordLines()) {
            plugin.sendMessage(sender, buildDiscordLine(plugin, sender, line));
        }
    }

    public static void sendReloadMessage(EzDonutDiscordPlugin plugin, CommandSender sender) {
        ConfigManager config = plugin.getConfigManager();
        for (String line : config.getReloadLines()) {
            plugin.sendMessage(sender, buildStandardComponent(plugin, sender, line));
        }
    }

    public static void sendActionBarIfEnabled(EzDonutDiscordPlugin plugin, Player player) {
        ConfigManager config = plugin.getConfigManager();
        if (!config.isActionBarEnabled()) {
            return;
        }

        player.sendActionBar(buildStandardComponent(plugin, player, config.getActionBarText()));
    }

    public static Component buildStandardComponent(EzDonutDiscordPlugin plugin, CommandSender sender, String input) {
        ConfigManager config = plugin.getConfigManager();
        String resolved = applyTextPlaceholders(plugin, sender, input, config.getLinkRaw(), config.getLinkDisplay());
        return ColorUtil.deserialize(resolved);
    }

    private static Component buildDiscordLine(EzDonutDiscordPlugin plugin, CommandSender sender, String input) {
        ConfigManager config = plugin.getConfigManager();
        String lineWithMarker = applyTextPlaceholders(plugin, sender, input, config.getLinkRaw(), LINK_MARKER);
        Component baseComponent = ColorUtil.deserialize(lineWithMarker);

        if (!lineWithMarker.contains(LINK_MARKER)) {
            return baseComponent;
        }

        Component hoverComponent = buildHoverComponent(plugin, sender, config.getDiscordHoverLines());
        return replaceLinkMarker(baseComponent, config.getLinkDisplay(), config.getLinkRaw(), hoverComponent);
    }

    private static String applyTextPlaceholders(
        EzDonutDiscordPlugin plugin,
        CommandSender sender,
        String input,
        String linkRaw,
        String linkDisplay
    ) {
        String resolved = input
            .replace("%link_raw%", linkRaw)
            .replace("%link_display%", linkDisplay);

        return plugin.applyPlaceholderApi(sender, resolved);
    }

    private static Component buildHoverComponent(EzDonutDiscordPlugin plugin, CommandSender sender, List<String> hoverLines) {
        if (hoverLines.isEmpty()) {
            return null;
        }

        String joined = hoverLines.stream()
            .map(line -> applyTextPlaceholders(plugin, sender, line, plugin.getConfigManager().getLinkRaw(), plugin.getConfigManager().getLinkDisplay()))
            .collect(Collectors.joining("\n"));

        if (joined.isBlank()) {
            return null;
        }

        return ColorUtil.deserialize(joined);
    }

    private static Component replaceLinkMarker(Component component, String linkDisplay, String linkRaw, Component hoverComponent) {
        List<Component> replacedChildren = component.children().stream()
            .map(child -> replaceLinkMarker(child, linkDisplay, linkRaw, hoverComponent))
            .toList();

        if (!(component instanceof TextComponent textComponent)) {
            return component.children(replacedChildren);
        }

        String content = textComponent.content();
        if (!content.contains(LINK_MARKER)) {
            return textComponent.children(replacedChildren);
        }

        Component rebuilt = Component.empty();
        Style inheritedStyle = textComponent.style();
        int currentIndex = 0;

        while (currentIndex < content.length()) {
            int markerIndex = content.indexOf(LINK_MARKER, currentIndex);
            if (markerIndex == -1) {
                String tail = content.substring(currentIndex);
                if (!tail.isEmpty()) {
                    rebuilt = rebuilt.append(Component.text(tail).style(inheritedStyle));
                }
                break;
            }

            String before = content.substring(currentIndex, markerIndex);
            if (!before.isEmpty()) {
                rebuilt = rebuilt.append(Component.text(before).style(inheritedStyle));
            }

            Component linkComponent = Component.text(linkDisplay)
                .style(inheritedStyle)
                .clickEvent(ClickEvent.openUrl(linkRaw));

            if (hoverComponent != null) {
                linkComponent = linkComponent.hoverEvent(HoverEvent.showText(hoverComponent));
            }

            rebuilt = rebuilt.append(linkComponent);
            currentIndex = markerIndex + LINK_MARKER.length();
        }

        for (Component child : replacedChildren) {
            rebuilt = rebuilt.append(child);
        }

        return rebuilt;
    }
}
