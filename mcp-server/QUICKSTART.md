# Kiro MCP Server - Quick Start Guide

Get started with the Kiro MCP Server in 5 minutes!

## What is it?

The Kiro MCP Server exposes Kiro's system prompts and instructions through the Model Context Protocol (MCP). This allows any MCP-compatible AI assistant (like Claude Desktop, Kiro itself, or other tools) to access and use Kiro's prompt engineering best practices.

## Installation

### Option 1: Using uvx (Recommended)

```bash
# Install uv if you haven't already
# macOS/Linux:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Then just configure the server (it will be downloaded automatically)
# See configuration below
```

### Option 2: From PyPI

```bash
pip install kiro-mcp-server
```

### Option 3: From Source

```bash
cd mcp-server
pip install -e .
```

## Configuration

### For Kiro

Add to `.kiro/settings/mcp.json` or `~/.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "uvx",
      "args": ["kiro-mcp-server"],
      "disabled": false,
      "autoApprove": ["list_instructions"]
    }
  }
}
```

### For Claude Desktop

Edit your Claude Desktop config file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "uvx",
      "args": ["kiro-mcp-server"]
    }
  }
}
```

### For Development

If running from the Kiro repository:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "python",
      "args": ["-m", "kiro_mcp_server.server"],
      "env": {
        "KIRO_SYSTEM_PATH": "/absolute/path/to/kiro/.kiro/system"
      }
    }
  }
}
```

## Usage

Once configured, you can:

### 1. Access Kiro's System Instructions

**List all available instructions:**
```
Use the list_instructions tool
```

**Get a specific instruction:**
```
Use the get_system_instruction tool with instruction_type: "complete-instructions"
```

### 2. Search Instructions

```
Use the search_instructions tool with query: "MCP"
```

### 3. Use Pre-configured Prompts

**Set up as a Kiro assistant:**
```
Use the kiro_assistant prompt
```

**Configure for code review:**
```
Use the code_review prompt
```

**Configure for feature development:**
```
Use the feature_development prompt
```

## Available Resources

Access via MCP resources (read-only):

- `kiro://system/complete-instructions` - Full Kiro system instructions
- `kiro://system/capabilities` - Kiro's capabilities and features
- `kiro://system/guidelines` - Development guidelines
- `kiro://system/quality-standards` - Quality standards
- `kiro://system/response-style` - Response style guide
- `kiro://system/workflow-patterns` - Common workflow patterns

## Troubleshooting

### Server doesn't show up

1. Restart your MCP client (Kiro, Claude Desktop, etc.)
2. Check the MCP Server view to see if it's listed
3. Look for error messages in the client logs

### Can't install uvx

See the [uv installation guide](https://docs.astral.sh/uv/getting-started/installation/)

### Server can't find system files

Set the `KIRO_SYSTEM_PATH` environment variable in your config:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "uvx",
      "args": ["kiro-mcp-server"],
      "env": {
        "KIRO_SYSTEM_PATH": "/path/to/kiro/.kiro/system"
      }
    }
  }
}
```

## Next Steps

- Read the [full documentation](README.md)
- Check out the [examples](examples/README.md)
- Explore the [source code](src/kiro_mcp_server/server.py)

## Support

For issues or questions:
- Open an issue on the [Kiro repository](https://github.com/jasonkneen/kiro)
- Check the MCP documentation at [modelcontextprotocol.io](https://modelcontextprotocol.io)
