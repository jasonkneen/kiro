# Lightweight Spec Examples

<!-- Navigation Metadata -->
<!-- Example: Lightweight Specs | Level: Complete Examples | Prerequisites: methodology/lightweight-specs.md -->
<!-- Related: templates/micro-spec-template.md, templates/quick-spec-template.md -->

**📍 You are here:** [Main Guide](../../README.md) → [Examples](README.md) → **Lightweight Spec Examples**

## Quick Navigation
- **📚 Learn First:** [Lightweight Specs](../methodology/lightweight-specs.md) - Understand when to use lightweight specs
- **📝 Micro Template:** [Micro Spec Template](../templates/micro-spec-template.md) - For < 1 day effort
- **📝 Quick Template:** [Quick Spec Template](../templates/quick-spec-template.md) - For 1-3 days effort
- **🔄 Upgrading:** [Spec Upgrade Examples](spec-upgrade-examples.md) - When lightweight isn't enough

---

This section provides real-world examples of lightweight specs - micro specs and quick specs that demonstrate efficient documentation for smaller changes.

## Micro Spec Examples

Micro specs are for changes under 1 day of effort. They capture just enough information to execute confidently.

### Example 1: API Rate Limit Adjustment

```markdown
# Increase API Rate Limit for Premium Users

**Type:** Config Update
**Effort:** 2 hours
**Assignee:** DevOps Team
**Date:** 2024-03-15

## What
Increase API rate limit from 100 to 500 requests per minute for premium tier users

## Why
Premium customers are hitting rate limits during peak usage, causing support tickets

## How
- Update rate limit config in `config/api-limits.yaml` for premium tier
- Deploy config change to staging, verify with load test
- Deploy to production during low-traffic window

## Acceptance
Premium users can make 500 requests/minute without hitting rate limits

## Files
- `config/api-limits.yaml` - Update `premium.requests_per_minute: 500`
```

---

### Example 2: Fix Broken Email Link

```markdown
# Fix Password Reset Email Link

**Type:** Bug Fix
**Effort:** 1 hour
**Assignee:** Sarah Chen
**Date:** 2024-03-14

## What
Fix password reset email that contains broken link pointing to old domain

## Why
Users cannot reset passwords; link points to `old-domain.com` instead of `app.example.com`

## How
- Update `EMAIL_BASE_URL` in email service configuration
- Test password reset flow end-to-end in staging

## Acceptance
Password reset email contains correct link that successfully loads reset page

## Files
- `services/email/config.ts` - Update base URL constant
```

---

### Example 3: Add Analytics Event

```markdown
# Track Checkout Button Clicks

**Type:** Minor Feature
**Effort:** 3 hours
**Assignee:** Frontend Team
**Date:** 2024-03-16

## What
Add analytics event when users click the checkout button

## Why
Product team needs data on checkout funnel conversion to prioritize improvements

## How
- Import analytics library in checkout component
- Add `onClick` handler that fires `checkout_initiated` event with cart value
- Verify event appears in analytics dashboard

## Acceptance
Clicking checkout button sends event to analytics with correct cart total

## Files
- `components/Checkout/CheckoutButton.tsx` - Add analytics tracking
```

---

## Quick Spec Examples

Quick specs are for 1-3 day efforts. They include user stories and implementation tasks but skip detailed design.

### Example 1: Add User Profile Avatar

```markdown
# User Profile Avatar - Quick Spec

## Requirements

**As a** registered user
**I want** to upload and display a profile avatar
**So that** other users can identify me visually in the application

**Acceptance Criteria:**
- [ ] Users can upload JPG, PNG, or GIF images up to 5MB
- [ ] Images are resized to 200x200 pixels
- [ ] Avatar displays in navigation header and profile page
- [ ] Default placeholder shown if no avatar uploaded
- [ ] Users can remove their avatar and revert to default

## Implementation Tasks

1. **Backend: Avatar Upload Endpoint** (4 hours)
   - Create `POST /api/users/:id/avatar` endpoint
   - Add image validation (type, size)
   - Integrate with image storage service
   - Return avatar URL on success

2. **Backend: Avatar Processing** (2 hours)
   - Resize uploaded images to 200x200
   - Generate thumbnail versions
   - Store in cloud storage bucket

3. **Frontend: Upload Component** (4 hours)
   - Create `AvatarUpload` component with drag-and-drop
   - Show upload progress indicator
   - Display error messages for invalid files

4. **Frontend: Avatar Display** (2 hours)
   - Update `UserMenu` component to show avatar
   - Update profile page with larger avatar
   - Implement fallback to initials/placeholder

5. **Testing** (2 hours)
   - Unit tests for upload validation
   - Integration test for full upload flow
   - Manual testing across browsers

## Definition of Done
- [ ] Code complete and reviewed
- [ ] Tests passing (>80% coverage for new code)
- [ ] Acceptance criteria verified in staging
- [ ] Documentation updated
```

---

### Example 2: Export Data to CSV

```markdown
# Data Export to CSV - Quick Spec

## Requirements

**As a** team administrator
**I want** to export team activity data to CSV
**So that** I can analyze usage in spreadsheet tools and create reports

**Acceptance Criteria:**
- [ ] Export includes: user name, action type, timestamp, details
- [ ] Date range filter allows selecting custom period (max 90 days)
- [ ] Export handles up to 50,000 rows
- [ ] File downloads immediately for small exports (<1000 rows)
- [ ] Email notification sent when large exports complete

## Implementation Tasks

1. **Backend: Export Endpoint** (3 hours)
   - Create `POST /api/teams/:id/export` endpoint
   - Accept date range parameters
   - Query activity logs with pagination

2. **Backend: CSV Generation** (2 hours)
   - Format data rows with proper escaping
   - Stream large files to avoid memory issues
   - Store completed exports in temp storage

3. **Backend: Async Processing** (3 hours)
   - Queue large export jobs (>1000 rows)
   - Send email when export ready
   - Include download link with 24h expiry

4. **Frontend: Export UI** (3 hours)
   - Add "Export" button to team dashboard
   - Date range picker component
   - Progress indicator for large exports
   - Success/error notifications

5. **Testing** (2 hours)
   - Test with various data sizes
   - Verify CSV format in Excel/Google Sheets
   - Test email delivery

## Definition of Done
- [ ] Code complete and reviewed
- [ ] Tests passing
- [ ] Verified with real team data in staging
- [ ] Rate limiting in place to prevent abuse
```

---

### Example 3: Dark Mode Toggle

```markdown
# Dark Mode Toggle - Quick Spec

## Requirements

**As a** user
**I want** to switch between light and dark color themes
**So that** I can reduce eye strain when working in low-light environments

**Acceptance Criteria:**
- [ ] Toggle switch in user settings
- [ ] Theme persists across sessions
- [ ] Respects system preference on first visit
- [ ] Smooth transition animation between themes
- [ ] All components render correctly in both themes

## Implementation Tasks

1. **Setup: Theme Infrastructure** (2 hours)
   - Create CSS custom properties for theme colors
   - Add `data-theme` attribute handling on root element
   - Store preference in localStorage

2. **Backend: User Preferences** (2 hours)
   - Add `theme_preference` field to user settings
   - API endpoint to save/retrieve preference
   - Sync across user devices

3. **Frontend: Toggle Component** (2 hours)
   - Create `ThemeToggle` switch component
   - Place in settings page and optional header
   - Read system preference with `prefers-color-scheme`

4. **Frontend: Theme Styles** (4 hours)
   - Define dark theme color palette
   - Update component styles to use CSS variables
   - Test all major components in dark mode

5. **Polish & Testing** (2 hours)
   - Add transition animation
   - Fix any contrast/accessibility issues
   - Cross-browser testing

## Definition of Done
- [ ] Code complete and reviewed
- [ ] All components pass visual review in both themes
- [ ] WCAG AA contrast requirements met
- [ ] Preference syncs across devices for logged-in users
```

---

## Comparison: When to Use Which

| Aspect | Micro Spec | Quick Spec |
|--------|------------|------------|
| **Effort** | < 1 day | 1-3 days |
| **Scope** | Single file/config change | Multiple components |
| **User Stories** | Implicit | Explicit |
| **Design Phase** | Skipped | Skipped (but notes if needed) |
| **Tasks** | 2-3 bullet points | Numbered with time estimates |
| **Review** | Self-review OK | Peer review recommended |

---

## Anti-Patterns to Avoid

### ❌ Over-Documenting Micro Changes

**Bad:** Writing a full quick spec for a typo fix
```markdown
# Fix Typo in Footer - Quick Spec
## Requirements
As a user, I want correct spelling...
## Implementation Tasks
1. Open footer.html (30 min)
2. Find the typo (15 min)
...
```

**Good:** Simple micro spec or just do it
```markdown
# Fix Footer Typo
**What:** Change "Copywrite" to "Copyright" in footer
**Files:** `components/Footer.tsx`
```

### ❌ Under-Documenting Complex Changes

**Bad:** Using micro spec for a feature that affects multiple systems
```markdown
# Add Payment Processing
**What:** Add Stripe payments
**How:** Integrate Stripe
```

**Good:** Recognize complexity and upgrade to quick or standard spec

---

## 🔗 Related Content

### Templates
- [Micro Spec Template](../templates/micro-spec-template.md) - Copy-paste template for tiny changes
- [Quick Spec Template](../templates/quick-spec-template.md) - Template for small features

### When to Upgrade
- [Spec Upgrade Examples](spec-upgrade-examples.md) - When lightweight specs aren't enough
- [Standard Specs](simple-feature-spec.md) - Full three-phase examples

### Methodology
- [Lightweight Specs Guide](../methodology/lightweight-specs.md) - Decision framework

[← Back to Examples](README.md) | [Standard Specs →](simple-feature-spec.md)
