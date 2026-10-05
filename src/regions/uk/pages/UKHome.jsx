import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import {
  ukGradeLevels,
  ukGradeGroups,
  ukCurriculum,
  ukSubjects,
  ukLocations,
  ukTestPrep,
  ukTestimonials,
  ukHowItWorks,
  ukWhyChooseUs,
  ukFaqs,
} from '../data/ukContent.js'
import { SITE } from '../../../config/site.js'
import { expertTeachers } from '../../../data/expertTeachers.js'

/**
 * UKHome — the homepage of the United Kingdom regional frontend.
 *
 * Section composition:
 *   Hero (with embedded "Find My Tutor" mini-form) →
 *   TrustStrip →
 *   WhyChooseUs (6-card grid) →
 *   HowItWorks (5-step) →
 *   Subjects (popular subjects grid) →
 *   KeyStages (Early Years / KS1-3 / GCSE / A-Level / IB) →
 *   TestPrep (GCSE / A-Level / IB / 11+/13+) →
 *   Locations (UK cities grid) →
 *   Tutors (verified online tutors — global pool) →
 *   Testimonials (clearly marked Demo) →
 *   FAQ (UK-specific) →
 *   FinalCTA
 *
 * Per spec §7 (UK design direction):
 *   Elegant, academic, premium, traditional but modern, sophisticated.
 *   Deep navy + muted gold + warm off-white. GBP £ currency.
 *   UK education terminology (KS1-3, GCSE, A-Level, IB, Common Entrance).
 */

const HERO_STATS = [
  { label: 'Verified Tutors', value: '100+', suffix: '' },
  { label: 'Online across the UK', value: 'UK', suffix: '' },
  { label: 'Years of Tutoring Excellence', value: SITE.stats?.yearsExperience || '13', suffix: '' },
  { label: 'Avg. Family Rating', value: SITE.stats?.rating || '9.5', suffix: '/10' },
]

const TRUST_STRIP = [
  { label: 'Background-checked tutors', icon: '✓' },
  { label: 'Exam-board aligned', icon: '🎓' },
  { label: 'Free demo lesson first', icon: '🎬' },
  { label: 'Dedicated UK consultant', icon: '🤝' },
]

// Mini-form Key Stage options (kept compact for the hero form).
const MINI_FORM_GRADE_GROUPS = [
  { label: 'Early Years & Primary', stages: ['early-years', 'ks1-year-1', 'ks1-year-2', 'ks2-year-3', 'ks2-year-4', 'ks2-year-5', 'ks2-year-6'] },
  { label: 'Key Stage 3', stages: ['ks3-year-7', 'ks3-year-8', 'ks3-year-9'] },
  { label: 'GCSE Years', stages: ['gcse-year-10', 'gcse-year-11'] },
  { label: 'A-Level Years', stages: ['alevel-year-12', 'alevel-year-13'] },
  { label: 'IB Years', stages: ['ib-myp', 'ib-dp'] },
]

export default function UKHome() {
  return (
    <>
      <RegionSeo path="/uk" />
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <HowItWorks />
      <SubjectsGrid />
      <KeyStages />
      <TestPrep />
      <LocationsGrid />
      <VerifiedTutors />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}

/* ============================================================
   HERO — warm navy gradient, two-column, embedded mini-form
   ============================================================ */

function Hero() {
  const [form, setForm] = useState({ grade: '', subject: '', goal: '' })

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (form.grade) params.set('grade', form.grade)
    if (form.subject) params.set('subject', form.subject)
    if (form.goal) params.set('goal', form.goal)
    window.location.href = `/uk/find-tutor?${params.toString()}`
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Glow orbs */}
      <div className="absolute -top-12 -right-12 h-72 w-72 bg-amber-500/20 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 h-72 w-72 bg-slate-500/20 blur-3xl rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-100 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Now serving families across the UK
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
              Expert tuition for every stage of your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                academic journey
              </span>
              .
            </h1>
            <p className="mt-5 text-lg text-stone-200/90 leading-relaxed max-w-xl">
              Verified online tutors for Early Years, Key Stages 1–3, GCSE, IGCSE,
              A-Level, and the IB Diploma. Always try a free demo lesson before
              you commit.
            </p>

            {/* CTA row */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/uk/find-tutor"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
              >
                Find My Tutor →
              </Link>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                📞 {SITE.phoneDisplay}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_STATS.map((s) => (
                <StatBlock key={s.label} stat={s} />
              ))}
            </div>
          </div>

          {/* Right: mini-form */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/20">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-700 animate-pulse" />
              Quick match — 3 minutes
            </div>
            <h2 className="font-display text-xl font-bold text-stone-900 mb-1 tracking-tight">
              Tell us what you need
            </h2>
            <p className="text-sm text-stone-600 mb-4">
              Get matched with 2–3 verified tutors in your subject and key stage.
            </p>
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 mb-1 block">Key Stage / Year</label>
                <select
                  value={form.grade}
                  onChange={(e) => setForm((f) => ({ ...f, grade: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select a key stage</option>
                  {MINI_FORM_GRADE_GROUPS.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.stages.map((slug) => {
                        const lvl = ukGradeLevels.find((l) => l.slug === slug)
                        return lvl ? (
                          <option key={lvl.slug} value={lvl.slug}>{lvl.label}</option>
                        ) : null
                      })}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-700 mb-1 block">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select a subject</option>
                  {ukSubjects.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-700 mb-1 block">Goal (optional)</label>
                <select
                  value={form.goal}
                  onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                >
                  <option value="">Select a goal</option>
                  <option value="grade-improvement">Improve my grades</option>
                  <option value="gcse-prep">GCSE prep</option>
                  <option value="a-level-prep">A-Level prep</option>
                  <option value="ib-prep">IB prep</option>
                  <option value="11-plus">11+/13+ Common Entrance</option>
                  <option value="homework-help">Homework help</option>
                  <option value="university-prep">University preparation</option>
                  <option value="enrichment">Enrichment</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                Find My Tutor →
              </button>
              <p className="text-xs text-stone-500 text-center">
                No payment required. Free consultant consultation + free demo lesson.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBlock({ stat }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!ref.current || done) return
    const target = parseFloat(String(stat.value).replace(/[^\d.]/g, '')) || 0
    if (!target || !isFinite(target)) {
      setVal(stat.value)
      setDone(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now()
          const dur = 1400
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - t, 3)
            const current = target * eased
            setVal(stat.value % 1 !== 0 ? current.toFixed(1) : Math.round(current).toLocaleString('en-GB'))
            if (t < 1) requestAnimationFrame(tick)
            else setVal(stat.value)
          }
          requestAnimationFrame(tick)
          setDone(true)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [stat.value, done])

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-2xl sm:text-3xl font-bold tabular-nums tracking-tight">
        {val}{stat.suffix}
      </div>
      <div className="text-xs text-stone-300/80 mt-1">{stat.label}</div>
    </div>
  )
}

/* ============================================================
   TRUST STRIP
   ============================================================ */

function TrustStrip() {
  return (
    <section className="bg-amber-50 border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_STRIP.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-amber-800 shadow-sm text-sm font-bold">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-stone-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   WHY CHOOSE US
   ============================================================ */

function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why families choose us"
          title="Built for UK families, designed for outcomes"
          desc="Srijee Tutor brings a global tutoring methodology to the UK — adapted to the National Curriculum, GCSE, A-Level, and IB."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {ukWhyChooseUs.map((feature, i) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white rounded-2xl border border-stone-300 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-up"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 text-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   HOW IT WORKS — 5-step
   ============================================================ */

function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From 'share your needs' to 'start learning' in 5 steps"
          desc="Our demo-first matching process gives you confidence before you commit."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {ukHowItWorks.map((step, i) => (
            <div
              key={step.n}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white rounded-2xl border border-stone-300 p-5 hover:shadow-md transition-all animate-fade-up"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white text-sm font-bold mb-3">
                {String(step.n).padStart(2, '0')}
              </div>
              <div className="text-3xl mb-2" aria-hidden="true">{step.icon}</div>
              <h3 className="font-semibold text-stone-900 mb-1.5 text-sm">{step.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/uk/find-tutor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors"
          >
            Get Started — Find My Tutor
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SUBJECTS GRID
   ============================================================ */

function SubjectsGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Subjects"
          title="Tuition for every UK academic subject"
          desc="From KS1 phonics to A-Level Further Maths, our verified tutors cover the full UK curriculum."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
          {ukSubjects.map((subject) => (
            <Link
              key={subject.slug}
              to={`/uk/subjects?subject=${subject.slug}`}
              className="group bg-white rounded-xl border border-stone-300 p-4 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{subject.icon}</div>
              <p className="font-semibold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                {subject.label}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">{subject.group}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/uk/subjects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            Browse all subjects →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   KEY STAGES — replacing USA's "Grade Levels" section
   ============================================================ */

function KeyStages() {
  // Group the key stages into the headline cards per spec:
  // Early Years, KS1, KS2, KS3, GCSE Years, A-Level Years, IB Years
  // For visual balance we present 4 top-level cards: Primary (EY–KS2),
  // Secondary (KS3), GCSE Years, A-Level & IB.
  const CARDS = [
    {
      label: 'Primary',
      sub: 'Early Years · KS1 · KS2',
      icon: '🌱',
      groups: ['Early Years', 'Key Stage 1', 'Key Stage 2'],
      tone: 'from-emerald-700 to-emerald-900',
    },
    {
      label: 'Secondary',
      sub: 'Key Stage 3',
      icon: '📚',
      groups: ['Key Stage 3'],
      tone: 'from-slate-700 to-slate-900',
    },
    {
      label: 'GCSE Years',
      sub: 'KS4 · Year 10–11',
      icon: '🎓',
      groups: ['GCSE Years'],
      tone: 'from-amber-700 to-amber-900',
    },
    {
      label: 'A-Level & IB',
      sub: 'Sixth Form · IB Diploma',
      icon: '📐',
      groups: ['A-Level Years', 'IB Years'],
      tone: 'from-stone-700 to-stone-900',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Stages"
          title="Tuition for every stage of the UK journey"
          desc="From Early Years phonics to the IB Diploma — our tutors understand each stage and its academic demands."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {CARDS.map((card) => {
            const levels = ukGradeLevels.filter((l) => card.groups.includes(l.group))
            return (
              <div key={card.label} className="bg-white rounded-2xl border border-stone-300 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.tone} text-white text-xl`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-stone-900 tracking-tight">{card.label}</h3>
                    <p className="text-xs text-stone-500">{card.sub}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {levels.map((lvl) => (
                    <li key={lvl.slug}>
                      <Link
                        to={`/uk/find-tutor?grade=${lvl.slug}`}
                        className="flex items-start justify-between gap-2 p-2 rounded-lg hover:bg-stone-50 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-medium text-stone-900 group-hover:text-amber-800 transition-colors">{lvl.label}</p>
                          <p className="text-xs text-stone-500">{lvl.desc}</p>
                        </div>
                        <span className="text-stone-300 group-hover:text-amber-700 transition-colors">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/uk/find-tutor?group=${encodeURIComponent(card.label)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  View tutors for {card.label} →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TEST PREP — GCSE, A-Level, IB, 11+/13+
   ============================================================ */

function TestPrep() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-100 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Test Prep
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            GCSE, A-Level, IB &amp; Common Entrance specialists
          </h2>
          <p className="mt-4 text-base text-stone-300/80 max-w-2xl mx-auto leading-relaxed">
            Verified tutors aligned to your exam board — AQA, Edexcel, OCR, WJEC, and the IB.
            Most students see a clear grade improvement after a term of focused tuition.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ukTestPrep.map((p) => (
            <div
              key={p.slug}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-1 tracking-tight">{p.name}</h3>
              <p className="text-xs text-stone-300/80 mb-3">{p.duration}</p>
              <p className="text-sm text-stone-200/80 leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-stone-200/90">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-amber-400">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/uk/find-tutor?goal=gcse-prep"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
          >
            Find a Test Prep Tutor →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   LOCATIONS GRID
   ============================================================ */

function LocationsGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Locations"
          title="Online tuition across the United Kingdom"
          desc="Sessions fit your time zone and family schedule. Regional consultants familiar with local schools and exam boards where available."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-10">
          {ukLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/uk/locations?area=${loc.slug}`}
              className="group bg-stone-50 hover:bg-amber-50 rounded-xl border border-stone-300 hover:border-amber-300 p-4 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                  {loc.label}
                </p>
                {loc.primary && (
                  <span className="text-2xs font-semibold uppercase text-amber-700">Top</span>
                )}
              </div>
              <p className="text-xs text-stone-500">{loc.region}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/uk/locations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            View all locations →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   VERIFIED TUTORS — Global pool (clearly labelled)
   ============================================================ */

function VerifiedTutors() {
  // Per spec §5 + the user's clarification: reuse India's verified tutors
  // globally with clear "Online Tutors" labeling — no fabricated identities.
  const tutors = (expertTeachers || []).slice(0, 6)
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Tutors"
          title="Meet a few of our verified online tutors"
          desc="Our global pool of expert tutors is available online to UK families. Each tutor is background-checked, credentials-verified, and demo-evaluated."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {tutors.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-stone-300 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient || 'from-slate-800 to-slate-900'} text-white text-xl font-bold mb-4`}>
                {t.initials || t.name.charAt(0)}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-base font-bold text-stone-900">{t.name}</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-2xs font-semibold">
                  <span className="h-1 w-1 rounded-full bg-emerald-600" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-stone-500 mb-3">{t.qualification}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {(t.subjects || []).slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-stone-100">
                <Stat label="Rating" value={t.rating ? `★ ${t.rating}` : '★ New'} />
                <Stat label="Students" value={t.students || 0} />
                <Stat label="Years" value={t.experience || '—'} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <p>
            <strong>Online tutors available worldwide.</strong> The tutors above are
            part of Srijee Tutor's global verified pool, available online to UK families.
            In-person availability depends on your location — confirm with your
            consultant during the free consultation.
          </p>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-sm font-bold text-stone-900 tabular-nums">{value}</p>
      <p className="text-2xs text-stone-500">{label}</p>
    </div>
  )
}

/* ============================================================
   TESTIMONIALS — clearly marked Demo
   ============================================================ */

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What families say about us"
          desc="Honest feedback from UK families. Currently shown as demo content — replace with verified UK testimonials before public launch."
        />
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {ukTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-stone-300 p-6 relative"
            >
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold uppercase tracking-wider">
                Demo
              </span>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.6 4.3L13 6l-3.4 2.7L11 13 7 10.5 3 13l1.4-4.3L1 6l4.4-0.7z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-stone-700 leading-relaxed italic mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white font-bold text-sm">
                  {t.name.split(' ').slice(-2).map((p) => p[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ
   ============================================================ */

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from UK families"
          desc="Everything you need to know before getting started."
        />
        <div className="mt-10 space-y-3">
          {ukFaqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-white rounded-xl border border-stone-300 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-stone-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900 text-sm">{item.q}</span>
                  <span className={`flex-none flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all ${isOpen ? 'bg-amber-800 text-white rotate-45' : 'bg-stone-100 text-stone-600'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-stone-700 leading-relaxed animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FINAL CTA
   ============================================================ */

function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Ready to find the right tutor for your child?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-300/90 max-w-2xl mx-auto leading-relaxed">
          Get matched with 2–3 verified UK-aligned tutors in 3 minutes. Free
          consultation. Free demo lesson. No commitment until you're ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/uk/find-tutor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
          >
            Find My Tutor →
          </Link>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            📞 {SITE.phoneDisplay}
          </a>
          <Link
            to="/uk/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-amber-200 hover:text-white transition-colors"
          >
            Free Consultation →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Shared sub-component
   ============================================================ */

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 text-balance">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base text-stone-600 max-w-2xl mx-auto leading-relaxed text-pretty">
          {desc}
        </p>
      )}
    </div>
  )
}
