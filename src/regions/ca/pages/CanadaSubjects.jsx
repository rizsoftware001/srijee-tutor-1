import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { caSubjects, caSubjectGroups } from '../data/caContent.js'

/**
 * CanadaSubjects — browsable grid of all Canadian academic subjects.
 *
 * Per spec §8: Canada subjects grouped by STEM, Humanities, Languages
 * (with French prominent), Social Sciences.
 */

export default function CanadaSubjects() {
  return (
    <>
      <RegionSeo
        path="/ca/subjects"
        title="Subjects — Srijee Tutor Canada"
        description="Browse all Canadian academic subjects: Mathematics, English, Science, French, History, Geography, and more."
      />
      <section className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ca' }, { label: 'Subjects' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Subjects we tutor
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Verified tutors cover the full Canadian K-12 curriculum — from elementary
            literacy to IB and university prep, with French immersion as a Canada-specific
            specialty.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caSubjectGroups.map((group) => {
            const items = caSubjects.filter((s) => s.group === group)
            // Languages group gets a highlighted treatment (French is featured)
            const isLanguages = group === 'Languages'
            return (
              <div key={group}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-2xl font-bold text-slate-900">{group}</h2>
                    {isLanguages && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-wider">
                        Canada spotlight
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">{items.length} subjects</span>
                </div>
                <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ${isLanguages ? 'p-5 rounded-2xl bg-red-50 border border-red-100' : ''}`}>
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/ca/find-tutor?subject=${s.slug}`}
                      className={`group bg-white rounded-xl border ${isLanguages ? 'border-red-200 hover:border-red-400' : 'border-slate-200 hover:border-red-300'} p-5 hover:shadow-md transition-all`}
                    >
                      <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm text-slate-900 group-hover:text-red-700 transition-colors">
                          {s.label}
                        </h3>
                        {s.popular && (
                          <span className="text-2xs font-semibold uppercase bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{s.group}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
            Don't see your subject?
          </h2>
          <p className="text-sm text-slate-600 mb-5">
            We tutor many more specialized topics — from IB Theory of Knowledge to
            elementary core French. Just ask!
          </p>
          <Link
            to="/ca/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors"
          >
            Contact Us →
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
