# Srijee Tutor — Frontend

> **Scope:** Frontend only — React + Vite + Tailwind CSS + JavaScript/JSX. No backend, no Node/Express/MongoDB, no real OTP/SMS/Email/Payments. All interactions use mock data and localStorage. The architecture is **backend-ready**: real APIs can be wired by editing only the `src/services/` files.

## Tech Stack

- **React 18** (no Next.js, no TypeScript)
- **Vite 5** for dev server and build
- **Tailwind CSS 3** for styling
- **React Router 6** for routing

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Demo Credentials

| Role | How to log in |
|------|---------------|
| **Student / Parent** | Any 10-digit Indian mobile (starts 6–9). OTP is shown in the UI for demo. |
| **Teacher** | Same as student. After OTP, you'll be guided through profile completion. |
| **Admin** | Email: `admin@srijee.demo` · Password: `admin123` |

## Project Structure

```
src/
├── components/
│   ├── ui/              Reusable design-system primitives (Button, Input, Card, Modal, Badge, Skeleton, States, etc.)
│   ├── layout/          PublicHeader, PublicFooter, DemoBanner
│   ├── sections/        Homepage sections (Hero, HowItWorks, TuitionTypes, FindBy*, WhySrijee, Testimonials, FAQ, Programs, BlogTeaser)
│   ├── forms/           (Reserved for shared form components)
│   └── common/          SEO, SectionHeading, Breadcrumbs, StructuredData
├── pages/
│   ├── public/          Home, About, Contact, BecomeTutor, Blog, BlogPost, TuitionPage, IndexPages, NotFound
│   ├── auth/            TeacherLogin, StudentLogin, AdminLogin
│   ├── teacher/         ProfileWizard, Dashboard, Profile, Opportunities, Students, Schedule, Earnings, Settings
│   ├── student/         Requirement, Dashboard, Tutors, Messages
│   └── admin/           Dashboard, Leads, LeadDetail, Teachers, TeacherDetail, TutorMatching, Demos, Requirements, CMS, Settings
├── layouts/             PublicLayout, TeacherLayout, StudentLayout, AdminLayout, DashboardLayout
├── services/            apiClient (mock), authService, leadService, teacherService, tutorService, contentService
├── context/             AuthContext, ToastContext
├── hooks/               useAsync, useOTP
├── routes/              AppRoutes, ProtectedRoute
├── data/                Mock data (classes, boards, subjects, courses, locations, testimonials, faqs, blogPosts, mockLeads, mockTeachers, mockOpportunities)
├── config/              site.js, nav.js, seo.js
├── utils/               cn, validation, format, storage, mock
├── App.jsx
├── main.jsx
└── index.css
```

## Architecture — Backend-Ready Design

The whole frontend talks to **services**, never to `fetch()` or `localStorage` directly. Each service (`leadService`, `teacherService`, etc.) calls `apiClient`. Today `apiClient` dispatches to in-browser mock handlers; tomorrow it can be swapped with real `fetch()` — and **no page or component needs to change**.

```
Component → service → apiClient → [mock store today | real API tomorrow]
```

To connect a real backend:

1. Edit `src/services/apiClient.js` — replace the mock `request()` body with `fetch()` calls.
2. Edit `src/services/authService.js` — replace `sendOtp()` / `verifyOtp()` with real API calls.
3. Done. Pages, components, and routes are untouched.

## Mock vs Production

Every mock/demo touchpoint is clearly labeled:

- A persistent **DemoBanner** at the top of every page.
- OTPs are surfaced in the UI (and `console.info`) — clearly labeled "Demo OTP".
- All `src/data/*.js` files start with `/** DEMO DATA — ... */`.
- Testimonials use `[PLACEHOLDER …]` text — never fabricated reviews.
- Site contact info uses `[PLACEHOLDER: …]` until the business confirms real values.

## Documentation

See `docs/` for detailed references:

- `FEATURES.md` — Full feature list
- `ROUTES.md` — Route map with auth requirements
- `DATA-MODELS.md` — Lead, Teacher, Opportunity schemas
- `DESIGN-SYSTEM.md` — Tokens, components, conventions
- `AUTHENTICATION.md` — OTP flow + role-based access
- `LEAD-FLOW.md` — Student lead pipeline
- `TEACHER-FLOW.md` — Registration → verification → opportunities
- `STUDENT-FLOW.md` — Requirement → matching → demo
- `CRM.md` — Admin CRM overview
- `SEO.md` — SEO architecture
- `CHANGE-GUIDE.md` — How to swap mocks for real APIs

## Build Status

```
✓ 125 modules transformed
dist/index.html      1.05 kB │ gzip:   0.56 kB
dist/assets/index.css  48.84 kB │ gzip:   8.02 kB
dist/assets/index.js  386.79 kB │ gzip: 105.29 kB
```

## License

Proprietary — Srijee Tutor. All rights reserved.
