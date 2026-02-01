# ccom - Claude Command

Convert natural language to shell commands using Claude AI.

## Installation

```bash
# Download
curl -o /usr/local/bin/ccom https://raw.githubusercontent.com/jurrejan/ccom/main/ccom
chmod +x /usr/local/bin/ccom
```

Requires: `claude` CLI installed and authenticated.

## Usage

```bash
ccom "list all files"
ccom "find large videos"
ccom "compress this folder"
ccom -f "list files"  # bypass cache
ccom -w "latest ffmpeg syntax"  # web search enabled
```

## Features

- **Caching**: Repeated prompts return instant cached results
- **History**: All commands logged to `~/.ccom/history.jsonl`
- **Fresh mode**: Use `-f` to bypass cache and get new suggestions
- **Web search**: Use `-w` to let Claude search the web for answers

## Example

```
─────────────────────────────
  Claude Command v1.1
─────────────────────────────

  [1] List files in current directory
      ls

  [2] List files with details
      ls -lah

  [3] List files recursively
      find . -type f

▶ Run [1-3] or q:
```

## License

MIT
