import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { caLocations } from '../data/caContent.js'

/**
 * CanadaLocations — Canada coverage overview.
 *
 * Per spec §8: Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton,
 * Other Canadian Areas. All unverified regional info is demo content.
 */

export default function CanadaLocations() {
  return (
    <>
      <RegionSeo
        path="/ca/locations"
        title="Locations — Srijee Tutor Canada"
        description="Online tutoring across Canada, with regional consultants ready to help from coast to coast."
      />
      <section className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ca' }, { label: 'Locations' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Online tutoring across Canada — coast to coast
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Sessions fit your time zone and provincial school calendar. Regional
            consultants familiar with provincial curriculum where available.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {caLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-slate-900">{loc.label}</h3>
                  {loc.primary && (
                    <span className="text-2xs font-semibold uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                      Top area
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-4">{loc.region}</p>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Online tutoring available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Provincial-curriculum-aware consultants
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Free demo class
                  </li>
                </ul>
                <Link
                  to={`/ca/find-tutor?area=${loc.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
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
            <strong>Demo content.</strong> City-specific coverage details shown here
            are placeholders. Srijee Tutor's verified online tutors serve families
            across Canada; in-person availability varies by location. Confirm
            specifics with your consultant during the free consultation.
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Online tutoring has no borders
          </h2>
          <p className="text-blue-100/90 mb-5">
            Wherever you are in Canada, our verified tutors and dedicated consultants
            are ready — from Vancouver to Halifax and everywhere in between.
          </p>
          <Link
            to="/ca/find-tutor"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-red-50 transition-colors"
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
    <nav aria-label="Breadcrumb" className="text-xs text-red-100/80">
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
