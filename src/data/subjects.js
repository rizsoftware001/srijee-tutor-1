/**
 * REAL DATA — sourced from srijeetutor.com signup form (verified Sep 2026).
 * Srijee offers these subjects across CBSE, ICSE, ISC, IGCSE, A-Level boards.
 */

export const subjects = [
  { slug: 'physics',          label: 'Physics',          icon: '⚛', popular: true,  group: 'Science' },
  { slug: 'chemistry',        label: 'Chemistry',        icon: '⚗', popular: true,  group: 'Science' },
  { slug: 'mathematics',      label: 'Mathematics',      icon: '∑', popular: true,  group: 'Science' },
  { slug: 'biology',          label: 'Biology',          icon: '🧬', popular: true,  group: 'Science' },
  { slug: 'computer-science', label: 'Computer Science', icon: '💻', popular: true,  group: 'Science' },
  { slug: 'english',          label: 'English',          icon: 'A', popular: true,  group: 'Languages' },
  { slug: 'bengali',          label: 'Bengali',          icon: 'ব', popular: false, group: 'Languages' },
  { slug: 'hindi',            label: 'Hindi',            icon: 'अ', popular: false, group: 'Languages' },
  { slug: 'spanish',          label: 'Spanish',          icon: 'ES',popular: false, group: 'Foreign Languages' },
  { slug: 'french',           label: 'French',           icon: 'FR',popular: false, group: 'Foreign Languages' },
  { slug: 'spoken-english',   label: 'Spoken English',   icon: '🗣', popular: true,  group: 'Languages' },
  { slug: 'history',          label: 'History',          icon: '📜', popular: false, group: 'Humanities' },
  { slug: 'geography',        label: 'Geography',        icon: '🗺', popular: false, group: 'Humanities' },
  { slug: 'sociology',        label: 'Sociology',        icon: '👥', popular: false, group: 'Humanities' },
  { slug: 'psychology',       label: 'Psychology',       icon: '🧠', popular: false, group: 'Humanities' },
  { slug: 'economics',        label: 'Economics',        icon: '₹', popular: false, group: 'Commerce' },
  { slug: 'accountancy',      label: 'Accountancy',      icon: '📊', popular: false, group: 'Commerce' },
  { slug: 'business-studies', label: 'Business Studies', icon: '📈', popular: false, group: 'Commerce' },
  { slug: 'commerce',         label: 'Commerce',         icon: '💼', popular: false, group: 'Commerce' },
  { slug: 'statistics',       label: 'Statistics',       icon: 'Σ', popular: false, group: 'Commerce' },
]

export const subjectGroups = ['Science', 'Languages', 'Foreign Languages', 'Humanities', 'Commerce']
