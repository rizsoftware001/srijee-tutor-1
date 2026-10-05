import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { aeLocations } from '../data/aeContent.js'

/**
 * UAELocations — UAE Emirates coverage overview.
 *
 * Per spec §9: Abu Dhabi is the featured launch location.
 * All unverified regional info is demo content per spec §5.
 */

export default function UAELocations() {
  return (
    <>
      <RegionSeo
        path="/ae/locations"
        title="Locations — Srijee Tutor UAE"
        description="Online tutoring across all Emirates — Abu Dhabi, Dubai, Sharjah, Al Ain, and beyond. Free demo class."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'Locations' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Online tutoring across the United Arab Emirates
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Sessions fit your schedule. Educational consultants familiar with KHDA (Dubai),
            ADEK (Abu Dhabi), and SPEA (Sharjah) expectations where available. Our initial
            marketing focus is <strong className="text-amber-300">Abu Dhabi</strong> — our
            featured launch location.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aeLocations.map((loc) => (
              <div
                key={loc.slug}
                className={`bg-white rounded-2xl border p-6 hover:shadow-md transition-shadow relative ${
                  loc.featured
                    ? 'border-amber-300 shadow-md'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-slate-900">{loc.label}</h3>
                  {loc.featured && (
                    <span className="inline-flex items-center gap-1 text-2xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                      ★ Featured Location
                    </span>
                  )}
                  {loc.primary && !loc.featured && (
                    <span className="text-2xs font-semibold uppercase bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full">
                      Top region
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-4">{loc.region}</p>
                {loc.featured && (
                  <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-3">
                    Head Office · Initial Marketing Focus
                  </p>
                )}
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Online tutoring available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {loc.featured ? 'In-home tutoring available' : 'In-home tutoring where available'}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Multi-curriculum counsellors (MOE, British, American, IB, CBSE, ICSE)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Free demo class
                  </li>
                </ul>
                <Link
                  to={`/ae/find-tutor?location=${loc.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-amber-700"
                >
                  Find a tutor in {loc.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo notice */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Demo content.</strong> Emirate-specific coverage details shown here are
            placeholders. Srijee Tutor's verified online tutors serve families across all
            Emirates; in-person availability varies by location. Confirm specifics with your
            educational consultant during the free consultation.
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Online tutoring has no borders in the UAE
          </h2>
          <p className="text-blue-100/90 mb-5">
            Wherever you are in the Emirates, our verified tutors and dedicated educational
            consultants are ready — from Abu Dhabi to the Northern Emirates.
          </p>
          <Link
            to="/ae/find-tutor"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-amber-50 transition-colors shadow-lg"
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
