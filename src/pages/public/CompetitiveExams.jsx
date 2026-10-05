import React from 'react'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { SITE } from '../../config/site.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

const EXAMS = [
  {
    code: 'JEE',
    name: 'Joint Entrance Examination',
    tagline: 'Engineering — India\'s most prestigious colleges',
    desc: 'Students with the intention to build a career in the field of technical studies and engineering must pursue JEE, as it is the only gateway to getting into the most prestigious engineering colleges both private and government in India.',
    color: 'from-brand-600 to-brand-800',
    icon: '⚙',
    papers: ['JEE Main', 'JEE Advanced'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    eligibility: 'Class 11–12 + drop-year',
    duration: '1–2 years',
  },
  {
    code: 'NEET',
    name: 'National Eligibility cum Entrance Test',
    tagline: 'Medical — gateway to MBBS & BDS in India',
    desc: 'Students who want to pursue their career in the field of medical science have to sit for the National Eligibility Entrance Test conducted by the National Testing Agency (NTA).',
    color: 'from-success-600 to-teal-800',
    icon: '🩺',
    papers: ['NEET-UG'],
    subjects: ['Physics', 'Chemistry', 'Biology'],
    eligibility: 'Class 11–12 + drop-year',
    duration: '1–2 years',
  },
  {
    code: 'NTSE',
    name: 'National Talent Search Examination',
    tagline: 'Scholarship — Class 10 students',
    desc: 'Candidates who want to pursue higher education in the field of Science or Social Studies have to sit for NTSE as it is the gateway to an excellent college in the future. You can surpass admission tests of colleges of your choice. "NTSE scholar" on your resume is good when applying for jobs or interviews.',
    color: 'from-accent-500 to-accent-700',
    icon: '🏆',
    papers: ['Stage 1 (State)', 'Stage 2 (National)'],
    subjects: ['MAT (Mental Ability)', 'SAT (Scholastic Aptitude)'],
    eligibility: 'Class 10',
    duration: '6–10 months',
  },
  {
    code: 'OLYMPIAD',
    name: 'Olympiad Exams',
    tagline: 'Foundation — K-12, multiple subjects',
    desc: 'This course is not only to test the basic subjects but also to augment the logical reasoning ability of a child. It builds the thinking capacity, problem-solving skills, and confidence of a child at a young age.',
    color: 'from-warning-500 to-accent-600',
    icon: '🥇',
    papers: ['NSO (Science)', 'IMO (Maths)', 'IEO (English)', 'NCO (Cyber)', 'IGKO (GK)'],
    subjects: ['Science', 'Mathematics', 'English', 'Cyber', 'GK'],
    eligibility: 'K-12',
    duration: 'Year-round',
  },
]

export default function CompetitiveExams() {
  const { openEnrollment } = useEnrollment()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Does Srijee provide JEE & NEET preparation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Srijee Tutor offers Class XII programs focused on JEE and NEET preparation, plus a unique Class XIII drop-year programme for a focused second attempt.' } },
      { '@type': 'Question', name: 'What is NTSE and who can apply?', acceptedAnswer: { '@type': 'Answer', text: 'NTSE is the National Talent Search Examination for Class 10 students. Srijee prepares students for both Stage 1 (State) and Stage 2 (National).' } },
      { '@type': 'Question', name: 'Which Olympiads does Srijee prepare students for?', acceptedAnswer: { '@type': 'Answer', text: 'Srijee prepares students for NSO (Science), IMO (Mathematics), IEO (English), NCO (Cyber), and IGKO (General Knowledge) Olympiads.' } },
      { '@type': 'Question', name: 'Is there a drop-year (Class XIII) programme?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Srijee\'s unique Class XIII programme is a full-time drop-year course for JEE & NEET aspirants who want a focused second attempt.' } },
    ],
  }

  return (
    <>
      <Seo
        path="/courses/competitive-exams"
        title="Competitive Exam Coaching in Kolkata — JEE, NEET, NTSE, Olympiad | Srijee Tutor"
        description="Competitive exam preparation at Srijee Tutor — JEE Main & Advanced, NEET-UG, NTSE Stage 1 & 2, and Olympiads (NSO, IMO, IEO, NCO, IGKO). Expert faculty, regular mock tests, and dedicated mentorship."
      />
      <StructuredData data={faqJsonLd} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-800 via-brand-900 to-ink-950">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Competitive Exams' }]} />
            <span className="eyebrow text-brand-300 mt-4 inline-block">🏆 Competitive Exams</span>
            <h1 className="h1 mt-3 text-white">JEE · NEET · NTSE · Olympiad</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink-200 text-pretty leading-relaxed">
              Srijee prepares students for India's most competitive exams — engineering, medical, scholarship, and foundation Olympiads. Expert faculty, structured curriculum, regular mock tests, and dedicated mentorship for every aspirant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="accent" size="lg" onClick={openEnrollment}>Enroll Now</Button>
              <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">📞 {SITE.phoneDisplay}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Exam cards — full detail */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Programmes"
            title="4 competitive exam tracks"
            description="Each track is structured around the official syllabus, with progressive difficulty, weekly tests, and full-length mock exams."
          />
          <div className="mt-10 space-y-6">
            {EXAMS.map((ex, i) => (
              <Card key={ex.code} className="overflow-hidden card-hover animate-fade-up">
                <div className="grid lg:grid-cols-12">
                  {/* Left — identity card */}
                  <div className={`lg:col-span-4 p-6 sm:p-7 bg-gradient-to-br ${ex.color} text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 grid-pattern opacity-15" />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-3xl">
                          {ex.icon}
                        </span>
                        <div>
                          <p className="font-display text-2xl font-bold">{ex.code}</p>
                          <p className="text-xs text-white/80">{ex.tagline}</p>
                        </div>
                      </div>
                      <div className="mt-5 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-white/70">Eligibility</span>
                          <span className="font-medium">{ex.eligibility}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">Duration</span>
                          <span className="font-medium">{ex.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right — description + details + CTA */}
                  <CardBody className="lg:col-span-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{ex.name}</h3>
                        <p className="text-sm text-ink-600 dark:text-ink-300 mt-1.5 leading-relaxed">{ex.desc}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                      <div>
                        <p className="text-2xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-1.5">Papers / Stages</p>
                        <div className="flex flex-wrap gap-1.5">
                          {ex.papers.map((p) => (
                            <span key={p} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{p}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-2xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-1.5">Subjects</p>
                        <div className="flex flex-wrap gap-1.5">
                          {ex.subjects.map((s) => (
                            <span key={s} className="chip bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-2xs">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button type="button" variant="primary" size="sm" onClick={openEnrollment}>Enroll for {ex.code}</Button>
                      <Button as="a" href={`tel:${SITE.phoneHref}`} variant="ghost" size="sm">Talk to a counsellor</Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Srijee for competitive exams */}
      <Section tone="subtle">
        <Container>
          <SectionHeading eyebrow="Why Srijee" title="Built for serious aspirants" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from teachers who have themselves cleared JEE/NEET or taught for 10+ years.' },
              { icon: '📋', title: 'Structured Curriculum', desc: 'Syllabus broken into weekly modules with progressive difficulty and revision windows.' },
              { icon: '📊', title: 'Regular Mock Tests', desc: 'Weekly chapter tests, monthly full-length mocks, and All-India rank prediction.' },
              { icon: '📈', title: 'Performance Analytics', desc: 'Track strong/weak chapters, time management, and accuracy with detailed analytics.' },
              { icon: '💬', title: 'Doubt Resolution', desc: 'Daily doubt sessions — never get stuck on a problem for more than 24 hours.' },
              { icon: '🎯', title: 'Mentorship', desc: 'A dedicated mentor tracks your progress, motivates you, and adjusts your plan.' },
              { icon: '📚', title: 'Study Material', desc: 'Comprehensive printed + digital material, including previous-year papers.' },
              { icon: '🔄', title: 'Class XIII Programme', desc: 'Drop-year intensive — for a focused second attempt at JEE/NEET.' },
            ].map((b) => (
              <Card key={b.title} className="p-5 card-hover">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="mt-3 font-display text-sm font-semibold text-ink-900 dark:text-white">{b.title}</h3>
                <p className="mt-1 text-xs text-ink-600 dark:text-ink-300">{b.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
