import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { SITE } from '../../../config/site.js'

/**
 * UAEAbout — the UAE About page.
 *
 * Per spec §4: shares the same Srijee Tutor business identity
 * (founder, mission, contact, awards) but presents it with UAE-specific
 * marketing language and visual style.
 *
 * Per spec §9: premium navy + subtle gold palette. British English spellings.
 * Multi-curriculum support (MOE, British, American, IB, CBSE, ICSE).
 * Abu Dhabi focus.
 */

const AE_TEAM_HIGHLIGHTS = [
  {
    title: 'Verified Tutor Pool',
    desc: 'Every tutor completes a 5-step verification — credentials review, demo-class evaluation, and background checks.',
  },
  {
    title: 'Multi-Curriculum Expertise',
    desc: 'Tutors trained across MOE, British, American, IB, CBSE, and ICSE curricula — one trusted platform for every UAE family.',
  },
  {
    title: 'Arabic Language Specialists',
    desc: 'Qualified Arabic-language tutors familiar with both the MOE syllabus and heritage-language learning needs.',
  },
  {
    title: 'Dedicated Educational Consultants',
    desc: 'A real UAE-based educational consultant guides every family from first contact through first lesson and beyond.',
  },
]

export default function UAEAbout() {
  return (
    <>
      <RegionSeo
        path="/ae/about"
        title="About Srijee Tutor UAE — Our Mission & Story"
        description="Learn how Srijee Tutor brings verified online tutoring to families across the United Arab Emirates."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            About Srijee Tutor in the UAE
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            Bringing verified online tutoring to families across the UAE
          </h1>
          <p className="mt-5 text-lg text-blue-100/90 leading-relaxed">
            Srijee Tutor was founded in 2013 by Ms. Srirupa Banerjee, a Gold Medalist from
            Calcutta University, with a simple mission: connect every learner with a verified,
            demo-tested tutor who genuinely fits their needs — whatever their curriculum.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
                Our founder
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
                Ms. Srirupa Banerjee
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Gold Medalist from Calcutta University and recipient of the National Scholar
                Award, Ms. Banerjee founded Srijee Tutor with a vision: every child deserves a
                tutor who is verified, prepared, and a true fit for their learning style.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Today Srijee Tutor serves thousands of families globally. Our UAE frontend
                brings that same methodology — verified tutors, demo-first selection, and
                dedicated educational consultant support — to UAE families navigating MOE,
                British, American, IB, CBSE, and ICSE curricula. Our initial marketing focus
                is Abu Dhabi, with coverage across all the Emirates.
              </p>
              <blockquote className="border-l-4 border-amber-600 pl-4 italic text-slate-700 mt-6">
                "Be future ready with expert guidance."
              </blockquote>
            </div>
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm text-2xl font-bold">
                  SB
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Srirupa Banerjee</p>
                  <p className="text-xs text-amber-300">Founder & Managing Director</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-blue-100/90">
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Gold Medalist, University of Calcutta
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  National Scholar Award Winner
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  13+ years in education
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ASSOCHAM "Emerging Edtech Company" awardee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">What we promise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
              The Srijee Tutor methodology, adapted for UAE families
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AE_TEAM_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Recognition
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-balance">
            ASSOCHAM "Emerging Edtech Company of the Year"
          </h2>
          <p className="text-blue-100/80 leading-relaxed mb-6">
            Awarded by the Associated Chambers of Commerce and Industry of India,
            presented by Mr. Bernard Lynch, Hon. Consul-General of Australia. The
            recognition is a UAE-relevant trust signal: the same methodology that earned
            this award now powers our UAE tutoring experience across MOE, British,
            American, IB, CBSE, and ICSE curricula.
          </p>
          <Link
            to="/ae/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-amber-50 transition-colors shadow-lg"
          >
            Talk to an educational consultant →
          </Link>
        </div>
      </section>
    </>
  )
}
