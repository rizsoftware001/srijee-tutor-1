/**
 * Central site configuration — REAL Srijee Tutor data.
 * Sourced from https://srijeetutor.com/ (verified Sep 2026).
 */
export const SITE = {
  name: 'Srijee Tutor',
  legalName: 'Srijee Edutech Pvt Ltd',
  shortName: 'Srijee',
  tagline: 'Be Future Ready with Expert Guidance',
  secondaryTagline: 'Find the Right Tutor for Your Child',
  description:
    'Srijee Tutor — established 2013 in Kolkata — offers personalised online & home tuition for CBSE, ICSE, ISC, IGCSE, A-Level boards. JEE/NEET, foreign languages, spoken English, computer courses, coding for kids, chess, yoga & more.',

  url: 'https://srijeetutor.com',
  domain: 'srijeetutor.com',

  // Real contact (verified from website footer + hero)
  phone: '+91-9831114761',
  phoneDisplay: '+91 98311 14761',
  phoneHref: '+919831114761',
  whatsapp: '919831114761',
  email: 'sivaji.banerjee@srijeetutor.com',
  emailSecondary: 'srirupa.banerjee@srijeetutor.com',

  address: {
    line1: 'Room no. 112, Millenium City IT Park, Tower II, 6th Floor',
    line2: 'DN 62, Sector V, Bidhannagar',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700091',
    country: 'India',
    // Google Maps embed (Sector V, Bidhannagar, Salt Lake, Kolkata)
    mapEmbedUrl: 'https://www.google.com/maps?q=Millennium+City+IT+Park+Tower+II+Sector+V+Bidhannagar+Kolkata+700091&output=embed',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Millennium+City+IT+Park+Tower+II+Sector+V+Bidhannagar+Kolkata+700091',
    // Approximate coordinates for the IT Park (used for static map fallback if needed)
    lat: 22.5803,
    lng: 88.4734,
  },

  social: {
    facebook:  'https://www.facebook.com/srijeetutor',
    instagram: 'https://www.instagram.com/srijeetutor',
    youtube:   'https://www.youtube.com/@srijeetutor',
    linkedin:  'https://www.linkedin.com/company/srijee-edutech',
    twitter:   'https://twitter.com/srijeetutor',
  },

  // Real verified business stats (from website hero + about section)
  stats: {
    studentsEnrolled: 7820,
    expertCourses:    50,
    yearsExperience:  13,
    rating:           9.5,
  },

  // Real founder info (from About section)
  founder: {
    name: 'Ms. Srirupa Banerjee',
    title: 'Founder & Managing Director',
    credentials: [
      'Gold Medalist — University of Calcutta',
      'National Scholar Award Winner',
      'Expert in Molecular Biology & Genetics',
    ],
    bio: 'Srijee was established in 2013 by Ms. Srirupa Banerjee, a Gold Medalist from the University of Calcutta and National Scholar Award Winner. With extensive experience in teaching Molecular Biology & Genetics, she envisioned an institute that caters to every educational need at an individual level.',
    mission: 'To provide personalized attention, comprehensive study materials, and a nurturing environment where every student can achieve their full potential.',
    quote: 'We are grateful to the Team who has remained by our side through thick and thin. Thanks to all of you who have always supported Srijee!',
  },

  // Real award (ASSOCHAM Excellence Award — verified)
  awards: [
    {
      title: 'Emerging Edtech Company of the Year',
      issuer: 'The Associated Chamber of Commerce and Industry of India (ASSOCHAM)',
      year: 2023,
      presentedBy: 'Mr. Bernard Lynch (Honourable Consul-General of Australia)',
      description:
        'With immense gratitude to the Almighty, we are delighted to share that Srijee Edutech Pvt Ltd has been honored with the prestigious Excellence Award under the category of "Emerging Edtech Company of the Year" by ASSOCHAM.',
    },
  ],

  establishedYear: 2013,
  copyrightYear: 2026,
  maintainer: 'DPW',

  // Demo mode for the frontend build (toggle off when real backend is wired)
  isDemo: true,
  demoNotice:
    'Demo build — interactions use mock data stored in your browser. No backend is connected yet. All stats, awards, and contact info shown are real and verified from srijeetutor.com.',
}

export const PRIMARY_CTA = 'Find My Tutor'
export const SECONDARY_CTA = 'Free Counselling'
export const TUTOR_CTA = 'Become a Tutor'
export const ENROLL_CTA = 'Enroll as Student'
