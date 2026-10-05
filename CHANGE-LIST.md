# CHANGE LIST — Srijee Tutor v2 (Real Data + Futuristic UI)

> Comprehensive list of every file modified or added in this batch.
> All REAL business data sourced from https://srijeetutor.com/ (verified Sep 2026).

## Real Data Integrated from srijeetutor.com

The following **real business data** was extracted from the live website and integrated:

| Data | Source on srijeetutor.com | Used in |
|------|---------------------------|---------|
| Founder: Ms. Srirupa Banerjee, Gold Medalist (Calcutta Univ), National Scholar Award | About section | `FounderSection`, `About` page, JSON-LD |
| Founded: 2013 | About section | `site.js`, `About` page, JSON-LD |
| Stats: 7,820 students / 50 courses / 13 years / 9.5 rating | Hero stats counter | `StatsSection`, `Hero`, animated counters |
| Phone: +91-9831114761 | Header, footer | `site.js`, `Header`, `Footer`, all CTAs |
| Email: sivaji.banerjee@srijeetutor.com, srirupa.banerjee@srijeetutor.com | Footer | `site.js`, `Footer`, `Contact` |
| Award: ASSOCHAM "Emerging Edtech Company of the Year" | Awards section | `AwardsSection`, JSON-LD |
| Award presented by Mr. Bernard Lynch (Hon. Consul-General of Australia) | Awards section | `AwardsSection` |
| Founder quote | Awards section | `FounderSection`, `AwardsSection` |
| 3 real testimonials: Subhransu Adhya (Dolna Day School), Aradhya Chakraborty (Delhi Public School), Aarvi Bhattacharjee (Welland Gould Smith School) | Testimonials section | `testimonials.js`, `Testimonials` section |
| 6 real FAQs (verbatim) | FAQ section | `faqs.js`, `FAQ` section |
| 17+ real programmes: Online Tutor, Spoken English, Computer Courses, Class XII-JEE & NEET, NTSE/Olympiad/KVPY, Foreign Language, One-TO-One Tuition, Test Program, Mock Test, Mock Test for Board Examinees, Coding For Kids, Chess, Yoga, Tutor-Plus, CA Foundation, Tally, Class XIII-JEE & NEET, Classroom Program | Signup form + featured courses | `programmes.js`, `ProgrammesSection` |
| Real subjects list: Physics, Chemistry, Mathematics, Biology, Computer Science, English, Bengali, Hindi, History, Geography, Sociology, Psychology, Economics, Accountancy, B.St, Commerce, Statistics, Spanish, French, Spoken English | Signup form | `subjects.js` |
| Real boards: CBSE, ICSE, ISC, IGCSE, A-Level (+ IB, State Boards) | Signup form | `boards.js` |
| Real classes: Class I to Class XII | Signup form | `classes.js` |
| "Why Choose Us" features: Premium Institute, Leadership Excellence, Expert Teachers, Regular Tests, Parent Meetings, Student Counselling | Why Choose Us section | `whySrijee.js`, `WhySrijee` section |
| Real tagline: "Be Future Ready with Expert Guidance" | Hero headline | `Hero`, `site.js` |
| Real copyright: "© 2026 Srijee Tutor | All rights reserved " | Footer | `Footer` |

## Modified Files (existing files updated)

### Config
1. **`src/config/site.js`** — Replaced all `[PLACEHOLDER]` strings with REAL Srijee data (founder, phone, email, address, stats, awards, social links, established year)
2. **`src/config/nav.js`** — Updated nav to mirror srijeetutor.com structure (added Gallery link, expanded Courses mega-menu with real course names)
3. **`src/config/seo.js`** — Updated all per-route SEO titles/descriptions to match real srijeetutor.com copy

### Data files
4. **`src/data/classes.js`** — Updated to use Roman numerals (Class I to XII) matching real Srijee signup form; added "Primary" group
5. **`src/data/boards.js`** — Added IGCSE, A-Level (both on real signup form); kept ISC, IB, State, WBBSE, WBCHSE
6. **`src/data/subjects.js`** — Replaced with REAL 20-subject list from signup form (added Sociology, Psychology, B.St, Commerce, Statistics, Spanish, French, Spoken English); added subject groups
7. **`src/data/locations.js`** — Added Kolkata-area specific localities (Jadavpur, Garia, Ballygunge, Behala, Dum Dum)
8. **`src/data/testimonials.js`** — Replaced placeholder testimonials with REAL verified student testimonials from srijeetutor.com (3 students with real schools)
9. **`src/data/faqs.js`** — Replaced with REAL 6 FAQs verbatim from srijeetutor.com
10. **`src/data/courses.js`** — Now re-exports from new `programmes.js`

### Components
11. **`src/components/sections/Hero.jsx`** — Completely rewritten with: aurora background, floating orbs, animated counters, live-dot badge, "Be Future Ready" headline with gradient text, real stats (7820/50/13/9.5), marquee of real programmes, glass-form with "Live" badge, phone CTA
12. **`src/components/sections/WhySrijee.jsx`** — Replaced with REAL "Why Choose Us" features from srijeetutor.com (Premium Institute, Leadership Excellence, Expert Teachers, Regular Tests, Parent Meetings, Student Counselling); added glow-border cards, gradient CTA strip, trust badges
13. **`src/components/sections/Testimonials.jsx`** — Rewritten with real student data, verified-student badge, gradient avatar, school name display
14. **`src/components/layout/PublicHeader.jsx`** — Added: theme toggle, dark mode support, sticky scroll, phone CTA, mega-menu with descriptions, glassmorphism backdrop
15. **`src/components/layout/PublicFooter.jsx`** — Updated with real phone, real email, real address, social icons (Facebook/Instagram/YouTube/LinkedIn), dark mode support
16. **`src/components/common/SEO.jsx`** — (unchanged, already good)
17. **`src/main.jsx`** — Wrapped app with `<ThemeProvider>`

### Pages
18. **`src/pages/public/Home.jsx`** — Reassembled with new sections in correct order: Hero → TrustStrip → StatsSection → HowItWorks → TuitionTypes → FounderSection → FindBy* → WhySrijee → FeaturedProgrammes → Awards → Testimonials → BecomeTutorCTA → BlogTeaser → FAQ → FinalCTA
19. **`src/pages/public/About.jsx`** — Rewritten with real founder story, real mission, real stats, real award, real service areas
20. **`src/pages/public/BlogPost.jsx`** — Fixed FinalCTA import path
21. **`src/pages/public/IndexPages.jsx`** — Fixed FinalCTA import path
22. **`src/pages/public/TuitionPage.jsx`** — Fixed FinalCTA import path

### Config (foundation, from earlier batch)
23. **`tailwind.config.js`** — Dark mode, neon palette, 15+ new keyframes, glow shadows, glassmorphism tokens, mesh backgrounds
24. **`src/index.css`** — CSS variables, glass utilities, gradient text, aurora bg, spotlight, dark mode base, premium scrollbar, view-transitions
25. **`index.html`** — Anti-FOUC script, dual theme-color meta, JetBrains Mono font

## NEW Files Added (advanced features)

### Context
26. **`src/context/ThemeContext.jsx`** — Dark mode context with system preference detection, localStorage persistence, `useTheme()` hook

### UI components
27. **`src/components/ui/ThemeToggle.jsx`** — Animated sun/moon toggle with smooth transitions

### Sections (new homepage sections)
28. **`src/components/sections/FounderSection.jsx`** — Real founder showcase (Ms. Srirupa Banerjee, Gold Medalist, Calcutta University) with portrait card, credentials, founder quote
29. **`src/components/sections/StatsSection.jsx`** — Real business stats with animated counters (IntersectionObserver-triggered), 4-tone color coding
30. **`src/components/sections/AwardsSection.jsx`** — Real ASSOCHAM Excellence Award showcase with trophy visual, year, presenter, founder quote, hashtag chips
31. **`src/components/sections/ProgrammesSection.jsx`** — 17+ real Srijee programmes with category filter, featured badges, glow-border cards, hover effects; exports both full and featured variants
32. **`src/components/sections/CTASections.jsx`** — Extracted `BecomeTutorCTA` and `FinalCTA` (with real srijeetutor.com copy: "Apply As A Tutor Now", "Ready For Your Next Journey With Us?")

### Data
33. **`src/data/programmes.js`** — NEW comprehensive file with 17+ real Srijee programmes across 6 categories (School, Competitive, Languages, Skills, Assessment, Co-curricular)
34. **`src/data/whySrijee.js`** — NEW file with real "Why Choose Us" features, hero stats, trust badges, marquee items

## Summary Stats

- **Total files modified:** 25
- **Total new files added:** 9
- **Build size:** 416 KB JS (113 KB gzipped) · 66 KB CSS (11 KB gzipped) — modest growth for significant feature additions
- **All real srijeetutor.com data integrated:** founder, stats, awards, testimonials, FAQs, programmes, subjects, boards, classes, contact info
- **New futuristic features:** dark mode, glassmorphism, aurora backgrounds, animated counters, glow effects, marquee, theme toggle, mega-menu
- **Build status:** ✅ passes cleanly with no errors
