import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { usCurriculum, usGradeLevels, usGradeGroups, usTestPrep } from '../data/usContent.js'

/**
 * USACurriculum — US education systems overview.
 *
 * Per spec §6: Common Core, AP, SAT, ACT, College Preparation.
 */

export default function USACurriculum() {
  return (
    <>
      <RegionSeo
        path="/us/curriculum"
        title="Curriculum & Test Prep — Srijee Tutor USA"
        description="Common Core, AP, SAT, ACT, state standards — tutors aligned with US education systems."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/us' }, { label: 'Curriculum & Test Prep' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            US curriculum &amp; test prep, demystified
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Our verified tutors are trained on Common Core, state standards, AP frameworks,
            and SAT/ACT preparation. Find a tutor aligned with your child's specific path.
          </p>
        </div>
      </section>

      {/* Grade levels */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Grade Levels
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {usGradeGroups.map((group) => {
              const levels = usGradeLevels.filter((l) => l.group === group)
              const icon = group === 'Elementary School' ? '🌱' : group === 'Middle School' ? '📚' : '🎓'
              return (
                <div key={group} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{icon}</div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{group}</h3>
                  </div>
                  <ul className="space-y-2">
                    {levels.map((lvl) => (
                      <li key={lvl.slug}>
                        <Link
                          to={`/us/find-tutor?grade=${lvl.slug}`}
                          className="block p-2 rounded-lg hover:bg-white transition-colors group"
                        >
                          <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700">{lvl.label}</p>
                          <p className="text-xs text-slate-500">{lvl.desc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum standards */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Curriculum Standards
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usCurriculum.map((c) => (
              <div key={c.slug} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{c.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-xs text-slate-500 mb-2"><strong>Scope:</strong> {c.states}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.subjects.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs">{s}</span>
                  ))}
                  {c.subjects.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">+{c.subjects.length - 4}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test prep */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Test Prep Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {usTestPrep.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-slate-200 p-6">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{p.duration}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <Link
                  to={`/us/find-tutor?goal=test-prep`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Find a tutor →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-700 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Not sure which path fits your child?
          </h2>
          <p className="text-blue-100/90 mb-5">
            Our US counsellors will help you map the right curriculum path — free.
          </p>
          <Link
            to="/us/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to a counsellor →
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
