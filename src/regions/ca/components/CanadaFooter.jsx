import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../../../config/site.js'
import { REGIONS } from '../../../config/regions.js'

/**
 * CanadaFooter — region-specific footer for the Canada frontend.
 *
 * Per spec §8: Clean, friendly, modern, welcoming, family-oriented, professional.
 *
 * Footer columns:
 *   - Brand + contact info
 *   - Find a Tutor (subjects, grade levels, curriculum, how it works, locations)
 *   - Company (about, blog, contact, become a tutor)
 *   - Account (login links → /in/* shared auth)
 *
 * Bottom bar: "Canada frontend · CAD pricing · Provincial curriculum aligned"
 */

const REGION = REGIONS.CA

function SocialIcon({ name }) {
  const map = {
    facebook: 'f',
    instagram: 'i',
    youtube: 'y',
    linkedin: 'in',
    twitter: '𝕏',
  }
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (demo link)`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-red-700 hover:text-white transition-colors text-sm font-semibold"
    >
      {map[name] || name[0]}
    </a>
  )
}

export default function CanadaFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <Link to={REGION.routePrefix} className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-700 to-blue-900 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2l1.6 4.6 4.7-.4-1.4 4.5 3.6 3-4 2.4.9 4.7L12 18.6 7.6 21.3l.9-4.7-4-2.4 3.6-3-1.4-4.5 4.7.4z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-display text-lg font-bold text-white">{SITE.name}</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The Canada frontend of {SITE.name} — verified online tutors for
              provincial curriculum, French immersion, university prep, and IB.
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 1.5L5 1L6 4L4.5 5.5c1 2 2.5 3.5 4.5 4.5L10.5 8.5 13.5 9.5V12c0 .5-.5 1-1 1C6 13 1 8 1 2.5c0-.5.5-1 1-1z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-white transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="1.5" y="3" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1.5 4l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              {['facebook', 'instagram', 'youtube', 'linkedin'].map((s) => (
                <SocialIcon key={s} name={s} />
              ))}
            </div>
          </div>

          {/* Find a Tutor */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Find a Tutor
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ca/subjects" className="hover:text-white transition-colors">Subjects</Link></li>
              <li><Link to="/ca/curriculum" className="hover:text-white transition-colors">Grade Levels</Link></li>
              <li><Link to="/ca/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link to="/ca/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/ca/locations" className="hover:text-white transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ca/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ca/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/ca/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/ca/become-a-tutor" className="hover:text-white transition-colors">Become a Tutor</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/student/login" className="hover:text-white transition-colors">Student Login</Link></li>
              <li><Link to="/teacher/login" className="hover:text-white transition-colors">Tutor Login</Link></li>
              <li><Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {SITE.copyrightYear} {SITE.name} · {SITE.legalName} · All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Canada frontend · CAD pricing · Provincial curriculum aligned
          </p>
        </div>
      </div>
    </footer>
  )
}
