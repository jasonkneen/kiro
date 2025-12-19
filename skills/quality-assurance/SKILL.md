---
name: quality-assurance
description: Comprehensive testing and validation strategies for spec-driven development. Learn phase-specific validation techniques, quality gates, and testing approaches to ensure high-quality implementation.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: intermediate
  author: Kiro Team
  version: "1.0.0"
---

# Quality Assurance

Ensure quality throughout the spec-driven development process with validation techniques, quality gates, and testing strategies.

## When to Use This Skill

Use quality assurance practices when:
- Completing any spec phase (requirements, design, tasks)
- Transitioning between phases
- Implementing features from specs
- Reviewing completed work
- Establishing team quality standards

## Core Principles

1. **Requirements-Driven Testing:** Every test traces to a requirement
2. **Phase-Appropriate Validation:** Different techniques for each phase
3. **Continuous Quality:** Checks throughout development
4. **Automated Where Possible:** Reduce manual effort
5. **Fast Feedback:** Catch issues early

## Phase-Specific Validation

### Requirements Phase Validation

**Quality Checklist:**
- [ ] All user stories have acceptance criteria
- [ ] Requirements are unambiguous and specific
- [ ] Each requirement can be validated/tested
- [ ] EARS format used consistently
- [ ] Requirements link to business objectives
- [ ] No conflicting requirements

**Review Process:**
1. **Self Review:** Author checks completeness
2. **Stakeholder Review:** Business validates requirements
3. **Technical Review:** Team assesses feasibility
4. **Approval:** Formal sign-off before design

**Validation Techniques:**
- **Scenario Walkthroughs:** Step through user journeys
- **Edge Case Analysis:** Identify boundary conditions
- **Conflict Detection:** Check for contradictions
- **Completeness Analysis:** Ensure all needs covered

### Design Phase Validation

**Quality Checklist:**
- [ ] Design addresses all requirements
- [ ] Scalability considerations documented
- [ ] Maintainability assessed
- [ ] Security addressed
- [ ] Performance requirements considered
- [ ] External integrations defined

**Review Process:**
1. **Architecture Review:** Senior team validates design
2. **Security Review:** Security implications assessed
3. **Performance Review:** Performance characteristics evaluated
4. **Integration Review:** External dependencies validated

**Validation Techniques:**
- **Design Walkthroughs:** Step through system interactions
- **Threat Modeling:** Identify security vulnerabilities
- **Performance Modeling:** Estimate system performance
- **Dependency Analysis:** Map external requirements

### Tasks Phase Validation

**Quality Checklist:**
- [ ] Each task has clear deliverables
- [ ] Task sequence is logical
- [ ] All design elements covered
- [ ] Each task can be validated
- [ ] Tasks appropriately sized (2-4 hours)
- [ ] Dependencies clearly defined

**Review Process:**
1. **Completeness Review:** All design elements have tasks
2. **Sequencing Review:** Task order is logical
3. **Scope Review:** Tasks are appropriately sized
4. **Dependency Review:** Dependencies clear

## Quality Gates

### Requirements Phase Exit Criteria
- [ ] All user stories follow proper format
- [ ] Acceptance criteria use EARS format
- [ ] Requirements are testable and measurable
- [ ] No conflicting requirements
- [ ] Stakeholders have approved
- [ ] Edge cases documented

### Design Phase Exit Criteria
- [ ] Architecture addresses all requirements
- [ ] Non-functional requirements addressed
- [ ] External dependencies identified
- [ ] Data models clearly defined
- [ ] Error handling documented
- [ ] Security considerations addressed
- [ ] Technical review completed

### Tasks Phase Exit Criteria
- [ ] All design elements have tasks
- [ ] Tasks properly sequenced
- [ ] Each task is actionable
- [ ] Requirements references included
- [ ] Test approach defined
- [ ] Task breakdown reviewed

### Task-Level Quality Gates

**Before Starting:**
- [ ] Task requirements understood
- [ ] Test strategy defined
- [ ] Dependencies available
- [ ] Environment ready

**During Implementation:**
- [ ] Code follows standards
- [ ] Tests written alongside code
- [ ] Coverage meets thresholds (80%+)
- [ ] No critical vulnerabilities

**Before Marking Complete:**
- [ ] All tests pass
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Requirements validated

## Testing Strategies

### Test Pyramid

```
       /\
      /  \     E2E Tests (10%)
     /____\    Integration Tests (20%)
    /      \
   /________\   Unit Tests (70%)
```

### Unit Testing
- Fast execution (< 1 second per test)
- Test individual functions/classes
- Mock external dependencies
- Target 80%+ coverage

### Integration Testing
- Test component interactions
- Use real dependencies where practical
- Validate API contracts
- Test critical workflows

### End-to-End Testing
- Test complete user journeys
- Production-like environment
- Focus on critical business flows
- Minimal but comprehensive

### Test-Driven Development

For each task:
1. **Write tests first** based on acceptance criteria
2. **Run tests** - verify they fail (red)
3. **Write code** - minimal to pass tests (green)
4. **Refactor** - improve while keeping tests green
5. **Validate** - ensure requirements satisfied

## Quality Metrics

### Code Quality
- **Line Coverage:** % of code lines executed
- **Branch Coverage:** % of code branches tested
- **Cyclomatic Complexity:** Code complexity
- **Technical Debt:** Accumulated issues

### Testing Effectiveness
- **Test Pass Rate:** % of tests passing
- **Execution Time:** Time to run tests
- **Defect Detection Rate:** Bugs found by tests vs production
- **Test Maintenance:** Time spent maintaining tests

## Common Quality Issues

### Flaky Tests
**Symptoms:** Tests pass/fail inconsistently
**Solutions:**
- Identify timing dependencies
- Use proper wait conditions
- Isolate test data
- Fix race conditions

### Slow Test Suites
**Symptoms:** Tests take too long
**Solutions:**
- Parallelize execution
- Optimize database operations
- Use test doubles for external services
- Profile and optimize slow tests

### Low Coverage
**Symptoms:** Insufficient code coverage
**Solutions:**
- Add tests for uncovered paths
- Focus on critical business logic
- Use mutation testing
- Set coverage gates in CI

### Test Maintenance Burden
**Symptoms:** Tests require frequent updates
**Solutions:**
- Improve test design
- Use page object patterns for UI
- Reduce coupling to implementation
- Regular test refactoring

## Validation Checklists

### Requirements Validation
```markdown
## Requirements Review

**Completeness:**
- [ ] All user roles addressed
- [ ] Happy path scenarios covered
- [ ] Edge cases documented
- [ ] Error cases handled
- [ ] Business rules captured

**Clarity:**
- [ ] Precise language used
- [ ] No ambiguous terms
- [ ] Technical jargon avoided
- [ ] Behaviors are specific

**Testability:**
- [ ] Each requirement verifiable
- [ ] Success criteria observable
- [ ] Inputs/outputs specified
```

### Design Validation
```markdown
## Design Review

**Architecture:**
- [ ] Requirements addressed
- [ ] Components well-defined
- [ ] Interfaces specified
- [ ] Data flow documented

**Quality Attributes:**
- [ ] Performance considered
- [ ] Security addressed
- [ ] Scalability planned
- [ ] Maintainability assessed

**Risks:**
- [ ] Single points of failure identified
- [ ] Bottlenecks documented
- [ ] Mitigations planned
```

### Implementation Validation
```markdown
## Implementation Review

**Code Quality:**
- [ ] Follows standards
- [ ] Well-documented
- [ ] Tests included
- [ ] No security issues

**Requirements:**
- [ ] All criteria met
- [ ] Edge cases handled
- [ ] Error handling complete

**Integration:**
- [ ] Works with existing code
- [ ] APIs functioning
- [ ] Performance acceptable
```

## Best Practices

### Testing Best Practices
1. Write tests first when possible
2. Each test verifies one thing
3. Use descriptive test names
4. Maintain test independence
5. Keep tests up-to-date

### Quality Assurance Best Practices
1. Find issues early (shift left)
2. Automate everything possible
3. Use metrics to drive improvements
4. Make quality everyone's responsibility
5. Continuous learning and improvement

### Process Integration
1. Link tests to requirements
2. Provide quick feedback
3. Focus testing on high-risk areas
4. Keep documentation current
5. Integrate tools with workflow

## Quick Reference

**Phase Transition Questions:**
- Requirements → Design: "Does design address all requirements?"
- Design → Tasks: "Do tasks cover all design elements?"
- Tasks → Implementation: "Does code satisfy task specifications?"

**Quality Gate Questions:**
- "Is this testable and measurable?"
- "Have we considered what could go wrong?"
- "Would another developer understand this?"
- "Does this meet our standards?"
