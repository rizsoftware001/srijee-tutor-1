import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { courses } from '../../data/courses.js'

export function Programs() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Programs & Courses"
          title="Beyond school tuition"
          description="Specialised courses for languages, computers, and competitive exams — taught by domain experts."
          align="left"
          action={<Link to="/courses" className="btn-secondary btn-md">View all courses →</Link>}
        />
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <Link key={c.slug} to={`/courses?course=${c.slug}`} className="card card-hover p-6 flex flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl">{c.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{c.label}</h3>
              <p className="mt-2 text-sm text-ink-600 flex-1">{c.desc}</p>
              <ul className="mt-4 space-y-1">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-ink-600">
                    <span className="h-1 w-1 rounded-full bg-accent-500" /> {i}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
