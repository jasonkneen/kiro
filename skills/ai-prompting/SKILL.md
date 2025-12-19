---
name: ai-prompting
description: Effective communication strategies for AI-assisted development. Learn context-first prompting, phased interactions, iterative refinement, and validation techniques to get better results from Claude and other AI coding assistants.
license: MIT
compatibility: Claude Code, Cursor, VS Code, Windsurf
metadata:
  category: methodology
  complexity: beginner
  author: Kiro Team
  version: "1.0.0"
---

# AI Prompting Strategies

Master the art of communicating with AI coding assistants to get better results faster. These strategies are optimized for spec-driven development but apply broadly to AI collaboration.

## When to Use This Skill

Use these prompting strategies when:
- Working with Claude Code, Cursor, or other AI assistants
- Creating specs through AI collaboration
- Getting inconsistent or low-quality AI responses
- Need to improve AI output accuracy
- Want faster iteration cycles

## Core Strategies

### Strategy 1: Context-First Prompting

Always provide sufficient context before making requests.

**Poor Approach:**
```
Create requirements for a user profile feature.
```

**Better Approach:**
```
I'm working on a web application for a fitness tracking platform. We need to add user profile functionality where users can manage their personal information and fitness goals.

Context:
- Technology: React frontend, Node.js backend
- User base: Health-conscious individuals, age 18-65
- Key constraint: Must comply with GDPR for EU users
- Integration: Will connect with existing authentication system

Please help me create requirements for the user profile feature.
```

**Why It Works:**
- Provides domain context for better decisions
- Identifies technical constraints early
- Clarifies compliance requirements
- Enables more relevant suggestions

### Strategy 2: Phased Interaction

Work through spec phases sequentially. Complete each phase before moving to the next.

**Phase 1 - Requirements:**
```
Let's start with the requirements phase for [feature name].

Current situation: [describe current state]
Problem to solve: [describe the problem]
Users affected: [describe user types]
Success criteria: [how we'll know it works]

Please help me develop comprehensive requirements using the EARS format.
```

**Phase 2 - Design (after requirements approved):**
```
Now that we have clear requirements, let's create the technical design.

Requirements summary: [key requirements]
Technical context: [architecture, frameworks, patterns]
Constraints: [performance, scalability, security]

Please propose a technical design that addresses these requirements.
```

**Phase 3 - Tasks (after design approved):**
```
With the design finalized, let's break this into implementation tasks.

Design summary: [key components and interactions]
Team context: [team size, skill levels]
Dependencies: [what must be built first]

Please create a sequenced task breakdown for implementation.
```

### Strategy 3: Iterative Refinement

Treat spec development as conversation, not single requests.

**Initial Request:**
```
Help me define requirements for email notification preferences.
```

**Refinement Round 1:**
```
Great start! Let's refine a few areas:
1. For notification frequency, can we add daily digest option?
2. How should we handle changing preferences during pending notifications?
3. Can you elaborate on the unsubscribe requirement for GDPR compliance?
```

**Refinement Round 2:**
```
Perfect. Now let's add requirements for:
- Mobile push notifications (in addition to email)
- Notification history (last 30 days)
- Per-notification-type controls (not just global on/off)
```

### Strategy 4: Example-Driven Prompting

Provide concrete examples of what you want.

**For Requirements:**
```
I need acceptance criteria for a file upload feature. Use the EARS format like this example:

Good example from our auth feature:
"WHEN a user enters valid credentials THEN the system SHALL authenticate within 2 seconds"

Avoid vague requirements like:
"System should handle file uploads efficiently"

Focus on specific, testable criteria for:
- File size limits
- Supported file types
- Upload progress indication
- Error handling
```

**For Design:**
```
Create a component architecture. Follow this existing pattern:

[Reference existing architecture]

Key elements to include:
- Component responsibilities
- Data flow
- API boundaries
- Error handling paths
```

### Strategy 5: Constraint-Explicit Prompting

Make all constraints explicit. Don't assume AI knows your limitations.

```
Design a caching strategy for product catalog data.

Explicit constraints:
- Infrastructure: AWS with Redis, PostgreSQL
- Performance: API response < 200ms for cached data
- Scale: 10,000 products, 1,000 concurrent users
- Budget: Cache cost < $100/month
- Freshness: Updates visible within 5 minutes
- Maintenance: 2-person ops team

Flexibility allowed:
- Cache invalidation strategy (time or event-based)
- Cache key structure (optimize as needed)
- Failover approach (as long as reliable)
```

### Strategy 6: Role-Based Prompting

Frame requests from specific perspectives.

**Product Owner Perspective:**
```
As a product owner defining checkout requirements:
- Business goals: Reduce cart abandonment
- User value: Smooth, trustworthy purchase experience
- Success metrics: Checkout completion rate > 80%

What requirements should I capture?
```

**Technical Lead Perspective:**
```
As tech lead designing a notification system:
- Integrates with existing microservices
- Handles 100k notifications/day with room to grow
- Maintains health if notification service fails
- Aligns with event-driven architecture

What design approach would you recommend?
```

**Developer Perspective:**
```
As a mid-level developer implementing this:
- Need clear tasks (2-4 hours each)
- Explicit dependencies between tasks
- Guidance on testing approach
- References to existing code patterns

Can you break down the implementation accordingly?
```

### Strategy 7: Validation-Oriented Prompting

Build quality checks into your prompts.

**After Requirements:**
```
Review these requirements and check:
1. Are all requirements testable and measurable?
2. Have we covered error cases and edge cases?
3. Do any requirements conflict with each other?
4. Are there gaps in the user journey?
5. Do requirements map to all user stories?

Provide a validation summary.
```

**After Design:**
```
Validate this design against:
1. Does it address all requirements?
2. Are there single points of failure?
3. What are the performance bottlenecks?
4. How does it handle scale growth?
5. What security concerns exist?

Provide a critical review.
```

### Strategy 8: Trade-Off Exploration

Explore options rather than seeking single answers.

```
We need real-time notifications. Compare these options:

Option A: WebSocket connections
Option B: Server-Sent Events (SSE)
Option C: Long polling

For each, evaluate:
- Implementation complexity
- Browser compatibility
- Server resource usage
- Scalability characteristics
- Maintenance overhead

Present trade-offs in a comparison table.
```

## Phase-Specific Patterns

### Requirements Phase Patterns

**User Story Expansion:**
```
I have this user story: [basic story]

Please help me:
1. Expand with detailed acceptance criteria (EARS format)
2. Identify edge cases and error scenarios
3. Define non-functional requirements
4. Suggest validation criteria
```

**Completeness Check:**
```
Here are my draft requirements: [requirements]

Check for completeness:
- Are all user workflows covered?
- Have we addressed error handling?
- Are there accessibility requirements?
- What about data privacy and security?
- Have we considered mobile vs desktop?
```

### Design Phase Patterns

**Architecture Exploration:**
```
Given these requirements: [summary]

Propose 2-3 different architectural approaches:
1. For each, describe components and interactions
2. List pros and cons
3. Identify risks and mitigations
4. Estimate complexity

Help me compare and choose.
```

**Integration Design:**
```
This feature integrates with: [list systems]

Design the integration:
1. Define API contracts
2. Specify data flow and transformation
3. Plan error handling and retries
4. Document assumptions and dependencies
```

### Tasks Phase Patterns

**Task Sequencing:**
```
Based on this design: [summary]

Create implementation tasks that:
1. Are sequenced to minimize dependencies
2. Enable incremental testing
3. Separate setup, core features, and polish
4. Include testing tasks
5. Range from 2-4 hours each
```

**Task Validation:**
```
Review these tasks: [task list]

Verify:
1. Can each task be completed independently?
2. Are dependencies clearly marked?
3. Do tasks map to design components?
4. Are testing steps included?
5. Is anything missing?
```

## Advanced Techniques

### Specification by Example
Provide examples of good and bad outputs to calibrate responses.

### Incremental Context Building
Start broad, add detail as AI demonstrates understanding.

### Meta-Prompting
Ask AI how to prompt it better for your specific context.

### Comparative Prompting
Present multiple versions, ask which is better and why.

## Common Mistakes

1. **Too little context:** AI can't read your mind
2. **All at once:** Work in phases, not giant prompts
3. **Accept first response:** Iterate and refine
4. **No examples:** Show what you want
5. **Hidden constraints:** Make limitations explicit
6. **Skip validation:** Always verify outputs

## Quick Reference

**Starting a spec:**
```
I'm working on [project]. We need [feature].
Context: [tech stack, constraints, users]
Please help me develop [requirements/design/tasks].
```

**Refining output:**
```
Good progress. Let's improve:
1. [Specific area to expand]
2. [Missing element to add]
3. [Clarification needed]
```

**Validating output:**
```
Review this [document] and identify:
- Missing elements
- Ambiguities
- Conflicts
- Quality issues
```

**Exploring options:**
```
Compare these approaches: [options]
Evaluate: [criteria]
Present trade-offs for decision-making.
```
