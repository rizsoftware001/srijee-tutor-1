import React from 'react'
import { Outlet } from 'react-router-dom'
import CanadaHeader from '../components/CanadaHeader.jsx'
import CanadaFooter from '../components/CanadaFooter.jsx'

/**
 * CanadaLayout — wraps every page in the Canada regional frontend.
 *
 * Composition:
 *   - CanadaHeader (region-specific sticky nav with "Change Region" button)
 *   - <Outlet /> (page content)
 *   - CanadaFooter (region-specific footer)
 *
 * Per spec §11: The "Change Region" button lives in the header (via
 * RegionHeaderButton inside CanadaHeader), opening the OriginModal.
 */

export default function CanadaLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <CanadaHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <CanadaFooter />
    </div>
  )
}
