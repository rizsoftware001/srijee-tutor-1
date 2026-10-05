// import React, { useState, useEffect, useRef } from 'react'
// import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { Button } from '../ui/Button.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { expertTeachers } from '../../data/expertTeachers.js'
// import { useEnrollment } from '../../context/EnrollmentContext.jsx'

// /**
//  * VerifiedExpertTeachers — auto-scrolling carousel of 16 verified tutors.
//  * Each card has a unique colorful gradient. Pauses on hover.
//  */
// export function VerifiedExpertTeachers() {
//   const [paused, setPaused] = useState(false)
//   const scrollRef = useRef(null)
//   const { openEnrollment } = useEnrollment()

//   // Auto-scroll the carousel
//   useEffect(() => {
//     if (paused) return
//     const el = scrollRef.current
//     if (!el) return

//     let raf
//     const scroll = () => {
//       // Reset to start when we've scrolled past the first set
//       if (el.scrollLeft >= el.scrollWidth / 2) {
//         el.scrollLeft = 0
//       } else {
//         el.scrollLeft += 0.5 // speed: 0.5px per frame
//       }
//       raf = requestAnimationFrame(scroll)
//     }
//     raf = requestAnimationFrame(scroll)
//     return () => cancelAnimationFrame(raf)
//   }, [paused])

//   // Duplicate the array so the scroll appears infinite
//   const loopTeachers = [...expertTeachers, ...expertTeachers]

//   return (
//     <Section className="relative section-surface-brand">
//       <SectionBackground variant="mesh" tone="brand" intensity={0.5} />
//       <Container>
//         <SectionHeading
//           eyebrow="Verified & Expert Teachers"
//           title="Meet our verified educator network"
//           description="16+ document-checked, profile-reviewed tutors — each with proven experience across boards, subjects, and modes."
//           align="left"
//           action={
//             <Button
//               type="button"
//               variant="primary"
//               size="md"
//               onClick={openEnrollment}
//               className="mt-2 sm:mt-0"
//             >
//               Find My Tutor →
//             </Button>
//           }
//         />
//       </Container>

//       {/* Auto-scroll carousel — bleeds to edges */}
//       <div
//         ref={scrollRef}
//         className="mt-8 flex gap-4 overflow-x-auto no-scrollbar snap-x-mandatory pb-4"
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//         style={{ scrollBehavior: 'auto' }}
//       >
//         {/* Left padding to align with container */}
//         <div className="flex-none w-4 sm:w-5 lg:w-6" aria-hidden="true" />

//         {loopTeachers.map((teacher, index) => (
//           <TeacherCard
//             key={`${teacher.id}-${index}`}
//             teacher={teacher}
//             onEnroll={openEnrollment}
//           />
//         ))}

//         {/* Right padding */}
//         <div className="flex-none w-4 sm:w-5 lg:w-6" aria-hidden="true" />
//       </div>

//       {/* Hint */}
//       <Container>
//         <p className="mt-4 text-center text-xs text-ink-500 dark:text-ink-300">
//           <span className="inline-flex items-center gap-1.5">
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3M3 7.5l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//             Hover to pause · {expertTeachers.length} verified tutors · All document-checked
//           </span>
//         </p>
//       </Container>
//     </Section>
//   )
// }

// /* ─── Teacher Card — colorful gradient header + stats ──────────── */

// function TeacherCard({ teacher, onEnroll }) {
//   return (
//     <article
//       className="
//         card card-hover snap-start flex-none w-[280px] sm:w-[300px]
//         overflow-hidden group
//       "
//     >
//       {/* Colorful gradient header with initials + verified badge */}
//       <div className={`relative h-24 bg-gradient-to-br ${teacher.gradient} overflow-hidden`}>
//         {/* Decorative pattern */}
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//             backgroundSize: '16px 16px',
//           }}
//         />
//         {/* Glow */}
//         <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />

//         {/* Initials circle */}
//         <div className="absolute left-4 -bottom-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">
//           <span className={`font-display text-lg font-bold bg-gradient-to-br ${teacher.gradient} bg-clip-text text-transparent`}>
//             {teacher.initials}
//           </span>
//         </div>

//         {/* Verified badge */}
//         {teacher.verified && (
//           <div className="absolute top-3 right-3">
//             <Badge tone="success" size="xs" className="!bg-white/90 !text-success-700 backdrop-blur-sm">
//               <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="mr-0.5"><path d="M5 0l1.3 3.5L10 4l-2.5 2.4.6 3.6L5 8.5l-3.1 1.5.6-3.6L0 4l3.7-.5z"/></svg>
//               Verified
//             </Badge>
//           </div>
//         )}
//       </div>

//       {/* Card body */}
//       <div className="p-4 pt-8">
//         <h3 className="font-display text-base font-bold text-ink-900 dark:text-white">{teacher.name}</h3>
//         <p className="mt-0.5 text-xs text-ink-600 dark:text-ink-300 line-clamp-1">{teacher.qualification}</p>

//         {/* Subjects */}
//         <div className="mt-3 flex flex-wrap gap-1.5">
//           {teacher.subjects.slice(0, 3).map((s) => (
//             <span key={s} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">
//               {s}
//             </span>
//           ))}
//         </div>

//         {/* Stats row */}
//         <div className="mt-3 grid grid-cols-3 gap-2 text-center">
//           <Stat value={`${teacher.rating}`} label="Rating" tone="amber" />
//           <Stat value={`${teacher.students}`} label="Students" tone="blue" />
//           <Stat value={teacher.experience.replace(' years', 'y')} label="Exp" tone="green" />
//         </div>

//         {/* Meta */}
//         <div className="mt-3 flex items-center justify-between text-2xs text-ink-500 dark:text-ink-300">
//           <span className="flex items-center gap-1">
//             <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 0a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="currentColor"/></svg>
//             {teacher.locality}
//           </span>
//           <span className="flex items-center gap-1">
//             {teacher.mode.map((m) => (
//               <span key={m} className="inline-flex items-center justify-center rounded bg-ink-100 dark:bg-ink-800 px-1.5 py-0.5 text-2xs font-medium">{m}</span>
//             ))}
//           </span>
//         </div>

//         {/* CTA */}
//         <Button
//           type="button"
//           variant="outline"
//           size="sm"
//           fullWidth
//           className="mt-4"
//           onClick={onEnroll}
//         >
//           Book a Demo
//         </Button>
//       </div>
//     </article>
//   )
// }

// function Stat({ value, label, tone }) {
//   const tones = {
//     amber: 'text-amber-600 dark:text-amber-400',
//     blue: 'text-blue-600 dark:text-blue-400',
//     green: 'text-green-600 dark:text-green-400',
//   }
//   return (
//     <div className="rounded-lg bg-ink-50 dark:bg-ink-800/50 py-1.5">
//       <p className={`font-display text-sm font-bold ${tones[tone]}`}>{value}</p>
//       <p className="text-2xs text-ink-500 dark:text-ink-400">{label}</p>
//     </div>
//   )
// }

// export default VerifiedExpertTeachers
import React, { useState, useEffect, useRef } from 'react'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'
import { expertTeachers } from '../../data/expertTeachers.js'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'

/**
 * VerifiedExpertTeachers
 *
 * Responsive auto-scrolling teacher carousel.
 * The carousel is constrained to the website content width
 * instead of bleeding across the entire viewport.
 */

export function VerifiedExpertTeachers() {
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef(null)
  const { openEnrollment } = useEnrollment()

  // ------------------------------------------------------------
  // AUTO SCROLL
  // ------------------------------------------------------------

  useEffect(() => {
    if (paused) return

    const el = scrollRef.current
    if (!el) return

    let raf

    const scroll = () => {
      const halfwayPoint = el.scrollWidth / 2

      if (el.scrollLeft >= halfwayPoint) {
        el.scrollLeft = 0
      } else {
        el.scrollLeft += 0.5
      }

      raf = requestAnimationFrame(scroll)
    }

    raf = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(raf)
  }, [paused])

  // Duplicate teachers for continuous scrolling
  const loopTeachers = [...expertTeachers, ...expertTeachers]

  return (
    <Section className="relative overflow-hidden section-surface-brand">
      {/* Background */}
      <SectionBackground
        variant="mesh"
        tone="brand"
        intensity={0.5}
      />

      {/* =========================================================
          SECTION HEADING
      ========================================================== */}

      <Container>
        <SectionHeading
          eyebrow="Verified & Expert Teachers"
          title="Meet our verified educator network"
          description="16+ document-checked, profile-reviewed tutors — each with proven experience across boards, subjects, and modes."
          align="left"
          action={
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={openEnrollment}
              className="mt-2 sm:mt-0"
            >
              Find My Tutor →
            </Button>
          }
        />
      </Container>

      {/* =========================================================
          TEACHER CAROUSEL
          Constrained to website content width
      ========================================================== */}

      <Container>
        <div
          ref={scrollRef}
          className="
            mt-8
            w-full
            overflow-x-auto
            overflow-y-hidden
            no-scrollbar
            scroll-smooth
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          style={{
            scrollBehavior: 'auto',
          }}
        >
          <div className="flex w-max gap-4 pb-4 pr-1">
            {loopTeachers.map((teacher, index) => (
              <TeacherCard
                key={`${teacher.id}-${index}`}
                teacher={teacher}
                onEnroll={openEnrollment}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* =========================================================
          CAROUSEL HINT
      ========================================================== */}

      <Container>
        <p className="mt-3 text-center text-xs text-ink-500 dark:text-ink-300">
          <span className="inline-flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5l3 3 3-3M3 7.5l3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Hover to pause · {expertTeachers.length} verified tutors ·
            All document-checked
          </span>
        </p>
      </Container>
    </Section>
  )
}

/* ===============================================================
   TEACHER CARD
================================================================ */

function TeacherCard({ teacher, onEnroll }) {
  return (
    <article
      className="
        group
        flex-none
        w-[270px]
        sm:w-[285px]
        md:w-[300px]
        overflow-hidden
        rounded-2xl
        border border-ink-200/70
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        dark:border-ink-700
        dark:bg-ink-900
      "
    >
      {/* =======================================================
          COLOR HEADER
      ======================================================== */}

      <div
        className={`
          relative
          h-24
          overflow-hidden
          bg-gradient-to-br
          ${teacher.gradient}
        `}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Glow */}
        <div
          className="
            absolute
            -right-8
            -top-8
            h-24
            w-24
            rounded-full
            bg-white/20
            blur-2xl
          "
        />

        {/* Initials */}
        <div
          className="
            absolute
            bottom-[-22px]
            left-4
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-white
            shadow-lg
            dark:bg-ink-100
          "
        >
          <span
            className={`
              bg-gradient-to-br
              ${teacher.gradient}
              bg-clip-text
              font-display
              text-lg
              font-bold
              text-transparent
            `}
          >
            {teacher.initials}
          </span>
        </div>

        {/* Verified */}
        {teacher.verified && (
          <div className="absolute right-3 top-3">
            <Badge
              tone="success"
              size="xs"
              className="
                !bg-white/90
                !text-success-700
                backdrop-blur-sm
              "
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
                className="mr-0.5"
                aria-hidden="true"
              >
                <path d="M5 0l1.3 3.5L10 4l-2.5 2.4.6 3.6L5 8.5l-3.1 1.5.6-3.6L0 4l3.7-.5z" />
              </svg>

              Verified
            </Badge>
          </div>
        )}
      </div>

      {/* =======================================================
          CARD BODY
      ======================================================== */}

      <div className="p-4 pt-8">
        {/* Name */}
        <h3
          className="
            font-display
            text-base
            font-bold
            text-ink-900
            dark:text-white
          "
        >
          {teacher.name}
        </h3>

        {/* Qualification */}
        <p
          className="
            mt-0.5
            line-clamp-1
            text-xs
            text-ink-600
            dark:text-ink-300
          "
        >
          {teacher.qualification}
        </p>

        {/* =====================================================
            SUBJECTS
        ====================================================== */}

        <div className="mt-3 flex min-h-[24px] flex-wrap gap-1.5">
          {teacher.subjects.slice(0, 3).map((subject) => (
            <span
              key={subject}
              className="
                chip
                bg-brand-50
                text-2xs
                text-brand-700
                dark:bg-brand-900/30
                dark:text-brand-300
              "
            >
              {subject}
            </span>
          ))}
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <Stat
            value={`${teacher.rating}`}
            label="Rating"
            tone="amber"
          />

          <Stat
            value={`${teacher.students}`}
            label="Students"
            tone="blue"
          />

          <Stat
            value={teacher.experience.replace(' years', 'y')}
            label="Exp"
            tone="green"
          />
        </div>

        {/* =====================================================
            LOCATION + MODE
        ====================================================== */}

        <div
          className="
            mt-3
            flex
            min-h-[28px]
            items-center
            justify-between
            gap-2
            text-2xs
            text-ink-500
            dark:text-ink-300
          "
        >
          {/* Location */}
          <span className="flex min-w-0 items-center gap-1">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 0a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                fill="currentColor"
              />
            </svg>

            <span className="truncate">
              {teacher.locality}
            </span>
          </span>

          {/* Modes */}
          <span className="flex flex-none items-center gap-1">
            {teacher.mode.map((mode) => (
              <span
                key={mode}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded
                  bg-ink-100
                  px-1.5
                  py-0.5
                  text-2xs
                  font-medium
                  dark:bg-ink-800
                "
              >
                {mode}
              </span>
            ))}
          </span>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <Button
          type="button"
          variant="outline"
          size="sm"
          fullWidth
          className="mt-4"
          onClick={onEnroll}
        >
          Book a Demo
        </Button>
      </div>
    </article>
  )
}

/* ===============================================================
   STAT
================================================================ */

function Stat({ value, label, tone }) {
  const tones = {
    amber: 'text-amber-600 dark:text-amber-400',
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
  }

  return (
    <div
      className="
        rounded-lg
        bg-ink-50
        px-1
        py-1.5
        dark:bg-ink-800/50
      "
    >
      <p
        className={`
          font-display
          text-sm
          font-bold
          ${tones[tone]}
        `}
      >
        {value}
      </p>

      <p
        className="
          text-2xs
          text-ink-500
          dark:text-ink-400
        "
      >
        {label}
      </p>
    </div>
  )
}

export default VerifiedExpertTeachers