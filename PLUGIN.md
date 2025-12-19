# Kiro Plugin for Claude Code

A Claude Code plugin providing spec-driven development skills following the [agentskills.io](https://agentskills.io) specification.

## Installation

### Method 1: Install from GitHub (Recommended)

```bash
# In Claude Code
/plugin marketplace add https://github.com/jasonkneen/kiro
/plugin install kiro-spec-driven@kiro-marketplace
```

### Method 2: Install from Local Clone

```bash
# Clone the repository
git clone https://github.com/jasonkneen/kiro.git
cd kiro

# In Claude Code (from parent directory)
/plugin marketplace add ./kiro
/plugin install kiro-spec-driven@kiro-marketplace
```

### Installation Scopes

```bash
# User scope (default) - available in all projects
/plugin install kiro-spec-driven@kiro-marketplace

# Project scope - shared with team via git
/plugin install kiro-spec-driven@kiro-marketplace --scope project

# Local scope - project-specific, gitignored
/plugin install kiro-spec-driven@kiro-marketplace --scope local
```

## Included Skills

Once installed, Claude will automatically use these skills when relevant:

| Skill | Description | Triggers |
|-------|-------------|----------|
| **spec-driven-development** | Complete three-phase methodology | "create a spec", "plan this feature", "spec-driven" |
| **requirements-engineering** | EARS format requirements | "requirements", "acceptance criteria", "user stories" |
| **design-documentation** | Technical architecture | "design document", "architecture", "technical design" |
| **task-breakdown** | Implementation planning | "break down tasks", "implementation plan", "task list" |
| **ai-prompting** | AI communication strategies | "prompt better", "AI communication", "improve prompts" |
| **quality-assurance** | Testing and validation | "quality", "testing strategy", "validation" |
| **troubleshooting** | Problem resolution | "debug", "troubleshoot", "issue with" |

## Usage Examples

### Start a New Spec

```
Create a spec for user authentication with OAuth support
```

Claude will automatically invoke the spec-driven-development skill.

### Write Requirements

```
Help me write requirements for a file upload feature using EARS format
```

Claude will use the requirements-engineering skill.

### Create Technical Design

```
Design the architecture for a notification system
```

Claude will use the design-documentation skill.

### Break Down Tasks

```
Break this design into implementation tasks
```

Claude will use the task-breakdown skill.

## Verifying Installation

```bash
# List installed plugins
/plugin

# Check plugin status
/plugin info kiro-spec-driven
```

## Updating

```bash
# Update to latest version
/plugin update kiro-spec-driven@kiro-marketplace
```

## Uninstalling

```bash
/plugin uninstall kiro-spec-driven
```

## Plugin Contents

```
kiro/
├── .claude-plugin/
│   ├── plugin.json          # Plugin manifest
│   └── marketplace.json     # Marketplace config
├── skills/
│   ├── spec-driven-development/
│   │   └── SKILL.md
│   ├── requirements-engineering/
│   │   └── SKILL.md
│   ├── design-documentation/
│   │   └── SKILL.md
│   ├── task-breakdown/
│   │   └── SKILL.md
│   ├── ai-prompting/
│   │   └── SKILL.md
│   ├── quality-assurance/
│   │   └── SKILL.md
│   └── troubleshooting/
│       └── SKILL.md
├── mcp-server/              # Optional MCP server
└── spec-process-guide/      # Full documentation
```

## License

MIT - See [LICENSE](LICENSE)
