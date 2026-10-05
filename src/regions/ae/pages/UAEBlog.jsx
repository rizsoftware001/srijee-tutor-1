import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'

/**
 * UAEBlog — UAE blog landing page.
 *
 * Per spec §5: demo content only. All posts shown are clearly labelled Demo.
 * Per spec §9: premium navy + subtle gold palette. British English spelling.
 */

const DEMO_POSTS = [
  {
    slug: 'demo-ae-choosing-curriculum',
    title: 'Choosing the Right Curriculum for Your Child in the UAE (Demo)',
    excerpt: 'A practical guide for UAE parents comparing MOE, British, American, IB, CBSE, and ICSE curricula. [Demo content — replace with verified Srijee Tutor UAE blog post before launch.]',
    category: 'Curriculum',
    date: '2026-08-15',
    readingTime: '9 min',
    isDemo: true,
  },
  {
    slug: 'demo-ae-gcse-vs-igcse',
    title: 'GCSE vs IGCSE: What UAE Parents Need to Know (Demo)',
    excerpt: 'The differences between GCSE and IGCSE, and which may suit your child best in the UAE context. [Demo content.]',
    category: 'British Curriculum',
    date: '2026-07-22',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-ae-arabic-language-guide',
    title: 'Arabic Language Learning: A Parent\'s Guide (Demo)',
    excerpt: 'Practical strategies for supporting your child\'s Arabic — whether as a first language under MOE or as a heritage language. [Demo content.]',
    category: 'Arabic',
    date: '2026-06-10',
    readingTime: '7 min',
    isDemo: true,
  },
  {
    slug: 'demo-ae-online-tutoring-benefits',
    title: 'Why Online Tutoring Works for UAE Families (Demo)',
    excerpt: 'How online tutoring compares to in-person in the UAE, with practical guidance for busy families. [Demo content.]',
    category: 'Online Tutoring',
    date: '2026-05-30',
    readingTime: '6 min',
    isDemo: true,
  },
  {
    slug: 'demo-ae-a-level-subject-choices',
    title: 'A-Level Subject Choices: A UAE Perspective (Demo)',
    excerpt: 'How to choose A-Level subjects with university applications in mind — from a UAE perspective. [Demo content.]',
    category: 'A-Level',
    date: '2026-04-15',
    readingTime: '8 min',
    isDemo: true,
  },
  {
    slug: 'demo-ae-ib-diploma-guide',
    title: 'IB Diploma in the UAE: A Complete Guide (Demo)',
    excerpt: 'Everything UAE parents need to know about the IB Diploma — subject groups, IA, EE, ToK, and university recognition. [Demo content.]',
    category: 'IB',
    date: '2026-03-08',
    readingTime: '10 min',
    isDemo: true,
  },
]

const CATEGORIES = ['All', 'Curriculum', 'British Curriculum', 'Arabic', 'Online Tutoring', 'A-Level', 'IB']

export default function UAEBlog() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? DEMO_POSTS : DEMO_POSTS.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <RegionSeo
        path="/ae/blog"
        title="Blog — Srijee Tutor UAE"
        description="Tutoring tips, curriculum guidance, and learning resources for UAE families."
      />

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'Blog' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Tutoring insights for UAE families
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-2xl">
            Practical tips on curriculum choice, GCSE/IGCSE, A-Level, IB, MOE exams, Arabic
            language, and online learning — all tailored to the UAE context.
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
                    ? 'bg-blue-900 text-white'
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
              to={`/ae/blog/${featured.slug}`}
              className="block bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 hover:shadow-md transition-shadow"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-amber-400/40">
                    <path d="M8 12h48v40H8z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 22h32M16 32h32M16 42h20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-900 text-white text-2xs font-semibold">Featured</span>
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
                  to={`/ae/blog/${post.slug}`}
                  className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="text-amber-400/40">
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
            verified Srijee Tutor UAE blog content before public launch.
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
