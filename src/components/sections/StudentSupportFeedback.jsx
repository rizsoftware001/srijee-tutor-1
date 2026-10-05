// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'

// const SUPPORT_OPTIONS = [
//   {
//     icon: '🎓',
//     title: 'Student Queries',
//     description:
//       'Students can ask questions, share learning difficulties, and request academic support.',
//     linkText: 'Ask a Query',
//     to: '/student-queries',
//     tone: 'blue',
//     iconBg: 'bg-blue-100',
//     iconText: 'text-blue-600',
//     border: 'border-blue-100',
//     hoverBorder: 'hover:border-blue-300',
//     button: 'bg-blue-600 hover:bg-blue-700',
//   },
//   {
//     icon: '👨‍👩‍👧',
//     title: 'Family Feedback',
//     description:
//       'Parents and family members can share feedback about classes, teachers, and the learning experience.',
//     linkText: 'Give Feedback',
//     to: '/family-feedback',
//     tone: 'purple',
//     iconBg: 'bg-purple-100',
//     iconText: 'text-purple-600',
//     border: 'border-purple-100',
//     hoverBorder: 'hover:border-purple-300',
//     button: 'bg-purple-600 hover:bg-purple-700',
//   },
//   {
//     icon: '👨‍🏫',
//     title: 'Teacher Feedback',
//     description:
//       'Teachers can share observations about student performance, participation, attendance, and improvement.',
//     linkText: 'View Feedback',
//     to: '/teacher-feedback',
//     tone: 'green',
//     iconBg: 'bg-green-100',
//     iconText: 'text-green-600',
//     border: 'border-green-100',
//     hoverBorder: 'hover:border-green-300',
//     button: 'bg-green-600 hover:bg-green-700',
//   },
// //   {
// //     icon: '📊',
// //     title: 'Student Progress',
// //     description:
// //       'Keep track of learning progress, strengths, improvement areas, and academic development.',
// //     linkText: 'View Progress',
// //     to: '/student-progress',
// //     tone: 'orange',
// //     iconBg: 'bg-orange-100',
// //     iconText: 'text-orange-600',
// //     border: 'border-orange-100',
// //     hoverBorder: 'hover:border-orange-300',
// //     button: 'bg-orange-500 hover:bg-orange-600',
// //   },
//   {
//     icon: '💬',
//     title: 'Parent–Teacher Communication',
//     description:
//       'Create a clear communication channel between parents and teachers about the student.',
//     linkText: 'Connect',
//     to: '/parent-teacher-connect',
//     tone: 'cyan',
//     iconBg: 'bg-cyan-100',
//     iconText: 'text-cyan-600',
//     border: 'border-cyan-100',
//     hoverBorder: 'hover:border-cyan-300',
//     button: 'bg-cyan-600 hover:bg-cyan-700',
//   },
//   {
//     icon: '🚨',
//     title: 'Raise a Concern',
//     description:
//       'Students and parents can report an issue or concern that requires attention and support.',
//     linkText: 'Raise Concern',
//     to: '/raise-concern',
//     tone: 'rose',
//     iconBg: 'bg-rose-100',
//     iconText: 'text-rose-600',
//     border: 'border-rose-100',
//     hoverBorder: 'hover:border-rose-300',
//     button: 'bg-rose-600 hover:bg-rose-700',
//   },
// ]

// function SupportCard({ option }) {
//   return (
//     <div
//       className={`
//         group relative flex h-full flex-col overflow-hidden
//         rounded-[22px]
//         border ${option.border}
//         bg-white/95
//         p-6
//         shadow-[0_12px_35px_rgba(30,100,180,0.07)]
//         backdrop-blur-sm
//         transition-all duration-300
//         hover:-translate-y-1
//         ${option.hoverBorder}
//         hover:shadow-[0_20px_45px_rgba(30,100,180,0.12)]
//       `}
//     >
//       {/* Decorative background */}
//       <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50/50 transition-transform duration-500 group-hover:scale-125" />

//       <div className="relative flex h-full flex-col">
//         {/* Icon */}
//         <div
//           className={`
//             mb-5 flex h-14 w-14 shrink-0
//             items-center justify-center
//             rounded-2xl
//             ${option.iconBg}
//             text-2xl
//             ${option.iconText}
//             transition-transform duration-300
//             group-hover:scale-105
//           `}
//         >
//           {option.icon}
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
//             {option.title}
//           </h3>

//           <p className="mt-3 text-sm leading-6 text-slate-600">
//             {option.description}
//           </p>
//         </div>

//         {/* Action */}
//         <div className="mt-6">
//           <Link
//             to={option.to}
//             className={`
//               inline-flex
//               items-center
//               gap-2
//               rounded-xl
//               px-4
//               py-2.5
//               text-sm
//               font-bold
//               text-white
//               transition-all
//               duration-300
//               ${option.button}
//               group-hover:gap-3
//             `}
//           >
//             {option.linkText}
//             <span aria-hidden="true">→</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// function TrustPoint({ icon, title, description }) {
//   return (
//     <div className="flex items-start gap-3">
//       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg">
//         {icon}
//       </div>

//       <div>
//         <h4 className="text-sm font-bold text-slate-900">
//           {title}
//         </h4>

//         <p className="mt-1 text-xs leading-5 text-slate-500">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default function StudentSupportFeedback() {
//   return (
//     <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff]">
//       <SectionBackground
//         variant="mesh"
//         tone="brand"
//         intensity={0.25}
//       />

//       <Container>
//         <div className="relative z-10">
//           {/* =====================================================
//               HEADER
//           ====================================================== */}
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
//               Student Support
//             </p>

//             <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Student Support{' '}
//               <span className="text-blue-600">
//                 &amp; Feedback
//               </span>
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//               Open communication between students, parents, and teachers
//               for a better, more transparent learning experience.
//             </p>
//           </div>

//           {/* =====================================================
//               MAIN CARDS
//           ====================================================== */}
//           <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {SUPPORT_OPTIONS.map((option) => (
//               <SupportCard
//                 key={option.title}
//                 option={option}
//               />
//             ))}
//           </div>

//           {/* =====================================================
//               TRANSPARENCY PANEL
//           ====================================================== */}
//           <div className="mt-8 overflow-hidden rounded-[24px] border border-blue-100 bg-white/90 shadow-[0_15px_40px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//             <div className="grid lg:grid-cols-2">
//               {/* Left */}
//               <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 p-7 text-white sm:p-9">
//                 <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
//                 <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/10" />

//                 <div className="relative">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur-sm">
//                     🤝
//                   </div>

//                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
//                     Built around communication
//                   </p>

//                   <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
//                     Everyone stays connected.
//                   </h3>

//                   <p className="mt-4 max-w-lg text-sm leading-6 text-blue-50 sm:text-base">
//                     Students, parents, and teachers can communicate,
//                     share feedback, and stay informed about the learning
//                     journey.
//                   </p>

//                   <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
//                     <span className="h-2 w-2 rounded-full bg-green-300" />
//                     Transparent learning communication
//                   </div>
//                 </div>
//               </div>

//               {/* Right */}
//               <div className="grid gap-6 p-7 sm:grid-cols-2 sm:p-9">
//                 <TrustPoint
//                   icon="🔎"
//                   title="Clear Communication"
//                   description="Important questions and feedback have a clear place to go."
//                 />

//                 <TrustPoint
//                   icon="📈"
//                   title="Progress Visibility"
//                   description="Parents and students can stay informed about learning progress."
//                 />

//                 <TrustPoint
//                   icon="🗣️"
//                   title="Open Feedback"
//                   description="Feedback can be shared by students, families, and teachers."
//                 />

//                 <TrustPoint
//                   icon="🛡️"
//                   title="Student Focused"
//                   description="Communication stays focused on supporting the student's learning."
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'

const SUPPORT_OPTIONS = [
  {
    icon: '🎓',
    title: 'Student Queries',
    description:
      'Students can ask questions, share learning difficulties, and request academic support.',
    linkText: 'Ask a Query',
    to: '/student-queries',
    tone: 'blue',
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconText: 'text-blue-600 dark:text-blue-300',
    border: 'border-blue-100 dark:border-blue-900/50',
    hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Feedback',
    description:
      'Parents and family members can share feedback about classes, teachers, and the learning experience.',
    linkText: 'Give Feedback',
    to: '/family-feedback',
    tone: 'purple',
    iconBg: 'bg-purple-100 dark:bg-purple-900/40',
    iconText: 'text-purple-600 dark:text-purple-300',
    border: 'border-purple-100 dark:border-purple-900/50',
    hoverBorder: 'hover:border-purple-300 dark:hover:border-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    icon: '👨‍🏫',
    title: 'Teacher Feedback',
    description:
      'Teachers can share observations about student performance, participation, attendance, and improvement.',
    linkText: 'View Feedback',
    to: '/teacher-feedback',
    tone: 'green',
    iconBg: 'bg-green-100 dark:bg-green-900/40',
    iconText: 'text-green-600 dark:text-green-300',
    border: 'border-green-100 dark:border-green-900/50',
    hoverBorder: 'hover:border-green-300 dark:hover:border-green-700',
    button: 'bg-green-600 hover:bg-green-700',
  },
//   {
//     icon: '📊',
//     title: 'Student Progress',
//     description:
//       'Keep track of learning progress, strengths, improvement areas, and academic development.',
//     linkText: 'View Progress',
//     to: '/student-progress',
//     tone: 'orange',
//     iconBg: 'bg-orange-100',
//     iconText: 'text-orange-600',
//     border: 'border-orange-100',
//     hoverBorder: 'hover:border-orange-300',
//     button: 'bg-orange-500 hover:bg-orange-600',
//   },
  {
    icon: '💬',
    title: 'Parent–Teacher Communication',
    description:
      'Create a clear communication channel between parents and teachers about the student.',
    linkText: 'Connect',
    to: '/parent-teacher-connect',
    tone: 'cyan',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
    iconText: 'text-cyan-600 dark:text-cyan-300',
    border: 'border-cyan-100 dark:border-cyan-900/50',
    hoverBorder: 'hover:border-cyan-300 dark:hover:border-cyan-700',
    button: 'bg-cyan-600 hover:bg-cyan-700',
  },
  {
    icon: '🚨',
    title: 'Raise a Concern',
    description:
      'Students and parents can report an issue or concern that requires attention and support.',
    linkText: 'Raise Concern',
    to: '/raise-concern',
    tone: 'rose',
    iconBg: 'bg-rose-100 dark:bg-rose-900/40',
    iconText: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-100 dark:border-rose-900/50',
    hoverBorder: 'hover:border-rose-300 dark:hover:border-rose-700',
    button: 'bg-rose-600 hover:bg-rose-700',
  },
]

function SupportCard({ option }) {
  return (
    <div
      className={`
        group relative flex h-full flex-col overflow-hidden
        rounded-[22px]
        border ${option.border}
        bg-white/95 dark:bg-ink-900/70
        p-6
        shadow-[0_12px_35px_rgba(30,100,180,0.07)]
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1
        ${option.hoverBorder}
        hover:shadow-[0_20px_45px_rgba(30,100,180,0.12)]
      `}
    >
      {/* Decorative background */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50/50 dark:bg-blue-500/10 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex h-full flex-col">
        {/* Icon */}
        <div
          className={`
            mb-5 flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-2xl
            ${option.iconBg}
            text-2xl
            ${option.iconText}
            transition-transform duration-300
            group-hover:scale-105
          `}
        >
          {option.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {option.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-ink-300">
            {option.description}
          </p>
        </div>

        {/* Action */}
        <div className="mt-6">
          <Link
            to={option.to}
            className={`
              inline-flex
              items-center
              gap-2
              rounded-xl
              px-4
              py-2.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              ${option.button}
              group-hover:gap-3
            `}
          >
            {option.linkText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function TrustPoint({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 text-lg">
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-ink-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function StudentSupportFeedback() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff] dark:from-ink-950 dark:via-ink-950 dark:to-ink-900">
      <SectionBackground
        variant="mesh"
        tone="brand"
        intensity={0.25}
      />

      <Container>
        <div className="relative z-10">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-300">
              Student Support
            </p>

            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Student Support{' '}
              <span className="text-blue-600">
                &amp; Feedback
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-ink-300 sm:text-lg">
              Open communication between students, parents, and teachers
              for a better, more transparent learning experience.
            </p>
          </div>

          {/* =====================================================
              MAIN CARDS
          ====================================================== */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_OPTIONS.map((option) => (
              <SupportCard
                key={option.title}
                option={option}
              />
            ))}
          </div>

          {/* =====================================================
              TRANSPARENCY PANEL
          ====================================================== */}
          <div className="mt-8 overflow-hidden rounded-[24px] border border-blue-100 bg-white/90 shadow-[0_15px_40px_rgba(30,100,180,0.08)] backdrop-blur-sm dark:border-ink-700 dark:bg-ink-900/70">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 p-7 text-white sm:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/10" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur-sm">
                    🤝
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                    Built around communication
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                    Everyone stays connected.
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-blue-50 sm:text-base">
                    Students, parents, and teachers can communicate,
                    share feedback, and stay informed about the learning
                    journey.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                    Transparent learning communication
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="grid gap-6 p-7 sm:grid-cols-2 sm:p-9">
                <TrustPoint
                  icon="🔎"
                  title="Clear Communication"
                  description="Important questions and feedback have a clear place to go."
                />

                <TrustPoint
                  icon="📈"
                  title="Progress Visibility"
                  description="Parents and students can stay informed about learning progress."
                />

                <TrustPoint
                  icon="🗣️"
                  title="Open Feedback"
                  description="Feedback can be shared by students, families, and teachers."
                />

                <TrustPoint
                  icon="🛡️"
                  title="Student Focused"
                  description="Communication stays focused on supporting the student's learning."
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}