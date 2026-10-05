import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'

/**
 * CanadaBlog — Canada blog landing page.
 *
 * Per spec §5: demo content only. All posts shown are clearly labelled Demo.
 * Per spec §8: 6 demo blog posts with Canada topics:
 *   - Ontario Grade 9 Math: A Parent's Guide (Demo)
 *   - University of Toronto Admissions: What You Need to Know (Demo)
 *   - French Immersion: Supporting Your Child at Home (Demo)
 *   - Why Online Tutoring Works for Canadian Families (Demo)
 *   - Provincial Exams Prep: A 10-Week Plan (Demo)
 *   - Building Strong Reading Habits in Elementary (Demo)
 */

const DEMO_POSTS = [
  {
    slug: 'demo-ca-ontario-grade-9-math',
    title: 'Ontario Grade 9 Math: A Parent\'s Guide (Demo Post)',
    excerpt: 'A plain-language walk-through of the Ontario de-streamed Grade 9 math course, including the new destreamed MTH1W curriculum. [Demo content — replace with verified Srijee Tutor Canada blog post before launch.]',
    category: 'Provincial Curriculum',
    date: '2026-08-15',
    readingTime: '8 min',
    isDemo: true,
  },
  {
    slug: 'demo-ca-uoft-admissions',
    title: 'University of Toronto Admissions: What You Need to Know (Demo Post)',
    excerpt: 'A breakdown of the U of T undergraduate admissions process — top-6 average, supplementary applications, and what really moves the needle. [Demo content.]',
    category: 'University Prep',
    date: '2026-07-22',
    readingTime: '7 min',
    isDemo: true,
  },
  {
    slug: 'demo-ca-french-immersion-home',
    title: 'French Immersion: Supporting Your Child at Home (Demo Post)',
    excerpt: 'Practical ways English-speaking parents can support French immersion learners at home — even if you don\'t speak French yourself. [Demo content.]',
    category: 'French Immersion',
    date: '2026-06-10',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-ca-online-tutoring-families',
    title: 'Why Online Tutoring Works for Canadian Families (Demo Post)',
    excerpt: 'From Vancouver to Halifax, online tutoring fits the Canadian family schedule — including provincial holidays, time zones, and after-school activities. [Demo content.]',
    category: 'Online Tutoring',
    date: '2026-04-15',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-ca-provincial-exams-10-week-plan',
    title: 'Provincial Exams Prep: A 10-Week Plan (Demo Post)',
    excerpt: 'A week-by-week study plan for Alberta diploma exams and Ontario literacy/numeracy assessments, with practice-test pacing. [Demo content.]',
    category: 'Test Prep',
    date: '2026-05-30',
    readingTime: '8 min',
    isDemo: true,
  },
  {
    slug: 'demo-ca-elementary-reading',
    title: 'Building Strong Reading Habits in Elementary (Demo Post)',
    excerpt: 'Practical strategies parents can use to support early literacy at home — from Kindergarten through Grade 5. [Demo content.]',
    category: 'Elementary',
    date: '2026-03-08',
    readingTime: '5 min',
    isDemo: true,
  },
]

const CATEGORIES = ['All', 'Provincial Curriculum', 'University Prep', 'French Immersion', 'Online Tutoring', 'Test Prep', 'Elementary']

export default function CanadaBlog() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? DEMO_POSTS : DEMO_POSTS.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <RegionSeo
        path="/ca/blog"
        title="Blog — Srijee Tutor Canada"
        description="Tutoring tips, provincial exam guidance, and learning resources for Canadian families."
      />

      <section className="bg-gradient-to-br from-red-700 via-red-800 to-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ca' }, { label: 'Blog' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Tutoring insights for Canadian families
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Practical tips on provincial curriculum, French immersion, university prep,
            provincial exams, and online learning.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-red-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              to={`/ca/blog/${featured.slug}`}
              className="block bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 hover:shadow-md transition-shadow"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
                <div className="aspect-[16/9] bg-gradient-to-br from-red-700 to-blue-900 rounded-xl flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/30" aria-hidden="true">
                    <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-700 text-white text-2xs font-semibold">Featured</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-2xs">{featured.category}</span>
                    {featured.isDemo && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold">Demo</span>
                    )}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {featured.excerpt}
                  </p>
                  <p className="text-xs text-slate-500">{formatDate(featured.date)} · {featured.readingTime} read</p>
                </div>
              </div>
            </Link>
          )}

          {/* Grid of remaining posts */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  to={`/ca/blog/${post.slug}`}
                  className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-red-700 to-blue-900 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="text-white/30" aria-hidden="true">
                      <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-2xs">{post.category}</span>
                      {post.isDemo && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold">Demo</span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-slate-500">{formatDate(post.date)} · {post.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Demo disclaimer */}
          <div className="mt-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Demo content.</strong> All posts shown here are placeholders. Replace with
            verified Srijee Tutor Canada blog content before public launch.
          </div>
        </div>
      </section>
    </>
  )
}

function formatDate(iso) {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-red-100/80">
      <ol className="flex items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-white">{it.label}</Link>
            ) : (
              <span className="text-white">{it.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
