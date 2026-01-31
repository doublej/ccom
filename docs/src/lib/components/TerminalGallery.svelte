<script lang="ts">
	import type { Example } from '$lib/data/examples';

	interface Props {
		examples: Example[];
		typingSpeed?: number;
		pauseBetween?: number;
	}

	let { examples, typingSpeed = 40, pauseBetween = 2500 }: Props = $props();

	type Phase = 'typing' | 'options' | 'selecting' | 'executing' | 'pause';

	let currentIndex = $state(0);
	let phase: Phase = $state('typing');
	let typedChars = $state(0);
	let visible = $state(true);
	let timer: ReturnType<typeof setTimeout> | undefined;
	let reducedMotion = $state(false);

	const example = $derived(examples[currentIndex]);
	const fullPrompt = $derived(`$ ccom "${example.prompt}"`);
	const shownPrompt = $derived(phase === 'typing' ? fullPrompt.slice(0, typedChars) : fullPrompt);
	const promptPrefix = $derived(shownPrompt.slice(0, 2));
	const promptRest = $derived(shownPrompt.slice(2));
	const selectedCommand = $derived(example.options[example.selection - 1]?.command ?? '');
	const showOptions = $derived(phase === 'options' || phase === 'selecting' || phase === 'executing');
	const showSelection = $derived(phase === 'selecting' || phase === 'executing');

	$effect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = mq.matches;
		const handler = (e: MediaQueryListEvent) => (reducedMotion = e.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	});

	function schedule(fn: () => void, ms: number) {
		clearTimeout(timer);
		timer = setTimeout(fn, ms);
	}

	function advance() {
		visible = false;
		schedule(() => {
			currentIndex = (currentIndex + 1) % examples.length;
			typedChars = 0;
			phase = 'typing';
			visible = true;
		}, 200);
	}

	$effect(() => {
		if (reducedMotion) {
			typedChars = fullPrompt.length;
			phase = 'executing';
			schedule(advance, pauseBetween * 2);
			return () => clearTimeout(timer);
		}

		if (phase === 'typing') {
			if (typedChars < fullPrompt.length) {
				schedule(() => typedChars++, typingSpeed);
			} else {
				schedule(() => (phase = 'options'), 200);
			}
		} else if (phase === 'options') {
			schedule(() => (phase = 'selecting'), 1800);
		} else if (phase === 'selecting') {
			schedule(() => (phase = 'executing'), 500);
		} else if (phase === 'executing') {
			schedule(advance, 1500);
		}

		return () => clearTimeout(timer);
	});
</script>

<div class="terminal">
	<div class="terminal-bar">
		<span class="dot red"></span>
		<span class="dot yellow"></span>
		<span class="dot green"></span>
		<span class="terminal-title">
			{#each examples as _, i}
				<span class="indicator" class:active={i === currentIndex}></span>
			{/each}
		</span>
	</div>
	<div class="terminal-body" class:fade-out={!visible}>
		<pre><code><span class="prompt">{promptPrefix}</span>{promptRest}{#if phase === 'typing'}<span class="cursor">&nbsp;</span>{/if}</code></pre>
		{#if showOptions}
			<pre class="options"><code>
<span class="dim">─────────────────────────────</span>
  <span class="bold">Claude Command</span> <span class="dim">v1.0</span>
<span class="dim">─────────────────────────────</span>
{#each example.options as opt, i}

  <span class="cyan">[{i + 1}]</span> <span class="dim">{opt.description}</span>
      <span class="yellow">{opt.command}</span>{/each}

<span class="green">&#9654;</span> Run <span class="cyan">[1-{example.options.length}]</span> or <span class="dim">q</span>: {#if showSelection}<span class="cursor">{example.selection}</span>{/if}</code></pre>
		{/if}
		{#if phase === 'executing'}
			<pre><code>
<span class="dim">$</span> <span class="bold">{selectedCommand}</span></code></pre>
		{/if}
	</div>
</div>

<style>
	.terminal {
		max-width: 600px;
		margin: 0 auto;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid var(--border);
		background: #1e1e1e;
	}

	.terminal-bar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 14px;
		background: #2d2d2d;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f57; }
	.dot.yellow { background: #febc2e; }
	.dot.green { background: #28c840; }

	.terminal-title {
		flex: 1;
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-right: 36px;
	}

	.indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #555;
		transition: background 0.3s;
	}

	.indicator.active {
		background: #aaa;
	}

	.terminal-body {
		padding: 16px 20px;
		min-height: 220px;
		transition: opacity 0.2s;
	}

	.terminal-body.fade-out {
		opacity: 0;
	}

	.terminal-body pre {
		margin: 0;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.terminal-body code {
		font-size: 0.85rem;
		line-height: 1.7;
		color: #d4d4d4;
	}

	.prompt { color: #28c840; }
	.dim { color: #666; }
	.bold { color: #fff; font-weight: 600; }
	.cyan { color: #56b6c2; font-weight: 600; }
	.yellow { color: #e5c07b; }
	.green { color: #28c840; }
	.cursor {
		color: #fff;
		border-bottom: 2px solid #fff;
	}

	pre.options {
		margin-top: 4px;
	}

	@media (prefers-reduced-motion: reduce) {
		.terminal-body {
			transition: none;
		}
		.indicator {
			transition: none;
		}
	}
</style>
