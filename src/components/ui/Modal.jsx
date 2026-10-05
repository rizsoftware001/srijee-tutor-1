import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn.js'

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-10 w-full bg-white shadow-lift animate-scale-in',
          'rounded-t-2xl sm:rounded-2xl',
          sizes[size] || sizes.md
        )}
      >
        {(title || description) && (
          <div className="border-b border-ink-100 px-5 sm:px-6 py-4 sm:py-5">
            {title && <h2 className="h5 text-ink-900">{title}</h2>}
            {description && <p className="mt-1 text-sm text-ink-500">{description}</p>}
          </div>
        )}
        <div className="max-h-[70vh] overflow-y-auto px-5 sm:px-6 py-5">{children}</div>
        {footer && (
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 border-t border-ink-100 px-5 sm:px-6 py-4">
            {footer}
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700"
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>,
    document.body
  )
}

export default Modal
