# Kiro MCP Server Examples

This directory contains example configurations and usage patterns for the Kiro MCP Server.

## Configuration Examples

### Basic Configuration (mcp-config.json)

Add this to your MCP client's configuration file (e.g., `~/.kiro/settings/mcp.json` or Claude Desktop's config):

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "uvx",
      "args": ["kiro-mcp-server"],
      "disabled": false,
      "autoApprove": ["list_instructions", "get_system_instruction"]
    }
  }
}
```

### Local Development Configuration

If you're running from source:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "python",
      "args": ["-m", "kiro_mcp_server.server"],
      "disabled": false,
      "env": {
        "KIRO_SYSTEM_PATH": "/path/to/kiro/.kiro/system"
      }
    }
  }
}
```

## Usage Examples

Once configured, you can use the server in your MCP client:

### Listing Available Instructions

Use the `list_instructions` tool to see what's available:

```
Use the list_instructions tool
```

### Getting a Specific System Instruction

```
Use the get_system_instruction tool with instruction_type: "complete-instructions"
```

### Searching Instructions

```
Use the search_instructions tool with query: "MCP"
```

### Using Prompts

The server provides pre-configured prompts:

1. **kiro_assistant** - Full Kiro assistant configuration
2. **code_review** - Code review with Kiro's standards
3. **feature_development** - Feature development workflow

## Testing the Server

You can test the server is working by:

1. Checking the MCP Server view in your client
2. Trying to list instructions
3. Retrieving a system instruction document

## Troubleshooting

### Server doesn't start

- Check that `uvx` or `uv` is installed: `uv --version`
- Try running directly: `uvx kiro-mcp-server` (this will fail with stdio errors but confirms the package is accessible)

### Can't find system files

- Set the `KIRO_SYSTEM_PATH` environment variable to point to your `.kiro/system` directory
- Ensure you're running from within the Kiro repository or have the package properly installed

### Resources not showing up

- Check the MCP client logs for errors
- Verify the server is listed and enabled in your MCP configuration
- Try reconnecting the server from the MCP Server view
