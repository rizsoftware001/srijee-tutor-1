import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { usSubjects, usSubjectGroups } from '../data/usContent.js'

/**
 * USASubjects — browsable grid of all US academic subjects.
 */

export default function USASubjects() {
  return (
    <>
      <RegionSeo
        path="/us/subjects"
        title="Subjects — Srijee Tutor USA"
        description="Browse all US academic subjects: Mathematics, Science, English, History, Foreign Languages, and more."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/us' }, { label: 'Subjects' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Subjects we tutor
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Verified tutors cover the full US K-12 curriculum — from elementary Common Core
            to AP, SAT/ACT prep, and beyond.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {usSubjectGroups.map((group) => {
            const items = usSubjects.filter((s) => s.group === group)
            return (
              <div key={group}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display text-2xl font-bold text-slate-900">{group}</h2>
                  <span className="text-xs text-slate-500">{items.length} subjects</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/us/find-tutor?subject=${s.slug}`}
                      className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                          {s.label}
                        </h3>
                        {s.popular && (
                          <span className="text-2xs font-semibold uppercase bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
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
            We tutor many more specialised topics — from AP Computer Science to
            Mandarin. Just ask!
          </p>
          <Link
            to="/us/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
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
