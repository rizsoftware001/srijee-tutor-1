import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Seo, StructuredData, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container } from '../../components/common/SectionHeading.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { blogPosts } from '../../data/blogPosts.js'
import { formatDate } from '../../utils/format.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <Section>
        <Container size="narrow" className="text-center py-20">
          <h1 className="h2">Post not found</h1>
          <p className="mt-3 text-ink-600">The article you’re looking for doesn’t exist or has been moved.</p>
          <Button as={Link} to="/blog" variant="primary" className="mt-6">Back to blog</Button>
        </Container>
      </Section>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author || 'Srijee Tutor' },
    publisher: { '@type': 'Organization', name: 'Srijee Tutor' },
  }

  return (
    <>
      <Seo
        path={`/blog/${post.slug}`}
        title={`${post.title} | Srijee Blog`}
        description={post.excerpt}
        canonical={`https://srijeetutor.com/blog/${post.slug}`}
      />
      <StructuredData data={articleJsonLd} />

      <Section className="!pb-0">
        <Container size="narrow">
          <Breadcrumbs items={[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: post.category },
          ]} />
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge tone="brand" size="sm">{post.category}</Badge>
              {post.isDemo && <Badge tone="warning" size="xs">Demo</Badge>}
            </div>
            <h1 className="h1 text-balance">{post.title}</h1>
            <p className="mt-5 text-lg text-ink-600 text-pretty">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
              <span>{post.author || 'Srijee Tutor'}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!pt-8">
        <Container size="narrow">
          <div className="aspect-[16/9] rounded-xl2 bg-brand-gradient mb-8 flex items-center justify-center">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="text-white/70"><path d="M18 26h36M18 36h36M18 46h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-ink-700 leading-relaxed">{post.content}</p>
            <h2 className="h4 mt-8 mb-3">Key takeaways</h2>
            <ul className="space-y-2 text-ink-700">
              <li>Start with a clear plan — week-by-week, topic-by-topic.</li>
              <li>Use sample papers and previous years’ papers regularly.</li>
              <li>A tutor can help — but only with the right fit and consistent practice.</li>
              <li>Parents play a critical role in keeping stress low and motivation steady.</li>
            </ul>
            <div className="mt-8 rounded-lg bg-brand-50 border border-brand-100 p-5">
              <p className="font-display text-base font-semibold text-brand-900">Looking for a tutor?</p>
              <p className="mt-1 text-sm text-brand-700">Share your requirement — a Srijee counsellor will call you back with matched tutors.</p>
              <Button as={Link} to="/student/requirement" variant="primary" size="md" className="mt-3">Find My Tutor</Button>
            </div>
          </article>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="subtle">
          <Container>
            <h2 className="h3 mb-6">Related articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card card-hover overflow-hidden flex flex-col">
                  <div className="aspect-[16/9] bg-brand-gradient flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white/70"><path d="M8 11h16M8 16h16M8 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <Badge tone="ink" size="xs" className="self-start mb-2">{p.category}</Badge>
                    <h3 className="font-display text-base font-semibold text-ink-900 leading-snug">{p.title}</h3>
                    <p className="mt-2 text-xs text-ink-500">{formatDate(p.publishedAt)} · {p.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FinalCTA />
    </>
  )
}
