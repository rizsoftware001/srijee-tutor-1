import React from 'react'
import { Outlet } from 'react-router-dom'
import USAHeader from '../components/USAHeader.jsx'
import USAFooter from '../components/USAFooter.jsx'

/**
 * USALayout — wraps every page in the US regional frontend.
 *
 * Composition:
 *   - USAHeader (region-specific sticky nav with "Change Region" button)
 *   - <Outlet /> (page content)
 *   - USAFooter (region-specific footer)
 *
 * Per spec §11: The "Change Region" button lives in the header (via
 * RegionHeaderButton inside USAHeader), and opens the OriginModal — no
 * separate floating FAB is needed anymore.
 */

export default function USALayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <USAHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <USAFooter />
    </div>
  )
}
