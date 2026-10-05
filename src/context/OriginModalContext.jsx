import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  REGIONS,
  REGION_LIST,
  saveRegionPreference,
  detectRegionFromPath,
} from '../config/regions.js'
import OriginModal from '../components/region/OriginModal.jsx'

/**
 * OriginModalContext — global modal state for the "Select Your Origin" popup.
 *
 * Per spec:
 *   - The modal can be opened from anywhere via `openOriginModal()`.
 *   - It auto-opens 1 second after the India homepage loads (only once per
 *     browser session — gated by sessionStorage).
 *   - It can be re-opened at any time via the "Change Region" button in the
 *     header (which calls `openOriginModal()`).
 *   - Selecting a country saves the preference and navigates to that region.
 *   - Closing the modal (×) just dismisses it; the user stays on the current
 *     page.
 *
 * Usage:
 *   const { openOriginModal, closeOriginModal, isOpen } = useOriginModal()
 */

const OriginModalContext = createContext(null)

export function OriginModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const openOriginModal = useCallback(() => setOpen(true), [])
  const closeOriginModal = useCallback(() => setOpen(false), [])

  // Handle country selection — save preference, navigate, close
  const handleSelect = useCallback(
    (code) => {
      saveRegionPreference(code)
      setOpen(false)
      const region = REGIONS[code]
      if (!region) return
      // Always navigate to the selected region's home route. For India
      // (routePrefix '/'), this navigates to the India homepage. For other
      // regions, this navigates to /us, /uk, /ca, /ae respectively.
      // Per spec §7: selecting India keeps the existing India frontend at /.
      navigate(region.routePrefix)
    },
    [navigate]
  )

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Close modal on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const value = {
    isOpen: open,
    openOriginModal,
    closeOriginModal,
    selectRegion: handleSelect,
  }

  return (
    <OriginModalContext.Provider value={value}>
      {children}
      <OriginModal open={open} onClose={closeOriginModal} onSelect={handleSelect} />
    </OriginModalContext.Provider>
  )
}

export function useOriginModal() {
  const ctx = useContext(OriginModalContext)
  if (!ctx) throw new Error('useOriginModal must be used within OriginModalProvider')
  return ctx
}

/**
 * Detects the current region from the URL path.
 * Returns the region code (IN, US, GB, CA, AE) or 'IN' if at root.
 */
export function useCurrentRegion() {
  const location = useLocation()
  const detected = detectRegionFromPath(location.pathname)
  return detected || 'IN' // India is now at /, so root = India
}
