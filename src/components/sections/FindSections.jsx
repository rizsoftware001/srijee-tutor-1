// // import React, { useState, useMemo } from 'react'
// // import { Link } from 'react-router-dom'
// // import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
// // import { SectionBackground } from '../common/SectionBackground.jsx'
// // import { Card, CardBody } from '../ui/Card.jsx'
// // import { Button } from '../ui/Button.jsx'
// // import { Badge } from '../ui/Badge.jsx'
// // import { classes, classGroups } from '../../data/classes.js'
// // import { boards } from '../../data/boards.js'
// // import { subjects } from '../../data/subjects.js'
// // // import { locations } from '../../data/locations.js'
// // import { SITE } from '../../config/site.js'

// // const TONES = {
// //   brand: 'bg-brand-50 text-brand-700 hover:bg-brand-100 hover:border-brand-300 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-900/50',
// //   accent: 'bg-accent-50 text-accent-700 hover:bg-accent-100 hover:border-accent-300 dark:bg-accent-900/30 dark:text-accent-300 dark:hover:bg-accent-900/50',
// //   success: 'bg-success-50 text-success-700 hover:bg-success-100 hover:border-success-300 dark:bg-success-900/30 dark:text-success-300 dark:hover:bg-success-900/50',
// //   warning: 'bg-warning-50 text-warning-700 hover:bg-warning-100 hover:border-warning-300 dark:bg-warning-900/30 dark:text-warning-300 dark:hover:bg-warning-900/50',
// //   danger: 'bg-danger-50 text-danger-700 hover:bg-danger-100 hover:border-danger-300 dark:bg-danger-900/30 dark:text-danger-300 dark:hover:bg-danger-900/50',
// //   ink: 'bg-ink-50 text-ink-700 hover:bg-ink-100 hover:border-ink-300 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700',
// // }

// // function Chip({ to, label, tone = 'brand' }) {
// //   return (
// //     <Link
// //       to={to}
// //       className={`inline-flex items-center rounded-lg border border-transparent px-3.5 py-2 text-sm font-medium transition-colors ${TONES[tone] || TONES.brand}`}
// //     >
// //       {label}
// //     </Link>
// //   )
// // }

// // /* ──────────────────────────────────────────────────────────────────
// //    FIND BY CLASS — now with rich right-side "Learning Journey" panel
// //    ────────────────────────────────────────────────────────────────── */

// // const JOURNEY = [
// //   {
// //     icon: '🌱',
// //     group: 'Primary',
// //     range: 'Class I – V',
// //     title: 'Building Foundations',
// //     focus: ['Reading & writing', 'Maths basics', 'Curiosity & habits'],
// //     tone: 'success',
// //   },
// //   {
// //     icon: '📚',
// //     group: 'Middle School',
// //     range: 'Class VI – VIII',
// //     title: 'Expanding Horizons',
// //     focus: ['Science & SST', 'Languages', 'Concept clarity'],
// //     tone: 'brand',
// //   },
// //   {
// //     icon: '🎯',
// //     group: 'Secondary',
// //     range: 'Class IX – X',
// //     title: 'Board Year Focus',
// //     focus: ['Board prep', 'Regular tests', 'Strong concepts'],
// //     tone: 'warning',
// //   },
// //   {
// //     icon: '🚀',
// //     group: 'Higher Secondary',
// //     range: 'Class XI – XII',
// //     title: 'Career Launchpad',
// //     focus: ['Stream specialisation', 'JEE / NEET / Boards', 'Career guidance'],
// //     tone: 'accent',
// //   },
// // ]

// // // export function FindByClass() {
// // //   return (
// // //     <Section className="relative section-surface-brand">
// // //       <SectionBackground variant="mesh" tone="brand" intensity={0.6} />
// // //       <Container>
// // //         <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
// // //           {/* Left — heading + chips */}
// // //           <div className="lg:col-span-7">
// // //             <SectionHeading
// // //               eyebrow="Find by Class"
// // //               title="Tuition for every grade"
// // //               description="From primary foundations to board-year specialisation — find a tutor who teaches your class."
// // //               align="left"
// // //               action={<Link to="/classes" className="btn-secondary btn-md">View all classes →</Link>}
// // //             />
// // //             <div className="mt-8 space-y-6">
// // //               {classGroups.map((group) => {
// // //                 const journey = JOURNEY.find((j) => j.group === group)
// // //                 return (
// // //                   <div key={group} className="group">
// // //                     <div className="mb-3 flex items-center gap-2">
// // //                       <span className="text-base">{journey?.icon}</span>
// // //                       <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-300">{group}</p>
// // //                       <span className="text-2xs text-ink-400 dark:text-ink-300">· {journey?.range}</span>
// // //                     </div>
// // //                     <div className="flex flex-wrap gap-2">
// // //                       {classes.filter((c) => c.group === group).map((c) => (
// // //                         <Chip key={c.slug} to={`/classes?class=${c.slug}`} label={c.label} tone={journey?.tone} />
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* Right — Learning Journey companion panel */}
// // //           <div className="lg:col-span-5 lg:sticky lg:top-24">
// // //             <Card className="glow-border overflow-hidden">
// // //               <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white relative overflow-hidden">
// // //                 <div className="absolute inset-0 grid-pattern opacity-20" />
// // //                 <div className="relative">
// // //                   <div className="flex items-center justify-between">
// // //                     <h3 className="font-display text-lg font-bold">Your Learning Journey</h3>
// // //                     <Badge tone="ink" size="xs" className="!bg-white/20 !text-white">Class I → XII</Badge>
// // //                   </div>
// // //                   <p className="mt-1 text-sm text-brand-100">How Srijee supports every stage of school life.</p>
// // //                 </div>
// // //               </div>
// // //               <CardBody className="!p-0">
// // //                 <ol className="relative">
// // //                   {/* Vertical connector line */}
// // //                   <span className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-accent-300 dark:from-brand-700 dark:via-brand-700 dark:to-accent-700" aria-hidden="true" />
// // //                   {JOURNEY.map((stage, i) => (
// // //                     <li key={stage.group} className="relative flex gap-4 p-5 hover:bg-ink-50/60 dark:hover:bg-ink-800/40 transition-colors">
// // //                       <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-lg ring-4 ring-white dark:ring-ink-800 z-10 bg-${stage.tone}-100 dark:bg-${stage.tone}-900/40`}>
// // //                         {stage.icon}
// // //                       </span>
// // //                       <div className="flex-1 min-w-0">
// // //                         <div className="flex items-center justify-between gap-2">
// // //                           <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">{stage.title}</p>
// // //                           <span className="text-2xs text-ink-400 dark:text-ink-300">{stage.range}</span>
// // //                         </div>
// // //                         <p className="text-2xs text-brand-700 dark:text-brand-400 font-medium uppercase tracking-wider mt-0.5">{stage.group}</p>
// // //                         <ul className="mt-2 flex flex-wrap gap-1.5">
// // //                           {stage.focus.map((f) => (
// // //                             <li key={f} className="chip bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-2xs">{f}</li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </li>
// // //                   ))}
// // //                 </ol>
// // //                 <div className="border-t border-ink-100 dark:border-ink-700 p-5 bg-ink-50/50 dark:bg-ink-800/30">
// // //                   <div className="flex items-center justify-between gap-3">
// // //                     <div>
// // //                       <p className="text-sm font-semibold text-ink-900 dark:text-white">Not sure which class?</p>
// // //                       <p className="text-xs text-ink-500 dark:text-ink-300">Our counsellor will guide you.</p>
// // //                     </div>
// // //                     <Button as="a" href={`tel:${SITE.phoneHref}`} variant="primary" size="sm" className="!px-3 whitespace-nowrap">
// // //                       📞 Call now
// // //                     </Button>
// // //                   </div>
// // //                 </div>
// // //               </CardBody>
// // //             </Card>

// // //             {/* Mini stats strip below the card */}
// // //             <div className="mt-4 grid grid-cols-3 gap-3">
// // //               <MiniStat value="12" label="Classes" tone="brand" />
// // //               <MiniStat value="5" label="Boards" tone="accent" />
// // //               <MiniStat value="20+" label="Subjects" tone="success" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </Container>
// // //     </Section>
// // //   )
// // // }
// // export function FindByClass() {
// //   const popularSubjects = subjects
// //     .filter((s) => s.popular)
// //     .slice(0, 8)

// //   return (
// //     <Section className="relative section-surface-brand">
// //       <SectionBackground variant="mesh" tone="brand" intensity={0.6} />

// //       <Container>
// //         <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

// //           {/* LEFT SIDE */}
// //           <div className="lg:col-span-7">

// //             <SectionHeading
// //               eyebrow="Explore Tuition"
// //               title="Tuition for every grade"
// //               description="Find the right tutor by class, board, or subject."
// //               align="left"
// //             />

// //             {/* 3 SMALL CONTAINERS */}
// //             <div className="mt-7 grid gap-4 sm:grid-cols-3">

// //               {/* FIND BY CLASS */}
// //               <div className="card card-hover p-4">
// //                 <div className="flex items-center gap-2">
// //                   <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-base dark:bg-brand-900/30">
// //                     🎓
// //                   </span>

// //                   <div>
// //                     <p className="text-2xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
// //                       Find by
// //                     </p>
// //                     <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
// //                       Class
// //                     </h3>
// //                   </div>
// //                 </div>

// //                 <div className="mt-4 space-y-3">
// //                   {classGroups.map((group) => (
// //                     <div key={group}>
// //                       <p className="mb-1.5 text-2xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-400">
// //                         {group}
// //                       </p>

// //                       <div className="flex flex-wrap gap-1.5">
// //                         {classes
// //                           .filter((c) => c.group === group)
// //                           .map((c) => (
// //                             <Link
// //                               key={c.slug}
// //                               to={`/classes?class=${c.slug}`}
// //                               className="rounded-md bg-brand-50 px-2 py-1 text-2xs font-medium text-brand-700 transition-colors hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-900/50"
// //                             >
// //                               {c.label}
// //                             </Link>
// //                           ))}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <Link
// //                   to="/classes"
// //                   className="mt-4 inline-flex text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400"
// //                 >
// //                   All classes →
// //                 </Link>
// //               </div>

// //               {/* FIND BY BOARD */}
// //               <div className="card card-hover p-4">
// //                 <div className="flex items-center gap-2">
// //                   <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-base dark:bg-accent-900/30">
// //                     📚
// //                   </span>

// //                   <div>
// //                     <p className="text-2xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
// //                       Find by
// //                     </p>
// //                     <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
// //                       Board
// //                     </h3>
// //                   </div>
// //                 </div>

// //                 <div className="mt-4 space-y-2">
// //                   {boards.map((board) => (
// //                     <Link
// //                       key={board.slug}
// //                       to={`/boards?board=${board.slug}`}
// //                       className="flex items-center gap-2 rounded-lg bg-ink-50 px-2.5 py-2 transition-colors hover:bg-accent-50 dark:bg-ink-800 dark:hover:bg-accent-900/30"
// //                     >
// //                       <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent-100 text-2xs font-bold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
// //                         {board.label.slice(0, 2)}
// //                       </span>

// //                       <div className="min-w-0">
// //                         <p className="truncate text-xs font-semibold text-ink-800 dark:text-white">
// //                           {board.label}
// //                         </p>

// //                         <p className="truncate text-2xs text-ink-400 dark:text-ink-400">
// //                           {board.desc}
// //                         </p>
// //                       </div>
// //                     </Link>
// //                   ))}
// //                 </div>

// //                 <Link
// //                   to="/boards"
// //                   className="mt-4 inline-flex text-xs font-semibold text-accent-600 hover:underline dark:text-accent-400"
// //                 >
// //                   All boards →
// //                 </Link>
// //               </div>

// //               {/* FIND BY SUBJECT */}
// //               <div className="card card-hover p-4">
// //                 <div className="flex items-center gap-2">
// //                   <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success-50 text-base dark:bg-success-900/30">
// //                     📖
// //                   </span>

// //                   <div>
// //                     <p className="text-2xs font-semibold uppercase tracking-wider text-success-600 dark:text-success-400">
// //                       Find by
// //                     </p>
// //                     <h3 className="font-display text-sm font-bold text-ink-900 dark:text-white">
// //                       Subject
// //                     </h3>
// //                   </div>
// //                 </div>

// //                 <div className="mt-4 grid grid-cols-1 gap-2">
// //                   {popularSubjects.map((subject) => (
// //                     <Link
// //                       key={subject.slug}
// //                       to={`/subjects?subject=${subject.slug}`}
// //                       className="flex items-center gap-2 rounded-lg bg-ink-50 px-2.5 py-2 transition-colors hover:bg-success-50 dark:bg-ink-800 dark:hover:bg-success-900/30"
// //                     >
// //                       <span className="flex-none text-sm">
// //                         {subject.icon}
// //                       </span>

// //                       <span className="truncate text-xs font-medium text-ink-700 dark:text-ink-200">
// //                         {subject.label}
// //                       </span>
// //                     </Link>
// //                   ))}
// //                 </div>

// //                 <Link
// //                   to="/subjects"
// //                   className="mt-4 inline-flex text-xs font-semibold text-success-600 hover:underline dark:text-success-400"
// //                 >
// //                   All subjects →
// //                 </Link>
// //               </div>

// //             </div>
// //           </div>

// //           {/* RIGHT SIDE — KEEP LEARNING JOURNEY */}
// //           <div className="lg:col-span-5 lg:sticky lg:top-24">

// //             <Card className="glow-border overflow-hidden">

// //               <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white">
// //                 <div className="absolute inset-0 grid-pattern opacity-20" />

// //                 <div className="relative">
// //                   <div className="flex items-center justify-between">
// //                     <h3 className="font-display text-lg font-bold">
// //                       Your Learning Journey
// //                     </h3>

// //                     <Badge
// //                       tone="ink"
// //                       size="xs"
// //                       className="!bg-white/20 !text-white"
// //                     >
// //                       Class I → XII
// //                     </Badge>
// //                   </div>

// //                   <p className="mt-1 text-sm text-brand-100">
// //                     How Srijee supports every stage of school life.
// //                   </p>
// //                 </div>
// //               </div>

// //               <CardBody className="!p-0">
// //                 <ol className="relative">

// //                   <span
// //                     className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-accent-300 dark:from-brand-700 dark:via-brand-700 dark:to-accent-700"
// //                     aria-hidden="true"
// //                   />

// //                   {JOURNEY.map((stage) => (
// //                     <li
// //                       key={stage.group}
// //                       className="relative flex gap-4 p-5 transition-colors hover:bg-ink-50/60 dark:hover:bg-ink-800/40"
// //                     >
// //                       <span
// //                         className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-lg ring-4 ring-white dark:ring-ink-800 z-10 bg-${stage.tone}-100 dark:bg-${stage.tone}-900/40`}
// //                       >
// //                         {stage.icon}
// //                       </span>

// //                       <div className="min-w-0 flex-1">
// //                         <div className="flex items-center justify-between gap-2">
// //                           <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
// //                             {stage.title}
// //                           </p>

// //                           <span className="text-2xs text-ink-400 dark:text-ink-300">
// //                             {stage.range}
// //                           </span>
// //                         </div>

// //                         <p className="mt-0.5 text-2xs font-medium uppercase tracking-wider text-brand-700 dark:text-brand-400">
// //                           {stage.group}
// //                         </p>

// //                         <ul className="mt-2 flex flex-wrap gap-1.5">
// //                           {stage.focus.map((f) => (
// //                             <li
// //                               key={f}
// //                               className="chip bg-ink-100 text-2xs text-ink-600 dark:bg-ink-800 dark:text-ink-300"
// //                             >
// //                               {f}
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     </li>
// //                   ))}

// //                 </ol>

// //                 <div className="border-t border-ink-100 bg-ink-50/50 p-5 dark:border-ink-700 dark:bg-ink-800/30">
// //                   <div className="flex items-center justify-between gap-3">
// //                     <div>
// //                       <p className="text-sm font-semibold text-ink-900 dark:text-white">
// //                         Not sure which class?
// //                       </p>

// //                       <p className="text-xs text-ink-500 dark:text-ink-300">
// //                         Our counsellor will guide you.
// //                       </p>
// //                     </div>

// //                     <Button
// //                       as="a"
// //                       href={`tel:${SITE.phoneHref}`}
// //                       variant="primary"
// //                       size="sm"
// //                       className="!px-3 whitespace-nowrap"
// //                     >
// //                       📞 Call now
// //                     </Button>
// //                   </div>
// //                 </div>

// //               </CardBody>
// //             </Card>

// //             {/* Mini stats */}
// //             <div className="mt-4 grid grid-cols-3 gap-3">
// //               <MiniStat value="12" label="Classes" tone="brand" />
// //               <MiniStat value="5" label="Boards" tone="accent" />
// //               <MiniStat value="20+" label="Subjects" tone="success" />
// //             </div>

// //           </div>
// //         </div>
// //       </Container>
// //     </Section>
// //   )
// // }



// // function MiniStat({ value, label, tone }) {
// //   const tones = {
// //     brand: 'text-brand-600 dark:text-brand-400',
// //     accent: 'text-accent-600 dark:text-accent-400',
// //     success: 'text-success-600 dark:text-success-400',
// //   }
// //   return (
// //     <div className="card p-3 text-center">
// //       <p className={`font-display text-xl font-bold ${tones[tone]}`}>{value}</p>
// //       <p className="text-2xs text-ink-500 dark:text-ink-300">{label}</p>
// //     </div>
// //   )
// // }

// // /* ──────────────────────────────────────────────────────────────────
// //    FIND BY BOARD
// //    ────────────────────────────────────────────────────────────────── */

// // export function FindByBoard() {
// //   return (
// //     <Section tone="subtle" className="relative">
// //       <SectionBackground variant="rings" tone="teal" intensity={0.5} />
// //       <Container>
// //         <SectionHeading
// //           eyebrow="Find by Board"
// //           title="Board-specific tuition"
// //           description="Tutors who understand your syllabus, exam pattern, and marking scheme."
// //           align="left"
// //           action={<Link to="/boards" className="btn-secondary btn-md">View all boards →</Link>}
// //         />
// //         <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
// //           {boards.map((b) => (
// //             <Link
// //               key={b.slug}
// //               to={`/boards?board=${b.slug}`}
// //               className="card card-hover p-5 group"
// //             >
// //               <div className="flex items-start justify-between">
// //                 <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-${b.color}-100 text-${b.color}-700 dark:bg-${b.color}-900/40 dark:text-${b.color}-300 text-sm font-bold group-hover:scale-110 transition-transform`}>
// //                   {b.label.slice(0, 2)}
// //                 </span>
// //                 {b.popular && <Badge tone="brand" size="xs">Popular</Badge>}
// //               </div>
// //               <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">{b.label}</h3>
// //               <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">{b.desc}</p>
// //             </Link>
// //           ))}
// //         </div>
// //       </Container>
// //     </Section>
// //   )
// // }

// // /* ──────────────────────────────────────────────────────────────────
// //    FIND BY SUBJECT
// //    ────────────────────────────────────────────────────────────────── */

// // export function FindBySubject() {
// //   const [showAll, setShowAll] = useState(false)
// //   const list = useMemo(
// //     () => (showAll ? subjects : subjects.filter((s) => s.popular).slice(0, 12)),
// //     [showAll]
// //   )
// //   return (
// //     <Section className="relative section-surface-accent">
// //       <SectionBackground variant="grid" tone="accent" intensity={0.4} />
// //       <SectionBackground variant="glow" tone="success" corner="bottom-right" intensity={0.4} />
// //       <Container>
// //         <SectionHeading
// //           eyebrow="Find by Subject"
// //           title="Subject-wise expert tutors"
// //           description="Pick a subject — get matched with tutors who specialise in it."
// //           align="left"
// //           action={<Link to="/subjects" className="btn-secondary btn-md">View all subjects →</Link>}
// //         />
// //         <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
// //           {list.map((s) => (
// //             <Link
// //               key={s.slug}
// //               to={`/subjects?subject=${s.slug}`}
// //               className="card card-hover flex items-center gap-3 p-4 group"
// //             >
// //               <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30 text-base font-semibold text-brand-700 dark:text-brand-300 group-hover:scale-110 transition-transform">
// //                 {s.icon}
// //               </span>
// //               <div className="min-w-0">
// //                 <p className="text-sm font-medium text-ink-900 dark:text-white truncate">{s.label}</p>
// //                 {s.popular
// //                   ? <p className="text-2xs text-brand-600 dark:text-brand-400">Popular</p>
// //                   : <p className="text-2xs text-ink-400 dark:text-ink-300">{s.group}</p>}
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //         {!showAll && subjects.length > 12 && (
// //           <div className="mt-6 text-center">
// //             <button onClick={() => setShowAll(true)} className="btn-ghost btn-md">
// //               Show all {subjects.length} subjects
// //             </button>
// //           </div>
// //         )}
// //       </Container>
// //     </Section>
// //   )
// // }

// import React, { useMemo, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { Card, CardBody } from '../ui/Card.jsx'
// import { Button } from '../ui/Button.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { classes, classGroups } from '../../data/classes.js'
// import { boards } from '../../data/boards.js'
// import { subjects } from '../../data/subjects.js'
// import { SITE } from '../../config/site.js'

// const JOURNEY = [
//   {
//     icon: '🌱',
//     group: 'Primary',
//     range: 'Class I – V',
//     title: 'Building Foundations',
//     focus: ['Reading & writing', 'Maths basics', 'Curiosity & habits'],
//   },
//   {
//     icon: '📚',
//     group: 'Middle School',
//     range: 'Class VI – VIII',
//     title: 'Expanding Horizons',
//     focus: ['Science & SST', 'Languages', 'Concept clarity'],
//   },
//   {
//     icon: '🎯',
//     group: 'Secondary',
//     range: 'Class IX – X',
//     title: 'Board Year Focus',
//     focus: ['Board prep', 'Regular tests', 'Strong concepts'],
//   },
//   {
//     icon: '🚀',
//     group: 'Higher Secondary',
//     range: 'Class XI – XII',
//     title: 'Career Launchpad',
//     focus: ['Stream specialisation', 'JEE / NEET / Boards', 'Career guidance'],
//   },
// ]

// const CLASS_TONES = {
//   Primary: 'bg-blue-50 text-blue-700 border-blue-100',
//   'Middle School': 'bg-green-50 text-green-700 border-green-100',
//   Secondary: 'bg-amber-50 text-amber-700 border-amber-100',
//   'Higher Secondary': 'bg-purple-50 text-purple-700 border-purple-100',
// }

// const BOARD_TONES = [
//   'bg-red-50 text-red-600',
//   'bg-purple-50 text-purple-600',
//   'bg-blue-50 text-blue-600',
//   'bg-green-50 text-green-600',
//   'bg-amber-50 text-amber-700',
// ]

// const SUBJECT_ICONS = ['⚛', '🧪', '∑', '🌿', '💻', 'A']

// function MiniClassCard() {
//   return (
//     <div className="relative h-full min-h-[560px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/90 p-7 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-blue-50/80" />
//       <div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-blue-50/70" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl">
//             🎓
//           </div>
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Find by</p>
//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">Class</h3>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {classGroups.map((group) => {
//             const journey = JOURNEY.find((item) => item.group === group)
//             const tone = CLASS_TONES[group] || 'bg-blue-50 text-blue-700 border-blue-100'

//             return (
//               <div key={group}>
//                 <div className="mb-3 flex items-center gap-2">
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
//                     {group}
//                   </span>
//                   <span className="text-xs text-slate-400">· {journey?.range}</span>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {classes
//                     .filter((item) => item.group === group)
//                     .map((item) => (
//                       <Link
//                         key={item.slug}
//                         to={`/classes?class=${item.slug}`}
//                         className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${tone}`}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         <Link
//           to="/classes"
//           className="absolute bottom-0 left-0 text-sm font-bold text-blue-600 hover:text-blue-700"
//         >
//           All classes →
//         </Link>
//       </div>
//     </div>
//   )
// }

// function MiniBoardCard() {
//   const visibleBoards = boards.slice(0, 5)

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/90 p-7 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl">
//             📖
//           </div>
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">Find by</p>
//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">Board</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-2.5">
//           {visibleBoards.map((board, index) => (
//             <Link
//               key={board.slug}
//               to={`/boards?board=${board.slug}`}
//               className={`flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold ${BOARD_TONES[index % BOARD_TONES.length]}`}
//             >
//               <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[10px] font-extrabold">
//                 {board.label.slice(0, 2)}
//               </span>
//               <span className="truncate">{board.label}</span>
//             </Link>
//           ))}
//         </div>

//         <Link
//           to="/boards"
//           className="mt-5 inline-block text-sm font-bold text-orange-600 hover:text-orange-700"
//         >
//           All boards →
//         </Link>
//       </div>
//     </div>
//   )
// }

// function MiniSubjectCard() {
//   const [showAll, setShowAll] = useState(false)

//   const visibleSubjects = useMemo(() => {
//     const popular = subjects.filter((item) => item.popular)
//     return (showAll ? popular : popular.slice(0, 6))
//   }, [showAll])

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-cyan-100 bg-white/90 p-7 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-green-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl">
//             📗
//           </div>
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">Find by</p>
//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">Subject</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-2.5">
//           {visibleSubjects.map((subject, index) => (
//             <Link
//               key={subject.slug}
//               to={`/subjects?subject=${subject.slug}`}
//               className="flex min-w-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
//             >
//               <span className="shrink-0 text-sm">{subject.icon || SUBJECT_ICONS[index % SUBJECT_ICONS.length]}</span>
//               <span className="truncate">{subject.label}</span>
//             </Link>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowAll((value) => !value)}
//           className="mt-5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
//         >
//           {showAll ? 'Show less ←' : 'All subjects →'}
//         </button>
//       </div>
//     </div>
//   )
// }

// function LearningJourney() {
//   return (
//     <div className="lg:sticky lg:top-24">
//       <Card className="overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)]">
//         <div className="relative overflow-hidden bg-gradient-to-br from-[#0787c9] to-[#0871aa] px-7 py-6 text-white">
//           <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
//           <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

//           <div className="relative">
//             <div className="flex items-center justify-between gap-4">
//               <h3 className="font-display text-xl font-bold">Your Learning Journey</h3>
//               <Badge tone="ink" size="xs" className="!bg-white/15 !text-white !ring-1 !ring-white/40">
//                 Class I → XII
//               </Badge>
//             </div>
//             <p className="mt-2 text-sm text-blue-50">
//               How Srijee supports every stage of school life.
//             </p>
//           </div>
//         </div>

//         <CardBody className="!p-0">
//           <ol className="relative">
//             <span
//               className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-200 via-cyan-200 to-purple-200"
//               aria-hidden="true"
//             />

//             {JOURNEY.map((stage) => (
//   <li
//     key={stage.group}
//     className="relative flex gap-3 px-4 py-3 hover:bg-ink-50/60 dark:hover:bg-ink-800/40 transition-colors"
//   >
//     <span
//       className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-base ring-4 ring-white dark:ring-ink-800 z-10 bg-${stage.tone}-100 dark:bg-${stage.tone}-900/40`}
//     >
//       {stage.icon}
//     </span>

//     <div className="flex-1 min-w-0">
//       <div className="flex items-center justify-between gap-2">
//         <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
//           {stage.title}
//         </p>

//         <span className="text-[10px] text-ink-400 dark:text-ink-300 whitespace-nowrap">
//           {stage.range}
//         </span>
//       </div>

//       <p className="text-[10px] text-brand-700 dark:text-brand-400 font-semibold uppercase tracking-wider mt-0.5">
//         {stage.group}
//       </p>

//       <ul className="mt-1.5 flex flex-wrap gap-1">
//         {stage.focus.map((f) => (
//           <li
//             key={f}
//             className="rounded-full bg-ink-100 dark:bg-ink-800 px-2 py-0.5 text-[10px] text-ink-600 dark:text-ink-300"
//           >
//             {f}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </li>
// ))}
//           </ol>

//           <div className="border-t border-slate-100 bg-blue-50/50 px-7 py-5">
//             <div className="flex items-center justify-between gap-4">
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Not sure which class?</p>
//                 <p className="mt-0.5 text-xs text-slate-500">Our counsellor will guide you.</p>
//               </div>

//               <Button
//                 as="a"
//                 href={`tel:${SITE.phoneHref}`}
//                 variant="primary"
//                 size="sm"
//                 className="shrink-0 !rounded-xl !px-4"
//               >
//                 📞 Call now
//               </Button>
//             </div>
//           </div>
//         </CardBody>
//       </Card>

//       <div className="mt-4 grid grid-cols-3 gap-3">
//         <JourneyStat value="12" label="Classes" className="border-blue-100 bg-blue-50/50" />
//         <JourneyStat value="5" label="Boards" className="border-orange-100 bg-orange-50/50" />
//         <JourneyStat value="20+" label="Subjects" className="border-green-100 bg-green-50/50" />
//       </div>
//     </div>
//   )
// }

// function JourneyStat({ value, label, className }) {
//   return (
//     <div className={`rounded-2xl border px-4 py-4 text-center shadow-sm ${className}`}>
//       <p className="font-display text-xl font-bold text-blue-600">{value}</p>
//       <p className="mt-0.5 text-[11px] text-slate-500">{label}</p>
//     </div>
//   )
// }

// /* Main combined section */
// export function FindByClass() {
//   return (
//     <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff]">
//       <SectionBackground variant="mesh" tone="brand" intensity={0.25} />

//       <Container>
//         <div className="relative z-10">
//           {/* Heading */}
//           <div className="mb-9 max-w-3xl">
//             <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
//               Explore tuition
//             </p>

//             <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Tuition for <span className="text-blue-600">every grade</span>
//             </h2>

//             <p className="mt-3 text-base text-slate-600 sm:text-lg">
//               Find the right tutor by class, board, or subject.
//             </p>
//           </div>

//           {/* Exact visual relationship:
//               Class = tall left card
//               Board = top middle card
//               Subject = bottom middle card
//               Learning Journey = tall right card
//           */}
//           <div className="grid items-stretch gap-6 lg:grid-cols-12">
//             <div className="lg:col-span-4">
//               <MiniClassCard />
//             </div>

//             <div className="flex flex-col gap-6 lg:col-span-4">
//               <MiniBoardCard />
//               <MiniSubjectCard />
//             </div>

//             <div className="lg:col-span-4">
//               <LearningJourney />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

// /*
//   The old standalone sections are intentionally disabled because
//   FindByClass now contains Class + Board + Subject in one section.
//   Keep these exports so existing imports do not break.
// */
// export function FindByBoard() {
//   return null
// }

// export function FindBySubject() {
//   return null
// }

// export default FindByClass





// import React, { useMemo, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { Card, CardBody } from '../ui/Card.jsx'
// import { Button } from '../ui/Button.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { classes, classGroups } from '../../data/classes.js'
// import { boards } from '../../data/boards.js'
// import { subjects } from '../../data/subjects.js'
// import { SITE } from '../../config/site.js'

// const JOURNEY = [
//   {
//     icon: '🌱',
//     group: 'Primary',
//     range: 'Class I – V',
//     title: 'Building Foundations',
//     focus: ['Reading & writing', 'Maths basics', 'Curiosity & habits'],
//     tone: 'blue',
//   },
//   {
//     icon: '📚',
//     group: 'Middle School',
//     range: 'Class VI – VIII',
//     title: 'Expanding Horizons',
//     focus: ['Science & SST', 'Languages', 'Concept clarity'],
//     tone: 'green',
//   },
//   {
//     icon: '🎯',
//     group: 'Secondary',
//     range: 'Class IX – X',
//     title: 'Board Year Focus',
//     focus: ['Board prep', 'Regular tests', 'Strong concepts'],
//     tone: 'amber',
//   },
//   {
//     icon: '🚀',
//     group: 'Higher Secondary',
//     range: 'Class XI – XII',
//     title: 'Career Launchpad',
//     focus: ['Stream specialisation', 'JEE / NEET / Boards', 'Career guidance'],
//     tone: 'purple',
//   },
// ]

// const CLASS_TONES = {
//   Primary: 'bg-blue-50 text-blue-700 border-blue-100',
//   'Middle School': 'bg-green-50 text-green-700 border-green-100',
//   Secondary: 'bg-amber-50 text-amber-700 border-amber-100',
//   'Higher Secondary': 'bg-purple-50 text-purple-700 border-purple-100',
// }

// const BOARD_TONES = [
//   'bg-red-50 text-red-600',
//   'bg-purple-50 text-purple-600',
//   'bg-blue-50 text-blue-600',
//   'bg-green-50 text-green-600',
//   'bg-amber-50 text-amber-700',
// ]

// const SUBJECT_ICONS = ['⚛', '🧪', '∑', '🌿', '💻', 'A']

// /* =========================================================
//    Find By Class
//    Same main Card container style as Learning Journey
// ========================================================= */

// function MiniClassCard() {
//   return (
//     <Card className="h-full min-h-[560px] overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)]">
//       {/* Header - same container style as Learning Journey */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-[#0787c9] to-[#0871aa] px-7 py-6 text-white">
//         <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
//         <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

//         <div className="relative">
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl ring-1 ring-white/20">
//                 🎓
//               </div>

//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">
//                   Find by
//                 </p>

//                 <h3 className="font-display text-xl font-bold">
//                   Class
//                 </h3>
//               </div>
//             </div>

//             <Badge
//               tone="ink"
//               size="xs"
//               className="!bg-white/15 !text-white !ring-1 !ring-white/40"
//             >
//               Class I → XII
//             </Badge>
//           </div>

//           <p className="mt-2 text-sm text-blue-50">
//             Choose your class and explore the right tuition options.
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//       <CardBody className="relative !p-0">
//         <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-blue-50/70" />
//         <div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-cyan-50/60" />

//         <div className="relative p-7">
//           <div className="space-y-6">
//             {classGroups.map((group) => {
//               const journey = JOURNEY.find((item) => item.group === group)
//               const tone =
//                 CLASS_TONES[group] ||
//                 'bg-blue-50 text-blue-700 border-blue-100'

//               return (
//                 <div key={group}>
//                   <div className="mb-3 flex items-center gap-2">
//                     <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
//                       {group}
//                     </span>

//                     <span className="text-xs text-slate-400">
//                       · {journey?.range}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {classes
//                       .filter((item) => item.group === group)
//                       .map((item) => (
//                         <Link
//                           key={item.slug}
//                           to={`/classes?class=${item.slug}`}
//                           className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${tone}`}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           <Link
//             to="/classes"
//             className="mt-7 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
//           >
//             All classes →
//           </Link>
//         </div>
//       </CardBody>
//     </Card>
//   )
// }

// /* =========================================================
//    Find By Board
// ========================================================= */

// function MiniBoardCard() {
//   const visibleBoards = boards.slice(0, 5)

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/90 p-7 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl">
//             📖
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
//               Find by
//             </p>

//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">
//               Board
//             </h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-2.5">
//           {visibleBoards.map((board, index) => (
//             <Link
//               key={board.slug}
//               to={`/boards?board=${board.slug}`}
//               className={`flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold ${BOARD_TONES[index % BOARD_TONES.length]}`}
//             >
//               <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[10px] font-extrabold">
//                 {board.label.slice(0, 2)}
//               </span>

//               <span className="truncate">
//                 {board.label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <Link
//           to="/boards"
//           className="mt-5 inline-block text-sm font-bold text-orange-600 hover:text-orange-700"
//         >
//           All boards →
//         </Link>
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Find By Subject
// ========================================================= */

// function MiniSubjectCard() {
//   const [showAll, setShowAll] = useState(false)

//   const visibleSubjects = useMemo(() => {
//     const popular = subjects.filter((item) => item.popular)

//     return showAll
//       ? popular
//       : popular.slice(0, 6)
//   }, [showAll])

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-cyan-100 bg-white/90 p-7 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-green-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl">
//             📗
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">
//               Find by
//             </p>

//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">
//               Subject
//             </h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-2.5">
//           {visibleSubjects.map((subject, index) => (
//             <Link
//               key={subject.slug}
//               to={`/subjects?subject=${subject.slug}`}
//               className="flex min-w-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
//             >
//               <span className="shrink-0 text-sm">
//                 {subject.icon ||
//                   SUBJECT_ICONS[index % SUBJECT_ICONS.length]}
//               </span>

//               <span className="truncate">
//                 {subject.label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowAll((value) => !value)}
//           className="mt-5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
//         >
//           {showAll ? 'Show less ←' : 'All subjects →'}
//         </button>
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Learning Journey
// ========================================================= */

// function LearningJourney() {
//   return (
//     <div className="lg:sticky lg:top-24">
//       <Card className="overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)]">
//         <div className="relative overflow-hidden bg-gradient-to-br from-[#0787c9] to-[#0871aa] px-7 py-6 text-white">
//           <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
//           <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

//           <div className="relative">
//             <div className="flex items-center justify-between gap-4">
//               <h3 className="font-display text-xl font-bold">
//                 Your Learning Journey
//               </h3>

//               <Badge
//                 tone="ink"
//                 size="xs"
//                 className="!bg-white/15 !text-white !ring-1 !ring-white/40"
//               >
//                 Class I → XII
//               </Badge>
//             </div>

//             <p className="mt-2 text-sm text-blue-50">
//               How Srijee supports every stage of school life.
//             </p>
//           </div>
//         </div>

//         <CardBody className="!p-0">
//           <ol className="relative">
//             <span
//               className="absolute bottom-8 left-[39px] top-8 w-px bg-gradient-to-b from-blue-200 via-cyan-200 to-purple-200"
//               aria-hidden="true"
//             />

//             {JOURNEY.map((stage) => {
//               const toneClasses = {
//                 blue: 'bg-blue-100',
//                 green: 'bg-green-100',
//                 amber: 'bg-amber-100',
//                 purple: 'bg-purple-100',
//               }

//               const iconTone =
//                 toneClasses[stage.tone] || 'bg-blue-100'

//               return (
//                 <li
//                   key={stage.group}
//                   className="relative flex gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
//                 >
//                   <span
//                     className={`z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full text-base ring-4 ring-white ${iconTone}`}
//                   >
//                     {stage.icon}
//                   </span>

//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-center justify-between gap-2">
//                       <p className="font-display text-sm font-semibold text-slate-900">
//                         {stage.title}
//                       </p>

//                       <span className="whitespace-nowrap text-[10px] text-slate-400">
//                         {stage.range}
//                       </span>
//                     </div>

//                     <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
//                       {stage.group}
//                     </p>

//                     <ul className="mt-1.5 flex flex-wrap gap-1">
//                       {stage.focus.map((f) => (
//                         <li
//                           key={f}
//                           className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600"
//                         >
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               )
//             })}
//           </ol>

//           <div className="border-t border-slate-100 bg-blue-50/50 px-7 py-5">
//             <div className="flex items-center justify-between gap-4">
//               <div>
//                 <p className="text-sm font-bold text-slate-900">
//                   Not sure which class?
//                 </p>

//                 <p className="mt-0.5 text-xs text-slate-500">
//                   Our counsellor will guide you.
//                 </p>
//               </div>

//               <Button
//                 as="a"
//                 href={`tel:${SITE.phoneHref}`}
//                 variant="primary"
//                 size="sm"
//                 className="shrink-0 !rounded-xl !px-4"
//               >
//                 📞 Call now
//               </Button>
//             </div>
//           </div>
//         </CardBody>
//       </Card>

//       <div className="mt-4 grid grid-cols-3 gap-3">
//         <JourneyStat
//           value="12"
//           label="Classes"
//           className="border-blue-100 bg-blue-50/50"
//         />

//         <JourneyStat
//           value="5"
//           label="Boards"
//           className="border-orange-100 bg-orange-50/50"
//         />

//         <JourneyStat
//           value="20+"
//           label="Subjects"
//           className="border-green-100 bg-green-50/50"
//         />
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Journey Stats
// ========================================================= */

// function JourneyStat({ value, label, className }) {
//   return (
//     <div
//       className={`rounded-2xl border px-4 py-4 text-center shadow-sm ${className}`}
//     >
//       <p className="font-display text-xl font-bold text-blue-600">
//         {value}
//       </p>

//       <p className="mt-0.5 text-[11px] text-slate-500">
//         {label}
//       </p>
//     </div>
//   )
// }

// /* =========================================================
//    Main Combined Section
// ========================================================= */

// export function FindByClass() {
//   return (
//     <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff]">
//       <SectionBackground
//         variant="mesh"
//         tone="brand"
//         intensity={0.25}
//       />

//       <Container>
//         <div className="relative z-10">
//           {/* Heading */}
//           <div className="mb-9 max-w-3xl">
//             <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
//               Explore tuition
//             </p>

//             <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Tuition for{' '}
//               <span className="text-blue-600">
//                 every grade
//               </span>
//             </h2>

//             <p className="mt-3 text-base text-slate-600 sm:text-lg">
//               Find the right tutor by class, board, or subject.
//             </p>
//           </div>

//           {/* Layout:
//               Class = tall left card
//               Board = top middle card
//               Subject = bottom middle card
//               Learning Journey = tall right card
//           */}
//           <div className="grid items-stretch gap-6 lg:grid-cols-12">
//             {/* Find By Class */}
//             <div className="lg:col-span-4">
//               <MiniClassCard />
//             </div>

//             {/* Board + Subject */}
//             <div className="flex flex-col gap-6 lg:col-span-4">
//               <MiniBoardCard />
//               <MiniSubjectCard />
//             </div>

//             {/* Learning Journey */}
//             <div className="lg:col-span-4">
//               <LearningJourney />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

// /*
//   The old standalone sections are intentionally disabled because
//   FindByClass now contains Class + Board + Subject in one section.
//   Keep these exports so existing imports do not break.
// */

// export function FindByBoard() {
//   return null
// }

// export function FindBySubject() {
//   return null
// }

// export default FindByClass





// import React, { useMemo, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { Card, CardBody } from '../ui/Card.jsx'
// import { Button } from '../ui/Button.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { classes, classGroups } from '../../data/classes.js'
// import { boards } from '../../data/boards.js'
// import { subjects } from '../../data/subjects.js'
// import { SITE } from '../../config/site.js'

// const JOURNEY = [
//   {
//     icon: '🌱',
//     group: 'Primary',
//     range: 'Class I – V',
//     title: 'Building Foundations',
//     focus: ['Reading & writing', 'Maths basics', 'Curiosity & habits'],
//     tone: 'blue',
//   },
//   {
//     icon: '📚',
//     group: 'Middle School',
//     range: 'Class VI – VIII',
//     title: 'Expanding Horizons',
//     focus: ['Science & SST', 'Languages', 'Concept clarity'],
//     tone: 'green',
//   },
//   {
//     icon: '🎯',
//     group: 'Secondary',
//     range: 'Class IX – X',
//     title: 'Board Year Focus',
//     focus: ['Board prep', 'Regular tests', 'Strong concepts'],
//     tone: 'amber',
//   },
//   {
//     icon: '🚀',
//     group: 'Higher Secondary',
//     range: 'Class XI – XII',
//     title: 'Career Launchpad',
//     focus: ['Stream specialisation', 'JEE / NEET / Boards', 'Career guidance'],
//     tone: 'purple',
//   },
// ]

// const CLASS_TONES = {
//   Primary: 'bg-blue-50 text-blue-700 border-blue-100',
//   'Middle School': 'bg-green-50 text-green-700 border-green-100',
//   Secondary: 'bg-amber-50 text-amber-700 border-amber-100',
//   'Higher Secondary': 'bg-purple-50 text-purple-700 border-purple-100',
// }

// const BOARD_TONES = [
//   'bg-red-50 text-red-600',
//   'bg-purple-50 text-purple-600',
//   'bg-blue-50 text-blue-600',
//   'bg-green-50 text-green-600',
//   'bg-amber-50 text-amber-700',
// ]

// const SUBJECT_ICONS = ['⚛', '🧪', '∑', '🌿', '💻', 'A']

// /* =========================================================
//    Find By Class
//    Height matched with Learning Journey
// ========================================================= */

// function MiniClassCard() {
//   return (
//     <Card className="h-[560px] overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)]">
//       {/* Header - same container style as Learning Journey */}
//       <div className="relative overflow-hidden  px-3 px-3 pt-5 pb-1 text-white">
//         <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
//         <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

//         {/* <div className="relative">
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl ring-1 ring-white/20">
//                 🎓
//               </div>

//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">
//                   Find by
//                 </p>

//                 <h3 className="font-display text-xl font-bold">
//                   Class
//                 </h3>
//               </div>
//             </div>

//             <Badge
//               tone="ink"
//               size="xs"
//               className="!bg-white/15 !text-white !ring-1 !ring-white/40"
//             >
//               Class I → XII
//             </Badge>
//           </div>

//           <p className="mt-2 text-sm text-blue-50">
//             Choose your class and explore the right tuition options.
//           </p>
//         </div> */}
//         <div className="relative">
//   <div className="mb-5 flex items-start gap-4">
//     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl">
//       🎓
//     </div>

//     <div className="flex-1">
//       <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">
//         Find by
//       </p>

//       <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">
//         Class
//       </h3>
//     </div>

//     <Badge
//       tone="ink"
//       size="xs"
//       className="!bg-blue-50 !text-blue-600"
//     >
//       Class I → XII
//     </Badge>
//   </div>
// </div>
//       </div>

//       {/* Content */}
//       <CardBody className="relative !p-0">
//         <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-blue-50/70" />
//         <div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-cyan-50/60" />

//         <div className="relative p-4">
//           <div className="space-y-6">
//             {classGroups.map((group) => {
//               const journey = JOURNEY.find((item) => item.group === group)
//               const tone =
//                 CLASS_TONES[group] ||
//                 'bg-blue-50 text-blue-700 border-blue-100'

//               return (
//                 <div key={group}>
//                   <div className="mb-3 flex items-center gap-2">
//                     <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
//                       {group}
//                     </span>

//                     <span className="text-xs text-slate-400">
//                       · {journey?.range}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {classes
//                       .filter((item) => item.group === group)
//                       .map((item) => (
//                         <Link
//                           key={item.slug}
//                           to={`/classes?class=${item.slug}`}
//                           className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${tone}`}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           <Link
//             to="/classes"
//             className="mt-7 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
//           >
//             All classes →
//           </Link>
//         </div>
//       </CardBody>
//     </Card>
//   )
// }

// /* =========================================================
//    Find By Board
// ========================================================= */

// function MiniBoardCard() {
//   const visibleBoards = boards.slice(0, 5)

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/90 p-3 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl">
//             📖
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
//               Find by
//             </p>

//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">
//               Board
//             </h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-2.5">
//           {visibleBoards.map((board, index) => (
//             <Link
//               key={board.slug}
//               to={`/boards?board=${board.slug}`}
//               className={`flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold ${BOARD_TONES[index % BOARD_TONES.length]}`}
//             >
//               <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[10px] font-extrabold">
//                 {board.label.slice(0, 2)}
//               </span>

//               <span className="truncate">
//                 {board.label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <Link
//           to="/boards"
//           className="mt-5 inline-block text-sm font-bold text-orange-600 hover:text-orange-700"
//         >
//           All boards →
//         </Link>
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Find By Subject
// ========================================================= */

// function MiniSubjectCard() {
//   const [showAll, setShowAll] = useState(false)

//   const visibleSubjects = useMemo(() => {
//     const popular = subjects.filter((item) => item.popular)

//     return showAll
//       ? popular
//       : popular.slice(0, 6)
//   }, [showAll])

//   return (
//     <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-cyan-100 bg-white/90 p-3 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm">
//       <div className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-green-50/80" />

//       <div className="relative">
//         <div className="mb-5 flex items-start gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl">
//             📗
//           </div>

//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">
//               Find by
//             </p>

//             <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900">
//               Subject
//             </h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-2.5">
//           {visibleSubjects.map((subject, index) => (
//             <Link
//               key={subject.slug}
//               to={`/subjects?subject=${subject.slug}`}
//               className="flex min-w-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
//             >
//               <span className="shrink-0 text-sm">
//                 {subject.icon ||
//                   SUBJECT_ICONS[index % SUBJECT_ICONS.length]}
//               </span>

//               <span className="truncate">
//                 {subject.label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowAll((value) => !value)}
//           className="mt-5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
//         >
//           {showAll ? 'Show less ←' : 'All subjects →'}
//         </button>
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Learning Journey
//    Height matched with Find By Class
// ========================================================= */

// function LearningJourney() {
//   return (
//     <div className="lg:sticky lg:top-24">
//       <Card className="h-[560px] overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)]">
//         <div className="relative overflow-hidden bg-gradient-to-br from-[#0787c9] to-[#0871aa] px-7 py-6 text-white">
//           <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
//           <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

//           <div className="relative">
//             <div className="flex items-center justify-between gap-4">
//               <h3 className="font-display text-xl font-bold">
//                 Your Learning Journey
//               </h3>

//               <Badge
//                 tone="ink"
//                 size="xs"
//                 className="!bg-white/15 !text-white !ring-1 !ring-white/40"
//               >
//                 Class I → XII
//               </Badge>
//             </div>

//             <p className="mt-2 text-sm text-blue-50">
//               How Srijee supports every stage of school life.
//             </p>
//           </div>
//         </div>

//         <CardBody className="!p-0">
//           <ol className="relative">
//             <span
//               className="absolute bottom-8 left-[39px] top-8 w-px bg-gradient-to-b from-blue-200 via-cyan-200 to-purple-200"
//               aria-hidden="true"
//             />

//             {JOURNEY.map((stage) => {
//               const toneClasses = {
//                 blue: 'bg-blue-100',
//                 green: 'bg-green-100',
//                 amber: 'bg-amber-100',
//                 purple: 'bg-purple-100',
//               }

//               const iconTone =
//                 toneClasses[stage.tone] || 'bg-blue-100'

//               return (
//                 <li
//                   key={stage.group}
//                   className="relative flex gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
//                 >
//                   <span
//                     className={`z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full text-base ring-4 ring-white ${iconTone}`}
//                   >
//                     {stage.icon}
//                   </span>

//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-center justify-between gap-2">
//                       <p className="font-display text-sm font-semibold text-slate-900">
//                         {stage.title}
//                       </p>

//                       <span className="whitespace-nowrap text-[10px] text-slate-400">
//                         {stage.range}
//                       </span>
//                     </div>

//                     <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
//                       {stage.group}
//                     </p>

//                     <ul className="mt-1.5 flex flex-wrap gap-1">
//                       {stage.focus.map((f) => (
//                         <li
//                           key={f}
//                           className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600"
//                         >
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               )
//             })}
//           </ol>

//           <div className="border-t border-slate-100 bg-blue-50/50 px-7 py-5">
//             <div className="flex items-center justify-between gap-4">
//               <div>
//                 <p className="text-sm font-bold text-slate-900">
//                   Need Help?
//                 </p>

//                 <p className="mt-0.5 text-xs text-slate-500">
//                   Our counsellor will guide you.
//                 </p>
//               </div>

//               <Button
//                 as="a"
//                 href={`tel:${SITE.phoneHref}`}
//                 variant="primary"
//                 size="sm"
//                 className="shrink-0 !rounded-xl !px-4"
//               >
//                 📞 Call now
//               </Button>
//             </div>
//           </div>
//         </CardBody>
//       </Card>

//       <div className="mt-4 grid grid-cols-3 gap-3">
//         <JourneyStat
//           value="12"
//           label="Classes"
//           className="border-blue-100 bg-blue-50/50"
//         />

//         <JourneyStat
//           value="5"
//           label="Boards"
//           className="border-orange-100 bg-orange-50/50"
//         />

//         <JourneyStat
//           value="20+"
//           label="Subjects"
//           className="border-green-100 bg-green-50/50"
//         />
//       </div>
//     </div>
//   )
// }

// /* =========================================================
//    Journey Stats
// ========================================================= */

// function JourneyStat({ value, label, className }) {
//   return (
//     <div
//       className={`rounded-2xl border px-4 py-4 text-center shadow-sm ${className}`}
//     >
//       <p className="font-display text-xl font-bold text-blue-600">
//         {value}
//       </p>

//       <p className="mt-0.5 text-[11px] text-slate-500">
//         {label}
//       </p>
//     </div>
//   )
// }

// /* =========================================================
//    Main Combined Section
// ========================================================= */

// export function FindByClass() {
//   return (
//     <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff]">
//       <SectionBackground
//         variant="mesh"
//         tone="brand"
//         intensity={0.25}
//       />

//       <Container>
//         <div className="relative z-10">
//           {/* Heading */}
//           <div className="mb-9 max-w-3xl">
//             <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
//               Explore tuition
//             </p>

//             <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Tuition for{' '}
//               <span className="text-blue-600">
//                 every grade
//               </span>
//             </h2>

//             <p className="mt-3 text-base text-slate-600 sm:text-lg">
//               Find the right tutor by class, board, or subject.
//             </p>
//           </div>

//           {/* Layout:
//               Class = tall left card
//               Board = top middle card
//               Subject = bottom middle card
//               Learning Journey = tall right card
//           */}
//           <div className="grid items-stretch gap-6 lg:grid-cols-12">
//             {/* Find By Class */}
//             <div className="lg:col-span-4">
//               <MiniClassCard />
//             </div>

//             {/* Board + Subject */}
//             <div className="flex flex-col gap-6 lg:col-span-4">
//               <MiniBoardCard />
//               <MiniSubjectCard />
//             </div>

//             {/* Learning Journey */}
//             <div className="lg:col-span-4">
//               <LearningJourney />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   )
// }

// /*
//   The old standalone sections are intentionally disabled because
//   FindByClass now contains Class + Board + Subject in one section.
//   Keep these exports so existing imports do not break.
// */

// export function FindByBoard() {
//   return null
// }

// export function FindBySubject() {
//   return null
// }

// export default FindByClass




import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, Container } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Card, CardBody } from '../ui/Card.jsx'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'
import { classes, classGroups } from '../../data/classes.js'
import { boards } from '../../data/boards.js'
import { subjects } from '../../data/subjects.js'
import { SITE } from '../../config/site.js'

const JOURNEY = [
  {
    icon: '🌱',
    group: 'Primary',
    range: 'Class I – V',
    title: 'Building Foundations',
    focus: ['Reading & writing', 'Maths basics', 'Curiosity & habits'],
    tone: 'blue',
  },
  {
    icon: '📚',
    group: 'Middle School',
    range: 'Class VI – VIII',
    title: 'Expanding Horizons',
    focus: ['Science & SST', 'Languages', 'Concept clarity'],
    tone: 'green',
  },
  {
    icon: '🎯',
    group: 'Secondary',
    range: 'Class IX – X',
    title: 'Board Year Focus',
    focus: ['Board prep', 'Regular tests', 'Strong concepts'],
    tone: 'amber',
  },
  {
    icon: '🚀',
    group: 'Higher Secondary',
    range: 'Class XI – XII',
    title: 'Career Launchpad',
    focus: ['Stream specialisation', 'JEE / NEET / Boards', 'Career guidance'],
    tone: 'purple',
  },
]

const CLASS_TONES = {
  Primary: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900/50',
  'Middle School': 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900/50',
  Secondary: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-900/50',
  'Higher Secondary': 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-900/50',
}

const BOARD_TONES = [
  'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300',
  'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300',
  'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300',
  'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300',
  'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
]

const SUBJECT_ICONS = ['⚛', '🧪', '∑', '🌿', '💻', 'A']

/* =========================================================
   Find By Class
   Height matched with Learning Journey
========================================================= */

function MiniClassCard() {
  return (
    <Card className="h-[560px] overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)] dark:border-ink-700">
      {/* Header - same container style as Learning Journey */}
      <div className="relative overflow-hidden  px-3 px-3 pt-5 pb-1 text-white">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

        {/* ... commented-out alternate header removed for brevity ... */}

        <div className="relative">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-xl">
              🎓
            </div>

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500 dark:text-blue-300">
                Find by
              </p>

              <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Class
              </h3>
            </div>

            <Badge
              tone="ink"
              size="xs"
              className="!bg-blue-50 !text-blue-600 dark:!bg-blue-900/40 dark:!text-blue-300"
            >
              Class I → XII
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <CardBody className="relative !p-0">
        <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-blue-50/70 dark:bg-blue-500/10" />
        <div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-cyan-50/60 dark:bg-cyan-500/10" />

        <div className="relative p-4">
          <div className="space-y-6">
            {classGroups.map((group) => {
              const journey = JOURNEY.find((item) => item.group === group)
              const tone =
                CLASS_TONES[group] ||
                'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900/50'

              return (
                <div key={group}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-ink-400">
                      {group}
                    </span>

                    <span className="text-xs text-slate-400 dark:text-ink-500">
                      · {journey?.range}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {classes
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <Link
                          key={item.slug}
                          to={`/classes?class=${item.slug}`}
                          className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${tone}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )
            })}
          </div>

          <Link
            to="/classes"
            className="mt-7 inline-block text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
          >
            All classes →
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

/* =========================================================
   Find By Board
========================================================= */

function MiniBoardCard() {
  const visibleBoards = boards.slice(0, 5)

  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/90 p-3 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm dark:border-ink-700 dark:bg-ink-900/70">
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-50/80 dark:bg-orange-500/10" />

      <div className="relative">
        <div className="mb-5 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/40 text-xl">
            📖
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-300">
              Find by
            </p>

            <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900 dark:text-white">
              Board
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {visibleBoards.map((board, index) => (
            <Link
              key={board.slug}
              to={`/boards?board=${board.slug}`}
              className={`flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold ${BOARD_TONES[index % BOARD_TONES.length]}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 dark:bg-white/10 text-[10px] font-extrabold">
                {board.label.slice(0, 2)}
              </span>

              <span className="truncate">
                {board.label}
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/boards"
          className="mt-5 inline-block text-sm font-bold text-orange-600 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-200"
        >
          All boards →
        </Link>
      </div>
    </div>
  )
}

/* =========================================================
   Find By Subject
========================================================= */

function MiniSubjectCard() {
  const [showAll, setShowAll] = useState(false)

  const visibleSubjects = useMemo(() => {
    const popular = subjects.filter((item) => item.popular)

    return showAll
      ? popular
      : popular.slice(0, 6)
  }, [showAll])

  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-[22px] border border-cyan-100 bg-white/90 p-3 shadow-[0_12px_35px_rgba(30,100,180,0.08)] backdrop-blur-sm dark:border-ink-700 dark:bg-ink-900/70">
      <div className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-green-50/80 dark:bg-green-500/10" />

      <div className="relative">
        <div className="mb-5 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/40 text-xl">
            📗
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500 dark:text-emerald-300">
              Find by
            </p>

            <h3 className="mt-0.5 font-display text-2xl font-bold text-slate-900 dark:text-white">
              Subject
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {visibleSubjects.map((subject, index) => (
            <Link
              key={subject.slug}
              to={`/subjects?subject=${subject.slug}`}
              className="flex min-w-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:bg-ink-800/60 dark:text-ink-200 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300"
            >
              <span className="shrink-0 text-sm">
                {subject.icon ||
                  SUBJECT_ICONS[index % SUBJECT_ICONS.length]}
              </span>

              <span className="truncate">
                {subject.label}
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="mt-5 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          {showAll ? 'Show less ←' : 'All subjects →'}
        </button>
      </div>
    </div>
  )
}

/* =========================================================
   Learning Journey
   Height matched with Find By Class
========================================================= */

function LearningJourney() {
  return (
    <div className="lg:sticky lg:top-24">
      <Card className="h-[560px] overflow-hidden rounded-[22px] border border-blue-100 shadow-[0_14px_40px_rgba(30,100,180,0.10)] dark:border-ink-700">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0787c9] to-[#0871aa] px-7 py-6 text-white">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
          <div className="absolute bottom-0 right-0 h-20 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-bold">
                Your Learning Journey
              </h3>

              <Badge
                tone="ink"
                size="xs"
                className="!bg-white/15 !text-white !ring-1 !ring-white/40"
              >
                Class I → XII
              </Badge>
            </div>

            <p className="mt-2 text-sm text-blue-50">
              How Srijee supports every stage of school life.
            </p>
          </div>
        </div>

        <CardBody className="!p-0">
          <ol className="relative">
            <span
              className="absolute bottom-8 left-[39px] top-8 w-px bg-gradient-to-b from-blue-200 via-cyan-200 to-purple-200"
              aria-hidden="true"
            />

            {JOURNEY.map((stage) => {
              const toneClasses = {
                blue: 'bg-blue-100 dark:bg-blue-900/40',
                green: 'bg-green-100 dark:bg-green-900/40',
                amber: 'bg-amber-100 dark:bg-amber-900/40',
                purple: 'bg-purple-100 dark:bg-purple-900/40',
              }

              const iconTone =
                toneClasses[stage.tone] || 'bg-blue-100 dark:bg-blue-900/40'

              return (
                <li
                  key={stage.group}
                  className="relative flex gap-3 px-4 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-ink-800/50"
                >
                  <span
                    className={`z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full text-base ring-4 ring-white dark:ring-ink-800 ${iconTone}`}
                  >
                    {stage.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                        {stage.title}
                      </p>

                      <span className="whitespace-nowrap text-[10px] text-slate-400 dark:text-ink-500">
                        {stage.range}
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      {stage.group}
                    </p>

                    <ul className="mt-1.5 flex flex-wrap gap-1">
                      {stage.focus.map((f) => (
                        <li
                          key={f}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-ink-800 dark:text-ink-300"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="border-t border-slate-100 bg-blue-50/50 px-7 py-5 dark:border-ink-800 dark:bg-blue-900/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Need Help?
                </p>

                <p className="mt-0.5 text-xs text-slate-500 dark:text-ink-400">
                  Our counsellor will guide you.
                </p>
              </div>

              <Button
                as="a"
                href={`tel:${SITE.phoneHref}`}
                variant="primary"
                size="sm"
                className="shrink-0 !rounded-xl !px-4"
              >
                📞 Call now
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <JourneyStat
          value="12"
          label="Classes"
          className="border-blue-100 bg-blue-50/50 dark:border-blue-900/40 dark:bg-blue-900/20"
        />

        <JourneyStat
          value="5"
          label="Boards"
          className="border-orange-100 bg-orange-50/50 dark:border-orange-900/40 dark:bg-orange-900/20"
        />

        <JourneyStat
          value="20+"
          label="Subjects"
          className="border-green-100 bg-green-50/50 dark:border-green-900/40 dark:bg-green-900/20"
        />
      </div>
    </div>
  )
}

/* =========================================================
   Journey Stats
========================================================= */

function JourneyStat({ value, label, className }) {
  return (
    <div
      className={`rounded-2xl border px-4 py-4 text-center shadow-sm ${className}`}
    >
      <p className="font-display text-xl font-bold text-blue-600 dark:text-blue-300">
        {value}
      </p>

      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-ink-400">
        {label}
      </p>
    </div>
  )
}

/* =========================================================
   Main Combined Section
========================================================= */

export function FindByClass() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eefaff] dark:from-ink-950 dark:via-ink-950 dark:to-ink-900">
      <SectionBackground
        variant="mesh"
        tone="brand"
        intensity={0.25}
      />

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-300">
              Explore tuition
            </p>

            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Tuition for{' '}
              <span className="text-blue-600">
                every grade
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-600 dark:text-ink-300 sm:text-lg">
              Find the right tutor by class, board, or subject.
            </p>
          </div>

          {/* Layout:
              Class = tall left card
              Board = top middle card
              Subject = bottom middle card
              Learning Journey = tall right card
          */}
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {/* Find By Class */}
            <div className="lg:col-span-4">
              <MiniClassCard />
            </div>

            {/* Board + Subject */}
            <div className="flex flex-col gap-6 lg:col-span-4">
              <MiniBoardCard />
              <MiniSubjectCard />
            </div>

            {/* Learning Journey */}
            <div className="lg:col-span-4">
              <LearningJourney />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/*
  The old standalone sections are intentionally disabled because
  FindByClass now contains Class + Board + Subject in one section.
  Keep these exports so existing imports do not break.
*/

export function FindByBoard() {
  return null
}

export function FindBySubject() {
  return null
}

export default FindByClass