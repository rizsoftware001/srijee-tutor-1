import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn.js'
import { publicNav } from '../../config/nav.js'
import { SITE, TUTOR_CTA, ENROLL_CTA } from '../../config/site.js'
import { Button } from '../ui/Button.jsx'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'
import RegionHeaderButton from '../region/RegionHeaderButton.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'

export function PublicHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const location = useLocation()
  const { openEnrollment } = useEnrollment()

  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-ink-200 dark:border-ink-800 bg-white/95 dark:bg-ink-950/95 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-white dark:bg-ink-950'
      )}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-none" aria-label={`${SITE.name} home`}>
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white">
              Srijee<span className="text-brand-600 dark:text-brand-400">Tutor</span>
            </span>
          </Link>

          {/* Desktop nav — shows at lg (1024px+) with tight padding */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {publicNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.to ? (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-md px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap',
                        isActive
                          ? 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30'
                          : 'text-ink-700 dark:text-ink-200 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-ink-50 dark:hover:bg-ink-800'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button className="flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-ink-50 dark:hover:bg-ink-800 whitespace-nowrap">
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60"><path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                )}
                {item.children && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-1 w-80 animate-fade-up">
                    <div className="card p-2 shadow-xl">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block rounded-lg p-3 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
                        >
                          <p className="text-sm font-semibold text-ink-900 dark:text-white">{c.label}</p>
                          <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-300">{c.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side — progressive disclosure to prevent overflow */}
          <div className="hidden lg:flex items-center gap-2 flex-none">
            {/* Phone: only at 2xl (1536px+) — first to hide */}
            <a
              href={`tel:${SITE.phoneHref}`}
              // className="hidden 2xl:flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-brand-700 dark:hover:text-brand-300 transition-colors whitespace-nowrap"
             className="hidden min-[1700px]:flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-brand-700 dark:hover:text-brand-300 transition-colors whitespace-nowrap"
              title={SITE.phoneDisplay}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {SITE.phoneDisplay}
            </a>
            {/* <span className="hidden 2xl:block h-5 w-px bg-ink-200 dark:bg-ink-700" /> */}
            <span className="hidden min-[1700px]:block h-5 w-px bg-ink-200 dark:bg-ink-700" />

            <ThemeToggle />

            {/* Change Region button — opens the OriginModal */}
            <RegionHeaderButton className="text-ink-700 dark:text-ink-200 border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800" />

            {/* Become a Tutor: only at xl (1280px+) — second to hide */}
            <Button
              as={Link}
              to="/become-a-tutor"
              variant="ghost"
              size="md"
              className="hidden xl:inline-flex"
            >
              {TUTOR_CTA}
            </Button>

            {/* Enroll as Student: ALWAYS visible at lg+ — never overflows */}
            <Button type="button" variant="primary" size="md" onClick={openEnrollment}>
              {ENROLL_CTA}
            </Button>
          </div>

          {/* Mobile right side (below lg — < 1024px) */}
          <div className="lg:hidden flex items-center gap-1 flex-none">
            <ThemeToggle />
            <RegionHeaderButton className="text-ink-700 dark:text-ink-200 border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800" />
            <button
              className="rounded-md p-2 text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M1 1l20 20M21 1L1 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer (below lg — < 1024px) */}
      {open && (
        <div className="lg:hidden border-t border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4">
            <nav className="flex flex-col gap-0.5" aria-label="Mobile primary">
              {publicNav.map((item) => (
                <div key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink-800 dark:text-ink-100 hover:bg-brand-50 dark:hover:bg-brand-900/20">
                      {item.label}
                    </Link>
                  ) : (
                    <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-300">{item.label}</p>
                  )}
                  {item.children && (
                    <div className="ml-2 border-l border-ink-100 dark:border-ink-800 pl-2">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to} className="block rounded-md px-3 py-2 text-sm text-ink-700 dark:text-ink-300 hover:bg-brand-50 dark:hover:bg-brand-900/20">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <a href={`tel:${SITE.phoneHref}`} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ink-200 dark:border-ink-700 p-3 text-sm font-semibold text-ink-800 dark:text-ink-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {SITE.phoneDisplay}
            </a>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button as={Link} to="/become-a-tutor" variant="secondary" size="md" fullWidth>{TUTOR_CTA}</Button>
              <Button type="button" variant="primary" size="md" fullWidth onClick={() => { setOpen(false); openEnrollment() }}>{ENROLL_CTA}</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-teal-gradient shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white"/>
        <circle cx="18" cy="17.5" r="3" fill="#fbbf24"/>
      </svg>
    </span>
  )
}
