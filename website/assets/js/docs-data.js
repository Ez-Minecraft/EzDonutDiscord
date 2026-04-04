window.DOCS_DATA = {
  groups: [
    {
      title: 'Overview',
      pages: [
        { id: 'index', label: 'EzDonutDiscord' },
        { id: 'installation', label: 'Installation' },
        { id: 'configuration', label: 'Configuration' }
      ]
    },
    {
      title: 'Usage Category',
      pages: [
        { id: 'commands', label: 'Commands' },
        { id: 'permissions', label: 'Permissions' },
        { id: 'troubleshooting', label: 'Troubleshooting' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { id: 'changelog', label: 'Changelog' },
        { id: 'faq', label: 'FAQ' },
        { id: 'placeholderapi', label: 'PlaceholderAPI' },
        { id: 'discord-message-flow', label: 'Discord Message Flow' }
      ]
    }
  ],
  pages: {
    index: {
      title: 'EzDonutDiscord Docs',
      topbarTitle: 'EzDonutDiscord',
      meta: ['Overview', 'Home'],
      content: `
        <h1>EzDonutDiscord</h1>
        <p class="lead">EzDonutDiscord is a lightweight Paper and Folia plugin that gives players a polished <span class="inline-code">/discord</span> command with a configurable clickable invite.</p>

        <section id="features"><h2>Features</h2>
          <ul>
            <li>Clickable Discord invite with hover text</li>
            <li>Configurable chat, action bar, and reload messages</li>
            <li>Optional pling sound feedback</li>
            <li>Folia support</li>
            <li>PlaceholderAPI support</li>
            <li>Admin reload command</li>
          </ul>
        </section>

        <section id="downloads"><h2>Downloads</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Platform</th><th>Link</th></tr></thead>
            <tbody>
              <tr><td>GitHub Releases</td><td>Not configured in this repository</td></tr>
              <tr><td>SpigotMC</td><td>Not published</td></tr>
              <tr><td>BuiltByBit</td><td>Not published</td></tr>
            </tbody>
          </table></div>
        </section>

        <section id="bstats"><h2>bStats Total Servers</h2>
          <p>Live total server graph pulled directly from bStats project <span class="inline-code">EzDonutDiscord</span>.</p>
          <div class="stats-embed">
            <a href="https://bstats.org/plugin/bukkit/EzDonutDiscord/30562" target="_blank" rel="noreferrer">
              <img src="https://bstats.org/signatures/bukkit/EzDonutDiscord.svg" alt="EzDonutDiscord bStats signature graph showing total servers" loading="lazy" />
            </a>
          </div>
        </section>

        <section id="requirements"><h2>Requirements</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Requirement</th><th>Version</th></tr></thead>
            <tbody>
              <tr><td>Java</td><td>21+</td></tr>
              <tr><td>Paper / Folia</td><td>1.21+</td></tr>
              <tr><td>Required Plugins</td><td>None</td></tr>
              <tr><td>Optional Plugins</td><td>PlaceholderAPI 2.11.6+</td></tr>
            </tbody>
          </table></div>
        </section>
      `,
      prev: { id: 'permissions', title: 'Permissions', desc: 'Review permission defaults and guidance.' },
      next: { id: 'changelog', title: 'Changelog', desc: 'See release notes and recent additions.' }
    },

    changelog: {
      title: 'Changelog · EzDonutDiscord Docs',
      topbarTitle: 'Changelog',
      meta: ['Overview', 'Releases'],
      content: `
        <h1>Changelog</h1>
        <section id="latest"><h2>v1.0.0 - Latest</h2>
          <p><strong>Released:</strong> TBD</p>
        </section>

        <section id="added"><h2>Added</h2>
          <ul>
            <li>Initial EzDonutDiscord release for Paper and Folia 1.21+</li>
            <li><span class="inline-code">/discord</span> command with clickable invite output</li>
            <li><span class="inline-code">/discord reload</span> support for live config refreshes</li>
            <li>Configurable hover text, action bar feedback, and pling sound playback</li>
            <li>Optional PlaceholderAPI parsing and <span class="inline-code">%ezdonutdiscord_link_raw%</span> / <span class="inline-code">%ezdonutdiscord_link_display%</span> placeholders</li>
          </ul>
        </section>
      `,
      prev: { id: 'index', title: 'EzDonutDiscord', desc: 'Back to the project overview.' },
      next: { id: 'faq', title: 'FAQ', desc: 'Read common troubleshooting answers.' }
    },

    faq: {
      title: 'FAQ · EzDonutDiscord Docs',
      topbarTitle: 'FAQ',
      meta: ['Overview', 'Support'],
      content: `
        <h1>FAQ</h1>

        <section id="loading"><h2>The plugin is not loading. What should I check first?</h2>
          <p>Confirm that your server is running Java 21+ and Paper or Folia 1.21+. Then check <span class="inline-code">logs/latest.log</span> for startup errors.</p>
        </section>

        <section id="folia"><h2>Can I use this on Folia?</h2>
          <p>Yes. <span class="inline-code">plugin.yml</span> marks EzDonutDiscord as Folia-supported.</p>
        </section>

        <section id="papi"><h2>Why are my PlaceholderAPI placeholders not resolving?</h2>
          <p>Make sure PlaceholderAPI is installed, <span class="inline-code">placeholderapi.enabled</span> is still <span class="inline-code">true</span>, and you are testing with a player sender. Console senders do not get PlaceholderAPI parsing.</p>
        </section>

        <section id="tab-complete"><h2>Why can some staff members tab-complete <span class="inline-code">/discord reload</span> but others cannot?</h2>
          <p>The plugin only exposes the <span class="inline-code">reload</span> tab completion to senders with <span class="inline-code">ezdonutdiscord.reload</span> or <span class="inline-code">ezdonutdiscord.admin</span>.</p>
        </section>

        <section id="reloading"><h2>Can I reload the config without restarting the whole server?</h2>
          <p>Yes. Use <span class="inline-code">/discord reload</span>. For jar updates, a full restart is still recommended.</p>
        </section>

        <section id="checklist"><h2>Is there a full issue checklist for common problems?</h2>
          <p>Yes. Use the <a href="#/troubleshooting">Troubleshooting</a> page for symptom-based fixes.</p>
        </section>
      `,
      prev: { id: 'changelog', title: 'Changelog', desc: 'Back to the latest release notes.' },
      next: { id: 'installation', title: 'Installation', desc: 'Set up the plugin on your server.' }
    },

    installation: {
      title: 'Installation · EzDonutDiscord Docs',
      topbarTitle: 'Installation',
      meta: ['Getting Started', 'Setup'],
      content: `
        <h1>Installation</h1>

        <section id="requirements"><h2>Requirements</h2>
          <ul>
            <li><strong>Java:</strong> 21+</li>
            <li><strong>Server Software:</strong> Paper or Folia 1.21+</li>
            <li><strong>Required Plugins:</strong> None</li>
            <li><strong>Optional Plugins:</strong> PlaceholderAPI 2.11.6+ for placeholder parsing and EzDonutDiscord placeholders</li>
          </ul>
        </section>

        <section id="steps"><h2>Steps</h2>
          <ol>
            <li>Download the latest plugin jar, or build it from source with <span class="inline-code">mvn package</span>.</li>
            <li>Place <span class="inline-code">EzDonutDiscord-1.0.0.jar</span> into your server's <span class="inline-code">/plugins/</span> folder.</li>
            <li>Start your server with a full restart so the plugin can generate <span class="inline-code">/plugins/EzDonutDiscord/config.yml</span>.</li>
            <li>Open the config and update your Discord invite settings.</li>
            <li>Run <span class="inline-code">/discord</span> in game to verify clickable invite, action bar, and sound behavior.</li>
          </ol>
          <p><strong>Warning:</strong> Always do a full server restart when installing or updating the plugin. Do not use <span class="inline-code">/reload</span>.</p>
        </section>

        <section id="updating"><h2>Updating</h2>
          <ol>
            <li>Stop your server.</li>
            <li>Replace the old jar with the new one.</li>
            <li>Start the server again.</li>
            <li>Review the Configuration page for any new keys before reloading the plugin live.</li>
          </ol>
          <p><strong>Tip:</strong> <span class="inline-code">/discord reload</span> is useful for message edits, but full restarts are still the safer path for version updates.</p>
        </section>

        <section id="uninstalling"><h2>Uninstalling</h2>
          <ol>
            <li>Stop your server.</li>
            <li>Remove the plugin jar from <span class="inline-code">/plugins/</span>.</li>
            <li>Optionally delete <span class="inline-code">/plugins/EzDonutDiscord/</span> if you also want to remove the config file.</li>
          </ol>
        </section>
      `,
      prev: { id: 'faq', title: 'FAQ', desc: 'Back to common support questions.' },
      next: { id: 'configuration', title: 'Configuration', desc: 'Review all config keys and defaults.' }
    },

    configuration: {
      title: 'Configuration · EzDonutDiscord Docs',
      topbarTitle: 'Configuration',
      meta: ['Getting Started', 'Configuration'],
      content: `
        <h1>Configuration</h1>
        <p class="lead">After first run, EzDonutDiscord creates config at <span class="inline-code">/plugins/EzDonutDiscord/config.yml</span>.</p>

        <section id="config-yml"><h2>config.yml</h2>
          <div class="code-block"><div class="code-head">plugins/EzDonutDiscord/config.yml</div><pre># EzDonutDiscord v1.0.0 - config.yml
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
    sound: "BLOCK_NOTE_BLOCK_PLING"
    volume: 0.5
    pitch: 1.0

placeholderapi:
  enabled: true</pre></div>
        </section>

        <section id="options"><h2>Options Reference</h2>
          <h3><span class="inline-code">link</span></h3>
          <div class="code-block"><pre>raw: "https://discord.gg/donutsmp" # Type: String | Full URL opened when the clickable invite is pressed
display: "discord.gg/donutsmp" # Type: String | Text shown in chat for the invite component</pre></div>

          <h3><span class="inline-code">message</span></h3>
          <div class="code-block"><pre>discord:
  enabled: true # Type: Boolean | Enables the main /discord chat output
  lines: # Type: List&lt;String&gt; | Default: 2 lines | %link_display% and %link_raw% are replaced before sending
    - "&#00A4FCJoin the DonutSMP Discord community!"
    - "&#00A4FC&l*&r &f&n%link_display%"
  hover: # Type: List&lt;String&gt; | Default: 1 line | Hover text attached to clickable invite lines
    - "&#00A4FCOpen the Discord invite"
actionbar:
  enabled: true # Type: Boolean | Enables the action bar confirmation for players
  text: "&7The link has been sent in chat!" # Type: String | Text shown in the action bar after /discord
reload:
  enabled: true # Type: Boolean | Enables the custom response after /discord reload
  lines: # Type: List&lt;String&gt; | Default: 1 line | Reload confirmation message lines
    - "&#00A4FC&l*&r &f&nReloaded the config!"</pre></div>

          <h3><span class="inline-code">sounds</span></h3>
          <div class="code-block"><pre>pling:
  enabled: true # Type: Boolean | Plays the configured sound after /discord and /discord reload
  sound: "BLOCK_NOTE_BLOCK_PLING" # Type: String | Bukkit sound enum or namespaced key used for playback
  volume: 0.5 # Type: Double | Volume used for the pling sound
  pitch: 1.0 # Type: Double | Pitch used for the pling sound</pre></div>

          <h3><span class="inline-code">placeholderapi</span></h3>
          <div class="code-block"><pre>enabled: true # Type: Boolean | Enables PlaceholderAPI parsing and automatic expansion registration when PlaceholderAPI is installed</pre></div>
        </section>

        <section id="message-placeholders"><h2>Message Placeholders</h2>
          <ul>
            <li><span class="inline-code">%link_raw%</span> inserts the full invite URL from <span class="inline-code">link.raw</span>.</li>
            <li><span class="inline-code">%link_display%</span> inserts visible invite text from <span class="inline-code">link.display</span>.</li>
          </ul>
          <p><strong>Tip:</strong> PlaceholderAPI placeholders are parsed inside EzDonutDiscord messages when PlaceholderAPI is installed, <span class="inline-code">placeholderapi.enabled</span> is <span class="inline-code">true</span>, and sender is a player.</p>
        </section>

        <section id="formatting"><h2>Formatting Notes</h2>
          <ul>
            <li>Standard Bukkit color codes such as <span class="inline-code">&7</span>, <span class="inline-code">&c</span>, and <span class="inline-code">&l</span> are supported.</li>
            <li>Hex colors such as <span class="inline-code">&#00A4FC</span> are supported.</li>
            <li>The clickable invite appears only on lines that include <span class="inline-code">%link_display%</span>.</li>
          </ul>
        </section>
      `,
      prev: { id: 'installation', title: 'Installation', desc: 'Back to setup and update steps.' },
      next: { id: 'discord-message-flow', title: 'Discord Message Flow', desc: 'Understand exactly what /discord does.' }
    },

    'discord-message-flow': {
      title: 'Discord Message Flow · EzDonutDiscord Docs',
      topbarTitle: 'Discord Message Flow',
      meta: ['Features', 'Command Behavior'],
      content: `
        <h1>Discord Message Flow</h1>
        <p class="lead">EzDonutDiscord assembles a clickable invite, optional hover text, optional action bar feedback, and optional sound feedback from config.</p>

        <section id="what-happens"><h2>What Happens On <span class="inline-code">/discord</span></h2>
          <ol>
            <li>The plugin checks <span class="inline-code">ezdonutdiscord.discord</span> or <span class="inline-code">ezdonutdiscord.admin</span>.</li>
            <li>If <span class="inline-code">message.discord.enabled</span> is <span class="inline-code">false</span>, sender gets a disabled notice instead of invite.</li>
            <li>Each line in <span class="inline-code">message.discord.lines</span> is processed and sent in order.</li>
            <li>If a line contains <span class="inline-code">%link_display%</span>, that segment becomes clickable and opens <span class="inline-code">link.raw</span>.</li>
            <li>If <span class="inline-code">message.discord.hover</span> has text, it is attached as hover text to clickable invite.</li>
            <li>If sender is a player, plugin can send action bar and play configured pling sound.</li>
          </ol>
        </section>

        <section id="practical-notes"><h2>Practical Notes</h2>
          <ul>
            <li>Clickable portion is created only from <span class="inline-code">%link_display%</span>. Plain text lines stay plain text.</li>
            <li><span class="inline-code">/discord reload</span> reuses the same pling sound profile for players when sound feedback is enabled.</li>
            <li>The plugin hides namespaced command variant <span class="inline-code">ezdonutdiscord:discord</span> from normal player command lists unless player has reload-level access.</li>
          </ul>
        </section>
      `,
      prev: { id: 'configuration', title: 'Configuration', desc: 'Back to config keys and placeholders.' },
      next: { id: 'placeholderapi', title: 'PlaceholderAPI', desc: 'Review integration behavior and placeholders.' }
    },

    placeholderapi: {
      title: 'PlaceholderAPI · EzDonutDiscord Docs',
      topbarTitle: 'PlaceholderAPI',
      meta: ['Features', 'Integrations'],
      content: `
        <h1>PlaceholderAPI</h1>
        <p class="lead">PlaceholderAPI support is optional. EzDonutDiscord soft-depends on PlaceholderAPI, detects it at runtime, and can parse placeholders in messages while registering its own expansion values.</p>

        <section id="built-in"><h2>Built-In EzDonutDiscord Placeholders</h2>
          <ul>
            <li><span class="inline-code">%ezdonutdiscord_link_raw%</span></li>
            <li><span class="inline-code">%ezdonutdiscord_link_display%</span></li>
          </ul>
          <p>These values are read directly from <span class="inline-code">link.raw</span> and <span class="inline-code">link.display</span> in <span class="inline-code">config.yml</span>.</p>
        </section>

        <section id="inside-messages"><h2>Placeholder Parsing Inside Messages</h2>
          <p>EzDonutDiscord can parse PlaceholderAPI placeholders in:</p>
          <ul>
            <li><span class="inline-code">message.discord.lines</span></li>
            <li><span class="inline-code">message.discord.hover</span></li>
            <li><span class="inline-code">message.actionbar.text</span></li>
            <li><span class="inline-code">message.reload.lines</span></li>
          </ul>
          <p>Parsing only happens when PlaceholderAPI is installed, <span class="inline-code">placeholderapi.enabled</span> is <span class="inline-code">true</span>, and sender is a player.</p>
        </section>

        <section id="reload"><h2>Reload Behavior</h2>
          <p>Running <span class="inline-code">/discord reload</span> refreshes PlaceholderAPI integration. If PlaceholderAPI was added, removed, or disabled, EzDonutDiscord updates expansion registration during reload cycle.</p>
        </section>
      `,
      prev: { id: 'discord-message-flow', title: 'Discord Message Flow', desc: 'Back to command rendering flow.' },
      next: { id: 'commands', title: 'Commands', desc: 'See command and permission matrix.' }
    },

    commands: {
      title: 'Commands · EzDonutDiscord Docs',
      topbarTitle: 'Commands',
      meta: ['Usage', 'Commands'],
      content: `
        <h1>Commands</h1>

        <section id="command-table"><h2>Command Reference</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Command</th><th>Description</th><th>Permission</th></tr></thead>
            <tbody>
              <tr><td><strong>/discord</strong></td><td>Sends configured Discord invite in chat and, for players, can also show action bar and play pling sound.</td><td><span class="inline-code">ezdonutdiscord.discord</span></td></tr>
              <tr><td><strong>/discord reload</strong></td><td>Reloads <span class="inline-code">config.yml</span> and refreshes PlaceholderAPI integration state.</td><td><span class="inline-code">ezdonutdiscord.reload</span></td></tr>
            </tbody>
          </table></div>
          <p><strong>Tip:</strong> The <span class="inline-code">reload</span> tab completion is shown only to senders who already have reload access.</p>
        </section>
      `,
      prev: { id: 'placeholderapi', title: 'PlaceholderAPI', desc: 'Back to integration details.' },
      next: { id: 'permissions', title: 'Permissions', desc: 'Check permission defaults and best practices.' }
    },

    permissions: {
      title: 'Permissions · EzDonutDiscord Docs',
      topbarTitle: 'Permissions',
      meta: ['Usage', 'Permissions'],
      content: `
        <h1>Permissions</h1>

        <section id="permission-table"><h2>Permission Nodes</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Permission</th><th>Description</th><th>Default</th></tr></thead>
            <tbody>
              <tr><td><span class="inline-code">ezdonutdiscord.discord</span></td><td>Allows use of <span class="inline-code">/discord</span>.</td><td><span class="inline-code">true</span></td></tr>
              <tr><td><span class="inline-code">ezdonutdiscord.reload</span></td><td>Allows use of <span class="inline-code">/discord reload</span> and exposes the <span class="inline-code">reload</span> tab completion.</td><td><span class="inline-code">op</span></td></tr>
              <tr><td><span class="inline-code">ezdonutdiscord.admin</span></td><td>Grants all EzDonutDiscord permissions.</td><td><span class="inline-code">op</span></td></tr>
            </tbody>
          </table></div>
        </section>

        <section id="warning"><h2>Operational Warning</h2>
          <p>Manage permissions with a permissions plugin such as <a href="https://luckperms.net/" target="_blank" rel="noreferrer">LuckPerms</a> instead of relying on <span class="inline-code">op</span> for staff access.</p>
        </section>
      `,
      prev: { id: 'commands', title: 'Commands', desc: 'Back to command behaviors.' },
      next: { id: 'troubleshooting', title: 'Troubleshooting', desc: 'Fix common setup and runtime issues.' }
    },

    troubleshooting: {
      title: 'Troubleshooting · EzDonutDiscord Docs',
      topbarTitle: 'Troubleshooting',
      meta: ['Usage', 'Support'],
      content: `
        <h1>Troubleshooting</h1>
        <p class="lead">Use this checklist when <span class="inline-code">/discord</span> does not behave as expected.</p>

        <section id="quick-checks"><h2>Quick Checks</h2>
          <ol>
            <li>Confirm server runs <strong>Java 21+</strong> and <strong>Paper/Folia 1.21+</strong>.</li>
            <li>Confirm plugin jar is in <span class="inline-code">/plugins/</span> and server had a full restart.</li>
            <li>Confirm <span class="inline-code">/plugins/EzDonutDiscord/config.yml</span> exists and is valid YAML.</li>
            <li>Confirm player has the required permission node.</li>
            <li>Run <span class="inline-code">/discord reload</span> after config edits.</li>
          </ol>
        </section>

        <section id="symptom-guide"><h2>Symptom Guide</h2>
          <div class="table-wrap"><table>
            <thead><tr><th>Symptom</th><th>Most likely cause</th><th>What to do</th></tr></thead>
            <tbody>
              <tr><td>Nothing happens with <span class="inline-code">/discord</span></td><td>Missing <span class="inline-code">ezdonutdiscord.discord</span></td><td>Grant <span class="inline-code">ezdonutdiscord.discord</span> (or <span class="inline-code">ezdonutdiscord.admin</span>) via LuckPerms.</td></tr>
              <tr><td><span class="inline-code">/discord reload</span> is unknown or denied</td><td>Missing <span class="inline-code">ezdonutdiscord.reload</span></td><td>Grant <span class="inline-code">ezdonutdiscord.reload</span> to trusted staff only.</td></tr>
              <tr><td>Invite text shows but is not clickable</td><td><span class="inline-code">%link_display%</span> missing from line</td><td>Add <span class="inline-code">%link_display%</span> to one of <span class="inline-code">message.discord.lines</span>.</td></tr>
              <tr><td>Click opens wrong URL</td><td><span class="inline-code">link.raw</span> misconfigured</td><td>Set <span class="inline-code">link.raw</span> to full invite URL including <span class="inline-code">https://</span>.</td></tr>
              <tr><td>Hover text does not show</td><td><span class="inline-code">message.discord.hover</span> empty</td><td>Add at least one hover line under <span class="inline-code">message.discord.hover</span>.</td></tr>
              <tr><td>Action bar does not appear</td><td>Action bar disabled or sender is console</td><td>Set <span class="inline-code">message.actionbar.enabled</span> to <span class="inline-code">true</span> and test as player.</td></tr>
              <tr><td>Sound does not play</td><td>Sound disabled or invalid key</td><td>Enable <span class="inline-code">sounds.pling.enabled</span> and verify sound name.</td></tr>
              <tr><td>PlaceholderAPI placeholders stay raw text</td><td>PlaceholderAPI missing/disabled or console sender</td><td>Install PlaceholderAPI, keep <span class="inline-code">placeholderapi.enabled</span> true, and test as player.</td></tr>
            </tbody>
          </table></div>
        </section>

        <section id="papi-checklist"><h2>PlaceholderAPI Debug Checklist</h2>
          <ul>
            <li>Verify PlaceholderAPI is installed and loaded during startup.</li>
            <li>Run <span class="inline-code">/papi parse me %ezdonutdiscord_link_raw%</span> to verify expansion output.</li>
            <li>If PlaceholderAPI was installed after boot, run <span class="inline-code">/discord reload</span> or restart.</li>
          </ul>
        </section>

        <section id="safe-ops"><h2>Safe Operations</h2>
          <ul>
            <li>Prefer full restarts for plugin updates.</li>
            <li>Use <span class="inline-code">/discord reload</span> for message/config edits only.</li>
            <li>Avoid Bukkit <span class="inline-code">/reload</span>.</li>
          </ul>
        </section>
      `,
      prev: { id: 'permissions', title: 'Permissions', desc: 'Back to permission defaults and guidance.' },
      next: { id: 'index', title: 'EzDonutDiscord', desc: 'Return to project overview.' }
    }
  }
};
