/**
 * UK region data — education system, locations, subjects, curriculum.
 *
 * All content is regionally specific to the United Kingdom.
 * Business identity (founder, contact info, services) is shared with India.
 *
 * Per spec §5 "DO NOT INVENT REAL CLAIMS":
 *   - Verified Srijee Tutor business info (founder, contact, awards, stats)
 *     is reused across all regions.
 *   - All unverified regional info (sample locations, tutor availability,
 *     sample testimonials) is clearly marked as Demo content.
 *
 * Per spec §7 (UK design direction):
 *   Elegant, academic, premium, traditional but modern, sophisticated.
 *   UK English spelling throughout (Personalised, Programme, Centre, etc.).
 */

/* =========================================================
   KEY STAGES & EXAM YEARS (UK education system)
   ========================================================= */

export const ukGradeLevels = [
  // Early Years
  { slug: 'early-years', label: 'Early Years', group: 'Early Years', desc: 'Reception & Nursery — phonics, counting, social skills.' },
  // Primary (KS1 & KS2)
  { slug: 'ks1-year-1', label: 'Year 1 (KS1)', group: 'Key Stage 1', desc: 'Phonics, simple addition, structured play-based learning.' },
  { slug: 'ks1-year-2', label: 'Year 2 (KS1)', group: 'Key Stage 1', desc: 'Reading fluency, KS1 SATs readiness, number bonds.' },
  { slug: 'ks2-year-3', label: 'Year 3 (KS2)', group: 'Key Stage 2', desc: 'Times tables, sentence structure, early science.' },
  { slug: 'ks2-year-4', label: 'Year 4 (KS2)', group: 'Key Stage 2', desc: 'Multiplication check, comprehension, history units.' },
  { slug: 'ks2-year-5', label: 'Year 5 (KS2)', group: 'Key Stage 2', desc: 'Fractions, structured essays, 11+ preparation begins.' },
  { slug: 'ks2-year-6', label: 'Year 6 (KS2)', group: 'Key Stage 2', desc: 'KS2 SATs, algebra readiness, secondary transition.' },
  // Secondary (KS3)
  { slug: 'ks3-year-7', label: 'Year 7 (KS3)', group: 'Key Stage 3', desc: 'Secondary transition, foundation GCSE topics.' },
  { slug: 'ks3-year-8', label: 'Year 8 (KS3)', group: 'Key Stage 3', desc: 'Subject specialisation, French/Spanish/Mandarin.' },
  { slug: 'ks3-year-9', label: 'Year 9 (KS3)', group: 'Key Stage 3', desc: 'GCSE option choices, end of KS3 assessment.' },
  // GCSE Years (KS4)
  { slug: 'gcse-year-10', label: 'Year 10 (GCSE)', group: 'GCSE Years', desc: 'GCSE courses begin — Maths, English, Sciences, options.' },
  { slug: 'gcse-year-11', label: 'Year 11 (GCSE)', group: 'GCSE Years', desc: 'GCSE exams, revision, coursework completion.' },
  // A-Level Years (KS5 / Sixth Form)
  { slug: 'alevel-year-12', label: 'Year 12 (AS)', group: 'A-Level Years', desc: 'AS-Level study — 3 to 4 specialist subjects.' },
  { slug: 'alevel-year-13', label: 'Year 13 (A2)', group: 'A-Level Years', desc: 'A-Level exams, UCAS applications, university offers.' },
  // IB Years
  { slug: 'ib-myp', label: 'IB MYP (Years 7–11)', group: 'IB Years', desc: 'Middle Years Programme — interdisciplinary learning.' },
  { slug: 'ib-dp', label: 'IB Diploma (Years 12–13)', group: 'IB Years', desc: 'Diploma Programme — 6 subjects + TOK + EE + CAS.' },
]

export const ukGradeGroups = [
  'Early Years',
  'Key Stage 1',
  'Key Stage 2',
  'Key Stage 3',
  'GCSE Years',
  'A-Level Years',
  'IB Years',
]

/* =========================================================
   CURRICULUM STANDARDS & EXAM BOARDS
   ========================================================= */

export const ukCurriculum = [
  {
    slug: 'national-curriculum-england',
    label: 'National Curriculum (England)',
    icon: '🏛️',
    desc: 'The statutory national curriculum for Key Stages 1–4 in England, covering core and foundation subjects.',
    subjects: ['English', 'Mathematics', 'Science', 'History', 'Geography'],
    states: 'England',
  },
  {
    slug: 'scottish-cfe',
    label: 'Curriculum for Excellence (Scotland)',
    icon: '🏴',
    desc: "Scotland's broad, skills-based curriculum across Early, First, Second, Third & Fourth Levels, and Senior Phase.",
    subjects: ['Literacy', 'Numeracy', 'Sciences', 'Social Studies', 'Expressive Arts'],
    states: 'Scotland',
  },
  {
    slug: 'gcse-igcse',
    label: 'GCSE & IGCSE',
    icon: '🎓',
    desc: 'General Certificate of Secondary Education — exam-board-aligned (AQA, Edexcel, OCR, WJEC) qualifications sat at age 16.',
    subjects: ['Maths', 'English Lang', 'English Lit', 'Triple Science', 'Languages'],
    states: 'UK-wide + international',
  },
  {
    slug: 'a-level',
    label: 'A-Level',
    icon: '📐',
    desc: 'Advanced Level qualifications (AS & A2) — the standard pre-university qualification sat at age 18 across England, Wales, and Northern Ireland.',
    subjects: ['Maths', 'Further Maths', 'Physics', 'Chemistry', 'Biology', 'Economics'],
    states: 'England, Wales, NI',
  },
  {
    slug: 'ib-diploma',
    label: 'IB Diploma Programme',
    icon: '🌍',
    desc: 'International Baccalaureate Diploma — six subject groups plus Theory of Knowledge, Extended Essay, and CAS.',
    subjects: ['HL/SL subjects', 'TOK', 'Extended Essay', 'CAS'],
    states: 'Worldwide',
  },
  {
    slug: 'common-entrance',
    label: '11+ & 13+ Common Entrance',
    icon: '🚪',
    desc: 'Selective entry exams for UK independent schools — verbal reasoning, non-verbal reasoning, Maths, and English.',
    subjects: ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Maths', 'English'],
    states: 'UK independent sector',
  },
]

/* =========================================================
   SUBJECTS (UK academic vocabulary)
   ========================================================= */

export const ukSubjects = [
  { slug: 'mathematics', label: 'Mathematics', icon: '∑', popular: true, group: 'Sciences' },
  { slug: 'physics', label: 'Physics', icon: '⚛', popular: true, group: 'Sciences' },
  { slug: 'chemistry', label: 'Chemistry', icon: '🧪', popular: true, group: 'Sciences' },
  { slug: 'biology', label: 'Biology', icon: '🧬', popular: true, group: 'Sciences' },
  { slug: 'computer-science', label: 'Computer Science', icon: '💻', popular: true, group: 'Sciences' },
  { slug: 'english', label: 'English', icon: '📖', popular: true, group: 'Humanities' },
  { slug: 'history', label: 'History', icon: '🏛️', popular: true, group: 'Humanities' },
  { slug: 'geography', label: 'Geography', icon: '🗺️', popular: true, group: 'Humanities' },
  { slug: 'economics', label: 'Economics', icon: '📈', popular: false, group: 'Social Sciences' },
  { slug: 'french', label: 'French', icon: '🇫🇷', popular: true, group: 'Languages' },
  { slug: 'spanish', label: 'Spanish', icon: '🇪🇸', popular: true, group: 'Languages' },
  { slug: 'german', label: 'German', icon: '🇩🇪', popular: false, group: 'Languages' },
  { slug: 'mandarin', label: 'Mandarin', icon: '🇨🇳', popular: false, group: 'Languages' },
]

export const ukSubjectGroups = ['Sciences', 'Humanities', 'Languages', 'Social Sciences']

/* =========================================================
   LOCATIONS (Demo — per spec §6)
   ========================================================= */

export const ukLocations = [
  { slug: 'london', label: 'London', region: 'Greater London', primary: true },
  { slug: 'manchester', label: 'Manchester', region: 'North West', primary: true },
  { slug: 'birmingham', label: 'Birmingham', region: 'West Midlands', primary: true },
  { slug: 'leeds', label: 'Leeds', region: 'Yorkshire & the Humber', primary: false },
  { slug: 'bristol', label: 'Bristol', region: 'South West', primary: false },
  { slug: 'other-uk-areas', label: 'Other UK Areas', region: 'Nationwide', primary: false },
]

/* =========================================================
   TEST PREP PROGRAMMES
   ========================================================= */

export const ukTestPrep = [
  {
    slug: 'gcse-prep',
    name: 'GCSE Prep',
    icon: '🎓',
    duration: '12–24 weeks',
    desc: 'Targeted GCSE tuition aligned to your exam board — AQA, Edexcel, OCR, or WJEC.',
    outcomes: ['Grade improvement', 'Exam technique', 'Past-paper practice'],
    color: 'from-slate-700 to-slate-900',
  },
  {
    slug: 'a-level-prep',
    name: 'A-Level Prep',
    icon: '📐',
    duration: '16–32 weeks',
    desc: 'Focused A-Level support across AS and A2 — Maths, Sciences, Humanities, and Languages.',
    outcomes: ['Grade targets met', 'UCAS readiness', 'University offers'],
    color: 'from-amber-700 to-amber-900',
  },
  {
    slug: 'ib-prep',
    name: 'IB Diploma Prep',
    icon: '🌍',
    duration: 'Year-round',
    desc: 'HL/SL subject support plus TOK, Extended Essay guidance, and CAS planning.',
    outcomes: ['Final IB score', 'Internal Assessment polish', 'EE & TOK support'],
    color: 'from-stone-700 to-stone-900',
  },
  {
    slug: 'common-entrance-prep',
    name: '11+ & 13+ Common Entrance',
    icon: '🚪',
    duration: '6–18 months',
    desc: 'Verbal & non-verbal reasoning, Maths, and English for selective independent school entry.',
    outcomes: ['Familiarisation', 'Reasoning fluency', 'Exam confidence'],
    color: 'from-amber-800 to-stone-900',
  },
]

/* =========================================================
   NAVIGATION (UK-specific — per spec §10)
   ========================================================= */

export const ukNav = [
  { label: 'Home', to: '/uk' },
  {
    label: 'Find a Tutor',
    children: [
      { label: 'By Subject', to: '/uk/subjects', desc: 'Browse all academic subjects.' },
      { label: 'By Key Stage', to: '/uk/curriculum', desc: 'KS1, KS2, KS3, GCSE, A-Level, IB.' },
      { label: 'GCSE Prep', to: '/uk/curriculum', desc: 'Exam-board-aligned GCSE support.' },
      { label: 'A-Level Prep', to: '/uk/curriculum', desc: 'AS & A2 subject specialists.' },
    ],
  },
  {
    label: 'Subjects',
    to: '/uk/subjects',
  },
  {
    label: 'Key Stages',
    to: '/uk/curriculum',
  },
  {
    label: 'GCSE',
    to: '/uk/curriculum',
  },
  {
    label: 'A-Level',
    to: '/uk/curriculum',
  },
  {
    label: 'How It Works',
    to: '/uk/how-it-works',
  },
  {
    label: 'About',
    to: '/uk/about',
  },
  {
    label: 'Contact',
    to: '/uk/contact',
  },
]

/* =========================================================
   SAMPLE TESTIMONIALS (Demo — per spec §5)
   ========================================================= */

export const ukTestimonials = [
  {
    id: 'uk-t1',
    name: 'Demo Parent — Eleanor R.',
    role: 'Parent',
    school: 'Demo Grammar School',
    location: 'Demo — London',
    rating: 5,
    quote:
      'Demo testimonial placeholder. Srijee Tutor paired our daughter with a verified online physics tutor who guided her from a Grade 6 to a Grade 9 at GCSE. [Replace with a verified Srijee Tutor UK testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'uk-t2',
    name: 'Demo Student — Oliver W.',
    role: 'Student',
    school: 'Demo Sixth Form College',
    location: 'Demo — Manchester',
    rating: 5,
    quote:
      'Demo testimonial placeholder. My A-Level Maths tutor broke down difficult Pure Maths topics into clear, manageable steps. [Replace with a verified Srijee Tutor UK testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'uk-t3',
    name: 'Demo Parent — Priya K.',
    role: 'Parent',
    school: 'Demo Prep School',
    location: 'Demo — Birmingham',
    rating: 5,
    quote:
      'Demo testimonial placeholder. The 11+ Common Entrance preparation was structured, calm, and gave our son real confidence on exam day. [Replace with a verified Srijee Tutor UK testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
]

/* =========================================================
   HOW IT WORKS — UK-specific step flow
   ========================================================= */

export const ukHowItWorks = [
  {
    n: 1,
    title: 'Share Your Needs',
    desc: 'Tell us your key stage, subjects, goals, and schedule. Takes three minutes.',
    icon: '📝',
  },
  {
    n: 2,
    title: 'Meet Your Tutor Consultant',
    desc: 'A dedicated UK-based tutor consultant reviews your requirements and matches verified tutors.',
    icon: '🤝',
  },
  {
    n: 3,
    title: 'Get Matched Tutors',
    desc: 'Receive 2–3 verified tutor profiles with match scores and credentials.',
    icon: '🎯',
  },
  {
    n: 4,
    title: 'Take a Free Demo',
    desc: 'Experience the teaching first with a free demo lesson before you commit.',
    icon: '🎬',
  },
  {
    n: 5,
    title: 'Start Learning',
    desc: 'Choose your tutor and begin regular sessions — online or in-home where available.',
    icon: '🚀',
  },
]

/* =========================================================
   WHY CHOOSE US — UK-specific benefits
   ========================================================= */

export const ukWhyChooseUs = [
  { title: 'Verified Expert Tutors', desc: 'Every tutor is background-checked, credentials-reviewed, and demo-evaluated before joining.', icon: '✓' },
  { title: 'Exam-Board Aligned', desc: 'Tutors know AQA, Edexcel, OCR, and WJEC specifications — and the National Curriculum.', icon: '🎓' },
  { title: 'Key Stage Specialists', desc: 'From KS1 phonics to A-Level Further Maths — and every stage in between.', icon: '📐' },
  { title: 'Flexible Scheduling', desc: 'Sessions fit around your time zone, term dates, and family commitments.', icon: '🕒' },
  { title: 'Personalised Consultant', desc: 'A dedicated UK tutor consultant supports you from first contact to first lesson.', icon: '🤝' },
  { title: 'Demo-First Selection', desc: 'Always try a free demo lesson before you choose your tutor.', icon: '🎬' },
]

/* =========================================================
   FAQ — UK-specific
   ========================================================= */

export const ukFaqs = [
  {
    q: 'Do you offer in-home tutoring in the UK?',
    a: 'In select metropolitan areas we offer in-home tutoring. Across the UK we offer online one-to-one and group tuition, which most families choose for flexibility. Contact us to confirm availability in your area.',
  },
  {
    q: 'Are your tutors familiar with the UK curriculum?',
    a: 'Yes. Our verified tutors are trained on the National Curriculum (England), the Scottish Curriculum for Excellence, GCSE/IGCSE specifications (AQA, Edexcel, OCR, WJEC), A-Levels, and the IB Diploma Programme.',
  },
  {
    q: 'How do you verify tutors?',
    a: 'Every tutor completes a 5-step profile verification — credentials review, demo-class evaluation, references, and DBS-style background checks where applicable. Only verified tutors appear in your matches.',
  },
  {
    q: 'Can I take a free demo lesson before committing?',
    a: 'Absolutely. Every matched tutor offers a free demo lesson so you can experience their teaching style before you commit to ongoing sessions.',
  },
  {
    q: 'What are the typical session rates in GBP?',
    a: 'Pricing varies by subject, key stage, and tutor experience. Your tutor consultant will share transparent GBP pricing based on your specific needs during your free consultation.',
  },
  {
    q: 'Do you support students outside the UK?',
    a: 'Srijee Tutor serves 5 regions globally. If you are looking for a non-UK curriculum (CBSE, Common Core, provincial, or UAE/MOE), visit our global gateway to switch regions.',
  },
]
