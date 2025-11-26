"""MCP server implementation for Kiro system prompts."""

import asyncio
import os
from pathlib import Path
from typing import Any

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import (
    Resource,
    Tool,
    TextContent,
    ImageContent,
    EmbeddedResource,
    Prompt,
    PromptMessage,
    GetPromptResult,
)


# Get the path to the system instructions
def get_system_path() -> Path:
    """Get the path to Kiro's system instructions."""
    # When installed, this will be relative to the package
    # When in development, navigate to the repo root
    current_file = Path(__file__).resolve()
    # Try to find .kiro/system from the package location
    search_path = current_file.parent
    for _ in range(5):  # Search up to 5 levels
        candidate = search_path / ".kiro" / "system"
        if candidate.exists():
            return candidate
        search_path = search_path.parent
    
    # Fallback: use environment variable if set
    if "KIRO_SYSTEM_PATH" in os.environ:
        return Path(os.environ["KIRO_SYSTEM_PATH"])
    
    # Last resort: assume we're in the repo
    repo_root = current_file.parent.parent.parent.parent
    return repo_root / ".kiro" / "system"


# System instruction files
SYSTEM_FILES = {
    "complete-instructions": "complete-instructions.md",
    "capabilities": "capabilities.md",
    "guidelines": "guidelines.md",
    "quality-standards": "quality-standards.md",
    "response-style": "response-style.md",
    "workflow-patterns": "workflow-patterns.md",
}


def read_system_file(filename: str) -> str:
    """Read a system instruction file."""
    system_path = get_system_path()
    file_path = system_path / filename
    if not file_path.exists():
        raise FileNotFoundError(f"System file not found: {filename}")
    return file_path.read_text(encoding="utf-8")


def search_in_content(query: str, content: str) -> list[str]:
    """Search for query in content and return matching lines with context."""
    lines = content.split("\n")
    matches = []
    query_lower = query.lower()
    
    for i, line in enumerate(lines):
        if query_lower in line.lower():
            # Add context: previous line, matching line, next line
            context_start = max(0, i - 1)
            context_end = min(len(lines), i + 2)
            context = "\n".join(lines[context_start:context_end])
            matches.append(f"...{context}...")
    
    return matches


# Create the server instance
server = Server("kiro-mcp-server")


@server.list_resources()
async def list_resources() -> list[Resource]:
    """List available Kiro system instruction resources."""
    resources = []
    for key, filename in SYSTEM_FILES.items():
        resources.append(
            Resource(
                uri=f"kiro://system/{key}",
                name=f"Kiro System: {key.replace('-', ' ').title()}",
                mimeType="text/markdown",
                description=f"Kiro system instructions: {key}",
            )
        )
    return resources


@server.read_resource()
async def read_resource(uri: str) -> str:
    """Read a Kiro system instruction resource."""
    if not uri.startswith("kiro://system/"):
        raise ValueError(f"Unknown resource URI: {uri}")
    
    key = uri.replace("kiro://system/", "")
    if key not in SYSTEM_FILES:
        raise ValueError(f"Unknown system instruction: {key}")
    
    return read_system_file(SYSTEM_FILES[key])


@server.list_tools()
async def list_tools() -> list[Tool]:
    """List available tools."""
    return [
        Tool(
            name="get_system_instruction",
            description="Retrieve a specific Kiro system instruction document",
            inputSchema={
                "type": "object",
                "properties": {
                    "instruction_type": {
                        "type": "string",
                        "enum": list(SYSTEM_FILES.keys()),
                        "description": "The type of system instruction to retrieve",
                    }
                },
                "required": ["instruction_type"],
            },
        ),
        Tool(
            name="search_instructions",
            description="Search across all Kiro system instructions for specific content",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query to find in system instructions",
                    }
                },
                "required": ["query"],
            },
        ),
        Tool(
            name="list_instructions",
            description="List all available Kiro system instruction types",
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
    ]


@server.call_tool()
async def call_tool(name: str, arguments: Any) -> list[TextContent]:
    """Handle tool calls."""
    if name == "get_system_instruction":
        instruction_type = arguments["instruction_type"]
        if instruction_type not in SYSTEM_FILES:
            return [TextContent(type="text", text=f"Error: Unknown instruction type: {instruction_type}")]
        
        content = read_system_file(SYSTEM_FILES[instruction_type])
        return [TextContent(type="text", text=content)]
    
    elif name == "search_instructions":
        query = arguments["query"]
        results = []
        
        for key, filename in SYSTEM_FILES.items():
            content = read_system_file(filename)
            matches = search_in_content(query, content)
            if matches:
                results.append(f"\n## Found in {key}:\n" + "\n\n".join(matches))
        
        if not results:
            return [TextContent(type="text", text=f"No matches found for query: {query}")]
        
        result_text = "\n".join(results)
        return [TextContent(type="text", text=result_text)]
    
    elif name == "list_instructions":
        instruction_list = "\n".join([f"- {key}: {filename}" for key, filename in SYSTEM_FILES.items()])
        return [TextContent(type="text", text=f"Available Kiro system instructions:\n\n{instruction_list}")]
    
    else:
        return [TextContent(type="text", text=f"Error: Unknown tool: {name}")]


@server.list_prompts()
async def list_prompts() -> list[Prompt]:
    """List available prompts."""
    return [
        Prompt(
            name="kiro_assistant",
            description="Configure an AI assistant with Kiro's complete system instructions",
            arguments=[],
        ),
        Prompt(
            name="code_review",
            description="Set up for code review using Kiro's quality standards",
            arguments=[],
        ),
        Prompt(
            name="feature_development",
            description="Configure for feature development with Kiro's workflow patterns",
            arguments=[],
        ),
    ]


@server.get_prompt()
async def get_prompt(name: str, arguments: dict[str, str] | None) -> GetPromptResult:
    """Get a specific prompt."""
    if name == "kiro_assistant":
        complete_instructions = read_system_file(SYSTEM_FILES["complete-instructions"])
        return GetPromptResult(
            description="Kiro AI Assistant Configuration",
            messages=[
                PromptMessage(
                    role="user",
                    content=TextContent(
                        type="text",
                        text=f"Please configure yourself as a Kiro AI assistant using these system instructions:\n\n{complete_instructions}",
                    ),
                )
            ],
        )
    
    elif name == "code_review":
        quality_standards = read_system_file(SYSTEM_FILES["quality-standards"])
        guidelines = read_system_file(SYSTEM_FILES["guidelines"])
        return GetPromptResult(
            description="Code Review Configuration",
            messages=[
                PromptMessage(
                    role="user",
                    content=TextContent(
                        type="text",
                        text=f"Please review code using these standards:\n\n# Quality Standards\n{quality_standards}\n\n# Guidelines\n{guidelines}",
                    ),
                )
            ],
        )
    
    elif name == "feature_development":
        workflow_patterns = read_system_file(SYSTEM_FILES["workflow-patterns"])
        capabilities = read_system_file(SYSTEM_FILES["capabilities"])
        return GetPromptResult(
            description="Feature Development Configuration",
            messages=[
                PromptMessage(
                    role="user",
                    content=TextContent(
                        type="text",
                        text=f"Please help with feature development using these patterns:\n\n# Workflow Patterns\n{workflow_patterns}\n\n# Capabilities\n{capabilities}",
                    ),
                )
            ],
        )
    
    else:
        raise ValueError(f"Unknown prompt: {name}")


async def main():
    """Main entry point for the server."""
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            server.create_initialization_options(),
        )


if __name__ == "__main__":
    asyncio.run(main())
