/**
 * Navigation config — public + dashboard sidebars.
 * Public nav mirrors the structure of SrijeeTutor.
 */

/* =========================================================
   PUBLIC NAVIGATION
   ========================================================= */

export const publicNav = [
  // Logo itself represents Home

  {
    label: 'Tuition',
    children: [
      {
        label: 'Online Tuition (Group)',
        to: '/online-tuition',
        desc: 'Live online group classes — learn anywhere.',
      },
      {
        label: 'Home Tuition',
        to: '/home-tuition',
        desc: 'Verified tutors visit your home.',
      },
      {
        label: 'One-to-One Tuition (Online)',
        to: '/one-to-one-tuition',
        desc: 'Dedicated personal attention through online classes.',
      },
    ],
  },

  {
    label: 'Courses',
    children: [
      {
        label: 'Foreign Language',
        to: '/courses/foreign-language',
        desc: 'French, Spanish, German.',
      },
      {
        label: 'Spoken English',
        to: '/courses/spoken-english',
        desc: 'Build fluency and confidence.',
      },
      {
        label: 'Computer Course',
        to: '/courses/computer-course',
        desc: 'Coding, MS Office, Tally.',
      },
      {
        label: 'Competitive Exams',
        to: '/courses/competitive-exams',
        desc: 'JEE, NEET, NTSE, Olympiad.',
      },
    ],
  },

  {
    label: 'Academics',
    children: [
      {
        label: 'Classes',
        to: '/classes',
        desc: 'Explore classes and academic levels.',
      },
      {
        label: 'Boards',
        to: '/boards',
        desc: 'CBSE, ICSE, ISC and other boards.',
      },
      {
        label: 'Subjects',
        to: '/subjects',
        desc: 'Explore subjects and learning areas.',
      },
    ],
  },

  {
    label: 'About',
    children: [
      {
        label: 'About Us',
        to: '/about',
        desc: 'Our story, mission, and values.',
      },
      {
        label: 'Our Team',
        to: '/our-presents',
        desc: 'Meet the educators and leaders behind Srijee.',
      },
      {
        label: 'Our Centres',
        to: '/our-centers',
        desc: 'Kolkata, Delhi, Mumbai and Abu Dhabi.',
      },
      {
        label: 'Our Presence',
        to: '/our-presence',
        desc: 'Explore SrijeeTutor’s presence and locations.',
      },
      {
        label: 'Media & News',
        to: '/media-news',
        desc: 'Latest media coverage and news.',
      },
      {
        label: 'Investor Note',
        to: '/investor-note',
        desc: 'Information for investors and stakeholders.',
      },
    ],
  },

  {
    label: 'Blog',
    to: '/blog',
  },

  {
    label: 'Gallery',
    to: '/gallery',
  },

  {
    label: 'Contact',
    to: '/contact',
  },
]


/* =========================================================
   FOOTER NAVIGATION
   ========================================================= */

export const footerNav = {
  Tuition: [
    {
      label: 'Online Tuition',
      to: '/online-tuition',
    },
    {
      label: 'Home Tuition',
      to: '/home-tuition',
    },
    {
      label: 'One-to-One Tuition',
      to: '/one-to-one-tuition',
    },
    {
      label: 'All Tuition Types',
      to: '/tuition',
    },
  ],

  Courses: [
    {
      label: 'Foreign Language',
      to: '/courses/foreign-language',
    },
    {
      label: 'Spoken English',
      to: '/courses/spoken-english',
    },
    {
      label: 'Computer Course',
      to: '/courses/computer-course',
    },
    {
      label: 'Competitive Exams',
      to: '/courses/competitive-exams',
    },
    {
      label: 'Coding for Kids',
      to: '/courses/computer-course',
    },
    {
      label: 'Chess',
      to: '/courses',
    },
    {
      label: 'Yoga',
      to: '/courses',
    },
  ],

  Explore: [
    {
      label: 'Classes',
      to: '/classes',
    },
    {
      label: 'Boards',
      to: '/boards',
    },
    {
      label: 'Subjects',
      to: '/subjects',
    },
    {
      label: 'All Courses',
      to: '/courses',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'Gallery',
      to: '/gallery',
    },
  ],

  Company: [
    {
      label: 'About Us',
      to: '/about',
    },
    {
      label: 'Our Team',
      to: '/our-presents',
    },
    {
      label: 'Our Centres',
      to: '/our-centers',
    },
    {
      label: 'Our Presence',
      to: '/our-presence',
    },
    {
      label: 'Media & News',
      to: '/media-news',
    },
    {
      label: 'Investor Note',
      to: '/investor-note',
    },
    {
      label: 'Become a Tutor',
      to: '/become-a-tutor',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'FAQ',
      to: '/#faq',
    },
  ],

  Account: [
    {
      label: 'Student/Parent Login',
      to: '/student/login',
    },
    {
      label: 'Teacher Login',
      to: '/teacher/login',
    },
    {
      label: 'Admin Login',
      to: '/admin/login',
    },
  ],
}


/* =========================================================
   TEACHER DASHBOARD NAVIGATION
   ========================================================= */

export const teacherNav = [
  {
    label: 'Dashboard',
    to: '/teacher/dashboard',
    icon: 'grid',
  },
  {
    label: 'My Profile',
    to: '/teacher/profile',
    icon: 'user',
  },
  {
    label: 'Opportunities',
    to: '/teacher/opportunities',
    icon: 'sparkles',
  },
  {
    label: 'My Students',
    to: '/teacher/students',
    icon: 'users',
  },
  {
    label: 'Schedule',
    to: '/teacher/schedule',
    icon: 'calendar',
  },
  {
    label: 'Earnings',
    to: '/teacher/earnings',
    icon: 'wallet',
  },
  {
    label: 'Settings',
    to: '/teacher/settings',
    icon: 'cog',
  },
]


/* =========================================================
   STUDENT DASHBOARD NAVIGATION
   ========================================================= */

export const studentNav = [
  {
    label: 'Dashboard',
    to: '/student/dashboard',
    icon: 'grid',
  },
  {
    label: 'My Requirement',
    to: '/student/requirement',
    icon: 'clipboard',
  },
  {
    label: 'Suggested Tutors',
    to: '/student/tutors',
    icon: 'users',
  },
  {
    label: 'Messages',
    to: '/student/messages',
    icon: 'chat',
  },
  {
    label: 'Settings',
    to: '/student/settings',
    icon: 'cog',
  },
]


/* =========================================================
   ADMIN DASHBOARD NAVIGATION
   ========================================================= */

export const adminNav = [
  {
    label: 'Dashboard',
    to: '/admin/dashboard',
    icon: 'grid',
  },
  {
    label: 'Leads',
    to: '/admin/leads',
    icon: 'inbox',
  },
  {
    label: 'Requirements',
    to: '/admin/requirements',
    icon: 'clipboard',
  },
  {
    label: 'Teachers',
    to: '/admin/teachers',
    icon: 'users',
  },
  {
    label: 'Tutor Matching',
    to: '/admin/matching',
    icon: 'sparkles',
  },
  {
    label: 'Demos',
    to: '/admin/demos',
    icon: 'play',
  },
  {
    label: 'CMS',
    to: '/admin/cms',
    icon: 'document',
  },
  {
    label: 'Settings',
    to: '/admin/settings',
    icon: 'cog',
  },
]