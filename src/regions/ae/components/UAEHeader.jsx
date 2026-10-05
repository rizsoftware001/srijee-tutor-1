import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { aeNav } from '../data/aeContent.js'
import { SITE } from '../../../config/site.js'
import { REGIONS } from '../../../config/regions.js'
import RegionHeaderButton from '../../../components/region/RegionHeaderButton.jsx'

const REGION = REGIONS.AE

export default function UAEHeader() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); setOpenMenu(null) }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,.08)] border-b border-slate-200/80' : 'bg-white/95 border-b border-slate-100'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link to={REGION.routePrefix} className="flex items-center gap-3 shrink-0">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-amber-300 opacity-90" />
              <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 7h14M5 12h14M5 17h8" strokeLinecap="round"/><circle cx="18" cy="17" r="2" fill="currentColor" stroke="none"/></svg>
            </span>
            <div className="leading-tight">
              <span className="block font-display text-[17px] font-bold tracking-tight text-slate-950">{SITE.name}</span>
              <span className="block text-[9px] font-bold uppercase tracking-[.22em] text-blue-700">UAE</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {aeNav.map((item) => item.children ? (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
                <button type="button" className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-950" aria-expanded={openMenu === item.label}>
                  {item.label}<span className="text-[10px]">⌄</span>
                </button>
                {openMenu === item.label && <div className="absolute left-0 top-full w-72 pt-2"><div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">{item.children.map((child) => <Link key={child.to + child.label} to={child.to} className="block rounded-xl px-3 py-3 hover:bg-blue-50"><p className="text-sm font-bold text-slate-900">{child.label}</p><p className="mt-0.5 text-xs leading-5 text-slate-500">{child.desc}</p></Link>)}</div></div>}
              </div>
            ) : <NavLink key={item.to + item.label} to={item.to} end={item.to === REGION.routePrefix} className={({ isActive }) => `rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${isActive ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}>{item.label}</NavLink>)}
          </nav>

          <div className="flex items-center gap-2">
            <RegionHeaderButton className="hidden sm:inline-flex border-slate-200 text-slate-700 hover:bg-slate-50" />
            <Link to="/ae/find-tutor" className="hidden sm:inline-flex ae-header-cta">Find a Tutor <span>→</span></Link>
            <button type="button" onClick={() => setOpen((value) => !value)} className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50" aria-label="Toggle navigation" aria-expanded={open}>
              {open ? <span className="text-xl leading-none">×</span> : <span className="text-lg">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {open && <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl"><nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">{aeNav.map((item) => item.children ? <div key={item.label} className="py-2"><p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-blue-700">{item.label}</p>{item.children.map((child) => <Link key={child.to + child.label} to={child.to} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{child.label}</Link>)}</div> : <Link key={item.to + item.label} to={item.to} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{item.label}</Link>)}<div className="mt-3 border-t border-slate-100 pt-3 flex gap-2"><RegionHeaderButton className="flex-1 justify-center" /><Link to="/ae/find-tutor" className="ae-header-cta flex-1 justify-center">Find a Tutor →</Link></div></nav></div>}
    </header>
  )
}
