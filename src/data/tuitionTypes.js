/** DEMO DATA — replace with CMS-driven content when backend is connected. */

export const tuitionTypes = [
  {
    slug: 'online-tuition',
    label: 'Online Tuition (Group)',
    icon: '💻',
    blurb:
      'Live group classes from anywhere. Interactive online learning with expert tutors and structured lessons.',
    points: [
      'Live group classes',
      'Interactive learning',
      'Learn from anywhere',
    ],
    to: '/online-tuition',
  },

  {
    slug: 'home-tuition',
    label: 'Home Tuition',
    icon: '🏠',
    blurb:
      'Verified tutors visit your home. Personal attention in a familiar environment.',
    points: [
      'In-person at your home',
      'Verified & background-checked tutors',
      'Best for young learners',
    ],
    to: '/home-tuition',
  },

  {
    slug: 'one-to-one-tuition',
    label: 'One-to-One Tuition (Online)',
    icon: '🎯',
    blurb:
      'Dedicated personal attention through live online classes, built around your child’s pace, needs, and goals.',
    points: [
      'Personalised pace & plan',
      'Direct tutor attention',
      'Live one-to-one online classes',
    ],
    to: '/one-to-one-tuition',
  },
]