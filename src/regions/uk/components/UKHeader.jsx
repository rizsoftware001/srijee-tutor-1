import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ukNav } from '../data/ukContent.js'
import { SITE } from '../../../config/site.js'
import { REGIONS } from '../../../config/regions.js'
import RegionHeaderButton from '../../../components/region/RegionHeaderButton.jsx'

/**
 * UKHeader — region-specific top navigation for the United Kingdom frontend.
 *
 * Per spec §10 (UK navigation):
 *   Home · Find a Tutor · Subjects · Key Stages · GCSE · A-Level · About · Contact
 *
 * Per spec §7 (UK design direction):
 *   Elegant, academic, premium, traditional but modern, sophisticated.
 *   Deep navy + muted gold + warm off-white.
 *
 * Features:
 *   - Sticky on scroll with subtle shadow elevation
 *   - Mega-menu dropdown for "Find a Tutor" with descriptions
 *   - Mobile drawer with accordion
 *   - Phone CTA + "Find My Tutor" primary CTA
 */

const REGION = REGIONS.GB

export default function UKHeader() {
  const [open, setOpen] = useState(false) // mobile drawer
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // active dropdown
  const location = useLocation()

  // Close drawer + dropdown on route change
  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  // Sticky elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200'
          : 'bg-white border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo + brand */}
          <Link to={REGION.routePrefix} className="flex items-center gap-2.5 flex-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white" />
                <circle cx="18" cy="17.5" r="3" fill="#fbbf24" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-stone-900 tracking-tight">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop nav (lg+) */}
          <nav className="hidden lg:flex items-center gap-1">
            {ukNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-amber-700 rounded-md transition-colors"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-60" fill="none">
                      <path d="M3 4.5L6 7.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openMenu === item.label && (
                    <div className="absolute top-full left-0 w-80 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-2 animate-fade-up">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-3 py-2.5 rounded-lg hover:bg-amber-50 transition-colors"
                          >
                            <p className="text-sm font-semibold text-stone-900">{child.label}</p>
                            <p className="text-xs text-stone-500 mt-0.5">{child.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === REGION.routePrefix}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-amber-800 bg-amber-50'
                        : 'text-stone-700 hover:text-amber-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 1.5L5 1L6 4L4.5 5.5c1 2 2.5 3.5 4.5 4.5L10.5 8.5 13.5 9.5V12c0 .5-.5 1-1 1C6 13 1 8 1 2.5c0-.5.5-1 1-1z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span className="hidden 2xl:inline">{SITE.phoneDisplay}</span>
            </a>
            <RegionHeaderButton className="text-stone-700 border-stone-300 hover:bg-stone-50" />
            <Link
              to="/uk/find-tutor"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors"
            >
              Find My Tutor
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-stone-700 hover:bg-stone-100"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1">
            {ukNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block px-3 py-2 text-sm text-stone-700 hover:bg-stone-50 rounded-md border-l-2 border-stone-200 ml-3"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={`tel:${SITE.phoneHref}`}
              className="block px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50 rounded-md text-center mt-2"
            >
              📞 {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
