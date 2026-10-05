import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { Button } from '../ui/Button.jsx'
import { SITE, ENROLL_CTA } from '../../config/site.js'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'

export function BecomeTutorCTA() {
  return (
    <Section tone="dark" className="bg-aurora noise-overlay">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-brand-300">For Teachers</span>
            <h2 className="h2 mt-3 text-white text-balance">
              Apply As A Tutor Now
            </h2>
            <p className="mt-4 max-w-xl text-ink-300 text-pretty">
              Srijee offers teachers to come forward and help out students in need. Without a teacher, students do not get the proper education or guidance, as some students are first-generation learners.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/become-a-tutor" className="btn-accent btn-lg">Apply Now →</Link>
              <Link to="/teacher/login" className="btn-secondary btn-lg !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">Tutor Login</Link>
            </div>
          </div>
          <div className="card bg-white/5 border-white/10 p-7 backdrop-blur">
            <ol className="space-y-4">
              {[
                ['Register', 'Name + mobile. OTP verification.'],
                ['Complete profile', 'Education, experience, preferences.'],
                ['Get verified', 'Our team reviews your documents.'],
                ['Start teaching', 'Receive matched opportunities.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-3">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">{i+1}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t}</p>
                    <p className="text-xs text-ink-300">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function FinalCTA() {
  const { openEnrollment } = useEnrollment()
  return (
    <Section className="bg-aurora">
      <Container>
        <div className="card glass p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center">Ready For Your Next Journey With Us?</span>
          <h2 className="h2 mt-3 text-balance">
            We bring opportunities for students to pursue their education in India.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300 text-pretty">
            Join our tuition classes for better results and knowledge in individual subjects. Our initiative is also to motivate teachers to join us for giving tuition.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button type="button" variant="primary" size="lg" onClick={openEnrollment}>{ENROLL_CTA}</Button>
            <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg">📞 {SITE.phoneDisplay}</Button>
            <Button as={Link} to="/contact" variant="ghost" size="lg">Free Counselling</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
