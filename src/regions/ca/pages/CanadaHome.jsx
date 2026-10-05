import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import {
  caGradeLevels,
  caGradeGroups,
  caCurriculum,
  caSubjects,
  caLocations,
  caTestPrep,
  caTestimonials,
  caHowItWorks,
  caWhyChooseUs,
  caFaqs,
} from '../data/caContent.js'
import { SITE } from '../../../config/site.js'
import { expertTeachers } from '../../../data/expertTeachers.js'

/**
 * CanadaHome — the homepage of the Canada regional frontend.
 *
 * Section composition:
 *   Hero (with embedded "Find My Tutor" mini-form) →
 *   TrustStrip →
 *   WhyChooseUs (6-card grid) →
 *   HowItWorks (5-step) →
 *   Subjects (popular subjects grid) →
 *   GradeLevels (Elementary K-5 / Middle 6-8 / High 9-12) →
 *   TestPrep (University Prep, Provincial Exams, French Immersion, IB) →
 *   Locations (Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, Other) →
 *   Tutors (verified online tutors — global pool) →
 *   Testimonials (clearly marked Demo) →
 *   FAQ (Canada-specific) →
 *   FinalCTA
 *
 * Per spec §8: clean, friendly, modern, welcoming, family-oriented, professional.
 * CAD currency. Canadian education terminology (provincial curriculum, French immersion).
 * Red→blue palette — Canadian flag red meets Canadian blue.
 */

const HERO_STATS = [
  { label: 'Verified Tutors', value: '100+', suffix: '' },
  { label: 'Online across Canada', value: 'Coast', suffix: ' to coast' },
  { label: 'Years of Tutoring Excellence', value: SITE.stats?.yearsExperience || '13', suffix: '' },
  { label: 'Avg. Family Rating', value: SITE.stats?.rating || '9.5', suffix: '/10' },
]

const TRUST_STRIP = [
  { label: 'Background-checked tutors', icon: '✓' },
  { label: 'Provincial curriculum aligned', icon: '🍁' },
  { label: 'Free demo class first', icon: '🎬' },
  { label: 'French immersion specialists', icon: '🇫🇷' },
]

export default function CanadaHome() {
  return (
    <>
      <RegionSeo path="/ca" />
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <HowItWorks />
      <SubjectsGrid />
      <GradeLevels />
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
   HERO — Canadian flag red → blue gradient, two-column, mini-form
   ============================================================ */

function Hero() {
  const [form, setForm] = useState({ grade: '', subject: '', goal: '' })

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (form.grade) params.set('grade', form.grade)
    if (form.subject) params.set('subject', form.subject)
    if (form.goal) params.set('goal', form.goal)
    window.location.href = `/ca/find-tutor?${params.toString()}`
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      {/* Glow orbs */}
      <div className="absolute -top-12 -right-12 h-72 w-72 bg-red-500/30 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 h-72 w-72 bg-blue-500/30 blur-3xl rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-red-100 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              Now serving families across Canada
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
              Personalized tutoring designed around your{' '}
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                learning needs
              </span>
              .
            </h1>
            <p className="mt-5 text-lg text-blue-100/90 leading-relaxed max-w-xl">
              Verified online tutors for provincial curriculum, French immersion,
              university prep, and IB. Always try a free demo class before you commit.
            </p>

            {/* CTA row */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/ca/find-tutor"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
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
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-red-700 animate-pulse" />
              Quick match — 3 minutes
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900 mb-1">
              Tell us what you need
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Get matched with 2-3 verified tutors in your subject and grade level.
            </p>
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Grade Level</label>
                <select
                  value={form.grade}
                  onChange={(e) => setForm((f) => ({ ...f, grade: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select a grade</option>
                  <optgroup label="Elementary School (K-5)">
                    <option value="kindergarten">Kindergarten</option>
                    <option value="grade-1">Grade 1</option>
                    <option value="grade-2">Grade 2</option>
                    <option value="grade-3">Grade 3</option>
                    <option value="grade-4">Grade 4</option>
                    <option value="grade-5">Grade 5</option>
                  </optgroup>
                  <optgroup label="Middle School (6-8)">
                    <option value="grade-6">Grade 6</option>
                    <option value="grade-7">Grade 7</option>
                    <option value="grade-8">Grade 8</option>
                  </optgroup>
                  <optgroup label="High School (9-12)">
                    <option value="grade-9">Grade 9</option>
                    <option value="grade-10">Grade 10</option>
                    <option value="grade-11">Grade 11</option>
                    <option value="grade-12">Grade 12</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select a subject</option>
                  {caSubjects.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Goal (optional)</label>
                <select
                  value={form.goal}
                  onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select a goal</option>
                  <option value="grade-improvement">Improve my grades</option>
                  <option value="university-prep">University prep</option>
                  <option value="provincial-exam">Provincial exam prep</option>
                  <option value="french-immersion">French immersion support</option>
                  <option value="ib-prep">IB prep</option>
                  <option value="homework-help">Homework help</option>
                  <option value="enrichment">Enrichment</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-colors"
              >
                Find My Tutor →
              </button>
              <p className="text-xs text-slate-500 text-center">
                No payment required. Free consultant consultation + free demo class.
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
            setVal(stat.value % 1 !== 0 ? current.toFixed(1) : Math.round(current).toLocaleString('en-CA'))
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
      <div className="font-display text-2xl sm:text-3xl font-bold tabular-nums">
        {val}{stat.suffix}
      </div>
      <div className="text-xs text-blue-100/80 mt-1">{stat.label}</div>
    </div>
  )
}

/* ============================================================
   TRUST STRIP
   ============================================================ */

function TrustStrip() {
  return (
    <section className="bg-red-50 border-y border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_STRIP.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-700 shadow-sm text-sm font-bold">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-slate-700">{item.label}</span>
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
          eyebrow="Why Canadian families choose us"
          title="Personalized tutoring designed around your learning needs"
          desc="Srijee Tutor brings a global tutoring methodology to Canada — adapted to provincial curriculum, French immersion, university prep, and IB."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {caWhyChooseUs.map((feature, i) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-up"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700 text-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
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
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From 'share your needs' to 'start learning' in 5 steps"
          desc="Our demo-first matching process gives you confidence before you commit."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {caHowItWorks.map((step, i) => (
            <div
              key={step.n}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-all animate-fade-up"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-700 to-blue-900 text-white text-sm font-bold mb-3">
                {String(step.n).padStart(2, '0')}
              </div>
              <div className="text-3xl mb-2" aria-hidden="true">{step.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/ca/find-tutor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold transition-colors"
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
          title="Tutoring for every Canadian academic subject"
          desc="From elementary literacy to IB and university prep, our verified tutors cover the full Canadian curriculum — including French immersion."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
          {caSubjects.map((subject) => (
            <Link
              key={subject.slug}
              to={`/ca/find-tutor?subject=${subject.slug}`}
              className="group bg-white rounded-xl border border-slate-200 p-4 hover:border-red-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{subject.icon}</div>
              <p className="font-semibold text-sm text-slate-900 group-hover:text-red-700 transition-colors">
                {subject.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{subject.group}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/ca/subjects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
          >
            Browse all subjects →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   GRADE LEVELS — Elementary K-5 / Middle 6-8 / High 9-12
   ============================================================ */

function GradeLevels() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Grade Levels"
          title="Tutoring for every stage of K-12"
          desc="From Kindergarten to Grade 12, our tutors understand each developmental stage and its provincial curriculum demands."
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {caGradeGroups.map((group) => {
            const levels = caGradeLevels.filter((l) => l.group === group)
            const icon = group === 'Elementary School' ? '🌱' : group === 'Middle School' ? '📚' : '🎓'
            return (
              <div key={group} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl" aria-hidden="true">{icon}</div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{group}</h3>
                </div>
                <ul className="space-y-2 mb-5">
                  {levels.map((lvl) => (
                    <li key={lvl.slug}>
                      <Link
                        to={`/ca/find-tutor?grade=${lvl.slug}`}
                        className="flex items-start justify-between gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-900 group-hover:text-red-700 transition-colors">{lvl.label}</p>
                          <p className="text-xs text-slate-500">{lvl.desc}</p>
                        </div>
                        <span className="text-slate-300 group-hover:text-red-600 transition-colors">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/ca/find-tutor?group=${encodeURIComponent(group)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
                >
                  View tutors for {group} →
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
   TEST PREP — University Prep, Provincial Exams, French Immersion, IB
   ============================================================ */

function TestPrep() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-red-800 via-red-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="h-1 w-1 rounded-full bg-amber-300" />
            Academic Prep
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            University Prep, Provincial Exams, French Immersion &amp; IB specialists
          </h2>
          <p className="mt-4 text-base text-red-100/80 max-w-2xl mx-auto leading-relaxed">
            Verified tutors with proven track records. Whether you're aiming for a
            top-6 average, an IB score, or stronger French immersion fluency, we
            have a matched tutor ready.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caTestPrep.map((p) => (
            <div
              key={p.slug}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white text-2xl mb-4`}>
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-1">{p.name}</h3>
              <p className="text-xs text-red-100/80 mb-3">{p.duration}</p>
              <p className="text-sm text-red-100/80 leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-red-100/90">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-amber-300">
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
            to="/ca/find-tutor?goal=university-prep"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-red-50 transition-colors"
          >
            Find a Prep Tutor →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   LOCATIONS GRID — Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, Other
   ============================================================ */

function LocationsGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Locations"
          title="Online tutoring across Canada — coast to coast"
          desc="Sessions fit your time zone and provincial school calendar. Consultants familiar with regional curriculum where available."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {caLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/ca/locations?area=${loc.slug}`}
              className="group bg-slate-50 hover:bg-red-50 rounded-xl border border-slate-200 hover:border-red-300 p-4 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm text-slate-900 group-hover:text-red-700 transition-colors">
                  {loc.label}
                </p>
                {loc.primary && (
                  <span className="text-2xs font-semibold uppercase text-red-600">Top</span>
                )}
              </div>
              <p className="text-xs text-slate-500">{loc.region}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/ca/locations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
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
  // Per spec §5: reuse India's verified tutors globally with clear
  // "Online Tutors" labeling — no fabricated identities.
  const tutors = (expertTeachers || []).slice(0, 6)
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Tutors"
          title="Meet a few of our verified online tutors"
          desc="Our global pool of expert tutors is available online to Canadian families. Each tutor is background-checked, credentials-verified, and demo-evaluated."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {tutors.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient || 'from-red-700 to-blue-900'} text-white text-xl font-bold mb-4`}>
                {t.initials || t.name.charAt(0)}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-base font-bold text-slate-900">{t.name}</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-2xs font-semibold">
                  <span className="h-1 w-1 rounded-full bg-emerald-600" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">{t.qualification}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {(t.subjects || []).slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-slate-100">
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
            part of Srijee Tutor's global verified pool, available online to Canadian
            families. Country-specific in-person availability depends on your location
            — confirm with your consultant during the free consultation.
          </p>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-900 tabular-nums">{value}</p>
      <p className="text-2xs text-slate-500">{label}</p>
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
          title="What Canadian families say about us"
          desc="Honest feedback from Canadian families. Currently shown as demo content — replace with verified Canada testimonials before public launch."
        />
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {caTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 relative"
            >
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold uppercase tracking-wider">
                Demo
              </span>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.6 4.3L13 6l-3.4 2.7L11 13 7 10.5 3 13l1.4-4.3L1 6l4.4-0.7z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-blue-700 text-white font-bold text-sm">
                  {t.name.split(' ').slice(-2).map((p) => p[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.location}</p>
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
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from Canadian families"
          desc="Everything you need to know before getting started."
        />
        <div className="mt-10 space-y-3">
          {caFaqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm">{item.q}</span>
                  <span className={`flex-none flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all ${isOpen ? 'bg-red-700 text-white rotate-45' : 'bg-slate-100 text-slate-600'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-700 leading-relaxed animate-fade-in">
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Ready to find the right tutor for your child?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
          Get matched with 2-3 verified Canadian-aligned tutors in 3 minutes. Free
          consultation. Free demo class. No commitment until you're ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/ca/find-tutor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-red-50 transition-colors"
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
            to="/ca/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-red-100 hover:text-white transition-colors"
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
      <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">{eyebrow}</p>
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
