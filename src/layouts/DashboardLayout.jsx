import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom'
import { cn } from '../utils/cn.js'
import { Button } from '../components/ui/Button.jsx'
import { Avatar } from '../components/ui/States.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { DemoBanner } from '../components/layout/DemoBanner.jsx'
import { SITE } from '../config/site.js'

export function DashboardLayout({ nav, title, accentColor = 'brand', homeLink }) {
  const { user, logout, role } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const palette = {
    brand: { bg: 'bg-brand-600', text: 'text-brand-600', hover: 'hover:bg-brand-50', active: 'bg-brand-50 text-brand-700' },
    accent: { bg: 'bg-accent-500', text: 'text-accent-600', hover: 'hover:bg-accent-50', active: 'bg-accent-50 text-accent-700' },
    ink: { bg: 'bg-ink-700', text: 'text-ink-700', hover: 'hover:bg-ink-100', active: 'bg-ink-100 text-ink-900' },
  }[accentColor]

  return (
    <div className="min-h-screen bg-ink-50/60">
      <DemoBanner />
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-ink-200 bg-white">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden rounded-md p-2 hover:bg-ink-100"
              aria-label="Toggle sidebar"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span className={cn('flex h-8 w-8 items-center justify-center rounded-lg', palette.bg)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white"/><circle cx="18" cy="17.5" r="3" fill="#f97316"/></svg>
              </span>
              <span className="font-display text-base font-bold text-ink-900">Srijee<span className={palette.text}>Tutor</span></span>
            </Link>
            <span className="hidden sm:inline text-ink-300">/</span>
            <span className="hidden sm:inline text-sm font-medium text-ink-600">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone="ink" size="sm" className="hidden sm:inline-flex">{role}</Badge>
            <div className="flex items-center gap-2.5">
              <Avatar name={user?.name || 'User'} size="sm" />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-ink-900 leading-tight">{user?.name}</p>
                <p className="text-xs text-ink-500 leading-tight">{user?.mobile || user?.email}</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="hidden sm:inline-flex">Logout</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block w-64 flex-none border-r border-ink-200 bg-white min-h-[calc(100vh-4rem)] sticky top-16 self-start">
          <SidebarContent nav={nav} palette={palette} homeLink={homeLink} />
        </aside>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden fixed inset-0 z-40">
            <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-lift animate-fade-in">
              <SidebarContent nav={nav} palette={palette} homeLink={homeLink} onNavigate={() => setOpen(false)} />
            </aside>
          </div>
        )}

        {/* Main */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function SidebarContent({ nav, palette, homeLink, onNavigate }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? palette.active
                    : `text-ink-700 ${palette.hover}`
                )
              }
            >
              <NavIcon name={item.icon} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="border-t border-ink-100 p-4 space-y-2">
        <Link to="/" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l6-6 6 6M4 7v7h8V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to website
        </Link>
      </div>
    </div>
  )
}

function NavIcon({ name }) {
  const icons = {
    grid:      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
    user:      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 16c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    users:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1.5 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="13" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M11 14c0-2 1.5-3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    sparkles:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.5 4.5L15 8l-4.5 1.5L9 14l-1.5-4.5L3 8l4.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    calendar:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="3.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2.5 7h13M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    wallet:    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="4.5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2.5 7.5h13M12 11h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    cog:       <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.3 3.3l1.4 1.4M13.3 13.3l1.4 1.4M14.7 3.3l-1.4 1.4M4.7 13.3l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    inbox:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 10l2-5.5h9l2 5.5M2.5 10v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4M2.5 10h4l1 2h3l1-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    clipboard: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3.5" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 2.5h6v2H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    play:      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7.5 6.5l4 2.5-4 2.5z" fill="currentColor"/></svg>,
    document:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 2.5h7l3 3V15a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 4 15V3a.5.5 0 0 1 .5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M11 2.5v3h3M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    chat:      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7l-3.5 3V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  }
  return icons[name] || icons.grid
}
