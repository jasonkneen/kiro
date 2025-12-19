---
name: requirements-engineering
description: Transform vague feature ideas into clear, testable requirements using EARS format. Capture user stories, define acceptance criteria, identify edge cases, and validate completeness before moving to design.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: beginner
  author: Kiro Team
  version: "1.0.0"
---

# Requirements Engineering

Master the art of capturing what needs to be built before diving into how to build it. This skill teaches the EARS (Easy Approach to Requirements Syntax) format for creating clear, testable requirements.

## When to Use This Skill

Use requirements engineering when:
- Starting any new feature or project
- Clarifying ambiguous stakeholder requests
- Creating acceptance criteria for user stories
- Documenting system behavior for testing
- Ensuring all team members share understanding

## The EARS Format

EARS provides consistent patterns for writing requirements that are specific, testable, and unambiguous.

### Basic Patterns

**Event-Response (Most Common):**
```
WHEN [triggering event] THEN [system] SHALL [required response]
```

**Conditional Behavior:**
```
IF [precondition is met] THEN [system] SHALL [required response]
```

**Complex Conditions:**
```
WHEN [event] AND [additional condition] THEN [system] SHALL [response]
```

**Optional Conditions:**
```
WHEN [event] OR [alternative event] THEN [system] SHALL [response]
```

### Advanced Patterns

**State-Based:**
```
WHEN [system is in specific state] THEN [system] SHALL [behavior]
```

**Performance:**
```
WHEN [user action] THEN [system] SHALL [respond within X seconds/milliseconds]
```

**Security:**
```
IF [authentication condition] THEN [system] SHALL [security response]
```

## Step-by-Step Process

### Step 1: Capture User Stories

Format: **As a [role], I want [feature], so that [benefit]**

Focus on:
- Who is the user? (role)
- What do they want to accomplish? (feature)
- Why does it matter? (benefit/value)

**Example:**
```markdown
As a returning customer, I want to save my payment methods, so that I can checkout faster in the future.
```

### Step 2: Generate Acceptance Criteria

For each user story, define specific acceptance criteria using EARS:

**Example for payment methods:**
```markdown
**User Story:** As a returning customer, I want to save my payment methods, so that I can checkout faster.

**Acceptance Criteria:**
1. WHEN user adds a valid credit card THEN system SHALL securely store card details
2. WHEN user adds a card with invalid number THEN system SHALL display validation error
3. WHEN user has saved cards THEN system SHALL display list during checkout
4. WHEN user selects saved card THEN system SHALL pre-fill payment form
5. WHEN user deletes saved card THEN system SHALL remove card from list
6. IF user is not authenticated THEN system SHALL redirect to login before saving card
7. WHEN user adds card THEN system SHALL mask all but last 4 digits in display
```

### Step 3: Identify Edge Cases

For each requirement, ask:
- What if the input is empty/null?
- What if the input is at boundary values?
- What if the operation fails?
- What if the user is not authorized?
- What if there are concurrent operations?

**Edge case patterns:**
```markdown
**Error Handling:**
- WHEN [operation fails] THEN system SHALL [display error / retry / log]

**Boundary Conditions:**
- WHEN [value equals minimum/maximum] THEN system SHALL [specific behavior]

**Concurrent Access:**
- WHEN [multiple users access same resource] THEN system SHALL [conflict resolution]

**Empty States:**
- WHEN [collection is empty] THEN system SHALL [display empty state message]
```

### Step 4: Validate Requirements

Use this checklist:

**Completeness:**
- [ ] All user roles identified and addressed
- [ ] Normal flow scenarios covered
- [ ] Edge cases documented
- [ ] Error cases handled
- [ ] Business rules captured

**Clarity:**
- [ ] Each requirement uses precise language
- [ ] No ambiguous terms (fast, easy, user-friendly)
- [ ] Technical jargon avoided or defined
- [ ] Expected behaviors are specific

**Consistency:**
- [ ] EARS format used throughout
- [ ] Terminology consistent across requirements
- [ ] No contradictory requirements
- [ ] Similar scenarios handled similarly

**Testability:**
- [ ] Each requirement can be verified
- [ ] Success criteria are observable
- [ ] Inputs and expected outputs specified
- [ ] Performance requirements are measurable

## Common Mistakes to Avoid

### Mistake 1: Vague Requirements
**Bad:** "System should be fast"
**Good:** "WHEN user submits search THEN system SHALL return results within 2 seconds"

### Mistake 2: Implementation Details
**Bad:** "System shall use Redis for caching"
**Good:** "WHEN user requests frequently accessed data THEN system SHALL return cached results"

### Mistake 3: Missing Error Cases
**Bad:** Only documenting happy path
**Good:** Include WHEN/IF statements for all error conditions

### Mistake 4: Untestable Requirements
**Bad:** "System should be user-friendly"
**Good:** "WHEN new user completes onboarding THEN system SHALL require no more than 3 clicks to reach main dashboard"

### Mistake 5: Conflicting Requirements
**Bad:** Requirements that contradict each other
**Good:** Review all requirements together, resolve conflicts explicitly

## Examples

### Example 1: File Upload Feature

```markdown
**User Story:** As a user, I want to upload files, so that I can share documents with my team.

**Acceptance Criteria:**
1. WHEN user selects file under 10MB THEN system SHALL accept file for upload
2. WHEN user selects file over 10MB THEN system SHALL display "file too large (max 10MB)" error
3. WHEN user selects unsupported file type THEN system SHALL display "unsupported format" error with list of allowed types
4. WHEN upload is in progress THEN system SHALL display progress indicator with percentage
5. WHEN upload completes successfully THEN system SHALL display success message with file link
6. WHEN upload fails due to network error THEN system SHALL display retry option
7. IF user is not authenticated THEN system SHALL redirect to login before upload
8. WHEN user uploads file with same name as existing file THEN system SHALL prompt for rename or replace

**Supported File Types:** PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, GIF
**Maximum File Size:** 10MB
**Maximum Files Per Upload:** 5
```

### Example 2: Search Feature

```markdown
**User Story:** As a customer, I want to search products, so that I can find items quickly.

**Acceptance Criteria:**
1. WHEN user enters search term THEN system SHALL display matching products
2. WHEN search returns results THEN system SHALL show result count
3. WHEN search returns no results THEN system SHALL display "no products found" with suggestions
4. WHEN user searches with special characters THEN system SHALL sanitize input and search
5. WHEN user submits empty search THEN system SHALL display validation message
6. WHEN results exceed 20 items THEN system SHALL paginate with 20 items per page
7. WHEN user searches THEN system SHALL return results within 2 seconds
8. WHEN user types in search box THEN system SHALL show autocomplete suggestions after 3 characters

**Search Fields:** Product name, description, category, SKU
**Minimum Search Length:** 2 characters
```

## Requirements Document Template

```markdown
# Requirements Document: [Feature Name]

## Overview
[Brief description of the feature and its purpose]

## User Roles
- [Role 1]: [Description of this user type]
- [Role 2]: [Description of this user type]

## Requirements

### Requirement 1: [Name]
**User Story:** As a [role], I want [feature], so that [benefit]

**Acceptance Criteria:**
1. WHEN [event] THEN system SHALL [response]
2. IF [condition] THEN system SHALL [response]
3. WHEN [event] AND [condition] THEN system SHALL [response]

**Edge Cases:**
- [Edge case 1 and how it's handled]
- [Edge case 2 and how it's handled]

### Requirement 2: [Name]
[Continue pattern...]

## Non-Functional Requirements
- **Performance:** [Specific metrics]
- **Security:** [Security requirements]
- **Accessibility:** [Accessibility standards]

## Out of Scope
- [Items explicitly not included in this feature]

## Open Questions
- [Questions that need stakeholder input]
```

## Next Steps

After completing requirements:
1. Review with stakeholders for accuracy
2. Get explicit approval before proceeding
3. Move to Design Phase to create technical architecture
4. Use requirements as foundation for acceptance testing
