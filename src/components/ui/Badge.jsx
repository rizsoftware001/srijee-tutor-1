import React from 'react'
import { cn } from '../../utils/cn.js'

const TONES = {
  brand:   'bg-brand-50 text-brand-700 ring-brand-200',
  accent:  'bg-accent-50 text-accent-700 ring-accent-200',
  success: 'bg-success-50 text-success-700 ring-success-200',
  warning: 'bg-warning-50 text-warning-700 ring-warning-200',
  danger:  'bg-danger-50 text-danger-700 ring-danger-200',
  ink:     'bg-ink-100 text-ink-700 ring-ink-200',
}

const SIZES = {
  xs: 'px-2 py-0.5 text-2xs',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1 text-xs',
}

export function Badge({ tone = 'ink', size = 'sm', dot = false, children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium ring-1 ring-inset',
        TONES[tone] || TONES.ink,
        SIZES[size] || SIZES.sm,
        className
      )}
    >
      {dot && <span className={cn('status-dot', `bg-current`)} />}
      {children}
    </span>
  )
}

export default Badge
