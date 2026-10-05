import React, { useState } from 'react'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { faqs } from '../../data/faqs.js'
import { Link } from 'react-router-dom'

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" className="relative section-surface-brand">
      <SectionBackground variant="waves" tone="brand" position="top" intensity={0.6} />
      <SectionBackground variant="dots" tone="teal" intensity={0.4} />
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Still have a question? Talk to a counsellor — we’re happy to help."
        />
        <div className="mt-6 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`card overflow-hidden transition-colors ${isOpen ? 'border-brand-200' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink-900 dark:text-white">{item.q}</span>
                  <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all ${isOpen ? 'bg-brand-600 text-white rotate-45' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-ink-700 dark:text-ink-200 animate-fade-in">
                    <p className="leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-secondary btn-md">Still have a question? Contact us →</Link>
        </div>
      </Container>
    </Section>
  )
}
