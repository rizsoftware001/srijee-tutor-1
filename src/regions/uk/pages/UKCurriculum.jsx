import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { ukCurriculum, ukGradeLevels, ukGradeGroups, ukTestPrep } from '../data/ukContent.js'

/**
 * UKCurriculum — UK education systems overview.
 *
 * Per spec §7: National Curriculum (England), Scottish Curriculum for Excellence,
 * GCSE/IGCSE, A-Level, IB Diploma, 11+/13+ Common Entrance.
 *
 * Sections:
 *   - Key Stages (KS1, KS2, KS3, GCSE Years, A-Level Years, IB Years)
 *   - Curriculum Standards (exam boards & frameworks)
 *   - Test Prep Programmes (GCSE, A-Level, IB, Common Entrance)
 */

// Group the grade levels into the headline key stage cards.
const KEY_STAGE_CARDS = [
  { label: 'Key Stage 1', groups: ['Key Stage 1'], icon: '🌱' },
  { label: 'Key Stage 2', groups: ['Key Stage 2'], icon: '📚' },
  { label: 'Key Stage 3', groups: ['Key Stage 3'], icon: '🏫' },
  { label: 'GCSE Years', groups: ['GCSE Years'], icon: '🎓' },
  { label: 'A-Level Years', groups: ['A-Level Years'], icon: '📐' },
  { label: 'IB Years', groups: ['IB Years'], icon: '🌍' },
]

export default function UKCurriculum() {
  return (
    <>
      <RegionSeo
        path="/uk/curriculum"
        title="Key Stages, GCSE & A-Level — Srijee Tutor UK"
        description="National Curriculum, GCSE/IGCSE, A-Level, IB Diploma, and 11+/13+ Common Entrance — tutors aligned with UK education systems."
      />
      <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/uk' }, { label: 'Key Stages, GCSE & A-Level' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance tracking-tight">
            Key Stages, GCSE &amp; A-Level, demystified
          </h1>
          <p className="mt-3 text-stone-200/90 max-w-2xl">
            Our verified tutors are trained on the National Curriculum, exam-board
            specifications (AQA, Edexcel, OCR, WJEC), the IB Diploma Programme, and
            the 11+/13+ Common Entrance. Find a tutor aligned with your child's path.
          </p>
        </div>
      </section>

      {/* Key stages */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6 tracking-tight">
            Key Stages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_STAGE_CARDS.map((card) => {
              const levels = ukGradeLevels.filter((l) => card.groups.includes(l.group))
              return (
                <div key={card.label} className="bg-stone-50 rounded-2xl border border-stone-300 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl" aria-hidden="true">{card.icon}</div>
                    <h3 className="font-display text-xl font-bold text-stone-900 tracking-tight">{card.label}</h3>
                  </div>
                  <ul className="space-y-2">
                    {levels.map((lvl) => (
                      <li key={lvl.slug}>
                        <Link
                          to={`/uk/find-tutor?grade=${lvl.slug}`}
                          className="block p-2 rounded-lg hover:bg-white transition-colors group"
                        >
                          <p className="text-sm font-medium text-stone-900 group-hover:text-amber-800">{lvl.label}</p>
                          <p className="text-xs text-stone-500">{lvl.desc}</p>
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
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6 tracking-tight">
            Curriculum Standards
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ukCurriculum.map((c) => (
              <div key={c.slug} className="bg-white rounded-2xl border border-stone-300 p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-2 tracking-tight">{c.label}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-xs text-stone-500 mb-2"><strong>Scope:</strong> {c.states}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.subjects.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs">{s}</span>
                  ))}
                  {c.subjects.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs">+{c.subjects.length - 4}</span>
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
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6 tracking-tight">
            Test Prep Programmes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ukTestPrep.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-stone-300 p-6">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-1 tracking-tight">{p.name}</h3>
                <p className="text-xs text-stone-500 mb-3">{p.duration}</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{p.desc}</p>
                <Link
                  to={`/uk/find-tutor?goal=${p.slug === 'common-entrance-prep' ? '11-plus' : p.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-amber-800 hover:text-amber-900"
                >
                  Find a tutor →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance tracking-tight">
            Not sure which path fits your child?
          </h2>
          <p className="text-stone-300/90 mb-5">
            Our UK consultants will help you map the right curriculum path — free.
          </p>
          <Link
            to="/uk/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
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
