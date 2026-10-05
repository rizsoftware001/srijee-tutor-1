# Student Flow

## First-Time Visitor → Lead

```
Visitor lands on /
  ↓
Hero "Find My Tutor" form (or clicks any "Find My Tutor" CTA)
  ↓
Fills: Class, Board, Subject, Location, Mode, Preferred Time
  ↓
Submit → /student/requirement?class=…&board=…&subject=…
  ↓
URL params pre-fill the wizard's Step 2
  ↓
Step 1: Student/Parent Details
  - Full Name, Mobile (validated), Email (optional), Consent checkbox
  ↓
Step 2: Tuition Requirement
  - Class, Board, Subject, Location, Mode (radio), Preferred Time, Budget, Notes
  ↓
Step 3: Review & Submit
  - All fields listed, "Edit" jumps to relevant step
  ↓
Submit → creates Lead (status=NEW) → Success Screen with Lead ID
```

## Returning Student (Login)

```
/student/login
  ↓
Enter mobile → sendOtp → verifyOtp
  ↓
Role = PARENT (or STUDENT)
  ↓
/student/dashboard
```

## Dashboard

`/student/dashboard` shows:
- Welcome card (accent gradient).
- If no lead exists for this mobile: Empty state with "Find My Tutor" CTA.
- If lead exists:
  - Requirement card: class, board, subject, location, mode, time, budget, source, submitted date, notes.
  - Lead pipeline visualization: 9 statuses with current highlighted.
  - Suggested Tutors preview (top 3).

## Suggested Tutors

`/student/tutors` — auto-matched against the student's submitted requirement:
- Reads student's most recent lead
- Calls `matchTutors({ class, board, subject, location, mode })`
- Returns scored tutor list:
  - Subject match: +25
  - Class match: +15
  - Board match: +10
  - Mode match: +10
  - Location match: +15
  - Rating bonus: +rating (max ~5)
- Sorted by score, threshold ≥ 50

Each tutor card shows:
- Avatar (initials), name, qualification
- Subject + board chips
- Rating, students taught, experience
- Match score badge (e.g., "92% match")
- Reasons list ("Subject match", "Teaches this class", etc.)
- "Book Demo" and "View Profile" buttons

In production, this matching would run server-side. The frontend rule-based scorer in `src/services/tutorService.js` is a reference implementation that mirrors the expected backend rules.

## Messages

`/student/messages` — placeholder empty state. Future: in-app chat with counsellor and matched tutors.

## Production Notes

- Today: leads and tutor matches are computed from localStorage-stored demo data.
- Tomorrow: same `leadService` and `tutorService` interfaces, backed by real `/api/v1/*` endpoints.
- No UI changes required.
