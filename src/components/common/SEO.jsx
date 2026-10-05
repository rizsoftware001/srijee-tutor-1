import React, { useEffect } from 'react'
import { defaultSeo, seoByRoute } from '../../config/seo.js'
import { SITE } from '../../config/site.js'

/**
 * SEO — sets document.title, meta tags, canonical, and Open Graph.
 * In a real backend/CMS, this data would come per-page from the API;
 * here we use the static seoByRoute map + per-call overrides.
 */
export function Seo({ path, title, description, canonical, ogImage, robots, children }) {
  useEffect(() => {
    const routeConfig = seoByRoute[path] || {}
    const t = title || routeConfig.title || defaultSeo.title
    const d = description || routeConfig.description || defaultSeo.description
    const c = canonical || `${SITE.url}${path}` || defaultSeo.canonical
    const og = ogImage || defaultSeo.ogImage
    const r = robots || defaultSeo.robots

    document.title = t
    setMeta('description', d)
    setMeta('robots', r)
    setLink('canonical', c)
    setProp('og:title', t)
    setProp('og:description', d)
    setProp('og:url', c)
    setProp('og:type', defaultSeo.ogType)
    setProp('og:image', og)
    setProp('og:site_name', SITE.name)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', t)
    setMeta('twitter:description', d)
  }, [path, title, description, canonical, ogImage, robots])

  return children || null
}

function setMeta(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setProp(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Injects JSON-LD structured data into the page head.
 * Use on key pages (Home, Blog, Article, FAQ).
 */
export function StructuredData({ data }) {
  useEffect(() => {
    if (!data) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [data])
  return null
}

export function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <a href={item.to} className="hover:text-brand-700">{item.label}</a>
              ) : (
                <span className={last ? 'text-ink-800 font-medium' : ''}>{item.label}</span>
              )}
              {!last && <span className="text-ink-300">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
