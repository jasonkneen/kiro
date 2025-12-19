---
name: troubleshooting
description: Diagnose and resolve common issues during spec-driven development and implementation. Learn strategies for handling spec-reality divergence, dependency blocks, unclear requirements, and other execution challenges.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: intermediate
  author: Kiro Team
  version: "1.0.0"
---

# Troubleshooting

Diagnose and resolve common problems that arise during spec-driven development and feature implementation.

## When to Use This Skill

Use troubleshooting strategies when:
- Implementation doesn't match spec expectations
- Tasks are blocked by dependencies
- Requirements are unclear during coding
- Tests are failing or hard to write
- Performance doesn't meet requirements
- Integration problems occur

## Issue 1: Spec and Reality Diverge

### Symptoms
- Code structure doesn't match spec assumptions
- APIs are unavailable or deprecated
- Performance differs from expectations
- Integration points work differently than specified

### Resolution

**Immediate Actions:**
1. Document the gap exactly
2. Assess impact (minor detail vs fundamental issue)
3. Stop implementing until you understand implications

**Resolution Options:**

**Option 1: Update Spec (Minor Deviations)**
```
If difference is minor and doesn't affect requirements:
1. Update design section with actual approach
2. Adjust affected tasks
3. Document why change was needed
4. Continue implementation
```

**Option 2: Redesign (Major Deviations)**
```
If core assumptions are wrong:
1. Return to design phase
2. Incorporate new understanding
3. Re-validate against requirements
4. Create new task breakdown
5. Restart with corrected plan
```

**Option 3: Adjust Requirements (Fundamental Issues)**
```
If requirements can't be met as stated:
1. Document why requirements aren't achievable
2. Propose alternative approach
3. Get stakeholder approval
4. Update entire spec
5. Restart process
```

### Prevention
- Validate assumptions with code exploration during design
- Prototype risky integrations before finalizing spec
- Include technical spikes in task breakdown

## Issue 2: Task Dependencies Block Progress

### Symptoms
- Can't complete task without later features
- Multiple tasks need same file changes
- Tests need features not yet built
- Circular dependencies between tasks

### Resolution

**Strategy 1: Reorder Tasks**
```
If dependency was missed in planning:
1. Identify the prerequisite task
2. Complete it first
3. Return to blocked task
4. Update task sequence for future
```

**Strategy 2: Split Tasks**
```
If task is too large:
1. Break blocked task into smaller pieces
2. Complete parts that aren't blocked
3. Queue dependent parts for later
4. Update task breakdown
```

**Strategy 3: Use Mocking/Stubbing**
```
If dependency is complex:
1. Create minimal stub/mock of dependency
2. Complete current task against stub
3. Replace stub when real dependency ready
4. Add integration testing task
```

**Strategy 4: Parallel Development**
```
If dependency is in progress:
1. Define clear interface/contract
2. Implement against interface
3. Test with mock implementation
4. Integrate when dependency completes
```

### Prevention
- Map dependencies explicitly during task planning
- Order tasks to minimize blocking
- Identify tasks that can be parallelized

## Issue 3: Requirements Unclear During Implementation

### Symptoms
- Multiple valid interpretations
- Edge cases not addressed
- Conflicting requirements discovered
- UX details missing

### Resolution

**Step 1: Analyze the Ambiguity**
- What exactly is unclear?
- What are possible interpretations?
- What's the impact of each?
- Is this common or edge case?

**Step 2: Propose Solution**
- What's most consistent with existing requirements?
- What aligns with user needs?
- What's technically simplest?
- Make recommendation with rationale

**Step 3: Get Clarification**
- Update requirements with clarification
- Update acceptance criteria if needed
- Document decision rationale
- Proceed with implementation

**Step 4: Update Tasks**
- Adjust current task if needed
- Add new tasks if solution is complex
- Update testing tasks

### Prevention
- Probe for edge cases during requirements phase
- Use examples to clarify requirements
- Review requirements with developers before design

## Issue 4: Technical Debt Creates Friction

### Symptoms
- Need to refactor before adding feature
- Tests are brittle or missing
- Code is tightly coupled
- No clear extension points

### Resolution

**Strategy 1: Refactor-First**
```
If refactoring is bounded and low-risk:
1. Create refactoring tasks separate from feature
2. Get approval for additional work
3. Complete refactoring with tests
4. Proceed with feature
```

**Strategy 2: Parallel Track**
```
If refactoring is extensive:
1. Implement feature with workarounds
2. Create separate refactoring initiative
3. Document technical debt created
4. Plan future cleanup
```

**Strategy 3: Incremental Improvement**
```
If refactoring can be done in pieces:
1. Refactor only what you touch
2. Leave code better than you found it
3. Add tests for refactored areas
4. Continue feature implementation
```

### Prevention
- Assess existing code quality during design
- Include refactoring tasks when needed
- Set realistic timelines accounting for debt

## Issue 5: Tests Failing or Hard to Write

### Symptoms
- Tests fail randomly (flaky)
- Setup code is complex
- Mocking is complicated
- Tests take too long

### Resolution

**For Tightly Coupled Code:**
- Extract interfaces for dependencies
- Use dependency injection
- Create test fixtures/factories
- Implement test doubles

**For Complex Setup:**
- Create reusable test utilities
- Use test builders/factories
- Implement setup helpers
- Share fixtures across tests

**For Flaky Tests:**
- Remove timing dependencies
- Eliminate global state
- Mock external dependencies
- Use deterministic test data

**For Slow Tests:**
- Use test doubles for expensive operations
- Parallelize test execution
- Optimize database setup/teardown
- Cache expensive setups

### Prevention
- Design for testability during design phase
- Include test strategy in design document
- Write tests alongside implementation

## Issue 6: Performance Problems

### Symptoms
- Slow response times
- High memory usage
- Database query issues
- Excessive network calls

### Resolution

**Step 1: Measure**
- Profile the code
- Identify bottlenecks
- Quantify the gap
- Establish baseline

**Step 2: Analyze**
- Algorithmic complexity?
- Database inefficiency?
- Network latency?
- Resource contention?

**Step 3: Optimize**
- Target biggest bottleneck first
- Make one change at a time
- Measure after each change
- Document optimizations

**Step 4: Validate**
- Verify requirements met
- Check no regressions
- Add performance tests
- Document characteristics

**Common Fixes:**
- Database: Add indexes, optimize queries, implement caching
- Algorithm: Better data structures, reduce complexity, lazy loading
- Network: Batch requests, compression, reduce payload size

### Prevention
- Include performance requirements in spec
- Design with performance in mind
- Profile early and often

## Issue 7: Integration Problems

### Symptoms
- Works locally, fails in integration
- Timing issues in production
- Data format mismatches
- Auth failures

### Resolution

**Step 1: Isolate Problem**
- Does it work in isolation?
- Which integration point fails?
- Consistent or intermittent?
- What's different in integration environment?

**Step 2: Verify Contracts**
- Check API specifications
- Validate data formats
- Verify authentication flow
- Review error responses

**Step 3: Test Integration Points**
- Test each integration separately
- Use integration test environment
- Verify error handling
- Check timeout behavior

**Step 4: Fix and Validate**
- Implement fix
- Add integration tests
- Verify in integration environment
- Update spec if assumptions wrong

**Common Issues:**
- Configuration differences (URLs, credentials)
- Data format issues (dates, encoding, nulls)
- Timing issues (race conditions, timeouts)

### Prevention
- Test in integration environment early
- Document integration requirements clearly
- Include integration tests in task breakdown

## Issue 8: Scope Creep During Implementation

### Symptoms
- "While I'm here, I should also..."
- "It would be easy to add..."
- Tasks taking longer than estimated
- Feature complexity growing

### Resolution

**Step 1: Recognize It**
- Notice when going beyond spec
- Identify additions vs requirements
- Assess if it's scope creep

**Step 2: Evaluate**
- Is it required for current requirements?
- Is it a bug fix or enhancement?
- Cost of doing now vs later?

**Step 3: Decide**

**Option A: Required for Current Feature**
- Update spec with new requirement
- Add to current work
- Adjust timeline

**Option B: Nice to Have**
- Document as future enhancement
- Complete current spec first
- Create separate spec later

**Option C: Out of Scope**
- Note as explicitly excluded
- Create future spec if valuable
- Stay focused on current work

### Red Flags
- "Just one more feature"
- "While we're changing this..."
- Refactoring beyond what's needed
- Gold-plating solutions

### Prevention
- Clear requirements and acceptance criteria
- Regular review against spec
- Time-box implementation tasks

## Debugging Strategies

### Rubber Duck Debugging
Explain the problem out loud. Often the explanation reveals the solution.

### Binary Search
Isolate by dividing code in half repeatedly until you find the issue.

### Strategic Logging
Add logging to understand code flow and data transformations.

### Minimal Reproduction
Create smallest test case that reproduces the issue.

### Compare Working vs Broken
Find similar working code and compare differences.

## When to Update the Spec

**Always Update When:**
- Design assumptions were wrong
- Requirements need clarification
- Tasks need reordering
- New edge cases discovered
- Technical approach changes

**Document:**
- Why changes were made
- When they were made
- Impact on timeline
- Alternatives considered

## Getting Unstuck

When truly blocked:
1. **Take a break** - Solution often comes when you step away
2. **Review the spec** - Re-read requirements and design
3. **Ask for help** - Get a second pair of eyes
4. **Simplify** - Solve a simpler version first
5. **Prototype** - Try multiple approaches quickly
6. **Go back a phase** - Maybe the spec needs work
