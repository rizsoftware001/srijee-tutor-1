// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'

// /**
//  * MonthlyDoubtClearingSection
//  * Warm, inviting banner for "Free Concept & Doubt Clearing — Every Month".
//  *
//  * - Visually distinct from the other two banners: warm accent palette, monthly cadence visual
//  * - Reuses existing tokens (accent/amber, section-surface-accent, SectionBackground)
//  * - Honors prefers-reduced-motion (no continuous animations)
//  * - Routes to /free-doubt-clearing (new route, no duplicate)
//  * - Mobile-first responsive
//  * - Does NOT invent dates, times, teacher names, seat counts, or subject schedules
//  *   (per product spec — wording is "Register your interest for the next session.")
//  */
// export function MonthlyDoubtClearingSection() {
//   return (
//     <Section className="relative section-surface-accent">
//       <SectionBackground variant="dots" tone="accent" intensity={0.3} />
//       <SectionBackground variant="glow" tone="accent" corner="bottom-right" intensity={0.25} />

//       <Container>
//         <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
//           {/* Left: Visual — "monthly session" treatment */}
//           <div className="order-2 lg:order-1">
//             <div className="relative mx-auto max-w-md">
//               {/* Main "session" card */}
//               <div className="relative overflow-hidden rounded-2xl border border-accent-200 dark:border-accent-800 bg-gradient-to-br from-accent-50 via-amber-50 to-orange-100 dark:from-accent-950/40 dark:via-amber-950/30 dark:to-orange-900/30 p-6 shadow-xl">
//                 {/* Header row */}
//                 <div className="flex items-center justify-between">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-success-100 dark:bg-success-900/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success-700 dark:text-success-300">
//                     <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
//                     Free
//                   </span>
//                   <CalendarIcon className="h-7 w-7 text-accent-600 dark:text-accent-400" />
//                 </div>

//                 {/* Cadence */}
//                 <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-700 dark:text-accent-300">
//                   Every Month · Open to Students
//                 </p>
//                 <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink-900 dark:text-white leading-tight">
//                   Concept &amp; Doubt Clearing Session
//                 </h3>

//                 {/* Pillars */}
//                 <ul className="mt-5 space-y-2.5">
//                   {[
//                     { icon: <BulbIcon />, label: 'Strengthen your concepts' },
//                     { icon: <QuestionIcon />, label: 'Clear any doubt, any topic' },
//                     { icon: <ConfidenceIcon />, label: 'Learn with confidence' },
//                   ].map((item) => (
//                     <li key={item.label} className="flex items-center gap-2.5">
//                       <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-white/70 dark:bg-ink-800/60 text-accent-700 dark:text-accent-300 shadow-sm">
//                         {item.icon}
//                       </span>
//                       <span className="text-sm font-medium text-ink-800 dark:text-ink-100">
//                         {item.label}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Note about schedule */}
//                 <div className="mt-5 rounded-lg border border-dashed border-accent-300 dark:border-accent-700 bg-white/40 dark:bg-ink-900/40 p-3">
//                   <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">
//                     <span className="font-semibold text-ink-800 dark:text-white">Next session: </span>
//                     Register your interest and we'll notify you when the next session is scheduled.
//                   </p>
//                 </div>

//                 {/* Decorative corner glow */}
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent-300/30 blur-2xl"
//                 />
//               </div>

//               {/* Floating badge: "Monthly" */}
//               <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 flex items-center gap-1.5 rounded-full border border-brand-300 bg-white dark:bg-ink-800 dark:border-brand-700 px-3 py-1.5 shadow-lg">
//                 <RepeatIcon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
//                   Monthly
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Copy block */}
//           <div className="order-1 lg:order-2 text-center lg:text-left">
//             {/* Eyebrow */}
//             <span className="eyebrow">
//               <GiftIcon className="h-3.5 w-3.5" />
//               Open to Students
//             </span>

//             {/* Headline */}
//             <h2 className="mt-3 h2 text-ink-900 dark:text-white text-balance">
//               Free Concept &amp; Doubt Clearing —{' '}
//               <span className="text-gradient-warm">Every Month</span>
//             </h2>

//             {/* Body */}
//             <p className="mx-auto lg:mx-0 mt-4 max-w-lg text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed text-pretty">
//               Strengthen your concepts, clear your doubts and learn with confidence — with a free monthly learning session from SrijeeTutor. Open to all students, designed to complement regular tuition.
//             </p>

//             {/* Quick stats / trust row */}
//             <div className="mt-5 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
//               <Stat value="Free" label="No charge" />
//               <Stat value="Monthly" label="Cadence" />
//               <Stat value="All" label="Students welcome" />
//             </div>

//             {/* CTA row */}
//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
//               <Link
//                 to="/free-doubt-clearing"
//                 className="btn-accent btn-lg w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
//               >
//                 Join the Next Session
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <span className="text-xs text-ink-500 dark:text-ink-300">
//                 Register your interest — we'll notify you.
//               </span>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

// function Stat({ value, label }) {
//   return (
//     <div className="rounded-lg border border-ink-200 dark:border-ink-700 bg-white/60 dark:bg-ink-800/50 px-2.5 py-2 text-center backdrop-blur-sm">
//       <p className="font-display text-sm font-bold text-accent-700 dark:text-accent-300">{value}</p>
//       <p className="mt-0.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-300">{label}</p>
//     </div>
//   )
// }

// export default MonthlyDoubtClearingSection

// /* ── Inline icons (no extra deps) ────────────────────────────────── */
// function ArrowRight({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
//       <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }
// function GiftIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <polyline points="20 12 20 22 4 22 4 12" />
//       <rect x="2" y="7" width="20" height="5" />
//       <line x1="12" y1="22" x2="12" y2="7" />
//       <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
//       <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
//     </svg>
//   )
// }
// function CalendarIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//       <line x1="16" y1="2" x2="16" y2="6" />
//       <line x1="8" y1="2" x2="8" y2="6" />
//       <line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
//   )
// }
// function BulbIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M9 18h6" />
//       <path d="M10 22h4" />
//       <path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V18h6.4v-1.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z" />
//     </svg>
//   )
// }
// function QuestionIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//       <line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
//   )
// }
// function ConfidenceIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//       <polyline points="22 4 12 14.01 9 11.01" />
//     </svg>
//   )
// }
// function RepeatIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <polyline points="17 1 21 5 17 9" />
//       <path d="M3 11V9a4 4 0 0 1 4-4h14" />
//       <polyline points="7 23 3 19 7 15" />
//       <path d="M21 13v2a4 4 0 0 1-4 4H3" />
//     </svg>
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container } from '../common/SectionHeading.jsx'

/**
 * MonthlyDoubtClearingSection
 * Warm, inviting banner for "Free Concept & Doubt Clearing — Every Month".
 *
 * - UNIQUE BACKGROUND: vibrant accent→orange→amber gradient with white text
 * - Distinct from Banner 1 (dark ink) and Banner 2 (vibrant blue-teal)
 * - Routes to /free-doubt-clearing
 * - Mobile-first responsive
 * - Honors prefers-reduced-motion (no continuous animations)
 * - Does NOT invent dates, times, teacher names, seat counts, or subject schedules
 *   (per product spec — wording is "Register your interest for the next session.")
 */
export function MonthlyDoubtClearingSection() {
  return (
    <Section className="relative bg-gradient-to-br from-accent-500 via-orange-500 to-amber-500 overflow-hidden">
      {/* ── Decorative layers ─────────────────────────────────── */}
      {/* White grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Amber glow — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl"
      />
      {/* White glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/15 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Visual — white card with dark text for contrast on vibrant gradient */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Main "session" card — kept white so the dark text contrasts on the orange bg */}
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white dark:bg-ink-900 p-6 shadow-2xl">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success-100 dark:bg-success-900/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success-700 dark:text-success-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
                    Free
                  </span>
                  <CalendarIcon className="h-7 w-7 text-accent-600 dark:text-accent-400" />
                </div>

                {/* Cadence */}
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-700 dark:text-accent-300">
                  Every Month · Open to Students
                </p>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink-900 dark:text-white leading-tight">
                  Concept &amp; Doubt Clearing Session
                </h3>

                {/* Pillars */}
                <ul className="mt-5 space-y-2.5">
                  {[
                    { icon: <BulbIcon />, label: 'Strengthen your concepts' },
                    { icon: <QuestionIcon />, label: 'Clear any doubt, any topic' },
                    { icon: <ConfidenceIcon />, label: 'Learn with confidence' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent-50 dark:bg-ink-800 text-accent-700 dark:text-accent-300 shadow-sm">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-ink-800 dark:text-ink-100">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Note about schedule */}
                <div className="mt-5 rounded-lg border border-dashed border-accent-300 dark:border-accent-700 bg-accent-50/50 dark:bg-ink-900/40 p-3">
                  <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">
                    <span className="font-semibold text-ink-800 dark:text-white">Next session: </span>
                    Register your interest and we'll notify you when the next session is scheduled.
                  </p>
                </div>
              </div>

              {/* Floating badge: "Monthly" — solid white on vibrant bg */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white dark:bg-ink-800 px-3 py-1.5 shadow-lg">
                <RepeatIcon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  Monthly
                </span>
              </div>
            </div>
          </div>

          {/* Right: Copy block (white text on vibrant gradient) */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-100">
              <GiftIcon className="h-3.5 w-3.5" />
              Open to Students
            </span>

            {/* Headline */}
            <h2 className="mt-3 h2 text-white text-balance">
              Free Concept &amp; Doubt Clearing —{' '}
              <span className="text-amber-200">Every Month</span>
            </h2>

            {/* Body */}
            <p className="mx-auto lg:mx-0 mt-4 max-w-lg text-sm sm:text-base text-white/95 leading-relaxed text-pretty">
              Strengthen your concepts, clear your doubts and learn with confidence — with a free monthly learning session from SrijeeTutor. Open to all students, designed to complement regular tuition.
            </p>

            {/* Quick stats row — translucent white cards */}
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              <Stat value="Free" label="No charge" />
              <Stat value="Monthly" label="Cadence" />
              <Stat value="All" label="Students welcome" />
            </div>

            {/* CTA row — white button for contrast */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
              <Link
                to="/free-doubt-clearing"
                className="btn btn-lg bg-white text-accent-700 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                Join the Next Session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-white/85">
                Register your interest — we'll notify you.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-2.5 py-2 text-center">
      <p className="font-display text-sm font-bold text-white">{value}</p>
      <p className="mt-0.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-white/85">{label}</p>
    </div>
  )
}

export default MonthlyDoubtClearingSection

/* ── Inline icons (no extra deps) ────────────────────────────────── */
function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function GiftIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}
function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function BulbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V18h6.4v-1.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z" />
    </svg>
  )
}
function QuestionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
function ConfidenceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
function RepeatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}
