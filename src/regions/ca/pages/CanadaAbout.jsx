import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { SITE } from '../../../config/site.js'

/**
 * CanadaAbout — the Canada About page.
 *
 * Per spec §4: shares the same Srijee Tutor business identity
 * (founder, mission, contact, awards) but presents it with Canada-specific
 * marketing language and the warm red/blue visual style.
 *
 * Per spec §8: "Bringing verified online tutoring to Canadian families",
 * mentions provincial curriculum and French immersion.
 */

const CA_TEAM_HIGHLIGHTS = [
  {
    title: 'Verified Tutor Pool',
    desc: 'Every tutor completes a 5-step verification — credentials review, demo-class evaluation, and background checks.',
  },
  {
    title: 'Provincial Curriculum Expertise',
    desc: 'Tutors trained on Ontario, BC, Alberta, Quebec, Manitoba curricula, plus IB Diploma frameworks.',
  },
  {
    title: 'French Immersion Specialists',
    desc: 'A Canada-specific strength — verified tutors who teach in and through French, supporting both French immersion and francophone programs.',
  },
  {
    title: 'Dedicated Canada Consultants',
    desc: 'A real human consultant guides every Canadian family from first contact through first lesson and beyond.',
  },
  {
    title: 'Demo-First Selection',
    desc: 'Always try a free demo class before you commit to a tutor — no exceptions, no pressure.',
  },
  {
    title: 'University Prep Coaching',
    desc: 'Top-6 average planning, supplementary essay support, and admissions strategy for Canadian and international universities.',
  },
]

export default function CanadaAbout() {
  return (
    <>
      <RegionSeo
        path="/ca/about"
        title="About Srijee Tutor Canada — Our Mission & Story"
        description="Learn how Srijee Tutor brings verified online tutoring to Canadian families across all provinces."
      />

      {/* Hero — Canadian red → blue gradient */}
      <section className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-300" />
            About Srijee Tutor in Canada
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            Bringing verified online tutoring to Canadian families
          </h1>
          <p className="mt-5 text-lg text-blue-100/90 leading-relaxed">
            Srijee Tutor was founded in 2013 by Ms. Srirupa Banerjee, a Gold Medalist
            from Calcutta University, with a simple mission: connect every learner
            with a verified, demo-tested tutor who genuinely fits their needs. Today
            that mission serves Canadian families from coast to coast.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">
                Our founder
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
                Ms. Srirupa Banerjee
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Gold Medalist from the University of Calcutta and recipient of the
                National Scholar Award, Ms. Banerjee founded Srijee Tutor with a
                vision: every child deserves a tutor who is verified, prepared, and
                a true fit for their learning style.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Today Srijee Tutor has served thousands of families globally. Our
                Canada frontend brings that same methodology — verified tutors,
                demo-first selection, and dedicated consultant support — to
                Canadian families navigating provincial curriculum, French immersion,
                IB, and university preparation.
              </p>
              <blockquote className="border-l-4 border-red-700 pl-4 italic text-slate-700 mt-6">
                "Be future ready with expert guidance."
              </blockquote>
            </div>
            <div className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm text-2xl font-bold">
                  SB
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Srirupa Banerjee</p>
                  <p className="text-xs text-blue-100">Founder & Managing Director</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-blue-100/90">
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
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">What we promise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
              The Srijee Tutor methodology, adapted for Canadian families
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CA_TEAM_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1 w-1 rounded-full bg-amber-300" />
            Recognition
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-balance">
            ASSOCHAM "Emerging Edtech Company of the Year"
          </h2>
          <p className="text-blue-100/80 leading-relaxed mb-6">
            Awarded by the Associated Chambers of Commerce and Industry of India,
            presented by Mr. Bernard Lynch, Hon. Consul-General of Australia. The
            recognition is a Canada-relevant trust signal: the same methodology that
            earned this award now powers our Canada tutoring experience — for
            provincial curriculum, French immersion, IB, and university prep.
          </p>
          <Link
            to="/ca/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-red-50 transition-colors"
          >
            Talk to a consultant →
          </Link>
        </div>
      </section>
    </>
  )
}
