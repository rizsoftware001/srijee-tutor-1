import React, { useState, useEffect, useRef } from 'react'
import { REGIONS } from '../../config/regions.js'
import { useOriginModal, useCurrentRegion } from '../../context/OriginModalContext.jsx'

/**
 * RegionHeaderButton — "🇮🇳 India ▼" / "🇺🇸 USA ▼" button for any regional header.
 *
 * Per spec §11:
 *   - Shows the current region's flag + short name + ▼
 *   - Clicking opens the OriginModal (via useOriginModal)
 *   - The button should NOT be a dropdown — it opens the shared modal so the
 *     user sees all 5 country cards with images
 *
 * Visual style:
 *   - Small pill, fits into existing header layouts
 *   - Border + light bg, hover state
 *   - Inherited from parent (no fixed colors)
 *
 * Usage:
 *   <RegionHeaderButton />
 *
 * Drop into any regional header (India's PublicHeader, USAHeader, UKHeader,
 * CanadaHeader, UAEHeader).
 */

// Short display name per region (for the button label)
const SHORT_NAMES = {
  IN: 'India',
  US: 'USA',
  GB: 'UK',
  CA: 'Canada',
  AE: 'UAE',
}

export default function RegionHeaderButton({ className = '' }) {
  const { openOriginModal } = useOriginModal()
  const currentCode = useCurrentRegion()
  const region = REGIONS[currentCode]
  const shortName = SHORT_NAMES[currentCode] || region?.name || 'Region'

  return (
    <button
      type="button"
      onClick={openOriginModal}
      aria-label={`Change region — currently ${region?.name}. Click to select another region.`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-current/20 hover:border-current/40 hover:bg-current/5 text-xs sm:text-sm font-medium transition-colors ${className}`}
    >
      <span className="text-base leading-none select-none" aria-hidden="true">
        {region?.flag || '🌐'}
      </span>
      <span className="font-semibold">{shortName}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="opacity-60"
        aria-hidden="true"
      >
        <path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
