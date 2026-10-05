import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { ukLocations } from '../data/ukContent.js'

/**
 * UKLocations — UK coverage overview.
 *
 * Per spec §6: UK locations only — London, Manchester, Birmingham, Leeds,
 * Bristol, Other UK Areas. All unverified regional info is demo content.
 */

export default function UKLocations() {
  return (
    <>
      <RegionSeo
        path="/uk/locations"
        title="Locations — Srijee Tutor UK"
        description="Online tuition across the United Kingdom, with regional consultants ready to help."
      />
      <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/uk' }, { label: 'Locations' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance tracking-tight">
            Online tuition across the United Kingdom
          </h1>
          <p className="mt-3 text-stone-200/90 max-w-2xl">
            Sessions fit your time zone. Regional consultants familiar with local
            schools, GCSE and A-Level exam boards, and selective-entry requirements
            where available.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ukLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl border border-stone-300 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-stone-900 tracking-tight">{loc.label}</h3>
                  {loc.primary && (
                    <span className="text-2xs font-semibold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      Top area
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-500 mb-4">{loc.region}</p>
                <ul className="space-y-1.5 text-sm text-stone-700">
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Online tutoring available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Exam-board-aware consultants
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Free demo lesson
                  </li>
                </ul>
                <Link
                  to={`/uk/find-tutor?location=${loc.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900"
                >
                  Find a tutor in {loc.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo notice */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Demo content.</strong> Area-specific coverage details shown
            here are placeholders. Srijee Tutor's verified online tutors serve
            families across the UK; in-person availability varies by location.
            Confirm specifics with your consultant during the free consultation.
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance tracking-tight">
            Online tuition has no borders
          </h2>
          <p className="text-stone-300/90 mb-5">
            Wherever you are in the UK, our verified tutors and dedicated
            consultants are ready.
          </p>
          <Link
            to="/uk/find-tutor"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
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
    <nav aria-label="Breadcrumb" className="text-xs text-amber-100/80">
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
