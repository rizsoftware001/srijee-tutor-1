/**
 * USA region data — education system, locations, subjects, curriculum.
 *
 * All content is regionally specific to the United States.
 * Business identity (founder, contact info, services) is shared with India.
 *
 * Per spec §5 "DO NOT INVENT REAL CLAIMS":
 *   - Verified Srijee Tutor business info (founder, contact, awards, stats)
 *     is reused across all regions.
 *   - All unverified regional info (sample locations, tutor availability,
 *     sample testimonials) is clearly marked as Demo content.
 */

/* =========================================================
   GRADE LEVELS (US K-12 system)
   ========================================================= */

export const usGradeLevels = [
  // Elementary School
  { slug: 'kindergarten', label: 'Kindergarten', group: 'Elementary School', desc: 'Foundational literacy, numeracy, and social skills.' },
  { slug: 'grade-1', label: 'Grade 1', group: 'Elementary School', desc: 'Phonics, addition/subtraction, core reading.' },
  { slug: 'grade-2', label: 'Grade 2', group: 'Elementary School', desc: 'Reading fluency, two-digit math, science units.' },
  { slug: 'grade-3', label: 'Grade 3', group: 'Elementary School', desc: 'Multiplication, paragraph writing, inquiry science.' },
  { slug: 'grade-4', label: 'Grade 4', group: 'Elementary School', desc: 'Fractions, research skills, state history.' },
  { slug: 'grade-5', label: 'Grade 5', group: 'Elementary School', desc: 'Decimals, structured essays, life science.' },
  // Middle School
  { slug: 'grade-6', label: 'Grade 6', group: 'Middle School', desc: 'Pre-algebra, earth science, world history.' },
  { slug: 'grade-7', label: 'Grade 7', group: 'Middle School', desc: 'Algebra readiness, life science, US history.' },
  { slug: 'grade-8', label: 'Grade 8', group: 'Middle School', desc: 'Algebra I, physical science, civics.' },
  // High School
  { slug: 'grade-9', label: 'Grade 9 (Freshman)', group: 'High School', desc: 'Transition to high school, foundational HS courses.' },
  { slug: 'grade-10', label: 'Grade 10 (Sophomore)', group: 'High School', desc: 'Geometry, biology, PSAT prep.' },
  { slug: 'grade-11', label: 'Grade 11 (Junior)', group: 'High School', desc: 'Algebra II, chemistry, SAT/ACT prep.' },
  { slug: 'grade-12', label: 'Grade 12 (Senior)', group: 'High School', desc: 'AP courses, college apps, capstone projects.' },
]

export const usGradeGroups = ['Elementary School', 'Middle School', 'High School']

/* =========================================================
   CURRICULUM STANDARDS & TESTS
   ========================================================= */

export const usCurriculum = [
  {
    slug: 'common-core',
    label: 'Common Core State Standards',
    icon: '📐',
    desc: 'Nationwide K-12 standards in English Language Arts and Mathematics adopted by 41 states.',
    subjects: ['English Language Arts', 'Mathematics'],
    states: 'Adopted by 41 states + DC',
  },
  {
    slug: 'ap',
    label: 'Advanced Placement (AP)',
    icon: '🎓',
    desc: 'College-level courses and exams administered by the College Board, recognized for college credit.',
    subjects: ['AP Calculus', 'AP Physics', 'AP Chemistry', 'AP Biology', 'AP US History', 'AP English Lit'],
    states: 'Nationwide',
  },
  {
    slug: 'sat',
    label: 'SAT',
    icon: '✏️',
    desc: 'Standardized college admission test covering Reading, Writing & Language, and Math.',
    subjects: ['Reading', 'Writing & Language', 'Math (no calculator + calculator sections)'],
    states: 'Nationwide',
  },
  {
    slug: 'act',
    label: 'ACT',
    icon: '📋',
    desc: 'College admission exam covering English, Math, Reading, Science, plus optional Writing.',
    subjects: ['English', 'Math', 'Reading', 'Science', 'Writing (optional)'],
    states: 'Nationwide',
  },
  {
    slug: 'state-standards',
    label: 'State Standards',
    icon: '🗺️',
    desc: 'State-specific K-12 standards (e.g., TEKS in Texas, SOL in Virginia, Florida B.E.S.T.).',
    subjects: ['State ELA', 'State Math', 'State Science', 'State Social Studies'],
    states: 'State-by-state',
  },
  {
    slug: 'college-prep',
    label: 'College Preparation',
    icon: '🏛️',
    desc: 'Application essay coaching, interview prep, extracurricular planning, and FAFSA guidance.',
    subjects: ['Essay writing', 'Interview prep', 'Application strategy'],
    states: 'Nationwide',
  },
]

/* =========================================================
   SUBJECTS (US-specific academic vocabulary)
   ========================================================= */

export const usSubjects = [
  { slug: 'mathematics', label: 'Mathematics', icon: '∑', popular: true, group: 'STEM' },
  { slug: 'science', label: 'Science', icon: '🔬', popular: true, group: 'STEM' },
  { slug: 'physics', label: 'Physics', icon: '⚛', popular: true, group: 'STEM' },
  { slug: 'chemistry', label: 'Chemistry', icon: '🧪', popular: true, group: 'STEM' },
  { slug: 'biology', label: 'Biology', icon: '🧬', popular: true, group: 'STEM' },
  { slug: 'english', label: 'English', icon: '📖', popular: true, group: 'Humanities' },
  { slug: 'computer-science', label: 'Computer Science', icon: '💻', popular: true, group: 'STEM' },
  { slug: 'history', label: 'History', icon: '🏛️', popular: false, group: 'Humanities' },
  { slug: 'economics', label: 'Economics', icon: '📈', popular: false, group: 'Social Sciences' },
  { slug: 'psychology', label: 'Psychology', icon: '🧠', popular: false, group: 'Social Sciences' },
  { slug: 'spanish', label: 'Spanish', icon: '🇪🇸', popular: true, group: 'Foreign Languages' },
  { slug: 'french', label: 'French', icon: '🇫🇷', popular: false, group: 'Foreign Languages' },
  { slug: 'mandarin', label: 'Mandarin', icon: '🇨🇳', popular: false, group: 'Foreign Languages' },
  { slug: 'statistics', label: 'Statistics', icon: '📊', popular: false, group: 'STEM' },
  { slug: 'writing', label: 'Writing & Composition', icon: '✍️', popular: false, group: 'Humanities' },
]

export const usSubjectGroups = ['STEM', 'Humanities', 'Social Sciences', 'Foreign Languages']

/* =========================================================
   LOCATIONS (Demo — per spec §6)
   ========================================================= */

export const usLocations = [
  { slug: 'new-york', label: 'New York', region: 'Northeast', primary: true },
  { slug: 'california', label: 'California', region: 'West', primary: true },
  { slug: 'texas', label: 'Texas', region: 'South', primary: true },
  { slug: 'florida', label: 'Florida', region: 'South', primary: false },
  { slug: 'new-jersey', label: 'New Jersey', region: 'Northeast', primary: false },
  { slug: 'illinois', label: 'Illinois', region: 'Midwest', primary: false },
  { slug: 'massachusetts', label: 'Massachusetts', region: 'Northeast', primary: false },
  { slug: 'washington', label: 'Washington', region: 'West', primary: false },
  { slug: 'georgia', label: 'Georgia', region: 'South', primary: false },
  { slug: 'other-states', label: 'Other States', region: 'Nationwide', primary: false },
]

/* =========================================================
   TEST PREP PROGRAMS
   ========================================================= */

export const usTestPrep = [
  {
    slug: 'sat-prep',
    name: 'SAT Prep',
    icon: '✏️',
    duration: '8–12 weeks',
    desc: 'Comprehensive SAT prep covering Reading, Writing & Language, and Math sections.',
    outcomes: ['Score improvement', 'Test-taking strategies', 'Full-length practice tests'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    slug: 'act-prep',
    name: 'ACT Prep',
    icon: '📋',
    duration: '8–12 weeks',
    desc: 'Targeted ACT preparation across English, Math, Reading, and Science.',
    outcomes: ['Section-by-section coaching', 'Timed practice', 'Score analysis'],
    color: 'from-red-600 to-red-800',
  },
  {
    slug: 'ap-subjects',
    name: 'AP Subjects',
    icon: '🎓',
    duration: 'Semester-aligned',
    desc: 'College-level AP courses across STEM, humanities, and social sciences.',
    outcomes: ['College credit', 'Standout transcript', 'AP exam mastery'],
    color: 'from-slate-700 to-slate-900',
  },
  {
    slug: 'college-counseling',
    name: 'College Counseling',
    icon: '🏛️',
    duration: 'Year-round',
    desc: 'Application essay coaching, interview prep, and admissions strategy.',
    outcomes: ['Strong applications', 'Essay polish', 'Interview confidence'],
    color: 'from-emerald-700 to-emerald-900',
  },
]

/* =========================================================
   NAVIGATION (US-specific — per spec §10)
   ========================================================= */

export const usNav = [
  { label: 'Home', to: '/us' },
  {
    label: 'Find a Tutor',
    children: [
      { label: 'By Subject', to: '/us/subjects', desc: 'Browse all academic subjects.' },
      { label: 'By Grade Level', to: '/us/curriculum', desc: 'Elementary, Middle, and High School.' },
      { label: 'Test Prep', to: '/us/curriculum', desc: 'SAT, ACT, AP, and college prep.' },
    ],
  },
  {
    label: 'Subjects',
    to: '/us/subjects',
  },
  {
    label: 'Grade Levels',
    to: '/us/curriculum',
  },
  {
    label: 'How It Works',
    to: '/us/how-it-works',
  },
  {
    label: 'Locations',
    to: '/us/locations',
  },
  {
    label: 'About',
    to: '/us/about',
  },
  {
    label: 'Blog',
    to: '/us/blog',
  },
  {
    label: 'Contact',
    to: '/us/contact',
  },
]

/* =========================================================
   SAMPLE TESTIMONIALS (Demo — per spec §5)
   ========================================================= */

export const usTestimonials = [
  {
    id: 'us-t1',
    name: 'Demo Student — Sarah M.',
    role: 'Parent',
    school: 'Demo High School',
    location: 'Demo — California',
    rating: 5,
    quote:
      'Demo testimonial placeholder. Srijee Tutor connected us with a verified online tutor who helped our daughter raise her SAT score. [Replace with a verified Srijee Tutor USA testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'us-t2',
    name: 'Demo Student — James W.',
    role: 'Student',
    school: 'Demo High School',
    location: 'Demo — New York',
    rating: 5,
    quote:
      'Demo testimonial placeholder. My AP Calculus tutor broke down complex topics into clear steps. [Replace with a verified Srijee Tutor USA testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'us-t3',
    name: 'Demo Student — Maria L.',
    role: 'Parent',
    school: 'Demo Middle School',
    location: 'Demo — Texas',
    rating: 5,
    quote:
      'Demo testimonial placeholder. The demo-first approach gave us confidence before committing. [Replace with a verified Srijee Tutor USA testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
]

/* =========================================================
   HOW IT WORKS — US-specific step flow
   ========================================================= */

export const usHowItWorks = [
  {
    n: 1,
    title: 'Share Your Needs',
    desc: 'Tell us your grade level, subjects, goals, and schedule. Takes 3 minutes.',
    icon: '📝',
  },
  {
    n: 2,
    title: 'Meet Your Counsellor',
    desc: 'A dedicated US-based counsellor reviews your requirements and matches tutors.',
    icon: '🤝',
  },
  {
    n: 3,
    title: 'Get Matched Tutors',
    desc: 'Receive 2-3 verified tutor profiles with match scores and credentials.',
    icon: '🎯',
  },
  {
    n: 4,
    title: 'Take a Free Demo',
    desc: 'Experience the teaching first with a free demo class before you commit.',
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
   WHY CHOOSE US — US-specific benefits
   ========================================================= */

export const usWhyChooseUs = [
  { title: 'Verified Expert Tutors', desc: 'Every tutor is background-checked and demo-evaluated before joining.', icon: '✓' },
  { title: 'Common Core Aligned', desc: 'Tutors understand US state standards and Common Core requirements.', icon: '📐' },
  { title: 'Test Prep Specialists', desc: 'SAT, ACT, AP, and college-application experts ready to help.', icon: '🎓' },
  { title: 'Flexible Scheduling', desc: 'Sessions fit around your time zone, school calendar, and extracurriculars.', icon: '🕒' },
  { title: 'Personalised Counsellor', desc: 'A dedicated US counsellor supports you from first contact to first lesson.', icon: '🤝' },
  { title: 'Demo-First Selection', desc: 'Always try a free demo class before you choose your tutor.', icon: '🎬' },
]

/* =========================================================
   FAQ — US-specific
   ========================================================= */

export const usFaqs = [
  {
    q: 'Do you offer in-home tutoring in the US?',
    a: 'In select metropolitan areas we offer in-home tutoring. Across all 50 states we offer online one-to-one and group tuition, which most US families choose for flexibility. Contact us to confirm availability in your area.',
  },
  {
    q: 'Are your tutors familiar with US curricula?',
    a: 'Yes. Our verified tutors are trained on Common Core, state-specific standards (TEKS, SOL, B.E.S.T. and others), AP frameworks, and SAT/ACT preparation.',
  },
  {
    q: 'How do you verify tutors?',
    a: 'Every tutor completes a 5-step profile verification, including credentials review, demo-class evaluation, and background checks. Only verified tutors appear in your matches.',
  },
  {
    q: 'Can I take a free demo class before committing?',
    a: 'Absolutely. Every matched tutor offers a free demo class so you can experience their teaching style before you commit to ongoing sessions.',
  },
  {
    q: 'What are the typical session rates in USD?',
    a: 'Pricing varies by subject, grade level, and tutor experience. Our counsellor will share transparent USD pricing based on your specific needs during your free consultation.',
  },
  {
    q: 'Do you support students outside the US?',
    a: 'Srijee Tutor serves 5 regions globally. If you are looking for a non-US curriculum (CBSE, GCSE, A-Level, IB, UAE/MOE), visit our global gateway to switch regions.',
  },
]
