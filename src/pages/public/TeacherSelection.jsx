import React from 'react'
import { Link } from 'react-router-dom'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { FAQ } from '../../components/sections/FAQ.jsx'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

/**
 * TeacherSelection
 * Destination page for "Experience the Class Before You Choose" banner.
 *
 * - Explains the demo-first teacher selection process with 8 clear steps
 * - Reuses existing patterns: Seo, Breadcrumbs, Section, Container, Card, Button
 * - Reuses EnrollmentContext for the "Start with your requirement" CTA
 * - Does NOT falsely imply every teacher is automatically available for offline demo
 *   (notes availability is determined by the existing matching & CRM system)
 * - Mobile-first responsive
 */
export default function TeacherSelection() {
  const { openEnrollment } = useEnrollment()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PROCESS_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Seo path="/home-tuition/teacher-selection" />
      <StructuredData data={jsonLd} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-teal-gradient">
        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-20 text-white">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Home Tuition', to: '/home-tuition' },
                { label: 'Teacher Selection' },
              ]}
            />

            <span className="eyebrow text-brand-100 mt-4 inline-block">
              Teacher Selection After Offline Demo Class
            </span>

            <h1 className="mt-3 h1 text-white text-balance">
              Experience the Class{' '}
              <span className="text-amber-200">Before You Choose</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-lg text-brand-50 text-pretty leading-relaxed">
              Meet the teacher, experience the teaching, and choose the teacher who feels right for your child. Srijee's demo-first approach puts the decision back in your hands — every shortlist is one you can experience before you commit.
            </p>

            <p className="mt-3 text-sm sm:text-base font-medium text-amber-100/90 italic">
              Don't just choose a teacher. Experience the teaching first.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={openEnrollment}
                className="!bg-white !text-brand-700 hover:!bg-brand-50 w-full sm:w-auto"
              >
                Start with your requirement
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

      {/* ─── Intro / why demo-first ──────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why demo-first"
            title="A more honest way to choose a teacher"
            description="We believe choosing a teacher should feel like a decision, not a gamble. The demo class is your chance to verify — not just the tutor's knowledge, but how they teach, how your child responds, and whether the chemistry feels right."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {WHY_DEMO.map((item) => (
              <Card key={item.title} className="card-hover h-full">
                <CardBody>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300">
                    {item.icon}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
                    {item.desc}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-6 rounded-xl border border-dashed border-brand-300 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/20 p-4 sm:p-5">
            <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
              <span className="font-semibold text-ink-900 dark:text-white">Please note: </span>
              Offline demo classes are arranged based on teacher availability, your location, and matching criteria. Not every shortlisted teacher may be available for an in-person demo in every case — your counsellor will confirm what's possible once your requirement is verified.
            </p>
          </div>
        </Container>
      </Section>

      {/* ─── 8-step process ─────────────────────────────────────── */}
      <Section className="relative section-surface-brand">
        <Container>
          <SectionHeading
            eyebrow="The 8-step path"
            title="From requirement to regular tuition"
            description="A clear, transparent journey — designed so you always know what's next."
          />

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="group relative card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-teal-600 text-sm font-bold text-white shadow-md tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-300 dark:text-ink-600 group-hover:text-brand-500 transition-colors">
                    {s.icon}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-sm sm:text-base font-semibold text-ink-900 dark:text-white leading-tight">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {s.desc}
                </p>

                {/* Connector for desktop */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-ink-200 dark:bg-ink-700"
                  />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ─── Trust signals ─────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Built for trust"
                title="Designed with parents in mind"
                description="Choosing a tutor is a decision that affects months of your child's academic journey. We've built our process around your confidence — not just our convenience."
              />
              <ul className="mt-6 space-y-3">
                {TRUST_POINTS.map((t) => (
                  <li key={t.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-success-100 dark:bg-success-900/40 text-success-700 dark:text-success-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.title}</p>
                      <p className="text-sm text-ink-600 dark:text-ink-300 mt-0.5 leading-relaxed">{t.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button type="button" variant="primary" size="lg" onClick={openEnrollment}>
                  Start with your requirement →
                </Button>
              </div>
            </div>

            {/* Side visual: trust card */}
            <Card className="relative overflow-hidden border-brand-200 dark:border-brand-800">
              <CardBody>
                <div className="flex items-center justify-between">
                  <Badge tone="success" size="sm" dot>Verified</Badge>
                  <ShieldCheckIcon className="h-8 w-8 text-brand-500" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">
                  Every teacher is verified
                </h3>
                <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 leading-relaxed">
                  Before a teacher is shortlisted for any demo, they go through Srijee's verification process — qualification, experience, and identity checks. The demo is one more step, not the first.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <Pill label="Qualification" />
                  <Pill label="Experience" />
                  <Pill label="Identity" />
                </div>

                <div className="mt-4 rounded-lg bg-ink-50 dark:bg-ink-800/60 p-3">
                  <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">
                    <span className="font-semibold text-ink-800 dark:text-white">After the demo: </span>
                    Share your honest feedback. If the fit isn't right, we re-match — without pressure, without delay.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ─── Inline FAQ (page-specific) ─────────────────────────── */}
      <Section className="relative section-surface-teal">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Questions about demos"
            title="Frequently asked"
          />
          <div className="mt-6 space-y-3">
            {PROCESS_FAQS.map((item, i) => (
              <InlineFAQ key={i} item={item} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/contact" className="btn-secondary btn-md">Still have a question? Contact us →</Link>
          </div>
        </Container>
      </Section>

      {/* ─── Existing Final CTA (reuse) ────────────────────────── */}
      <FinalCTA />
    </>
  )
}

/* ── Local FAQ component (page-specific, not the homepage FAQ data) ── */
function InlineFAQ({ item }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={`card overflow-hidden transition-colors ${open ? 'border-brand-200' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink-900 dark:text-white">{item.q}</span>
        <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all ${open ? 'bg-brand-600 text-white rotate-45' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300'}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-ink-700 dark:text-ink-200 animate-fade-in">
          <p className="leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

function Pill({ label }) {
  return (
    <span className="rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-2 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-ink-700 dark:text-ink-200">
      {label}
    </span>
  )
}

/* ── Static content ─────────────────────────────────────────────── */
const STEPS = [
  {
    title: 'Tell us your requirement',
    desc: 'Share the class, board, subject, location, mode, and preferred time. Takes under a minute.',
    icon: <FormIcon />,
  },
  {
    title: 'We identify suitable teachers',
    desc: 'From Srijee\'s verified tutor network, we identify teachers whose profile matches your need.',
    icon: <SearchIcon />,
  },
  {
    title: 'Teachers are shortlisted',
    desc: 'A shortlist is created based on subject, class, board, location, mode, and availability.',
    icon: <ListIcon />,
  },
  {
    title: 'Attend an offline demo class',
    desc: 'Where available, an in-person demo class is arranged — real teaching, real classroom.',
    icon: <ChalkboardIcon />,
  },
  {
    title: 'Student & parent experience the teaching',
    desc: 'Student attends the demo; parents are encouraged to observe — focus is on clarity, not performance.',
    icon: <EyeIcon />,
  },
  {
    title: 'Share your feedback',
    desc: 'Tell your counsellor what worked and what didn\'t — honestly. Your feedback shapes the next step.',
    icon: <ChatIcon />,
  },
  {
    title: 'Choose your preferred teacher',
    desc: 'You choose the teacher who feels right for your child. We don\'t decide for you.',
    icon: <HeartIcon />,
  },
  {
    title: 'Regular tuition begins',
    desc: 'Once you\'ve chosen, regular classes begin. Your counsellor stays available for ongoing support.',
    icon: <FlagIcon />,
  },
]

const WHY_DEMO = [
  {
    title: 'Teaching, not just credentials',
    desc: 'A teacher\'s resume tells you what they know. The demo tells you how they teach — and how your child responds.',
    icon: <ChalkboardIcon />,
  },
  {
    title: 'Real classroom chemistry',
    desc: 'Some teachers are brilliant on paper but don\'t click with every student. The demo reveals the fit.',
    icon: <HandshakeIcon />,
  },
  {
    title: 'No pressure to commit',
    desc: 'If the demo doesn\'t feel right, we\'ll re-shortlist. The choice stays with you, every step of the way.',
    icon: <RefreshIcon />,
  },
]

const TRUST_POINTS = [
  {
    title: 'Verified before shortlisted',
    desc: 'Every teacher in our network is verified for qualification, experience, and identity before being shortlisted for any demo.',
  },
  {
    title: 'You observe, you decide',
    desc: 'Parents are encouraged to observe the demo class. Your observation matters as much as the student\'s.',
  },
  {
    title: 'Honest feedback, no friction',
    desc: 'If the demo isn\'t right, you simply say so. We re-match without questions, without delay.',
  },
  {
    title: 'Counsellor-supported throughout',
    desc: 'A dedicated counsellor stays with you from requirement to regular tuition — for any concern, any time.',
  },
]

const PROCESS_FAQS = [
  {
    q: 'Is every teacher available for an offline demo?',
    a: 'Not always. Offline demo availability depends on the teacher, your location, and matching criteria. Your counsellor will confirm what\'s possible once your requirement is verified. Where an offline demo isn\'t possible, we\'ll discuss alternatives transparently.',
  },
  {
    q: 'Is the demo class free?',
    a: 'Srijee\'s demo-first model is designed to help you choose with confidence. Your counsellor will explain any specifics related to demo fees or commitments before the demo is scheduled — there are no surprises.',
  },
  {
    q: 'How long is a demo class?',
    a: 'A typical demo class lasts around 30–45 minutes, enough time for the teacher to cover a real topic and for the student & parent to experience the teaching style. Exact duration is confirmed before scheduling.',
  },
  {
    q: 'Can parents observe the demo class?',
    a: 'Yes — and we encourage it. Parent observation is a key part of the demo-first process, because choosing a teacher is a family decision, not just a student\'s.',
  },
  {
    q: 'What happens if the demo doesn\'t feel right?',
    a: 'You share honest feedback with your counsellor. We re-shortlist alternative teachers and arrange the next demo. There is no pressure to commit to a teacher after a single demo.',
  },
  {
    q: 'How many demo classes can I attend?',
    a: 'The goal is the right fit, not a fixed count. Your counsellor will work with you to arrange demos with shortlisted teachers until you feel confident in your choice.',
  },
]

/* ── Inline icons ─────────────────────────────────────────────── */
function FormIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}
function ChalkboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M7 21h10M9 17v4M15 17v4" />
    </svg>
  )
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function FlagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}
function HandshakeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 17l-2 2-3-3 2-2 3 3z" />
      <path d="M21 11l-5-5-3 3 5 5 3-3z" />
      <path d="M16 11l-2-2-3 3 2 2 3-3z" />
      <path d="M3 13l4 4 3-3-4-4-3 3z" />
    </svg>
  )
}
function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
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
function ShieldCheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}