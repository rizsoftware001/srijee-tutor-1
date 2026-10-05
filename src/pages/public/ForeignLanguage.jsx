import React from 'react'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { useForeignLanguage } from '../../context/ForeignLanguageContext.jsx'
import { SITE } from '../../config/site.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

const LANGUAGES = [
  {
    name: 'Spanish',
    flag: '🇪🇸',
    tagline: 'Second largest spoken language in the world',
    fact: 'The Spanish language is considered the second largest spoken language in the entire world.',
    learners: '560M+',
    levels: ['A1', 'A2', 'B1', 'B2'],
    color: 'from-yellow-500 to-red-600',
  },
  {
    name: 'French',
    flag: '🇫🇷',
    tagline: 'The language of culture, diplomacy & literature',
    fact: '29% of the English vocabulary comes from French and it is easier to learn than you think.',
    learners: '300M+',
    levels: ['A1', 'A2', 'B1', 'B2'],
    color: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'German',
    flag: '🇩🇪',
    tagline: 'The language of engineering & opportunity',
    fact: 'The German language is spoken by 95 million native speakers worldwide.',
    learners: '130M+',
    levels: ['A1', 'A2', 'B1', 'B2'],
    color: 'from-amber-500 to-gray-800',
  },
]

export default function ForeignLanguage() {
  const { openEnrollment } = useEnrollment()
  const { openForeignLanguage } = useForeignLanguage()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which foreign languages does Srijee teach?', acceptedAnswer: { '@type': 'Answer', text: 'Srijee offers Spanish, French, and German with certified trainers. Demo classes available before you commit.' } },
      { '@type': 'Question', name: 'Do you prepare students for international certification exams?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — our curriculum is aligned with CEFR levels A1 to B2, preparing students for international certification exams.' } },
      { '@type': 'Question', name: 'Are demo classes available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, demo classes are available for French, Spanish, and German. Book a free demo through the Enroll as Student flow or call us.' } },
    ],
  }

  return (
    <>
      <Seo
        path="/courses/foreign-language"
        title="Foreign Language Courses in Kolkata — Spanish, French, German | Srijee Tutor"
        description="Learn Spanish, French, and German from certified trainers. Srijee Tutor offers foreign language courses in Kolkata with CEFR-aligned curriculum and demo classes."
      />
      <StructuredData data={faqJsonLd} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-teal-700 to-brand-800">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Foreign Language' }]} />
            <span className="eyebrow text-brand-100 mt-4 inline-block">🌍 Foreign Language</span>
            <h1 className="h1 mt-3 text-white">Spanish · German · French</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-brand-50 text-pretty leading-relaxed">
              Learning a foreign language has always proved to be beneficial for every student. It not only offers deep knowledge and understanding of a language but also makes the student more confident and proactive in every situation while they are studying abroad. If not abroad, learning a foreign language can bring a positive impact to your resume while working even in your own country.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="accent" size="lg" onClick={() => openForeignLanguage('')}>Book a Free Demo</Button>
              <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">📞 {SITE.phoneDisplay}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Language cards */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Choose your language"
            title="Three languages, one goal — fluency"
            description="Certified trainers. CEFR-aligned curriculum. Demo classes before you commit."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {LANGUAGES.map((lang, i) => (
              <Card key={lang.name} className="overflow-hidden card-hover animate-fade-up" >
                <div className={`aspect-[3/2] bg-gradient-to-br ${lang.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <span className="text-7xl">{lang.flag}</span>
                </div>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{lang.name}</h3>
                    <Badge tone="brand" size="xs">{lang.learners} speakers</Badge>
                  </div>
                  <p className="mt-1 text-sm text-brand-700 dark:text-brand-400 font-medium">{lang.tagline}</p>

                  <div className="mt-4 rounded-lg bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-3">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">Did you know?</p>
                    <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{lang.fact}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-2">CEFR Levels Covered</p>
                    <div className="flex flex-wrap gap-1.5">
                      {lang.levels.map((lv) => (
                        <span key={lv} className="chip bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-2xs">{lv}</span>
                      ))}
                    </div>
                  </div>

                  <Button type="button" variant="outline" size="sm" fullWidth className="mt-5" onClick={() => openForeignLanguage(lang.name)}>
                    Enroll for {lang.name} →
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why learn a foreign language */}
      <Section tone="subtle">
        <Container>
          <SectionHeading eyebrow="Why learn" title="Benefits of learning a foreign language" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🎓', title: 'Study Abroad', desc: 'Meet language proficiency requirements for universities in Europe, Canada, and Australia.' },
              { icon: '💼', title: 'Career Boost', desc: 'A second language on your CV stands out in MNC hiring — especially in IT, hospitality, and BPO.' },
              { icon: '🧠', title: 'Cognitive Edge', desc: 'Bilingual brains show better focus, problem-solving, and delayed cognitive decline.' },
              { icon: '🌍', title: 'Cultural Access', desc: 'Read literature, watch films, and travel with confidence in the language of the country.' },
              { icon: '🗣', title: 'Confidence', desc: 'Speaking a new language builds general communication confidence — in any language.' },
              { icon: '📚', title: 'Exam Prep', desc: 'Aligned with international certification — DELE (Spanish), DELF/DALF (French), Goethe (German).' },
              { icon: '👨‍🏫', title: 'Certified Trainers', desc: 'Learn from Srijee\'s certified language trainers with native-style fluency.' },
              { icon: '🆓', title: 'Free Demo Class', desc: 'Try a class before you commit. No pressure, no upfront fees.' },
            ].map((b) => (
              <Card key={b.title} className="p-5 card-hover">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">{b.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">{b.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Curriculum / levels */}
      <Section>
        <Container size="narrow">
          <SectionHeading eyebrow="Curriculum" title="CEFR-aligned levels" description="Our curriculum follows the Common European Framework of Reference for Languages — the global standard." />
          <div className="mt-8 space-y-3">
            {[
              { level: 'A1', title: 'Beginner', desc: 'Understand and use familiar everyday expressions. Introduce yourself and ask basic questions.' },
              { level: 'A2', title: 'Elementary', desc: 'Handle routine tasks. Describe simple aspects of your background and immediate environment.' },
              { level: 'B1', title: 'Intermediate', desc: 'Deal with most travel situations. Produce simple connected text on familiar topics.' },
              { level: 'B2', title: 'Upper Intermediate', desc: 'Understand the main ideas of complex text. Interact with native speakers with reasonable fluency.' },
            ].map((lv) => (
              <Card key={lv.level} className="p-4 flex items-start gap-4 card-hover cursor-pointer" onClick={() => openForeignLanguage('')}>
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-600 text-white font-display text-base font-bold">{lv.level}</span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-ink-900 dark:text-white">{lv.title}</p>
                  <p className="text-sm text-ink-700 dark:text-ink-200">{lv.desc}</p>
                </div>
                <span className="text-xs font-semibold text-brand-700 dark:text-brand-400 hidden sm:block mt-1">Inquire →</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
