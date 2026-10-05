import React from 'react'
import { Outlet } from 'react-router-dom'
import UKHeader from '../components/UKHeader.jsx'
import UKFooter from '../components/UKFooter.jsx'

/**
 * UKLayout — wraps every page in the UK regional frontend.
 *
 * Composition:
 *   - UKHeader (region-specific sticky nav with "Change Region" button)
 *   - <Outlet /> (page content)
 *   - UKFooter (region-specific footer)
 *
 * Per spec §11: The "Change Region" button lives in the header (via
 * RegionHeaderButton inside UKHeader), opening the OriginModal.
 */

export default function UKLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900">
      <UKHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <UKFooter />
    </div>
  )
}
