# Lead Flow

## Student Lead Pipeline

```
VISITOR lands on site (any page)
  ↓
Clicks "Find My Tutor" CTA
  ↓
/student/requirement  (3-step wizard)
  Step 1: Student/Parent Details (name, phone, email, consent)
  Step 2: Tuition Requirement (class, board, subject, location, mode, time, budget, notes)
  Step 3: Review & Submit
  ↓
POST /api/v1/leads  (today: apiClient.post('leads', …))
  ↓
Lead created with status = NEW
  ↓
Redirect to Success Screen (shows Lead ID)
```

## Admin Pipeline (CRM)

```
Lead shows up in /admin/leads (status=NEW)
  ↓
Admin assigns counsellor
  ↓
Counsellor calls parent → status = CONTACTED
  ↓
Requirement confirmed → status = REQUIREMENT_VERIFIED
  ↓
Admin opens /admin/matching
  - Pick lead from dropdown
  - System runs rule-based matching:
      +25 if subject matches
      +15 if class matches
      +10 if board matches
      +10 if mode matches
      +15 if location matches
      +rating bonus
  - Sorted by score, threshold ≥ 50
  ↓
Admin shortlists tutors → status = TUTOR_SHORTLISTED
  ↓
Demo scheduled with parent + tutor → status = DEMO_SCHEDULED
  ↓
Demo conducted → status = DEMO_COMPLETED
  ↓
Parent confirms → status = CONVERTED (tuition starts)
   OR
Parent declines → status = LOST
  ↓
If follow-up needed → status = FOLLOW_UP (with nextFollowUp date)
```

## Lead Statuses (full list)

| Status | Color | Meaning |
|--------|-------|---------|
| `NEW` | ink | Just submitted, no contact yet |
| `CONTACTED` | brand | Counsellor has reached out |
| `REQUIREMENT_VERIFIED` | brand | Requirement confirmed with parent |
| `TUTOR_SEARCH` | warning | Searching for matching tutors |
| `TUTOR_SHORTLISTED` | warning | Tutors shortlisted, awaiting demo |
| `DEMO_SCHEDULED` | accent | Demo class booked |
| `DEMO_COMPLETED` | accent | Demo done, awaiting decision |
| `FOLLOW_UP` | warning | Needs follow-up (with date) |
| `CONVERTED` | success | Tuition started |
| `LOST` | danger | Lost (with reason in notes) |

## Where Lead Data Lives Today

- Frontend mock: `src/data/mockLeads.js` (6 demo leads)
- Persisted via: `apiClient.seed('leads', mockLeads)` on first load
- Storage: `localStorage` key `srijee:db:leads`
- New leads from the form are appended to the same store

## Production Swap

See `docs/CHANGE-GUIDE.md`. The `leadService` API stays identical; only the `apiClient` body changes from localStorage to `fetch()`.
