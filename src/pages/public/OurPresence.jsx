import React from 'react'
import { Link } from 'react-router-dom'

const centers = [
  {
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    address: 'Salt Lake, Sector V, Kolkata, West Bengal',
    description:
      'Our Kolkata centre serves students across school education, competitive examinations and professional learning programmes.',
    image:
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    highlights: ['School Tuition', 'Competitive Exams', 'Skill Development'],
  },
  {
    city: 'Delhi',
    state: 'Delhi',
    country: 'India',
    address: 'Central Delhi, New Delhi',
    description:
      'Our Delhi presence connects students with experienced educators and structured academic programmes.',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Academic Tuition', 'Test Preparation', 'Career Guidance'],
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    address: 'Andheri, Mumbai, Maharashtra',
    description:
      'Our Mumbai presence supports learners through personalised tutoring and modern learning programmes.',
    image:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['One-to-One Tuition', 'Online Learning', 'Skill Courses'],
  },
  {
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    country: 'UAE',
    address: 'Abu Dhabi, United Arab Emirates',
    description:
      'Our UAE presence extends SrijeeTutor’s learning ecosystem to students and families in the region.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['International Curriculum', 'Online Tuition', 'Language Learning'],
  },
]

const presenceStats = [
  { value: '4+', label: 'Major Locations' },
  { value: '100+', label: 'Learning Programs' },
  { value: '1,000+', label: 'Learners Served' },
  { value: '24/7', label: 'Online Learning Access' },
]

export default function OurPresence() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Our Presence
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Learning Without
              <span className="block text-brand-600">Boundaries</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              SrijeeTutor is building a connected learning ecosystem across
              major cities and online communities, helping students access
              quality education wherever they are.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            {presenceStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="text-2xl font-bold text-brand-600 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Where We Are
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Our Centres & Locations
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Explore the locations where SrijeeTutor is creating opportunities
            for students, educators and learning communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {centers.map((center) => (
            <article
              key={center.city}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={center.image}
                  alt={`${center.city} centre`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                    {center.country}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {center.city}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-brand-600">
                  {center.address}
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {center.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {center.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white">
            Learn With SrijeeTutor
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Whether you are near one of our centres or learning from another
            city, our online and offline programmes help you move forward.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}