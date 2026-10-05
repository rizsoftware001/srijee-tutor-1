import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'

/**
 * UKBlog — UK blog landing page.
 *
 * Per spec §5: demo content only. All posts shown are clearly labelled Demo.
 * Per spec §7: UK English + warm stone palette.
 */

const DEMO_POSTS = [
  {
    slug: 'demo-uk-gcse-maths-12-week-revision-plan',
    title: 'GCSE Maths: A 12-Week Revision Plan (Demo)',
    excerpt: 'A week-by-week GCSE Maths revision plan from baseline assessment to exam day, covering Number, Algebra, Geometry, Statistics, and Probability. [Demo content — replace with verified Srijee Tutor UK blog post before launch.]',
    category: 'GCSE',
    date: '2026-08-15',
    readingTime: '8 min',
    isDemo: true,
  },
  {
    slug: 'demo-uk-a-level-physics-top-topics',
    title: 'A-Level Physics: Top Topics to Master (Demo)',
    excerpt: 'From mechanics to quantum phenomena — the A-Level Physics topics that come up year after year, and how to revise them effectively. [Demo content.]',
    category: 'A-Level',
    date: '2026-07-22',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-uk-11-plus-parents-guide',
    title: "11+ Common Entrance: A Parent's Guide (Demo)",
    excerpt: 'Verbal reasoning, non-verbal reasoning, Maths, and English — what the 11+ actually tests, and how to support your child without stress. [Demo content.]',
    category: '11+',
    date: '2026-06-10',
    readingTime: '7 min',
    isDemo: true,
  },
  {
    slug: 'demo-uk-ib-diploma-choosing-subjects',
    title: 'IB Diploma: Choosing Your Subjects (Demo)',
    excerpt: 'HL vs SL, six subject groups, and how to balance what you love with what universities want — a practical guide to IB Diploma subject selection. [Demo content.]',
    category: 'IB',
    date: '2026-05-30',
    readingTime: '5 min',
    isDemo: true,
  },
  {
    slug: 'demo-uk-online-tutoring-uk-families',
    title: 'Why Online Tutoring Works for UK Families (Demo)',
    excerpt: 'How online tutoring compares to in-person for KS1 through A-Level students, with practical guidance for parents. [Demo content.]',
    category: 'Online Tutoring',
    date: '2026-04-15',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-uk-ks1-reading-habits',
    title: 'Building Strong Reading Habits in KS1 (Demo)',
    excerpt: 'Practical strategies parents can use to support early literacy at home — from phonics to first chapter books. [Demo content.]',
    category: 'Primary',
    date: '2026-03-08',
    readingTime: '5 min',
    isDemo: true,
  },
]

const CATEGORIES = ['All', 'GCSE', 'A-Level', '11+', 'IB', 'Online Tutoring', 'Primary']

export default function UKBlog() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? DEMO_POSTS : DEMO_POSTS.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <RegionSeo
        path="/uk/blog"
        title="Blog — Srijee Tutor UK"
        description="Tuition tips, GCSE & A-Level guidance, and learning resources for UK families."
      />

      <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/uk' }, { label: 'Blog' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance tracking-tight">
            Tuition insights for UK families
          </h1>
          <p className="mt-3 text-stone-200/90 max-w-2xl">
            Practical tips on GCSE and A-Level preparation, the IB Diploma,
            11+ Common Entrance, and online learning.
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
                    ? 'bg-slate-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              to={`/uk/blog/${featured.slug}`}
              className="block bg-stone-50 rounded-2xl border border-stone-300 p-6 sm:p-8 mb-8 hover:shadow-md transition-shadow"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
                <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-stone-900 rounded-xl flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-amber-400/40">
                    <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 text-white text-2xs font-semibold">Featured</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 text-2xs">{featured.category}</span>
                    {featured.isDemo && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold">Demo</span>
                    )}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-3 text-balance tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-stone-600 leading-relaxed mb-3">
                    {featured.excerpt}
                  </p>
                  <p className="text-xs text-stone-500">{formatDate(featured.date)} · {featured.readingTime} read</p>
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
                  to={`/uk/blog/${post.slug}`}
                  className="block bg-white rounded-2xl border border-stone-300 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-stone-800 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="text-amber-400/40">
                      <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-2xs">{post.category}</span>
                      {post.isDemo && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold">Demo</span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-stone-900 mb-2 line-clamp-2 tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-stone-500">{formatDate(post.date)} · {post.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Demo disclaimer */}
          <div className="mt-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Demo content.</strong> All posts shown here are placeholders. Replace with
            verified Srijee Tutor UK blog content before public launch.
          </div>
        </div>
      </section>
    </>
  )
}

function formatDate(iso) {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-amber-100/80">
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
