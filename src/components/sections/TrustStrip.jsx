// // import React from 'react'

// // /**
// //  * Trust strip — claims MUST be supported by real business info.
// //  * Numbers like "X students" or "X% success" are intentionally NOT
// //  * shown until the business supplies verified figures.
// //  */
// // export function TrustStrip() {
// //   const items = [
// //     { label: 'Verified Educators', sub: 'Document-checked tutors' },
// //     { label: 'Personalised Matching', sub: 'Class · Board · Subject · Area' },
// //     { label: 'Home & Online', sub: 'Choose your mode' },
// //     { label: 'Dedicated Counsellor', sub: 'End-to-end support' },
// //   ]
// //   return (
// //     <section className="border-y border-ink-100 bg-ink-50/60">
// //       <div className="container-page py-6">
// //         <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
// //           {items.map((it) => (
// //             <li key={it.label} className="flex items-start gap-3">
// //               <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
// //                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// //               </span>
// //               <div>
// //                 <p className="text-sm font-semibold text-ink-900">{it.label}</p>
// //                 <p className="text-xs text-ink-500">{it.sub}</p>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </section>
// //   )
// // }


// import React from 'react'

// /**
//  * Trust strip — claims MUST be supported by real business info.
//  * Numbers like "X students" or "X% success" are intentionally NOT
//  * shown until the business supplies verified figures.
//  */
// export function TrustStrip() {
//   const items = [
//     { label: 'Verified Educators', sub: 'Document-checked tutors' },
//     { label: 'Personalised Matching', sub: 'Class · Board · Subject · Area' },
//     { label: 'Home & Online', sub: 'Choose your mode' },
//     { label: 'Dedicated Counsellor', sub: 'End-to-end support' },
//   ]
// // bg-sky-50
//   return (
//     // <section className="border-y border-ink-100 bg-sky-50 border-y border-sky-100 bg-sky-200">
//     <section className="border-y border-ink-100 bg-sky-100 border-y border-sky-200">
//       <div className="container-page py-6">
//         <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
//           {items.map((it) => (
//             <li key={it.label} className="flex items-start gap-3">
//               <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   fill="none"
//                 >
//                   <path
//                     d="M1 7l4 4 8-9"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>

//               <div>
//                 <p className="text-sm font-semibold text-ink-900">
//                   {it.label}
//                 </p>
//                 <p className="text-xs text-ink-500">{it.sub}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }

// import React from 'react'

// /**
//  * Trust strip — claims MUST be supported by real business info.
//  * Numbers like "X students" or "X% success" are intentionally NOT
//  * shown until the business supplies verified figures.
//  */
// export function TrustStrip() {
//   const items = [
//     { label: 'Verified Educators', sub: 'Document-checked tutors' },
//     { label: 'Personalised Matching', sub: 'Class · Board · Subject · Area' },
//     { label: 'Home & Online', sub: 'Choose your mode' },
//     { label: 'Dedicated Counsellor', sub: 'End-to-end support' },
//   ]
//   return (
//     <section className="border-y border-ink-100 bg-ink-50/60">
//       <div className="container-page py-6">
//         <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
//           {items.map((it) => (
//             <li key={it.label} className="flex items-start gap-3">
//               <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//               </span>
//               <div>
//                 <p className="text-sm font-semibold text-ink-900">{it.label}</p>
//                 <p className="text-xs text-ink-500">{it.sub}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }


import React from 'react'

/**
 * Trust strip — claims MUST be supported by real business info.
 * Numbers like "X students" or "X% success" are intentionally NOT
 * shown until the business supplies verified figures.
 */
export function TrustStrip() {
  const items = [
    { label: 'Verified Educators', sub: 'Document-checked tutors' },
    { label: 'Personalised Matching', sub: 'Class · Board · Subject · Area' },
    { label: 'Home & Online', sub: 'Choose your mode' },
    { label: 'Dedicated Counsellor', sub: 'End-to-end support' },
  ]
// bg-sky-50
  return (
    // <section className="border-y border-ink-100 bg-sky-50 border-y border-sky-100 bg-sky-200">
    <section className="border-y border-ink-100 bg-sky-100 border-y border-sky-200 dark:border-ink-800 dark:bg-sky-950/40">
      <div className="container-page py-6">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {items.map((it) => (
            <li key={it.label} className="flex items-start gap-3">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">
                  {it.label}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{it.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}