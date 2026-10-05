import React, { useState, useMemo } from 'react'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { galleryItems, galleryCategories } from '../../data/galleryItems.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'
import { SITE } from '../../config/site.js'

const TONE_BG = {
  brand:   'from-brand-500 to-brand-700',
  teal:    'from-teal-500 to-teal-700',
  accent:  'from-accent-500 to-accent-700',
  success: 'from-success-500 to-success-700',
  warning: 'from-warning-500 to-warning-700',
  danger:  'from-danger-500 to-danger-700',
}
const TONE_ICON = {
  Classes: '📚', Workshops: '🎯', Events: '🎉', Achievements: '🏆', Coding: '💻', Languages: '🌍',
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  )

  return (
    <>
      <Seo path="/gallery" title="Photo Gallery — Classes, Workshops & Events | Srijee Tutor" description="Photos from Srijee Tutor — online classes, home tuition, workshops, events, student achievements, coding classes, and foreign language sessions." />

      {/* Banner */}
      <section className="relative overflow-hidden bg-brand-teal-gradient">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />
            <span className="eyebrow text-brand-100 mt-4 inline-block">Our Gallery</span>
            <h1 className="h1 mt-3 text-white">Srijee in action</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-brand-50 text-pretty">
              Classes, workshops, events, student achievements, coding sessions, and language classes — moments from the Srijee community.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300'
                }`}
              >
                {c}
                {c !== 'All' && (
                  <span className={`text-2xs ${active === c ? 'text-brand-100' : 'text-ink-400'}`}>
                    {galleryItems.filter((g) => g.category === c).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-ink-200 dark:border-ink-700 shadow-sm hover:shadow-lg transition-all text-left animate-fade-up"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {/* Gradient placeholder background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${TONE_BG[item.color] || TONE_BG.brand}`} />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 dot-pattern opacity-10" />

                {/* Icon + title overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{TONE_ICON[item.category]}</span>
                  <p className="font-display text-sm sm:text-base font-bold leading-tight">{item.title}</p>
                  <p className="mt-1 text-2xs text-white/80 hidden sm:block">{item.category}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors flex items-end p-3">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-ink-500 dark:text-ink-300">
            <Badge tone="warning" size="xs" className="mr-1.5">Demo</Badge>
            Images shown are gradient placeholders. Replace with real Srijee event photos before launch.
          </p>
        </Container>
      </Section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightbox.title}`}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-ink-900 rounded-xl2 shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 rounded-md p-2 bg-white/80 dark:bg-ink-800/80 text-ink-700 dark:text-ink-200 hover:bg-white dark:hover:bg-ink-700"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </button>
            <div className={`aspect-video bg-gradient-to-br ${TONE_BG[lightbox.color] || TONE_BG.brand} relative flex items-center justify-center`}>
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <span className="text-6xl">{TONE_ICON[lightbox.category]}</span>
            </div>
            <div className="p-6">
              <Badge tone="brand" size="sm" className="mb-2">{lightbox.category}</Badge>
              <h2 className="h4 text-ink-900 dark:text-white">{lightbox.title}</h2>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

      <FinalCTA />
    </>
  )
}
