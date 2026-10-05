// // import React from 'react'
// // import { Seo, StructuredData } from '../../components/common/SEO.jsx'
// // import { Hero } from '../../components/sections/Hero.jsx'
// // import { TrustStrip } from '../../components/sections/TrustStrip.jsx'
// // import { StatsSection } from '../../components/sections/StatsSection.jsx'
// // import { HowItWorks } from '../../components/sections/HowItWorks.jsx'
// // import { TuitionTypes } from '../../components/sections/TuitionTypes.jsx'
// // import { VerifiedExpertTeachers } from '../../components/sections/VerifiedExpertTeachers.jsx'
// // import { FounderSection } from '../../components/sections/FounderSection.jsx'
// // import { FindByClass, FindByBoard, FindBySubject } from '../../components/sections/FindSections.jsx'
// // import { WhySrijee } from '../../components/sections/WhySrijee.jsx'
// // import { FeaturedProgrammesSection } from '../../components/sections/ProgrammesSection.jsx'
// // import { MasterClassSection } from '../../components/sections/MasterClassSection.jsx'
// // import { AwardsSection } from '../../components/sections/AwardsSection.jsx'
// // import { StudentSuccess } from '../../components/sections/StudentSuccess.jsx'
// // import { BecomeTutorCTA, FinalCTA } from '../../components/sections/CTASections.jsx'
// // import { BlogTeaser } from '../../components/sections/BlogTeaser.jsx'
// // import { FAQ } from '../../components/sections/FAQ.jsx'
// // import { SITE } from '../../config/site.js'
// // import { faqs } from '../../data/faqs.js'

// // export default function Home() {
// //   const orgJsonLd = {
// //     '@context': 'https://schema.org',
// //     '@type': 'EducationalOrganization',
// //     name: SITE.name,
// //     legalName: SITE.legalName,
// //     url: SITE.url,
// //     description: SITE.description,
// //     foundingDate: String(SITE.establishedYear),
// //     founder: { '@type': 'Person', name: SITE.founder.name },
// //     address: {
// //       '@type': 'PostalAddress',
// //       addressLocality: SITE.address.city,
// //       addressRegion: SITE.address.state,
// //       addressCountry: 'IN',
// //     },
// //     telephone: SITE.phone,
// //     email: SITE.email,
// //     award: SITE.awards.map((a) => `${a.title} (${a.issuer}, ${a.year})`),
// //   }
// //   const faqJsonLd = {
// //     '@context': 'https://schema.org',
// //     '@type': 'FAQPage',
// //     mainEntity: faqs.map((f) => ({
// //       '@type': 'Question',
// //       name: f.q,
// //       acceptedAnswer: { '@type': 'Answer', text: f.a },
// //     })),
// //   }
// //   return (
// //     <>
// //       <Seo path="/" />
// //       <StructuredData data={orgJsonLd} />
// //       <StructuredData data={faqJsonLd} />
// //       <Hero />
// //       <TrustStrip />
// //       <StatsSection />
// //       <HowItWorks />
// //       <TuitionTypes />
// //       <VerifiedExpertTeachers />
// //       <FounderSection />
// //       <FindByClass />
// //       <FindByBoard />
// //       <FindBySubject />
// //       {/* <FindByLocation /> */}
// //       <WhySrijee />
// //       <FeaturedProgrammesSection />
// //        <MasterClassSection />
// //       <AwardsSection />
// //       <StudentSuccess />
// //       <BecomeTutorCTA />
// //       <BlogTeaser />
// //       <FAQ />
// //       <FinalCTA />
// //     </>
// //   )
// // }
// import React from 'react'
// import { Seo, StructuredData } from '../../components/common/SEO.jsx'
// import { Hero } from '../../components/sections/Hero.jsx'
// import { TrustStrip } from '../../components/sections/TrustStrip.jsx'
// import { StatsSection } from '../../components/sections/StatsSection.jsx'
// import { HowItWorks } from '../../components/sections/HowItWorks.jsx'
// import { TuitionTypes } from '../../components/sections/TuitionTypes.jsx'
// import { VerifiedExpertTeachers } from '../../components/sections/VerifiedExpertTeachers.jsx'
// import { FounderSection } from '../../components/sections/FounderSection.jsx'
// import { FindByClass } from '../../components/sections/FindSections.jsx'
// import { WhySrijee } from '../../components/sections/WhySrijee.jsx'
// import { FeaturedProgrammesSection } from '../../components/sections/ProgrammesSection.jsx'
// import { MasterClassSection } from '../../components/sections/MasterClassSection.jsx'
// import { AwardsSection } from '../../components/sections/AwardsSection.jsx'
// import { StudentSuccess } from '../../components/sections/StudentSuccess.jsx'
// import { BecomeTutorCTA, FinalCTA } from '../../components/sections/CTASections.jsx'
// import { BlogTeaser } from '../../components/sections/BlogTeaser.jsx'
// import { FAQ } from '../../components/sections/FAQ.jsx'
// import { SITE } from '../../config/site.js'
// import { faqs } from '../../data/faqs.js'
// import StudentSupportFeedback from '../../components/sections/StudentSupportFeedback.jsx'

// export default function Home() {
//   const orgJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'EducationalOrganization',
//     name: SITE.name,
//     legalName: SITE.legalName,
//     url: SITE.url,
//     description: SITE.description,
//     foundingDate: String(SITE.establishedYear),
//     founder: {
//       '@type': 'Person',
//       name: SITE.founder.name,
//     },
//     address: {
//       '@type': 'PostalAddress',
//       addressLocality: SITE.address.city,
//       addressRegion: SITE.address.state,
//       addressCountry: 'IN',
//     },
//     telephone: SITE.phone,
//     email: SITE.email,
//     award: SITE.awards.map(
//       (a) => `${a.title} (${a.issuer}, ${a.year})`
//     ),
//   }

//   const faqJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqs.map((f) => ({
//       '@type': 'Question',
//       name: f.q,
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: f.a,
//       },
//     })),
//   }

//   return (
//     <>
//       <Seo path="/" />

//       <StructuredData data={orgJsonLd} />
//       <StructuredData data={faqJsonLd} />

//       <Hero />

//       <TrustStrip />

//       <StatsSection />

//       <HowItWorks />

//       <TuitionTypes />

//       <VerifiedExpertTeachers />

//       <FounderSection />

//       {/* 
//         Combined Tuition Explorer:
//         Class + Board + Subject
//         + Learning Journey
//       */}
//       <FindByClass />
//       <StudentSupportFeedback />

//       <WhySrijee />

//       <FeaturedProgrammesSection />

//       <MasterClassSection />

//       <AwardsSection />

//       <StudentSuccess />

//       <BecomeTutorCTA />
      

//       <BlogTeaser />

//       <FAQ />

//       <FinalCTA />
//     </>
//   )
// }


import React, { useEffect } from 'react'
import { Seo, StructuredData } from '../../components/common/SEO.jsx'
import { Hero } from '../../components/sections/Hero.jsx'
import { TrustStrip } from '../../components/sections/TrustStrip.jsx'
import { StatsSection } from '../../components/sections/StatsSection.jsx'
import { HowItWorks } from '../../components/sections/HowItWorks.jsx'
import { TuitionTypes } from '../../components/sections/TuitionTypes.jsx'
import { VerifiedExpertTeachers } from '../../components/sections/VerifiedExpertTeachers.jsx'
import { FounderSection } from '../../components/sections/FounderSection.jsx'
import { FindByClass } from '../../components/sections/FindSections.jsx'
import { WhySrijee } from '../../components/sections/WhySrijee.jsx'
import { FeaturedProgrammesSection } from '../../components/sections/ProgrammesSection.jsx'
import { MasterClassSection } from '../../components/sections/MasterClassSection.jsx'
import { AwardsSection } from '../../components/sections/AwardsSection.jsx'
import { StudentSuccess } from '../../components/sections/StudentSuccess.jsx'
import { BecomeTutorCTA, FinalCTA } from '../../components/sections/CTASections.jsx'
import { BlogTeaser } from '../../components/sections/BlogTeaser.jsx'
import { FAQ } from '../../components/sections/FAQ.jsx'
import { SITE } from '../../config/site.js'
import { faqs } from '../../data/faqs.js'
import StudentSupportFeedback from '../../components/sections/StudentSupportFeedback.jsx'
import { HomeTuitionMasterclassBanner } from '../../components/home/HomeTuitionMasterclassBanner.jsx'
import { TeacherSelectionDemoBanner } from '../../components/home/TeacherSelectionDemoBanner.jsx'
import { MonthlyDoubtClearingSection } from '../../components/home/MonthlyDoubtClearingSection.jsx'
import { useOriginModal } from '../../context/OriginModalContext.jsx'

export default function Home() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    foundingDate: String(SITE.establishedYear),
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: 'IN',
    },
    telephone: SITE.phone,
    email: SITE.email,
    award: SITE.awards.map(
      (a) => `${a.title} (${a.issuer}, ${a.year})`
    ),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  // Auto-open the Origin Selection modal 1 second after the India homepage
  // loads — but only once per browser session (gated by sessionStorage).
  // The user can always re-open it via the "Change Region" button in the
  // header. Per spec §13: do not show the popup repeatedly during the same
  // session every time the user navigates between pages.
  //
  // Implementation note: we use a module-level flag (in addition to
  // sessionStorage) so React StrictMode's double-invocation of effects
  // doesn't prevent the modal from showing on the very first mount.
  const { openOriginModal } = useOriginModal()
  useEffect(() => {
    const SESSION_KEY = 'srijeeTutorOriginModalShown'
    // If we've already shown the modal in a previous session, don't show again
    try {
      if (sessionStorage.getItem(SESSION_KEY) === 'done') return
    } catch {
      // sessionStorage may be unavailable (private mode) — fall through
    }
    // Mark as "scheduled" immediately so StrictMode re-invocation doesn't
    // double-schedule; "done" is set only after the timer actually fires.
    try {
      sessionStorage.setItem(SESSION_KEY, 'scheduled')
    } catch {}
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, 'done')
      } catch {}
      openOriginModal()
    }, 1000)
    return () => clearTimeout(t)
  }, [openOriginModal])

  return (
    <>
      <Seo path="/" />

      <StructuredData data={orgJsonLd} />
      <StructuredData data={faqJsonLd} />

      <Hero />

      <TrustStrip />

      <StatsSection />
      <HowItWorks />

      {/* FEATURE 2 — Experience the Class Before You Choose (demo-first teacher selection) */}
      <TeacherSelectionDemoBanner />

      <TuitionTypes />

      {/* FEATURE 1 — First Time in India: MasterClass for Home Tuition */}
      <HomeTuitionMasterclassBanner />

      <VerifiedExpertTeachers />

      <FounderSection />

      {/* 
        Combined Tuition Explorer:
        Class + Board + Subject
        + Learning Journey
      */}
      <FindByClass />

      {/* FEATURE 3 — Free Concept & Doubt Clearing, every month */}
      <MonthlyDoubtClearingSection />

      <StudentSupportFeedback />

      <WhySrijee />

      <FeaturedProgrammesSection />

      <MasterClassSection />

      <AwardsSection />

      <StudentSuccess />

      <BecomeTutorCTA />
      

      <BlogTeaser />

      <FAQ />

      <FinalCTA />
    </>
  )
}