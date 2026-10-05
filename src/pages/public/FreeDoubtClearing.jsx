import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { Field, Input, Textarea, Select } from '../../components/ui/Input.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { createLead } from '../../services/leadService.js'
import { validate, required, mobileFmt, emailFmt } from '../../utils/validation.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

/**
 * FreeDoubtClearing
 * Destination page for "Free Concept & Doubt Clearing — Every Month" banner.
 *
 * - Integrates with existing leadService.createLead (source: 'Website — Free Doubt Clearing')
 * - Does NOT invent dates, times, teacher names, seat counts, or subject schedules
 * - Uses "Register your interest for the next session" wording
 * - Reuses Seo, Breadcrumbs, Section, Container, Card, Button, Field, Input, Toast
 * - Mobile-first responsive
 */
export default function FreeDoubtClearing() {
  const toast = useToast()
  const { openEnrollment } = useEnrollment()
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    classLevel: '',
    subjectInterest: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: val }))
    setErrors((p) => ({ ...p, [k]: undefined }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const { isValid, errors } = validate(form, {
      name: required('Please enter your name'),
      mobile: [required('Please enter your mobile'), mobileFmt()],
      email: emailFmt(),
      consent: (v) => v === true || 'Please agree to be contacted',
    })
    if (!isValid) {
      setErrors(errors)
      return
    }
    setSending(true)
    try {
      await createLead({
        name: form.name,
        phone: form.mobile,
        email: form.email,
        class: form.classLevel || 'Not specified',
        board: 'N/A',
        subject: form.subjectInterest || 'Concept & Doubt Clearing',
        location: 'Not specified',
        mode: 'Online',
        source: 'Website — Free Doubt Clearing',
        notes: form.message || 'Registered interest for next Free Concept & Doubt Clearing session',
      })
      setSubmitted(true)
      toast.success('Registered! We will notify you when the next session is scheduled.')
    } catch (err) {
      toast.error('Could not submit. Please try again or contact us.')
    } finally {
      setSending(false)
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Free Concept & Doubt Clearing Session',
    description:
      'A free monthly concept and doubt-clearing session, open to all students, hosted by Srijee Tutor. Register your interest to be notified when the next session is scheduled.',
    organizer: {
      '@type': 'EducationalOrganization',
      name: 'Srijee Tutor',
      url: 'https://srijeetutor.com',
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    isAccessibleForFree: true,
  }

  return (
    <>
      <Seo path="/free-doubt-clearing" />
      <StructuredData data={jsonLd} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-500 via-orange-500 to-amber-500">
        {/* Pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-20 text-white">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Free Doubt Clearing' },
              ]}
            />

            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
              <GiftIcon className="h-3 w-3" />
              Open to Students
            </span>

            <h1 className="mt-3 h1 text-white text-balance">
              Free Concept &amp; Doubt Clearing
            </h1>
            <p className="mt-2 text-base sm:text-lg font-semibold text-amber-100">
              Every Month · Free · Open to all students
            </p>

            <p className="mt-4 max-w-2xl text-sm sm:text-lg text-white/90 leading-relaxed text-pretty">
              Strengthen your concepts, clear your doubts and learn with confidence — with a free monthly learning session from SrijeeTutor. Designed to complement your regular tuition and open to every student, regardless of where you study.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="btn btn-lg w-full sm:w-auto bg-white text-accent-700 hover:bg-amber-50">
                Register your interest →
              </a>
              <Link
                to="/student/requirement"
                className="btn btn-lg w-full sm:w-auto bg-white/10 text-white border border-white/25 hover:bg-white/15"
              >
                Find my tutor
              </Link>
            </div>

            <p className="mt-3 text-xs text-white/70">
              We'll notify you when the next session is scheduled. No commitment, no cost.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── What is it ────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What is it"
            title="A free monthly session, designed for students"
            description="A dedicated hour each month where students can bring their doubts, revisit tricky concepts, and learn with confidence — at no cost."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_IT_IS.map((item) => (
              <Card key={item.title} className="card-hover h-full">
                <CardBody>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
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
        </Container>
      </Section>

      {/* ─── Who can join + What to ask ─────────────────────────── */}
      <Section className="relative section-surface-brand">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Who can join */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who can join"
                title="Open to all students"
                description="From Class I to Class XII — across boards, across subjects. You don't have to be a Srijee student."
              />
              <ul className="mt-5 space-y-2.5">
                {WHO_CAN_JOIN.map((w) => (
                  <li key={w} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success-100 dark:bg-success-900/40 text-success-700 dark:text-success-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-ink-700 dark:text-ink-200">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you can ask */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="What you can ask"
                title="Bring any doubt, any topic"
                description="The session is open-format — your doubts set the agenda, not a fixed syllabus."
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {WHAT_TO_ASK.map((t) => (
                  <span
                    key={t}
                    className="chip border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-500 dark:text-ink-300 leading-relaxed">
                While the session is open-format, specific topic coverage depends on the educator facilitating that month's session.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── How it works (monthly cadence) ─────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A simple, monthly rhythm"
            description="No commitments, no fees — just register your interest and we'll bring the next session to you."
          />

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((s, i) => (
              <li key={s.title} className="relative card p-5">
                <span className="font-display text-2xl font-extrabold text-accent-200 dark:text-accent-800 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold text-ink-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ─── Subjects / topics + Monthly concept ────────────────── */}
      <Section className="relative section-surface-teal">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Subjects & topics"
                title="Concept-first, syllabus-aware"
                description="Sessions cover core academic areas — the focus topic changes each month."
              />
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {SUBJECTS.map((s) => (
                  <div
                    key={s}
                    className="rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-3 py-2.5"
                  >
                    <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Monthly concept"
                title="Why monthly?"
                description="A monthly cadence gives students time to apply what they've learned — and bring back new doubts to the next session."
              />
              <Card className="mt-5 border-accent-200 dark:border-accent-800">
                <CardBody>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
                      <CalendarIcon />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-ink-900 dark:text-white">
                        One session, every month
                      </p>
                      <p className="text-xs text-ink-500 dark:text-ink-300">
                        Free for every student who registers
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {MONTHLY_POINTS.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                        <span className="mt-1 flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300">
                          <DotIcon />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Registration form ─────────────────────────────────── */}
      <Section id="register">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Register"
            title="Register your interest for the next session"
            description="Submit your details below — we'll notify you when the next session is scheduled. There is no cost and no commitment."
          />

          <Card className="mt-8">
            <CardBody>
              {submitted ? (
                <div className="text-center py-6">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/40 text-success-700 dark:text-success-300">
                    <BigCheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-900 dark:text-white">
                    You're on the list!
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 max-w-md mx-auto leading-relaxed">
                    Thank you for registering your interest. We'll reach out as soon as the next Free Concept &amp; Doubt Clearing session is scheduled.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      type="button"
                      variant="secondary"
                      size="md"
                      onClick={() => {
                        setSubmitted(false)
                        setForm({
                          name: '',
                          mobile: '',
                          email: '',
                          classLevel: '',
                          subjectInterest: '',
                          message: '',
                          consent: false,
                        })
                      }}
                    >
                      Register another interest
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={openEnrollment}
                    >
                      Enroll as Student
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Student / Parent Name" htmlFor="dc-name" required error={errors.name}>
                      <Input
                        id="dc-name"
                        value={form.name}
                        onChange={set('name')}
                        error={errors.name}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Mobile" htmlFor="dc-mobile" required error={errors.mobile}>
                      <Input
                        id="dc-mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={set('mobile')}
                        error={errors.mobile}
                        placeholder="98300 12345"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" htmlFor="dc-email" error={errors.email}>
                      <Input
                        id="dc-email"
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        error={errors.email}
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field label="Class (optional)" htmlFor="dc-class">
                      <Select
                        id="dc-class"
                        value={form.classLevel}
                        onChange={set('classLevel')}
                      >
                        <option value="">Select class</option>
                        <optgroup label="Primary">
                          <option>Class I</option>
                          <option>Class II</option>
                          <option>Class III</option>
                          <option>Class IV</option>
                          <option>Class V</option>
                        </optgroup>
                        <optgroup label="Middle School">
                          <option>Class VI</option>
                          <option>Class VII</option>
                          <option>Class VIII</option>
                        </optgroup>
                        <optgroup label="Secondary">
                          <option>Class IX</option>
                          <option>Class X</option>
                        </optgroup>
                        <optgroup label="Higher Secondary">
                          <option>Class XI</option>
                          <option>Class XII</option>
                        </optgroup>
                        <option>Other</option>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Subject / Topic of Interest (optional)" htmlFor="dc-subject">
                    <Input
                      id="dc-subject"
                      value={form.subjectInterest}
                      onChange={set('subjectInterest')}
                      placeholder="e.g. Algebra, Organic Chemistry, English Grammar"
                    />
                  </Field>

                  <Field label="Anything you'd like to ask? (optional)" htmlFor="dc-msg">
                    <Textarea
                      id="dc-msg"
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Share the topic or doubt you'd like help with."
                      rows={3}
                    />
                  </Field>

                  <Field error={errors.consent}>
                    <label className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={set('consent')}
                        className="mt-0.5 h-4 w-4 rounded border-ink-300 text-accent-600 focus:ring-accent-500"
                      />
                      <span>
                        I agree to be contacted by SrijeeTutor regarding the next free session.
                      </span>
                    </label>
                  </Field>

                  <Button type="submit" variant="accent" size="lg" fullWidth loading={sending}>
                    Register Interest →
                  </Button>

                  <p className="text-xs text-ink-500 dark:text-ink-300 text-center">
                    We respect your privacy. Your details are used only to notify you about the next session.
                  </p>
                </form>
              )}
            </CardBody>
          </Card>
        </Container>
      </Section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <Section className="relative section-surface-accent">
        <Container size="narrow">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked"
          />
          <div className="mt-6 space-y-3">
            {FAQS.map((item, i) => (
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

/* ── Local FAQ component ──────────────────────────────────────── */
function InlineFAQ({ item }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={`card overflow-hidden transition-colors ${open ? 'border-accent-200' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink-900 dark:text-white">{item.q}</span>
        <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all ${open ? 'bg-accent-600 text-white rotate-45' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300'}`}>
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

/* ── Static content ─────────────────────────────────────────────── */
const WHAT_IT_IS = [
  {
    title: 'Concept-first',
    desc: 'Each session revisits a core concept — students leave with clarity, not just an answer.',
    icon: <BulbIcon />,
    gradient: 'from-accent-500 to-amber-500',
  },
  {
    title: 'Doubt clearing',
    desc: 'Bring your doubts from school, tuition, or self-study. Educators work through them live.',
    icon: <ChatIcon />,
    gradient: 'from-brand-500 to-teal-500',
  },
  {
    title: 'Confidence building',
    desc: 'A monthly checkpoint that turns confusion into momentum — and helps students feel ready for what\'s next.',
    icon: <ShieldIcon />,
    gradient: 'from-violet-500 to-purple-500',
  },
]

const WHO_CAN_JOIN = [
  'Students from Class I to Class XII',
  'Students of any board — CBSE, ICSE, ISC, IGCSE, A-Level, State Board',
  'Students preparing for school or competitive exams',
  'Students who already have a tutor — and those who don\'t',
  'Students who want to ask without hesitation',
  'Students who want to learn with confidence',
]

const WHAT_TO_ASK = [
  'A specific concept you didn\'t understand',
  'A problem you couldn\'t solve',
  'A topic from school this week',
  'A doubt from your tuition homework',
  'A question about exam strategy',
  'A revision topic you\'re unsure about',
  'Anything you\'ve been afraid to ask in class',
]

const HOW_IT_WORKS = [
  {
    title: 'Register your interest',
    desc: 'Submit the form with your name & mobile. Takes under a minute.',
  },
  {
    title: 'Wait for the next session',
    desc: 'We schedule one free session every month. We\'ll notify you when the next one is set.',
  },
  {
    title: 'Bring your doubts',
    desc: 'Join with any concept or doubt you\'d like help with. Open format — your agenda.',
  },
  {
    title: 'Learn with confidence',
    desc: 'Leave with clarity, momentum, and the next session on your radar.',
  },
]

const SUBJECTS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Bengali',
  'Hindi',
  'History',
  'Geography',
  'Economics',
  'Accountancy',
  'Computer Science',
]

const MONTHLY_POINTS = [
  'Time to apply what you learned before the next session',
  'Space to come back with new doubts that emerged in between',
  'A consistent checkpoint that builds long-term confidence',
  'No pressure — attend whenever you can',
]

const FAQS = [
  {
    q: 'Is the session really free?',
    a: 'Yes. The Concept & Doubt Clearing session is completely free for every student who registers. There is no cost and no commitment to enroll in any paid programme.',
  },
  {
    q: 'Do I need to be a Srijee student to join?',
    a: 'No. The session is open to all students, regardless of where you currently study. You just need to register your interest to be notified.',
  },
  {
    q: 'When is the next session?',
    a: 'We schedule one free session every month. Once you register your interest, we\'ll notify you as soon as the next session\'s date and time are confirmed.',
  },
  {
    q: 'Which subjects can I ask about?',
    a: 'The session is open-format — you can bring doubts from any core academic subject. While we cover Mathematics, Science, English, and other core areas, the exact focus each month depends on the educator facilitating that session.',
  },
  {
    q: 'How do I join the session?',
    a: 'Once you\'re registered and the next session is scheduled, we\'ll share joining details with you directly — typically via the mobile number or email you provided.',
  },
  {
    q: 'Can my friends join too?',
    a: 'Yes — the session is open to all students. Share the page with anyone you think would benefit, and they can register their interest separately.',
  },
]

/* ── Inline icons ─────────────────────────────────────────────── */
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
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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
function DotIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
      <circle cx="4" cy="4" r="3" />
    </svg>
  )
}
function BigCheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}