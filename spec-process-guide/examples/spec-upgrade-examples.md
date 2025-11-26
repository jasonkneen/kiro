# Spec Upgrade Examples

<!-- Navigation Metadata -->
<!-- Example: Spec Upgrades | Level: Complete Examples | Prerequisites: methodology/lightweight-specs.md -->
<!-- Related: lightweight-examples.md, simple-feature-spec.md -->

**📍 You are here:** [Main Guide](../../README.md) → [Examples](README.md) → **Spec Upgrade Examples**

## Quick Navigation
- **📚 Context:** [Lightweight Specs](../methodology/lightweight-specs.md) - Understanding spec complexity levels
- **📝 Before:** [Lightweight Examples](lightweight-examples.md) - Starting point examples
- **📝 After:** [Standard Specs](simple-feature-spec.md) - Full three-phase examples

---

This section demonstrates when and how to upgrade from a lightweight spec to a more comprehensive specification. These examples show real scenarios where initial assumptions proved insufficient.

## Why Specs Need Upgrading

Lightweight specs work well when:
- The scope is clearly understood
- Implementation path is straightforward
- No cross-team dependencies exist

Upgrades become necessary when:
- Hidden complexity emerges during implementation
- Stakeholder requirements expand
- Security or performance concerns surface
- Multiple teams become involved

---

## Example 1: Simple Feature → Standard Spec

### Initial Quick Spec: Add Search Functionality

```markdown
# Search Feature - Quick Spec

## Requirements

**As a** user
**I want** to search for content by keyword
**So that** I can quickly find what I'm looking for

**Acceptance Criteria:**
- [ ] Search box in header
- [ ] Results show matching items
- [ ] Clicking result navigates to item

## Implementation Tasks
1. Add search input component (2 hours)
2. Create search API endpoint (3 hours)
3. Display results in dropdown (2 hours)
4. Handle empty states (1 hour)

## Definition of Done
- [ ] Search works for titles and descriptions
- [ ] Tests passing
```

### Red Flags That Emerged

During implementation, the developer encountered:

1. **Performance issues** - Full-text search on 500k records was slow
2. **Scope creep** - PM asked for filters, faceted search, and saved searches
3. **Security concern** - Search exposed private content to unauthorized users
4. **UX questions** - How to handle typos? Highlight matches? Paginate results?

### Upgraded Standard Spec

```markdown
# Search Feature - Requirements

## Introduction

The search feature enables users to find content quickly across the platform.
Due to data volume (500k+ records) and security requirements, this requires
a dedicated search infrastructure with proper access controls.

## Stakeholders
- **Product**: Feature requirements and UX
- **Security**: Access control review
- **Infrastructure**: Search service deployment
- **Frontend**: UI implementation

## Requirements

### Requirement 1: Basic Search
**User Story:** As a user, I want to search by keyword so I can find content quickly.

#### Acceptance Criteria
1. WHEN user enters 3+ characters THEN system SHALL show relevant results
2. WHEN results exist THEN system SHALL display up to 10 items with highlighting
3. WHEN no results exist THEN system SHALL show helpful empty state
4. IF user has no access to an item THEN system SHALL NOT display it in results

### Requirement 2: Search Filters
**User Story:** As a user, I want to filter search results by type and date.

#### Acceptance Criteria
1. WHEN user selects content type filter THEN results SHALL be filtered accordingly
2. WHEN user selects date range THEN results SHALL be limited to that period
3. WHEN multiple filters applied THEN results SHALL match ALL criteria

### Requirement 3: Search Performance
**Non-Functional:** Search response time under load

#### Acceptance Criteria
1. Search queries SHALL return results within 500ms at P95
2. System SHALL handle 100 concurrent search requests
3. Search index SHALL update within 5 minutes of content changes

---

# Search Feature - Design

## Architecture Overview

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│  API Layer  │────▶│ Elasticsearch│
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────▼──────┐
                    │ Auth Service │
                    └─────────────┘
```

## Components

### Search Service
- Elasticsearch cluster for full-text search
- Index per content type with access control fields
- Query builder with permission filtering

### API Layer
- `/api/search` endpoint with query, filters, pagination
- Rate limiting: 30 requests/minute per user
- Response caching for common queries

### Security Model
- Each document indexed with `allowed_users` field
- Queries filtered by current user's permissions
- Admin-only content excluded from regular search

## Error Handling
- Elasticsearch timeout: Return cached results or graceful error
- Invalid query: Sanitize input, return helpful message
- Rate limit exceeded: 429 response with retry-after header

---

# Search Feature - Tasks

## Phase 1: Infrastructure (3 days)
- [ ] Task 1.1: Set up Elasticsearch cluster
- [ ] Task 1.2: Create indexing pipeline
- [ ] Task 1.3: Implement index sync job
- [ ] Task 1.4: Add monitoring and alerts

## Phase 2: Backend (2 days)
- [ ] Task 2.1: Create search API endpoint
- [ ] Task 2.2: Implement permission filtering
- [ ] Task 2.3: Add rate limiting
- [ ] Task 2.4: Write integration tests

## Phase 3: Frontend (2 days)
- [ ] Task 3.1: Build search input component
- [ ] Task 3.2: Create results dropdown with highlighting
- [ ] Task 3.3: Add filter controls
- [ ] Task 3.4: Implement keyboard navigation

## Phase 4: Testing & Launch (1 day)
- [ ] Task 4.1: Load testing
- [ ] Task 4.2: Security review
- [ ] Task 4.3: Staged rollout plan
```

---

## Example 2: Bug Fix → Quick Spec

### Initial Micro Spec: Fix Notification Sound

```markdown
# Fix Notification Sound Not Playing

**Type:** Bug Fix
**Effort:** 2 hours

## What
Notification sound doesn't play on mobile browsers

## Why
Users miss important notifications, causing support tickets

## How
- Debug audio playback on mobile Safari
- Fix the issue

## Acceptance
Sound plays when notification received on iOS Safari
```

### Red Flags That Emerged

During investigation:
1. **Browser restrictions** - Mobile browsers require user interaction before audio
2. **Multiple platforms** - Issue affects iOS Safari, Chrome Android differently
3. **User preference** - Some users want sounds, others don't
4. **Accessibility** - Need visual alternative to audio

### Upgraded Quick Spec

```markdown
# Notification Sound Fix - Quick Spec

## Requirements

**As a** mobile user
**I want** to receive audible notification alerts
**So that** I don't miss important updates when the app is in background

**Acceptance Criteria:**
- [ ] Sound plays on iOS Safari after user grants permission
- [ ] Sound plays on Chrome Android with proper audio context
- [ ] User can enable/disable sounds in settings
- [ ] Visual indicator always shown alongside sound
- [ ] First notification prompts user to enable sounds

## Technical Constraints

**Browser Audio Policies:**
- iOS Safari: Requires user gesture to unlock audio
- Chrome Android: Requires AudioContext created after user interaction
- All browsers: Cannot autoplay without prior user engagement

## Implementation Tasks

1. **Audio Permission Flow** (3 hours)
   - Create "Enable Sounds" prompt on first notification
   - Unlock AudioContext on user interaction
   - Store permission state in localStorage

2. **Cross-Browser Audio Handler** (2 hours)
   - Abstract browser differences in audio utility
   - Fallback chain: Web Audio API → HTMLAudioElement
   - Handle AudioContext suspension/resume

3. **User Preference Setting** (2 hours)
   - Add sound toggle in notification settings
   - Sync preference to backend for cross-device
   - Respect system-level mute/DND

4. **Visual Notification Fallback** (1 hour)
   - Ensure toast/badge always displays
   - Screen reader announcement for accessibility
   - Browser notification API as secondary channel

5. **Testing** (2 hours)
   - Test on iOS Safari, Chrome Android, Firefox
   - Test with system muted
   - Test permission grant/deny flows

## Definition of Done
- [ ] Sound works on iOS Safari 15+ and Chrome Android 90+
- [ ] Users can control sound preference
- [ ] Visual notification always shown regardless of sound state
- [ ] Documented browser support matrix
```

---

## Example 3: Config Change → Quick Spec (with Design)

### Initial Micro Spec: Increase Upload Limit

```markdown
# Increase File Upload Limit

**Type:** Config Update
**Effort:** 1 hour

## What
Increase max file upload from 10MB to 50MB

## Why
Customers complaining they can't upload presentation files

## Files
- `config/upload.yaml` - Update `max_size: 50MB`
```

### Red Flags That Emerged

Simple config change revealed:
1. **Infrastructure impact** - Load balancer has 10MB body limit
2. **Storage costs** - 5x increase in storage usage projected
3. **Performance** - Large uploads timeout on slow connections
4. **Multiple touchpoints** - Frontend, backend, CDN, load balancer all have limits

### Upgraded Quick Spec with Design Notes

```markdown
# Increase Upload Limit - Quick Spec

## Requirements

**As a** user
**I want** to upload files up to 50MB
**So that** I can share larger documents like presentations

**Acceptance Criteria:**
- [ ] Files up to 50MB upload successfully
- [ ] Upload progress shows for files over 5MB
- [ ] Timeout errors handled gracefully
- [ ] Clear error message for files exceeding limit

## Design Notes

### Infrastructure Changes Required
| Component | Current Limit | New Limit | Change Required |
|-----------|---------------|-----------|-----------------|
| Frontend validation | 10MB | 50MB | Update constant |
| API body parser | 10MB | 55MB | Update config |
| Load balancer | 10MB | 60MB | AWS console update |
| CDN | Unlimited | 60MB | Verify, no change |
| Storage | N/A | N/A | Monitor costs |

### Upload Strategy
- Files < 10MB: Single POST request (current behavior)
- Files > 10MB: Chunked upload with resume capability
- Client-side validation before upload attempt

### Cost Impact
- Estimated 30% increase in storage costs
- Consider implementing file retention policy
- Add storage usage to billing metrics

## Implementation Tasks

1. **Infrastructure Updates** (2 hours)
   - Update AWS ALB body size limit
   - Update nginx proxy body size
   - Update API body parser config

2. **Frontend Updates** (3 hours)
   - Update validation constant
   - Add chunked upload for large files
   - Show upload progress bar
   - Handle timeout with retry option

3. **Backend Updates** (2 hours)
   - Handle chunked upload assembly
   - Add upload progress tracking
   - Update error messages

4. **Monitoring** (1 hour)
   - Add storage usage dashboard
   - Alert on upload failures
   - Track file size distribution

## Definition of Done
- [ ] 50MB files upload successfully end-to-end
- [ ] All infrastructure limits updated
- [ ] Monitoring in place
- [ ] Storage cost impact documented
```

---

## The Upgrade Process

### Step 1: Recognize the Need

**Stop coding when you notice:**
- You're making assumptions about unclear requirements
- Implementation is taking significantly longer than estimated
- You need input from other teams
- Security, performance, or compliance concerns arise

### Step 2: Assess the Gap

Ask yourself:
- What requirements are unclear or missing?
- What design decisions need documentation?
- Who else needs to review this?
- What risks haven't been addressed?

### Step 3: Upgrade Incrementally

Don't restart from scratch. Add what's missing:

| Missing Element | Action |
|----------------|--------|
| Clear requirements | Add user stories and acceptance criteria |
| Technical approach | Add design notes section |
| Cross-team coordination | Add stakeholder review |
| Risk mitigation | Add security/performance requirements |
| Detailed tasks | Break down into smaller, estimated items |

### Step 4: Get Approval

Before resuming implementation:
- Share upgraded spec with stakeholders
- Get explicit sign-off on expanded scope
- Update timeline expectations
- Communicate dependencies to other teams

---

## When NOT to Upgrade

Sometimes the right answer is to **reduce scope** instead of upgrading the spec:

- **Too complex for current sprint?** → Ship MVP, iterate later
- **Scope creep from stakeholders?** → Push back, keep original scope
- **Perfectionism?** → Ship good enough, improve based on feedback

The goal is appropriate documentation for the risk level, not maximum documentation.

---

## 🔗 Related Content

### Starting Points
- [Lightweight Examples](lightweight-examples.md) - Where upgrades begin
- [Lightweight Specs Guide](../methodology/lightweight-specs.md) - Decision framework

### Destination Specs
- [Simple Feature Specs](simple-feature-spec.md) - Standard three-phase examples
- [Complex System Specs](complex-system-spec.md) - Full specification examples

### Templates
- [Quick Spec Template](../templates/quick-spec-template.md)
- [Requirements Template](../templates/requirements-template.md)
- [Design Template](../templates/design-template.md)

[← Back to Examples](README.md) | [Lightweight Examples →](lightweight-examples.md)
