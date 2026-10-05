import React from 'react'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useTrainingCourse } from '../../context/TrainingCourseContext.jsx'
import { SITE } from '../../config/site.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

export default function SpokenEnglish() {
  const { openTrainingCourse } = useTrainingCourse()

  // Course config — passed to the direct registration modal
  const COURSE = {
    courseName: 'Spoken English',
    courseType: 'Language Course',
    icon: '💬',
    gradient: 'from-accent-500 to-accent-700',
  }

  const openForm = () => openTrainingCourse(COURSE)

  const benefits = [
    { icon: '🧠', title: 'Increase cognitive ability', desc: 'Switching between languages and structures sharpens your brain\'s processing speed.' },
    { icon: '🗣', title: 'Improved communication skills', desc: 'Master pronunciation, intonation, and flow for clear, confident English.' },
    { icon: '📈', title: 'Intellectual development', desc: 'Broader vocabulary and grammar understanding improves reading, writing, and critical thinking.' },
    { icon: '🤝', title: 'Build confidence in social situations', desc: 'From interviews to presentations — speak without hesitation in any setting.' },
  ]

  const modules = [
    { name: 'Foundation & Pronunciation', topics: ['Phonetics & sounds', 'Common mispronunciations', 'Word stress & intonation', 'Sentence rhythm'], level: 'Beginner' },
    { name: 'Grammar in Context', topics: ['Tenses in real use', 'Articles & prepositions', 'Modals & conditionals', 'Common Indian-English corrections'], level: 'Beginner → Intermediate' },
    { name: 'Conversation & Fluency', topics: ['Daily-life dialogues', 'Asking & answering questions', 'Expressing opinions', 'Active listening'], level: 'Intermediate' },
    { name: 'Public Speaking & Presentations', topics: ['Structuring a talk', 'Body language', 'Handling Q&A', 'Voice projection'], level: 'Intermediate → Advanced' },
    { name: 'Interview & Workplace English', topics: ['Resume language', 'Interview questions', 'Email etiquette', 'Meeting participation'], level: 'Advanced' },
    { name: 'Accent Neutralization', topics: ['Mother-tongue influence', 'Neutral vowel sounds', 'Connected speech', 'Pacing & pauses'], level: 'Advanced' },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Who is this Spoken English course for?', acceptedAnswer: { '@type': 'Answer', text: 'Students (Class 7+), college students, job-seekers, and working professionals — anyone who wants to speak English more confidently and correctly.' } },
      { '@type': 'Question', name: 'What is the duration of the course?', acceptedAnswer: { '@type': 'Answer', text: 'The full course runs for 3 months, with 3 sessions per week. We also offer fast-track (6 weeks) and weekend-only batches.' } },
      { '@type': 'Question', name: 'Do you offer demo classes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — book a free demo class through the Enroll as Student flow or call us at +91-9831114761.' } },
    ],
  }

  return (
    <>
      <Seo
        path="/courses/spoken-english"
        title="Spoken English Course in Kolkata — Build Fluency & Confidence | Srijee Tutor"
        description="Spoken English classes in Kolkata — pronunciation, grammar, conversation, public speaking, interview prep, and accent neutralization. Build fluency and confidence with certified trainers."
      />
      <StructuredData data={faqJsonLd} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-500 via-accent-600 to-accent-800">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Spoken English' }]} />
            <span className="eyebrow text-accent-100 mt-4 inline-block">💬 Spoken English</span>
            <h1 className="h1 mt-3 text-white">Speak English with confidence</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-accent-50 text-pretty leading-relaxed">
              As the most important language of communication across the world, English has the highest priority. Eventually speaking fluent English becomes a basic requirement in schools, colleges, workplaces and everywhere. The importance of spoken English cannot be denied, especially in the 21st century.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="secondary" size="lg" onClick={openForm} className="!bg-white !text-accent-700 hover:!bg-accent-50">
                Enroll Now
              </Button>
              <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">📞 {SITE.phoneDisplay}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Benefits of learning Spoken English"
            title="Why this course matters"
            description="Four research-backed outcomes of structured spoken English training."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card key={b.title} className="p-6 card-hover">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{b.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section tone="subtle">
        <Container>
          <SectionHeading
            eyebrow="Course Curriculum"
            title="6 modules · Beginner to Advanced"
            description="Structured progression — each module builds on the previous, with weekly assessments and conversation practice."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Card key={m.name} className="p-5 card-hover">
                <div className="flex items-start justify-between">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Badge tone="ink" size="xs">{m.level}</Badge>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">{m.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {m.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-500 flex-none" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Course info strip */}
      <Section className="!py-10">
        <Container>
          <Card className="overflow-hidden">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-ink-100 dark:divide-ink-700">
              {[
                { label: 'Duration', value: '3 months', icon: '⏱' },
                { label: 'Sessions / week', value: '3', icon: '📚' },
                { label: 'Batch size', value: '6–10', icon: '👥' },
                { label: 'Mode', value: 'Online / Classroom', icon: '💻' },
              ].map((s) => (
                <div key={s.label} className="p-5 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-display text-base font-bold text-ink-900 dark:text-white">{s.value}</p>
                  <p className="text-2xs text-ink-500 dark:text-ink-300">{s.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* Who is this for */}
      <Section>
        <Container size="narrow">
          <SectionHeading eyebrow="Who is this for" title="Built for every learner" />
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              ['👨‍🎓 Students (Class 7+)', 'Build fluency early for academic success and future interviews.'],
              ['👩‍🎓 College Students', 'Crack campus interviews and present with confidence.'],
              ['💼 Job Seekers', 'Acing interviews, drafting professional emails, participating in meetings.'],
              ['👨‍💼 Working Professionals', 'Improve workplace communication and presentation skills.'],
              ['🏠 Homemakers', 'Confidently handle school meetings, travel, and social situations.'],
              ['🌍 Study-Abroad Aspirants', 'Meet English proficiency requirements for foreign universities.'],
            ].map(([title, desc]) => (
              <Card key={title} className="p-4 flex items-start gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-300 mt-0.5">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
