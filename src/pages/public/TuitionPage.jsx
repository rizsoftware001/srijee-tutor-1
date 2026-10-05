import React from 'react'
import { Link } from 'react-router-dom'
import { Seo, StructuredData, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { FinalCTA } from '../../components/sections/CTASections.jsx'
import { HowItWorks } from '../../components/sections/HowItWorks.jsx'

const VARIANTS = {
  'online-tuition': {
    title: 'Online Tuition (Group)',
    headline: 'Live group classes, from anywhere',
    desc: 'Join live, interactive online group classes from anywhere. Learn with experienced tutors, participate in real-time lessons, ask questions, and access recorded sessions for revision.',
    points: [
      [
        'Live group classes',
        'Learn together with other students through live, interactive online classes.',
      ],
      [
        'Learn from anywhere',
        'Join your class from home or anywhere with a reliable internet connection.',
      ],
      [
        'Experienced tutors',
        'Learn from verified and experienced educators across a range of subjects.',
      ],
      [
        'Interactive learning',
        'Ask questions, participate in discussions, and interact with your tutor during live classes.',
      ],
      [
        'Recorded for revision',
        'Access class recordings to revise important topics and revisit lessons.',
      ],
    ],
    faqs: [
      [
        'Are the online classes live or recorded?',
        'Classes are conducted live with teachers. Recordings are also available for revision.',
      ],
      [
        'Are online tuition classes conducted in groups?',
        'Yes. Online Tuition is designed as live group classes where students learn together with a teacher.',
      ],
      [
        'Can students join the classes from anywhere?',
        'Yes. Students can join the live classes from anywhere with a suitable internet connection.',
      ],
    ],
  },

  'home-tuition': {
    title: 'Home Tuition',
    headline: 'A verified tutor, at your doorstep',
    desc: 'Get personalised one-to-one tuition at home with a verified tutor. The tutor visits your home and teaches according to the student’s learning needs, syllabus, pace, and academic goals.',
    points: [
      [
        'One-to-one at home',
        'Dedicated individual attention from a tutor at your home.',
      ],
      [
        'Verified tutors',
        'Tutor profiles are reviewed and relevant documents are verified before activation.',
      ],
      [
        'Personalised learning',
        'Lessons can be adapted to the student’s pace, syllabus, strengths, and learning gaps.',
      ],
      [
        'Flexible scheduling',
        'Choose suitable class timings according to tutor availability and your requirements.',
      ],
      [
        'Regular progress tracking',
        'Monitor the student’s learning progress and identify areas that need additional attention.',
      ],
    ],
    faqs: [
      [
        'Are home tutors verified?',
        'Yes. Tutor profiles and relevant documents are reviewed before tutors are activated.',
      ],
      [
        'Which areas do you cover for home tuition?',
        'Kolkata, New Town, Salt Lake, Howrah, Siliguri, and other parts of West Bengal.',
      ],
      [
        'Can I switch from home tuition to online tuition?',
        'Yes. Contact your counsellor to discuss the available online learning options.',
      ],
    ],
  },

  'one-to-one-tuition': {
    title: 'One-to-One Tuition (Online)',
    headline: 'Dedicated personal attention — online',
    desc: 'Get dedicated one-to-one online tuition designed around the student’s pace, learning gaps, syllabus, and academic goals. Learn directly with a tutor through live online sessions.',
    points: [
      [
        'Dedicated one-to-one classes',
        'Learn individually with a tutor without sharing the session with other students.',
      ],
      [
        'Personalised learning',
        'The tutor can adapt lessons according to the student’s pace, strengths, and learning gaps.',
      ],
      [
        'Live online sessions',
        'Interact directly with your tutor through live online classes.',
      ],
      [
        'Flexible scheduling',
        'Discuss suitable class timings based on tutor availability and your requirements.',
      ],
      [
        'Regular assessments',
        'Track learning progress and identify topics that require additional attention.',
      ],
    ],
    faqs: [
      [
        'What is One-to-One Tuition (Online)?',
        'It is a live online tuition format where one student learns directly with one tutor.',
      ],
      [
        'How is it different from Online Tuition?',
        'Online Tuition provides live group classes, while One-to-One Tuition (Online) provides dedicated individual sessions between one student and one tutor.',
      ],
      [
        'Can I choose one-to-one online tuition for multiple subjects?',
        'Yes. Students can choose one-to-one online tuition for different subjects based on their learning requirements and tutor availability.',
      ],
    ],
  },
}

export default function TuitionPage({ variant }) {
  const v = VARIANTS[variant]
  if (!v) return null
  const path = `/${variant}`

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: v.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  return (
    <>
      <Seo path={path} />
      <StructuredData data={faqJsonLd} />
      <Section className="!pb-0">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tuition', to: '/tuition' }, { label: v.title }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">{v.title}</span>
            <h1 className="h1 mt-3 text-balance">{v.headline}</h1>
            <p className="mt-5 text-lg text-ink-600 text-pretty">{v.desc}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button as={Link} to="/student/requirement" variant="primary" size="lg">Find My Tutor</Button>
              <Button as={Link} to="/contact" variant="secondary" size="lg">Free Counselling</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {v.points.map(([title, desc]) => (
              <Card key={title} className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm text-ink-600">{desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title={`${v.title} — common questions`} />
          <div className="mt-8 space-y-3">
            {v.faqs.map(([q, a]) => (
              <Card key={q} className="p-5">
                <p className="font-display text-base font-semibold text-ink-900">{q}</p>
                <p className="mt-2 text-sm text-ink-600">{a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <HowItWorks />
      <FinalCTA />
    </>
  )
}
