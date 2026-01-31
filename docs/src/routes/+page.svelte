<script lang="ts">
	import { base } from '$app/paths';
	import TerminalGallery from '$lib/components/TerminalGallery.svelte';
	import { examples } from '$lib/data/examples';

	const features = [
		{
			title: 'Natural Language',
			description: 'Describe what you want in plain English. Claude AI translates your intent into the right shell command.'
		},
		{
			title: 'Smart Caching',
			description: 'Repeated prompts return instant cached results. No API calls wasted on commands you\'ve already asked for.'
		},
		{
			title: 'Multiple Options',
			description: 'Get 1\u20133 command suggestions ranked by relevance. Pick the one that fits, then run it directly.'
		},
		{
			title: 'Command History',
			description: 'Every executed command is logged to ~/.ccom/history.jsonl for review and auditing.'
		},
		{
			title: 'Fresh Mode',
			description: 'Use the -f flag to bypass cache and generate new suggestions when you need different options.'
		},
		{
			title: 'Interactive UI',
			description: 'Clean terminal interface with numbered options, color-coded output, and one-keystroke execution.'
		}
	];

	const steps = [
		{
			title: 'Install ccom',
			description: 'Requires Claude CLI installed and authenticated.',
			code: 'curl -o /usr/local/bin/ccom https://raw.githubusercontent.com/doublej/ccom/main/ccom\nchmod +x /usr/local/bin/ccom'
		},
		{
			title: 'Run your first command',
			description: 'Describe what you want to do and pick from the suggested commands.',
			code: 'ccom "list all files sorted by size"'
		}
	];

	let copyLabel = $state('Copy');

	function copyInstall() {
		navigator.clipboard.writeText(
			'curl -o /usr/local/bin/ccom https://raw.githubusercontent.com/doublej/ccom/main/ccom && chmod +x /usr/local/bin/ccom'
		);
		copyLabel = 'Copied!';
		setTimeout(() => (copyLabel = 'Copy'), 2000);
	}
</script>

<svelte:head>
	<title>ccom - Claude Command</title>
	<meta name="description" content="Convert natural language to shell commands using Claude AI." />
</svelte:head>

<main>
	<!-- Hero -->
	<section class="hero">
		<div class="container">
			<h1>ccom</h1>
			<p class="subtitle">Claude Command</p>
			<p class="description">
				Convert natural language to shell commands using Claude AI.
				Describe what you want, pick from suggested commands, and run them instantly.
			</p>
			<div class="hero-actions">
				<a href="https://github.com/doublej/ccom" class="btn btn-primary" target="_blank" rel="noopener">
					GitHub
				</a>
				<a href="#getting-started" class="btn btn-secondary">
					Get Started
				</a>
			</div>
		</div>
	</section>

	<!-- Install -->
	<section class="install">
		<div class="container">
			<div class="install-box">
				<code>curl -o /usr/local/bin/ccom ... && chmod +x /usr/local/bin/ccom</code>
				<button onclick={copyInstall}>{copyLabel}</button>
			</div>
		</div>
	</section>

	<!-- Demo -->
	<section class="demo">
		<div class="container">
			<TerminalGallery {examples} />
		</div>
	</section>

	<!-- Features -->
	<section class="features">
		<div class="container">
			<h2>Features</h2>
			<div class="grid">
				{#each features as feature, i}
					<div class="feature-card" style="animation-delay: {i * 100}ms">
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Getting Started -->
	<section class="getting-started" id="getting-started">
		<div class="container">
			<h2>Getting Started</h2>
			<div class="steps">
				{#each steps as step, i}
					<div class="step" style="animation-delay: {(i + 3) * 100}ms">
						<div class="step-number">{i + 1}</div>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.description}</p>
							{#if step.code}
								<pre><code>{step.code}</code></pre>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="usage">
		<div class="container">
			<h2>Usage</h2>
			<div class="usage-grid">
				<div class="usage-card">
					<h3>Basic</h3>
					<pre><code>ccom "find large videos"</code></pre>
					<p>Describe what you want in plain English.</p>
				</div>
				<div class="usage-card">
					<h3>Fresh mode</h3>
					<pre><code>ccom -f "list files"</code></pre>
					<p>Bypass cache and get new suggestions.</p>
				</div>
				<div class="usage-card">
					<h3>Multi-word prompts</h3>
					<pre><code>ccom compress this folder</code></pre>
					<p>Quotes are optional for multi-word prompts.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- How It Works -->
	<section class="how-it-works">
		<div class="container">
			<h2>How It Works</h2>
			<div class="flow">
				<div class="flow-step">
					<div class="flow-icon">1</div>
					<p>You describe a task in natural language</p>
				</div>
				<div class="flow-arrow">&rarr;</div>
				<div class="flow-step">
					<div class="flow-icon">2</div>
					<p>Claude AI generates 1&ndash;3 shell command options</p>
				</div>
				<div class="flow-arrow">&rarr;</div>
				<div class="flow-step">
					<div class="flow-icon">3</div>
					<p>You pick one and it runs immediately</p>
				</div>
			</div>
			<div class="data-note">
				<p>Data is stored locally in <code>~/.ccom/</code>:</p>
				<ul>
					<li><code>cache.json</code> &mdash; cached prompt results</li>
					<li><code>history.jsonl</code> &mdash; full command history log</li>
				</ul>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer>
	<div class="container">
		<p>
			<a href="https://github.com/doublej/ccom" target="_blank" rel="noopener">GitHub</a>
			&middot; MIT License
		</p>
	</div>
</footer>

<style>
	/* Layout */
	.container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
	}

	section {
		padding: var(--section-padding) 0;
	}

	h2 {
		font-size: 1.8rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-bottom: 2rem;
		text-align: center;
	}

	/* Hero */
	.hero {
		padding: 80px 0 40px;
		text-align: center;
		animation: fadeSlideUp 0.5s ease-out forwards;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 600;
		letter-spacing: -0.04em;
		font-family: 'DM Mono', monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: var(--text-tertiary);
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.15rem;
		color: var(--text-secondary);
		max-width: 560px;
		margin: 0 auto 2rem;
	}

	.hero-actions {
		display: flex;
		gap: 12px;
		justify-content: center;
	}

	.btn {
		display: inline-block;
		padding: 10px 24px;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: opacity 0.15s;
	}

	.btn:hover {
		opacity: 0.85;
	}

	.btn-primary {
		background: var(--accent);
		color: #fff;
	}

	.btn-secondary {
		background: var(--bg-secondary);
		color: var(--text-primary);
		border: 1px solid var(--border);
	}

	/* Install */
	.install {
		padding: 0 0 var(--section-padding);
		animation: fadeSlideUp 0.5s ease-out 0.15s forwards;
		opacity: 0;
	}

	.install-box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		background: var(--bg-code);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 14px 20px;
		max-width: 700px;
		margin: 0 auto;
	}

	.install-box code {
		font-size: 0.9rem;
		color: var(--text-secondary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.install-box button {
		background: var(--accent);
		color: #fff;
		border: none;
		border-radius: 4px;
		padding: 6px 14px;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		white-space: nowrap;
		font-family: 'Instrument Sans', system-ui, sans-serif;
		transition: opacity 0.15s;
	}

	.install-box button:hover {
		opacity: 0.85;
	}

	/* Demo */
	.demo {
		padding: 0 0 var(--section-padding);
		animation: fadeSlideUp 0.5s ease-out 0.3s forwards;
		opacity: 0;
	}

	/* Features */
	.features {
		animation: fadeSlideUp 0.5s ease-out 0.4s forwards;
		opacity: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--grid-gap);
	}

	.feature-card {
		background: var(--bg-secondary);
		padding: 24px;
		border: 1px solid var(--border);
		border-radius: 8px;
		animation: fadeSlideUp 0.5s ease-out forwards;
		opacity: 0;
	}

	.feature-card h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.feature-card p {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	/* Getting Started */
	.getting-started {
		animation: fadeSlideUp 0.5s ease-out 0.5s forwards;
		opacity: 0;
	}

	.steps {
		max-width: 700px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.step {
		display: flex;
		gap: 20px;
		animation: fadeSlideUp 0.5s ease-out forwards;
		opacity: 0;
	}

	.step-number {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--accent);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.9rem;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.3rem;
	}

	.step-content p {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
	}

	.step-content pre {
		background: var(--bg-code);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 12px 16px;
		overflow-x: auto;
	}

	.step-content code {
		font-size: 0.85rem;
		color: var(--text-primary);
	}

	/* Usage */
	.usage {
		animation: fadeSlideUp 0.5s ease-out 0.6s forwards;
		opacity: 0;
	}

	.usage-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--grid-gap);
	}

	.usage-card {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 24px;
	}

	.usage-card h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.usage-card pre {
		background: var(--bg-code);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 10px 14px;
		margin-bottom: 0.75rem;
		overflow-x: auto;
	}

	.usage-card code {
		font-size: 0.85rem;
	}

	.usage-card p {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	/* How it works */
	.how-it-works {
		animation: fadeSlideUp 0.5s ease-out 0.7s forwards;
		opacity: 0;
	}

	.flow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.flow-step {
		text-align: center;
		max-width: 200px;
	}

	.flow-icon {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		margin: 0 auto 0.5rem;
	}

	.flow-step p {
		font-size: 0.95rem;
		color: var(--text-secondary);
	}

	.flow-arrow {
		font-size: 1.5rem;
		color: var(--text-tertiary);
	}

	.data-note {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 20px 24px;
		max-width: 500px;
		margin: 0 auto;
	}

	.data-note p {
		margin-bottom: 0.5rem;
		font-size: 0.95rem;
	}

	.data-note ul {
		list-style: none;
		padding: 0;
	}

	.data-note li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		padding: 4px 0;
	}

	.data-note code {
		font-size: 0.85rem;
		background: var(--bg-code);
		padding: 2px 6px;
		border-radius: 3px;
	}

	/* Footer */
	footer {
		padding: 40px 0;
		text-align: center;
		color: var(--text-tertiary);
		font-size: 0.9rem;
	}

	footer a {
		color: var(--text-secondary);
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 1000px) {
		.grid, .usage-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 700px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.grid, .usage-grid {
			grid-template-columns: 1fr;
		}

		.flow {
			flex-direction: column;
		}

		.flow-arrow {
			transform: rotate(90deg);
		}

		.install-box {
			flex-direction: column;
		}

		.install-box code {
			white-space: normal;
			word-break: break-all;
			text-align: center;
		}
	}
</style>
