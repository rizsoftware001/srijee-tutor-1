// import React from 'react'
// import { Container } from '../common/SectionHeading.jsx'
// import { Button } from '../ui/Button.jsx'
// import { Badge } from '../ui/Badge.jsx'
// import { SITE } from '../../config/site.js'

// /**
//  * AwardsSection — full-width hero-style display exactly like srijeetutor.com.
//  * Dark gradient background, large trophy, award details, founder quote, hashtags.
//  */
// export function AwardsSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-brand-950 to-ink-900 dark:bg-ink-950">
//       {/* Decorative grid pattern */}
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
//           backgroundSize: '40px 40px',
//         }}
//         aria-hidden="true"
//       />
//       {/* Glow orbs */}
//       <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
//       <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />

//       <Container>
//         <div className="relative py-12 sm:py-14 lg:py-16">
//           {/* Header */}
//           <div className="text-center max-w-2xl mx-auto">
//             <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5">
//               <span className="text-amber-400">🏆</span>
//               <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Accolades &amp; Achievements</span>
//             </div>
//             <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white text-balance">
//               Awards &amp; Recognition
//             </h2>
//             <p className="mt-2 text-sm sm:text-base text-ink-300 text-pretty">
//               Celebrating our commitment to educational excellence and innovation in EdTech.
//             </p>
//           </div>

//           {/* Award card — full display */}
//           <div className="mt-8 max-w-5xl mx-auto">
//             <div className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

//               {/* Left — trophy visual */}
//               <div className="lg:col-span-4 relative bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-8 lg:p-10 flex flex-col items-center justify-center text-center overflow-hidden">
//                 {/* Decorative pattern */}
//                 <div
//                   className="absolute inset-0 opacity-20"
//                   style={{
//                     backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//                     backgroundSize: '16px 16px',
//                   }}
//                 />
//                 <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

//                 <div className="relative">
//                   <div className="text-7xl mb-3 animate-float-slow">🏆</div>
//                   <p className="font-display text-2xl font-bold text-white">ASSOCHAM</p>
//                   <p className="text-sm text-amber-100">Excellence Award</p>
//                   <p className="mt-2 text-xs text-amber-200/80">{SITE.awards[0].year}</p>
//                 </div>
//               </div>

//               {/* Right — award details */}
//               <div className="lg:col-span-8 p-7 sm:p-9">
//                 <Badge tone="warning" size="sm" className="mb-3">
//                   <span className="live-dot mr-1" /> Featured Award
//                 </Badge>

//                 <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
//                   {SITE.awards[0].title}
//                 </h3>
//                 <p className="mt-2 text-sm text-amber-300 font-medium">
//                   {SITE.awards[0].issuer}
//                 </p>
//                 <p className="mt-1 text-xs text-ink-400">
//                   Presented by {SITE.awards[0].presentedBy}
//                 </p>

//                 <p className="mt-4 text-sm sm:text-base text-ink-200 leading-relaxed">
//                   {SITE.awards[0].description}
//                 </p>

//                 {/* Founder quote */}
//                 <figure className="mt-5 rounded-xl border-l-4 border-amber-500 bg-white/5 p-4">
//                   <blockquote className="italic text-ink-100 text-sm leading-relaxed">
//                     &ldquo;{SITE.founder.quote}&rdquo;
//                   </blockquote>
//                   <figcaption className="mt-2 text-xs font-semibold text-amber-300">
//                     — {SITE.founder.name}, {SITE.name}
//                   </figcaption>
//                 </figure>

//                 {/* Hashtags */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   <span className="chip bg-white/10 text-ink-200 text-xs">#Srijeetutor</span>
//                   <span className="chip bg-white/10 text-ink-200 text-xs">#ExcellenceInEducation</span>
//                   <span className="chip bg-white/10 text-ink-200 text-xs">#excellenceaward</span>
//                   <span className="chip bg-white/10 text-ink-200 text-xs">#ASSOCHAM</span>
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <Button as="a" href="/about" variant="secondary" size="md" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
//                     Read More →
//                   </Button>
//                   <Button as="a" href={`tel:${SITE.phoneHref}`} variant="ghost" size="md" className="!text-amber-300 hover:!bg-white/10">
//                     📞 {SITE.phoneDisplay}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }

// export default AwardsSection
import React from 'react'
import { Container } from '../common/SectionHeading.jsx'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'
import { SITE } from '../../config/site.js'

export function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-brand-950 to-ink-900 dark:bg-ink-950">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="relative py-12 sm:py-14 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5">
              <span className="text-amber-400">🏆</span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Accolades & Achievements</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white text-balance">Awards & Recognition</h2>
            <p className="mt-2 text-sm sm:text-base text-ink-300 text-pretty">Celebrating our commitment to educational excellence and innovation in EdTech.</p>
          </div>
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="lg:col-span-4 relative bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-8 lg:p-10 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                <div className="relative">
                  <div className="text-7xl mb-3 animate-float-slow">🏆</div>
                  <p className="font-display text-2xl font-bold text-white">ASSOCHAM</p>
                  <p className="text-sm text-amber-100">Excellence Award</p>
                  <p className="mt-2 text-xs text-amber-200/80">{SITE.awards[0].year}</p>
                </div>
              </div>
              <div className="lg:col-span-8 p-7 sm:p-9">
                <Badge tone="warning" size="sm" className="mb-3"><span className="live-dot mr-1" /> Featured Award</Badge>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{SITE.awards[0].title}</h3>
                <p className="mt-2 text-sm text-amber-300 font-medium">{SITE.awards[0].issuer}</p>
                <p className="mt-1 text-xs text-ink-400">Presented by {SITE.awards[0].presentedBy}</p>
                <p className="mt-4 text-sm sm:text-base text-ink-200 leading-relaxed">{SITE.awards[0].description}</p>
                <figure className="mt-5 rounded-xl border-l-4 border-amber-500 bg-white/5 p-4">
                  <blockquote className="italic text-ink-100 text-sm leading-relaxed">&ldquo;{SITE.founder.quote}&rdquo;</blockquote>
                  <figcaption className="mt-2 text-xs font-semibold text-amber-300">— {SITE.founder.name}, {SITE.name}</figcaption>
                </figure>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="chip bg-white/10 text-ink-200 text-xs">#Srijeetutor</span>
                  <span className="chip bg-white/10 text-ink-200 text-xs">#ExcellenceInEducation</span>
                  <span className="chip bg-white/10 text-ink-200 text-xs">#excellenceaward</span>
                  <span className="chip bg-white/10 text-ink-200 text-xs">#ASSOCHAM</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button as="a" href="/about" variant="secondary" size="md" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20">Read More →</Button>
                  <Button as="a" href={`tel:${SITE.phoneHref}`} variant="ghost" size="md" className="!text-amber-300 hover:!bg-white/10">📞 {SITE.phoneDisplay}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AwardsSection