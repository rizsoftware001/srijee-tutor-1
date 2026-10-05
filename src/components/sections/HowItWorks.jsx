import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'

export function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: 'Share Your Requirement',
      desc: 'Tell us the class, board, subject, location, mode, and preferred time. Takes under a minute.',
      icon: <IconForm />,
      // Colorful gradient for the icon badge
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40',
      accent: 'bg-blue-500',
    },
    {
      n: 2,
      title: 'Counsellor Verifies',
      desc: 'A Srijee counsellor calls you back, understands your child\'s needs, and confirms the requirement.',
      icon: <IconCall />,
      gradient: 'from-emerald-500 to-teal-500',
      hoverGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40',
      accent: 'bg-emerald-500',
    },
    {
      n: 3,
      title: 'Get Matched Tutors',
      desc: 'We shortlist verified tutors based on subject, class, board, location, mode, and availability.',
      icon: <IconMatch />,
      gradient: 'from-orange-500 to-amber-500',
      hoverGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40',
      accent: 'bg-orange-500',
    },
    {
      n: 4,
      title: 'Take a Demo Class',
      desc: 'Try a demo with a shortlisted tutor. If the fit isn\'t right, we\'ll match again — no pressure.',
      icon: <IconDemo />,
      gradient: 'from-violet-500 to-purple-500',
      hoverGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40',
      accent: 'bg-violet-500',
    },
    {
      n: 5,
      title: 'Start Tuition',
      desc: 'Once you\'re happy, regular classes begin. Your counsellor stays available for ongoing support.',
      icon: <IconStart />,
      gradient: 'from-pink-500 to-rose-500',
      hoverGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/40 dark:to-rose-950/40',
      accent: 'bg-pink-500',
    },
  ]

  return (
    <Section className="relative section-surface-brand">
      <SectionBackground variant="dots" tone="brand" intensity={0.5} />
      <Container>
        <SectionHeading
          eyebrow="How Srijee Works"
          title="A simple, guided path to the right tutor"
          description="From first click to first class — we keep the process transparent, verified, and human."
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="
                group relative card p-4 sm:p-5 flex flex-col animate-fade-up
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-xl
                hover:bg-gradient-to-br
                overflow-hidden
              "
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient background (revealed on hover) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Top accent bar — appears on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Top row: icon + step number */}
              <div className="relative flex items-center justify-between mb-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  {s.icon}
                </span>
                <span className="font-display text-2xl font-bold text-ink-200 dark:text-ink-700 group-hover:text-ink-300 dark:group-hover:text-ink-500 tabular-nums transition-colors">
                  {String(s.n).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative font-display text-sm sm:text-base font-semibold text-ink-900 dark:text-white leading-tight">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative mt-1.5 text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom accent line — grows on hover */}
              <div
                className={`relative mt-3 h-1 w-8 rounded-full ${s.accent} group-hover:w-14 transition-all duration-300`}
              />

              {/* Arrow that appears on hover */}
              <div className="relative mt-2 flex items-center gap-1 text-xs font-semibold text-ink-500 dark:text-ink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                <span className={s.accent.replace('bg-', 'text-')}>Step {s.n} of 5</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 5h4M5 3l2 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 text-center">
          <Link to="/student/requirement" className="btn-primary btn-lg">Get Started — Find My Tutor</Link>
        </div>
      </Container>
    </Section>
  )
}

/* Crisp SVG icons */
function IconForm()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg> }
function IconCall()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function IconMatch()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3 3-2-2"/></svg> }
function IconDemo()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg> }
function IconStart()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
