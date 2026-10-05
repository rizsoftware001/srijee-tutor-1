/**
 * Canada region data — education system, locations, subjects, curriculum.
 *
 * All content is regionally specific to Canada.
 * Business identity (founder, contact info, awards, services) is shared with India.
 *
 * Per spec §5 "DO NOT INVENT REAL CLAIMS":
 *   - Verified Srijee Tutor business info (founder, contact, awards, stats)
 *     is reused across all regions.
 *   - All unverified regional info (sample locations, tutor availability,
 *     sample testimonials) is clearly marked as Demo content.
 *
 * Per spec §8: Clean, friendly, modern, welcoming, family-oriented, professional.
 *   Provincial curriculum (Ontario, BC, Alberta, Quebec, Manitoba), French
 *   immersion as a Canada-specific featured subject, university prep, IB.
 */

/* =========================================================
   GRADE LEVELS (Canadian K-12 system)
   Grouped into Elementary (K-5), Middle School (6-8), High School (9-12).
   ========================================================= */

export const caGradeLevels = [
  // Elementary School (K-5)
  { slug: 'kindergarten', label: 'Kindergarten', group: 'Elementary School', desc: 'Foundational literacy, numeracy, and play-based learning.' },
  { slug: 'grade-1', label: 'Grade 1', group: 'Elementary School', desc: 'Early reading, number sense, and social skills.' },
  { slug: 'grade-2', label: 'Grade 2', group: 'Elementary School', desc: 'Reading fluency, two-digit math, science units.' },
  { slug: 'grade-3', label: 'Grade 3', group: 'Elementary School', desc: 'Multiplication, paragraph writing, inquiry science.' },
  { slug: 'grade-4', label: 'Grade 4', group: 'Elementary School', desc: 'Fractions, research skills, habitats & regions.' },
  { slug: 'grade-5', label: 'Grade 5', group: 'Elementary School', desc: 'Decimals, structured essays, life science.' },
  // Middle School (6-8)
  { slug: 'grade-6', label: 'Grade 6', group: 'Middle School', desc: 'Pre-algebra, earth science, Canadian history.' },
  { slug: 'grade-7', label: 'Grade 7', group: 'Middle School', desc: 'Algebra readiness, life science, geography.' },
  { slug: 'grade-8', label: 'Grade 8', group: 'Middle School', desc: 'Algebra I, physical science, civics & society.' },
  // High School (9-12)
  { slug: 'grade-9', label: 'Grade 9', group: 'High School', desc: 'Transition to high school, foundational HS courses.' },
  { slug: 'grade-10', label: 'Grade 10', group: 'High School', desc: 'Geometry, biology, literacy & numeracy assessments.' },
  { slug: 'grade-11', label: 'Grade 11', group: 'High School', desc: 'Functions, chemistry, university prep groundwork.' },
  { slug: 'grade-12', label: 'Grade 12', group: 'High School', desc: 'Calculus, advanced functions, university applications.' },
]

export const caGradeGroups = ['Elementary School', 'Middle School', 'High School']

/* =========================================================
   CURRICULUM STANDARDS — Provincial curriculum + IB + University Prep
   ========================================================= */

export const caCurriculum = [
  {
    slug: 'ontario',
    label: 'Ontario Curriculum',
    icon: '🍁',
    desc: 'The Ontario Ministry of Education K-12 curriculum — used in English- and French-language public and Catholic schools across the province.',
    subjects: ['Language (English/French)', 'Mathematics', 'Science & Technology', 'Social Studies', 'The Arts'],
    states: 'Ontario',
  },
  {
    slug: 'british-columbia',
    label: 'British Columbia Curriculum',
    icon: '🏔️',
    desc: 'B.C.\'s redesigned K-12 curriculum with core competencies, big ideas, and curricular competencies across all learning areas.',
    subjects: ['Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Physical & Health Education'],
    states: 'British Columbia',
  },
  {
    slug: 'alberta',
    label: 'Alberta Curriculum',
    icon: '🌾',
    desc: 'Alberta Education\'s programs of study — known for rigorous math and science standards and clear provincial diploma exams.',
    subjects: ['English Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Career & Technology'],
    states: 'Alberta',
  },
  {
    slug: 'quebec',
    label: 'Quebec Education Program (QEP)',
    icon: '📜',
    desc: 'Quebec\'s distinctive system: primary cycles, secondary cycles, and the Quebec Education Program — including strong French-language instruction.',
    subjects: ['French (langue maternelle)', 'English (ELA)', 'Mathematics', 'Science & Technology', 'Geography/History'],
    states: 'Quebec',
  },
  {
    slug: 'manitoba',
    label: 'Manitoba Curriculum',
    icon: '🌻',
    desc: 'Manitoba Education\'s K-12 frameworks with provincial standards and assessments in literacy, numeracy, and core subject areas.',
    subjects: ['English Language Arts', 'Mathematics', 'Science', 'Social Studies', 'French Immersion'],
    states: 'Manitoba',
  },
  {
    slug: 'ib',
    label: 'IB Diploma Programme',
    icon: '🎓',
    desc: 'The International Baccalaureate Diploma — offered at select Canadian high schools, recognized for university admission worldwide.',
    subjects: ['IB Math AA/AI', 'IB Physics', 'IB Chemistry', 'IB Biology', 'IB English A', 'Theory of Knowledge', 'Extended Essay'],
    states: 'Nationwide (select schools)',
  },
]

/* =========================================================
   SUBJECTS (Canadian academic vocabulary)
   French is featured prominently — Canada-specific selling point.
   ========================================================= */

export const caSubjects = [
  { slug: 'mathematics', label: 'Mathematics', icon: '∑', popular: true, group: 'STEM' },
  { slug: 'science', label: 'Science', icon: '🔬', popular: true, group: 'STEM' },
  { slug: 'physics', label: 'Physics', icon: '⚛', popular: true, group: 'STEM' },
  { slug: 'chemistry', label: 'Chemistry', icon: '🧪', popular: true, group: 'STEM' },
  { slug: 'biology', label: 'Biology', icon: '🧬', popular: true, group: 'STEM' },
  { slug: 'computer-science', label: 'Computer Science', icon: '💻', popular: true, group: 'STEM' },
  { slug: 'english', label: 'English', icon: '📖', popular: true, group: 'Humanities' },
  { slug: 'history', label: 'History', icon: '🏛️', popular: false, group: 'Humanities' },
  { slug: 'geography', label: 'Geography', icon: '🗺️', popular: false, group: 'Humanities' },
  { slug: 'writing', label: 'Writing & Composition', icon: '✍️', popular: false, group: 'Humanities' },
  { slug: 'french', label: 'French', icon: '🇫🇷', popular: true, group: 'Languages' },
  { slug: 'french-immersion', label: 'French Immersion Support', icon: '🇨🇦', popular: true, group: 'Languages' },
  { slug: 'economics', label: 'Economics', icon: '📈', popular: false, group: 'Social Sciences' },
  { slug: 'business', label: 'Business Studies', icon: '💼', popular: false, group: 'Social Sciences' },
  { slug: 'civics', label: 'Civics & Citizenship', icon: '⚖️', popular: false, group: 'Social Sciences' },
]

export const caSubjectGroups = ['STEM', 'Humanities', 'Languages', 'Social Sciences']

/* =========================================================
   LOCATIONS (Demo — per spec §6)
   Canada-specific: Toronto, Vancouver, Montreal, Calgary, Ottawa,
   Edmonton, Other Canadian Areas.
   ========================================================= */

export const caLocations = [
  { slug: 'toronto', label: 'Toronto', region: 'Ontario', primary: true },
  { slug: 'vancouver', label: 'Vancouver', region: 'British Columbia', primary: true },
  { slug: 'montreal', label: 'Montreal', region: 'Quebec', primary: true },
  { slug: 'calgary', label: 'Calgary', region: 'Alberta', primary: false },
  { slug: 'ottawa', label: 'Ottawa', region: 'Ontario', primary: false },
  { slug: 'edmonton', label: 'Edmonton', region: 'Alberta', primary: false },
  { slug: 'other-areas', label: 'Other Canadian Areas', region: 'Nationwide', primary: false },
]

/* =========================================================
   TEST PREP / ACADEMIC PREP PROGRAMS (Canada-specific)
   ========================================================= */

export const caTestPrep = [
  {
    slug: 'university-prep',
    name: 'University Preparation',
    icon: '🎓',
    duration: 'Year-round (Grades 11–12)',
    desc: 'Targeted support for Canadian and international university admissions — applications, supplementary essays, and top-6 average planning.',
    outcomes: ['Strong top-6 average', 'Polished applications', 'Interview readiness'],
    color: 'from-red-600 to-red-800',
  },
  {
    slug: 'provincial-exams',
    name: 'Provincial Exams Prep',
    icon: '📝',
    duration: '8–12 weeks',
    desc: 'Coaching for provincial diploma exams (Alberta) and literacy/numeracy assessments (Ontario, B.C.).',
    outcomes: ['Exam strategy', 'Practice tests', 'Confidence under pressure'],
    color: 'from-blue-700 to-blue-900',
  },
  {
    slug: 'french-immersion',
    name: 'French Immersion Support',
    icon: '🇫🇷',
    duration: 'Year-round',
    desc: 'Specialized tutoring for students in French immersion and francophone programs — reading, writing, and conversation support in French.',
    outcomes: ['Stronger French fluency', 'Confidence in immersion class', 'Support across subjects in French'],
    color: 'from-red-500 to-blue-800',
  },
  {
    slug: 'ib-prep',
    name: 'IB Prep',
    icon: '🌍',
    duration: 'Semester-aligned',
    desc: 'Coaching for IB Diploma candidates — Math AA/AI, sciences, Theory of Knowledge, and the Extended Essay.',
    outcomes: ['Strong IB scores', 'TOK & EE guidance', 'University recognition'],
    color: 'from-slate-700 to-slate-900',
  },
]

/* =========================================================
   NAVIGATION (Canada-specific — per spec §10)
   Home · Find a Tutor · Subjects · Grade Levels · Curriculum · Locations · About · Contact
   ========================================================= */

export const caNav = [
  { label: 'Home', to: '/ca' },
  {
    label: 'Find a Tutor',
    children: [
      { label: 'By Subject', to: '/ca/subjects', desc: 'Browse all academic subjects, including French immersion.' },
      { label: 'By Grade Level', to: '/ca/curriculum', desc: 'Elementary (K-5), Middle School (6-8), High School (9-12).' },
      { label: 'Test & University Prep', to: '/ca/curriculum', desc: 'Provincial exams, IB, university prep.' },
    ],
  },
  {
    label: 'Subjects',
    to: '/ca/subjects',
  },
  {
    label: 'Grade Levels',
    to: '/ca/curriculum',
  },
  {
    label: 'Curriculum',
    to: '/ca/curriculum',
  },
  {
    label: 'Locations',
    to: '/ca/locations',
  },
  {
    label: 'How It Works',
    to: '/ca/how-it-works',
  },
  {
    label: 'About',
    to: '/ca/about',
  },
  {
    label: 'Blog',
    to: '/ca/blog',
  },
  {
    label: 'Contact',
    to: '/ca/contact',
  },
]

/* =========================================================
   SAMPLE TESTIMONIALS (Demo — per spec §5)
   ========================================================= */

export const caTestimonials = [
  {
    id: 'ca-t1',
    name: 'Demo Family — The Tremblay Family',
    role: 'Parent',
    school: 'Demo Elementary (French Immersion)',
    location: 'Demo — Toronto, ON',
    rating: 5,
    quote:
      'Demo testimonial placeholder. Our twins needed support with French immersion math, and Srijee matched us with a verified online tutor who made a real difference. [Replace with a verified Srijee Tutor Canada testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'ca-t2',
    name: 'Demo Student — Aiden K.',
    role: 'Student',
    school: 'Demo High School',
    location: 'Demo — Vancouver, BC',
    rating: 5,
    quote:
      'Demo testimonial placeholder. My tutor helped me lift my Pre-Calculus 12 grade and feel ready for university applications. [Replace with a verified Srijee Tutor Canada testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
  {
    id: 'ca-t3',
    name: 'Demo Family — The Patel Family',
    role: 'Parent',
    school: 'Demo Middle School',
    location: 'Demo — Calgary, AB',
    rating: 5,
    quote:
      'Demo testimonial placeholder. The free demo class first approach made all the difference — we knew the tutor was the right fit before committing. [Replace with a verified Srijee Tutor Canada testimonial before launch.]',
    verified: false,
    isDemo: true,
  },
]

/* =========================================================
   HOW IT WORKS — Canada-specific 5-step flow
   Per spec §8: "Consultant" (Canadian English favours this over "counsellor").
   ========================================================= */

export const caHowItWorks = [
  {
    n: 1,
    title: 'Share Your Needs',
    desc: 'Tell us your child\'s grade level, subjects, goals, and schedule. Takes about 3 minutes.',
    icon: '📝',
  },
  {
    n: 2,
    title: 'Meet Your Consultant',
    desc: 'A dedicated consultant reviews your requirements and matches tutors familiar with your provincial curriculum.',
    icon: '🤝',
  },
  {
    n: 3,
    title: 'Get Matched Tutors',
    desc: 'Receive 2-3 verified tutor profiles with match scores, credentials, and availability.',
    icon: '🎯',
  },
  {
    n: 4,
    title: 'Take a Free Demo',
    desc: 'Experience the teaching first with a free demo class before you commit to anything.',
    icon: '🎬',
  },
  {
    n: 5,
    title: 'Start Learning',
    desc: 'Choose your tutor and begin regular sessions — online, with in-home available in select areas.',
    icon: '🚀',
  },
]

/* =========================================================
   WHY CHOOSE US — Canada-specific benefits
   French immersion is featured as a Canada-specific selling point.
   ========================================================= */

export const caWhyChooseUs = [
  { title: 'Verified Expert Tutors', desc: 'Every tutor is background-checked and demo-evaluated before joining the Srijee pool.', icon: '✓' },
  { title: 'Provincial Curriculum Aligned', desc: 'Tutors familiar with Ontario, BC, Alberta, Quebec, and Manitoba curricula.', icon: '🍁' },
  { title: 'French Immersion Specialists', desc: 'A Canada-specific strength — verified tutors who teach in and through French.', icon: '🇫🇷' },
  { title: 'University Prep Experts', desc: 'Top-6 average planning, applications, and supplementary essay coaching.', icon: '🎓' },
  { title: 'Flexible Scheduling', desc: 'Sessions fit around your time zone, family schedule, and provincial holidays.', icon: '🕒' },
  { title: 'Demo-First Selection', desc: 'Always try a free demo class before you commit to a tutor — no exceptions.', icon: '🎬' },
]

/* =========================================================
   FAQ — Canada-specific
   ========================================================= */

export const caFaqs = [
  {
    q: 'Do you offer in-person tutoring in Canada?',
    a: 'In select metropolitan areas we may be able to arrange in-home tutoring. Across all provinces we offer online one-to-one and group tuition, which most Canadian families choose for flexibility. Contact us to confirm availability in your area.',
  },
  {
    q: 'Are your tutors familiar with provincial curricula?',
    a: 'Yes. Our verified tutors are trained on the Ontario Curriculum, British Columbia Curriculum, Alberta Curriculum, Quebec Education Program, Manitoba Curriculum, and IB Diploma frameworks. Tell us your province and we will match accordingly.',
  },
  {
    q: 'Can you support French immersion and francophone students?',
    a: 'Absolutely. French immersion is a Canada-specific specialty. We have verified tutors who teach mathematics, science, and humanities in French — supporting both French immersion and francophone program students.',
  },
  {
    q: 'How do you verify tutors?',
    a: 'Every tutor completes a 5-step profile verification — credentials review, demo-class evaluation, and background checks. Only verified tutors appear in your matches.',
  },
  {
    q: 'Can I take a free demo class before committing?',
    a: 'Yes. Every matched tutor offers a free demo class so you can experience their teaching style before you commit to ongoing sessions.',
  },
  {
    q: 'What are the typical session rates in CAD?',
    a: 'Pricing varies by subject, grade level, and tutor experience. Our consultant will share transparent CAD pricing based on your specific needs during your free consultation.',
  },
  {
    q: 'Do you support students outside Canada?',
    a: 'Srijee Tutor serves 5 regions globally. If you are looking for a non-Canadian curriculum (CBSE, Common Core, GCSE, A-Level, IB, UAE/MOE), visit our global gateway to switch regions.',
  },
]
