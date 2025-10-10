# Kiro MCP Server

An MCP (Model Context Protocol) server that exposes Kiro's system prompts and instructions.

## Overview

This server provides access to Kiro's comprehensive system instructions, capabilities, guidelines, and quality standards through the Model Context Protocol. It allows AI assistants and other MCP clients to access and utilize Kiro's prompt engineering best practices.

## Features

- **Resources**: Access all Kiro system documentation files
- **Tools**: Query and retrieve specific system instructions
- **Prompts**: Pre-configured prompts for common Kiro workflows

## Installation

### Using uvx (Recommended)

```bash
uvx kiro-mcp-server
```

### Using pip

```bash
pip install kiro-mcp-server
```

### From source

```bash
cd mcp-server
pip install -e .
```

## Usage

### Configuration

Add to your MCP client configuration (e.g., Claude Desktop, Kiro):

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "uvx",
      "args": ["kiro-mcp-server"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Or if installed locally:

```json
{
  "mcpServers": {
    "kiro-prompts": {
      "command": "python",
      "args": ["-m", "kiro_mcp_server.server"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### Available Resources

The server exposes the following Kiro system documentation:

- `kiro://system/complete-instructions` - Complete Kiro system instructions
- `kiro://system/capabilities` - Kiro capabilities and features
- `kiro://system/guidelines` - Development guidelines
- `kiro://system/quality-standards` - Quality standards
- `kiro://system/response-style` - Response style guide
- `kiro://system/workflow-patterns` - Common workflow patterns

### Available Tools

- `get_system_instruction` - Retrieve specific system instruction by type
- `search_instructions` - Search across all system instructions
- `list_instructions` - List all available instruction types

### Available Prompts

- `kiro_assistant` - Set up an AI assistant with Kiro's system instructions
- `code_review` - Configure for code review with Kiro's standards
- `feature_development` - Configure for feature development workflow

## Development

```bash
# Install development dependencies
pip install -e ".[dev]"

# Run tests
pytest

# Run the server locally
python -m kiro_mcp_server.server
```

## License

See the main Kiro repository for license information.

## Contributing

Contributions are welcome! Please see the main Kiro repository for contribution guidelines.
