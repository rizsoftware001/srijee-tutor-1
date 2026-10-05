import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { aeSubjects, aeSubjectGroups } from '../data/aeContent.js'

/**
 * UAESubjects — browsable grid of all UAE academic subjects.
 *
 * Per spec §9: premium navy + subtle gold design. Arabic is featured.
 * Subjects grouped by: Sciences, Languages, Humanities & Business.
 */

export default function UAESubjects() {
  return (
    <>
      <RegionSeo
        path="/ae/subjects"
        title="Subjects — Srijee Tutor UAE"
        description="Browse all UAE academic subjects: Mathematics, English, Arabic, Physics, Chemistry, Biology, Computer Science, Business Studies, Economics, French."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'Subjects' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Subjects we tutor
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Verified tutors cover every curriculum track in the UAE — MOE, British,
            American, IB, CBSE, and ICSE — with specialist Arabic-language support.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {aeSubjectGroups.map((group) => {
            const items = aeSubjects.filter((s) => s.group === group)
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
                      to={`/ae/find-tutor?subject=${s.slug}`}
                      className={`group bg-white rounded-xl border p-5 hover:shadow-md transition-all relative ${
                        s.featured
                          ? 'border-amber-300 hover:border-amber-400 bg-amber-50/40'
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {s.featured && (
                        <span className="absolute top-2 right-2 text-2xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                      <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-semibold text-sm transition-colors ${
                          s.featured
                            ? 'text-slate-900 group-hover:text-amber-700'
                            : 'text-slate-900 group-hover:text-blue-700'
                        }`}>
                          {s.label}
                        </h3>
                        {s.popular && !s.featured && (
                          <span className="text-2xs font-semibold uppercase bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded">
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
            We tutor many more specialised topics — from MOE Islamic Studies to IB Theory of
            Knowledge. Just ask!
          </p>
          <Link
            to="/ae/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm"
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
