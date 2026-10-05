import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container } from '../common/SectionHeading.jsx'

/**
 * HomeTuitionMasterclassBanner
 * Premium "First Time in India — MasterClass for Home Tuition" promo banner.
 *
 * - Visually distinct from ordinary cards: deep gradient + glow + decorative chrome
 * - Reuses existing design tokens (brand/teal/accent, btn-*, section, container)
 * - Honors prefers-reduced-motion (no continuous animations, only transition on hover)
 * - Routes to /masterclass/home-tuition (existing route, no duplicate)
 * - Mobile-first responsive
 */
export function HomeTuitionMasterclassBanner() {
  return (
    <Section className="!py-0">
      <Container>
        {/* Outer premium frame */}
        <div
          className="
            relative overflow-hidden rounded-2xl sm:rounded-3xl
            bg-gradient-to-br from-ink-950 via-brand-950 to-teal-950
            border border-white/10
            shadow-2xl
            my-2 sm:my-4
          "
        >
          {/* ── Decorative layers ─────────────────────────────────── */}
          {/* Grid lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, #000 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, #000 30%, transparent 80%)',
            }}
          />
          {/* Brand glow — top right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-500/30 blur-3xl"
          />
          {/* Accent glow — bottom left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent-500/20 blur-3xl"
          />
          {/* Teal orb — middle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-2xl"
          />

          {/* ── Content ────────────────────────────────────────────── */}
          <div className="relative grid items-center gap-6 p-6 sm:p-8 lg:p-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              {/* Premium eyebrow badge */}
              {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/40 bg-accent-500/15 px-3 py-1 text-base font-bold uppercase tracking-[0.18em] text-accent-200">
  <SparkIcon className="h-3 w-3" />
  First Time in India
</span> */}
<span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/40 bg-accent-500/15 px-3 py-1 text-[1rem] font-bold uppercase tracking-[0.18em] text-accent-200">
  <SparkIcon className="h-3 w-3" />
  First Time in India
</span>

              {/* Headline */}
              <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] text-white text-balance">
                MasterClass for{' '}
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-amber-300 bg-clip-text text-transparent">
                  Home Tuition
                </span>
              </h2>

              {/* Supporting text */}
              <p className="mx-auto lg:mx-0 mt-3 sm:mt-4 max-w-md lg:max-w-lg text-sm sm:text-base text-brand-100/80 leading-relaxed text-pretty">
                A new learning experience designed exclusively for home-tuition students — bringing the depth of our premium MasterClass programme directly into your home.
              </p>

              {/* CTA row */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:justify-start justify-center">
                <Link
                  to="/masterclass/home-tuition"
                  className="btn-accent btn-lg w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 focus-visible:ring-accent-400"
                >
                  Explore Masterclass
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-brand-200/60">Premium · Limited seats</span>
              </div>
            </div>

            {/* Right: Visual side — stylized premium "card stack" */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="relative mx-auto max-w-sm">
                {/* Back card */}
                <div className="absolute -right-4 -top-4 w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm rotate-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-300">Live + Recorded</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">8-Week Intensive</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-400 to-teal-400" />
                  </div>
                </div>

                {/* Front card */}
                <div className="relative w-full rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.04] p-6 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-amber-500 text-white shadow-lg">
                      <GradCapIcon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-accent-400/40 bg-accent-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-200">
                      Premium
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Concept · Doubt Clearing · Strategy
                  </h3>
                  <p className="mt-2 text-sm text-brand-100/70">
                    Designed for home-tuition students preparing for school & competitive exams.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      'Senior educators, hand-picked',
                      'Concept mastery & exam strategy',
                      'Personal doubt-clearing slots',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-100/90">
                        <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-teal-400/20">
                          <CheckIcon className="h-2.5 w-2.5 text-teal-300" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating dot accent */}
                <div className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-accent-400/30 blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HomeTuitionMasterclassBanner

/* ── Inline icons (no extra deps) ────────────────────────────────── */
function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function SparkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0l1.5 4.5L14 6l-4.5 1.5L8 12l-1.5-4.5L2 6l4.5-1.5L8 0z" />
    </svg>
  )
}
function GradCapIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  )
}
function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}