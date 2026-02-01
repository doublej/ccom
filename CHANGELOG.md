# Changelog

## v1.1

- Add `-w` / `--web` flag to enable web search when generating commands
- Skip all CLAUDE.md files via `--setting-sources ""` (already present since v1.0)

## v1.0

- Initial release
- Natural language to shell command conversion
- Caching with MD5 prompt hashing
- Command history logging to `~/.ccom/history.jsonl`
- Fresh mode (`-f`) to bypass cache
