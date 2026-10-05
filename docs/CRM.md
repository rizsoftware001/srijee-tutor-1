# Admin CRM

## Overview

The Admin CRM (`/admin/*`) gives the Srijee operations team a single view of every lead, tutor, demo, and conversion. It is role-gated to `ADMIN` and `SUPER_ADMIN`.

## Login

```
/admin/login
  ↓
Email + Password (demo: admin@srijee.demo / admin123)
  ↓
Session created with role=ADMIN
  ↓
/admin/dashboard
```

## Dashboard

`/admin/dashboard`:
- **KPI cards**: New Leads, In Progress, Converted, Active Tutors.
- **Lead Pipeline**: Bar chart of lead counts per status (NEW → CONVERTED/LOST).
- **Recent Leads**: Latest 5 leads with status badge.
- **Pending Tutor Verifications**: Tutors in `PROFILE_SUBMITTED` or `UNDER_REVIEW` with quick "Review" links.

## Leads

`/admin/leads`:
- Search by name, ID, phone, subject, location.
- Filter by status (dropdown).
- Sortable table: Lead, Requirement, Location, Status, Counsellor, Created, View action.
- Click any lead → `/admin/leads/:id`.

### Lead Detail

`/admin/leads/:id`:
- **Requirement card**: All submitted fields + notes.
- **Contact card**: Phone, email, created date, last/next follow-up.
- **Status update**: Dropdown + Save.
- **Counsellor assignment**: Dropdown + Save.
- **Follow-up scheduler**: Datetime picker + Schedule.
- **Notes**: Free-text area + Save.

## Teachers

`/admin/teachers`:
- Search by name, ID, mobile, subject.
- Filter by verification status.
- Table: Teacher, Subjects, Location, Profile completion bar, Status, Joined, View.

### Teacher Detail

`/admin/teachers/:id`:
- **Profile card**: Full details + profile completion bar.
- **Contact card**: Mobile, email, city, locality, gender.
- **Verification actions** (if PROFILE_SUBMITTED or UNDER_REVIEW):
  - Approve & Verify → `VERIFIED`
  - Reject → `REJECTED`
  - Mark Under Review → `UNDER_REVIEW`
- **Activation actions** (if VERIFIED):
  - Activate → `ACTIVE` (now matchable)
  - Deactivate → `INACTIVE`
  - Suspend → `SUSPENDED`

## Tutor Matching

`/admin/matching`:
- Select a verified lead from dropdown.
- System runs rule-based matching against active tutors.
- Each match shows: name, score, rating, qualification, location, reasons chips.
- "Shortlist" button → initiates demo request.

## Demos

`/admin/demos`:
- Table of demo classes (scheduled + completed).
- Lead, Tutor, Subject, When, Status.

## Requirements

`/admin/requirements`:
- All submitted tuition requirements in a flat table.
- ID, Class/Board, Subject, Location, Mode, Budget, Submitted date.

## CMS

`/admin/cms` (demo only — changes are not persisted):
- Homepage hero editor (headline, subheadline, CTAs).
- SEO metadata editor (title, description, canonical).
- Reference data counts (Classes, Boards, Subjects, Courses, Locations, Tuition Types, Testimonials, FAQs).

In production, this would write to a CMS API that the public site reads from.

## Settings

`/admin/settings`: Placeholder. Production will include counsellor management, role-based access control, integration configs (SMS/email/WhatsApp/payment gateways).

## Production Swap

All admin data flows through `leadService` and `teacherService`. To go live:

1. Replace `apiClient` body (see `docs/CHANGE-GUIDE.md`).
2. Add proper admin authentication (SSO preferred).
3. Implement server-side authorization checks (frontend gating is NOT sufficient).
4. Add audit logging for status changes, verification actions, and assignments.

No admin UI changes required.
