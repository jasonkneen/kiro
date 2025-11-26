"""Basic tests for the MCP server."""

import pytest
from pathlib import Path
import sys

# Add src to path
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from kiro_mcp_server.server import (
    get_system_path,
    read_system_file,
    search_in_content,
    SYSTEM_FILES,
)


def test_get_system_path():
    """Test that we can find the system path."""
    path = get_system_path()
    assert path.exists(), f"System path does not exist: {path}"
    assert path.is_dir(), f"System path is not a directory: {path}"


def test_system_files_exist():
    """Test that all system files exist."""
    system_path = get_system_path()
    for key, filename in SYSTEM_FILES.items():
        file_path = system_path / filename
        assert file_path.exists(), f"System file does not exist: {filename}"


def test_read_system_file():
    """Test reading a system file."""
    content = read_system_file("complete-instructions.md")
    assert len(content) > 0, "Content should not be empty"
    assert "Kiro" in content, "Content should mention Kiro"


def test_search_in_content():
    """Test searching in content."""
    content = """Line 1
Line 2 with MCP
Line 3
Line 4 with MCP server
Line 5"""
    
    matches = search_in_content("MCP", content)
    assert len(matches) == 2, "Should find 2 matches"
    assert "Line 2 with MCP" in matches[0]
    assert "Line 4 with MCP server" in matches[1]


def test_search_case_insensitive():
    """Test that search is case insensitive."""
    content = "This is a test with MCP and mcp"
    matches = search_in_content("mcp", content)
    assert len(matches) == 1, "Should find the line with both cases"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
