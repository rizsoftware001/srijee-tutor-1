import React from 'react'
import { cn } from '../../utils/cn.js'

export function SectionHeading({ eyebrow, title, description, align = 'center', className, action }) {
  const alignment = { left: 'text-left', center: 'text-center mx-auto', right: 'text-right ml-auto' }
  return (
    <div className={cn('max-w-2xl', alignment[align], className)}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      {title && <h2 className="h2 text-balance text-ink-900 dark:text-white">{title}</h2>}
      {description && <p className="mt-2 text-sm sm:text-base text-ink-700 dark:text-ink-200 text-pretty leading-relaxed">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}

export function Divider({ className, label }) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
        <span className="text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-300">{label}</span>
        <div className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
      </div>
    )
  }
  return <hr className={cn('border-ink-200 dark:border-ink-700', className)} />
}

export function Container({ size = 'page', className, children }) {
  const sizes = {
    page: 'container-page',
    narrow: 'container-narrow',
    wide: 'container-wide',
  }
  return <div className={cn(sizes[size], 'relative z-10', className)}>{children}</div>
}

export function Section({ tone = 'default', className, children, id }) {
  const tones = {
    default: 'bg-white dark:bg-ink-950',
    subtle: 'bg-ink-50/60 dark:bg-gray-900',
    dark: 'bg-ink-900 text-white dark:bg-ink-950',
    brand: 'bg-brand-gradient text-white',
  }
  return (
    <section id={id} className={cn('section', tones[tone], className)}>
      {children}
    </section>
  )
}