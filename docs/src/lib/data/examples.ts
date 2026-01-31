export interface Option {
	description: string;
	command: string;
}

export interface Example {
	prompt: string;
	options: Option[];
	selection: number;
}

export const examples: Example[] = [
	{
		prompt: 'speak hello',
		options: [
			{ description: 'Say hello using text-to-speech', command: 'say hello' },
			{ description: 'Say hello with Samantha voice', command: 'say -v Samantha hello' },
			{ description: 'Pipe text to speech', command: 'echo hello | say' }
		],
		selection: 1
	},
	{
		prompt: 'rename laptop-light to glow',
		options: [
			{ description: 'Rename file', command: 'mv laptop-light glow' },
			{ description: 'Rename with overwrite prompt', command: 'mv -i laptop-light glow' },
			{ description: 'Rename using rename utility', command: "rename 's/laptop-light/glow/' laptop-light" }
		],
		selection: 1
	},
	{
		prompt: 'list folders by date',
		options: [
			{ description: 'List directories sorted by modification date', command: 'ls -lt -d */ | head -20' },
			{ description: 'List directories sorted by date', command: 'ls -dt */' },
			{
				description: 'Find and sort directories by timestamp',
				command: "find . -maxdepth 1 -type d -printf '%T+ %p\\n' | sort -r"
			}
		],
		selection: 1
	},
	{
		prompt: 'upgrade all packages using bun',
		options: [
			{ description: 'Check for outdated packages', command: 'bun outdated' },
			{ description: 'Update all dependencies', command: 'bun update' },
			{ description: 'Update and save exact versions', command: 'bun update --save-exact' }
		],
		selection: 2
	},
	{
		prompt: 'fork this repo acme/poolsuite-cli',
		options: [
			{ description: 'Fork repository to your account', command: 'gh repo fork acme/poolsuite-cli' },
			{ description: 'Fork and clone locally', command: 'gh repo fork acme/poolsuite-cli --clone' },
			{ description: 'Fork and add remote', command: 'gh repo fork acme/poolsuite-cli --remote' }
		],
		selection: 1
	},
	{
		prompt: 'what ip addresses are in my ssh config',
		options: [
			{
				description: 'Extract IP addresses from SSH config',
				command: "grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' ~/.ssh/config"
			},
			{
				description: 'Print HostName values with awk',
				command: "awk '/HostName/ {print $2}' ~/.ssh/config"
			},
			{
				description: 'Extract HostName lines with sed',
				command: "sed -n 's/.*HostName //p' ~/.ssh/config"
			}
		],
		selection: 1
	},
	{
		prompt: 'zip store not compress this folder',
		options: [
			{ description: 'Create zip archive with no compression', command: 'zip -r -0 output.zip ./my-folder' },
			{
				description: 'Store zip excluding .DS_Store',
				command: "zip -r -0 archive.zip ./my-folder -x '*.DS_Store'"
			},
			{ description: 'Create uncompressed tar archive', command: 'tar -cf output.tar ./my-folder' }
		],
		selection: 1
	},
	{
		prompt: 'search for keyword segment, skip node_modules',
		options: [
			{
				description: 'Recursive grep excluding node_modules',
				command: "grep -r 'segment' --exclude-dir=node_modules ."
			},
			{
				description: 'Grep with line numbers',
				command: "grep -rn 'segment' --exclude-dir=node_modules ."
			},
			{
				description: 'Search with ripgrep',
				command: "rg 'segment' --glob '!node_modules'"
			}
		],
		selection: 1
	}
];
