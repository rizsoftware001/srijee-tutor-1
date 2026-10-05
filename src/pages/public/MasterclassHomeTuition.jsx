import React from 'react'
import { Link } from 'react-router-dom'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { masterClassTeachers } from '../../data/masterClassTeachers.js'
import { FAQ } from '../../components/sections/FAQ.jsx'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

/**
 * MasterclassHomeTuition
 * Destination page for the "First Time in India — MasterClass for Home Tuition" banner.
 *
 * - Reuses existing MasterClassSection data (masterClassTeachers), existing EnrollmentContext
 * - Visual treatment consistent with the banner: deep brand-teal gradient + glow
 * - Reuses Seo, Breadcrumbs, Section, Container, Card, Button, Badge
 * - No invented dates/seats/teachers — pulls only from existing masterClassTeachers
 * - Mobile-first responsive
 */
export default function MasterclassHomeTuition() {
  const { openEnrollment } = useEnrollment()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'MasterClass for Home Tuition',
    description:
      'A premium MasterClass programme designed exclusively for home-tuition students — concept mastery, doubt clearing, and exam strategy with Srijee Tutor senior educators.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Srijee Tutor',
      url: 'https://srijeetutor.com',
    },
  }

  return (
    <>
      <Seo path="/masterclass/home-tuition" />
      <StructuredData data={jsonLd} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-brand-950 to-teal-950">
        {/* Grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, #000 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, #000 30%, transparent 80%)',
          }}
        />
        {/* Glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-20 text-white">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'MasterClass for Home Tuition' },
              ]}
            />
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent-400/40 bg-accent-500/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-accent-200">
              <StarIcon className="h-3 w-3" />
              First Time in India
            </span>

            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] text-white text-balance">
              MasterClass for{' '}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-amber-300 bg-clip-text text-transparent">
                Home Tuition
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-lg text-brand-100/80 leading-relaxed text-pretty">
              A new learning experience designed exclusively for home-tuition students. Srijee brings the depth of our premium MasterClass programme directly into your home — concept mastery, exam strategy, and personalised doubt clearing from our most senior educators.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="accent"
                size="lg"
                onClick={openEnrollment}
                className="w-full sm:w-auto"
              >
                Apply for MasterClass →
              </Button>
              <Link
                to="/home-tuition"
                className="btn btn-lg w-full sm:w-auto bg-white/10 text-white border border-white/20 hover:bg-white/15"
              >
                Explore Home Tuition
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── What makes it premium ─────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why this MasterClass"
            title="Premium learning, designed for home tuition"
            description="Built specifically for students who want more than regular home tuition — without leaving the comfort of home."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREMIUM_FEATURES.map((f) => (
              <Card key={f.title} className="card-hover h-full">
                <CardBody className="flex h-full flex-col">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-700 dark:text-ink-200 leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── How it works (3 steps) ─────────────────────────────── */}
      <Section className="relative section-surface-brand">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps to your MasterClass"
          />

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {HOW_IT_WORKS.map((s, i) => (
              <li key={s.title} className="relative card p-5 sm:p-6">
                <span className="font-display text-3xl font-extrabold text-brand-200 dark:text-brand-800 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-ink-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ─── Meet the educators ────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Meet the educators"
            title="Senior faculty, hand-picked"
            description="Our MasterClass educators lead by experience and depth — bringing clarity to the toughest concepts."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {masterClassTeachers.map((teacher) => (
              <Card key={teacher.id} className="card-hover overflow-hidden">
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${teacher.gradient}`}>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1580489944761-15a4d6c32c46?w=600&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-lg font-bold text-white">{teacher.name}</h3>
                    <p className="text-sm text-white/90">{teacher.designation}</p>
                  </div>
                </div>
                <CardBody>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">
                      {teacher.subject}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <p className="text-ink-700 dark:text-ink-200">
                      <span className="font-semibold text-ink-900 dark:text-white">Qualification:</span>{' '}
                      {teacher.qualification}
                    </p>
                    <p className="text-ink-700 dark:text-ink-200">
                      <span className="font-semibold text-ink-900 dark:text-white">Experience:</span>{' '}
                      {teacher.experience}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{teacher.bio}</p>

                  {teacher.schedule && teacher.schedule.length > 0 && (
                    <div className="mt-4 rounded-lg border border-success-200 dark:border-success-800 bg-success-50/60 dark:bg-success-900/20 p-3">
                      <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-success-700 dark:text-success-400">
                        <CalIcon /> Class Schedule
                      </p>
                      <div className="mt-2 space-y-1.5">
                        {teacher.schedule.map((slot, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-ink-900 dark:text-white">{slot.day}</span>
                            <span className="text-ink-600 dark:text-ink-300">{slot.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="mt-4"
                    onClick={openEnrollment}
                  >
                    Apply for MasterClass
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-ink-500 dark:text-ink-300">
            Schedules shown are indicative for the MasterClass programme. Final timing will be confirmed by your counsellor.
          </p>
        </Container>
      </Section>

      {/* ─── CTA strip ─────────────────────────────────────────── */}
      <Section className="!py-0">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-brand-200 dark:border-brand-800 bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-950/40 dark:to-teal-950/30 p-6 sm:p-8 my-4">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge tone="accent" size="sm" dot>Limited seats</Badge>
                <h3 className="mt-2 h3 text-ink-900 dark:text-white">Ready to begin?</h3>
                <p className="mt-1 text-sm text-ink-700 dark:text-ink-200 max-w-xl">
                  Apply for the MasterClass for Home Tuition. A counsellor will guide you through the next steps.
                </p>
              </div>
              <Button type="button" variant="primary" size="lg" onClick={openEnrollment} className="w-full sm:w-auto flex-none">
                Apply for MasterClass →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Existing FAQ section (reuse) ───────────────────────── */}
      <FAQ />

      {/* ─── Existing Final CTA (reuse) ────────────────────────── */}
      <FinalCTA />
    </>
  )
}

const PREMIUM_FEATURES = [
  {
    title: 'Senior educators',
    desc: 'Taught by Srijee\'s most experienced faculty — selected for clarity, depth, and student rapport.',
    icon: <CapIcon />,
    gradient: 'from-brand-500 to-teal-500',
  },
  {
    title: 'Concept mastery',
    desc: 'Goes beyond textbook drills — students build the mental models needed for advanced problem-solving.',
    icon: <BulbIcon />,
    gradient: 'from-accent-500 to-amber-500',
  },
  {
    title: 'Personal doubt clearing',
    desc: 'Dedicated doubt-clearing slots where students can ask anything, without hesitation.',
    icon: <ChatIcon />,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Exam strategy',
    desc: 'Time management, paper-attempt strategy, and temperament coaching for school & competitive exams.',
    icon: <TargetIcon />,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Live + recorded',
    desc: 'Attend live for interaction, or watch the recording later — flexibility that respects a student\'s busy week.',
    icon: <PlayIcon />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Designed for home tuition',
    desc: 'Curriculum and pacing tuned for home-tuition students — complementary to one-to-one sessions.',
    icon: <HomeIcon />,
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Apply & share your goal',
    desc: 'Submit your interest with class, board, and learning goal. A counsellor calls you to understand the right fit.',
  },
  {
    title: 'Confirm your seat',
    desc: 'Based on your goal and availability, your counsellor confirms your seat in the next MasterClass batch.',
  },
  {
    title: 'Begin your MasterClass',
    desc: 'Attend live sessions, get your doubts cleared, and follow the structured 8-week path to mastery.',
  },
]

/* ── Inline icons ─────────────────────────────────────────────── */
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0l1.5 4.5L14 6l-4.5 1.5L8 12l-1.5-4.5L2 6l4.5-1.5L8 0z" />
    </svg>
  )
}
function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  )
}
function BulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V18h6.4v-1.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z" />
    </svg>
  )
}
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  )
}
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function CalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}