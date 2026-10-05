import React from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import {
  aeCurriculum,
  aeAcademicLevels,
  aeAcademicGroups,
  aeTestPrep,
} from '../data/aeContent.js'

/**
 * UAECurriculum — UAE education systems overview.
 *
 * Per spec §9: Multi-curriculum support is the UAE's defining feature.
 * Sections:
 *   - Academic Levels (KG, Primary, Middle School, Secondary, GCSE/IGCSE, A-Level, IB)
 *   - Curriculum Options (6 cards: MOE, British, American, IB, CBSE, ICSE)
 *   - Test Prep Programs (GCSE, A-Level, IB, CBSE Board, MOE Exam)
 */

const GROUP_ICONS = {
  'Early Years': '🌱',
  'Primary': '📚',
  'Middle School': '🎒',
  'Secondary': '📝',
  'Examination Years': '🎓',
}

export default function UAECurriculum() {
  return (
    <>
      <RegionSeo
        path="/ae/curriculum"
        title="Curriculum & Test Prep — Srijee Tutor UAE"
        description="UAE MOE, British, American, IB, CBSE, ICSE — verified tutors aligned with every UAE curriculum track."
      />
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'Curriculum & Test Prep' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Six curricula. One trusted platform.
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            The UAE has one of the most diverse curriculum landscapes in the world. Our
            verified tutors support every major track — MOE, British, American, IB, CBSE,
            and ICSE. Find a tutor aligned with your child's specific curriculum.
          </p>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Levels"
            title="Tutoring for every stage of your child's journey"
          />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
            {aeAcademicGroups.map((group) => {
              const levels = aeAcademicLevels.filter((l) => l.group === group)
              if (!levels.length) return null
              return (
                <div key={group} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{GROUP_ICONS[group] || '🎓'}</div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{group}</h3>
                  </div>
                  <ul className="space-y-2">
                    {levels.map((lvl) => (
                      <li key={lvl.slug}>
                        <Link
                          to={`/ae/find-tutor?level=${lvl.slug}`}
                          className="block p-2 rounded-lg hover:bg-white transition-colors group"
                        >
                          <p className="text-sm font-medium text-slate-900 group-hover:text-blue-900">{lvl.label}</p>
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

      {/* Curriculum Options */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curriculum Options"
            title="Choose your curriculum track"
            desc="Each card describes the curriculum, its key stages, popular subjects, and routes to a verified tutor."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {aeCurriculum.map((c) => (
              <div key={c.slug} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3" aria-hidden="true">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{c.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">Key Stages</p>
                <p className="text-xs text-slate-500 mb-3">{c.keyStages}</p>
                <p className="text-xs text-slate-500 mb-3"><strong>Scope:</strong> {c.scope}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.subjects.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs">{s}</span>
                  ))}
                  {c.subjects.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">+{c.subjects.length - 4}</span>
                  )}
                </div>
                <Link
                  to={`/ae/find-tutor?curriculum=${c.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 hover:text-amber-700"
                >
                  Find a tutor →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test prep */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Test Prep Programmes"
            title="Multi-curriculum exam prep"
            desc="Verified tutors with proven track records across every major UAE examination track."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {aeTestPrep.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{p.duration}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <Link
                  to={`/ae/find-tutor?goal=${p.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 hover:text-amber-700"
                >
                  Find a tutor →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-3 text-balance">
            Not sure which curriculum fits your child?
          </h2>
          <p className="text-blue-100/90 mb-5">
            Our UAE educational consultants will help you map the right curriculum path — free.
          </p>
          <Link
            to="/ae/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-amber-50 transition-colors shadow-lg"
          >
            Talk to an educational consultant →
          </Link>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed text-pretty">
          {desc}
        </p>
      )}
    </div>
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
