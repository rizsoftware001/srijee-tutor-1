# Data Models

These are the **frontend-facing** shapes used by services. When the backend is built, the API contracts should match these (or services should be updated to map).

## StudentLead

```js
{
  id:              'LD-2048',          // server-issued
  name:            'Sanghamitra Roy',
  phone:           '+91 98300 12345',
  email:           'parent@example.com',
  class:           'Class 10',
  board:           'CBSE',
  subject:         'Mathematics',
  location:        'New Town, Kolkata',
  mode:            'Home',             // 'Home' | 'Online' | 'Both'
  preferredTime:   'Evening (6–8 PM)',
  budget:          '₹4,000 – ₹6,000 / month',
  source:          'Website — Find My Tutor',
  status:          'NEW',              // see Lead Statuses below
  assignedCounsellor: 'Priya M.' | null,
  createdAt:       ISO-8601,
  updatedAt:       ISO-8601,
  lastFollowUp:    ISO-8601 | null,
  nextFollowUp:    ISO-8601 | null,
  notes:           '…'
}
```

### Lead Statuses

```
NEW → CONTACTED → REQUIREMENT_VERIFIED → TUTOR_SEARCH → TUTOR_SHORTLISTED
   → DEMO_SCHEDULED → DEMO_COMPLETED → FOLLOW_UP → CONVERTED | LOST
```

## Teacher

```js
{
  id:         'TC-001',
  name:       'Sourav Banerjee',
  mobile:     '+91 98300 10001',
  mobileVerified: true,
  email:      'sourav.b@example.com',
  gender:     'Male',
  dateOfBirth:'1990-04-12',
  city:       'Kolkata',
  locality:   'New Town',

  qualification:    'M.Sc in Physics',
  specialization:   'Physics',
  institution:      'University of Calcutta',
  completionYear:   '2014',

  experience: '8 years',
  subjects:   ['Physics', 'Mathematics'],
  classes:    ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
  boards:     ['CBSE', 'ICSE', 'WBBSE'],

  teachingModes:        ['Home', 'Online'],
  preferredLocations:   ['New Town', 'Salt Lake'],
  availability:         'Mon, Wed, Fri — 6 PM to 9 PM',
  expectedFee:          600,                  // INR per hour

  profilePhoto:         null,
  documents: {
    idProof:             null,
    qualificationProof:  null,
    experienceProof:     null,
  },

  profileCompletion:           100,           // 0–100, computed
  profileSubmittedAt:          ISO-8601 | null,
  verificationStatus:          'ACTIVE',      // see Teacher Statuses
  rating:                      4.8,
  studentsCount:               12,
  stepsCompleted:              ['personal','education','experience','preferences','documents'],

  createdAt: ISO-8601,
  updatedAt: ISO-8601,
}
```

### Teacher Statuses

```
REGISTERED → PROFILE_INCOMPLETE → PROFILE_SUBMITTED → UNDER_REVIEW → VERIFIED → ACTIVE
                                                                          ↘ REJECTED
                                                                          ↘ SUSPENDED
                                                                          ↘ INACTIVE
```

Only `ACTIVE` tutors are returned by the matching service.

## Opportunity (teacher-facing)

```js
{
  id:           'OP-101',
  title:        'Class 10 CBSE — Mathematics — New Town',
  classLevel:   'Class 10',
  board:        'CBSE',
  subject:      'Mathematics',
  location:     'New Town, Kolkata',
  mode:         'Home',
  schedule:     'Mon, Wed, Fri — 6 PM to 8 PM',
  budget:       '₹4,500 / month',
  postedAt:     ISO-8601,
  distanceKm:   2.4 | null,
  matchScore:   92,                          // 0–100, rule-based
  status:       'OPEN',                      // OPEN | APPLIED | CLOSED
}
```

## TutorMatch (returned by matching service)

```js
{
  tutor:   Teacher,                          // full teacher object
  score:   92,                                // 0–100
  reasons: ['Subject match', 'Teaches this class', 'Board expertise', …]
}
```

## Session

```js
{
  userId: 'TC-001',
  role:   'TEACHER',                          // STUDENT | PARENT | TEACHER | COUNSELLOR | ADMIN | SUPER_ADMIN
  mobile: '+91 98300 10001',
  name:   'Sourav Banerjee',
  loggedAt: ISO-8601,
  token:  'demo-token-…',                     // JWT in production
}
```

## Reference Data

Static CMS-like data lives in `src/data/`:

| File | Used by |
|------|---------|
| `classes.js` | Class 6–12 + groups |
| `boards.js` | CBSE, ICSE, ISC, WBBSE, WBCHSE, IB, IGCSE, State |
| `subjects.js` | 18 subjects with popularity flag |
| `courses.js` | Foreign Language, Spoken English, Computer, Competitive Exams |
| `tuitionTypes.js` | Online, Home, One-to-One |
| `locations.js` | 8 West Bengal service areas |
| `testimonials.js` | Demo testimonials (clearly labeled placeholders) |
| `faqs.js` | 8 FAQs (some with `[PLACEHOLDER]` for business confirmation) |
| `blogPosts.js` | 6 demo blog posts |
| `mockLeads.js` | 6 demo CRM leads |
| `mockTeachers.js` | 5 demo tutors |
| `mockOpportunities.js` | 4 demo opportunities + 3 demo students + 4 months of demo earnings |
