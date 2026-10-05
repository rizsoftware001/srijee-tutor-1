import React from 'react'
import { cn } from '../../utils/cn.js'

export function EmptyState({ icon, title, description, action, className }) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-xl2 border border-dashed border-ink-200 bg-ink-50/50 px-6 py-14 text-center', className)}>
      {icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-soft text-brand-600">
          {icon}
        </div>
      )}
      <h3 className="h5 text-ink-900">{title}</h3>
      {description && <p className="mt-1.5 max-w-md text-sm text-ink-500">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export function ErrorState({ title = 'Something went wrong', description, onRetry, retryLabel = 'Try again' }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl2 border border-danger-200 bg-danger-50/60 px-6 py-14 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-danger-100 text-danger-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 className="h5 text-ink-900">{title}</h3>
      {description && <p className="mt-1.5 max-w-md text-sm text-ink-600">{description}</p>}
      {onRetry && (
        <button onClick={onRetry} className="btn-secondary btn-md mt-5">{retryLabel}</button>
      )}
    </div>
  )
}

export function ProgressBar({ value = 0, tone = 'brand', showLabel = false, className }) {
  const tones = {
    brand: 'bg-brand-600',
    accent: 'bg-accent-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
  }
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out-expo', tones[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && <span className="text-xs font-semibold text-ink-700 tabular-nums">{Math.round(pct)}%</span>}
    </div>
  )
}

export function Avatar({ name = '', size = 'md', src, className }) {
  const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-14 w-14 text-lg' }
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('')
  if (src) {
    return <img src={src} alt={name} className={cn('rounded-full object-cover', sizes[size], className)} />
  }
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700',
        sizes[size],
        className
      )}
    >
      {initials || '?'}
    </span>
  )
}

export function Stat({ label, value, hint, tone = 'brand', icon }) {
  const tones = {
    brand: 'text-brand-600 bg-brand-50',
    accent: 'text-accent-600 bg-accent-50',
    success: 'text-success-600 bg-success-50',
    warning: 'text-warning-600 bg-warning-50',
    ink: 'text-ink-600 bg-ink-100',
  }
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-ink-500">{label}</p>
        {icon && <span className={cn('flex h-9 w-9 items-center justify-center rounded-lg', tones[tone])}>{icon}</span>}
      </div>
      <p className="mt-2 font-display text-2xl font-bold text-ink-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-500">{hint}</p>}
    </div>
  )
}
