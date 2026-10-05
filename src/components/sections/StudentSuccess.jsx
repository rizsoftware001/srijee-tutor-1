// import React, { useState } from 'react'
// import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { Card, CardBody } from '../ui/Card.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { Button } from '../ui/Button.jsx'
// import { successStories } from '../../data/successStories.js'

// /**
//  * StudentSuccess — merged Testimonials + Student Success stories.
//  * Shows student photos with their success stories in a premium carousel.
//  */
// export function StudentSuccess() {
//   const [active, setActive] = useState(0)
//   const s = successStories[active]

//   return (
//     <Section tone="subtle" className="relative">
//       <SectionBackground variant="blobs" tone="accent" intensity={0.5} />
//       <SectionBackground variant="dots" tone="warning" intensity={0.3} />
//       <Container>
//         <SectionHeading
//           eyebrow="Student Success"
//           title="Stories that inspire"
//           description="Real students. Real schools. Real results. Hear how Srijee shaped their academic journey."
//         />

//         {/* Main featured story card */}
//         <Card className="mt-6 overflow-hidden max-w-4xl mx-auto">
//           <CardBody className="!p-0">
//             <div className="grid lg:grid-cols-12">
//               {/* Left — student photo */}
//               <div className={`lg:col-span-5 relative bg-gradient-to-br ${s.gradient} p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden`}>
//                 <div
//                   className="absolute inset-0 opacity-20"
//                   style={{
//                     backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//                     backgroundSize: '16px 16px',
//                   }}
//                 />
//                 <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

//                 <div className="relative">
//                   {/* Student photo */}
//                   <div className="mx-auto h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
//                     <img
//                       src={s.image}
//                       alt={s.name}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>

//                   <h3 className="mt-4 font-display text-xl font-bold text-white">{s.name}</h3>
//                   <p className="text-sm text-white/80">{s.role}</p>
//                   <p className="mt-1 text-xs text-white/70">📍 {s.school}</p>

//                   {/* Achievement badge */}
//                   <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5">
//                     <span className="text-amber-300">🏆</span>
//                     <span className="text-xs font-bold text-white">{s.achievement}</span>
//                   </div>

//                   {/* Rating */}
//                   <div className="mt-3 flex justify-center gap-0.5 text-amber-300">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.8 3.8L13 5.4l-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4.2-.6z"/></svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right — story */}
//               <div className="lg:col-span-7 p-6 sm:p-8">
//                 <Badge tone="success" size="sm" dot>Verified Student</Badge>

//                 <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">
//                   {s.headline}
//                 </p>

//                 <svg className="mt-4 text-brand-200 dark:text-brand-800" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h3v8H3v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1zm9 0h3v8h-7v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1z"/></svg>

//                 <p className="mt-3 text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed italic">
//                   &ldquo;{s.quote}&rdquo;
//                 </p>

//                 <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-700 flex items-center justify-between gap-3">
//                   <div>
//                     <p className="text-sm font-semibold text-ink-900 dark:text-white">{s.name}</p>
//                     <p className="text-xs text-ink-500 dark:text-ink-300">{s.school} · {s.location}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-2xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-400">Subjects</p>
//                     <p className="text-xs text-ink-700 dark:text-ink-200">{s.subjects}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardBody>
//         </Card>

//         {/* Thumbnail selector — all student photos in a row */}
//         <div className="mt-6 flex flex-wrap justify-center gap-3">
//           {successStories.map((story, i) => (
//             <button
//               key={story.id}
//               onClick={() => setActive(i)}
//               className={`group relative h-16 w-16 rounded-full overflow-hidden border-2 transition-all ${
//                 i === active
//                   ? 'border-brand-500 ring-2 ring-brand-200 dark:ring-brand-800 scale-110'
//                   : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
//               }`}
//               aria-label={`View ${story.name}'s story`}
//             >
//               <img
//                 src={story.image}
//                 alt={story.name}
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//               {/* Active indicator dot */}
//               {i === active && (
//                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-500" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Dots indicator (alternative) */}
//         <div className="mt-4 flex justify-center gap-1.5">
//           {successStories.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className={`h-1.5 rounded-full transition-all ${
//                 i === active ? 'w-8 bg-brand-600' : 'w-1.5 bg-ink-300 dark:bg-ink-700 hover:bg-ink-400'
//               }`}
//               aria-label={`Story ${i + 1}`}
//             />
//           ))}
//         </div>
//       </Container>
//     </Section>
//   )
// }

// export default StudentSuccess
import React, { useState } from 'react'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Card, CardBody } from '../ui/Card.jsx'
import { Badge } from '../ui/Badge.jsx'
import { successStories } from '../../data/successStories.js'

export function StudentSuccess() {
  const [active, setActive] = useState(0)
  const s = successStories[active]
  return (
    <Section tone="subtle" className="relative">
      <SectionBackground variant="blobs" tone="accent" intensity={0.5} />
      <SectionBackground variant="dots" tone="warning" intensity={0.3} />
      <Container>
        <SectionHeading eyebrow="Student Success" title="Stories that inspire" description="Real students. Real schools. Real results." />
        <Card className="mt-6 overflow-hidden max-w-4xl mx-auto">
          <CardBody className="!p-0">
            <div className="grid lg:grid-cols-12">
              <div className={`lg:col-span-5 relative bg-gradient-to-br ${s.gradient} p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                <div className="relative">
                  <div className="mx-auto h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={s.image} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{s.name}</h3>
                  <p className="text-sm text-white/80">{s.role}</p>
                  <p className="mt-1 text-xs text-white/70">📍 {s.school}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5">
                    <span className="text-amber-300">🏆</span>
                    <span className="text-xs font-bold text-white">{s.achievement}</span>
                  </div>
                  <div className="mt-3 flex justify-center gap-0.5 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (<svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.8 3.8L13 5.4l-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4.2-.6z"/></svg>))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8">
                <Badge tone="success" size="sm" dot>Verified Student</Badge>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">{s.headline}</p>
                <svg className="mt-4 text-brand-200 dark:text-brand-800" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h3v8H3v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1zm9 0h3v8h-7v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1z"/></svg>
                <p className="mt-3 text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed italic">&ldquo;{s.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-700 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{s.name}</p>
                    <p className="text-xs text-ink-500 dark:text-ink-300">{s.school} · {s.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-400">Subjects</p>
                    <p className="text-xs text-ink-700 dark:text-ink-200">{s.subjects}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {successStories.map((story, i) => (
            <button key={story.id} onClick={() => setActive(i)} className={`group relative h-16 w-16 rounded-full overflow-hidden border-2 transition-all ${i === active ? 'border-brand-500 ring-2 ring-brand-200 dark:ring-brand-800 scale-110' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`} aria-label={`View ${story.name}'s story`}>
              <img src={story.image} alt={story.name} className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default StudentSuccess