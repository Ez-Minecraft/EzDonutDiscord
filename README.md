# EzDonutDiscord
![DonutDiscord Example](https://raw.githubusercontent.com/Ez-Minecraft/EzDonutDiscord/main/website/assets/image/donutdiscord-example.png)
EzDonutDiscord is a lightweight Paper and Folia plugin that gives players a polished `/discord` command with a clickable invite, optional action bar feedback, optional sound feedback, and PlaceholderAPI support.


## Features

- Paper and Folia support
- Clickable Discord invite in chat
- Configurable chat, hover, action bar, and reload messages
- Optional notification sound
- Optional PlaceholderAPI support
- Built-in PlaceholderAPI expansion
- Simple `/discord reload` admin command

## Downloads

Replace these with your published links before posting:

| Platform | Link |
|----------|------|
| Modrinth | `Modrinth project URL` |
| BuiltByBit | `BuiltByBit resource URL` |
| SpigotMC | `Spigot resource URL` |
| GitHub Releases | [GitHub releases](https://github.com/Ez-Minecraft/EzDonutDiscord/releases) |
| Source Code | [GitHub repo](https://github.com/Ez-Minecraft/EzDonutDiscord) |
| Issue Tracker | [GitHub issues URL](https://github.com/Ez-Minecraft/EzDonutDiscord/issues) |

## Requirements

| Requirement | Version |
|-------------|---------|
| Java | 21+ |
| Paper / Folia | 1.21+ |
| Required Plugins | None |
| Optional Plugins | PlaceholderAPI 2.11.6+ |

## Installation

1. Download the [latest plugin](https://github.com/Ez-Minecraft/EzDonutDiscord/releases) jar.
2. Place the jar in your server's `/plugins/` folder.
3. Start or fully restart the server.
4. Edit `/plugins/EzDonutDiscord/config.yml`.
5. Run `/discord` in game to verify the invite message.

Warning: do not use `/reload` for installs or version updates. Use a full restart.

## Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/discord` | Sends the configured Discord invite in chat. Players can also receive an action bar and sound. | `ezdonutdiscord.discord` |
| `/discord reload` | Reloads `config.yml` and refreshes PlaceholderAPI integration. | `ezdonutdiscord.reload` |

## Permissions

| Permission | Description | Default |
|------------|-------------|---------|
| `ezdonutdiscord.discord` | Allows use of `/discord` | `true` |
| `ezdonutdiscord.reload` | Allows use of `/discord reload` | `op` |
| `ezdonutdiscord.admin` | Grants all EzDonutDiscord permissions | `op` |

## PlaceholderAPI

PlaceholderAPI support is optional. If PlaceholderAPI is installed and enabled in the config, EzDonutDiscord can:

- Parse PlaceholderAPI placeholders inside its messages
- Register `%ezdonutdiscord_link_raw%`
- Register `%ezdonutdiscord_link_display%`

Placeholder parsing is applied for player senders when PlaceholderAPI is installed and `placeholderapi.enabled` is `true`.

## Default Config

```yaml
link:
  raw: "https://discord.gg/donutsmp"
  display: "discord.gg/donutsmp"

message:
  discord:
    enabled: true
    lines:
      - "&#00A4FCJoin the DonutSMP Discord community!"
      - "&#00A4FC&l*&r &f&n%link_display%"
    hover:
      - "&#00A4FCOpen the Discord invite"

  actionbar:
    enabled: true
    text: "&7The link has been sent in chat!"

  reload:
    enabled: true
    lines:
      - "&#00A4FC&l*&r &f&nReloaded the config!"

sounds:
  pling:
    enabled: true
    sound: BLOCK_NOTE_BLOCK_PLING
    volume: 0.5
    pitch: 1.0

placeholderapi:
  enabled: true
```

## Notes

- `%link_display%` becomes the clickable invite text.
- `%link_raw%` inserts the full invite URL.
- Standard color codes and hex colors are supported.
- The clickable component is only created on lines that include `%link_display%`.

## bStats

EzDonutDiscord includes bStats for anonymous usage metrics.

![bStats Signature](https://bstats.org/signatures/bukkit/EzDonutDiscord.svg)

## Support

Use the [issue tracker](https://github.com/Ez-Minecraft/EzDonutDiscord/issues) for bug reports, support, and suggestions.
