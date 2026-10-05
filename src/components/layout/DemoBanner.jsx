import React, { useState } from 'react'
import { SITE } from '../../config/site.js'

export function DemoBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (!SITE.isDemo || dismissed) return null
  return (
    <div className="bg-ink-900 text-white text-center text-xs sm:text-sm py-2 px-4">
      <div className="container-page flex items-center justify-center gap-3">
        <span className="rounded-full bg-warning-500/20 px-2 py-0.5 text-2xs font-bold uppercase tracking-wider text-warning-300">Demo</span>
        <p className="text-ink-100">{SITE.demoNotice}</p>
        <button
          onClick={() => setDismissed(true)}
          className="rounded p-1 text-ink-400 hover:text-white"
          aria-label="Dismiss demo banner"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  )
}
