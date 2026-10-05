/**
 * Static config for the student enrollment wizard.
 *
 * The enrollment flow is intentionally progressive:
 * Learning Mode → Board → Class → Subject → Requirement → Student Details.
 *
 * Subject availability is kept here so it can later be replaced by CMS/API data
 * without changing the enrollment UI.
 */

export const BOARD_OPTIONS = [
  'CBSE',
  'ICSE',
  'ISC',
  'IGCSE',
  'A-Level',
  'IB',
  'WBCHSE',
  'WBBSE',
  'State Board',
]

export const CLASS_OPTIONS = [
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI',
  'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII',
]

export const LEARNING_MODE_OPTIONS = [
  { value: 'Online', label: 'Online', icon: '💻', desc: 'Live classes from anywhere' },
  { value: 'Home Tuition', label: 'Home Tuition', icon: '🏠', desc: 'Tutor visits your home' },
  { value: 'Classroom', label: 'Classroom', icon: '🏫', desc: 'In-person classroom learning' },
  { value: 'Any', label: 'Any', icon: '✨', desc: 'Help me choose the best mode' },
]

export const PREFERRED_TIME_OPTIONS = [
  'Morning',
  'Afternoon',
  'Evening',
  'Weekend',
  'Flexible',
]

/*
 * These subjects come only from src/data/subjects.js.
 * The board/class matrix is intentionally easy to edit as curriculum coverage
 * becomes more specific in the future.
 */
const PRIMARY_SUBJECTS = [
  'English',
  'Bengali',
  'Hindi',
  'Mathematics',
  'Computer Science',
]

const MIDDLE_SUBJECTS = [
  'English',
  'Bengali',
  'Hindi',
  'Mathematics',
  'Computer Science',
  'History',
  'Geography',
]

const SECONDARY_SUBJECTS = [
  'English',
  'Bengali',
  'Hindi',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'History',
  'Geography',
  'Economics',
]

const SENIOR_SCIENCE_SUBJECTS = [
  'English',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'Economics',
  'Statistics',
]

const SENIOR_COMMERCE_SUBJECTS = [
  'English',
  'Mathematics',
  'Accountancy',
  'Business Studies',
  'Economics',
  'Statistics',
  'Computer Science',
]

const SENIOR_HUMANITIES_SUBJECTS = [
  'English',
  'History',
  'Geography',
  'Sociology',
  'Psychology',
  'Economics',
]

const SENIOR_WB_SUBJECTS = [
  'English',
  'Bengali',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'History',
  'Geography',
  'Economics',
  'Accountancy',
  'Business Studies',
  'Statistics',
  'Sociology',
]

const BOARD_CLASS_SUBJECTS = {
  CBSE: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
  ICSE: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
  ISC: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
  IGCSE: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
  'A-Level': {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
  IB: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
      'Business Studies',
    ],
  },
  WBCHSE: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: SENIOR_WB_SUBJECTS,
  },
  WBBSE: {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: SECONDARY_SUBJECTS,
  },
  'State Board': {
    primary: PRIMARY_SUBJECTS,
    middle: MIDDLE_SUBJECTS,
    secondary: SECONDARY_SUBJECTS,
    senior: [
      ...SENIOR_SCIENCE_SUBJECTS,
      ...SENIOR_COMMERCE_SUBJECTS,
      ...SENIOR_HUMANITIES_SUBJECTS,
    ],
  },
}

function classBand(classLevel) {
  if (['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'].includes(classLevel)) {
    return 'primary'
  }
  if (['Class VI', 'Class VII', 'Class VIII'].includes(classLevel)) {
    return 'middle'
  }
  if (['Class IX', 'Class X'].includes(classLevel)) {
    return 'secondary'
  }
  return 'senior'
}

export function getSubjectsForBoardAndClass(board, classLevel) {
  if (!board || !classLevel) return []

  const boardConfig = BOARD_CLASS_SUBJECTS[board] || BOARD_CLASS_SUBJECTS['State Board']
  const band = classBand(classLevel)

  return [...new Set(boardConfig[band] || [])]
}

/** Initial state for the wizard. */
export const INITIAL_ENROLLMENT_STATE = {
  learningMode: '',
  board: '',
  classLevel: '',
  subject: '',
  message: '',
  studentName: '',
  parentName: '',
  phone: '',
  email: '',
  location: '',
  preferredTime: '',
  consent: false,

  // Kept for backward compatibility with any existing lead consumers.
  programmes: [],
  subjects: [],
  otherSubject: '',
}

export const STEPS = [
  { n: 1, key: 'requirement', label: 'Requirement' },
  { n: 2, key: 'message', label: 'Requirement Details' },
  { n: 3, key: 'details', label: 'Your Details' },
]
