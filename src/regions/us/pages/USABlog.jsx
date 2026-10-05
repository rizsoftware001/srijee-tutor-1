import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'

/**
 * USABlog — US blog landing page.
 *
 * Per spec §5: demo content only. All posts shown are clearly labelled Demo.
 */

const DEMO_POSTS = [
  {
    slug: 'demo-us-sat-prep-2026',
    title: 'SAT Prep: A 12-Week Roadmap (Demo Post)',
    excerpt: 'A week-by-week SAT prep plan from baseline test to test day. [Demo content — replace with verified Srijee Tutor USA blog post before launch.]',
    category: 'Test Prep',
    date: '2026-08-15',
    readingTime: '8 min',
    isDemo: true,
  },
  {
    slug: 'demo-us-ap-calc-tips',
    title: '5 Tips for AP Calculus AB Success (Demo Post)',
    excerpt: 'How to structure your study for AP Calculus AB, including pacing and free-response practice. [Demo content.]',
    category: 'AP',
    date: '2026-07-22',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-us-common-core-parents',
    title: 'A Parent\'s Guide to Common Core Math (Demo Post)',
    excerpt: 'Demystifying Common Core math for parents of elementary students. [Demo content.]',
    category: 'Parenting',
    date: '2026-06-10',
    readingTime: '7 min',
    isDemo: true,
  },
  {
    slug: 'demo-us-college-essay-tips',
    title: 'College Essay Tips from Srijee Counsellors (Demo Post)',
    excerpt: 'Three concrete ways to make your college application essay stand out. [Demo content.]',
    category: 'College Prep',
    date: '2026-05-30',
    readingTime: '5 min',
    isDemo: true,
  },
  {
    slug: 'demo-us-online-tutoring-benefits',
    title: 'Why Online Tutoring Works for US Families (Demo Post)',
    excerpt: 'How online tutoring compares to in-person for K-12 students, with practical guidance. [Demo content.]',
    category: 'Online Tutoring',
    date: '2026-04-15',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-us-elementary-reading',
    title: 'Building Strong Reading Habits in Elementary School (Demo Post)',
    excerpt: 'Practical strategies parents can use to support early literacy at home. [Demo content.]',
    category: 'Elementary',
    date: '2026-03-08',
    readingTime: '5 min',
    isDemo: true,
  },
]

const CATEGORIES = ['All', 'Test Prep', 'AP', 'Parenting', 'College Prep', 'Online Tutoring', 'Elementary']

export default function USABlog() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? DEMO_POSTS : DEMO_POSTS.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <RegionSeo
        path="/us/blog"
        title="Blog — Srijee Tutor USA"
        description="Tutoring tips, college prep guidance, and learning resources for US families."
      />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/us' }, { label: 'Blog' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Tutoring insights for US families
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Practical tips on test prep, college applications, Common Core, AP, and online learning.
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
                    ? 'bg-blue-700 text-white'
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
              to={`/us/blog/${featured.slug}`}
              className="block bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 hover:shadow-md transition-shadow"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-600 to-slate-900 rounded-xl flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/30">
                    <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-700 text-white text-2xs font-semibold">Featured</span>
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
                  to={`/us/blog/${post.slug}`}
                  className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="text-white/30">
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
            verified Srijee Tutor USA blog content before public launch.
          </div>
        </div>
      </section>
    </>
  )
}

function formatDate(iso) {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-blue-100/80">
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
