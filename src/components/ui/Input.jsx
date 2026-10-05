import React, { useState } from 'react'
import { cn } from '../../utils/cn.js'

export function Field({ label, hint, error, required, children, htmlFor, className }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={htmlFor} className="label">
          {label}
          {required && <span className="ml-0.5 text-danger-500">*</span>}
        </label>
      )}
      {children}
      {error && <p className="error-text">{error}</p>}
      {hint && !error && <p className="hint">{hint}</p>}
    </div>
  )
}

export const Input = React.forwardRef(function Input(
  { error, className, leftIcon, rightSlot, ...rest },
  ref
) {
  if (leftIcon || rightSlot) {
    return (
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={cn('input', leftIcon && 'pl-10', rightSlot && 'pr-10', error && 'input-error', className)}
          {...rest}
        />
        {rightSlot && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">{rightSlot}</span>
        )}
      </div>
    )
  }
  return <input ref={ref} className={cn('input', error && 'input-error', className)} {...rest} />
})

export const Textarea = React.forwardRef(function Textarea(
  { error, className, rows = 4, ...rest },
  ref
) {
  return <textarea ref={ref} rows={rows} className={cn('input resize-y', error && 'input-error', className)} {...rest} />
})

export const Select = React.forwardRef(function Select(
  { error, className, children, placeholder, ...rest },
  ref
) {
  return (
    <select
      ref={ref}
      className={cn('input appearance-none bg-no-repeat pr-9', error && 'input-error', className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5l5 5 5-5' stroke='%2364748b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
        backgroundPosition: 'right 0.6rem center',
      }}
      {...rest}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  )
})

export function Checkbox({ label, hint, error, className, ...rest }) {
  return (
    <label className={cn('flex items-start gap-2.5 cursor-pointer select-none', className)}>
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/40"
        {...rest}
      />
      <span className="text-sm text-ink-700">
        {label}
        {hint && <span className="block hint">{hint}</span>}
        {error && <span className="block error-text">{error}</span>}
      </span>
    </label>
  )
}

export function RadioGroup({ options, name, value, onChange, columns = 1, className }) {
  return (
    <div className={cn('grid gap-2', columns === 2 && 'sm:grid-cols-2', columns === 3 && 'sm:grid-cols-3', className)}>
      {options.map((opt) => {
        const val = typeof opt === 'string' ? opt : opt.value
        const lab = typeof opt === 'string' ? opt : opt.label
        const desc = typeof opt === 'object' ? opt.desc : null
        return (
          <label
            key={val}
            className={cn(
              'flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 text-sm transition-colors',
              value === val
                ? 'border-brand-500 bg-brand-50 text-brand-900'
                : 'border-ink-200 hover:border-brand-300 hover:bg-brand-50/50'
            )}
          >
            <input
              type="radio"
              name={name}
              value={val}
              checked={value === val}
              onChange={() => onChange(val)}
              className="mt-0.5 h-4 w-4 border-ink-300 text-brand-600 focus:ring-brand-500/40"
            />
            <span>
              <span className="font-medium text-ink-900">{lab}</span>
              {desc && <span className="block text-xs text-ink-500 mt-0.5">{desc}</span>}
            </span>
          </label>
        )
      })}
    </div>
  )
}
