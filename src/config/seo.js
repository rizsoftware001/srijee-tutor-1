// import { SITE } from './site.js'

// /**
//  * SEO metadata registry — REAL titles/descriptions for Srijee Tutor.
//  * Sourced from srijeetutor.com page titles & meta descriptions.
//  */
// export const defaultSeo = {
//   title: `${SITE.name} — ${SITE.tagline}`,
//   description: SITE.description,
//   canonical: SITE.url,
//   ogType: 'website',
//   ogImage: `${SITE.url}/og-default.jpg`,
//   robots: 'index, follow',
// }

// export const seoByRoute = {
//   '/': {
//     title: 'Online Programs for CBSE ICSE in Kolkata | Srijee Tutor',
//     description:
//       'Be Future Ready with Srijee Tutor — premium online & home tuition for CBSE, ICSE, ISC, IGCSE & A-Level in Kolkata. JEE/NEET, foreign languages, coding, chess & more. 7,820+ students trained since 2013.',
//   },
//   '/about': {
//     title: `About ${SITE.name} — Founded 2013 by Srirupa Banerjee`,
//     description:
//       `Srijee Tutor was established in 2013 by Ms. Srirupa Banerjee, Gold Medalist from University of Calcutta. Personalised attention, comprehensive study materials, and a nurturing environment for every student.`,
//   },
//   '/online-tuition': {
//     title: 'Online Tuition — Live Classes for CBSE, ICSE in Kolkata | Srijee',
//     description:
//       'Live online tuition classes for CBSE, ICSE, ISC, IGCSE & A-Level students. Experienced teachers, personalised attention, regular assessments, and comprehensive study materials.',
//   },
//   '/home-tuition': {
//     title: 'Home Tuition — Verified Tutors in Kolkata | Srijee Tutor',
//     description:
//       'Get a verified tutor to visit your home for personalised in-person tuition across Kolkata. Safe, reliable, and tailored to your child\'s learning needs.',
//   },
//   '/one-to-one-tuition': {
//     title: 'One-TO-One Tuition — Personal Attention | Srijee Tutor',
//     description:
//       'Srijee\'s signature One-TO-One Tuition — individual attention and personalised academic support to help students understand difficult topics and strengthen fundamentals.',
//   },
//   '/courses': {
//     title: 'Courses & Programmes — 17+ Offerings | Srijee Tutor',
//     description:
//       'Explore Srijee\'s programmes: school tuition, JEE/NEET, NTSE/Olympiad/KVPY, CA Foundation, foreign languages, spoken English, computer courses, coding for kids, chess, yoga & more.',
//   },
//   '/classes': {
//     title: 'Tuition by Class — Class I to Class XII | Srijee Tutor',
//     description:
//       'Find tutors for your specific class — from Class I to Class XII across CBSE, ICSE, ISC, IGCSE, A-Level & State Boards.',
//   },
//   '/boards': {
//     title: 'Tuition by Board — CBSE, ICSE, ISC, IGCSE, A-Level | Srijee Tutor',
//     description:
//       'Board-specific tuition with tutors who understand your syllabus, exam pattern, and marking scheme. CBSE, ICSE, ISC, IGCSE, A-Level, IB & State Boards.',
//   },
//   '/subjects': {
//     title: 'Tuition by Subject — Physics, Maths, English & More | Srijee Tutor',
//     description:
//       'Subject-wise tutors for Physics, Chemistry, Mathematics, Biology, English, Hindi, Bengali, Spanish, French, History, Geography, Economics, Accountancy & more.',
//   },
//   '/blog': {
//     title: 'Education Blog — Study Tips, Parenting & Career Guidance | Srijee',
//     description:
//       'Read the Srijee Tutor blog for study tips, parenting advice, career guidance, and education news for students and parents.',
//   },
//   '/gallery': {
//     title: 'Gallery — Srijee Tutor in Action',
//     description: 'Photos and shorts from Srijee Tutor classes, events, and student achievements.',
//   },
//   '/contact': {
//     title: `Contact ${SITE.name} — ${SITE.phoneDisplay}`,
//     description:
//       `Get in touch with ${SITE.name} for free counselling, tutor matching, or any queries. Call ${SITE.phoneDisplay} or email ${SITE.email}.`,
//   },
//   '/become-a-tutor': {
//     title: 'Become a Tutor — Apply As A Tutor Now | Srijee Tutor',
//     description:
//       'Apply as a tutor at Srijee Tutor. Help students in need, earn fair fees, and join a curated network of verified educators. Flexible timings, dedicated support.',
//   },
// }
import { SITE } from './site.js'

/**
 * SEO metadata registry — REAL titles/descriptions for Srijee Tutor.
 * Sourced from srijeetutor.com page titles & meta descriptions.
 */
export const defaultSeo = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  canonical: SITE.url,
  ogType: 'website',
  ogImage: `${SITE.url}/og-default.jpg`,
  robots: 'index, follow',
}

export const seoByRoute = {
  '/': {
    title: 'Online Programs for CBSE ICSE in Kolkata | Srijee Tutor',
    description:
      'Be Future Ready with Srijee Tutor — premium online & home tuition for CBSE, ICSE, ISC, IGCSE & A-Level in Kolkata. JEE/NEET, foreign languages, coding, chess & more. 7,820+ students trained since 2013.',
  },
  '/about': {
    title: `About ${SITE.name} — Founded 2013 by Srirupa Banerjee`,
    description:
      `Srijee Tutor was established in 2013 by Ms. Srirupa Banerjee, Gold Medalist from University of Calcutta. Personalised attention, comprehensive study materials, and a nurturing environment for every student.`,
  },
  '/online-tuition': {
    title: 'Online Tuition — Live Classes for CBSE, ICSE in Kolkata | Srijee',
    description:
      'Live online tuition classes for CBSE, ICSE, ISC, IGCSE & A-Level students. Experienced teachers, personalised attention, regular assessments, and comprehensive study materials.',
  },
  '/home-tuition': {
    title: 'Home Tuition — Verified Tutors in Kolkata | Srijee Tutor',
    description:
      'Get a verified tutor to visit your home for personalised in-person tuition across Kolkata. Safe, reliable, and tailored to your child\'s learning needs.',
  },
  '/one-to-one-tuition': {
    title: 'One-TO-One Tuition — Personal Attention | Srijee Tutor',
    description:
      'Srijee\'s signature One-TO-One Tuition — individual attention and personalised academic support to help students understand difficult topics and strengthen fundamentals.',
  },
  '/courses': {
    title: 'Courses & Programmes — 17+ Offerings | Srijee Tutor',
    description:
      'Explore Srijee\'s programmes: school tuition, JEE/NEET, NTSE/Olympiad/KVPY, CA Foundation, foreign languages, spoken English, computer courses, coding for kids, chess, yoga & more.',
  },
  '/classes': {
    title: 'Tuition by Class — Class I to Class XII | Srijee Tutor',
    description:
      'Find tutors for your specific class — from Class I to Class XII across CBSE, ICSE, ISC, IGCSE, A-Level & State Boards.',
  },
  '/boards': {
    title: 'Tuition by Board — CBSE, ICSE, ISC, IGCSE, A-Level | Srijee Tutor',
    description:
      'Board-specific tuition with tutors who understand your syllabus, exam pattern, and marking scheme. CBSE, ICSE, ISC, IGCSE, A-Level, IB & State Boards.',
  },
  '/subjects': {
    title: 'Tuition by Subject — Physics, Maths, English & More | Srijee Tutor',
    description:
      'Subject-wise tutors for Physics, Chemistry, Mathematics, Biology, English, Hindi, Bengali, Spanish, French, History, Geography, Economics, Accountancy & more.',
  },
  '/blog': {
    title: 'Education Blog — Study Tips, Parenting & Career Guidance | Srijee',
    description:
      'Read the Srijee Tutor blog for study tips, parenting advice, career guidance, and education news for students and parents.',
  },
  '/gallery': {
    title: 'Gallery — Srijee Tutor in Action',
    description: 'Photos and shorts from Srijee Tutor classes, events, and student achievements.',
  },
  '/contact': {
    title: `Contact ${SITE.name} — ${SITE.phoneDisplay}`,
    description:
      `Get in touch with ${SITE.name} for free counselling, tutor matching, or any queries. Call ${SITE.phoneDisplay} or email ${SITE.email}.`,
  },
  '/become-a-tutor': {
    title: 'Become a Tutor — Apply As A Tutor Now | Srijee Tutor',
    description:
      'Apply as a tutor at Srijee Tutor. Help students in need, earn fair fees, and join a curated network of verified educators. Flexible timings, dedicated support.',
  },
  '/masterclass/home-tuition': {
    title: 'MasterClass for Home Tuition — First Time in India | Srijee Tutor',
    description:
      'A premium MasterClass programme designed exclusively for home-tuition students. Concept mastery, doubt clearing, and exam strategy with Srijee\'s most senior educators. Apply now.',
  },
  '/home-tuition/teacher-selection': {
    title: 'Teacher Selection After Offline Demo Class | Srijee Tutor',
    description:
      'Experience the class before you choose. Meet the teacher, attend an offline demo, share feedback, and choose the tutor who feels right for your child. Srijee\'s demo-first selection process.',
  },
  '/free-doubt-clearing': {
    title: 'Free Concept & Doubt Clearing — Every Month | Srijee Tutor',
    description:
      'A free monthly concept and doubt-clearing session, open to all students. Strengthen your concepts, clear your doubts, and learn with confidence. Register your interest for the next session.',
  },
}