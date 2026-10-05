import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import {
  aeAcademicLevels,
  aeCurriculum,
  aeSubjects,
  aeLocations,
  aeHowItWorks,
  aeWhyChooseUs,
  aeFaqs,
} from '../data/aeContent.js'

const CURRICULA = aeCurriculum.slice(0, 6)
const SUBJECTS = aeSubjects.filter((item) => item.popular).slice(0, 8)
const LOCATIONS = aeLocations.slice(0, 4)

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
    spark: <><path d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7Z"/><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7Z"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5v16M8 7h8M8 11h7"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></>,
    users: <><path d="M16 21v-1.5A4.5 4.5 0 0 0 11.5 15h-3A4.5 4.5 0 0 0 4 19.5V21"/><circle cx="10" cy="8" r="3"/><path d="M16 11a3 3 0 1 0 0-6M20 21v-1.5a4.5 4.5 0 0 0-3.2-4.3"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    phone: <path d="M5 3h3l1.5 4-2 1.5a14 14 0 0 0 8 8l1.5-2L21 16v3c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>
}

function SectionIntro({ eyebrow, title, desc, dark = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${dark ? 'text-cyan-300' : 'text-blue-700'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {desc && <p className={`mt-4 text-base sm:text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>}
    </div>
  )
}

function HeroSearch() {
  const [form, setForm] = useState({ curriculum: '', level: '', subject: '' })
  const set = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    Object.entries(form).forEach(([key, value]) => value && params.set(key, value))
    window.location.href = `/ae/find-tutor${params.toString() ? `?${params}` : ''}`
  }
  return (
    <form onSubmit={submit} className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.075] p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.08] via-transparent to-amber-300/[0.06] pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 font-bold">Smart tutor match</p>
            <h2 className="mt-1 text-xl font-bold text-white">Tell us what you need</h2>
          </div>
          <span className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><Icon name="spark" /></span>
        </div>
        <div className="space-y-3">
          <select value={form.curriculum} onChange={set('curriculum')} className="ae-select-dark">
            <option value="">Select curriculum</option>
            {CURRICULA.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}
          </select>
          <select value={form.level} onChange={set('level')} className="ae-select-dark">
            <option value="">Select academic level</option>
            {aeAcademicLevels.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}
          </select>
          <select value={form.subject} onChange={set('subject')} className="ae-select-dark">
            <option value="">Select subject</option>
            {aeSubjects.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}
          </select>
          <button type="submit" className="ae-primary-btn w-full justify-center">
            Find My Tutor <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
          <span>✓ Free consultation</span><span>✓ Demo-first</span><span>✓ UAE-focused matching</span>
        </div>
      </div>
    </form>
  )
}

export default function UAEHome() {
  return (
    <>
      <RegionSeo path="/ae" title="Premium Tutoring in the UAE" description="Personalised home and online tutoring across UAE curricula, academic levels and subjects." />
      <Hero />
      <TrustRail />
      <CurriculumSection />
      <WhySection />
      <LearningModes />
      <HowSection />
      <SubjectsSection />
      <LocationsSection />
      <FaqSection />
      <FinalCTA />
    </>
  )
}

function Hero() {
  return (
    <section className="ae-hero relative overflow-hidden text-white">
      <div className="ae-aurora" aria-hidden="true" />
      <div className="ae-grid" aria-hidden="true" />
      <div className="ae-stars" aria-hidden="true" />
      <div className="absolute -right-40 top-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.12fr_.88fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" /> UAE learning experience
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[4.6rem] font-bold leading-[1.02] tracking-[-0.045em] text-white">
              The right tutor can change the way a student <span className="ae-gradient-text">sees their future.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-300">
              Personalised home and online tutoring for UAE families — matched around curriculum, academic level, subject and learning goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ae/find-tutor" className="ae-primary-btn">Find My Tutor <Icon name="arrow" className="h-4 w-4" /></Link>
              <Link to="/ae/how-it-works" className="ae-ghost-btn">See how it works</Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><Icon name="shield" className="h-4 w-4 text-cyan-300" /> Verified tutor process</span>
              <span className="inline-flex items-center gap-2"><Icon name="book" className="h-4 w-4 text-cyan-300" /> Multi-curriculum</span>
              <span className="inline-flex items-center gap-2"><Icon name="target" className="h-4 w-4 text-cyan-300" /> Personalised matching</span>
            </div>
          </div>
          <HeroSearch />
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {[
            ['6', 'Curriculum pathways'],
            ['4', 'Learning formats'],
            ['10+', 'Popular subjects'],
            ['UAE', 'Focused experience'],
          ].map(([value, label]) => (
            <div key={label} className="bg-slate-950/45 px-4 py-5 sm:px-6 backdrop-blur-sm">
              <p className="font-display text-2xl sm:text-3xl font-bold text-white">{value}</p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustRail() {
  const items = [
    ['shield', 'Verified tutor process', 'Credentials + teaching fit'],
    ['book', 'Curriculum-aware', 'MOE, British, American, IB, CBSE & ICSE'],
    ['target', 'Goal-led matching', 'Built around the learner'],
    ['users', 'Human support', 'Guidance from first enquiry'],
  ]
  return <section className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">{items.map(([icon,title,desc]) => <div key={title} className="flex gap-3 py-5 sm:px-6 first:pl-0"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon name={icon} /></span><div><p className="text-sm font-bold text-slate-900">{title}</p><p className="mt-0.5 text-xs leading-5 text-slate-500">{desc}</p></div></div>)}</div></div></section>
}

function CurriculumSection() {
  return <section className="ae-section bg-[#f7f9fc]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="One platform · multiple pathways" title="Tutoring that fits the curriculum your child already follows." desc="From UAE / MOE to British, American, IB and Indian boards, choose support that understands the structure, terminology and expectations of the learner's pathway." /><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{CURRICULA.map((item,index) => <Link key={item.slug} to="/ae/curriculum" className="ae-curriculum-card group"><span className="ae-card-number">0{index+1}</span><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-blue-800">{item.label.split(' ')[0].slice(0,2)}</div><h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors">{item.label}</h3><p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">{item.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">Explore pathway <Icon name="arrow" className="h-3.5 w-3.5" /></span></Link>)}</div></div></section>
}

function WhySection() {
  return <section className="ae-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-20 items-start"><SectionIntro eyebrow="Designed around the learner" title="A more considered way to find a tutor." desc="Good tutoring is more than subject knowledge. The match should make sense for the student's curriculum, level, pace, personality and goals." /><div className="grid sm:grid-cols-2 gap-4">{aeWhyChooseUs.slice(0,6).map((item,index) => <div key={item.title} className="ae-feature-card"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold">{item.icon}</span><div className="mt-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">0{index+1}</p><h3 className="mt-1 text-base font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p></div></div>)}</div></div></div></section>
}

function LearningModes() {
  const modes = [
    { n:'01', title:'Home tuition', desc:'Personalised support at home where availability allows.', tone:'from-blue-600 to-blue-900' },
    { n:'02', title:'Online one-to-one', desc:'Focused live sessions with flexible scheduling.', tone:'from-cyan-500 to-blue-700' },
    { n:'03', title:'Small groups', desc:'Collaborative learning for siblings or classmates.', tone:'from-indigo-500 to-slate-900' },
    { n:'04', title:'Hybrid learning', desc:'Combine formats around the student’s routine.', tone:'from-slate-700 to-slate-950' },
  ]
  return <section className="ae-section ae-dark-panel"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro dark eyebrow="Choose your rhythm" title="Learning should fit around life — not the other way around." desc="Select a format that works for your family today, then adjust as needs change." /><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{modes.map((mode) => <Link key={mode.n} to="/ae/find-tutor" className={`ae-mode-card bg-gradient-to-br ${mode.tone}`}><span className="text-xs font-bold tracking-[.2em] text-white/55">{mode.n}</span><div className="mt-16"><h3 className="text-xl font-bold text-white">{mode.title}</h3><p className="mt-2 text-sm leading-6 text-white/70">{mode.desc}</p><span className="mt-5 inline-flex text-sm font-semibold text-white">Explore <Icon name="arrow" className="ml-2 h-4 w-4" /></span></div></Link>)}</div></div></section>
}

function HowSection() {
  return <section className="ae-section bg-[#f7f9fc]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Simple from the first step" title="From requirement to the right learning fit." desc="A clear process designed to reduce guesswork for students and parents." /><div className="mt-12 grid lg:grid-cols-5 gap-4">{aeHowItWorks.map((step,index) => <div key={step.n} className="relative"><div className="ae-step-card"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{String(step.n).padStart(2,'0')}</span><h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p></div>{index < aeHowItWorks.length-1 && <span className="hidden lg:block absolute top-6 -right-3 h-px w-6 bg-slate-300" />}</div>)}</div></div></section>
}

function SubjectsSection() {
  return <section className="ae-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"><SectionIntro eyebrow="Explore subjects" title="Support for the subjects that matter now." desc="Build confidence in core subjects, languages, sciences and future-ready skills." /><Link to="/ae/subjects" className="ae-outline-btn shrink-0">View all subjects <Icon name="arrow" className="h-4 w-4" /></Link></div><div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">{SUBJECTS.map((item,index) => <Link key={item.slug} to="/ae/subjects" className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"><span className="text-xs font-bold text-slate-400">0{index+1}</span><div className="mt-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-blue-700 font-bold group-hover:bg-blue-700 group-hover:text-white transition-colors">{item.icon}</div><h3 className="mt-4 text-sm font-bold text-slate-900">{item.label}</h3><p className="mt-1 text-xs text-slate-500">{item.group}</p></Link>)}</div></div></section>
}

function LocationsSection() {
  return <section className="ae-section bg-[#f7f9fc]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center"><div><SectionIntro eyebrow="Across the Emirates" title="Local when you need it. Flexible when you don't." desc="Our UAE experience is built around families across Abu Dhabi, Dubai, Sharjah and Al Ain, with online learning extending the reach further." /><Link to="/ae/locations" className="ae-outline-btn mt-7">Explore locations <Icon name="arrow" className="h-4 w-4" /></Link></div><div className="grid sm:grid-cols-2 gap-4">{LOCATIONS.map((location,index) => <Link key={location.slug} to="/ae/locations" className="ae-location-card group"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon name="location" /></span><span className="text-xs font-bold text-slate-300">0{index+1}</span></div><h3 className="mt-8 text-xl font-bold text-slate-950 group-hover:text-blue-700">{location.label}</h3><p className="mt-1 text-sm text-slate-500">{location.region}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">Learn more <Icon name="arrow" className="h-3.5 w-3.5" /></span></Link>)}</div></div></div></section>
}

function FaqSection() {
  const [open, setOpen] = useState(0)
  return <section className="ae-section bg-white"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Questions, answered" title="Everything you need to know before you begin." /><div className="mt-10 space-y-3">{aeFaqs.slice(0,6).map((item,index) => <div key={item.q} className="rounded-2xl border border-slate-200 overflow-hidden"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"><span className="text-sm sm:text-base font-bold text-slate-900">{item.q}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform ${open === index ? 'rotate-45' : ''}`}>+</span></button>{open === index && <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.a}</div>}</div>)}</div></div></section>
}

function FinalCTA() {
  return <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 text-white"><div className="ae-cta-glow" /><div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"><p className="text-[11px] font-bold uppercase tracking-[.22em] text-cyan-300">Your next step starts here</p><h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">Find a learning fit built around your student.</h2><p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">Tell us what your learner needs and explore the right curriculum, subject and learning format for your family.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/ae/find-tutor" className="ae-primary-btn">Find My Tutor <Icon name="arrow" className="h-4 w-4" /></Link><Link to="/ae/contact" className="ae-ghost-btn">Talk to us</Link></div></div></section>
}
