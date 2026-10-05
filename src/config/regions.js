/**
 * regions.js — Central configuration for all 5 Srijee Tutor regional frontends.
 *
 * Each region has its own visual identity and education system,
 * but shares the underlying Srijee Tutor business identity,
 * services, and trust signals.
 *
 * Region codes follow ISO 3166-1 alpha-2 (with the convention that
 * India = IN, USA = US, UK = GB, Canada = CA, UAE = AE).
 *
 * localStorage key: 'srijeeTutorRegion' (per spec §15).
 */

export const REGIONS = {
  IN: {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    routePrefix: '/',
    currency: 'INR',
    currencySymbol: '₹',
    currencyLocale: 'en-IN',
    phoneCode: '+91',
    blurb: 'CBSE • ICSE • State Boards • Online & Home Tuition',
    buttonLabel: 'Explore India →',
    educationSystem: 'indian',
    // India uses the existing app — no design override needed
    design: {
      primary: '#0ea5e9',
      accent: '#f97316',
      bg: '#ffffff',
      text: '#0f172a',
    },
    // Existing India nav is preserved untouched — these are not used for India
    nav: null,
    isExisting: true,
  },

  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    routePrefix: '/us',
    currency: 'USD',
    currencySymbol: '$',
    currencyLocale: 'en-US',
    phoneCode: '+1',
    blurb: 'Common Core • AP • SAT • Online Tutoring',
    buttonLabel: 'Explore USA →',
    educationSystem: 'us',
    design: {
      primary: '#2563eb', // confident blue
      accent: '#dc2626',  // bold red
      bg: '#ffffff',
      text: '#0f172a',
    },
    designTokens: {
      heroGradient: 'from-blue-700 via-blue-800 to-slate-900',
      sectionSurface: 'bg-slate-50',
      accentText: 'text-blue-700',
      cardBorder: 'border-slate-200',
      buttonPrimary: 'bg-blue-700 hover:bg-blue-800 text-white',
      buttonAccent: 'bg-red-600 hover:bg-red-700 text-white',
      eyebrowText: 'text-blue-600',
    },
    isExisting: false,
  },

  GB: {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    routePrefix: '/uk',
    currency: 'GBP',
    currencySymbol: '£',
    currencyLocale: 'en-GB',
    phoneCode: '+44',
    blurb: 'GCSE • A-Level • IGCSE • IB',
    buttonLabel: 'Explore UK →',
    educationSystem: 'uk',
    design: {
      primary: '#1e293b', // deep navy
      accent: '#92400e',  // muted gold
      bg: '#fafaf9',      // warm off-white
      text: '#1c1917',    // stone-900
    },
    designTokens: {
      heroGradient: 'from-slate-900 via-stone-900 to-slate-800',
      sectionSurface: 'bg-stone-50',
      accentText: 'text-amber-800',
      cardBorder: 'border-stone-300',
      buttonPrimary: 'bg-slate-900 hover:bg-slate-800 text-white',
      buttonAccent: 'bg-amber-800 hover:bg-amber-900 text-white',
      eyebrowText: 'text-amber-700',
    },
    isExisting: false,
  },

  CA: {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    routePrefix: '/ca',
    currency: 'CAD',
    currencySymbol: '$',
    currencyLocale: 'en-CA',
    phoneCode: '+1',
    blurb: 'Provincial Curriculum • Online & Private Tutoring',
    buttonLabel: 'Explore Canada →',
    educationSystem: 'canadian',
    design: {
      primary: '#dc2626', // Canadian flag red
      accent: '#1d4ed8',  // deep blue
      bg: '#ffffff',
      text: '#0f172a',
    },
    designTokens: {
      heroGradient: 'from-red-700 via-red-800 to-blue-900',
      sectionSurface: 'bg-slate-50',
      accentText: 'text-red-700',
      cardBorder: 'border-slate-200',
      buttonPrimary: 'bg-red-700 hover:bg-red-800 text-white',
      buttonAccent: 'bg-blue-700 hover:bg-blue-800 text-white',
      eyebrowText: 'text-red-600',
    },
    isExisting: false,
  },

  AE: {
    code: 'AE',
    name: 'UAE',
    flag: '🇦🇪',
    routePrefix: '/ae',
    currency: 'AED',
    currencySymbol: 'د.إ',
    currencyLocale: 'ar-AE',
    phoneCode: '+971',
    blurb: 'British • American • IB • UAE/MOE Curriculum',
    buttonLabel: 'Explore UAE →',
    educationSystem: 'uae',
    design: {
      primary: '#1e3a8a', // navy
      accent: '#ca8a04',  // gold (subtle)
      bg: '#ffffff',
      text: '#0f172a',
    },
    designTokens: {
      heroGradient: 'from-slate-900 via-blue-950 to-slate-900',
      sectionSurface: 'bg-slate-50',
      accentText: 'text-amber-700',
      cardBorder: 'border-slate-200',
      buttonPrimary: 'bg-blue-900 hover:bg-blue-800 text-white',
      buttonAccent: 'bg-amber-600 hover:bg-amber-700 text-white',
      eyebrowText: 'text-amber-700',
    },
    isExisting: false,
  },
}

// Array form for iteration (order matters — matches spec)
export const REGION_LIST = [REGIONS.IN, REGIONS.US, REGIONS.GB, REGIONS.CA, REGIONS.AE]

// Lookup by code
export const getRegion = (code) => REGIONS[code?.toUpperCase()] || null

// Lookup by URL prefix (e.g., '/us' → REGIONS.US)
export const getRegionByPrefix = (prefix) =>
  Object.values(REGIONS).find((r) => r.routePrefix === prefix) || null

// localStorage key (per spec §15)
export const REGION_STORAGE_KEY = 'srijeeTutorRegion'

// Persist user-selected region
export function saveRegionPreference(code) {
  try {
    if (code && REGIONS[code]) {
      localStorage.setItem(REGION_STORAGE_KEY, code)
    } else {
      localStorage.removeItem(REGION_STORAGE_KEY)
    }
  } catch {
    // localStorage may be unavailable (private mode)
  }
}

// Read saved region (returns null if none or invalid)
export function readRegionPreference() {
  try {
    const code = localStorage.getItem(REGION_STORAGE_KEY)
    return code && REGIONS[code] ? code : null
  } catch {
    return null
  }
}

// Detect region from current URL path (e.g., /us/about → 'US', / → 'IN')
// India is now at root (/), so root path returns 'IN'.
export function detectRegionFromPath(pathname) {
  if (!pathname || pathname === '/') return 'IN'
  for (const r of Object.values(REGIONS)) {
    if (r.routePrefix === '/') continue // skip India (handled above)
    if (pathname === r.routePrefix || pathname.startsWith(r.routePrefix + '/')) {
      return r.code
    }
  }
  return 'IN' // default to India for any unmatched path (admin/teacher/student routes)
}
