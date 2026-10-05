import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { aeHowItWorks } from '../data/aeContent.js'

/**
 * UAEHowItWorks — detailed walkthrough of the 5-step matching process.
 *
 * Per spec §9: UAE premium navy/white design. British English spelling.
 * 5-step process: Share Your Needs → Meet Your Educational Consultant →
 * Get Matched Tutors → Take a Free Demo → Start Learning.
 */

const TIMELINE = [
  { phase: 'Day 1', title: 'You share your needs', desc: 'Use our 3-minute Find My Tutor wizard or call our educational consultant directly. We capture curriculum (MOE, British, American, IB, CBSE, ICSE), academic level, subject, scheduling, goals.' },
  { phase: 'Day 1–2', title: 'Educational consultant reviews', desc: 'A UAE-based educational consultant reviews your requirement, may call to clarify, then shortlists verified tutors from our pool.' },
  { phase: 'Day 2–3', title: 'You receive matches', desc: 'Get 2–3 verified tutor profiles with credentials, match scores, curriculum expertise, and availability windows.' },
  { phase: 'Day 3–5', title: 'Free demo class', desc: 'Take a free demo class with your preferred tutor. Experience the teaching first — no commitment yet.' },
  { phase: 'Day 5+', title: 'Start regular sessions', desc: 'Choose your tutor and begin weekly sessions — online, in-home, one-to-one, or group — across the Emirates. Pay only after the demo.' },
]

export default function UAEHowItWorks() {
  return (
    <>
      <RegionSeo
        path="/ae/how-it-works"
        title="How It Works — Srijee Tutor UAE"
        description="5 steps from 'share your needs' to 'start learning' with Srijee Tutor UAE."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'How It Works' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            How Srijee Tutor works in the UAE
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            From "share your needs" to "start learning" in five simple steps. Demo-first,
            educational-consultant-guided, no payment until you choose your tutor.
          </p>
        </div>
      </section>

      {/* 5-step grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {aeHowItWorks.map((step, i) => (
              <div
                key={step.n}
                style={{ animationDelay: `${i * 80}ms` }}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-all animate-fade-up"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white text-lg font-bold mb-3">
                  {String(step.n).padStart(2, '0')}
                </div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8 text-center">
            What to expect, day by day
          </h2>
          <ol className="relative space-y-6">
            {TIMELINE.map((t, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-none flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-2" />}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">{t.phase}</p>
                  <h3 className="font-semibold text-slate-900 mt-0.5 mb-1">{t.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Ready to start?
          </h2>
          <p className="text-blue-100/90 mb-5">
            3 minutes is all it takes. Get matched with verified UAE-aligned tutors today.
          </p>
          <Link
            to="/ae/find-tutor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-amber-50 transition-colors shadow-lg"
          >
            Find My Tutor →
          </Link>
        </div>
      </section>
    </>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-blue-100/80">
      <ol className="flex items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-white">{it.label}</Link>
            ) : (
              <span className="text-white">{it.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
