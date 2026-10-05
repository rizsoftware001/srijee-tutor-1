/**
 * UAE region data — education system, locations, subjects, curriculum.
 *
 * All content is regionally specific to the United Arab Emirates.
 * Business identity (founder, contact info, services) is shared with India.
 *
 * Per spec §5 "DO NOT INVENT REAL CLAIMS":
 *   - Verified Srijee Tutor business info (founder, contact, awards, stats)
 *     is reused across all regions.
 *   - All unverified regional info (sample locations, tutor availability,
 *     sample testimonials) is clearly marked as Demo content.
 *
 * Per spec §9: UAE premium navy + subtle gold palette. Currency: AED (د.إ).
 * Multi-curriculum support: MOE, British, American, IB, CBSE, ICSE.
 * Initial marketing focus: Abu Dhabi.
 */

/* =========================================================
   ACADEMIC LEVELS (UAE multi-curriculum system)
   Groups: Early Years, Primary, Middle School, Secondary,
   Examination Years (GCSE, IGCSE, A-Level, IB)
   ========================================================= */

export const aeAcademicLevels = [
  // Early Years
  { slug: 'kg', label: 'KG (Kindergarten)', group: 'Early Years', desc: 'Foundation Stage — early literacy, numeracy, and social development.' },
  // Primary
  { slug: 'primary', label: 'Primary School (Years 1–6)', group: 'Primary', desc: 'Core literacy, numeracy, science, and Arabic-language foundations.' },
  // Middle School
  { slug: 'middle-school', label: 'Middle School (Years 7–8)', group: 'Middle School', desc: 'Pre-algebra, structured sciences, and inquiry-led humanities.' },
  // Secondary
  { slug: 'secondary', label: 'Secondary (Years 9–11)', group: 'Secondary', desc: 'Pre-exam preparation across all curriculum tracks (MOE, British, American, IB).' },
  // Examination Years
  { slug: 'gcse', label: 'GCSE', group: 'Examination Years', desc: 'UK General Certificate of Secondary Education — typically Years 10–11.' },
  { slug: 'igcse', label: 'IGCSE', group: 'Examination Years', desc: 'International GCSE — widely taken across UAE British and international schools.' },
  { slug: 'a-level', label: 'A-Level', group: 'Examination Years', desc: 'UK Advanced Level — typically Years 12–13 (Sixth Form).' },
  { slug: 'ib', label: 'IB Diploma', group: 'Examination Years', desc: 'International Baccalaureate Diploma Programme — pre-university, ages 16–18.' },
]

export const aeAcademicGroups = ['Early Years', 'Primary', 'Middle School', 'Secondary', 'Examination Years']

/* =========================================================
   CURRICULUM OPTIONS (6 — multi-curriculum UAE landscape)
   ========================================================= */

export const aeCurriculum = [
  {
    slug: 'uae-moe',
    label: 'UAE / MOE Curriculum',
    icon: '🏛️',
    desc: 'The Ministry of Education national curriculum — Arabic-medium with strong English provision. Adopted across UAE public schools and many private schools.',
    subjects: ['Arabic', 'Islamic Studies', 'English', 'Mathematics', 'Science', 'Social Studies'],
    scope: 'UAE public schools + many private schools',
    keyStages: 'KG → Cycle 1 (Grades 1–5) → Cycle 2 (Grades 6–9) → Cycle 3 (Grades 10–12)',
  },
  {
    slug: 'british',
    label: 'British Curriculum',
    icon: '🇬🇧',
    desc: 'The National Curriculum for England, leading to GCSE/IGCSE at Year 11 and A-Level at Year 13. The most widely chosen international track in the UAE.',
    subjects: ['English', 'Mathematics', 'Sciences', 'Humanities', 'Modern Languages'],
    scope: 'British-curriculum schools across the Emirates',
    keyStages: 'EYFS → KS1–2 → KS3 → KS4 (GCSE/IGCSE) → KS5 (A-Level)',
  },
  {
    slug: 'american',
    label: 'American Curriculum',
    icon: '🇺🇸',
    desc: 'Common Core–aligned pathway leading to a US High School Diploma, with optional AP courses and SAT/ACT preparation for university admission.',
    subjects: ['English Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Electives'],
    scope: 'American-curriculum schools across the Emirates',
    keyStages: 'KG → Elementary (G1–5) → Middle (G6–8) → High School (G9–12)',
  },
  {
    slug: 'ib',
    label: 'IB Curriculum',
    icon: '🌍',
    desc: 'International Baccalaureate continuum — Primary Years Programme (PYP), Middle Years Programme (MYP), and Diploma Programme (DP) for ages 3–19.',
    subjects: ['Language & Literature', 'Individuals & Societies', 'Sciences', 'Mathematics', 'The Arts', 'Language Acquisition'],
    scope: 'IB World Schools across the Emirates',
    keyStages: 'PYP (3–12) → MYP (11–16) → DP / CP (16–19)',
  },
  {
    slug: 'cbse',
    label: 'CBSE (Indian)',
    icon: '🇮🇳',
    desc: 'Central Board of Secondary Education — India\'s largest national board. Widely offered across UAE Indian-community schools.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi / Second Language'],
    scope: 'Indian-community schools across the Emirates',
    keyStages: 'Primary → Middle (G6–8) → Secondary (G9–10) → Senior Secondary (G11–12)',
  },
  {
    slug: 'icse',
    label: 'ICSE (Indian)',
    icon: '🇮🇳',
    desc: 'Indian Certificate of Secondary Education — CISCE board. Emphasises a broad, rigorous, English-medium syllabus with strong language and humanities.',
    subjects: ['English', 'Mathematics', 'Physics, Chemistry, Biology', 'History & Civics', 'Geography', 'Second Language'],
    scope: 'Indian-community schools across the Emirates',
    keyStages: 'Primary → Middle (G6–8) → ICSE (G9–10) → ISC (G11–12)',
  },
]

/* =========================================================
   SUBJECTS (UAE — Arabic featured, multi-curriculum coverage)
   ========================================================= */

export const aeSubjects = [
  { slug: 'mathematics', label: 'Mathematics', icon: '∑', popular: true, group: 'Sciences' },
  { slug: 'arabic', label: 'Arabic', icon: 'ع', popular: true, group: 'Languages', featured: true },
  { slug: 'english', label: 'English', icon: '📖', popular: true, group: 'Languages' },
  { slug: 'physics', label: 'Physics', icon: '⚛', popular: true, group: 'Sciences' },
  { slug: 'chemistry', label: 'Chemistry', icon: '🧪', popular: true, group: 'Sciences' },
  { slug: 'biology', label: 'Biology', icon: '🧬', popular: true, group: 'Sciences' },
  { slug: 'computer-science', label: 'Computer Science', icon: '💻', popular: true, group: 'Sciences' },
  { slug: 'business-studies', label: 'Business Studies', icon: '📈', popular: false, group: 'Humanities & Business' },
  { slug: 'economics', label: 'Economics', icon: '💼', popular: false, group: 'Humanities & Business' },
  { slug: 'french', label: 'French', icon: '🇫🇷', popular: false, group: 'Languages' },
]

export const aeSubjectGroups = ['Sciences', 'Languages', 'Humanities & Business']

/* =========================================================
   LOCATIONS (Demo — per spec §9 Abu Dhabi focus)
   ========================================================= */

export const aeLocations = [
  { slug: 'abu-dhabi', label: 'Abu Dhabi', region: 'Abu Dhabi Emirate', primary: true, featured: true, badge: 'Featured Location · Head Office' },
  { slug: 'dubai', label: 'Dubai', region: 'Dubai Emirate', primary: true },
  { slug: 'sharjah', label: 'Sharjah', region: 'Sharjah Emirate', primary: false },
  { slug: 'al-ain', label: 'Al Ain', region: 'Abu Dhabi Emirate', primary: false },
  { slug: 'other-uae', label: 'Other UAE Areas', region: 'Across the Emirates', primary: false },
]

/* =========================================================
   TEST PREP PROGRAMS (UAE — multi-curriculum exam prep)
   ========================================================= */

export const aeTestPrep = [
  {
    slug: 'gcse-prep',
    name: 'GCSE Prep',
    icon: '🇬🇧',
    duration: '8–16 weeks',
    desc: 'Comprehensive GCSE/IGCSE preparation across English, Mathematics, and the Sciences — exam-board aligned (Edexcel, AQA, Cambridge).',
    outcomes: ['Board-aligned practice', 'Exam technique', 'Targeted grade improvement'],
    color: 'from-blue-800 to-slate-900',
  },
  {
    slug: 'a-level-prep',
    name: 'A-Level Prep',
    icon: '🎓',
    duration: '12–20 weeks',
    desc: 'A-Level preparation for Year 12–13 students — subject specialism depth, exam technique, and university-readiness.',
    outcomes: ['Subject mastery', 'Past-paper practice', 'University applications support'],
    color: 'from-blue-900 to-blue-950',
  },
  {
    slug: 'ib-prep',
    name: 'IB Prep',
    icon: '🌍',
    duration: 'Semester-aligned',
    desc: 'IB Diploma preparation across HL/SL subjects, Internal Assessments, ToK, and the Extended Essay.',
    outcomes: ['IA & EE support', 'HL/SL coaching', 'Predicted-grade confidence'],
    color: 'from-slate-800 to-slate-950',
  },
  {
    slug: 'cbse-board-prep',
    name: 'CBSE Board Prep',
    icon: '🇮🇳',
    duration: '8–16 weeks',
    desc: 'CBSE Class 10 & 12 board examination preparation across all major subjects.',
    outcomes: ['NCERT mastery', 'Past-paper drills', 'Marking-scheme awareness'],
    color: 'from-amber-700 to-amber-900',
  },
  {
    slug: 'moe-exam-prep',
    name: 'MOE Exam Prep',
    icon: '🏛️',
    duration: '8–16 weeks',
    desc: 'UAE Ministry of Education cycle-end examination preparation for Arabic, English, Mathematics, and Sciences.',
    outcomes: ['MOE syllabus coverage', 'Arabic-medium support', 'Cycle 3 readiness'],
    color: 'from-blue-900 to-slate-900',
  },
]

/* =========================================================
   TUITION TYPES
   ========================================================= */

export const aeTuitionTypes = [
  { slug: 'home-tuition', label: 'Home Tuition', icon: '🏠', desc: 'In-home tutoring at your residence (subject to availability).' },
  { slug: 'online-tuition', label: 'Online Tuition', icon: '💻', desc: 'Live one-to-one or group sessions via video — flexible across the UAE.' },
  { slug: 'one-to-one', label: 'One-to-One Tuition', icon: '👤', desc: 'Personalised individual attention — online or in-home where available.' },
  { slug: 'group-tuition', label: 'Group Tuition', icon: '👥', desc: 'Small-group sessions for siblings or classmates — cost-effective and collaborative.' },
]

/* =========================================================
   NAVIGATION (UAE — per spec §10)
   Home · Tuition · Curriculum · Subjects · Tutors · Locations · About · Contact
   ========================================================= */

export const aeNav = [
  { label: 'Home', to: '/ae' },
  {
    label: 'Tuition',
    children: [
      { label: 'Home Tuition', to: '/ae/find-tutor', desc: 'In-home tutoring at your residence.' },
      { label: 'Online Tuition', to: '/ae/find-tutor', desc: 'Live video sessions across the Emirates.' },
      { label: 'One-to-One Tuition', to: '/ae/find-tutor', desc: 'Personalised individual attention.' },
      { label: 'Group Tuition', to: '/ae/find-tutor', desc: 'Small-group sessions for siblings or classmates.' },
    ],
  },
  {
    label: 'Curriculum',
    to: '/ae/curriculum',
  },
  {
    label: 'Subjects',
    to: '/ae/subjects',
  },
  {
    label: 'Tutors',
    to: '/ae/find-tutor',
  },
  {
    label: 'Locations',
    to: '/ae/locations',
  },
  {
    label: 'About',
    to: '/ae/about',
  },
  {
    label: 'Contact',
    to: '/ae/contact',
  },
]

/* =========================================================
   SAMPLE TESTIMONIALS (Demo — per spec §5)
   ========================================================= */

export const aeTestimonials = [
  {
    id: 'ae-t1',
    name: 'Demo Parent — Aisha R.',
    role: 'Parent',
    school: 'Demo British School',
    location: 'Demo — Abu Dhabi',
    rating: 5,
    quote:
      'Demo testimonial placeholder. Srijee Tutor matched our daughter with a verified online tutor for IGCSE Mathematics — her predicted grade moved from a 5 to a 7. [Replace with a verified Srijee Tutor UAE testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'ae-t2',
    name: 'Demo Student — Khalid A.',
    role: 'Student',
    school: 'Demo American School',
    location: 'Demo — Dubai',
    rating: 5,
    quote:
      'Demo testimonial placeholder. My AP Calculus tutor broke down complex topics into clear steps — and the demo class made it easy to commit. [Replace with a verified Srijee Tutor UAE testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'ae-t3',
    name: 'Demo Parent — Sara M.',
    role: 'Parent',
    school: 'Demo IB World School',
    location: 'Demo — Sharjah',
    rating: 5,
    quote:
      'Demo testimonial placeholder. The Arabic-language tutor we met through Srijee was patient, qualified, and genuinely understood the MOE syllabus. [Replace with a verified Srijee Tutor UAE testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
]

/* =========================================================
   HOW IT WORKS — UAE-specific step flow (UK English spellings)
   ========================================================= */

export const aeHowItWorks = [
  {
    n: 1,
    title: 'Share Your Needs',
    desc: 'Tell us your curriculum (MOE, British, American, IB, CBSE, ICSE), academic level, subjects, and schedule. Takes 3 minutes.',
    icon: '📝',
  },
  {
    n: 2,
    title: 'Meet Your Educational Consultant',
    desc: 'A dedicated UAE-based educational consultant reviews your requirements and shortlists verified tutors from our pool.',
    icon: '🤝',
  },
  {
    n: 3,
    title: 'Get Matched Tutors',
    desc: 'Receive 2–3 verified tutor profiles with match scores, credentials, and curriculum expertise.',
    icon: '🎯',
  },
  {
    n: 4,
    title: 'Take a Free Demo',
    desc: 'Experience the teaching first with a free demo class before you commit — always demo-first.',
    icon: '🎬',
  },
  {
    n: 5,
    title: 'Start Learning',
    desc: 'Choose your tutor and begin regular sessions — online, in-home, one-to-one, or group — across the Emirates.',
    icon: '🚀',
  },
]

/* =========================================================
   WHY CHOOSE US — UAE-specific benefits
   ========================================================= */

export const aeWhyChooseUs = [
  { title: 'Verified Expert Tutors', desc: 'Every tutor is background-checked, credentials-verified, and demo-evaluated before joining.', icon: '✓' },
  { title: 'Multi-Curriculum Support', desc: 'Specialist tutors across MOE, British, American, IB, CBSE, and ICSE — under one trusted platform.', icon: '🏛️' },
  { title: 'Arabic Language Specialists', desc: 'Qualified Arabic tutors familiar with the MOE syllabus and heritage-language learning needs.', icon: 'ع' },
  { title: 'Dedicated Educational Consultant', desc: 'A real UAE-based educational consultant supports every family from first contact through first lesson.', icon: '🤝' },
  { title: 'Gulf-Region Familiarity', desc: 'Tutors and consultants who understand the UAE school calendar, KHDA/ADEK expectations, and family expectations.', icon: '🌐' },
  { title: 'Demo-First Selection', desc: 'Always try a free demo class before you commit to a tutor — no exceptions, no pressure.', icon: '🎬' },
]

/* =========================================================
   FAQ — UAE-specific
   ========================================================= */

export const aeFaqs = [
  {
    q: 'Do you offer in-home tutoring in the UAE?',
    a: 'In Abu Dhabi, Dubai, Sharjah, and Al Ain we offer in-home tutoring where available. Across all emirates we offer online one-to-one and group tuition, which most UAE families choose for flexibility. Contact us to confirm in-home availability for your area.',
  },
  {
    q: 'Which curricula do you support?',
    a: 'Our verified tutors cover the full UAE curriculum landscape: the UAE / MOE national curriculum, the British curriculum (GCSE, IGCSE, A-Level), the American curriculum (Common Core, AP, SAT/ACT), the IB continuum (PYP, MYP, DP), CBSE, and ICSE.',
  },
  {
    q: 'Do you offer Arabic-language tutoring?',
    a: 'Yes. We have verified Arabic-language specialists familiar with both the MOE Arabic-medium syllabus and the heritage-language Arabic track required for non-native learners in international schools.',
  },
  {
    q: 'How do you verify tutors?',
    a: 'Every tutor completes a 5-step verification — credentials review, demo-class evaluation, background checks, and curriculum alignment assessment. Only verified tutors appear in your matches.',
  },
  {
    q: 'Can I take a free demo class before committing?',
    a: 'Absolutely. Every matched tutor offers a free demo class so you can experience their teaching style before you commit to ongoing sessions.',
  },
  {
    q: 'What are the typical session rates in AED?',
    a: 'Pricing varies by curriculum, academic level, subject, and tutor experience. Our educational consultant will share transparent AED pricing based on your specific needs during your free consultation.',
  },
  {
    q: 'Do you support students outside the UAE?',
    a: 'Srijee Tutor serves 5 regions globally. If you are looking for a different curriculum (e.g., US state standards or UK GCSE/A-Level with a non-UAE focus), visit our global gateway to switch regions.',
  },
]
