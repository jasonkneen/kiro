---
name: task-breakdown
description: Convert technical designs into actionable, sequenced implementation tasks. Create clear coding tasks that enable incremental progress, respect dependencies, and provide a roadmap for systematic feature development.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: intermediate
  author: Kiro Team
  version: "1.0.0"
---

# Task Breakdown

Transform designs into actionable implementation plans. This skill teaches how to create well-structured task lists that enable efficient, systematic development.

## When to Use This Skill

Use task breakdown when:
- Design phase is complete and approved
- Ready to begin implementation
- Need to coordinate work across developers
- Want to track incremental progress
- Planning sprints or work assignments

## Task Structure

### Two-Level Hierarchy

```markdown
- [ ] 1. [Epic/Major Component]
- [ ] 1.1 [Specific implementation task]
  - [Implementation details]
  - [Files/components to create]
  - _Requirements: [Requirement references]_
- [ ] 1.2 [Next specific task]
  - [Details]
  - _Requirements: [References]_

- [ ] 2. [Next Epic/Major Component]
- [ ] 2.1 [Specific task]
```

### Task Specification Elements

Each task should include:
1. **Clear Objective:** What specific code to write/modify
2. **Implementation Details:** Files, components, functions
3. **Requirements Reference:** Which requirements this implements
4. **Completion Criteria:** How to know the task is done

## Step-by-Step Process

### Step 1: Analyze Design Components

Identify all implementation needs:
- Data models and validation
- Services and business logic
- API endpoints and handlers
- UI components
- Tests for each layer
- Integration points

### Step 2: Identify Dependencies

Map what needs to be built first:
- **Technical:** Code dependencies (models before services)
- **Logical:** Feature dependencies (login before profile)
- **Data:** What data must exist first

### Step 3: Sequence Tasks

Order tasks to:
- Respect dependencies
- Enable early validation
- Allow incremental testing
- Minimize blocking between tasks

### Step 4: Write Task Descriptions

For each task, specify:
```markdown
- [ ] X.Y [Task Title]
  - [What to implement]
  - [Files to create/modify]
  - [Key functionality]
  - [Tests to write]
  - _Requirements: [Req-1, Req-2]_
```

## Sequencing Strategies

### Strategy 1: Foundation-First

Build core infrastructure before features.

```markdown
1. Project setup and core interfaces
2. Data models and validation
3. Data access layer
4. Business logic services
5. API endpoints
6. Integration and wiring
```

**Best for:** New projects, complex systems

### Strategy 2: Feature-Slice (Vertical)

Build complete features end-to-end.

```markdown
1. User registration (complete flow)
2. User authentication (complete flow)
3. User profile management (complete flow)
4. Advanced features
```

**Best for:** MVP development, early validation

### Strategy 3: Risk-First

Tackle uncertain areas early.

```markdown
1. Most complex/uncertain components
2. External integrations
3. Core business logic
4. User interface
5. Polish and optimization
```

**Best for:** High uncertainty, proof-of-concepts

### Strategy 4: Hybrid (Recommended)

Combine approaches pragmatically.

```markdown
1. Minimal foundation (core interfaces)
2. High-risk/high-value feature slice
3. Expand foundation as needed
4. Additional feature slices
5. Integration and polish
```

## Task Categories

### Foundation Tasks
```markdown
- [ ] 1. Set up project foundation
- [ ] 1.1 Create project structure and interfaces
  - Set up directory structure
  - Define TypeScript interfaces for core types
  - Configure testing framework
  - _Requirements: 1.1_
```

### Data Layer Tasks
```markdown
- [ ] 2. Implement data layer
- [ ] 2.1 Create core data models
  - Implement User model with validation
  - Add database migrations
  - Write unit tests for validation
  - _Requirements: 2.1, 2.2_
```

### Business Logic Tasks
```markdown
- [ ] 3. Implement business logic
- [ ] 3.1 Create authentication service
  - Implement registration logic
  - Add password hashing
  - Create session management
  - Write unit tests
  - _Requirements: 1.2, 4.1_
```

### API Tasks
```markdown
- [ ] 4. Implement API layer
- [ ] 4.1 Create user endpoints
  - Implement POST /users endpoint
  - Add request validation
  - Write integration tests
  - _Requirements: 1.2, 2.3_
```

### Integration Tasks
```markdown
- [ ] 5. Integration and testing
- [ ] 5.1 Wire up components
  - Connect services to API layer
  - Implement middleware
  - Add end-to-end tests
  - _Requirements: 5.1_
```

## Writing Effective Tasks

### Good Task Example
```markdown
- [ ] 2.1 Create User model with validation
  - Implement User class with email, password, name fields
  - Add email validation (RFC 5322 format)
  - Add password validation (8+ chars, mixed case, numbers)
  - Write unit tests for valid/invalid scenarios
  - _Requirements: 1.2, 2.1_
```

### Poor Task Example
```markdown
- [ ] 2.1 Build user stuff
  - Make user things work
  - _Requirements: 1.2_
```

### Task Scope Guidelines

**Appropriate:** 2-4 hours of focused work

**Too Large:**
```markdown
- [ ] 1.1 Implement complete user management system
```

**Too Small:**
```markdown
- [ ] 1.1 Add semicolon to line 42
```

**Just Right:**
```markdown
- [ ] 1.1 Create User model with validation methods
```

## Dependency Management

### Types of Dependencies

**Technical Dependencies:**
```markdown
- [ ] 1.1 Create database connection ← Foundation
- [ ] 2.1 Create User model ← Depends on 1.1
- [ ] 3.1 Create UserService ← Depends on 2.1
```

**Logical Dependencies:**
```markdown
- [ ] 1.1 User registration ← Must exist first
- [ ] 2.1 User login ← Depends on 1.1
- [ ] 3.1 Password reset ← Depends on 2.1
```

### Handling Circular Dependencies

**Problem:**
```
UserService needs AuthService
AuthService needs UserService
```

**Solution - Interface Extraction:**
```markdown
- [ ] 1.1 Create IUserService and IAuthService interfaces
- [ ] 1.2 Implement UserService using IAuthService
- [ ] 1.3 Implement AuthService using IUserService
- [ ] 1.4 Wire up dependency injection
```

## Complete Example

```markdown
# Implementation Plan: User Authentication

- [ ] 1. Set up authentication foundation
- [ ] 1.1 Create project structure and interfaces
  - Set up directory structure for auth, models, API
  - Define TypeScript interfaces for User, Session, AuthRequest
  - Configure Jest for testing
  - _Requirements: 1.1_

- [ ] 1.2 Set up database and migrations
  - Configure database connection
  - Create user and session tables
  - Set up test database
  - _Requirements: 1.1, 2.1_

- [ ] 2. Implement core data models
- [ ] 2.1 Create User model with validation
  - Implement User class with email, password, profile fields
  - Add email format validation
  - Add password strength validation (8+ chars)
  - Write unit tests for all validation rules
  - _Requirements: 1.2, 2.1_

- [ ] 2.2 Create Session model
  - Implement Session class with token, expiration
  - Add session validation logic
  - Write unit tests for session management
  - _Requirements: 1.2, 4.1_

- [ ] 3. Create authentication services
- [ ] 3.1 Implement registration service
  - Create UserService with register method
  - Add password hashing with bcrypt
  - Implement duplicate email checking
  - Write unit tests for registration
  - _Requirements: 1.2_

- [ ] 3.2 Implement login service
  - Add login method with password verification
  - Implement JWT token generation
  - Create refresh token rotation
  - Write unit tests for login flow
  - _Requirements: 1.2, 4.1_

- [ ] 4. Create API endpoints
- [ ] 4.1 Implement registration endpoint
  - Create POST /auth/register endpoint
  - Add request validation middleware
  - Implement error responses
  - Write integration tests
  - _Requirements: 1.2, 2.3_

- [ ] 4.2 Implement login endpoint
  - Create POST /auth/login endpoint
  - Add authentication middleware
  - Implement logout functionality
  - Write integration tests
  - _Requirements: 1.2, 4.1_

- [ ] 5. Integration and security
- [ ] 5.1 Add security middleware
  - Implement rate limiting
  - Add CORS configuration
  - Create JWT validation middleware
  - Write security tests
  - _Requirements: 4.1, 2.3_

- [ ] 5.2 End-to-end testing
  - Create complete auth flow tests
  - Test error scenarios
  - Validate security measures
  - _Requirements: 1.2, 4.1_
```

## Quality Checklist

Before finalizing tasks:

**Completeness:**
- [ ] All design components have tasks
- [ ] All requirements are addressed
- [ ] Testing tasks included throughout
- [ ] Integration tasks connect components

**Clarity:**
- [ ] Each task has specific objective
- [ ] Files/components specified
- [ ] Requirements referenced
- [ ] Completion criteria clear

**Sequencing:**
- [ ] Dependencies respected
- [ ] Foundation before features
- [ ] Core before optional
- [ ] Integration after components

**Feasibility:**
- [ ] Tasks are 2-4 hours each
- [ ] Can be completed independently
- [ ] No external blockers
- [ ] Complexity increases gradually

## Common Pitfalls

1. **Tasks too abstract:** "Implement user management" vs specific actions
2. **Missing dependencies:** Tasks that can't be completed in sequence
3. **Non-coding tasks:** Include only implementation activities
4. **Monolithic tasks:** Break into 2-4 hour increments
5. **Missing tests:** Include testing in each task

## Task Execution Tips

**Before starting a task:**
1. Read task details thoroughly
2. Review referenced requirements
3. Check dependencies are complete
4. Plan implementation approach

**During implementation:**
1. Mark task as in-progress
2. Write tests alongside code
3. Test continuously
4. Document as you go

**Before marking complete:**
1. All tests pass
2. Requirements validated
3. Code reviewed
4. Documentation updated

## Next Steps

After completing task breakdown:
1. Review task list with team
2. Assign tasks to developers
3. Begin implementation in sequence
4. Track progress by marking tasks complete
5. Update tasks if implementation reveals gaps
