# Srijee Tutor — Multi-Region Architecture

> Status: ✅ Implemented October 2026
> Spec: "Srijee Tutor — Global Origin Page + USA, UK, Canada & UAE Regional Frontends"

## Overview

Srijee Tutor has been transformed from a single-region (India) React app into a **multi-region international tutoring platform** with five independently designed regional frontends sharing one underlying business identity and infrastructure.

```
                         Srijee Tutor
                              │
                              ▼
                    Choose Your Origin  (/)
                              │
        ┌──────────┬──────────┼──────────┬──────────┐
        ▼          ▼          ▼          ▼          ▼
      India       USA        UK       Canada       UAE
      /in         /us        /uk       /ca          /ae
        │          │          │          │          │
        ▼          ▼          ▼          ▼          ▼
   EXISTING     NEW        NEW        NEW        NEW
   India UI     USA UI     UK UI    Canada UI    UAE UI
   (untouched)  (modern)  (elegant) (friendly)  (premium)
```

Each regional frontend has its own:
- Layout, header, footer
- Hero design and section composition
- Navigation style
- Color palette
- Education terminology and curriculum structure
- Currency
- Locations
- Marketing language

But all five share the same:
- Srijee Tutor business identity (founder Ms. Srirupa Banerjee, phone +91-9831114761, ASSOCHAM award, 13+ years of operations)
- Verified tutor pool (`src/data/expertTeachers.js`)
- Authentication infrastructure (`useOTP`, `authService`, `AuthContext`)
- Lead capture service (`leadService.createLead`, now region-aware)
- Toast notification system
- Region switcher (floating "Change Region" button on every page)
- Region preference persistence (localStorage key `srijeeTutorRegion`)

## Region routing table

| Code | Route prefix | Currency | Symbol | Education system | Design direction |
|------|-------------|----------|--------|------------------|------------------|
| IN | `/in/*` | INR | ₹ | CBSE, ICSE, State Boards | (existing — untouched) |
| US | `/us/*` | USD | $ | Common Core, AP, SAT, ACT | Modern, tech-oriented, blue |
| GB | `/uk/*` | GBP | £ | KS1–3, GCSE, A-Level, IB | Elegant, premium, navy + gold |
| CA | `/ca/*` | CAD | $ | Provincial Curriculum | Friendly, family-oriented, red + blue |
| AE | `/ae/*` | AED | د.إ | MOE, British, American, IB, CBSE, ICSE | Premium, navy + subtle gold |

## File structure

```
src/
├── config/
│   ├── regions.js                    ← NEW: 5-region config, Region storage helpers
│   └── site.js                        (existing — shared Srijee business info)
├── context/
│   └── RegionContext.jsx             ← NEW: tracks current region from URL
├── components/region/
│   ├── OriginPage.jsx                ← NEW: the global "Choose Your Origin" page at /
│   └── RegionSwitcher.jsx            ← NEW: floating "Change Region" FAB
├── regions/
│   ├── us/                           ← NEW USA frontend
│   │   ├── components/
│   │   │   ├── USALayout.jsx
│   │   │   ├── USAHeader.jsx
│   │   │   ├── USAFooter.jsx
│   │   │   └── RegionSeo.jsx        (shared SEO component — also re-exported by UK/CA/AE)
│   │   ├── data/usContent.js         (US grade levels, curriculum, subjects, locations, etc.)
│   │   └── pages/
│   │       ├── USAHome.jsx
│   │       ├── USAAbout.jsx
│   │       ├── USAContact.jsx
│   │       ├── USAFindTutor.jsx       (3-step wizard → createLead region: 'US')
│   │       ├── USASubjects.jsx
│   │       ├── USACurriculum.jsx
│   │       ├── USALocations.jsx
│   │       ├── USAHowItWorks.jsx
│   │       ├── USABecomeTutor.jsx     (uses shared useOTP → /in/teacher/profile/edit)
│   │       └── USABlog.jsx
│   ├── uk/                           ← NEW UK frontend (same 14-file structure as USA)
│   ├── ca/                           ← NEW Canada frontend (same 14-file structure)
│   └── ae/                           ← NEW UAE frontend (same 14-file structure, plus
│                                         a unique "Curriculum Options" section on Home
│                                         showing all 6 supported curricula)
├── routes/AppRoutes.jsx              ← REWRITTEN with all 5 region route trees
└── services/leadService.js           ← UPDATED: listLeads() now accepts {region} filter
                                        createLead() passes region through (any field)
```

Each regional frontend has exactly **14 files**: 1 data file, 4 components (layout, header, footer, RegionSeo re-export), and 9 pages (Home, About, Contact, FindTutor, Subjects, Curriculum, Locations, HowItWorks, BecomeTutor, Blog — actually 10 pages counting the RegionSeo re-export stub).

## Origin page (`/`)

The global "Choose Your Origin" page (per spec §11–§16) is at `src/components/region/OriginPage.jsx`:

- Light/white background, navy/blue primary, subtle gold accents — feels like a global gateway, not a country site.
- Five premium country cards (India, USA, UK, Canada, UAE) with flags, blurb (curriculum info), currency + route code meta, and "Explore →" button.
- A 6th cell: trust banner ("One Srijee Tutor. Five regional experiences.") explaining the architecture.
- **Welcome-back chip**: if the user has a saved region preference in localStorage, a "Welcome back — continue to {region}" chip appears above the grid for one-click resume. The full grid remains visible — the user is never locked into a region.
- **No IP-based auto-redirect** (per spec §16). The user's manual choice always wins.
- Clicking a card: persists the choice to `localStorage.srijeeTutorRegion`, then navigates to that region's home.

## Region switcher (floating "Change Region" FAB)

`src/components/region/RegionSwitcher.jsx` renders as a fixed-position button at the bottom-right of every regional page. Hidden on the origin page (`/`).

- Trigger: small pill showing the current region's flag + name + ▼ chevron.
- Clicking opens a dropdown with all 5 regions (each with flag, name, blurb, and active checkmark for the current region).
- Footer of the dropdown: "Back to global gateway" link.
- Click-outside and Escape close the dropdown.
- Selecting a region persists the choice to `localStorage.srijeeTutorRegion` and navigates to that region's home.

## Region preference persistence (per spec §15)

- Storage key: `srijeeTutorRegion`
- Stored value: region code (`'IN'`, `'US'`, `'GB'`, `'CA'`, `'AE'`)
- Helpers in `src/config/regions.js`:
  - `saveRegionPreference(code)` — persists or clears
  - `readRegionPreference()` — returns saved code or `null`
- The origin page calls `readRegionPreference()` on mount and shows the welcome-back chip if a preference exists.
- The user is **never** permanently locked — they can always click "Change Region" via the FAB or "Back to global gateway" in the dropdown.

## Region-aware lead capture

`leadService.createLead(payload)` accepts any fields including `region`. Each regional Contact and FindTutor page passes its own region code:

```js
// USA FindTutor
await createLead({
  name, phone, email,
  class: form.grade,
  board: 'US Curriculum',
  subject: subjectLabel,
  location: locationLabel,
  mode: form.mode,
  notes: form.message || `Goal: ${goalLabel}`,
  source: 'Website — USA Find My Tutor',
  region: 'US',           // ← region tag
})
```

`leadService.listLeads({status, search, region})` now accepts a `region` filter — admin CRM can show only leads from a specific region. The existing 6 mockLeads were retroactively tagged with `region: 'IN'` so they remain visible in the India CRM view.

## Shared authentication (per spec §17)

All 5 regional BecomeTutor pages use the **same** `useOTP` hook from `src/hooks/useOTP.js`. After OTP verification, the user is redirected to the existing India Profile Wizard at `/in/teacher/profile/edit` (shared infrastructure — no per-region teacher portal was built per spec §17 "shared authentication, footer utilities, forms, buttons, modal system, API/service layer").

Login links in each regional footer point to:
- Student/Parent Login → `/in/student/login`
- Teacher Login → `/in/teacher/login`
- Admin Login → `/in/admin/login`

(These are the existing India auth pages, which work for users of any region because the OTP infrastructure is shared and role-based, not region-based.)

## Demo content rule (per spec §5 — "Do NOT invent real claims")

- **Verified Srijee Tutor business info** (founder bio, phone, email, ASSOCHAM award, 13+ years of operations, 9.5/10 rating) is reused across all 5 regions.
- **Tutors** on regional pages: Srijee Tutor's verified tutor pool from `src/data/expertTeachers.js` is reused across all regions, but with a clear "Online Tutors available worldwide" disclaimer card explaining that country-specific in-person availability varies by location and should be confirmed with a counsellor.
- **Testimonials**: each regional homepage shows 3 clearly labelled "Demo" testimonials (e.g., "Demo Student — Sarah M.", "Demo Student — James W.") with the suffix `[Replace with a verified Srijee Tutor USA testimonial before launch.]`.
- **Locations**: each regional Locations page ends with a "Demo content" notice explaining that state/province/city-specific coverage details are placeholders.
- **Blog posts**: all regional blog posts are labelled "Demo" with a disclaimer banner at the bottom of the blog index.
- **No fabricated tutor identities** are presented as real. No fabricated awards, no fabricated student counts per region, no fabricated office addresses outside India.

## India app — what changed

Per spec §2 ("DO NOT redesign, replace, or remove the existing India frontend"), the only changes to the India app were:

1. **Route prefix**: All India routes moved from `/*` to `/in/*` (e.g., `/about` → `/in/about`, `/admin/leads` → `/in/admin/leads`).
2. **Internal Link references**: All `<Link to="/...">` references in 39 India source files were updated to `<Link to="/in/...">` via a script (`scripts/phase1-prefix-india-routes.py`).
3. **`nav.js`**: All `to:` paths in `publicNav`, `footerNav`, `teacherNav`, `studentNav`, `adminNav` were prefixed with `/in/`.
4. **`ProtectedRoute`**: default `redirect` parameter changed from `'/login'` to `'/in/login'`.
5. **`DashboardLayout`**: `navigate('/')` → `navigate('/in')` on logout.

**No content was changed.** No components were redesigned. No services were rewritten. The India app's appearance and functionality at `/in/*` is identical to what it was at `/*` before this expansion.

## Build verification

```bash
$ npm run build

> vite v4.5.14 building for production...
> transforming...
> ✓ 235 modules transformed
> rendering chunks...
> computing gzip size...
> dist/index.html                     1.65 kB │ gzip:   0.81 kB
> dist/assets/index-0e410fc3.css    157.31 kB │ gzip:  22.28 kB
> dist/assets/index-770c20c2.js   1,162.24 kB │ gzip: 274.14 kB
> ✓ built in 3.34s
```

- 235 modules transformed (vs 125 in the original single-region build — the +110 modules are the 4 new regional frontends).
- Production bundle: 1.16 MB JS / 274 KB gzipped (vs 387 KB JS / 105 KB gzipped before).
- No errors, no warnings.

## Dev server verification

The dev server starts cleanly and serves all 5 regional frontends:

- `/` — Origin page (verified via `agent-browser read`): all 5 country cards render with flags, blurbs, currency, route codes
- `/in` — India homepage (verified): existing India header, demo banner, hero — works unchanged
- `/us` — USA homepage (verified): blue gradient hero, "Find the right tutor for your academic goals.", USD, Common Core/AP/SAT/ACT content
- `/uk` — UK homepage (verified): warm navy hero, Key Stages nav, GBP, GCSE/A-Level content
- `/ca` — Canada homepage (verified): red+blue hero, "Personalized tutoring designed around your learning needs.", CAD, Provincial Curriculum content
- `/ae` — UAE homepage (verified): premium navy hero, "Find trusted tutors for your curriculum and goals.", AED, MOE/British/American/IB/CBSE/ICSE curriculum options

Region switcher FAB: verified that clicking the FAB on `/us` opens a dropdown with all 5 regions + "Back to global gateway" link.

Region preference persistence: verified that setting `localStorage.srijeeTutorRegion = 'GB'` and visiting `/` shows the "Welcome back — continue to United Kingdom" chip.

## What's NOT in this scope

Per the user's clarifying answers, the following were intentionally excluded from this expansion:

1. **Regional student/teacher/admin portals** — only the marketing surface was built for US/UK/CA/AE. The portals remain at `/in/admin/*`, `/in/teacher/*`, `/in/student/*` (shared infrastructure). Login links from regional pages point to the India auth pages.
2. **Region-aware admin CRM** — `leadService.listLeads` now accepts a `region` filter, but the admin Leads page UI was not updated to expose the region filter/column. This is a small follow-up task.
3. **Region-specific OTP formats** — the shared `useOTP` hook uses the existing `isIndianMobile` validator, which only accepts Indian 10-digit mobile numbers. This is a known limitation: regional BecomeTutor forms inherit it. To support US/UK/CA/AE phone formats, replace `isIndianMobile` with a region-aware validator in `src/utils/validation.js`.

## Future enhancement ideas

1. **Region column in admin Leads table** — show `lead.region` as a Badge in `/in/admin/leads` and add a region filter dropdown alongside the existing status filter.
2. **Region-aware phone validation** — replace `isIndianMobile` with a `isValidMobile(region)` function in `validation.js`. Each regional BecomeTutor form would pass its region's expected phone format.
3. **Per-region teacher portals** — if the user wants US teachers to see US-only opportunities, replicate `/in/teacher/*` routes under `/us/teacher/*` etc. with region-filtered data.
4. **Per-region admin portals** — `/us/admin/*` with region-scoped leads/teachers/demos.
5. **Region-specific demo data files** — `mockLeads.us.js`, `mockTeachers.uk.js` etc., so each region's admin CRM has its own realistic demo data.
6. **i18n framework** — if you want true multilingual support (e.g., Arabic RTL for UAE, French for Quebec), integrate `react-i18next`. The current implementation uses English-only UI with regional spelling differences (US English / UK English / Canadian English / UAE British English).

## How to extend to a 6th region

If you want to add, say, Australia (AU):

1. Add `AU` to `REGIONS` in `src/config/regions.js` (with currency AUD, routePrefix `/au`, design tokens).
2. Add `AU` to `REGION_LIST` array (controls order on the Origin page).
3. Create `src/regions/au/` mirroring the structure of `src/regions/us/`:
   - `data/auContent.js` (Australian grade levels: Prep, Year 1–12, HSC/VCE/QCE/etc.; subjects; locations: Sydney, Melbourne, Brisbane, Perth, Adelaide, Other)
   - `components/AUHeader.jsx`, `AUFooter.jsx`, `AULayout.jsx`, `RegionSeo.jsx` (re-export stub)
   - `pages/AUHome.jsx`, `AUAbout.jsx`, `AUContact.jsx`, `AUFindTutor.jsx`, `AUSubjects.jsx`, `AUCurriculum.jsx`, `AULocations.jsx`, `AUHowItWorks.jsx`, `AUBecomeTutor.jsx`, `AUBlog.jsx`
4. Wire the 10 new routes into `src/routes/AppRoutes.jsx` inside a `<Route element={<AULayout />}>` block.
5. Done — the Origin page automatically picks up the new region, the RegionSwitcher FAB shows it in the dropdown, and `leadService` accepts `region: 'AU'` out of the box.
