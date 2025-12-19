---
name: spec-driven-development
description: Systematic three-phase approach to feature development using Requirements, Design, and Tasks phases. Transforms vague feature ideas into well-defined, implementable solutions that reduce ambiguity, improve quality, and enable effective AI collaboration.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: intermediate
  author: Kiro Team
  version: "1.0.0"
---

# Spec-Driven Development

A comprehensive methodology for systematic software feature development that ensures quality, maintainability, and successful delivery through structured planning.

## When to Use This Skill

**Ideal scenarios:**
- Complex features with multiple components, integrations, or user interactions
- High-stakes projects where rework costs are significant
- Team collaboration requiring shared understanding
- AI-assisted development where clear structure improves output quality
- Knowledge preservation for future maintainers

**Less suitable:**
- Simple bug fixes with obvious solutions
- Experimental prototypes for rapid iteration
- Time-critical hotfixes requiring immediate action
- Well-established patterns with minimal ambiguity

## The Three-Phase Workflow

### Phase 1: Requirements Gathering

**Purpose:** Transform vague feature ideas into clear, testable requirements

**Process:**
1. Capture user stories expressing value and purpose
2. Define acceptance criteria using EARS format (Easy Approach to Requirements Syntax)
3. Identify edge cases and constraints
4. Validate completeness and feasibility

**EARS Format Patterns:**
```
WHEN [event] THEN [system] SHALL [response]
IF [precondition] THEN [system] SHALL [response]
WHEN [event] AND [condition] THEN [system] SHALL [response]
```

**Example:**
```markdown
**User Story:** As a new user, I want to create an account, so that I can access personalized features.

**Acceptance Criteria:**
1. WHEN user provides valid email and password THEN system SHALL create new account
2. WHEN user provides existing email THEN system SHALL display "email already registered" error
3. WHEN user provides password shorter than 8 characters THEN system SHALL display "password too short" error
4. WHEN account creation succeeds THEN system SHALL send confirmation email
```

### Phase 2: Design Documentation

**Purpose:** Create a comprehensive technical plan for implementation

**Process:**
1. Research technical approaches and constraints
2. Define system architecture and component interactions
3. Specify data models and interfaces
4. Plan error handling and testing strategies

**Design Document Structure:**
```markdown
## Overview
[High-level summary of approach]

## Architecture
[System components and their relationships]

## Components and Interfaces
[Detailed component descriptions]

## Data Models
[Data structures and validation rules]

## Error Handling
[Error scenarios and response strategies]

## Testing Strategy
[Testing approach for different layers]
```

**Decision Documentation:**
```markdown
### Decision: [Title]
**Context:** [Situation requiring decision]
**Options Considered:**
1. [Option 1] - Pros: [benefits] / Cons: [drawbacks]
2. [Option 2] - Pros: [benefits] / Cons: [drawbacks]
**Decision:** [Chosen option]
**Rationale:** [Why this was selected]
```

### Phase 3: Task Planning

**Purpose:** Break design into actionable, sequential implementation steps

**Process:**
1. Convert design elements into specific coding tasks
2. Sequence tasks to enable incremental progress
3. Define clear objectives and completion criteria
4. Reference requirements for traceability

**Task Structure:**
```markdown
- [ ] 1. [Epic/Major Component]
- [ ] 1.1 [Specific implementation task]
  - [Implementation details]
  - [Files/components to create]
  - _Requirements: [Requirement references]_
```

**Task Sequencing Strategies:**
- **Foundation-First:** Core interfaces before dependent components
- **Feature-Slice:** End-to-end vertical slices for early validation
- **Risk-First:** Tackle uncertain areas early
- **Hybrid:** Combine approaches based on project needs

## Quality Checklists

### Requirements Checklist
- [ ] All user roles identified and addressed
- [ ] Normal, edge, and error cases covered
- [ ] Requirements are testable and measurable
- [ ] No conflicting requirements
- [ ] EARS format used consistently

### Design Checklist
- [ ] All requirements addressed in design
- [ ] Component responsibilities well-defined
- [ ] Interfaces between components specified
- [ ] Error handling covers expected failures
- [ ] Security considerations addressed

### Tasks Checklist
- [ ] All design components have implementation tasks
- [ ] Tasks ordered to respect dependencies
- [ ] Each task produces testable code
- [ ] Requirements references included
- [ ] Scope is appropriate (2-4 hours each)

## Integration with AI Workflows

**For Claude Code / AI Assistants:**

1. **Start with context:** Provide project background, constraints, and goals
2. **Work in phases:** Complete requirements before design, design before tasks
3. **Iterate:** Refine outputs through conversation rather than single requests
4. **Validate:** Ask AI to review outputs against checklists
5. **Trace:** Maintain links between requirements, design, and tasks

**Example prompt for starting a spec:**
```
I'm working on [project context]. We need to add [feature description].

Context:
- Technology: [stack]
- Users: [target audience]
- Constraints: [key limitations]

Please help me develop requirements using the EARS format, starting with user stories and acceptance criteria.
```

## Common Pitfalls to Avoid

1. **Skipping phases:** Each phase builds on the previous; shortcuts create problems
2. **Vague requirements:** "System should be fast" vs specific, measurable criteria
3. **Implementation details in requirements:** Focus on what, not how
4. **Over-engineering design:** Solve current requirements, not hypothetical future ones
5. **Monolithic tasks:** Break down into 2-4 hour increments
6. **Missing error cases:** Always consider what happens when things go wrong

## Next Steps

After completing a spec:
1. Begin implementation following task sequence
2. Track progress by marking tasks complete
3. Update spec if implementation reveals gaps
4. Validate completed work against requirements
5. Document learnings for future specs
