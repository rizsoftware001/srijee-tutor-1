# SEO Architecture

## Approach

Single-page application (SPA) with client-side rendering. SEO metadata is set dynamically per route via the `<Seo>` component, which writes to `document.title` and meta tags on route change.

For maximum SEO benefit, consider server-side rendering (Next.js) or pre-rendering in production. The current SPA approach works for Google's JS-rendering but is suboptimal for crawl speed.

## Per-Route Metadata

`src/config/seo.js` defines `defaultSeo` and `seoByRoute`:

```js
export const seoByRoute = {
  '/': { title: '…', description: '…' },
  '/about': { title: '…', description: '…' },
  '/online-tuition': { title: '…', description: '…' },
  // …all major public routes
}
```

Pages use:

```jsx
<Seo path="/online-tuition" />
// or override:
<Seo path="/blog/:slug" title={post.title} description={post.excerpt} canonical={…} />
```

## Metadata Fields Set

For every public page:

| Field | Set via |
|-------|---------|
| `<title>` | `document.title = …` |
| `<meta name="description">` | `setMeta('description', …)` |
| `<meta name="robots">` | `setMeta('robots', 'index, follow')` |
| `<link rel="canonical">` | `setLink('canonical', …)` |
| `<meta property="og:title">` | `setProp('og:title', …)` |
| `<meta property="og:description">` | `setProp('og:description', …)` |
| `<meta property="og:url">` | `setProp('og:url', …)` |
| `<meta property="og:type">` | `setProp('og:type', 'website')` |
| `<meta property="og:image">` | `setProp('og:image', …)` |
| `<meta property="og:site_name">` | `setProp('og:site_name', 'Srijee Tutor')` |
| `<meta name="twitter:card">` | `setMeta('twitter:card', 'summary_large_image')` |
| `<meta name="twitter:title">` | `setMeta('twitter:title', …)` |
| `<meta name="twitter:description">` | `setMeta('twitter:description', …)` |

## Structured Data (JSON-LD)

`<StructuredData data={…} />` injects `<script type="application/ld+json">` into the head.

Currently used:

| Page | Schema type |
|------|-------------|
| `/` (Home) | `EducationalOrganization` + `FAQPage` |
| `/blog/:slug` (Blog post) | `Article` |
| `/online-tuition`, `/home-tuition`, `/one-to-one-tuition` | `FAQPage` |

Add as needed:
- `BreadcrumbList` — for all nested pages (TODO: wire into `<Breadcrumbs>` component)
- `WebSite` — on home (with SearchAction)
- `Course` — on `/courses/*` detail pages (when added)
- `Service` — on tuition type pages

## Canonical URLs

Every page sets `<link rel="canonical" href="https://srijeetutor.com{path}">`. The base URL is `SITE.url` in `src/config/site.js`. Update this for production.

## Sitemap (TODO)

When the backend is ready, generate `sitemap.xml` from:
- All static routes (from `seoByRoute` keys)
- All blog posts (from CMS)
- All future CMS-driven landing pages (classes, boards, subjects, locations — **only if each has genuinely unique content**)

## SEO Don'ts (per Master Prompt)

- ❌ Mass-create thin location pages
- ❌ Fabricate ratings, reviews, awards, partnerships
- ❌ Use `[PLACEHOLDER]` content in production
- ❌ Add AI content without genuine product value

## SEO Do's

- ✅ Each public page has unique, useful content
- ✅ Per-page meta tags (title, description, canonical)
- ✅ Structured data where valid
- ✅ Internal linking via "Find by Class/Board/Subject/Location" sections
- ✅ Clean URL slugs (`/online-tuition`, `/blog/:slug`)
- ✅ Mobile-friendly responsive design (Google mobile-first indexing)
- ✅ Fast initial load (Vite production build, code-splitting ready)
