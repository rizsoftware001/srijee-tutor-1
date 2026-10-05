// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
// import { SectionBackground } from '../common/SectionBackground.jsx'
// import { blogPosts } from '../../data/blogPosts.js'
// import { formatDate, truncate } from '../../utils/format.js'
// import { Badge } from '../ui/Badge.jsx'

// // Real blog images (Unsplash — free, dynamic, no API key needed)
// const BLOG_IMAGES = [
//   'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80', // student studying
//   'https://images.unsplash.com/photo-1503676262397-0c83d1a30e1d?w=600&q=80', // books
//   'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80', // classroom
// ]

// export function BlogTeaser() {
//   const posts = blogPosts.slice(0, 3)
//   return (
//     <Section tone="subtle" className="relative">
//       {/* Dynamic background — grid + glow */}
//       <SectionBackground variant="grid" tone="ink" intensity={0.4} />
//       <SectionBackground variant="glow" tone="brand" corner="top-right" intensity={0.4} />

//       <Container>
//         <SectionHeading
//           eyebrow="Education Resources"
//           title="From the Srijee blog"
//           description="Study tips, parenting advice, and education news — for students and parents."
//           align="left"
//           action={<Link to="/blog" className="btn-secondary btn-md">Visit blog →</Link>}
//         />

//         <div className="mt-6 grid gap-5 md:grid-cols-3">
//           {posts.map((p, i) => (
//             <Link
//               key={p.slug}
//               to={`/blog/${p.slug}`}
//               className="card card-hover overflow-hidden flex flex-col group"
//             >
//               {/* Real blog image with hover zoom */}
//               <div className="aspect-[16/9] relative overflow-hidden">
//                 <img
//                   src={BLOG_IMAGES[i % BLOG_IMAGES.length]}
//                   alt={p.title}
//                   className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//                 {/* Gradient overlay for text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
//                 <span className="absolute top-3 left-3">
//                   <Badge tone="ink" size="xs" className="!bg-white/90 !text-ink-800 backdrop-blur-sm">
//                     {p.category}
//                   </Badge>
//                 </span>
//               </div>

//               {/* Card body — all text has dark-mode variants */}
//               <div className="p-5 flex flex-col flex-1">
//                 <p className="text-xs text-ink-500 dark:text-ink-400">
//                   {formatDate(p.publishedAt)} · {p.readingTime}
//                 </p>
//                 <h3 className="mt-2 font-display text-base font-semibold text-ink-900 dark:text-white leading-snug">
//                   {p.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 flex-1">
//                   {truncate(p.excerpt, 100)}
//                 </p>
//                 <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-400">
//                   Read more
//                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                     <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Container, SectionHeading } from '../common/SectionHeading.jsx'
import { SectionBackground } from '../common/SectionBackground.jsx'
import { blogPosts } from '../../data/blogPosts.js'
import { formatDate, truncate } from '../../utils/format.js'
import { Badge } from '../ui/Badge.jsx'

const BLOG_IMAGES = [
  'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80',
  'https://images.unsplash.com/photo-1503676262397-0c83d1a30e1d?w=600&q=80',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80',
]

export function BlogTeaser() {
  const posts = blogPosts.slice(0, 3)
  return (
    <Section tone="subtle" className="relative">
      <SectionBackground variant="grid" tone="ink" intensity={0.4} />
      <SectionBackground variant="glow" tone="brand" corner="top-right" intensity={0.4} />
      <Container>
        <SectionHeading
          eyebrow="Education Resources"
          title="From the Srijee blog"
          description="Study tips, parenting advice, and education news — for students and parents."
          align="left"
          action={<Link to="/blog" className="btn-secondary btn-md">Visit blog →</Link>}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card card-hover overflow-hidden flex flex-col group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={BLOG_IMAGES[i % BLOG_IMAGES.length]}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <span className="absolute top-3 left-3">
                  <Badge tone="ink" size="xs" className="!bg-white/90 !text-ink-800 backdrop-blur-sm">{p.category}</Badge>
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-ink-500 dark:text-ink-300">{formatDate(p.publishedAt)} · {p.readingTime}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-ink-900 dark:text-white leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-700 dark:text-ink-200 flex-1">{truncate(p.excerpt, 100)}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-400">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}