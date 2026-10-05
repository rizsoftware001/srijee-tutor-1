import React from 'react'
import { Section, Container } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { Card, CardBody } from '../ui/Card.jsx'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'
import { masterClassTeachers } from '../../data/masterClassTeachers.js'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'

export function MasterClassSection() {
  const { openEnrollment } = useEnrollment()
  const [teacher1, teacher2] = masterClassTeachers

  return (
    <Section className="relative section-surface-brand">
      <SectionBackground variant="grid" tone="brand" intensity={0.4} />
      <SectionBackground variant="glow" tone="accent" corner="bottom-left" intensity={0.3} />
      <Container>
        <div className="mb-8 text-center">
          <span className="eyebrow mb-2 inline-block">Premium MasterClass</span>
          <h2 className="h2 text-ink-900 dark:text-white text-balance">Learn from the Best</h2>
          <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 max-w-2xl mx-auto text-pretty">
            Exclusive, intensive sessions led by our most senior educators. Designed for students aiming for top ranks.
          </p>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
          {teacher1 && <MasterClassTeacherCard teacher={teacher1} onApply={openEnrollment} />}
          <Card className="relative flex flex-col justify-between overflow-hidden border-brand-200 dark:border-brand-800 bg-gradient-to-br from-brand-50/80 to-teal-50/60 dark:from-brand-950/40 dark:to-teal-950/30">
            <CardBody className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🎓</span>
                <Badge tone="accent" size="sm" dot>Limited Seats</Badge>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900 dark:text-white">Srijee Advanced MasterClass</h3>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 leading-relaxed">A curated intensive program covering advanced problem-solving, conceptual mastery, and exam strategy for JEE/NEET aspirants.</p>
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-ink-300">Learning Highlights</p>
                <ul className="space-y-1.5">
                  {['Deep-dive into high-weightage topics','Real JEE/NEET problem solving','Personalized doubt clearing','Exam temperament & time strategy'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/50">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 dark:text-brand-400"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-ink-100 dark:border-ink-700 bg-white/60 dark:bg-ink-800/50 p-3 text-center">
                  <p className="text-xs text-ink-500 dark:text-ink-300">Duration</p>
                  <p className="text-sm font-bold text-ink-900 dark:text-white">8 Weeks</p>
                </div>
                <div className="rounded-lg border border-ink-100 dark:border-ink-700 bg-white/60 dark:bg-ink-800/50 p-3 text-center">
                  <p className="text-xs text-ink-500 dark:text-ink-300">Format</p>
                  <p className="text-sm font-bold text-ink-900 dark:text-white">Live + Recorded</p>
                </div>
              </div>
            </CardBody>
            <div className="p-5 pt-0">
              <Button type="button" variant="primary" size="lg" fullWidth onClick={openEnrollment}>Apply for MasterClass →</Button>
            </div>
          </Card>
          {teacher2 && <MasterClassTeacherCard teacher={teacher2} onApply={openEnrollment} />}
        </div>
      </Container>
    </Section>
  )
}

/* ─── Reusable Teacher Card ─── */
function MasterClassTeacherCard({ teacher, onApply }) {
  return (
    <Card className="card-hover flex flex-col overflow-hidden">
      <CardBody className="!p-0 flex flex-col flex-1">
        {/* Image with gradient overlay */}
        <div className={`relative aspect-[4/3] bg-gradient-to-br ${teacher.gradient} overflow-hidden`}>
          <img
            src={teacher.image}
            alt={teacher.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback to Unsplash if custom image not found
              e.target.src = 'https://images.unsplash.com/photo-1580489944761-15a4d6c32c46?w=600&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-lg font-bold text-white">{teacher.name}</h3>
            <p className="text-sm text-white/90">{teacher.designation}</p>
          </div>
        </div>

        {/* Info Body */}
        <div className="flex flex-1 flex-col p-5">
          {/* Free Class Schedule — appears BEFORE subject */}
          {teacher.schedule && teacher.schedule.length > 0 && (
            <div className="mb-3 rounded-lg border border-success-200 dark:border-success-800 bg-success-50/60 dark:bg-success-900/20 p-3">
              <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-success-700 dark:text-success-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Class Schedule
              </p>
              <div className="mt-2 space-y-1.5">
                {teacher.schedule.map((slot, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-ink-900 dark:text-white">{slot.day}</span>
                    <span className="text-ink-600 dark:text-ink-300">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subject chip */}
          <div className="flex flex-wrap gap-1.5">
            <span className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{teacher.subject}</span>
          </div>

          <div className="mt-3 space-y-1 text-sm">
            <p className="text-ink-700 dark:text-ink-200"><span className="font-semibold text-ink-900 dark:text-white">Qualification:</span> {teacher.qualification}</p>
            <p className="text-ink-700 dark:text-ink-200"><span className="font-semibold text-ink-900 dark:text-white">Experience:</span> {teacher.experience}</p>
          </div>

          <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed flex-1">{teacher.bio}</p>

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            className="mt-5"
            onClick={onApply}
          >
            Apply for MasterClass
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default MasterClassSection