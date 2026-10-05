import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { StudentEnrollmentWizard } from './StudentEnrollmentWizard.jsx'

/**
 * StudentEnrollmentModal — large, premium modal wrapper for the
 * student enrollment flow.
 *
 * Built separately from the generic <Modal> because:
 *  - it needs a wider max-width (~1100px on desktop)
 *  - on mobile it should be near-full-screen
 *  - the body should NOT scroll with the footer (sticky footer nav)
 *  - we want explicit focus management + ESC + click-outside
 *
 * Accessibility:
 *  - role="dialog" + aria-modal + aria-label
 *  - ESC closes
 *  - click on backdrop closes
 *  - body scroll locked while open
 *  - close button has aria-label
 *  - initial focus moves to the dialog
 */
export function StudentEnrollmentModal({ open, onClose }) {
  const dialogRef = useRef(null)

  // ESC + body scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose?.()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Move focus to the dialog
    setTimeout(() => dialogRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-stretch sm:items-center justify-center sm:p-4"
      role="presentation"
    >
      {/* Backdrop — darkened + blurred */}
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog panel */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Student enrollment form"
        tabIndex={-1}
        className="
          relative z-10 w-full bg-white dark:bg-ink-900 shadow-2xl animate-scale-in
          flex flex-col
          h-screen sm:h-auto sm:max-h-[92vh]
          sm:rounded-2xl sm:max-w-4xl lg:max-w-5xl
          outline-none
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-b border-ink-100 dark:border-ink-700">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-teal-gradient text-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3h10v2H2zM2 6h10v2H2zM2 9h7v2H2z" fill="white"/>
                  <circle cx="11" cy="10" r="2" fill="#fbbf24"/>
                </svg>
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold text-ink-900 dark:text-white truncate">
                Enroll as Student
              </h2>
            </div>
            <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-300 hidden sm:block">
              Share your requirement — our counsellor will reach out.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-none rounded-md p-2 text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-ink-700 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Close enrollment dialog"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Wizard body */}
        <div className="flex-1 overflow-y-auto">
          <StudentEnrollmentWizard onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  )
}

export default StudentEnrollmentModal
