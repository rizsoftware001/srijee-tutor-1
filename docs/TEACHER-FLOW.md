# Teacher Flow

## Registration → Verification → Active

```
Teacher visits /become-a-tutor
  ↓
Reads benefits, process, scrolls to register form
  ↓
Enters: Full Name + Mobile Number
  ↓
POST sendOtp({ mobile, role: TEACHER, name })
  → 6-digit OTP generated (5-min expiry)
  → In demo: surfaced as "Demo OTP" badge in UI
  ↓
Enters OTP in 6-box input
  ↓
POST verifyOtp({ mobile, otp, role: TEACHER })
  ↓
On success:
  - Find or create Teacher record (status=REGISTERED)
  - Create session
  - If profileCompletion === 0 → navigate to /teacher/profile/edit
  - Else → navigate to /teacher/dashboard
```

## Profile Completion Wizard

`/teacher/profile/edit` — 5-step progressive wizard:

| Step | Key | Fields | Completion |
|------|-----|--------|------------|
| 1 | `personal` | name, mobile, email, gender, DOB, city, locality | +20% |
| 2 | `education` | qualification, specialization, institution, completion year | +20% |
| 3 | `experience` | experience, subjects[], classes[], boards[] | +20% |
| 4 | `preferences` | teachingModes, preferredLocations[], availability, expectedFee | +20% |
| 5 | `documents` | profilePhoto, idProof, qualificationProof, experienceProof | +20% |

### Save Behavior

- "Save draft" — saves current step silently, stays on step.
- "Save & Continue" — saves current step, advances to next.
- Each save calls `updateTeacher(id, { ...fields, stepCompleted: stepKey })` which:
  - Adds the step to `stepsCompleted[]`
  - Recomputes `profileCompletion` (steps × 20%)
  - If completion = 100% and status was `REGISTERED`, transitions to `PROFILE_INCOMPLETE` → no, wait, status stays `REGISTERED` until final submit.

### Final Submit

- "Submit Profile" button on step 5
- Calls `submitTeacherProfile(id)` → sets `verificationStatus = PROFILE_SUBMITTED` and `profileSubmittedAt = now`
- Redirects to `/teacher/dashboard`

## Verification (Admin Side)

```
Admin sees teacher in /admin/teachers with status=PROFILE_SUBMITTED or UNDER_REVIEW
  ↓
Admin opens /admin/teachers/:id
  ↓
Reviews documents and details
  ↓
Actions:
  - "Approve & Verify" → status = VERIFIED
  - "Reject" → status = REJECTED
  - "Mark Under Review" → status = UNDER_REVIEW
  ↓
If VERIFIED, additional actions:
  - "Activate" → status = ACTIVE (becomes matchable)
  - "Deactivate" → status = INACTIVE
  - "Suspend" → status = SUSPENDED
```

## Teacher Statuses (full list)

| Status | Color | Matchable? | Description |
|--------|-------|------------|-------------|
| `REGISTERED` | ink | No | OTP verified, profile not started |
| `PROFILE_INCOMPLETE` | warning | No | Started but not finished |
| `PROFILE_SUBMITTED` | brand | No | Awaiting admin review |
| `UNDER_REVIEW` | warning | No | Admin is reviewing |
| `VERIFIED` | success | No | Approved, awaiting activation |
| `ACTIVE` | success | **Yes** | Matchable, can receive opportunities |
| `REJECTED` | danger | No | Application rejected |
| `SUSPENDED` | danger | No | Temporarily blocked |
| `INACTIVE` | ink | No | Voluntarily inactive |

## Login (Returning Teacher)

```
/teacher/login
  ↓
Enter mobile → sendOtp → verifyOtp
  ↓
If profileCompletion === 0 → /teacher/profile/edit
Else → /teacher/dashboard
```

No passwords. OTP-only authentication.

## Dashboard Highlights

- Welcome card with verification status badge.
- Profile completion progress bar (with "Complete Profile" CTA if < 100%).
- KPI stats: Active Students, Open Opportunities, This Month's Earnings, Rating.
- Matched Opportunities preview (top 3).
- Upcoming Classes preview (next 7 days).

## Opportunities

`/teacher/opportunities` — list of tuition requirements matched to the teacher's profile (demo data). Each card shows:
- Title, status (OPEN/APPLIED), match score
- Class, board, subject, mode, location, schedule, budget, distance
- Apply / Save for later actions

In production, this would be `GET /api/v1/teachers/me/opportunities` filtered server-side by the teacher's subjects, classes, etc.

## Earnings

`/teacher/earnings` — monthly payout history with status (PAID/PENDING). Demo data only.

In production: `GET /api/v1/teachers/me/earnings`.
