# Prompting Strategies

<!-- Navigation Metadata -->
<!-- Prompting: Strategies | Level: Practical Guide | Prerequisites: methodology/README.md -->
<!-- Related: templates.md, best-practices.md, ai-reasoning/decision-frameworks.md -->

**📍 You are here:** [Main Guide](../../README.md) → [Prompting Strategies](README.md) → **Strategies**

## Quick Navigation
- **Overview:** [Prompting Strategies](README.md) - Introduction to effective communication
- **Practice:** [Templates](templates.md) - Ready-to-use prompt patterns
- **Refinement:** [Best Practices](best-practices.md) - Tips for getting better results
- **Understanding AI:** [Decision Frameworks](../ai-reasoning/decision-frameworks.md) - How AI evaluates options

---

## Core Prompting Strategies

Effective prompting for spec development requires understanding how to communicate clearly with AI systems while leveraging their strengths. This guide covers proven strategies for each phase of the spec process.

## Strategy 1: Context-First Prompting

### Overview
Always provide sufficient context before making requests. AI systems perform better when they understand the project background, constraints, and goals.

### How to Apply

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

## Strategy 2: Phased Interaction

### Overview
Follow the spec-driven methodology by working through phases sequentially. Complete requirements before moving to design, and complete design before creating tasks.

### How to Apply

**Phase 1: Requirements**
```
Let's start with the requirements phase for [feature name].

Current situation: [describe current state]
Problem to solve: [describe the problem]
Users affected: [describe user types]
Success criteria: [how we'll know it works]

Please help me develop comprehensive requirements using the EARS format.
```

**Phase 2: Design (after requirements are complete)**
```
Now that we have clear requirements, let's create the technical design.

Requirements summary: [key requirements]
Technical context: [architecture, frameworks, patterns]
Constraints: [performance, scalability, security]

Please propose a technical design that addresses these requirements.
```

**Phase 3: Tasks (after design is complete)**
```
With the design finalized, let's break this into implementation tasks.

Design summary: [key components and interactions]
Team context: [team size, skill levels, availability]
Timeline: [any deadline constraints]

Please create a sequenced task breakdown for implementation.
```

**Why It Works:**
- Each phase builds on validated previous work
- Reduces rework from incomplete understanding
- Creates clear decision points
- Maintains focus on one type of thinking at a time

## Strategy 3: Iterative Refinement

### Overview
Treat spec development as a conversation, not a single request. Build on responses, ask clarifying questions, and refine incrementally.

### How to Apply

**Initial Request:**
```
Help me define requirements for email notification preferences.
```

**Refinement Round 1:**
```
Great start! Let's refine a few areas:
1. For the notification frequency option, can we add daily digest as an alternative to immediate?
2. The edge case for changing preferences during pending notifications - how should we handle that?
3. Can you elaborate on the unsubscribe requirement to ensure GDPR compliance?
```

**Refinement Round 2:**
```
Perfect. Now let's add requirements for:
- Mobile push notifications (in addition to email)
- Notification history (last 30 days)
- Per-notification-type controls (not just global on/off)
```

**Why It Works:**
- Allows progressive elaboration
- Catches gaps and ambiguities early
- Builds shared understanding
- Creates higher quality outputs

## Strategy 4: Example-Driven Prompting

### Overview
Provide concrete examples of what you want (or don't want). Examples dramatically improve AI understanding and output quality.

### How to Apply

**For Requirements:**
```
I need acceptance criteria for a file upload feature. Use the EARS format, similar to this example:

Good example from our authentication feature:
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
Create a component architecture diagram. Use a similar structure to our existing payment module:

[Reference existing architecture]

Key elements to include:
- Component responsibilities
- Data flow
- API boundaries
- Error handling paths
```

**Why It Works:**
- Clarifies expectations explicitly
- Establishes quality standards
- Provides concrete patterns to follow
- Reduces ambiguity

## Strategy 5: Constraint-Explicit Prompting

### Overview
Make all constraints and non-functional requirements explicit. Don't assume the AI knows your project's limitations.

### How to Apply

```
Design a caching strategy for product catalog data.

Explicit constraints:
- Infrastructure: AWS with Redis cache, PostgreSQL database
- Performance: API response time must be < 200ms for cached data
- Scale: 10,000 products, 1,000 concurrent users expected
- Budget: Cache cost should not exceed $100/month
- Data freshness: Catalog updates must be visible within 5 minutes
- Maintenance: Should be manageable by 2-person ops team

Non-constraints (flexibility allowed):
- Cache invalidation strategy (can be time-based or event-based)
- Cache key structure (optimize as needed)
- Failover approach (as long as it's reliable)
```

**Why It Works:**
- Prevents solutions that violate constraints
- Enables AI to optimize within bounds
- Makes trade-offs visible
- Focuses creativity on the right areas

## Strategy 6: Role-Based Prompting

### Overview
Frame requests from the perspective of specific roles to get more targeted outputs.

### How to Apply

**For Requirements (Product Owner perspective):**
```
As a product owner defining requirements for checkout flow, I need to ensure:
- Business goals: Reduce cart abandonment
- User value: Smooth, trustworthy purchase experience
- Success metrics: Checkout completion rate > 80%

What requirements should I capture to achieve these goals?
```

**For Design (Technical Lead perspective):**
```
As tech lead, I need to design a scalable notification system that:
- Integrates with existing microservices architecture
- Handles 100k notifications/day with room to grow
- Maintains system health if notification service fails
- Aligns with our event-driven architecture patterns

What design approach would you recommend?
```

**For Tasks (Developer perspective):**
```
As a mid-level developer implementing this feature, I need:
- Clear, actionable tasks (2-4 hours each)
- Explicit dependencies between tasks
- Guidance on testing approach
- References to relevant existing code

Can you break down the implementation accordingly?
```

**Why It Works:**
- Focuses on role-specific concerns
- Matches output to audience needs
- Improves practical applicability
- Aligns with team structure

## Strategy 7: Validation-Oriented Prompting

### Overview
Build validation and quality checks into your prompts. Ask the AI to verify its own outputs.

### How to Apply

**After Requirements:**
```
Review these requirements and check:
1. Are all requirements testable and measurable?
2. Have we covered error cases and edge cases?
3. Do any requirements conflict with each other?
4. Are there gaps in the user journey?
5. Do requirements map to all user stories?

Please provide a validation summary.
```

**After Design:**
```
Validate this design against:
1. Does it address all requirements?
2. Are there single points of failure?
3. What are the performance bottlenecks?
4. How does it handle scale growth?
5. What security concerns exist?

Please provide a critical review.
```

**Why It Works:**
- Catches issues before implementation
- Encourages thorough thinking
- Creates natural quality gates
- Builds better specs through critique

## Strategy 8: Trade-Off Exploration

### Overview
When facing design decisions, explicitly explore trade-offs rather than seeking single "best" answers.

### How to Apply

```
We need to decide on an approach for real-time notifications. Please compare these options:

Option A: WebSocket connections
Option B: Server-Sent Events (SSE)
Option C: Long polling

For each option, evaluate:
- Implementation complexity
- Browser compatibility
- Server resource usage
- Scalability characteristics
- Maintenance overhead
- Cost implications

Present trade-offs in a comparison table so we can make an informed decision.
```

**Why It Works:**
- Makes decision rationale explicit
- Surfaces hidden costs and benefits
- Enables better stakeholder discussions
- Creates documentation of choices

## Common Patterns by Phase

### Requirements Phase Patterns

**Pattern: User Story Expansion**
```
I have this user story: [basic story]

Please help me:
1. Expand it with detailed acceptance criteria (EARS format)
2. Identify edge cases and error scenarios
3. Define non-functional requirements (performance, security, etc.)
4. Suggest validation criteria
```

**Pattern: Requirements Completeness Check**
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

**Pattern: Architecture Exploration**
```
Given these requirements: [summary]

Propose 2-3 different architectural approaches:
1. For each approach, describe components and interactions
2. List pros and cons
3. Identify risks and mitigations
4. Estimate complexity

Help me compare and choose.
```

**Pattern: Integration Design**
```
This feature needs to integrate with: [list systems]

Design the integration:
1. Define API contracts or interfaces
2. Specify data flow and transformation
3. Plan error handling and retries
4. Document assumptions and dependencies
```

### Tasks Phase Patterns

**Pattern: Task Sequencing**
```
Based on this design: [summary]

Create implementation tasks that:
1. Are sequenced to minimize dependencies
2. Enable incremental testing
3. Separate setup, core features, and polish
4. Include testing tasks
5. Range from 2-6 hours each
```

**Pattern: Task Validation**
```
Review these tasks: [task list]

Verify:
1. Can each task be completed independently?
2. Are dependencies clearly marked?
3. Do tasks map back to design components?
4. Are testing steps included?
5. Is anything missing?
```

## Advanced Techniques

### Technique 1: Specification by Example

Provide examples of good and bad specs from your domain to calibrate AI outputs.

### Technique 2: Incremental Context Building

Start broad, then progressively add detail as the AI demonstrates understanding.

### Technique 3: Meta-Prompting

Ask the AI to suggest how you should prompt it for better results in your specific context.

### Technique 4: Comparative Prompting

Present multiple versions and ask the AI to identify which is better and why, building shared understanding.

---

## Summary

Effective prompting for spec development combines:
- **Rich context** about your project and constraints
- **Phased approach** following the spec-driven methodology
- **Iterative refinement** building on previous responses
- **Concrete examples** showing what you want
- **Explicit constraints** making boundaries clear
- **Validation steps** ensuring quality at each phase

Master these strategies and you'll create better specs more efficiently through AI collaboration.

---

[← Back to Prompting Strategies](README.md) | [Templates →](templates.md) | [Best Practices →](best-practices.md)
