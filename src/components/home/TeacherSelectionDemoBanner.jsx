// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'

// /**
//  * TeacherSelectionDemoBanner
//  * Trustworthy, premium banner explaining Srijee's demo-first teacher selection model.
//  *
//  * - Visually distinct from the MasterClass banner: lighter, teal-tinted, transparent cards
//  * - Reuses existing tokens (brand/teal, section-surface-teal, SectionBackground)
//  * - Honors prefers-reduced-motion (only transitions on hover)
//  * - Routes to /home-tuition/teacher-selection (new route, no duplicate)
//  * - Mobile-first responsive (steps preview collapses cleanly)
//  */
// export function TeacherSelectionDemoBanner() {
//   return (
//     <Section className="relative section-surface-teal">
//       <SectionBackground variant="dots" tone="teal" intensity={0.35} />
//       <SectionBackground variant="glow" tone="brand" corner="top-right" intensity={0.25} />

//       <Container>
//         <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
//           {/* Left: Copy block */}
//           <div>
//             {/* Eyebrow */}
//             <span className="eyebrow">
//               <ShieldCheck className="h-3.5 w-3.5" />
//               Teacher Selection After Offline Demo Class
//             </span>

//             {/* Headline */}
//             <h2 className="mt-3 h2 text-ink-900 dark:text-white text-balance">
//               Experience the Class{' '}
//               <span className="text-gradient">Before You Choose</span>
//             </h2>

//             {/* Alt headline for emphasis — small, italic, brand-tinted */}
//             <p className="mt-2 text-sm sm:text-base font-medium text-brand-700 dark:text-brand-300 italic">
//               Don't just choose a teacher. Experience the teaching first.
//             </p>

//             {/* Body */}
//             <p className="mt-4 text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed text-pretty max-w-xl">
//               Meet the teacher, experience the teaching, and choose the teacher who feels right for your child. Srijee's demo-first approach puts the decision back in your hands — every shortlist is one you can experience before you commit.
//             </p>

//             {/* Trust row */}
//             <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
//               {[
//                 { icon: <UserCheckIcon />, label: 'Meet verified teachers' },
//                 { icon: <PlayCircleIcon />, label: 'Attend offline demo class' },
//                 { icon: <HeartIcon />, label: 'Choose what feels right' },
//               ].map((item) => (
//                 <li
//                   key={item.label}
//                   className="flex items-center gap-2 rounded-lg border border-ink-200 dark:border-ink-700 bg-white/70 dark:bg-ink-800/60 px-3 py-2.5 backdrop-blur-sm"
//                 >
//                   <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
//                     {item.icon}
//                   </span>
//                   <span className="text-xs sm:text-[13px] font-medium text-ink-800 dark:text-ink-100 leading-snug">
//                     {item.label}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <div className="mt-6">
//               <Link
//                 to="/home-tuition/teacher-selection"
//                 className="btn-primary btn-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
//               >
//                 See How It Works
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>

//           {/* Right: Visual — 8-step mini preview */}
//           <div className="relative">
//             <div className="card relative overflow-hidden rounded-2xl">
//               {/* Header strip */}
//               <div className="flex items-center justify-between border-b border-ink-100 dark:border-ink-700 bg-brand-50/60 dark:bg-brand-900/20 px-4 sm:px-5 py-3">
//                 <div>
//                   <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
//                     The 8-Step Path
//                   </p>
//                   <p className="text-sm font-display font-semibold text-ink-900 dark:text-white">
//                     Demo-first teacher selection
//                   </p>
//                 </div>
//                 <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300">
//                   <RouteIcon className="h-4 w-4" />
//                 </span>
//               </div>

//               {/* Steps grid */}
//               <ol className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-ink-700">
//                 {STEPS_PREVIEW.map((step, i) => (
//                   <li
//                     key={step.title}
//                     className="group bg-white dark:bg-ink-800 p-3 sm:p-4 transition-colors hover:bg-brand-50/50 dark:hover:bg-brand-900/20"
//                   >
//                     <div className="flex items-start gap-2.5">
//                       <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-teal-500 text-[10px] sm:text-xs font-bold text-white tabular-nums shadow-sm">
//                         {String(i + 1).padStart(2, '0')}
//                       </span>
//                       <div className="min-w-0">
//                         <p className="text-xs sm:text-[13px] font-semibold text-ink-900 dark:text-white leading-snug">
//                           {step.title}
//                         </p>
//                         <p className="mt-0.5 text-[11px] sm:text-xs text-ink-500 dark:text-ink-300 leading-snug line-clamp-2">
//                           {step.hint}
//                         </p>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ol>

//               {/* Footer link */}
//               <div className="border-t border-ink-100 dark:border-ink-700 px-4 sm:px-5 py-3">
//                 <Link
//                   to="/home-tuition/teacher-selection"
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 dark:text-brand-300 hover:underline"
//                 >
//                   View full process
//                   <ArrowRight className="h-3 w-3" />
//                 </Link>
//               </div>
//             </div>

//             {/* Floating accent badge */}
//             <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-success-300 bg-success-50 dark:bg-success-900/30 dark:border-success-700 px-3 py-1.5 shadow-md">
//               <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
//               <span className="text-[10px] font-bold uppercase tracking-wider text-success-700 dark:text-success-300">
//                 Transparent
//               </span>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

// const STEPS_PREVIEW = [
//   { title: 'Tell us your requirement', hint: 'Class, board, subject, location.' },
//   { title: 'We identify suitable teachers', hint: 'From our verified network.' },
//   { title: 'Teachers are shortlisted', hint: 'Matched to your specific need.' },
//   { title: 'Attend an offline demo class', hint: 'In-person, real teaching.' },
//   { title: 'Experience the teaching', hint: 'Student & parent observe live.' },
//   { title: 'Share feedback', hint: 'Tell us what felt right.' },
//   { title: 'Choose your teacher', hint: 'You decide, not us.' },
//   { title: 'Regular tuition begins', hint: 'Continued counsellor support.' },
// ]

// export default TeacherSelectionDemoBanner

// /* ── Inline icons (no extra deps) ────────────────────────────────── */
// function ArrowRight({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
//       <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }
// function ShieldCheck({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//       <path d="M9 12l2 2 4-4" />
//     </svg>
//   )
// }
// function UserCheckIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <polyline points="16 11 18 13 22 9" />
//     </svg>
//   )
// }
// function PlayCircleIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <circle cx="12" cy="12" r="10" />
//       <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
//     </svg>
//   )
// }
// function HeartIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//     </svg>
//   )
// }
// function RouteIcon({ className }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <circle cx="6" cy="19" r="3" />
//       <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
//       <circle cx="18" cy="5" r="3" />
//     </svg>
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container } from '../common/SectionHeading.jsx'

/**
 * TeacherSelectionDemoBanner
 * Trustworthy, premium banner explaining Srijee's demo-first teacher selection model.
 *
 * - UNIQUE BACKGROUND: vibrant brand-teal gradient (bg-brand-teal-gradient) with white text
 * - Distinct from Banner 1 (dark ink) and Banner 3 (warm orange)
 * - Routes to /home-tuition/teacher-selection
 * - Mobile-first responsive (steps preview collapses cleanly)
 * - Honors prefers-reduced-motion (only hover transitions)
 */
export function TeacherSelectionDemoBanner() {
  return (
    <Section className="relative bg-brand-teal-gradient overflow-hidden">
      {/* ── Decorative layers ─────────────────────────────────── */}
      {/* Subtle white grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* White glow — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl"
      />
      {/* Teal glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Left: Copy block (white text on vibrant gradient) */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
              <ShieldCheck className="h-3.5 w-3.5" />
              Teacher Selection After Offline Demo Class
            </span>

            {/* Headline */}
            <h2 className="mt-3 h2 text-white text-balance">
              Experience the Class{' '}
              <span className="text-amber-200">Before You Choose</span>
            </h2>

            {/* Alt headline for emphasis */}
            <p className="mt-2 text-sm sm:text-base font-medium text-brand-100 italic">
              Don't just choose a teacher. Experience the teaching first.
            </p>

            {/* Body */}
            <p className="mt-4 text-sm sm:text-base text-brand-50/95 leading-relaxed text-pretty max-w-xl">
              Meet the teacher, experience the teaching, and choose the teacher who feels right for your child. Srijee's demo-first approach puts the decision back in your hands — every shortlist is one you can experience before you commit.
            </p>

            {/* Trust row */}
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: <UserCheckIcon />, label: 'Meet verified teachers' },
                { icon: <PlayCircleIcon />, label: 'Attend offline demo class' },
                { icon: <HeartIcon />, label: 'Choose what feels right' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-2.5"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-white/20 text-white">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-white leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA — white button for contrast on vibrant gradient */}
            <div className="mt-6">
              <Link
                to="/home-tuition/teacher-selection"
                className="btn btn-lg bg-white text-brand-700 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                See How It Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Visual — 8-step mini preview (white card with dark text for contrast) */}
          <div className="relative">
            <div className="card relative overflow-hidden rounded-2xl">
              {/* Header strip */}
              <div className="flex items-center justify-between border-b border-ink-100 dark:border-ink-700 bg-brand-50/60 dark:bg-brand-900/20 px-4 sm:px-5 py-3">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                    The 8-Step Path
                  </p>
                  <p className="text-sm font-display font-semibold text-ink-900 dark:text-white">
                    Demo-first teacher selection
                  </p>
                </div>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300">
                  <RouteIcon className="h-4 w-4" />
                </span>
              </div>

              {/* Steps grid */}
              <ol className="grid grid-cols-2 gap-px bg-ink-100 dark:bg-ink-700">
                {STEPS_PREVIEW.map((step, i) => (
                  <li
                    key={step.title}
                    className="group bg-white dark:bg-ink-800 p-3 sm:p-4 transition-colors hover:bg-brand-50/50 dark:hover:bg-brand-900/20"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-teal-500 text-[10px] sm:text-xs font-bold text-white tabular-nums shadow-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-[13px] font-semibold text-ink-900 dark:text-white leading-snug">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-[11px] sm:text-xs text-ink-500 dark:text-ink-300 leading-snug line-clamp-2">
                          {step.hint}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Footer link */}
              <div className="border-t border-ink-100 dark:border-ink-700 px-4 sm:px-5 py-3">
                <Link
                  to="/home-tuition/teacher-selection"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 dark:text-brand-300 hover:underline"
                >
                  View full process
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-success-300 bg-success-50 dark:bg-success-900/30 dark:border-success-700 px-3 py-1.5 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-success-700 dark:text-success-300">
                Transparent
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const STEPS_PREVIEW = [
  { title: 'Tell us your requirement', hint: 'Class, board, subject, location.' },
  { title: 'We identify suitable teachers', hint: 'From our verified network.' },
  { title: 'Teachers are shortlisted', hint: 'Matched to your specific need.' },
  { title: 'Attend an offline demo class', hint: 'In-person, real teaching.' },
  { title: 'Experience the teaching', hint: 'Student & parent observe live.' },
  { title: 'Share feedback', hint: 'Tell us what felt right.' },
  { title: 'Choose your teacher', hint: 'You decide, not us.' },
  { title: 'Regular tuition begins', hint: 'Continued counsellor support.' },
]

export default TeacherSelectionDemoBanner

/* ── Inline icons (no extra deps) ────────────────────────────────── */
function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ShieldCheck({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function UserCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}
function PlayCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function RouteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}
