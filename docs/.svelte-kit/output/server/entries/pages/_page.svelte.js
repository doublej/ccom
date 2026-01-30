import { w as head, x as ensure_array_like, y as attr_style, z as stringify } from "../../chunks/index.js";
import "@sveltejs/kit/internal/server";
import { l as escape_html } from "../../chunks/context.js";
function _page($$renderer) {
  const features = [
    {
      title: "Natural Language",
      description: "Describe what you want in plain English. Claude AI translates your intent into the right shell command."
    },
    {
      title: "Smart Caching",
      description: "Repeated prompts return instant cached results. No API calls wasted on commands you've already asked for."
    },
    {
      title: "Multiple Options",
      description: "Get 1–3 command suggestions ranked by relevance. Pick the one that fits, then run it directly."
    },
    {
      title: "Command History",
      description: "Every executed command is logged to ~/.ccom/history.jsonl for review and auditing."
    },
    {
      title: "Fresh Mode",
      description: "Use the -f flag to bypass cache and generate new suggestions when you need different options."
    },
    {
      title: "Interactive UI",
      description: "Clean terminal interface with numbered options, color-coded output, and one-keystroke execution."
    }
  ];
  const steps = [
    {
      title: "Install ccom",
      description: "Requires Claude CLI installed and authenticated.",
      code: "curl -o /usr/local/bin/ccom https://raw.githubusercontent.com/doublej/ccom/main/ccom\nchmod +x /usr/local/bin/ccom"
    },
    {
      title: "Run your first command",
      description: "Describe what you want to do and pick from the suggested commands.",
      code: 'ccom "list all files sorted by size"'
    }
  ];
  let copyLabel = "Copy";
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>ccom - Claude Command</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Convert natural language to shell commands using Claude AI."/>`);
  });
  $$renderer.push(`<main><section class="hero svelte-1uha8ag"><div class="container svelte-1uha8ag"><h1 class="svelte-1uha8ag">ccom</h1> <p class="subtitle svelte-1uha8ag">Claude Command</p> <p class="description svelte-1uha8ag">Convert natural language to shell commands using Claude AI.
				Describe what you want, pick from suggested commands, and run them instantly.</p> <div class="hero-actions svelte-1uha8ag"><a href="https://github.com/doublej/ccom" class="btn btn-primary svelte-1uha8ag" target="_blank" rel="noopener">GitHub</a> <a href="#getting-started" class="btn btn-secondary svelte-1uha8ag">Get Started</a></div></div></section> <section class="install svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="install-box svelte-1uha8ag"><code class="svelte-1uha8ag">curl -o /usr/local/bin/ccom ... &amp;&amp; chmod +x /usr/local/bin/ccom</code> <button class="svelte-1uha8ag">${escape_html(copyLabel)}</button></div></div></section> <section class="demo svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="terminal svelte-1uha8ag"><div class="terminal-bar svelte-1uha8ag"><span class="dot red svelte-1uha8ag"></span> <span class="dot yellow svelte-1uha8ag"></span> <span class="dot green svelte-1uha8ag"></span> <span class="terminal-title svelte-1uha8ag">Terminal</span></div> <div class="terminal-body svelte-1uha8ag"><pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"><span class="prompt svelte-1uha8ag">$</span> ccom "list all files"

<span class="dim svelte-1uha8ag">─────────────────────────────</span>
  <span class="bold svelte-1uha8ag">Claude Command</span> <span class="dim svelte-1uha8ag">v1.0</span>
<span class="dim svelte-1uha8ag">─────────────────────────────</span>

  <span class="cyan svelte-1uha8ag">[1]</span> <span class="dim svelte-1uha8ag">List files in current directory</span>
      <span class="yellow svelte-1uha8ag">ls</span>

  <span class="cyan svelte-1uha8ag">[2]</span> <span class="dim svelte-1uha8ag">List files with details</span>
      <span class="yellow svelte-1uha8ag">ls -lah</span>

  <span class="cyan svelte-1uha8ag">[3]</span> <span class="dim svelte-1uha8ag">List files recursively</span>
      <span class="yellow svelte-1uha8ag">find . -type f</span>

<span class="green svelte-1uha8ag">▶</span> Run <span class="cyan svelte-1uha8ag">[1-3]</span> or <span class="dim svelte-1uha8ag">q</span>: <span class="cursor svelte-1uha8ag">2</span>

<span class="dim svelte-1uha8ag">$</span> <span class="bold svelte-1uha8ag">ls -lah</span>
</code></pre></div></div></div></section> <section class="features svelte-1uha8ag"><div class="container svelte-1uha8ag"><h2 class="svelte-1uha8ag">Features</h2> <div class="grid svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(features);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let feature = each_array[i];
    $$renderer.push(`<div class="feature-card svelte-1uha8ag"${attr_style(`animation-delay: ${stringify(i * 100)}ms`)}><h3 class="svelte-1uha8ag">${escape_html(feature.title)}</h3> <p class="svelte-1uha8ag">${escape_html(feature.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="getting-started svelte-1uha8ag" id="getting-started"><div class="container svelte-1uha8ag"><h2 class="svelte-1uha8ag">Getting Started</h2> <div class="steps svelte-1uha8ag"><!--[-->`);
  const each_array_1 = ensure_array_like(steps);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let step = each_array_1[i];
    $$renderer.push(`<div class="step svelte-1uha8ag"${attr_style(`animation-delay: ${stringify((i + 3) * 100)}ms`)}><div class="step-number svelte-1uha8ag">${escape_html(i + 1)}</div> <div class="step-content svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(step.title)}</h3> <p class="svelte-1uha8ag">${escape_html(step.description)}</p> `);
    if (step.code) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">${escape_html(step.code)}</code></pre>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="usage svelte-1uha8ag"><div class="container svelte-1uha8ag"><h2 class="svelte-1uha8ag">Usage</h2> <div class="usage-grid svelte-1uha8ag"><div class="usage-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Basic</h3> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">ccom "find large videos"</code></pre> <p class="svelte-1uha8ag">Describe what you want in plain English.</p></div> <div class="usage-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Fresh mode</h3> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">ccom -f "list files"</code></pre> <p class="svelte-1uha8ag">Bypass cache and get new suggestions.</p></div> <div class="usage-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Multi-word prompts</h3> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">ccom compress this folder</code></pre> <p class="svelte-1uha8ag">Quotes are optional for multi-word prompts.</p></div></div></div></section> <section class="how-it-works svelte-1uha8ag"><div class="container svelte-1uha8ag"><h2 class="svelte-1uha8ag">How It Works</h2> <div class="flow svelte-1uha8ag"><div class="flow-step svelte-1uha8ag"><div class="flow-icon svelte-1uha8ag">1</div> <p class="svelte-1uha8ag">You describe a task in natural language</p></div> <div class="flow-arrow svelte-1uha8ag">→</div> <div class="flow-step svelte-1uha8ag"><div class="flow-icon svelte-1uha8ag">2</div> <p class="svelte-1uha8ag">Claude AI generates 1–3 shell command options</p></div> <div class="flow-arrow svelte-1uha8ag">→</div> <div class="flow-step svelte-1uha8ag"><div class="flow-icon svelte-1uha8ag">3</div> <p class="svelte-1uha8ag">You pick one and it runs immediately</p></div></div> <div class="data-note svelte-1uha8ag"><p class="svelte-1uha8ag">Data is stored locally in <code class="svelte-1uha8ag">~/.ccom/</code>:</p> <ul class="svelte-1uha8ag"><li class="svelte-1uha8ag"><code class="svelte-1uha8ag">cache.json</code> — cached prompt results</li> <li class="svelte-1uha8ag"><code class="svelte-1uha8ag">history.jsonl</code> — full command history log</li></ul></div></div></section></main> <footer class="svelte-1uha8ag"><div class="container svelte-1uha8ag"><p><a href="https://github.com/doublej/ccom" target="_blank" rel="noopener" class="svelte-1uha8ag">GitHub</a> · MIT License</p></div></footer>`);
}
export {
  _page as default
};
