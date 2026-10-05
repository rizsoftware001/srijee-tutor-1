# Srijee Tutor v9 — Comprehensive Code Analysis

> Source: Google Drive file `1mFZGbzpvTqhPPOhbHEWpeEXv33RkYIZ6` → `srijee-tutor-v9.zip` (4.1 MB, 196 files)
> Project root: `/home/z/my-project/srijee-tutor-v9/`
> Analysis date: 2026-10-03

---

## 1. Project Identity

**Srijee Tutor — Frontend** (`srijee-tutor-frontend`, v0.1.0)
- A frontend-only build for an Indian tutoring company (real business: srijeetutor.com, founded 2013 by Ms. Srirupa Banerjee, Gold Medalist Calcutta University).
- A lead-generation, tutor-matching, and management platform with three portals: **Public marketing site**, **Student portal**, **Teacher portal**, and **Admin CRM**.
- Real business data has been integrated: founder bio, 7,820 students / 50 courses / 13 years / 9.5 rating stats, ASSOCHAM "Emerging Edtech Company of the Year" award, 3 verified student testimonials, 6 verbatim FAQs, 17+ real programmes, real subjects/boards/classes, real contact info (phone +91-9831114761, emails, Kolkata address).
- The codebase is explicitly **"backend-ready"**: every service file has a documented one-file swap path to migrate from `localStorage` mocks to real `fetch()` calls — without touching any UI/components/layouts/routes/context/hooks.

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18.3.1 (no Next.js, no TypeScript) |
| Build tool | Vite 4.5.14 |
| Styling | Tailwind CSS 3.4.13 + PostCSS + Autoprefixer |
| Routing | react-router-dom 6.26.2 |
| Fonts | Inter (body), Manrope / Plus Jakarta Sans (display), JetBrains Mono (mono) — Google Fonts |
| State | React Context + hooks (no Redux, no Zustand) |
| Persistence | `localStorage` (via `src/utils/storage.js` wrapper, prefixed `srijee:`) |
| Network | None (mock layer in `apiClient.js`) — designed for `fetch()` swap |
| Linting | ESLint (config not committed) |

**Build output:** ~125 modules, 416 KB JS (113 KB gzipped), 66 KB CSS (11 KB gzipped).

## 3. Architecture

```
Pages / Components / Hooks
        ↓
   Services (authService, leadService, teacherService, tutorService, contentService)
        ↓
   apiClient (single network abstraction point — mock today, fetch-ready tomorrow)
        ↓
   localStorage (mock store) ──── OR ──── real REST API (when ready)
```

Every page/component talks to **services**, never to `fetch()` or `localStorage` directly. Each service is a thin wrapper around `apiClient` (or `authService`). The `apiClient` currently dispatches to an in-browser mock store backed by `localStorage`. Tomorrow it can be swapped with `fetch()` calls — and **no page or component needs to change**.

### Three "swap seams" to go production:

1. **`src/services/apiClient.js`** — replace the mock `request()` body with `fetch()` calls against `VITE_API_BASE`.
2. **`src/services/authService.js`** — replace `sendOtp()` / `verifyOtp()` / `adminLogin()` with real API calls.
3. **`src/services/contentService.js`** (optional) — replace direct `data/*` imports with `apiClient.get('content/<resource>')`.

Then:
- Set `SITE.isDemo = false` in `src/config/site.js`.
- Remove the `<DemoBanner />` component from layouts.
- Remove the `demoOtp` displays in `useOTP.js` and the three auth pages.
- Remove all `[PLACEHOLDER: …]` strings once the business confirms real values.

`docs/CHANGE-GUIDE.md` documents the entire migration recipe step-by-step.

## 4. Project Structure (196 files)

```
srijee-tutor-v9/
├── index.html                      Anti-FOUC theme script, Google Fonts, theme-color metas
├── package.json / package-lock.json
├── vite.config.js                  `@` path alias → ./src
├── tailwind.config.js              Brand palette, keyframes, animations, safelist
├── postcss.config.js
├── README.md / CHANGELOG.md / CHANGE-LIST.md
├── docs/                           11 deep-dive markdown files (see §15)
├── public/
│   ├── favicon.svg
│   └── images/                     abuDhabi.jpeg, ananya-ghosh.png, TuitionModes.png
└── src/
    ├── main.jsx                    6 providers nested (BrowserRouter → Theme → Toast → Auth → Enrollment → ForeignLanguage → TrainingCourse)
    ├── App.jsx                     Trivial wrapper rendering <AppRoutes />
    ├── index.css                   966 lines — base tokens, components, utilities, hero animations
    ├── routes/
    │   ├── AppRoutes.jsx           Full route tree (507 lines, ~50% commented legacy)
    │   └── ProtectedRoute.jsx      Auth + role gating with 403 view
    ├── layouts/
    │   ├── PublicLayout.jsx        DemoBanner + Header + main + Footer
    │   ├── DashboardLayout.jsx     Shared sidebar + topbar (drives all 3 portals)
    │   ├── AdminLayout.jsx         accentColor="ink"
    │   ├── StudentLayout.jsx       accentColor="accent"
    │   └── TeacherLayout.jsx       accentColor="brand"
    ├── context/
    │   ├── AuthContext.jsx         Session, login, logout, hasRole
    │   ├── ToastContext.jsx        Global toasts (info/success/error/warning)
    │   ├── ThemeContext.jsx        Light/dark/system theme, persisted
    │   ├── EnrollmentContext.jsx   Opens StudentEnrollmentModal globally
    │   ├── ForeignLanguageContext.jsx  Opens ForeignLanguageModal w/ preselected lang
    │   └── TrainingCourseContext.jsx   Opens TrainingCourseModal w/ course config
    ├── components/
    │   ├── ui/                     Design-system primitives
    │   │   ├── Button.jsx          Polymorphic (as), forwardRef, 7 variants, loading
    │   │   ├── Badge.jsx           6 tones, 3 sizes, optional dot
    │   │   ├── Card.jsx            Card + CardBody + CardHeader + CardFooter
    │   │   ├── Input.jsx           Field, Input, Textarea, Select, Checkbox, RadioGroup
    │   │   ├── Modal.jsx           Portal, ESC-closes, scroll-lock
    │   │   ├── Skeleton.jsx        Spinner, PageLoader, InlineLoader, Skeleton, CardSkeleton, TableSkeleton
    │   │   ├── States.jsx          EmptyState, ErrorState, ProgressBar, Avatar, Stat
    │   │   └── ThemeToggle.jsx     Animated sun/moon crossfade
    │   ├── common/
    │   │   ├── ScrollToTop.jsx     behavior:'instant' on pathname change
    │   │   ├── SectionBackground.jsx  8 variants (dots/grid/mesh/glow/waves/blobs/rings/aurora)
    │   │   ├── SectionHeading.jsx  SectionHeading, Divider, Container, Section
    │   │   └── SEO.jsx            Seo (imperative <head> management), StructuredData (JSON-LD), Breadcrumbs
    │   ├── layout/
    │   │   ├── DemoBanner.jsx      Dismissible, only if SITE.isDemo
    │   │   ├── PublicHeader.jsx    Sticky, mega-menu, mobile drawer, theme toggle, CTAs
    │   │   └── PublicFooter.jsx    4 nav columns + brand + social + legal bar
    │   ├── home/
    │   │   ├── HomeTuitionMasterclassBanner.jsx      Dark glassy premium banner
    │   │   ├── MonthlyDoubtClearingSection.jsx       Vibrant orange "free monthly" banner
    │   │   └── TeacherSelectionDemoBanner.jsx       Teal "demo-first" 8-step banner
    │   ├── sections/                ~20 homepage sections (Hero, HowItWorks, TuitionTypes,
    │   │                             FindByClass, WhySrijee, Programs, ProgrammesSection,
    │   │                             StatsSection, FounderSection, AwardsSection,
    │   │                             Testimonials, StudentSuccess, StudentSupportFeedback,
    │   │                             VerifiedExpertTeachers, MasterClassSection, BlogTeaser,
    │   │                             FAQ, CTASections, TrustStrip, HeroBackground)
    │   └── student-enrollment/
    │       ├── enrollmentConfig.js             Static config + subject matrix
    │       ├── StudentEnrollmentModal.jsx      Custom large portal modal (z-90)
    │       ├── StudentEnrollmentWizard.jsx     3-step wizard (owns state, validation)
    │       ├── EnrollmentStepOne.jsx           Mode → Board → Class → Subject (cascading)
    │       ├── EnrollmentStepTwo.jsx           Requirement text + summary chips
    │       ├── EnrollmentStepThree.jsx         Contact details + consent
    │       ├── EnrollmentSuccess.jsx           Summary + Done / Submit Another
    │       ├── ForeignLanguageModal.jsx        Single-step language inquiry (z-95)
    │       └── TrainingCourseModal.jsx         Single-step course registration (z-95)
    ├── pages/
    │   ├── public/                  ~22 marketing pages (see §10)
    │   ├── auth/                    AdminLogin (email/pw), StudentLogin + TeacherLogin (OTP)
    │   ├── student/                 Dashboard, Requirement (3-step wizard), Tutors, Messages
    │   ├── teacher/                 ProfileWizard (5-step), Dashboard, Profile, Opportunities, Students, Schedule, Earnings, Settings
    │   └── admin/                   Dashboard, Leads, LeadDetail, Teachers, TeacherDetail, TutorMatching, Demos, Requirements, CMS, Settings
    ├── services/
    │   ├── apiClient.js             ApiError class + apiClient.{get,post,patch,put,delete,seed}
    │   ├── authService.js           ROLES, sendOtp, verifyOtp, getSession, logout, adminLogin
    │   ├── leadService.js           listLeads, getLead, createLead, updateLeadStatus, assignCounsellor, setNextFollowUp
    │   ├── teacherService.js        listTeachers, getTeacher, getTeacherByMobile, updateTeacher, submitTeacherProfile, setVerificationStatus
    │   ├── tutorService.js          matchTutors (rule-based scoring)
    │   └── contentService.js        Async reads from data/* (200ms simulated latency)
    ├── hooks/
    │   ├── useAsync.js              {data, loading, error, refetch}, mountedRef guard
    │   └── useOTP.js                status, sendOtp, verifyOtp, reset, canResend, cooldown, demoOtp
    ├── utils/
    │   ├── cn.js                    Classname combiner (strings/arrays/objects)
    │   ├── validation.js            required/emailFmt/mobileFmt/otpFmt/minLen/matchField + validate()
    │   ├── format.js                formatDate/Time/Relative, formatINR, formatPhone, maskPhone, initials, truncate, slugify, titleCase
    │   ├── storage.js               Safe localStorage wrapper (srijee: prefix)
    │   └── mock.js                  delay, uid, generateDemoOTP
    ├── data/                        21 mock data files (classes, boards, subjects, programmes, etc.)
    └── config/
        ├── site.js                  SITE brand object + ENROLL_CTA/TUTOR_CTA/PRIMARY_CTA constants
        ├── nav.js                   publicNav, footerNav, teacherNav, studentNav, adminNav
        └── seo.js                   defaultSeo + seoByRoute (~17 routes)
```

## 5. Routing (`src/routes/AppRoutes.jsx`)

Three layout zones, all driven by React Router v6 `<Routes>` + `<Route>` with `<Outlet />`:

### Public (PublicLayout, no auth)
- `/` Home · `/about` · `/contact` · `/become-a-tutor`
- `/tuition` (TuitionIndex) · `/online-tuition` · `/home-tuition` · `/one-to-one-tuition` (TuitionPage variant)
- `/courses` (CoursesIndex) · `/courses/foreign-language` · `/courses/spoken-english` · `/courses/computer-course` · `/courses/competitive-exams`
- `/our-presents` (team) · `/our-centers` · `/our-presence` · `/media-news` · `/investor-note`
- `/classes` · `/boards` · `/subjects` · `/gallery` · `/blog` · `/blog/:slug`
- `/masterclass/home-tuition` · `/home-tuition/teacher-selection` · `/free-doubt-clearing`
- `/student/requirement` (the lead form — public so anonymous users can submit)
- `/teacher/login` · `/student/login` · `/admin/login`
- `*` NotFound

### Teacher portal (ProtectedRoute roles=['TEACHER'], TeacherLayout)
- `/teacher/profile` · `/teacher/profile/edit` (ProfileWizard) · `/teacher/dashboard`
- `/teacher/opportunities` · `/teacher/students` · `/teacher/schedule` · `/teacher/earnings` · `/teacher/settings`

### Student portal (ProtectedRoute roles=['STUDENT','PARENT'], StudentLayout)
- `/student/dashboard` · `/student/tutors` · `/student/messages`

### Admin CRM (ProtectedRoute roles=['ADMIN','SUPER_ADMIN'], AdminLayout)
- `/admin/dashboard` · `/admin/leads` · `/admin/leads/:id` · `/admin/teachers` · `/admin/teachers/:id`
- `/admin/matching` (TutorMatching) · `/admin/demos` · `/admin/requirements` · `/admin/cms` · `/admin/settings`

`ProtectedRoute` is `loading`-aware (shows skeleton while session loads), redirects to a role-specific login path when unauthenticated, and renders a 403 view (with "Back to Home" CTA) when authenticated but missing role.

## 6. Authentication & Roles

Six roles defined in `authService.ROLES`:

| Role | Login path | Portal |
|---|---|---|
| STUDENT / PARENT | `/student/login` (mobile + OTP) | `/student/*` |
| TEACHER | `/teacher/login` (mobile + OTP) | `/teacher/*` (routes to `/profile/edit` if `profileCompletion === 0`, else `/dashboard`) |
| ADMIN / SUPER_ADMIN | `/admin/login` (email + password) | `/admin/*` |
| COUNSELLOR | (no portal yet — planned) | n/a |

### OTP Flow (`useOTP` hook)
- 6-digit numeric code, generated client-side via `generateDemoOTP()` (random 100000–999999)
- Stored in `localStorage` key `srijee:otp-registry` keyed by mobile: `{otp, expiresAt: 5min, attempts: 0, role, name}`
- **Demo OTP is surfaced in the UI** (warning-tinted chip) and `console.info` — clearly labelled "Demo OTP"
- 30-second resend cooldown, max 5 verify attempts
- On verify success: finds-or-creates a Teacher or Student record (with `verificationStatus: 'REGISTERED'` for teachers, `'ACTIVE'` for students/parents), creates a session with a `demo-token-<timestamp>` token persisted to `localStorage` key `srijee:session`

### Admin Login
Hardcoded demo credentials: `admin@srijee.demo` / `admin123` → creates an ADMIN session with `userId: 'admin-demo'`. Throws `ApiError` otherwise.

`AuthContext` provides `{session, user, role, isAuthenticated, loading, login, logout, hasRole, ROLES}` to the entire app via `useAuth()`.

## 7. State Management — Context Providers

Six context providers nested in `main.jsx` (outer → inner):

1. **`BrowserRouter`** — client-side routing
2. **`ThemeProvider`** — light/dark/system theme with `prefers-color-scheme` detection, persisted to `localStorage` key `srijee:theme`. Applies `dark` class to `<html>` for Tailwind dark mode (`darkMode: 'class'`). Anti-FOUC script in `index.html` applies theme before paint.
3. **`ToastProvider`** — global toast notifications. `useToast()` returns `{info, success, error, warning}`. Auto-dismiss after 4s (6s for errors). Renders a fixed-position viewport in the bottom-right with `aria-live="polite"`.
4. **`AuthProvider`** — session state + login/logout/hasRole.
5. **`EnrollmentProvider** — mounts `<StudentEnrollmentModal>` once at the app root. `useEnrollment()` returns `{openEnrollment, closeEnrollment, isEnrollmentOpen}` — any component can trigger the enrollment wizard from anywhere.
6. **`ForeignLanguageProvider`** — same pattern, mounts `<ForeignLanguageModal>` (accepts `initialLanguage` prefill).
7. **`TrainingCourseProvider`** — same pattern, mounts `<TrainingCourseModal>` (accepts a `course` config object with `{courseName, courseType, icon, gradient}`).

This "modal-at-root + context-trigger" pattern means **no page needs to manage modal state locally** — a single call to `openEnrollment()` (or `openForeignLanguage()`, `openTrainingCourse()`) opens the corresponding modal globally.

## 8. Services Layer (Backend-Ready)

### `apiClient.js`
Single network abstraction point. Exports `ApiError` (extends Error with `status`/`message`/`details`) and the `apiClient` object:

- `get(resource, opts={})` — returns a record (if `opts.id`) or array (with optional `opts.query` for AND-matching key/value pairs).
- `post(resource, body)` — creates record with `id: uid(resource)`, `createdAt`, `updatedAt`; `unshift`s to head.
- `patch(resource, id, body)` — merges, bumps `updatedAt`, 404 if missing.
- `put(resource, id, body)` — alias for patch.
- `delete(resource, id)` — splices record out, 404 if missing.
- `seed(resource, seedData=[])` — idempotent seeding (only writes if `localStorage` key is null).

Store key pattern: `db:<resource>` (e.g. `srijee:db:leads`). Default simulated latency: 450ms.

### `authService.js`
- `sendOtp({mobile, role, name})` — generates OTP, stores in `otp-registry` with 5-min expiry, logs `[DEMO OTP]` to console, returns `{sent, expiresInSec: 300, demoOtp, notice}`.
- `verifyOtp({mobile, otp, role, name})` — validates against registry; throws on missing/expired/>5 attempts/wrong; on success finds-or-creates user, creates session, returns `{session, user}`.
- `getSession()` / `logout()` / `adminLogin({email, password})`.

### `leadService.js`
- `listLeads({status, search})` — fetches all, filters by `status` (skip `'ALL'`), case-insensitive search across `name, id, phone, subject, location`.
- `getLead(id)` · `createLead(payload)` (auto-sets `source`, `status: 'NEW'`, `assignedCounsellor: null`, follow-up timestamps) · `updateLeadStatus(id, status, notes)` · `assignCounsellor(id, name)` · `setNextFollowUp(id, isoDate)`.
- Seeded once on first import via `apiClient.seed('leads', mockLeads)`.

### `teacherService.js`
- `listTeachers({status, search})` — filters by `verificationStatus`, search across `name, id, mobile, subjects[], locality`.
- `getTeacher(id)` · `getTeacherByMobile(mobile)` · `updateTeacher(id, patch)` — special handling: if `patch.stepCompleted`, adds step to `Set` of `stepsCompleted`, recomputes `profileCompletion = min(100, steps × 20)`, and if completion reaches 100 while status was `REGISTERED`, transitions to `PROFILE_SUBMITTED`.
- `submitTeacherProfile(id)` — sets `verificationStatus: 'PROFILE_SUBMITTED'`, `profileSubmittedAt: now`.
- `setVerificationStatus(id, status)`.
- Seeded with `mockTeachers` on import.

### `tutorService.js`
- `matchTutors({class, board, subject, location, mode})` — filters teachers to `verificationStatus === 'ACTIVE'`, then applies rule-based scoring (base 50, capped at 100):
  - Subject match (case-insensitive `.includes`): **+25** → "Subject match"
  - Class match (array `.includes`): **+15** → "Teaches this class"
  - Board match: **+10** → "Board expertise"
  - Mode match (`teachingModes` array): **+10** → "Offers preferred mode"
  - Location match (`preferredLocations`, case-insensitive): **+15** → "Serves your area"
  - Rating bonus: `+Math.round(tutor.rating)` (up to ~+5)
  - Returns `[{tutor, score, reasons}]` filtered to `score >= 50`, sorted descending. Simulated latency 600ms.

### `contentService.js`
Async reads from `data/*` files with 200ms simulated latency. Designed for drop-in swap to `apiClient.get('content/<resource>')`. Methods: `getClasses, getClassGroups, getBoards, getSubjects, getCourses, getTuitionTypes, getLocations, getTestimonials, getFaqs, getBlogPosts, getBlogPost(slug), getBlogCategories`.

## 9. UI Design System (`src/components/ui/`, `src/index.css`)

### CSS (`src/index.css`, 966 lines)
Lines 1–161 are a fully-commented earlier minified variant. Live CSS starts at line 164.

- `@layer base` — CSS custom properties on `:root` for theming (bg/border/text tokens as RGB triplets, font-size clamps via `clamp()`), `.dark` overrides (dark color-scheme + token swaps), default border color, focus-visible ring, ::selection brand tint, custom scrollbar, `prefers-reduced-motion` collapses animations to 0.01ms.
- `@layer components` — `.container-page/narrow/wide`, `.section`, `.card`, `.card-hover`, `.chip`, `.btn` + 7 variant classes (`btn-primary`, `btn-secondary`, `btn-ghost`, `btn-accent`, `btn-teal`, `btn-outline`, `btn-danger`, `btn-success`), `.btn-sm/md/lg`, `.input`, `.input-error`, `.label`, `.hint`, `.error-text`, `.eyebrow`, `.h1–h5`, `.text-gradient`, `.text-gradient-warm`, `.status-dot`, `.live-dot`, `.skeleton` (shimmer animation).
- `@layer utilities` — `.text-balance/.text-pretty`, `.bg-brand-gradient/.bg-teal-gradient/.bg-brand-teal-gradient`, `.bg-hero-radial` + dark variant, `.grid-pattern/.dot-pattern` + dark variants, `.mask-fade-x`, `.delay-75/150/300/500`, `.no-scrollbar`, `.perspective-1000`, `.preserve-3d`, `.snap-x-mandatory/.snap-start`, `.section-surface-brand/-teal/-accent` (+ dark variants).
- Hero animations (outside `@layer`): `.hero-grid` (animated grid + mask), `.hero-orb-one/two/three` (3 blurred color blobs with `heroOrbOne/Two/Three` keyframes at 14s/17s/20s), `.hero-network-line/-node` (SVG line/node pulse), `.hero-particle`, `.hero-star`, `.hero-light-sweep`, `.animate-float-slow/-medium`, `.hero-marquee-track` (`heroMarquee` 32s linear, paused on hover), `auroraShift` keyframes. `prefers-reduced-motion` disables all. Mobile media query reduces intensity.

### Components

| Component | Key features |
|---|---|
| `Button` | Polymorphic via `as` prop (`<Button as={Link}>`), `React.forwardRef` with named fn, 7 variants (primary/secondary/ghost/accent/outline/danger/success), 4 sizes (sm/md/lg/icon), `loading` swaps in inline SVG spinner + `aria-busy`, `leftIcon`/`rightIcon` slots. |
| `Badge` | 6 tones (brand/accent/success/warning/danger/ink), 3 sizes (xs/sm/md), optional `dot`, ring-inset. |
| `Card` | Composable (Card + CardHeader + CardBody + CardFooter), `hover` prop adds `card-hover`, polymorphic `as`. |
| `Input` | `Field` (label/hint/error wrapper with red asterisk for required), `Input` (with `leftIcon`/`rightSlot`), `Textarea`, `Select` (custom chevron via data-URI SVG), `Checkbox`, `RadioGroup` (1/2/3 cols, accepts strings or `{value,label,desc}`). All `React.forwardRef`. |
| `Modal` | `createPortal` to `document.body`, ESC-closes, scroll-locks (`body.style.overflow = 'hidden'`), 4 sizes (sm/md/lg/xl), `role="dialog"` + `aria-modal`, mobile bottom-sheet (`items-end`) vs desktop centered (`sm:items-center`), `animate-fade-in` backdrop + `animate-scale-in` panel, body `max-h-[70vh]` with `overflow-y-auto`, footer `flex-col-reverse sm:flex-row`. |
| `Skeleton` | `Spinner` (role=status, aria-label=Loading), `PageLoader`, `InlineLoader`, `Skeleton` (multi-line staggered widths `100 - i*12%`), `CardSkeleton`, `TableSkeleton`. |
| `States` | `EmptyState` (dashed border, icon in white shadowed circle), `ErrorState` (warning SVG, retry button), `ProgressBar` (clamps 0–100, 5 tones, optional %label with tabular-nums, ease-out-expo transition), `Avatar` (initials from first 2 words OR `<img src>`), `Stat` (KPI card with tone-colored icon chip). |
| `ThemeToggle` | 2 stacked absolutely-positioned SVG icons (sun + moon) in `overflow-hidden` button, scale+rotate+fade crossfade, dynamic `aria-label`, full `dark:` variants. |

### Common Components
- `ScrollToTop` — `useLocation()` + `useEffect` calls `window.scrollTo({top:0, behavior:'instant'})` on every pathname change. Renders null.
- `SectionBackground` — 8 variants (dots, grid, mesh, glow, waves, blobs, rings, aurora) + 6 tones (brand/teal/accent/success/warning/ink) + `intensity` prop (scales every alpha) + `position`/`corner` props. All `aria-hidden` + `pointer-events-none`. Uses inline `rgba()` strings so it's dark-mode safe.
- `SectionHeading` — `SectionHeading` (eyebrow + title + description + action, with align lookup), `Divider` (with/without label), `Container` (page/narrow/wide + `relative z-10`), `Section` (4 tones: default/subtle/dark/brand).
- `SEO` — `Seo` (imperatively manages `document.title`, meta description, OG, Twitter card, canonical, robots via `useEffect`), `StructuredData` (injects `<script type="application/ld+json">` JSON-LD into `document.head` with cleanup), `Breadcrumbs` (semantic `<nav aria-label="Breadcrumb">` + `<ol>` with last item as plain text).

## 10. Public Marketing Site (`src/pages/public/`)

### Homepage (`Home.jsx`) — section composition order
Hero → TrustStrip → StatsSection → HowItWorks → **TeacherSelectionDemoBanner** (FEATURE) → TuitionTypes → **HomeTuitionMasterclassBanner** (FEATURE) → VerifiedExpertTeachers → FounderSection → FindByClass → **MonthlyDoubtClearingSection** (FEATURE) → StudentSupportFeedback → WhySrijee → FeaturedProgrammesSection → MasterClassSection → AwardsSection → StudentSuccess → BecomeTutorCTA → BlogTeaser → FAQ → FinalCTA.

Three "FEATURE" banners (`components/home/*`) are interleaved between standard sections to highlight unique Srijee offerings:
- **MasterClassBanner** — "First Time in India — MasterClass for Home Tuition" (dark glassy premium banner, 2-col with rotated card stack visual)
- **TeacherSelectionDemoBanner** — "Experience the Class Before You Choose" (teal gradient, 8-step preview grid with hairline separators)
- **MonthlyDoubtClearingSection** — "Free Concept & Doubt Clearing — Every Month" (vibrant orange gradient, white card with calendar icon)

Homepage emits **two `<StructuredData>` blocks**: `EducationalOrganization` (built from `SITE` config: name, legalName, url, foundingDate, founder Person, PostalAddress with city/state/IN, telephone, email, awards array) + `FAQPage` (built from `faqs` data).

### Hero (`Hero.jsx`, ~1001 lines)
Two-column grid (`lg:grid-cols-[1fr_0.78fr]`):
- Left: animated stat counters (`AnimatedNumber` uses `IntersectionObserver` + `requestAnimationFrame` with cubic ease-out `1 - (1-t)^3` over 1500ms; supports decimals via `toFixed(1)` and integers via `toLocaleString('en-IN')`); gradient-clipped "Future Ready" headline; glass-form with "Live" badge.
- Right: `HeroVisual` — auto-cycling `HERO_IMAGES` carousel (4s interval via `setInterval`), floating glass cards (Expert Tutors / Personalised / Online Classes), pagination dots.
- Below: programme marquee strip (`heroMarqueeItems` duplicated for seamless infinite scroll via `hero-marquee-track` CSS animation).
- `openEnrollment()` from `EnrollmentContext` is wired to primary CTA.

### Other public pages (~22 total)

| Page | Notes |
|---|---|
| `About.jsx` | Founder story, StatsSection, FounderSection, mission/vision cards, AwardsSection, About testimonials (2-col grid with alternating gradients), "What we do" 6-card grid, team members grid, centres list, MasterClassSection, FinalCTA. |
| `Contact.jsx` | Banner + 12-col grid (5-col info column with ContactRows + dashed quick-enroll card, 7-col form Card + map Card with iframe). Form fields: name/phone/email/subject(select)/message. Validation via `validate()` + `required/mobileFmt/emailFmt`. Submit simulates 700ms, then success toast. Map iframe uses `SITE.address.mapEmbedUrl`. |
| `BecomeTutor.jsx` | Hero + 4 glass cards (Verified/Matched/Flexible/Supported) + Benefits 6-grid + Process 5-step + Register form (Name + Mobile → `useOTP({role: ROLES.TEACHER})` → 6-box `OTPInput` with auto-advance + paste handler → on verified: `login(session)` + smart routing to `/teacher/profile/edit` if `profileCompletion === 0` else `/teacher/dashboard`). Demo OTP chip in warning tone. |
| `Blog.jsx` | Category filter (chips with active/inactive styles), featured post (first matching) + grid of rest. `blogPosts` data; `formatDate` + `truncate`. Gradient placeholders with SVG "lines" icon — no real cover images. |
| `BlogPost.jsx` | `useParams` slug lookup; 404 fallback card; `<Seo>` with explicit title/description/canonical; `Article` JSON-LD; Breadcrumbs; `prose prose-lg` body; "Key takeaways" hardcoded list (not from post data); brand-tinted CTA card → `/student/requirement`; related articles grid; FinalCTA. |
| `Gallery.jsx` | Category filter, 4-col grid of square tiles (gradient placeholders with emoji + title overlay), staggered `animationDelay: ${i * 30}ms`, lightbox modal (`bg-ink-950/70 backdrop-blur-md`). "Demo" badge + "replace with real Srijee event photos before launch" disclaimer. |
| `TuitionPage.jsx` | **Parameterized page** — accepts `variant` prop, serves 3 routes (`online-tuition`, `home-tuition`, `one-to-one-tuition`). Inline `VARIANTS` dict with title/headline/desc/points/faqs per variant. FAQ JSON-LD emitted. Reuses `<HowItWorks />` and `<FinalCTA />`. |
| `IndexPages.jsx` | 5 named exports: `TuitionIndex` (3-card grid), `ClassesIndex` (grouped chips by `classGroups`), `BoardsIndex` (board cards), `SubjectsIndex` (compact list rows with icon box + Popular tag), `CoursesIndex` (4-col cards with icon + label + description + features). All CTAs funnel to `/student/requirement`. |
| `ForeignLanguage.jsx` | 3 languages (Spanish 🇪🇸 / French 🇫🇷 / German 🇩🇪) with gradients. Uses `useForeignLanguage()` context (passes language name to modal). 8-card benefits grid, CEFR level curriculum (A1/A2/B1/B2), FAQPage JSON-LD. |
| `SpokenEnglish.jsx` | 6-module curriculum, 4-stat info strip, 6-persona audience grid. Uses `useTrainingCourse()` with `COURSE` config `{courseName: 'Spoken English', courseType: 'Language Course', icon: '💬', gradient: 'from-accent-500 to-accent-700'}`. |
| `ComputerCourses.jsx` | 8 courses (Python, Web Dev, MS Office, Tally, Coding for Kids Scratch, CS 11–12, Database & SQL, Graphic Design). 8-card "Why Srijee" grid. |
| `CompetitiveExams.jsx` | 4 exams (JEE, NEET, NTSE, OLYMPIAD) — full-width stacked cards (not grid). 12-col layout: 4-col gradient panel + 8-col body with papers/subjects chips + Apply/Talk-to-counsellor buttons. Mentions Class XIII drop-year programme. |
| `MasterclassHomeTuition.jsx` | Destination for MasterClass banner. Premium dark teal hero with masked grid + 2 glow blobs, gradient-clipped H1, "First Time in India" eyebrow. 6 premium feature cards, 3-step "How it works" with tabular numbers, 2-col teacher cards (with `onError` fallback to Unsplash portrait + schedule panels), CTA strip, reused `<FAQ />` and `<FinalCTA />`. `Course` JSON-LD. |
| `TeacherSelection.jsx` | Destination for TeacherSelection banner. Teal hero, 3 "Why demo-first" cards + dashed "Please note" info box, 8-step process grid with gradient numbered badges + desktop connector lines, 2-col trust section (left: aligned SectionHeading + checklist + CTA; right: "Verified" trust card with ShieldCheckIcon + 3 Pill components + "After the demo" note), inline FAQ accordion (local `InlineFAQ` with rotating plus icon, `aria-expanded`, accent colors), FinalCTA. `FAQPage` JSON-LD generated from `PROCESS_FAQS`. |
| `FreeDoubtClearing.jsx` | Destination for MonthlyDoubtClearing banner. The only page in this batch with a fully functional lead-capture form wired to `createLead()`. Vibrant orange hero, 3-card "What is it", 2-col "Who can join" checklist + "What you can ask" chips, 4-step "How it works" with accent-colored numbers, 2-col subjects & "Why monthly" panel, registration form (`Section id="register"` anchor target), inline FAQ accordion, FinalCTA. `Event` JSON-LD (`eventStatus: EventScheduled`, `eventAttendanceMode: OnlineEventAttendanceMode`, `isAccessibleForFree: true`). Source label `'Website — Free Doubt Clearing'` for CRM attribution. |
| `NotFound.jsx` | Minimal — huge "404" + h2 + paragraph + 2 buttons. No Breadcrumbs/StructuredData/FinalCTA. |
| `OurPresents.jsx` | "Meet Our Team" — 6 team members in 3-col grid. Eyebrow says "Our Presents" while H1 says "Meet Our Team" (minor content inconsistency). |
| `OurCenters.jsx` | 4 centres (Kolkata Head Office, Delhi, Mumbai, Abu Dhabi) as vertical stacked cards. Conditional rendering hides phone/email if value `includes('Confirm')` (placeholder centres without confirmed contact). |
| `OurPresence.jsx` | **Inconsistent** — does NOT use `Seo`, `Section`, `Container`, or `Card`. Uses raw Tailwind markup with `container-page`. Inline `centers` array (4 entries) + inline `presenceStats` (4). No `<Seo>` — significant SEO gap. |
| `MediaNews.jsx` | **Inconsistent** — same as OurPresence, no Seo. Inline `newsItems` (3) + `mediaStats` (3). "Read More" buttons are non-functional (no onClick). Explicitly labelled "Demo content". |
| `InvestorNote.jsx` | **Inconsistent** — no Seo. Dark gradient hero, 4 focus areas used twice (sidebar numbered list + growth-area cards), 4-milestone vertical timeline, amber disclaimer box. |

### Three modal-triggering patterns across public pages
| Hook | Used in | Modal opened |
|---|---|---|
| `useEnrollment()` | Contact, ForeignLanguage banner, CompetitiveExams, MasterclassHomeTuition, TeacherSelection, FreeDoubtClearing success screen | `<StudentEnrollmentModal>` (3-step wizard) |
| `useForeignLanguage()` | ForeignLanguage (per-language enroll buttons + curriculum cards) | `<ForeignLanguageModal>` (single-step inquiry, pre-selected language) |
| `useTrainingCourse()` | SpokenEnglish, ComputerCourses | `<TrainingCourseModal>` (single-step registration, course-colored gradient header) |

## 11. Student Enrollment (`src/components/student-enrollment/`)

### `enrollmentConfig.js`
- `BOARD_OPTIONS` (9), `CLASS_OPTIONS` (12, Roman numerals), `LEARNING_MODE_OPTIONS` (4 with emoji + desc), `PREFERRED_TIME_OPTIONS` (5).
- `getSubjectsForBoardAndClass(board, classLevel)` — uses a subject matrix: 6 subject pools (`PRIMARY_SUBJECTS`, `MIDDLE_SUBJECTS`, `SECONDARY_SUBJECTS`, `SENIOR_SCIENCE_SUBJECTS`, `SENIOR_COMMERCE_SUBJECTS`, `SENIOR_HUMANITIES_SUBJECTS`, `SENIOR_WB_SUBJECTS` for WBBSE). Senior streams for most boards = `[...SCIENCE, ...COMMERCE, ...HUMANITIES]` concatenated; IB has custom senior list (no Accountancy/Commerce core); WBBSE reuses SECONDARY for senior. Falls back to 'State Board' config. Dedupes via `[...new Set(...)]`.
- `INITIAL_ENROLLMENT_STATE` — 14 fields including legacy `programmes: []`, `subjects: []`, `otherSubject: ''` for backward compat.
- `STEPS` — 3 steps: `[{n:1, key:'requirement', label:'Requirement'}, {n:2, key:'message', label:'Requirement Details'}, {n:3, key:'details', label:'Your Details'}]`.

### `StudentEnrollmentWizard.jsx`
- Owns all state (`step`, `values` from `INITIAL_ENROLLMENT_STATE`, `errors`, `submitting`, `submitted`).
- `stepValidators` memoized array of 3 schema maps; validators via `validate()` from `utils/validation.js` (`isRequired`, `isIndianMobile`, `isEmail`).
- `setField(key, value)` clears the field's error on update.
- Navigation: `next()` validates current step, sets errors if invalid, otherwise advances (clamped to `STEPS.length-1`); `back()` clears errors and decrements.
- Submit (on step 2): validates step 2 → `await createLead({...payload, name: parentName||studentName, mode: learningMode, class: classLevel, source: 'Website — Enroll as Student'})` → success → `setSubmitted(true)` + toast → renders `<EnrollmentSuccess>` with Done / Submit Another buttons.
- `ProgressIndicator` — horizontal stepper with `aria-current="step"` on active, check icon on complete, ring-4 ring-brand-100 (light) / ring-brand-900/40 (dark) on active.
- Sticky footer nav (`flex-col-reverse sm:flex-row`), dynamic Next label `Next: {step === 0 ? 'Requirement Details' : 'Your Details'} →`.
- Inner content `max-h-[55vh] overflow-y-auto` — modal has its own inner scroll region separate from the sticky footer.

### Steps
- **Step 1 (`EnrollmentStepOne`)** — Progressive requirement selection. Render order: Learning Mode → Board → Class → Subject. Each selector only appears after the previous is selected. `handleBoard()` cascade-resets `classLevel`/`subject`/`subjects[]`/`otherSubject`; `handleClass()` resets `subject`/`subjects[]`/`otherSubject`; `handleSubject()` keeps `subjects: [value]` in sync. Sub-components: `RevealSection` (glassmorphism wrapper), `SelectionTile` (large 92px-min-height tiles with `role="radio"` for Learning Mode), `OptionPill` (board/subject pills with CheckIcon prefix), `OptionButton` (class buttons in 3/4/6-col grid).
- **Step 2 (`EnrollmentStepTwo`)** — Single requirement-text question. Read-only summary chips of Step 1 selections in a brand-tinted glass card. `Textarea` (rows=6) via shared `Field`/`Textarea`.
- **Step 3 (`EnrollmentStepThree`)** — Contact details. Two-column grid (sm:grid-cols-2) for name/parent/phone/email/location/preferredTime. Phone field has `autoComplete="tel"`, `type="tel"`, `leftIcon={<PhoneIcon />}`. Location Select uses `locations` data (`key=slug`, `value=label`). Required consent checkbox with custom styling. Summary card at top showing `"{subject} · {classLevel} · {board} · {learningMode}"`.

### `StudentEnrollmentModal.jsx`
Custom large portal modal (`z-[90]`, `lg:max-w-5xl` on desktop, `h-screen` on mobile). `useEffect` for ESC handler + body scroll lock + focus management (`setTimeout(() => dialogRef.current?.focus(), 50)`). Header has custom mini-logo (brand-teal-gradient box with SVG).

### `ForeignLanguageModal.jsx` & `TrainingCourseModal.jsx` (`z-[95]`)
Both are single-step forms with a 2-state flow (`step: 0 = form, 1 = success`). Both use `createLead()` with course-specific payloads and `source` labels. `ForeignLanguageModal` lacks an ESC handler (a11y gap; the other two have one). `TrainingCourseModal` accepts a `course` config object and renders a course-colored gradient header with a dotted texture overlay.

## 12. Student Portal (`src/pages/student/`)

- **`Dashboard.jsx`** — Welcome card with inline orange gradient + verification status messaging + 9-status lead pipeline stepper (slices `LEAD_STATUSES` to first 9, "Current" badge on active step, ✓ on completed steps) + suggested tutors preview (`mockOpportunities.slice(0, 3)` with match score badges — note these are mock opportunities, not real matched tutors). Empty state with "Find My Tutor" CTA. `listLeads({search: user?.mobile})` to find this student's leads.
- **`Requirement.jsx`** — 3-step "Find My Tutor" wizard (Student/Parent Details → Tuition Requirement → Review & Submit). URL-param prefill from `useSearchParams` (`?class=…&board=…&subject=…&location=…&mode=…&preferredTime=…` — lets marketing links deep-link into the wizard). Submit calls `createLead({name, phone, email, class, board, subject, location, mode, preferredTime, budget, notes})` (note `classLevel` → `class` mapping on submit). SuccessScreen shows Reference ID + "Back to Home" + "Submit Another".
- **`Tutors.jsx`** — Reads student's most recent lead, calls `matchTutors({class, board, subject, location, mode})`. Each tutor card: avatar with initials, name, qualification, `Badge tone="success" size="sm">{score}% match`, subject badges (first 3), board badges (first 2), rating row, reasons list with green dot bullets. "Book Demo" triggers a `toast.success` (no real API call). No-lead state with "Find My Tutor" CTA.
- **`Messages.jsx`** — Placeholder EmptyState with ChatIcon. Stub awaiting real implementation.

## 13. Teacher Portal (`src/pages/teacher/`)

- **`Dashboard.jsx`** — Brand-gradient welcome banner with verification status messaging (4 branches on `verificationStatus`). `getTeacher(user.userId)` via `useAsync` (with `.catch(() => null)` fallback). 4-stat grid (Active Students, Open Opportunities, This Month Earnings, Rating) — earnings hardcoded as "pending". Profile completion bar shown only when `< 100`. Matched opportunities preview (`mockOpportunities`, col-span-2) + upcoming classes (`mockStudents.slice(0, 4)`).
- **`ProfileWizard.jsx`** — Most complex page. 5-step wizard (Personal/Education/Experience/Preferences/Documents, each +20% completion). `STEPS` array maps step → `key` + `fields[]`. Per-step save calls `updateTeacher(user.userId, {...stepFields, stepCompleted: stepKey})` which adds step to `stepsCompleted[]`, recomputes `profileCompletion`, and (only at completion=100 with status REGISTERED) transitions to PROFILE_SUBMITTED. Final submit calls `submitTeacherProfile(user.userId)` then redirects to `/teacher/dashboard` with success toast. "Save draft" (silent) vs "Save & Continue" (toast + advance). Local `ChipPicker` (pill-style multi-select) and `FileUpload` (dashed-border box with hidden `<input type="file" accept="image/*,.pdf">`, displays filename when selected). Auth guard redirects to `/teacher/login` if `!user || role !== 'TEACHER'`. Step navigation header has clickable step circles (current/done/future states). Mobile is disabled (verified at registration). Teaching modes stored as `[v]` single-value array.
- **`Profile.jsx`** — Read-only profile view. Loading guard returns skeleton. Missing-profile guard returns EmptyState. Header card with avatar + name + qualification + verification badge + rating badge. 3-col stats row (Subjects/Classes/Students count). 2-col layout: Teaching Details (Subjects/Classes/Boards/Modes/Preferred Locations/Availability/Expected Fee) + Personal & Education (Mobile/Email/City/Locality/Qualification/Specialisation/Institution/Experience).
- **`Opportunities.jsx`** — List of matched requirements. `apply(id)` → toast only (no API call). 2-section card layout (details left, action buttons right). Detail grid: Class/Board/Mode/Subject/Location/Schedule/Budget/Distance (only if `o.distanceKm`). Apply/Save for later buttons. Empty state with SparkIcon.
- **`Students.jsx`** — `mockStudents` only. 3-stat header (Active/Online/Home counts). 6-col table: Student / Class/Board / Subject / Schedule / Mode / Next Session. Mode badge tone: `Online → brand`, `Home → accent`.
- **`Schedule.jsx`** — Weekly calendar grid (7 days × 5 evening slots, mock data). Read-only — no add-session UI.
- **`Earnings.jsx`** — `mockEarnings` only. 3-stat cards (Total/Paid Out/Pending). Payout history table with Month/Students/Amount/Status columns. `formatINR` for amounts.
- **`Settings.jsx`** — Local form (name/email/city/expectedFee + 3 notification toggles). Custom CSS toggle switches (no component lib). Save only fires `toast.success('Account updated.')` — no persistence.

## 14. Admin CRM (`src/pages/admin/`)

- **`Dashboard.jsx`** — KPI stats (New Leads / In Progress / Converted / Active Tutors) via client-side filtering of `leadService.listLeads()` and `teacherService.listTeachers()` (both via `useAsync`). Lead Pipeline bar chart (count per status, bar width = `(count / max) * 100`). Recent Leads list (first 5, links to `/admin/leads/:id`). Pending Tutor Verifications card (only shown if `pendingTeachers > 0`).
- **`Leads.jsx`** — Filterable/searchable lead table. `useAsync(listLeads({status, search}), [status, search])`. Filters: search `Input` with `leftIcon`, status `Select`. Table cols: Lead (name + id mono), Requirement (subject + class·board), Location, Status (Badge with dot, color from `LEAD_STATUSES` lookup), Counsellor (or "Unassigned"), Created (`formatRelative`), action "View →".
- **`LeadDetail.jsx`** — Single-lead detail. `getLead(id)` via `useAsync`, local form state hydrated from server via `useEffect` (status, counsellor, followUp sliced to 16 chars for `datetime-local` format, notes). 12-col grid: Requirement card (col-span-2, `<dl>` grid of 8 fields) + Contact card (Phone/Email/Created/Last Follow-up/Next Follow-up). 3 action cards in `lg:grid-cols-3`: Update Status (`Select` + Save → `updateLeadStatus`), Assign Counsellor (`Select` with hardcoded options Priya M./Arnab D./Sourav B. + Save → `assignCounsellor`), Schedule Follow-up (raw `<input type="datetime-local">` + Schedule → `setNextFollowUp`). Notes card at bottom (`Textarea` + Save Notes — reuses `updateLeadStatus` with new notes). Each save → toast + `refetch()`.
- **`Teachers.jsx`** — Mirrors Leads page structure. Profile completion column shows inline mini progress bar (16px wide) with `style={{width: \`${t.profileCompletion || 0}%\`}}`. Status field is `verificationStatus` (not `status`).
- **`TeacherDetail.jsx`** — Single-tutor profile. Avatar with initials. `ProgressBar` for completion (success tone at 100%, brand otherwise). 12-field `<dl>` grid (Qualification/Specialisation/Institution/Experience/Subjects/Classes/Boards/Modes/Preferred Locations/Availability/Expected Fee/Rating). Two conditional action panels:
  - If `PROFILE_SUBMITTED` or `UNDER_REVIEW` → Verification Actions: Approve & Verify (`VERIFIED`) / Reject (`REJECTED`) / Mark Under Review (`UNDER_REVIEW`).
  - If `VERIFIED` → Activation: Activate (`ACTIVE`) / Deactivate (`INACTIVE`) / Suspend (`SUSPENDED`).
  - `setStatus(newStatus)` → `setVerificationStatus` → toast (snake_case → spaces) → `refetch()`.
- **`TutorMatching.jsx`** — Only admin page NOT using `useAsync` (manual `useEffect` + `useState` for the two-stage flow). Effect 1 (mount): fetches leads with `status === 'REQUIREMENT_VERIFIED'`, auto-selects first. Effect 2 (depends on `selectedLead?.id`): calls `matchTutors(...)` and populates `matches`. Each match: tutor name + score badge (`{score}% match`, success tone) + rating badge (warning tone) + qualification/experience/locality line + reason chips (success-tinted, semantic reasons). Shortlist button → `toast.success` only (no real demo-creation API call). Profile button → ghost Link to `/admin/teachers/:id`.
- **`Demos.jsx`** — Hardcoded inline array of 3 demo objects. Minimal table (Demo ID/Lead/Tutor/Subject/When/Status). No service integration, no detail links, no actions. Clear placeholder.
- **`Requirements.jsx`** — Read-only flat report of all submitted requirements. `listLeads()` (no params, no filtering). Cols: ID/Class·Board/Subject/Location/Mode/Budget/Submitted (`formatDateTime`, not relative). No status badge, no counsellor, no actions. "Data export" / audit view.
- **`CMS.jsx`** — Local state for `hero` (headline/subheadline/CTAs) + `seo` (title/description/canonical). Curried setters `setH(k) => (e) => setHero((h) => ({...h, [k]: e.target.value}))`. Save buttons fire toasts only — no persistence. Reference Data grid shows 8 `DataCard`s with hardcoded counts (Classes/Boards/Subjects/Courses/Locations/Tuition Types/Testimonials/FAQs).
- **`Settings.jsx`** — Placeholder. Just `EmptyState` "Settings coming soon" with description hinting at counsellor management, RBAC, integration configs.

### Lead Pipeline (10 states)
`NEW → CONTACTED → REQUIREMENT_VERIFIED → TUTOR_SEARCH → TUTOR_SHORTLISTED → DEMO_SCHEDULED → DEMO_COMPLETED → FOLLOW_UP → CONVERTED | LOST`

### Teacher Verification (9 states)
`REGISTERED → PROFILE_INCOMPLETE → PROFILE_SUBMITTED → UNDER_REVIEW → VERIFIED → ACTIVE` (matchable)
Side states: `REJECTED`, `SUSPENDED`, `INACTIVE`. **Only `ACTIVE` is matchable.**

## 15. Documentation (`docs/`)

11 deep-dive markdown files (3–7 KB each):

- **`AUTHENTICATION.md`** — OTP flow + role-based access, demo admin credentials, ProtectedRoute behavior, exact `fetch()` swaps.
- **`CHANGE-GUIDE.md`** — 7-step migration recipe (apiClient, authService, contentService, uploadService, env vars, demo cleanup, production SEO).
- **`CRM.md`** — Admin CRM overview, dashboard KPIs, lead/teacher detail actions, TutorMatching, Demos, Requirements, demo-only CMS, Settings.
- **`DATA-MODELS.md`** — Lead, Teacher, Opportunity, TutorMatch, Session shapes; status pipelines; reference table mapping `data/*.js` to usage.
- **`DESIGN-SYSTEM.md`** — Brand palette, typography, containers, component inventory, animation tokens, accessibility commitments (WCAG AA).
- **`FEATURES.md`** — Feature catalog by surface (public, student, teacher, admin).
- **`LEAD-FLOW.md`** — Student lead pipeline + admin pipeline walkthrough.
- **`ROUTES.md`** — Complete route inventory by visibility + ProtectedRoute role-to-login-redirect mapping + planned routes.
- **`SEO.md`** — SPA metadata approach, per-page metadata table, structured data usage, SEO do's and don'ts.
- **`STUDENT-FLOW.md`** — First-time visitor → lead flow + returning student login + dashboard + Suggested Tutors with matching rubric.
- **`TEACHER-FLOW.md`** — Registration → verification → active lifecycle + 9-status table.

## 16. Notable Patterns & Conventions

### Polymorphic components
`Button`, `Card`, `Skeleton` all accept an `as` prop for rendering as different element types (e.g., `<Button as={Link} to="...">`). `Button` and the form primitives use `React.forwardRef` with named inner functions for proper DevTools naming.

### Accessibility
Consistently applied: `aria-label`, `aria-hidden`, `aria-busy`, `aria-expanded`, `aria-modal`, `aria-live="polite"`, `role="dialog"`, `role="status"`, `role="radio"`, semantic breadcrumbs (`<nav aria-label="Breadcrumb">` + `<ol>`). All decorative SVGs and `SectionBackground` layers carry `aria-hidden="true"`. Focus-visible ring on inputs/buttons. Reduced-motion media query collapses all hero animations. WCAG AA contrast committed.

### Dark mode
`darkMode: 'class'` in Tailwind config. Anti-FOUC script in `index.html` reads `localStorage` and applies `dark` class to `<html>` before paint. `ThemeContext` syncs `<html>` classList on every theme change. `ThemeProvider` defaults to `system` and listens to `prefers-color-scheme` media. Every interactive component has paired `dark:` variants using the `ink-*` and `brand-*` scales.

### Inline SVG everywhere
No icon library dependency. Each section/banner defines its own small set of locally-scoped SVG icon components with `aria-hidden="true"`. Keeps the bundle small.

### Modal-at-root + context-trigger pattern
Three modal providers (`EnrollmentProvider`, `ForeignLanguageProvider`, `TrainingCourseProvider`) mount their modal once at the app root. Any component can call `openEnrollment()` (or `openForeignLanguage(lang)`, `openTrainingCourse(courseConfig)`) to open the modal globally — no per-page modal state.

### `useAsync` hook
Generic async state wrapper exposing `{data, loading, error, refetch}`. `mountedRef` prevents setState after unmount. `fnRef.current` always calls latest fn. Used by 6 of 10 admin pages, student Tutors, teacher Dashboard, teacher Profile.

### `useOTP` hook
Manages OTP send/verify lifecycle with 30s resend cooldown and up to 5 verify attempts. Uses `useRef` mirrors (`mobileRef`, `nameRef`) so `sendOtp()`/`verifyOtp()` can read latest values even when called in the same tick as `setMobile()`/`setName()` (typical form submit pattern). Exposes `{status, demoOtp, error, canResend, cooldown, setMobile, setName, sendOtp, verifyOtp, reset}`.

### Count-up animation
Two near-identical `IntersectionObserver` + `requestAnimationFrame` count-up implementations in `Hero.jsx` (`AnimatedNumber`) and `StatsSection.jsx` (`StatCell`) — duplicated logic that could be refactored into a shared `useCountUp` hook.

### Multi-step wizard pattern
Three multi-step wizards in the codebase: `StudentEnrollmentWizard` (3 steps), `Requirement` (3 steps), `ProfileWizard` (5 steps). All use a `STEPS` constant, `step` state, per-step validation, `setField(key, value)` clears errors on update, sticky footer nav with `flex-col-reverse sm:flex-row`, dynamic next button label.

### Demo-data integrity
Multiple page docstrings (MasterclassHomeTuition, TeacherSelection, FreeDoubtClearing, MonthlyDoubtClearingSection) explicitly state they "do NOT invent" dates/seats/teacher names — using "Register your interest" / "Apply for" wording instead of fake schedules. `MediaNews` and `InvestorNote` are explicitly labelled "demo content" with disclaimers in-page. `Gallery` shows "Demo" badge with "replace with real Srijee event photos before launch" note. `BlogPost` shows "Demo" badge when `post.isDemo` is true. All `mockTeachers` entries carry `isDemo: true`. Real testimonials in `testimonials.js` and `aboutTestimonials.js` carry `verified: true, isDemo: false`.

## 17. Demo-to-Production Swap Path

Per `docs/CHANGE-GUIDE.md`:

1. **`src/services/apiClient.js`** — replace the mock `request()` body with `fetch()` calls against `VITE_API_BASE`. Add `Authorization: Bearer <session.token>` header from `getSession()`.
2. **`src/services/authService.js`** — replace `sendOtp()` / `verifyOtp()` / `adminLogin()` bodies with `/api/v1/auth/*` calls.
3. **`src/services/contentService.js`** (optional) — replace direct `data/*` imports with `apiClient.get('content/<resource>')`.
4. **Add `src/services/uploadService.js`** — for file uploads in ProfileWizard (currently local-only).
5. **Set `VITE_API_BASE` env var** in `.env`.
6. **Remove demo affordances** — `<DemoBanner />` from layouts, `demoOtp` displays in `useOTP.js` and 3 auth pages, `SITE.isDemo = false`, `[PLACEHOLDER]` strings.
7. **Production SEO** — add SSR (Next.js) or pre-rendering, dynamic OG images, sitemap.xml generated from `seoByRoute` keys + blog posts + CMS landing pages.

## 18. Issues, Cleanup Opportunities & Minor Bugs

### Commented-out legacy code (significant file-size inflation)
Several files retain large blocks of historical commented-out versions:
- `FindSections.jsx` — ~2047 lines commented, only ~430 lines active (~85% dead comments). Exports `FindByClass` (active), `FindByBoard`/`FindBySubject` (return `null` — kept as no-op exports so existing imports don't break).
- `SectionBackground.jsx` — lines 1–934 commented, only lines 935–998 active.
- `AppRoutes.jsx` — three complete copies of the route tree (lines 1–167, 168–334, 335–507); only the third is active.
- `useOTP.js` — lines 1–98 commented, lines 99–213 active.
- `index.css` — lines 1–161 commented, lines 164+ active.
- `seo.js` — large commented block at top, live data below.
- `Home.jsx` — ~190 lines commented at top.
- `About.jsx` — ~159 lines commented at top.
- `IndexPages.jsx` — ~166 lines commented at top.
- `TrustStrip.jsx` — 3 commented-out prior versions at top.
- `AwardsSection.jsx`, `BlogTeaser.jsx`, `StudentSuccess.jsx`, `StudentSupportFeedback.jsx`, `VerifiedExpertTeachers.jsx`, `PublicFooter.jsx`, `MonthlyDoubtClearingSection.jsx`, `TeacherSelectionDemoBanner.jsx` — all have large commented legacy blocks.

**Recommendation:** Run a one-time cleanup pass to remove all dead commented code. This would significantly reduce file sizes and improve navigability.

### Dead imports
- `updateLeadStatus` in `student/Dashboard.jsx` (imported but never used).
- `formatDate` in `teacher/Earnings.jsx` (imported but never used).
- `minLen` in `student/Requirement.jsx` (imported but never used).
- `FAQ` in `public/TeacherSelection.jsx` (imported but never rendered).
- `Badge` in `public/FreeDoubtClearing.jsx` (imported but never used).
- `useState` in `ui/Input.jsx` (imported but unused).

### Code duplication
- `OTPInput` and `PhoneIcon` are duplicated verbatim between `StudentLogin.jsx` and `TeacherLogin.jsx` — should be extracted to a shared component.
- The 6-box OTP input pattern is also reimplemented a third time in `BecomeTutor.jsx` (also local). Could be promoted to a shared `<OTPInput />` UI component.
- Two inline FAQ accordion implementations in `TeacherSelection.jsx` and `FreeDoubtClearing.jsx` — visually near-identical but theme-tinted differently (brand vs accent). Could be promoted to a shared `<InlineFAQ />` component.
- The `useOTP` count-up logic is duplicated in `Hero.jsx` and `StatsSection.jsx` — could be a `useCountUp` hook.

### Inconsistent style family
- `OurPresence.jsx`, `MediaNews.jsx`, `InvestorNote.jsx` use raw Tailwind markup (`container-page`, `text-slate-900`, `bg-brand-600`) and **omit `<Seo>` entirely** — these three pages are SEO-invisible and visually inconsistent with the rest of the site. Should be refactored to use the project's design system (`Seo`, `Section`, `Container`, `Card`).
- `OurPresents.jsx` eyebrow says "Our Presents" while H1 says "Meet Our Team" — minor content inconsistency.
- `Programs.jsx` (older 4-card grid) lacks `dark:` variants and is largely superseded by `ProgrammesSection.jsx`.

### A11y gaps
- `EnrollmentStepOne.jsx` uses `role="radio"` on selection tiles but the parent container is not a `role="radiogroup"` — small a11y inconsistency.
- `ForeignLanguageModal.jsx` lacks an ESC handler (the other two modals have one).
- Only `StudentEnrollmentModal` adds explicit focus management (`setTimeout(() => dialogRef.current?.focus(), 50)`); the other two modals rely on default browser behavior.

### Minor bugs
- `FounderSection.jsx` has a broken Tailwind class `h-190px]` (should be `h-[190px]`).
- `tutorService.matchTutors` uses `.includes` for subject matching, but the lead's `subject` is a single string while teacher's `subjects` is an array — the matching is `tutor.subjects.some(s => s.toLowerCase().includes(req.subject.toLowerCase()))`, which works but is loose (e.g., "Math" would match "Mathematics"). Worth tightening if backend matching needs to be exact.
- `student/Tutors.jsx` `bookDemo` accesses `tutor.tutor?.name` (double-nested) — likely a copy-paste bug; the toast message would show "Demo request sent to undefined..." when triggered.
- `locations.js` has a slug typo: `behold-la` for "Behala".
- `MediaNews.jsx` 2nd and 3rd news items share the same Unsplash image URL — likely a copy-paste placeholder issue.
- `teacher/Schedule.jsx` mock grid has Sunday slots `10–11 AM` and `11–12 PM` that aren't in the default `slots` array (evening slots only) — so they won't render.
- `ProfileWizard.jsx` `FileUpload` accepts files up to 5MB per the placeholder text, but no actual size validation is performed.
- `LeadDetail.jsx` reuses `updateLeadStatus` for the "Save Notes" action (passing the new notes via the third arg) — works but couples notes-save with status-save semantically.

### Demo-data caveats
- `Demos.jsx` is the weakest admin page — hardcoded data, no service integration, no detail links, no actions.
- `Settings.jsx` (admin) is a placeholder — explicit "coming soon" with roadmap hints (counsellor management, RBAC, integration configs).
- `student/Messages.jsx` is a stub — EmptyState with ChatIcon, no functionality.
- Teacher portal's `Earnings`, `Opportunities`, `Schedule`, `Students`, and Dashboard previews all read from `mockOpportunities` / `mockStudents` / `mockEarnings` — only `Profile` and `ProfileWizard` hit real services.
- `TutorMatching` Shortlist action is just a toast — no real demo-creation API call.

### Production-readiness gaps
- No real SMS/Email/WhatsApp integration (mock OTP shown in UI).
- No real payment integration.
- No server-side rendering (SPA only — affects SEO; `docs/SEO.md` recommends SSR or pre-rendering for production).
- No server-side authorization (frontend gating only via `ProtectedRoute`).
- File uploads in ProfileWizard are local-only (no real upload).
- CMS changes are not persisted.
- Sitemap.xml not generated (TODO when backend is connected, per `docs/SEO.md`).
- Counsellor options in `LeadDetail.jsx` are hardcoded (Priya M., Arnab D., Sourav B.) — should come from a counsellor service.

## 19. Summary

**Srijee Tutor v9** is a comprehensive, production-grade **frontend-only** tutoring platform built with React 18 + Vite 5 + Tailwind CSS 3 + React Router 6. The architecture is **strictly backend-ready**: every service file has a documented one-file swap path to migrate from `localStorage` mocks to real `fetch()` calls without touching any UI code. Three portals (Student, Teacher, Admin CRM) handle the full lifecycle: lead generation → tutor registration → profile verification → tutor matching → demo scheduling → conversion. Real srijeetutor.com business data (founder, stats, awards, testimonials, FAQs, programmes, subjects/boards/classes, contact info) is integrated. The UI is modern (dark mode, glassmorphism, aurora backgrounds, animated counters, glow effects, theme toggle, mega-menu) and accessibility-conscious (semantic HTML, ARIA, focus-visible, reduced-motion). The codebase has accumulated some technical debt (large commented legacy blocks, code duplication, minor a11y gaps, inconsistent style family in 3 pages) that should be cleaned up before production. The 11 deep-dive docs in `docs/` provide an excellent onboarding path for new developers.
