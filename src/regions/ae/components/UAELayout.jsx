import React from 'react'
import { Outlet } from 'react-router-dom'
import UAEHeader from '../components/UAEHeader.jsx'
import UAEFooter from '../components/UAEFooter.jsx'

/**
 * UAELayout — wraps every page in the UAE regional frontend.
 *
 * Composition:
 *   - UAEHeader (region-specific sticky nav with "Change Region" button)
 *   - <Outlet /> (page content)
 *   - UAEFooter (region-specific footer)
 *
 * Per spec §11: The "Change Region" button lives in the header (via
 * RegionHeaderButton inside UAEHeader), opening the OriginModal.
 *
 * Per spec §9: UAE premium navy/white design, subtle gold accents.
 */

export default function UAELayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <UAEHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <UAEFooter />
    </div>
  )
}
