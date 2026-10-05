import React from 'react'
import { cn } from '../../utils/cn.js'

export function Spinner({ size = 'md', className }) {
  const dims = { xs: 'h-3 w-3', sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-10 w-10' }
  return (
    <svg
      className={cn('animate-spin text-brand-600', dims[size] || dims.md, className)}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function PageLoader({ label = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Spinner size="lg" />
      <p className="mt-4 text-sm text-ink-500">{label}</p>
    </div>
  )
}

export function InlineLoader({ label = 'Loading…' }) {
  return (
    <div className="flex items-center justify-center gap-2 py-6 text-sm text-ink-500">
      <Spinner size="sm" /> {label}
    </div>
  )
}

export function Skeleton({ className, lines = 3, as: Comp = 'div' }) {
  if (lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="skeleton h-3.5" style={{ width: `${100 - i * 12}%` }} />
        ))}
      </div>
    )
  }
  return <Comp className={cn('skeleton', className)} />
}

export function CardSkeleton() {
  return (
    <div className="card p-5">
      <div className="skeleton h-4 w-1/3 mb-3" />
      <div className="skeleton h-5 w-2/3 mb-4" />
      <div className="skeleton h-3 w-full mb-2" />
      <div className="skeleton h-3 w-5/6 mb-4" />
      <div className="flex gap-2">
        <div className="skeleton h-7 w-20" />
        <div className="skeleton h-7 w-20" />
      </div>
    </div>
  )
}

export function TableSkeleton({ rows = 5 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="skeleton h-4 flex-1" />
          <div className="skeleton h-4 w-24" />
          <div className="skeleton h-4 w-20" />
          <div className="skeleton h-4 w-16" />
        </div>
      ))}
    </div>
  )
}

export default Spinner
