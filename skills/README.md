# Kiro Skills

A collection of Claude Code skills following the [agentskills.io](https://agentskills.io) specification for spec-driven development.

## Available Skills

| Skill | Description | Complexity |
|-------|-------------|------------|
| [spec-driven-development](./spec-driven-development/) | Master methodology combining all three phases | Intermediate |
| [requirements-engineering](./requirements-engineering/) | EARS format requirements and acceptance criteria | Beginner |
| [design-documentation](./design-documentation/) | Technical architecture and component design | Intermediate |
| [task-breakdown](./task-breakdown/) | Sequenced implementation task planning | Intermediate |
| [ai-prompting](./ai-prompting/) | Effective AI communication strategies | Beginner |
| [quality-assurance](./quality-assurance/) | Testing and validation techniques | Intermediate |
| [troubleshooting](./troubleshooting/) | Diagnosing and resolving common issues | Intermediate |
| [create-steering-documents](./create-steering-documents/) | Generate .kiro/steering/ project guidelines | Intermediate |

## Installation

### Claude Code

Skills can be referenced directly from the repository:

```bash
# Clone the repository
git clone https://github.com/jasonkneen/kiro.git

# Reference skills in your project
# Skills are in the /skills directory
```

### Manual Installation

Copy the desired skill folder to your project's `.claude/skills/` directory:

```bash
cp -r kiro/skills/spec-driven-development .claude/skills/
```

## Skill Format

Each skill follows the agentskills.io SKILL.md format:

```yaml
---
name: skill-name
description: What this skill does (up to 1024 chars)
license: MIT
compatibility: Claude Code, Cursor, VS Code
metadata:
  category: methodology
  complexity: beginner|intermediate|advanced
---

# Skill Name

[Instructions for the agent to follow]
```

## Quick Start

1. **New to specs?** Start with [spec-driven-development](./spec-driven-development/)
2. **Just need requirements?** Use [requirements-engineering](./requirements-engineering/)
3. **Improving AI results?** Try [ai-prompting](./ai-prompting/)
4. **Having issues?** Check [troubleshooting](./troubleshooting/)

## Validation

Run the validation script to check all skills:

```bash
./scripts/validate-skills.sh
```

## Contributing

To add a new skill:

1. Create a new directory under `skills/`
2. Add a `SKILL.md` file with proper frontmatter
3. Run validation to ensure format compliance
4. Submit a pull request

## License

MIT - See [LICENSE](../LICENSE)
