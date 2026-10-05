// import React from 'react'
// import { Link } from 'react-router-dom'
// import { footerNav } from '../../config/nav.js'
// import { SITE } from '../../config/site.js'

// export function PublicFooter() {
//   const year = SITE.copyrightYear
//   return (
//     <footer className="border-t border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950">
//       <div className="container-page py-14">
//         <div className="grid gap-10 lg:grid-cols-12">
//           {/* Brand */}
//           <div className="lg:col-span-4">
//             <Link to="/" className="flex items-center gap-2.5">
//               <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient shadow-glow-brand">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                   <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white"/>
//                   <circle cx="18" cy="17.5" r="3" fill="#f97316"/>
//                 </svg>
//               </span>
//               <span className="font-display text-lg font-extrabold tracking-tight text-ink-900 dark:text-white">
//                 Srijee<span className="text-brand-600 dark:text-brand-400">Tutor</span>
//               </span>
//             </Link>
//             <p className="mt-4 max-w-sm text-sm text-ink-600 dark:text-ink-300">
//               {SITE.description}
//             </p>

//             {/* Real contact info */}
//             <div className="mt-5 space-y-1.5 text-sm text-ink-600 dark:text-ink-300">
//               <p className="flex items-center gap-2">
//                 <span className="text-brand-600 dark:text-brand-400">📞</span>
//                 <a href={`tel:${SITE.phoneHref}`} className="hover:text-brand-700 dark:hover:text-brand-300">{SITE.phoneDisplay}</a>
//               </p>
//               <p className="flex items-center gap-2">
//                 <span className="text-brand-600 dark:text-brand-400">✉</span>
//                 <a href={`mailto:${SITE.email}`} className="hover:text-brand-700 dark:hover:text-brand-300 break-all">{SITE.email}</a>
//               </p>
//               <p className="flex items-center gap-2">
//                 <span className="text-brand-600 dark:text-brand-400">📍</span>
//                 <span>{SITE.address.city}, {SITE.address.state}, {SITE.address.country}</span>
//               </p>
//             </div>

//             {/* Social */}
//             <div className="mt-5 flex gap-3">
//               <SocialIcon href={SITE.social.facebook}  label="Facebook"  icon="f" />
//               <SocialIcon href={SITE.social.instagram} label="Instagram" icon="i" />
//               <SocialIcon href={SITE.social.youtube}   label="YouTube"   icon="y" />
//               <SocialIcon href={SITE.social.linkedin}  label="LinkedIn"  icon="in" />
//             </div>
//           </div>

//           {/* Nav columns */}
//           <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {Object.entries(footerNav).map(([title, items]) => (
//               <div key={title}>
//                 <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">{title}</h3>
//                 <ul className="mt-3 space-y-2">
//                   {items.map((item) => (
//                     <li key={item.to}>
//                       <Link to={item.to} className="text-sm text-ink-700 dark:text-ink-300 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
//                         {item.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-ink-200 dark:border-ink-800 pt-6">
//           <p className="text-xs text-ink-500 dark:text-ink-300">
//             © {year} {SITE.name} | All rights reserved
//           </p>
//           {/* {SITE.isDemo && (
//             // <p className="rounded-full bg-warning-50 dark:bg-warning-900/30 px-3 py-1 text-xs font-medium text-warning-700 dark:text-warning-300 ring-1 ring-warning-200 dark:ring-warning-800">
//             //   Demo build — not for production
//             // </p>
//           )} */}
//           <div className="flex gap-4 text-xs text-ink-500 dark:text-ink-300">
//             <Link to="/about" className="hover:text-brand-700 dark:hover:text-brand-300">About</Link>
//             <Link to="/contact" className="hover:text-brand-700 dark:hover:text-brand-300">Contact</Link>
//             <Link to="/blog" className="hover:text-brand-700 dark:hover:text-brand-300">Blog</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// function SocialIcon({ href, label, icon }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300 hover:border-brand-300 dark:hover:border-brand-700 transition-all"
//     >
//       <span className="text-xs font-bold">{icon}</span>
//     </a>
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom'
import { footerNav } from '../../config/nav.js'
import { SITE } from '../../config/site.js'

export function PublicFooter() {
  const year = SITE.copyrightYear
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient shadow-glow-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z" fill="white"/>
                  <circle cx="18" cy="17.5" r="3" fill="#f97316"/>
                </svg>
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-ink-900 dark:text-white">
                Srijee<span className="text-brand-600 dark:text-brand-400">Tutor</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-ink-600 dark:text-ink-300">
              {SITE.description}
            </p>

            {/* Real contact info */}
            <div className="mt-5 space-y-1.5 text-sm text-ink-600 dark:text-ink-300">
              <p className="flex items-center gap-2">
                <span className="text-brand-600 dark:text-brand-400">📞</span>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-brand-700 dark:hover:text-brand-300">{SITE.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-600 dark:text-brand-400">✉</span>
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-700 dark:hover:text-brand-300 break-all">{SITE.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-600 dark:text-brand-400">📍</span>
                <span>{SITE.address.city}, {SITE.address.state}, {SITE.address.country}</span>
              </p>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <SocialIcon href={SITE.social.facebook}  label="Facebook"  icon="f" />
              <SocialIcon href={SITE.social.instagram} label="Instagram" icon="i" />
              <SocialIcon href={SITE.social.youtube}   label="YouTube"   icon="y" />
              <SocialIcon href={SITE.social.linkedin}  label="LinkedIn"  icon="in" />
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerNav).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="text-sm text-ink-700 dark:text-ink-300 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-ink-200 dark:border-ink-800 pt-6">
          <p className="text-xs text-ink-500 dark:text-ink-300">
            © {year} {SITE.name} | All rights reserved
          </p>
          {/* {SITE.isDemo && (
            // <p className="rounded-full bg-warning-50 dark:bg-warning-900/30 px-3 py-1 text-xs font-medium text-warning-700 dark:text-warning-300 ring-1 ring-warning-200 dark:ring-warning-800">
            //   Demo build — not for production
            // </p>
          )} */}
          <div className="flex gap-4 text-xs text-ink-500 dark:text-ink-300">
            <Link to="/about" className="hover:text-brand-700 dark:hover:text-brand-300">About</Link>
            <Link to="/contact" className="hover:text-brand-700 dark:hover:text-brand-300">Contact</Link>
            <Link to="/blog" className="hover:text-brand-700 dark:hover:text-brand-300">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300 hover:border-brand-300 dark:hover:border-brand-700 transition-all"
    >
      <span className="text-xs font-bold">{icon}</span>
    </a>
  )
}
