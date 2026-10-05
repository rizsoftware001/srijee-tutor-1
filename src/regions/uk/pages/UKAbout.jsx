import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { SITE } from '../../../config/site.js'

/**
 * UKAbout — the UK About page.
 *
 * Per spec §4: shares the same Srijee Tutor business identity
 * (founder, mission, contact, awards) but presents it with UK-specific
 * marketing language and visual style.
 *
 * Per spec §7 (UK design direction):
 *   Elegant, academic, premium, traditional but modern.
 */

const UK_TEAM_HIGHLIGHTS = [
  {
    title: 'Verified Tutor Pool',
    desc: 'Every tutor completes a 5-step verification — credentials review, demo-class evaluation, references, and DBS-style background checks where applicable.',
  },
  {
    title: 'UK Curriculum Expertise',
    desc: 'Tutors trained on the National Curriculum (England), the Scottish Curriculum for Excellence, GCSE/IGCSE, A-Level, and the IB Diploma.',
  },
  {
    title: 'Dedicated UK Consultants',
    desc: 'A real human consultant guides every UK family from first contact through first lesson and beyond.',
  },
  {
    title: 'Demo-First Selection',
    desc: 'Always try a free demo lesson before you commit to a tutor — no exceptions, no pressure.',
  },
]

export default function UKAbout() {
  return (
    <>
      <RegionSeo
        path="/uk/about"
        title="About Srijee Tutor UK — Our Mission & Story"
        description="Learn how Srijee Tutor brings verified online tuition to families across the United Kingdom."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            About Srijee Tutor in the UK
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            Bringing verified online tuition to UK families
          </h1>
          <p className="mt-5 text-lg text-stone-200/90 leading-relaxed">
            Srijee Tutor was founded in 2013 by Ms. Srirupa Banerjee, a Gold Medalist
            from the University of Calcutta, with a simple mission: connect every
            learner with a verified, demo-tested tutor who genuinely fits their needs.
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
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-4 tracking-tight">
                Ms. Srirupa Banerjee
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Gold Medalist from the University of Calcutta and recipient of the
                National Scholar Award, Ms. Banerjee founded Srijee Tutor with a
                vision: every child deserves a tutor who is verified, prepared, and a
                true fit for their learning style.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Today Srijee Tutor has served thousands of families globally. Our UK
                frontend brings that same methodology — verified tutors, demo-first
                selection, and dedicated consultant support — to British families
                navigating Early Years, Key Stages 1–3, GCSE, IGCSE, A-Level, and the
                IB Diploma.
              </p>
              <blockquote className="border-l-4 border-amber-700 pl-4 italic text-stone-700 mt-6">
                "Be future ready with expert guidance."
              </blockquote>
            </div>
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-stone-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm text-2xl font-bold">
                  SB
                </div>
                <div>
                  <p className="font-display text-lg font-bold tracking-tight">Srirupa Banerjee</p>
                  <p className="text-xs text-amber-200">Founder & Managing Director</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-stone-200/90">
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Gold Medalist, University of Calcutta
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  National Scholar Award recipient
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
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">What we promise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-balance tracking-tight">
              The Srijee Tutor methodology, adapted for UK families
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UK_TEAM_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl border border-stone-300 p-6">
                <h3 className="font-display text-lg font-bold text-stone-900 mb-2 tracking-tight">{h.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Recognition
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-balance">
            ASSOCHAM "Emerging Edtech Company of the Year"
          </h2>
          <p className="text-stone-300/80 leading-relaxed mb-6">
            Awarded by the Associated Chambers of Commerce and Industry of India,
            presented by Mr. Bernard Lynch, Hon. Consul-General of Australia. The
            recognition is a UK-relevant trust signal: the same methodology that
            earned this award now powers our UK tutoring experience — supporting
            students through GCSE, A-Level, IB, and Common Entrance.
          </p>
          <Link
            to="/uk/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
          >
            Talk to a consultant →
          </Link>
        </div>
      </section>
    </>
  )
}
