import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { programmes, programmeCategories, featuredProgrammes } from '../../data/programmes.js'

/**
 * ProgrammesSection — REAL Srijee programmes (17+ offerings).
 * Filterable by category. Replaces the old 4-card Programs section.
 */
export function ProgrammesSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? programmes
    : programmes.filter((p) => p.category === activeCategory)

  return (
    <Section className="relative section-surface-accent">
      <SectionBackground variant="grid" tone="accent" intensity={0.5} />
      <SectionBackground variant="glow" tone="brand" corner="bottom-left" intensity={0.5} />
      <Container>
        <SectionHeading
          eyebrow="Our Programmes"
          title="Pick a course to get started"
          description="From school tuition to JEE/NEET, foreign languages, coding for kids, chess, and yoga — find the right programme for your child."
          align="left"
          action={<Button as={Link} to="/courses" variant="secondary" size="md">View all {programmes.length} programmes →</Button>}
        />

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <CategoryChip label="All" active={activeCategory === 'All'} onClick={() => setActiveCategory('All')} count={programmes.length} />
          {programmeCategories.map((c) => (
            <CategoryChip
              key={c}
              label={c}
              active={activeCategory === c}
              onClick={() => setActiveCategory(c)}
              count={programmes.filter((p) => p.category === c).length}
            />
          ))}
        </div>

        {/* Programme grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProgrammeCard key={p.slug} programme={p} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function CategoryChip({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? 'bg-brand-600 text-white shadow-glow-brand'
          : 'bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300'
      }`}
    >
      {label}
      <span className={`text-2xs ${active ? 'text-brand-100' : 'text-ink-400'}`}>{count}</span>
    </button>
  )
}

function ProgrammeCard({ programme, index }) {
  const isFeatured = featuredProgrammes.includes(programme.slug)
  return (
    <Link
      to={programme.to}
      className="card card-hover glow-border group p-5 flex flex-col animate-fade-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30 text-2xl group-hover:scale-110 transition-transform">
          {programme.icon}
        </span>
        <div className="flex gap-1.5">
          {programme.popular && <Badge tone="brand" size="xs">Popular</Badge>}
          {isFeatured && <Badge tone="accent" size="xs">Featured</Badge>}
        </div>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-white">{programme.label}</h3>
      <p className="mt-1 text-xs text-brand-700 dark:text-brand-400 font-medium">{programme.tagline}</p>
      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 flex-1 line-clamp-2">{programme.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {programme.features.slice(0, 3).map((f) => (
          <li key={f} className="chip bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-2xs">
            {f}
          </li>
        ))}
        {programme.features.length > 3 && (
          <li className="chip bg-ink-100 dark:bg-ink-800 text-ink-400 text-2xs">
            +{programme.features.length - 3} more
          </li>
        )}
      </ul>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-400 group-hover:gap-2 transition-all">
        Get in touch
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </Link>
  )
}

/**
 * Compact 6-card version (matches srijeetutor.com homepage layout).
 * Use on homepage; full version above for /courses page.
 */
export function FeaturedProgrammesSection() {
  const featured = featuredProgrammes
    .map((slug) => programmes.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 6)

  return (
    <Section tone="subtle" className="relative">
      <SectionBackground variant="aurora" tone="teal" intensity={0.6} />
      <Container>
        <SectionHeading
          eyebrow="Featured Courses"
          title="Pick a course to get started"
          description="Most-requested programmes across school tuition, competitive exams, and skills."
          align="left"
          action={<Button as={Link} to="/courses" variant="secondary" size="md">View all programmes →</Button>}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProgrammeCard key={p.slug} programme={p} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
