import React, { useState } from 'react'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { testimonials } from '../../data/testimonials.js'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <Section tone="subtle" className="relative">
      <SectionBackground variant="blobs" tone="accent" intensity={0.6} />
      <SectionBackground variant="dots" tone="warning" intensity={0.4} />
      <Container>
        <SectionHeading
          eyebrow="Student Success"
          title="What Our Students Say"
          description="Real feedback from real students who transformed their academic journey with us."
        />

        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <CardBody className="!p-0">
              {/* Top bar — verified + rating */}
              <div className="flex items-center justify-between gap-3 px-7 pt-6 pb-2">
                <Badge tone="success" size="sm" dot>Verified Student</Badge>
                <div className="flex gap-0.5 text-accent-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.8 3.8L13 5.4l-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4.2-.6z"/></svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="px-7 sm:px-9 pb-7">
                <svg className="text-brand-200 dark:text-brand-800" width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h3v8H3v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1zm9 0h3v8h-7v-8c0-3 1-5 3-6l1 2c-1 .5-2 1.5-2 3h2v1z"/></svg>
                <p className="mt-4 text-lg sm:text-xl text-ink-800 dark:text-ink-100 text-pretty leading-relaxed">{t.quote}</p>

                {/* Author */}
                <div className="mt-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white font-display font-semibold text-lg">
                      {t.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white">{t.name}</p>
                      <p className="text-sm text-ink-500 dark:text-ink-300">{t.role} · {t.school}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ink-400">{t.location}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-brand-600 shadow-glow-brand' : 'w-2 bg-ink-300 dark:bg-ink-700 hover:bg-ink-400'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
