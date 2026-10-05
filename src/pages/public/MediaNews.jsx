import React from 'react'

const newsItems = [
  {
    date: '15 September 2026',
    category: 'Education',
    title: 'SrijeeTutor Expands Its Learning Ecosystem',
    description:
      'SrijeeTutor continues to expand its academic and skill-development programmes to reach more learners through online and offline learning.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: '28 August 2026',
    category: 'Achievement',
    title: 'New Learning Programmes Introduced',
    description:
      'New academic support, language learning and technology-focused programmes are being introduced for students across different age groups.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: '10 July 2026',
    category: 'Community',
    title: 'Building Stronger Learning Communities',
    description:
      'SrijeeTutor continues working with educators and families to create structured, accessible and student-focused learning experiences.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
]

const mediaStats = [
  { value: '25+', label: 'Learning Initiatives' },
  { value: '4+', label: 'Major Locations' },
  { value: '100+', label: 'Education Programs' },
]

export default function MediaNews() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Media & News
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              SrijeeTutor
              <span className="block text-brand-600">
                In The News
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Follow our latest announcements, educational initiatives,
              achievements and updates from the SrijeeTutor community.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {mediaStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="text-3xl font-bold text-brand-600">
                  {stat.value}
                </div>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Latest Updates
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            News & Announcements
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Demo content for upcoming media coverage and organisational
            announcements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Press section */}
      <section className="container-page pb-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Media Enquiries
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Looking for information about SrijeeTutor?
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                Journalists, education partners and media organisations can
                contact our team for official information and media enquiries.
              </p>
            </div>

            <a
              href="mailto:media@srijeetutor.com"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
            >
              Contact Media Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}