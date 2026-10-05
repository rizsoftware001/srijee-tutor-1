import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Button } from '../ui/Button.jsx'
import { whySrijeeFeatures, trustBadges } from '../../data/whySrijee.js'
import { SITE } from '../../config/site.js'

const ICONS = {
  crown:    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 7l4 4 4-7 4 7 4-4-2 11H5L3 7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M5 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  compass:  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M14 8l-2 5-4 1 2-5 4-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  users:    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 18c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="15" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M14 18c0-2 1.5-4 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  clipboard:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="4" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 3h6v3H8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 9h8M7 12h6M7 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  chat:     <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8l-4 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  heart:    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 18 9c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
}

export function WhySrijee() {
  return (
    <Section className="relative section-surface-teal">
      <SectionBackground variant="mesh" tone="teal" intensity={0.8} />
      <SectionBackground variant="glow" tone="accent" corner="top-right" intensity={0.6} />
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Srijee Stands Out"
          description="We combine excellence in teaching with personalized care to ensure every student succeeds."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whySrijeeFeatures.map((f, i) => (
            <div
              key={f.title}
              className="card card-hover glow-border group p-6 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {ICONS[f.icon] || ICONS.crown}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl2 bg-gradient-to-r from-brand-600 to-brand-800 p-6 sm:p-7 text-white">
          <div>
            <p className="font-display text-xl font-bold">Join us now!</p>
            <p className="text-sm text-brand-100">Talk to our counsellor for free guidance.</p>
          </div>
          <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white !text-brand-700 hover:!bg-brand-50">
            📞 {SITE.phoneDisplay}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {trustBadges.map((badge) => (
            <span key={badge} className="chip border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200 text-sm px-4 py-2">
              <span className="text-success-500">✓</span> {badge}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  )
}
