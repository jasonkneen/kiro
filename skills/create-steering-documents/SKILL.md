---
name: create-steering-documents
description: Create comprehensive steering documents for development projects. Generates project-specific standards, git workflows, and technology guidelines in .kiro/steering/ directory.
version: 1.0.0
license: MIT
compatibility:
  - Claude Code
  - Cursor
  - VS Code Copilot
  - Windsurf
metadata:
  category: project-setup
  complexity: intermediate
  triggers:
    - create steering documents
    - setup project standards
    - initialize kiro steering
    - project guidelines
---

# Create Steering Documents

Create comprehensive steering documents for a development project based on the project type and requirements.

## Usage

```
Create steering documents for [project description]
```

## Examples

- `Create steering documents for a React TypeScript e-commerce application`
- `Create steering documents for a Python Django REST API with PostgreSQL`
- `Create steering documents for a Node.js microservices architecture`
- `Create steering documents for a Vue.js component library`

## What Are Steering Documents?

Steering documents are contextual guidelines that influence how AI assistants approach development tasks. They contain project-specific standards, conventions, and best practices that help provide more relevant and consistent assistance.

### How They Work

1. **Always Included (Default)**: Documents without front-matter are included in every interaction
2. **File Match Conditional**: Documents with `inclusion: fileMatch` are included when specific files are in context
3. **Manual Inclusion**: Documents with `inclusion: manual` are only included when explicitly referenced

## Process

### 1. Project Analysis

First, analyze the project requirements and determine which steering documents are needed:

**For Frontend Projects (React, Vue, Angular):**
- Include: project-standards.md, git-workflow.md, frontend-standards.md, development-environment.md
- Consider: component-library.md, testing-strategy.md

**For Backend/API Projects (Node.js, Python, Java):**
- Include: project-standards.md, git-workflow.md, api-design.md, development-environment.md
- Consider: database-standards.md, security-guidelines.md

**For Full-Stack Projects:**
- Include: All core documents plus technology-specific ones
- Consider: deployment-standards.md, monitoring-guidelines.md

**For Library/Package Projects:**
- Include: project-standards.md, git-workflow.md, documentation-standards.md
- Consider: versioning-strategy.md, publishing-guidelines.md

### 2. Core Document Templates

#### project-standards.md

```markdown
# Project Standards and Guidelines

## Code Quality Standards
- Follow language-specific style guides (ESLint for JS/TS, Black for Python, etc.)
- Maintain consistent naming conventions across the codebase
- Write self-documenting code with clear variable and function names
- Include meaningful comments for complex business logic
- Keep functions small and focused on single responsibilities

## Testing Requirements
- Write unit tests for all business logic functions
- Maintain minimum 80% code coverage
- Include integration tests for API endpoints
- Write end-to-end tests for critical user flows
- Use descriptive test names that explain the scenario being tested

## Documentation Standards
- Update README.md for any significant changes
- Document API endpoints with clear examples
- Include setup and deployment instructions
- Maintain changelog for version releases
- Document architectural decisions in ADR format

## Security Practices
- Never commit secrets, API keys, or passwords
- Use environment variables for configuration
- Validate all user inputs
- Implement proper authentication and authorization
- Follow OWASP security guidelines

## Performance Guidelines
- Optimize database queries and avoid N+1 problems
- Implement caching where appropriate
- Use lazy loading for large datasets
- Monitor and profile performance regularly
- Consider scalability in architectural decisions
```

#### git-workflow.md

```markdown
# Git Workflow and Branching Strategy

## Branch Naming Convention
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-bug`
- Hotfixes: `hotfix/critical-issue-description`
- Releases: `release/version-number`

## Commit Message Format
Follow conventional commits format:
```
type(scope): description

[optional body]

[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

## Pull Request Guidelines
- Create PR from feature branch to main/develop
- Include clear description of changes
- Link related issues using keywords (fixes #123)
- Ensure all tests pass before requesting review
- Squash commits when merging to keep history clean

## Code Review Process
- At least one approval required before merge
- Review for code quality, security, and performance
- Check that tests cover new functionality
- Verify documentation is updated if needed
- Ensure no breaking changes without proper versioning
```

#### frontend-standards.md

```markdown
---
inclusion: fileMatch
fileMatchPattern: '*.tsx|*.jsx|*.vue|*.svelte'
---

# Frontend Development Standards

## Component Architecture
- Use functional components with hooks (React)
- Keep components small and focused
- Implement proper prop validation
- Use TypeScript for type safety
- Follow component composition patterns

## State Management
- Use local state for component-specific data
- Implement global state for shared application data
- Use proper state management libraries (Redux, Zustand, Pinia)
- Avoid prop drilling with context or state management

## Styling Guidelines
- Use CSS modules or styled-components for component styling
- Follow BEM methodology for CSS class naming
- Implement responsive design with mobile-first approach
- Use CSS custom properties for theming
- Maintain consistent spacing and typography scales

## Performance Optimization
- Implement code splitting and lazy loading
- Use React.memo or similar for expensive components
- Optimize images and assets
- Implement proper caching strategies
- Monitor bundle size and performance metrics

## Accessibility Standards
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation support
- Maintain proper color contrast ratios
- Test with screen readers
```

#### api-design.md

```markdown
---
inclusion: manual
---

# API Design Guidelines

## RESTful API Standards
- Use HTTP methods appropriately (GET, POST, PUT, DELETE, PATCH)
- Follow resource-based URL patterns: `/api/v1/users/{id}`
- Use plural nouns for resource collections
- Implement proper HTTP status codes
- Include API versioning in URL path

## Request/Response Format
- Use JSON for request and response bodies
- Follow consistent naming conventions (camelCase or snake_case)
- Include pagination for list endpoints
- Implement proper error response format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": ["Email is required", "Password too short"]
  }
}
```

## Authentication and Authorization
- Use JWT tokens for stateless authentication
- Implement proper token refresh mechanisms
- Use role-based access control (RBAC)
- Rate limit API endpoints to prevent abuse

## Documentation
- Use OpenAPI/Swagger for API documentation
- Include request/response examples
- Document all possible error responses
- Provide SDK or client library examples
```

#### development-environment.md

```markdown
---
inclusion: fileMatch
fileMatchPattern: 'package.json|requirements.txt|Dockerfile|docker-compose.yml'
---

# Development Environment Setup

## Local Development
- Use Node.js version specified in .nvmrc file
- Install dependencies with `npm ci` for consistent builds
- Use Docker for local database and service dependencies
- Run linting and formatting before committing changes

## Environment Variables
- Copy `.env.example` to `.env` for local development
- Never commit actual environment files
- Document all required environment variables in README
- Use different prefixes for different environments (DEV_, PROD_, etc.)

## Database Management
- Use migrations for all schema changes
- Include rollback scripts for migrations
- Seed data should be idempotent
- Backup database before major changes

## Build and Deployment
- Ensure builds are reproducible across environments
- Use multi-stage Docker builds for optimization
- Include health checks in containerized applications
- Document deployment procedures and rollback steps

## Debugging and Logging
- Use structured logging with appropriate log levels
- Include correlation IDs for request tracing
- Set up proper error monitoring and alerting
- Use debugger instead of console.log for development
```

### 3. Content Customization

**Language/Framework Specific Adaptations:**
- **JavaScript/TypeScript**: ESLint, Prettier, Jest, package.json scripts
- **Python**: Black, flake8, pytest, requirements.txt, virtual environments
- **Java**: Checkstyle, Maven/Gradle, JUnit, Spring Boot conventions
- **Go**: gofmt, go mod, testing patterns, project structure
- **Rust**: rustfmt, Cargo.toml, cargo test, clippy

**Project Scale Adaptations:**
- **Small Projects**: Lightweight processes, minimal tooling
- **Team Projects**: Code review requirements, shared standards
- **Enterprise**: Comprehensive security, compliance, documentation

**Domain Specific Considerations:**
- **E-commerce**: PCI compliance, performance, security
- **Healthcare**: HIPAA compliance, data privacy, audit trails
- **Finance**: Security standards, regulatory compliance
- **Open Source**: Contribution guidelines, licensing, community standards

### 4. File Reference Integration

Include relevant external files using the `#[[file:path]]` syntax:
- OpenAPI specifications for API projects
- Database schemas for backend projects
- Design system tokens for frontend projects
- Configuration files for environment setup

### 5. Quality Checklist

Before finalizing steering documents, ensure:
- [ ] All documents have appropriate front-matter for inclusion logic
- [ ] Guidelines are specific and actionable, not generic
- [ ] Examples are provided for complex concepts
- [ ] No conflicting standards between documents
- [ ] Security and performance considerations are included
- [ ] Documentation covers the full development lifecycle
- [ ] File references are correctly formatted and valid

## Output Structure

Create steering documents in the `.kiro/steering/` directory:

```
.kiro/steering/
├── project-standards.md      (always included)
├── git-workflow.md           (always included)
├── frontend-standards.md     (fileMatch: *.tsx,*.jsx)
├── api-design.md             (manual inclusion)
└── development-environment.md (fileMatch: package.json)
```

## Front-matter Options

```yaml
---
inclusion: always|fileMatch|manual
fileMatchPattern: 'glob-pattern'  # for fileMatch only
---
```

## Best Practices

### Do:
- Keep documents focused and specific
- Use clear, actionable language
- Include concrete examples
- Reference external specifications
- Update regularly as project evolves
- Use appropriate inclusion mechanisms

### Don't:
- Create overly broad or generic guidelines
- Duplicate information across multiple documents
- Include sensitive information or secrets
- Create conflicting standards
- Make documents too long or complex
