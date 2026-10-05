# Changelog

## [0.1.0] — 2025-09-22 — Initial Frontend Build

### Added

**Project scaffolding**
- Vite + React 18 + Tailwind CSS 3 + React Router 6 project setup
- `tailwind.config.js` with full brand palette, typography, animations
- `postcss.config.js`, `vite.config.js` with `@` path alias
- `index.html` with Google Fonts (Inter + Plus Jakarta Sans)
- `public/favicon.svg`

**Design system (`src/components/ui/`)**
- `Button` — polymorphic, 7 variants, 4 sizes, loading state
- `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Field` (label/hint/error wrapper)
- `Card`, `CardBody`, `CardHeader`, `CardFooter`
- `Badge` — 6 tones, 3 sizes, optional dot
- `Modal` — portal-rendered, ESC-closes, scroll-locks
- `Spinner`, `PageLoader`, `InlineLoader`, `Skeleton`, `CardSkeleton`, `TableSkeleton`
- `EmptyState`, `ErrorState`, `ProgressBar`, `Avatar`, `Stat`

**Common components (`src/components/common/`)**
- `Seo` — per-route meta tags (title, description, OG, canonical, robots)
- `StructuredData` — JSON-LD injector
- `Breadcrumbs`
- `SectionHeading`, `Section`, `Container`, `Divider`

**Layouts (`src/layouts/`)**
- `PublicLayout` — header + footer + demo banner
- `DashboardLayout` — shared sidebar + topbar for teacher/student/admin
- `TeacherLayout`, `StudentLayout`, `AdminLayout` — themed variants
- `PublicHeader` (responsive with mobile drawer + dropdown menus)
- `PublicFooter` (4 nav columns + brand + social)
- `DemoBanner` (clearly labels demo build)

**Homepage sections (`src/components/sections/`)**
- `Hero` — with embedded Find My Tutor form (6 fields)
- `TrustStrip` — 4 trust claims (no fabricated stats)
- `HowItWorks` — 5-step process
- `TuitionTypes` — 3 tuition mode cards
- `FindSections` — FindByClass, FindByBoard, FindBySubject, FindByLocation
- `WhySrijee` — 6 reasons + BecomeTutorCTA + FinalCTA
- `Programs` — 4 course cards
- `Testimonials` — carousel with [PLACEHOLDER] demo data
- `BlogTeaser` — 3 latest posts
- `FAQ` — accordion with 8 FAQs

**Public pages (`src/pages/public/`)**
- `Home` — full homepage
- `About` — company story
- `Contact` — counsellor contact form (validated)
- `BecomeTutor` — landing + Name+Mobile → OTP → register flow
- `Blog` — index with category filter
- `BlogPost` — article view with related posts
- `TuitionPage` — reusable template (3 variants: online/home/one-to-one)
- `IndexPages` — TuitionIndex, ClassesIndex, BoardsIndex, SubjectsIndex, CoursesIndex
- `NotFound` — 404

**Auth pages (`src/pages/auth/`)**
- `TeacherLogin` — mobile + OTP
- `StudentLogin` — mobile + OTP
- `AdminLogin` — email + password (demo credentials)

**Teacher portal (`src/pages/teacher/`)**
- `ProfileWizard` — 5-step progressive wizard with auto profile-completion %
- `Dashboard` — welcome, status, stats, opportunities, upcoming
- `Profile` — read-only profile view
- `Opportunities` — matched requirements with apply action
- `Students` — assigned students table
- `Schedule` — weekly calendar grid
- `Earnings` — monthly payout history
- `Settings` — account + notification preferences

**Student portal (`src/pages/student/`)**
- `Requirement` — 3-step lead form wizard with progress bar
- `Dashboard` — lead pipeline + suggested tutors preview
- `Tutors` — auto-matched tutor list with scores
- `Messages` — placeholder

**Admin CRM (`src/pages/admin/`)**
- `Dashboard` — KPI stats + pipeline chart + recent leads + pending verifications
- `Leads` — searchable/filterable list
- `LeadDetail` — full lead with status update + counsellor assignment + follow-up scheduling
- `Teachers` — searchable/filterable list with profile completion bars
- `TeacherDetail` — full profile + verification actions (Approve/Reject/Suspend/Activate)
- `TutorMatching` — pick lead → see scored matches → shortlist
- `Demos` — demo class schedule table
- `Requirements` — all submitted requirements table
- `CMS` — hero + SEO editors (demo only)
- `Settings` — placeholder

**Service abstraction (`src/services/`)**
- `apiClient` — single network abstraction point (mock today, fetch-ready tomorrow)
- `authService` — OTP send/verify, admin login, session management
- `leadService` — CRUD + status pipeline + counsellor assignment
- `teacherService` — CRUD + profile completion + verification status
- `tutorService` — rule-based matching (subject/class/board/mode/location)
- `contentService` — CMS-like content access (reads from `src/data/` today)

**State management (`src/context/`, `src/hooks/`)**
- `AuthContext` — session, role, login, logout, hasRole
- `ToastContext` — global toast notifications (info/success/error/warning)
- `useAsync` — async state hook (data/loading/error/refetch)
- `useOTP` — OTP lifecycle (send, verify, resend cooldown, attempts)

**Routing (`src/routes/`)**
- `AppRoutes` — full route tree
- `ProtectedRoute` — auth + role-based gating with 403 view

**Data (`src/data/`)**
- `classes.js`, `boards.js`, `subjects.js`, `courses.js`, `tuitionTypes.js`, `locations.js`
- `testimonials.js`, `faqs.js`, `blogPosts.js`
- `mockLeads.js` (6 demo leads), `mockTeachers.js` (5 demo tutors), `mockOpportunities.js`

**Config (`src/config/`)**
- `site.js` — brand info (with [PLACEHOLDER] for unverified data)
- `nav.js` — public + dashboard sidebar nav
- `seo.js` — per-route SEO metadata registry

**Utils (`src/utils/`)**
- `cn` — className combiner
- `validation` — required, email, mobile, OTP, min/max length
- `format` — dates, INR, phone, initials, slugify, truncate
- `storage` — safe localStorage wrapper
- `mock` — delay, uid, demo OTP generator

**Documentation (`docs/`)**
- `FEATURES.md`, `ROUTES.md`, `DATA-MODELS.md`, `DESIGN-SYSTEM.md`
- `AUTHENTICATION.md`, `LEAD-FLOW.md`, `TEACHER-FLOW.md`, `STUDENT-FLOW.md`
- `CRM.md`, `SEO.md`, `CHANGE-GUIDE.md`

### Notes
- Demo OTPs are surfaced in the UI and console (clearly labeled).
- All demo data is marked with `[PLACEHOLDER]` where business data is unverified.
- `safelist` in Tailwind config covers dynamically-applied color classes (lead pipeline, board chips).
- Production build: 386 KB JS (105 KB gzipped), 49 KB CSS (8 KB gzipped).

### Known Limitations (Demo Build)
- No real SMS/Email/WhatsApp.
- No real payment integration.
- No server-side rendering (SPA only).
- No server-side authorization (frontend gating only).
- File uploads in profile wizard are local-only (no real upload).
- CMS changes are not persisted.
- Sitemap.xml not generated (TODO when backend is connected).
