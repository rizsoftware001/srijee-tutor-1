import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { ukSubjects, ukSubjectGroups } from '../data/ukContent.js'

/**
 * UKSubjects — browsable grid of all UK academic subjects.
 *
 * Grouped by: Sciences, Humanities, Languages, Social Sciences.
 * Per spec §7: warm stone palette, UK English.
 */

export default function UKSubjects() {
  return (
    <>
      <RegionSeo
        path="/uk/subjects"
        title="Subjects — Srijee Tutor UK"
        description="Browse all UK academic subjects: Mathematics, English, Sciences, Humanities, Languages, and more."
      />
      <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/uk' }, { label: 'Subjects' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance tracking-tight">
            Subjects we teach
          </h1>
          <p className="mt-3 text-stone-200/90 max-w-2xl">
            Verified tutors cover the full UK curriculum — from Early Years
            phonics and KS1 numeracy, through GCSE and A-Level, to the IB Diploma.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {ukSubjectGroups.map((group) => {
            const items = ukSubjects.filter((s) => s.group === group)
            return (
              <div key={group}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display text-2xl font-bold text-stone-900 tracking-tight">{group}</h2>
                  <span className="text-xs text-stone-500">{items.length} subjects</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/uk/find-tutor?subject=${s.slug}`}
                      className="group bg-white rounded-xl border border-stone-300 p-5 hover:border-amber-400 hover:shadow-md transition-all"
                    >
                      <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                          {s.label}
                        </h3>
                        {s.popular && (
                          <span className="text-2xs font-semibold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-1">{s.group}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-3 tracking-tight">
            Don't see your subject?
          </h2>
          <p className="text-sm text-stone-600 mb-5">
            We tutor many more specialised topics — from A-Level Further Maths to
            Mandarin ab initio. Just ask!
          </p>
          <Link
            to="/uk/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
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
