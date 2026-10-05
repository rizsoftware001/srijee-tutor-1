// import React from 'react'
// import { Seo } from '../../components/common/SEO.jsx'
// import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
// import { Link } from 'react-router-dom'
// import { Button } from '../../components/ui/Button.jsx'
// import { Card, CardBody } from '../../components/ui/Card.jsx'
// import { Badge } from '../../components/ui/Badge.jsx'
// import { SITE } from '../../config/site.js'
// import { FinalCTA } from '../../components/sections/CTASections.jsx'
// import { FounderSection } from '../../components/sections/FounderSection.jsx'
// import { StatsSection } from '../../components/sections/StatsSection.jsx'
// import { AwardsSection } from '../../components/sections/AwardsSection.jsx'
// import { aboutTestimonials } from '../../data/aboutTestimonials.js'

// export default function About() {
//   return (
//     <>
//       <Seo path="/about" />
//       <Section className="!pb-0 bg-hero-radial">
//         <Container>
//           <div className="max-w-3xl">
//             <span className="eyebrow">About our institute</span>
//             <h1 className="h1 mt-3 text-balance">
//               Be <span className="text-gradient">Future Ready</span> with Srijee Tutor
//             </h1>
//             <p className="mt-5 text-lg text-ink-600 dark:text-ink-300 text-pretty leading-relaxed">
//               Srijee was established in 2013 by Ms. Srirupa Banerjee, the Managing Director of the Company. Ms. Banerjee is a Gold Medalist from the University of Calcutta, a National Scholar Award Winner and has a long experience in teaching Molecular Biology & Genetics. She had a long cherished dream of building an institute which will cater to each and every educational need of our children at an individual level.
//             </p>
//           </div>
//         </Container>
//       </Section>

//       <StatsSection />

//       <FounderSection />

//       {/* Mission & Vision */}
//       <Section>
//         <Container>
//           <div className="grid gap-12 lg:grid-cols-2">
//             <div>
//               <h2 className="h3">Our mission</h2>
//               <p className="mt-4 text-ink-600 dark:text-ink-300 leading-relaxed">
//                 Through the untiring effort of the Team Srijee, Ms. Banerjee has succeeded in realising her dream and Srijee has proved to be one of the best Educational Institute tutoring students all over the globe. It not only teaches the students but also evaluates their progress through regular tests, PTMs, counselling and ensures complete handholding till they reach their SUCCESS.
//               </p>
//               <p className="mt-3 text-ink-600 dark:text-ink-300">
//                 Srijee also trains senior students through workshops, computer classes, foreign languages and what not. Srijee prepares the students for various competitive exams like JEE / NEET / Olympiads / NTSE etc.
//               </p>
//             </div>
//             <div className="card p-7 bg-brand-50/50 dark:bg-brand-900/20 border-brand-100 dark:border-brand-800">
//               <h3 className="h5 text-brand-900 dark:text-brand-200">What we promise</h3>
//               <ul className="mt-4 space-y-3 text-sm">
//                 {[
//                   ['Verified tutors only', 'No tutor goes live without document checks.'],
//                   ['A real counsellor', 'A human walks every family from first call to ongoing classes.'],
//                   ['Demo before commitment', 'Try a tutor before you commit. Re-match if it doesn\'t fit.'],
//                   ['No spam, no pressure', 'Your details are used only to find your tutor.'],
//                 ].map(([t, d]) => (
//                   <li key={t} className="flex gap-3">
//                     <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-600 dark:bg-brand-500 text-white text-xs">✓</span>
//                     <span><strong className="text-ink-900 dark:text-white">{t}.</strong> <span className="text-ink-600 dark:text-ink-300">{d}</span></span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </Section>

//       <AwardsSection />

//       {/* ─── STUDENT TESTIMONIALS — long-form "Feathers on our cap" ─── */}
//       <Section tone="subtle">
//         <Container>
//           <SectionHeading
//             eyebrow="Feathers on our cap"
//             title="Student Testimonials"
//             description="Hear directly from our successful students about their journey with Srijee Innotech Academy."
//           />
//           <div className="mt-10 space-y-6">
//             {aboutTestimonials.map((t, i) => (
//               <Card key={t.id} className="overflow-hidden animate-fade-up" >
//                 <CardBody className="!p-0">
//                   <div className="grid lg:grid-cols-12">
//                     {/* Left — student identity card */}
//                     <div className={`lg:col-span-4 p-6 sm:p-7 bg-gradient-to-br ${
//                       i === 0 ? 'from-brand-600 to-brand-800' : 'from-teal-600 to-teal-800'
//                     } text-white relative overflow-hidden`}>
//                       <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
//                       <div className="relative">
//                         <div className="flex items-center gap-4">
//                           <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm font-display text-xl font-bold">
//                             {t.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
//                           </div>
//                           <div>
//                             <p className="font-display text-lg font-bold">{t.name}</p>
//                             <p className="text-xs text-white/80">{t.role}</p>
//                           </div>
//                         </div>
//                         <p className="mt-4 text-sm font-semibold text-white/90">{t.school}</p>
//                         <p className="text-xs text-white/70">📍 {t.location}</p>
//                         <div className="mt-4 flex gap-0.5 text-accent-300">
//                           {Array.from({ length: 5 }).map((_, idx) => (
//                             <svg key={idx} width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.8 3.8L13 5.4l-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4.2-.6z"/></svg>
//                           ))}
//                         </div>
//                         {t.headline && (
//                           <div className="mt-4 rounded-lg bg-white/10 backdrop-blur-sm p-3">
//                             <p className="text-2xs font-semibold uppercase tracking-wider text-white/70">Achievement</p>
//                             <p className="mt-1 text-xs font-medium leading-snug">{t.headline}</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     {/* Right — long-form quote */}
//                     <div className="lg:col-span-8 p-6 sm:p-8">
//                       <svg className="text-brand-200 dark:text-brand-800" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h3v8H3v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1zm9 0h3v8h-7v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1z"/></svg>
//                       <p className="mt-3 text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed italic">
//                         {t.quote}
//                       </p>
//                       <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-700 flex items-center justify-between">
//                         <Badge tone="success" size="sm" dot>Verified Student</Badge>
//                         <p className="text-xs text-ink-500 dark:text-ink-300">— {t.name}, {t.school}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </Section>

//       {/* What we do */}
//       <Section>
//         <Container>
//           <SectionHeading eyebrow="What we do" title="More than a tutor directory" />
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {[
//               { title: 'Lead generation', desc: 'Parents share tuition requirements through a simple form. We capture intent — not just clicks.' },
//               { title: 'Tutor verification', desc: 'Every tutor completes registration, profile, and document checks before being matched.' },
//               { title: 'Tutor matching', desc: 'We match on class, board, subject, location, mode, and availability — not just proximity.' },
//               { title: 'Demo coordination', desc: 'We schedule trial classes, gather feedback, and re-match if the fit isn\'t right.' },
//               { title: 'Counsellor support', desc: 'A real person stays available through tuition — for parents, students, and tutors.' },
//               { title: 'CRM & operations', desc: 'Our admin system tracks leads, demos, conversions, and tutor activity end-to-end.' },
//             ].map((f) => (
//               <div key={f.title} className="card card-hover p-6">
//                 <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">{f.title}</h3>
//                 <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </Section>

//       <FinalCTA />
//     </>
//   )
// }
import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { SITE } from '../../config/site.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'
import { FounderSection } from '../../components/sections/FounderSection.jsx'
import { StatsSection } from '../../components/sections/StatsSection.jsx'
import { AwardsSection } from '../../components/sections/AwardsSection.jsx'
import { aboutTestimonials } from '../../data/aboutTestimonials.js'
import { teamMembers } from '../../data/teamMembers.js'
import { centers } from '../../data/centers.js'
import { MasterClassSection } from '../../components/sections/MasterClassSection.jsx'
export default function About() {
  return (
    <>
      <Seo path="/about" />
      <Section className="!pb-0 bg-hero-radial">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">About our institute</span>
            <h1 className="h1 mt-3 text-balance">
              Be <span className="text-gradient">Future Ready</span> with Srijee Tutor
            </h1>
            <p className="mt-5 text-lg text-ink-600 dark:text-ink-300 text-pretty leading-relaxed">
              Srijee was established in 2013 by Ms. Srirupa Banerjee, the Managing Director of the Company. Ms. Banerjee is a Gold Medalist from the University of Calcutta, a National Scholar Award Winner and has a long experience in teaching Molecular Biology & Genetics. She had a long cherished dream of building an institute which will cater to each and every educational need of our children at an individual level.
            </p>
          </div>
        </Container>
      </Section>

      <StatsSection />

      <FounderSection />

      {/* Mission & Vision */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="h3">Our mission</h2>
              <p className="mt-4 text-ink-600 dark:text-ink-300 leading-relaxed">
                Through the untiring effort of the Team Srijee, Ms. Banerjee has succeeded in realising her dream and Srijee has proved to be one of the best Educational Institute tutoring students all over the globe. It not only teaches the students but also evaluates their progress through regular tests, PTMs, counselling and ensures complete handholding till they reach their SUCCESS.
              </p>
              <p className="mt-3 text-ink-600 dark:text-ink-300">
                Srijee also trains senior students through workshops, computer classes, foreign languages and what not. Srijee prepares the students for various competitive exams like JEE / NEET / Olympiads / NTSE etc.
              </p>
            </div>
            <div className="card p-7 bg-brand-50/50 dark:bg-brand-900/20 border-brand-100 dark:border-brand-800">
              <h3 className="h5 text-brand-900 dark:text-brand-200">What we promise</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ['Verified tutors only', 'No tutor goes live without document checks.'],
                  ['A real counsellor', 'A human walks every family from first call to ongoing classes.'],
                  ['Demo before commitment', 'Try a tutor before you commit. Re-match if it doesn\'t fit.'],
                  ['No spam, no pressure', 'Your details are used only to find your tutor.'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-600 dark:bg-brand-500 text-white text-xs">✓</span>
                    <span><strong className="text-ink-900 dark:text-white">{t}.</strong> <span className="text-ink-600 dark:text-ink-300">{d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <AwardsSection />

      {/* ─── STUDENT TESTIMONIALS ─── */}
      <Section tone="subtle">
        <Container>
          <SectionHeading
            eyebrow="Feathers on our cap"
            title="Student Testimonials"
            description="Hear directly from our successful students about their journey with Srijee Innotech Academy."
          />
          <div className="mt-10 space-y-6">
            {aboutTestimonials.map((t, i) => (
              <Card key={t.id} className="overflow-hidden animate-fade-up" >
                <CardBody className="!p-0">
                  <div className="grid lg:grid-cols-12">
                    <div className={`lg:col-span-4 p-6 sm:p-7 bg-gradient-to-br ${
                      i === 0 ? 'from-brand-600 to-brand-800' : 'from-teal-600 to-teal-800'
                    } text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm font-display text-xl font-bold">
                            {t.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                          </div>
                          <div>
                            <p className="font-display text-lg font-bold">{t.name}</p>
                            <p className="text-xs text-white/80">{t.role}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-white/90">{t.school}</p>
                        <p className="text-xs text-white/70">📍 {t.location}</p>
                        <div className="mt-4 flex gap-0.5 text-accent-300">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg key={idx} width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.8 3.8L13 5.4l-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4.2-.6z"/></svg>
                          ))}
                        </div>
                        {t.headline && (
                          <div className="mt-4 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                            <p className="text-2xs font-semibold uppercase tracking-wider text-white/70">Achievement</p>
                            <p className="mt-1 text-xs font-medium leading-snug">{t.headline}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:col-span-8 p-6 sm:p-8">
                      <svg className="text-brand-200 dark:text-brand-800" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h3v8H3v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1zm9 0h3v8h-7v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1z"/></svg>
                      <p className="mt-3 text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed italic">
                        {t.quote}
                      </p>
                      <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-700 flex items-center justify-between">
                        <Badge tone="success" size="sm" dot>Verified Student</Badge>
                        <p className="text-xs text-ink-500 dark:text-ink-300">— {t.name}, {t.school}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What we do */}
      <Section>
        <Container>
          <SectionHeading eyebrow="What we do" title="More than a tutor directory" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Lead generation', desc: 'Parents share tuition requirements through a simple form. We capture intent — not just clicks.' },
              { title: 'Tutor verification', desc: 'Every tutor completes registration, profile, and document checks before being matched.' },
              { title: 'Tutor matching', desc: 'We match on class, board, subject, location, mode, and availability — not just proximity.' },
              { title: 'Demo coordination', desc: 'We schedule trial classes, gather feedback, and re-match if the fit isn\'t right.' },
              { title: 'Counsellor support', desc: 'A real person stays available through tuition — for parents, students, and tutors.' },
              { title: 'CRM & operations', desc: 'Our admin system tracks leads, demos, conversions, and tutor activity end-to-end.' },
            ].map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── OUR PRESENTS — Team Members ─── */}
      <Section tone="subtle">
        <Container>
          <SectionHeading
            eyebrow="Our Presents"
            title="Meet Our Team"
            description="The educators, leaders, and visionaries who make Srijee Tutor what it is."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden card-hover group">
                <CardBody className="!p-0">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                    <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/85">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.credentials.map((c) => (
                        <span key={c} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{c}</span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── OUR CENTERS ─── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Centres"
            title="Find a centre near you"
            description="Srijee Tutor centres across India and the UAE."
          />
          <div className="mt-8 space-y-6">
            {centers.map((center) => (
              <Card key={center.id} className="overflow-hidden card-hover">
                <CardBody className="!p-0">
                  <div className="grid lg:grid-cols-12">
                    {/* Center image */}
                    <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <img src={center.image} alt={`${center.city} centre`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${center.gradient} opacity-30`} />
                      <div className="absolute bottom-4 left-4">
                        <Badge tone={center.type === 'Head Office' ? 'accent' : 'brand'} size="sm" className="!bg-white/90 backdrop-blur-sm">{center.type}</Badge>
                      </div>
                    </div>
                    {/* Center details */}
                    <div className="lg:col-span-7 p-6">
                      <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">{center.city}</h3>
                      <p className="text-sm text-ink-500 dark:text-ink-300">{center.region}</p>
                      <div className="mt-4 space-y-2 text-sm text-ink-700 dark:text-ink-200">
                        <div className="flex items-start gap-2"><span>📍</span><span>{center.address}</span></div>
                        {!center.phone.includes('Confirm') && (
                          <div className="flex items-center gap-2"><span>📞</span><a href={`tel:${center.phone}`} className="hover:text-brand-700 dark:hover:text-brand-300">{center.phone}</a></div>
                        )}
                        {!center.email.includes('Confirm') && (
                          <div className="flex items-center gap-2"><span>✉</span><a href={`mailto:${center.email}`} className="hover:text-brand-700 dark:hover:text-brand-300 break-all">{center.email}</a></div>
                        )}
                      </div>
                      {/* Programs */}
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-2">Programs Available</p>
                        <div className="flex flex-wrap gap-1.5">
                          {center.programs.map((p) => (
                            <span key={p} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{p}</span>
                          ))}
                        </div>
                      </div>
                      {/* Map link */}
                      <a href={center.mapLink} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm mt-5 inline-flex">📍 View on Maps →</a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
            <MasterClassSection />

      <FinalCTA />
    </>
  )
}