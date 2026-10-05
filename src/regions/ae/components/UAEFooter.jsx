import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../../../config/site.js'
import { REGIONS } from '../../../config/regions.js'

/**
 * UAEFooter — region-specific footer for the UAE frontend.
 *
 * Per spec §9: Premium dark navy (bg-slate-900), sophisticated, Gulf-region appropriate.
 * Subtle gold accents on hover only — never primary fills.
 *
 * Footer columns:
 *   - Brand + contact info
 *   - Tuition (Home, Online, One-to-One, Group)
 *   - Curriculum (UAE/MOE, British, American, IB, CBSE, ICSE)
 *   - Subjects (Mathematics, English, Arabic, Physics, Chemistry, Biology, Computer Science, Business Studies, Economics, French)
 *   - Company (About Us, Blog, Contact, Become a Tutor)
 *   - Account (login links)
 */

const REGION = REGIONS.AE

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
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-white transition-colors text-sm font-semibold"
    >
      {map[name] || name[0]}
    </a>
  )
}

export default function UAEFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <Link to={REGION.routePrefix} className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-slate-800 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white" />
                  <circle cx="18" cy="17.5" r="3" fill="#fbbf24" />
                </svg>
              </span>
              <div className="leading-tight">
                <span className="font-display text-lg font-bold text-white block">{SITE.name}</span>
                <span className="text-2xs font-semibold uppercase tracking-wider text-amber-500">UAE</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The UAE frontend of {SITE.name} — verified online tutors across MOE, British,
              American, IB, CBSE, and ICSE curricula. Personalised, premium, and demo-first.
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

          {/* Tuition */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">
              Tuition
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ae/find-tutor" className="hover:text-white transition-colors">Home Tuition</Link></li>
              <li><Link to="/ae/find-tutor" className="hover:text-white transition-colors">Online Tuition</Link></li>
              <li><Link to="/ae/find-tutor" className="hover:text-white transition-colors">One-to-One Tuition</Link></li>
              <li><Link to="/ae/find-tutor" className="hover:text-white transition-colors">Group Tuition</Link></li>
            </ul>
          </div>

          {/* Curriculum */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">
              Curriculum
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">UAE / MOE</Link></li>
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">British</Link></li>
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">American</Link></li>
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">IB</Link></li>
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">CBSE</Link></li>
              <li><Link to="/ae/curriculum" className="hover:text-white transition-colors">ICSE</Link></li>
            </ul>
          </div>

          {/* Subjects */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">
              Subjects
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Mathematics</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">English</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Arabic</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Physics</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Chemistry</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Biology</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Computer Science</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Business Studies</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">Economics</Link></li>
              <li><Link to="/ae/subjects" className="hover:text-white transition-colors">French</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ae/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ae/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/ae/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/ae/become-a-tutor" className="hover:text-white transition-colors">Become a Tutor</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">
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
            UAE frontend · AED pricing · Multi-curriculum support (MOE, British, American, IB, CBSE, ICSE)
          </p>
        </div>
      </div>
    </footer>
  )
}
