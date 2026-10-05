import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container } from '../../components/common/SectionHeading.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { blogPosts, blogCategories } from '../../data/blogPosts.js'
import { formatDate, truncate } from '../../utils/format.js'

export default function Blog() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <Seo path="/blog" />
      <Section className="!pb-0">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Education Resources</span>
            <h1 className="h1 mt-3">From the Srijee blog</h1>
            <p className="mt-5 text-lg text-ink-600">Study tips, parenting advice, and education news — for students and parents.</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {/* Featured post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="card card-hover overflow-hidden block mb-10">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/9] lg:aspect-auto bg-brand-gradient flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/80"><path d="M16 22h32M16 32h32M16 42h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge tone="brand" size="sm">Featured</Badge>
                    <Badge tone="ink" size="xs">{featured.category}</Badge>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 leading-tight">{featured.title}</h2>
                  <p className="mt-3 text-ink-600">{truncate(featured.excerpt, 160)}</p>
                  <p className="mt-4 text-sm text-ink-500">{formatDate(featured.publishedAt)} · {featured.readingTime}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setCategory('All')}
              className={`chip ${category === 'All' ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'}`}
            >All</button>
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`chip ${category === c ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'}`}
              >{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card card-hover overflow-hidden flex flex-col">
                <div className="aspect-[16/9] bg-brand-gradient relative flex items-center justify-center">
                  <Badge tone="ink" size="xs" className="absolute top-3 left-3 bg-white/90">{p.category}</Badge>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/80"><path d="M10 14h20M10 20h20M10 26h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-ink-500">{formatDate(p.publishedAt)} · {p.readingTime}</p>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 flex-1">{truncate(p.excerpt, 100)}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-700">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
