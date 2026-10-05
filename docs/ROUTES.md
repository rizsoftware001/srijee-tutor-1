# Routes

## Public (no auth)

| Route | Page | Layout |
|-------|------|--------|
| `/` | Home | PublicLayout |
| `/about` | About | PublicLayout |
| `/contact` | Contact | PublicLayout |
| `/become-a-tutor` | Become a Tutor (register + OTP) | PublicLayout |
| `/tuition` | Tuition index | PublicLayout |
| `/online-tuition` | Online Tuition detail | PublicLayout |
| `/home-tuition` | Home Tuition detail | PublicLayout |
| `/one-to-one-tuition` | One-to-One Tuition detail | PublicLayout |
| `/courses` | Courses index | PublicLayout |
| `/classes` | Classes index | PublicLayout |
| `/boards` | Boards index | PublicLayout |
| `/subjects` | Subjects index | PublicLayout |
| `/blog` | Blog index | PublicLayout |
| `/blog/:slug` | Blog post | PublicLayout |
| `/student/requirement` | Student lead form (3-step wizard) | PublicLayout |
| `/teacher/login` | Teacher login (OTP) | PublicLayout |
| `/student/login` | Student login (OTP) | PublicLayout |
| `/admin/login` | Admin login (email/password) | PublicLayout |
| `*` | 404 NotFound | PublicLayout |

## Teacher Portal (auth: TEACHER)

| Route | Page |
|-------|------|
| `/teacher/dashboard` | Dashboard |
| `/teacher/profile` | Profile view (read-only) |
| `/teacher/profile/edit` | Profile completion wizard (5 steps) |
| `/teacher/opportunities` | Matched opportunities |
| `/teacher/students` | Assigned students |
| `/teacher/schedule` | Weekly schedule |
| `/teacher/earnings` | Earnings history |
| `/teacher/settings` | Account & notifications |

## Student Portal (auth: STUDENT or PARENT)

| Route | Page |
|-------|------|
| `/student/dashboard` | Dashboard (lead status pipeline) |
| `/student/tutors` | Suggested tutors (auto-matched) |
| `/student/messages` | Messages (placeholder) |

## Admin CRM (auth: ADMIN or SUPER_ADMIN)

| Route | Page |
|-------|------|
| `/admin/dashboard` | CRM dashboard |
| `/admin/leads` | Leads list |
| `/admin/leads/:id` | Lead detail + status management |
| `/admin/teachers` | Teachers list |
| `/admin/teachers/:id` | Teacher detail + verification |
| `/admin/matching` | Tutor matching (lead → tutors) |
| `/admin/demos` | Demo class schedule |
| `/admin/requirements` | All submitted requirements |
| `/admin/cms` | Content management (demo) |
| `/admin/settings` | Settings (placeholder) |

## Route Protection

`ProtectedRoute` checks:
1. Is the user authenticated? If not, redirect to the appropriate login.
2. Does the user have one of the allowed roles? If not, render a 403 view.

| Portal | Required role | Login redirect |
|--------|---------------|----------------|
| Teacher | `TEACHER` | `/teacher/login` |
| Student | `STUDENT` or `PARENT` | `/student/login` |
| Admin | `ADMIN` or `SUPER_ADMIN` | `/admin/login` |

## Future Routes (planned, not yet built)

- `/counsellor/login`, `/counsellor/dashboard` — Counsellor portal
- `/admin/payments` — Payment tracking
- `/admin/notifications` — Notification center
- `/terms`, `/privacy` — Legal pages
- Per-board / per-subject / per-location SEO landing pages (only when content is genuinely unique per page)
