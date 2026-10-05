import React, { useRef, useEffect, useState } from 'react'
import { Section, Container } from '../common/SectionHeading.jsx'
import { SITE } from '../../config/site.js'

/**
 * StatsSection — REAL Srijee business stats, professional gradient card.
 * Replaces the old flat gray box with a premium brand-teal gradient.
 */
export function StatsSection() {
  const stats = [
    { value: SITE.stats.studentsEnrolled, label: 'Students Enrolled', suffix: '+', icon: <StudentsIcon />, tone: 'brand' },
    { value: SITE.stats.expertCourses,    label: 'Expert Courses',    suffix: '+', icon: <CoursesIcon />,  tone: 'teal' },
    { value: SITE.stats.yearsExperience,  label: 'Years Experience',  suffix: '+', icon: <YearsIcon />,    tone: 'accent' },
    { value: SITE.stats.rating,           label: 'Total Rating',      suffix: '/10', icon: <RatingIcon />, tone: 'warning' },
  ]

  return (
    <Section className="!py-4 sm:!py-5">
      <Container>
        <div className="relative overflow-hidden rounded-xl2 bg-brand-teal-gradient shadow-xl">
          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: '40px 40px'
          }} aria-hidden="true" />
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/15">
            {stats.map((s, i) => (
              <StatCell key={s.label} {...s} delay={i * 100} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function StatCell({ value, label, suffix, icon, tone, delay }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => {
            const duration = 1500
            const start = performance.now()
            const step = (now) => {
              const t = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              setDisplay(value * eased)
              if (t < 1) requestAnimationFrame(step)
              else setDisplay(value)
            }
            requestAnimationFrame(step)
          }, delay)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, delay])

  const isDecimal = value % 1 !== 0

  return (
    <div ref={ref} className="p-5 sm:p-6 text-center text-white">
      <div className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
        {icon}
      </div>
      <div className="font-display text-2xl sm:text-3xl font-bold tabular-nums leading-none">
        {isDecimal ? display.toFixed(1) : Math.round(display).toLocaleString('en-IN')}
        <span className="text-lg sm:text-xl opacity-90">{suffix}</span>
      </div>
      <p className="mt-1 text-xs text-white/85 font-medium tracking-wide">{label}</p>
    </div>
  )
}

/* Crisp, professional SVG icons (replaces emoji) */
function StudentsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}
function CoursesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}
function YearsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}
function RatingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}
