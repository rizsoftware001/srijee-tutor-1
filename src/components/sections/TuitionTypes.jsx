import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { tuitionTypes } from '../../data/tuitionTypes.js'

export function TuitionTypes() {
  return (
    <Section tone="subtle" className="relative">
      <SectionBackground variant="rings" tone="brand" intensity={0.6} />
      <Container>
        <SectionHeading
          eyebrow="Tuition Types"
          title="Choose the mode that fits your child"
          description="Every child learns differently. Pick a mode — or talk to a counsellor to decide."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tuitionTypes.map((t) => (
            <Link
              key={t.slug}
              to={t.to}
              className="card card-hover p-6 flex flex-col"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">{t.icon}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-900 dark:text-white">{t.label}</h3>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 flex-1">{t.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {p}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-400">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
