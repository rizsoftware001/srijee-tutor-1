# Features

## Public Marketing Website

- **Homepage** with full section stack: Hero + Find Tutor form, Trust Strip, How It Works (5 steps), Tuition Types, Find by Class/Board/Subject/Location, Why Srijee, Programs, Testimonials, Become-a-Tutor CTA, Blog Teaser, FAQ, Final CTA.
- **SEO**: per-route meta tags, Open Graph, canonical URLs, JSON-LD structured data (Organization, FAQPage, Article).
- **Responsive**: tested at 320 / 375 / 414 / 768 / 1024 / 1280 / 1440 / 1920.
- **Accessibility**: semantic HTML, keyboard-navigable nav, focus rings, ARIA labels, reduced-motion support.

### Public Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about` | Company story & mission |
| `/contact` | Counsellor contact form |
| `/become-a-tutor` | Tutor recruitment landing + Name+Mobile → OTP → register |
| `/tuition` | Tuition types index |
| `/online-tuition` | Online tuition detail |
| `/home-tuition` | Home tuition detail |
| `/one-to-one-tuition` | One-to-one tuition detail |
| `/courses` | Course catalog |
| `/classes` | Class-wise tuition (Class 6–12) |
| `/boards` | Board-wise tuition (CBSE, ICSE, ISC, WBBSE, WBCHSE, IB, IGCSE, State) |
| `/subjects` | Subject-wise tuition (18 subjects) |
| `/blog` | Blog index with category filter |
| `/blog/:slug` | Blog post page |

## Student / Parent Flow

- **Requirement form** (`/student/requirement`): 3-step wizard — Student Details → Tuition Requirement → Review & Submit. URL params pre-fill from homepage hero form. Validation, loading, success states. Persists a `Lead` record (mock).
- **Login** (`/student/login`): Mobile + OTP (same flow as Teacher).
- **Dashboard** (`/student/dashboard`): Welcome card, lead status pipeline (visual), suggested tutors preview.
- **Suggested Tutors** (`/student/tutors`): Auto-matched against the student's submitted requirement. Match score + reasons displayed. Book Demo action.
- **Messages** (`/student/messages`): Empty state (placeholder for future chat).

## Teacher Portal

- **Become a Tutor** (`/become-a-tutor`): Landing page → low-friction register (Name + Mobile → OTP).
- **Profile Wizard** (`/teacher/profile/edit`): 5-step progressive wizard — Personal → Education → Experience → Preferences → Documents. Auto-computes profile completion %. Draft saving. Final submit transitions status to `PROFILE_SUBMITTED`.
- **Login** (`/teacher/login`): Mobile + OTP.
- **Dashboard** (`/teacher/dashboard`): Welcome, verification status, profile completion, active students, matched opportunities, upcoming classes, earnings.
- **My Profile** (`/teacher/profile`): Read-only profile view with all details.
- **Opportunities** (`/teacher/opportunities`): Matched tuition requirements with apply/save actions.
- **My Students** (`/teacher/students`): Assigned students table.
- **Schedule** (`/teacher/schedule`): Weekly calendar view.
- **Earnings** (`/teacher/earnings`): Monthly payout history.
- **Settings** (`/teacher/settings`): Account + notification preferences.

### Teacher Status System

```
REGISTERED
  ↓
PROFILE_INCOMPLETE → PROFILE_SUBMITTED → UNDER_REVIEW
  ↓
VERIFIED → ACTIVE
  ↓
REJECTED / SUSPENDED / INACTIVE
```

Only `ACTIVE` tutors are eligible for matching.

## Admin CRM

- **Login** (`/admin/login`): Demo email/password.
- **Dashboard** (`/admin/dashboard`): KPI stats (new leads, in-progress, converted, active tutors), lead pipeline distribution, recent leads, pending tutor verifications.
- **Leads** (`/admin/leads`): Full lead list with search + status filter.
- **Lead Detail** (`/admin/leads/:id`): Full lead info, status update, counsellor assignment, follow-up scheduling, notes.
- **Teachers** (`/admin/teachers`): Tutor list with search + status filter, profile completion bar.
- **Teacher Detail** (`/admin/teachers/:id`): Full profile + verification actions (Approve / Reject / Suspend / Activate).
- **Tutor Matching** (`/admin/matching`): Pick a verified lead → see matched tutors (rule-based scoring) → shortlist for demo.
- **Demos** (`/admin/demos`): Demo class schedule (scheduled + completed).
- **Requirements** (`/admin/requirements`): All submitted tuition requirements table.
- **CMS** (`/admin/cms`): Hero content, SEO metadata, reference data counts (demo only).
- **Settings** (`/admin/settings`): Placeholder for production configuration.

## Cross-Cutting Features

- **UI States**: Every interactive surface supports Loading / Success / Error / Empty / Disabled / Validation. No dead buttons.
- **Toast notifications**: Global, accessible, auto-dismiss.
- **Protected routes**: Role-based (TEACHER / STUDENT/PARENT / ADMIN) with redirect + 403 view.
- **Mock persistence**: All demo writes persist to localStorage so reloading keeps state.
- **SEO**: Per-route title/description/canonical/OG. JSON-LD for Organization, FAQ, Article.
- **Responsive**: Mobile drawer nav, responsive tables, breakpoint-tuned layouts.
- **Accessibility**: Focus rings, ARIA labels, keyboard nav, reduced-motion support.
- **Demo labels**: Banner on every page, demo OTPs surfaced, placeholder text for unverified business data.
