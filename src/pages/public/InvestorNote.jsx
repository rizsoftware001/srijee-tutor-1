import React from 'react'
import { Link } from 'react-router-dom'

const focusAreas = [
  {
    title: 'Education Access',
    description:
      'Expanding access to structured and quality learning through online and offline education models.',
  },
  {
    title: 'Technology',
    description:
      'Using technology to make learning more accessible, measurable and engaging for students.',
  },
  {
    title: 'Educator Network',
    description:
      'Building a strong network of educators who can support students across different learning needs.',
  },
  {
    title: 'Long-Term Growth',
    description:
      'Developing sustainable education programmes designed to serve learners across multiple markets.',
  },
]

const milestones = [
  {
    year: '2024',
    title: 'Foundation',
    description:
      'Development of the SrijeeTutor education ecosystem and initial learning programmes.',
  },
  {
    year: '2025',
    title: 'Programme Expansion',
    description:
      'Expansion into additional academic, language and skill-development programmes.',
  },
  {
    year: '2026',
    title: 'Growing Presence',
    description:
      'Expansion of learning initiatives and presence across multiple locations.',
  },
  {
    year: 'Future',
    title: 'Scale & Innovation',
    description:
      'Continued development of technology-enabled learning and broader educational access.',
  },
]

export default function InvestorNote() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Investor Note
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building The Future
              <span className="block text-brand-300">
                Of Learning
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A demo investor-information page presenting SrijeeTutor’s
              vision, growth areas and long-term education strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Our Vision
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Creating a connected education ecosystem
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              SrijeeTutor aims to bring students, educators and learning
              programmes together through a combination of structured
              academic support, skill development and technology-enabled
              learning.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              The long-term vision is to build a scalable education platform
              that can serve learners across locations while maintaining a
              strong focus on quality, accessibility and student outcomes.
            </p>

            <div className="mt-7">
              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Strategic Focus
            </div>

            <div className="mt-6 space-y-5">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="flex gap-4"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {area.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth areas */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 sm:py-20">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Growth Areas
            </span>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Areas We Are Building
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Demo information for the organisation's long-term strategic
              direction.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="h-2 w-12 rounded-full bg-brand-600" />

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Journey
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Growth Timeline
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {index !== milestones.length - 1 && (
                <div className="absolute left-4 top-9 h-full w-px bg-slate-200 dark:bg-slate-800" />
              )}

              <div className="relative flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white ring-4 ring-brand-50 dark:ring-brand-950">
                {index + 1}
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h3>

                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                    {milestone.year}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container-page pb-16">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
          <h3 className="font-bold text-amber-900 dark:text-amber-300">
            Demo Information
          </h3>

          <p className="mt-2 text-sm leading-6 text-amber-800 dark:text-amber-400">
            The information on this page is placeholder/demo content for
            website development. Official financial information, investment
            opportunities, performance figures and company disclosures should
            be added only after they are approved by the organisation.
          </p>
        </div>
      </section>
    </main>
  )
}