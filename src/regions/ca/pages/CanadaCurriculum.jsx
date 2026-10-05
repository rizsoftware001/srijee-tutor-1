import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { caCurriculum, caGradeLevels, caGradeGroups, caTestPrep } from '../data/caContent.js'

/**
 * CanadaCurriculum — Canadian education systems overview.
 *
 * Per spec §8: Provincial curriculum (Ontario, BC, Alberta, Quebec, Manitoba),
 * IB Diploma, University Preparation, Provincial Exams Prep, French Immersion
 * Support.
 *
 * Sections:
 *   1. Grade Levels (Elementary K-5, Middle 6-8, High 9-12)
 *   2. Curriculum Standards (provincial + IB)
 *   3. Test Prep Programs (University Prep, Provincial Exams, French Immersion, IB)
 */

export default function CanadaCurriculum() {
  return (
    <>
      <RegionSeo
        path="/ca/curriculum"
        title="Curriculum & Test Prep — Srijee Tutor Canada"
        description="Provincial curriculum (Ontario, BC, Alberta, Quebec), IB, university prep, French immersion — tutors aligned with Canadian education systems."
      />
      <section className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ca' }, { label: 'Curriculum & Test Prep' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Canadian curriculum &amp; academic prep, demystified
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Our verified tutors are trained on provincial curricula (Ontario, BC, Alberta,
            Quebec, Manitoba), IB Diploma frameworks, and French immersion. Find a tutor
            aligned with your child's specific path.
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
            {caGradeGroups.map((group) => {
              const levels = caGradeLevels.filter((l) => l.group === group)
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
                          to={`/ca/find-tutor?grade=${lvl.slug}`}
                          className="block p-2 rounded-lg hover:bg-white transition-colors group"
                        >
                          <p className="text-sm font-medium text-slate-900 group-hover:text-red-700">{lvl.label}</p>
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
            {caCurriculum.map((c) => (
              <div key={c.slug} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{c.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-xs text-slate-500 mb-2"><strong>Scope:</strong> {c.states}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.subjects.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 text-xs">{s}</span>
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

      {/* Test prep / academic prep */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Test Prep &amp; Academic Prep Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caTestPrep.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-slate-200 p-6">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{p.duration}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <Link
                  to={`/ca/find-tutor?goal=university-prep`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-red-700 hover:text-red-800"
                >
                  Find a tutor →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Not sure which path fits your child?
          </h2>
          <p className="text-blue-100/90 mb-5">
            Our Canada consultants will help you map the right curriculum path — free.
          </p>
          <Link
            to="/ca/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-red-50 transition-colors"
          >
            Talk to a consultant →
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
