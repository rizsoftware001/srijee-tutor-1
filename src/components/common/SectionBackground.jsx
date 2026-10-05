// // // import React from 'react'
// // // import { cn } from '../../utils/cn.js'

// // // /**
// // //  * SectionBackground — premium dynamic section backgrounds
// // //  * Inspired by talk2college.com — every section gets a subtle but
// // //  * visible background treatment: dot grids, gradient meshes, glows,
// // //  * decorative shapes, wave dividers, blobs.
// // //  *
// // //  * DARK-MODE SAFE: all fades use CSS variables, no hardcoded white.
// // //  *
// // //  * Usage:
// // //  *   <section className="relative ...">
// // //  *     <SectionBackground variant="dots" tone="brand" />
// // //  *     <div className="relative z-10">...content...</div>
// // //  *   </section>
// // //  *
// // //  * Variants: dots | grid | mesh | glow | waves | blobs | rings | aurora
// // //  * Tones:    brand | teal | accent | success | warning | ink
// // //  */
// // // export function SectionBackground({
// // //   variant = 'dots',
// // //   tone = 'brand',
// // //   className,
// // //   position = 'top',
// // //   corner = 'top-right',
// // //   intensity = 1,
// // // }) {
// // //   return (
// // //     <div
// // //       className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
// // //       aria-hidden="true"
// // //     >
// // //       {variant === 'dots'   && <DotsPattern   tone={tone} intensity={intensity} />}
// // //       {variant === 'grid'   && <GridPattern   tone={tone} intensity={intensity} />}
// // //       {variant === 'mesh'   && <MeshGradient  tone={tone} intensity={intensity} />}
// // //       {variant === 'glow'   && <GlowOrb       tone={tone} corner={corner} intensity={intensity} />}
// // //       {variant === 'waves'  && <Waves         tone={tone} position={position} intensity={intensity} />}
// // //       {variant === 'blobs'  && <Blobs         tone={tone} intensity={intensity} />}
// // //       {variant === 'rings'  && <Rings         tone={tone} intensity={intensity} />}
// // //       {variant === 'aurora' && <Aurora        tone={tone} intensity={intensity} />}
// // //     </div>
// // //   )
// // // }

// // // /* ─── Tone palettes ──────────────────────────────────────────── */

// // // const TONES = {
// // //   brand:   { main: '14, 165, 233',  soft: '186, 230, 253',  hex: '#0ea5e9' },
// // //   teal:    { main: '20, 184, 166',  soft: '153, 246, 228',  hex: '#14b8a6' },
// // //   accent:  { main: '249, 115, 22',  soft: '254, 215, 170',  hex: '#f97316' },
// // //   success: { main: '34, 197, 94',   soft: '187, 247, 208',  hex: '#22c55e' },
// // //   warning: { main: '245, 158, 11',  soft: '254, 240, 138',  hex: '#f59e0b' },
// // //   ink:     { main: '100, 116, 139', soft: '203, 213, 225',  hex: '#64748b' },
// // // }

// // // /* ─── Variants — all dark-mode safe ─────────────────────────── */

// // // function DotsPattern({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <>
// // //       <div
// // //         className="absolute inset-0"
// // //         style={{
// // //           backgroundImage: `radial-gradient(circle, rgba(${t.main}, ${0.18 * intensity}) 1.5px, transparent 1.5px)`,
// // //           backgroundSize: '20px 20px',
// // //         }}
// // //       />
// // //       {/* Theme-aware fade — uses CSS variable, works in dark mode */}
// // //       <div
// // //         className="absolute inset-0 sb-fade-edges"
// // //         style={{
// // //           background: 'radial-gradient(ellipse 70% 80% at center, transparent 30%, var(--sb-bg) 90%)',
// // //         }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // function GridPattern({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <>
// // //       <div
// // //         className="absolute inset-0"
// // //         style={{
// // //           backgroundImage: `
// // //             linear-gradient(rgba(${t.main}, ${0.08 * intensity}) 1px, transparent 1px),
// // //             linear-gradient(90deg, rgba(${t.main}, ${0.08 * intensity}) 1px, transparent 1px)
// // //           `,
// // //           backgroundSize: '48px 48px',
// // //         }}
// // //       />
// // //       {/* Theme-aware radial fade */}
// // //       <div
// // //         className="absolute inset-0 sb-fade-edges"
// // //         style={{
// // //           background: 'radial-gradient(ellipse 60% 70% at center, transparent 0%, var(--sb-bg) 85%)',
// // //         }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // function MeshGradient({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <div
// // //       className="absolute inset-0"
// // //       style={{
// // //         background: `
// // //           radial-gradient(circle at 15% 20%, rgba(${t.main}, ${0.16 * intensity}) 0%, transparent 35%),
// // //           radial-gradient(circle at 85% 30%, rgba(${t.main}, ${0.10 * intensity}) 0%, transparent 30%),
// // //           radial-gradient(circle at 50% 90%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)
// // //         `,
// // //       }}
// // //     />
// // //   )
// // // }

// // // function GlowOrb({ tone, corner, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   const corners = {
// // //     'top-right':   'top-[-10%] right-[-5%]',
// // //     'top-left':    'top-[-10%] left-[-5%]',
// // //     'bottom-right':'bottom-[-10%] right-[-5%]',
// // //     'bottom-left': 'bottom-[-10%] left-[-5%]',
// // //   }
// // //   const pos = corners[corner] || corners['top-right']
// // //   return (
// // //     <>
// // //       <div
// // //         className={`absolute ${pos} h-[420px] w-[420px] rounded-full blur-3xl`}
// // //         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.22 * intensity}) 0%, transparent 70%)` }}
// // //       />
// // //       <div
// // //         className={`absolute ${pos} h-[260px] w-[260px] rounded-full blur-2xl`}
// // //         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.14 * intensity}) 0%, transparent 70%)` }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // function Waves({ tone, position, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   const fillColor = `rgba(${t.main}, ${0.08 * intensity})`
// // //   return (
// // //     <>
// // //       {position === 'top' && (
// // //         <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
// // //           <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,0 L0,0 Z" fill={fillColor} />
// // //           <path d="M0,80 C200,120 500,40 800,80 C1000,110 1100,60 1200,80 L1200,0 L0,0 Z" fill={fillColor} opacity="0.5" />
// // //         </svg>
// // //       )}
// // //       {position === 'bottom' && (
// // //         <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
// // //           <path d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z" fill={fillColor} />
// // //           <path d="M0,80 C200,40 500,120 800,80 C1000,50 1100,100 1200,80 L1200,120 L0,120 Z" fill={fillColor} opacity="0.5" />
// // //         </svg>
// // //       )}
// // //     </>
// // //   )
// // // }

// // // function Blobs({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <>
// // //       <div
// // //         className="absolute top-[8%] left-[5%] h-72 w-72 rounded-full opacity-40 blur-3xl animate-float-slow"
// // //         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.3 * intensity}) 0%, transparent 70%)` }}
// // //       />
// // //       <div
// // //         className="absolute bottom-[10%] right-[8%] h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-medium"
// // //         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.2 * intensity}) 0%, transparent 70%)` }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // function Rings({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <>
// // //       <div
// // //         className="absolute -top-20 -right-20 h-80 w-80 rounded-full border-[20px]"
// // //         style={{ borderColor: `rgba(${t.main}, ${0.12 * intensity})` }}
// // //       />
// // //       <div
// // //         className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border-[14px]"
// // //         style={{ borderColor: `rgba(${t.main}, ${0.10 * intensity})` }}
// // //       />
// // //       <div
// // //         className="absolute top-[30%] right-[15%] h-24 w-24 rounded-full"
// // //         style={{ background: `rgba(${t.main}, ${0.08 * intensity})` }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // function Aurora({ tone, intensity }) {
// // //   const t = TONES[tone] || TONES.brand
// // //   return (
// // //     <>
// // //       <div
// // //         className="absolute -inset-20 opacity-60"
// // //         style={{
// // //           background: `
// // //             radial-gradient(circle at 20% 30%, rgba(${t.main}, ${0.18 * intensity}) 0%, transparent 40%),
// // //             radial-gradient(circle at 80% 20%, rgba(${t.main}, ${0.14 * intensity}) 0%, transparent 40%),
// // //             radial-gradient(circle at 50% 80%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)
// // //           `,
// // //           animation: 'auroraShift 20s ease-in-out infinite',
// // //         }}
// // //       />
// // //       <div
// // //         className="absolute inset-0"
// // //         style={{
// // //           backgroundImage: `radial-gradient(circle, rgba(${t.main}, ${0.10 * intensity}) 1px, transparent 1px)`,
// // //           backgroundSize: '28px 28px',
// // //         }}
// // //       />
// // //     </>
// // //   )
// // // }

// // // export default SectionBackground
// // import React from 'react'
// // import { cn } from '../../utils/cn.js'

// // /**
// //  * SectionBackground
// //  *
// //  * Decorative background layer for sections.
// //  *
// //  * IMPORTANT:
// //  * - Always stays behind section content.
// //  * - Never captures pointer events.
// //  * - Does not create a page-wide overlay.
// //  * - Uses safe CSS fallbacks for background variables.
// //  *
// //  * Variants:
// //  * dots | grid | mesh | glow | waves | blobs | rings | aurora
// //  *
// //  * Tones:
// //  * brand | teal | accent | success | warning | ink
// //  */
// // export function SectionBackground({
// //   variant = 'dots',
// //   tone = 'brand',
// //   className,
// //   position = 'top',
// //   corner = 'top-right',
// //   intensity = 1,
// // }) {
// //   return (
// //     <div
// //       className={cn(
// //         'pointer-events-none absolute inset-0 z-0 overflow-hidden',
// //         className
// //       )}
// //       aria-hidden="true"
// //     >
// //       {variant === 'dots' && (
// //         <DotsPattern tone={tone} intensity={intensity} />
// //       )}

// //       {variant === 'grid' && (
// //         <GridPattern tone={tone} intensity={intensity} />
// //       )}

// //       {variant === 'mesh' && (
// //         <MeshGradient tone={tone} intensity={intensity} />
// //       )}

// //       {variant === 'glow' && (
// //         <GlowOrb
// //           tone={tone}
// //           corner={corner}
// //           intensity={intensity}
// //         />
// //       )}

// //       {variant === 'waves' && (
// //         <Waves
// //           tone={tone}
// //           position={position}
// //           intensity={intensity}
// //         />
// //       )}

// //       {variant === 'blobs' && (
// //         <Blobs tone={tone} intensity={intensity} />
// //       )}

// //       {variant === 'rings' && (
// //         <Rings tone={tone} intensity={intensity} />
// //       )}

// //       {variant === 'aurora' && (
// //         <Aurora tone={tone} intensity={intensity} />
// //       )}
// //     </div>
// //   )
// // }

// // /* ================================================================
// //    TONE PALETTES
// // ================================================================ */

// // const TONES = {
// //   brand: {
// //     main: '14, 165, 233',
// //     soft: '186, 230, 253',
// //     hex: '#0ea5e9',
// //   },

// //   teal: {
// //     main: '20, 184, 166',
// //     soft: '153, 246, 228',
// //     hex: '#14b8a6',
// //   },

// //   accent: {
// //     main: '249, 115, 22',
// //     soft: '254, 215, 170',
// //     hex: '#f97316',
// //   },

// //   success: {
// //     main: '34, 197, 94',
// //     soft: '187, 247, 208',
// //     hex: '#22c55e',
// //   },

// //   warning: {
// //     main: '245, 158, 11',
// //     soft: '254, 240, 138',
// //     hex: '#f59e0b',
// //   },

// //   ink: {
// //     main: '100, 116, 139',
// //     soft: '203, 213, 225',
// //     hex: '#64748b',
// //   },
// // }

// // /* ================================================================
// //    DOTS
// // ================================================================ */

// // function DotsPattern({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   const opacity = Math.max(
// //     0,
// //     Math.min(0.18 * intensity, 0.35)
// //   )

// //   return (
// //     <>
// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           backgroundImage: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${opacity}) 1.5px,
// //             transparent 1.5px
// //           )`,
// //           backgroundSize: '20px 20px',
// //         }}
// //       />

// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background:
// //             'radial-gradient(ellipse 70% 80% at center, transparent 30%, var(--sb-bg, transparent) 90%)',
// //         }}
// //       />
// //     </>
// //   )
// // }

// // /* ================================================================
// //    GRID
// // ================================================================ */

// // function GridPattern({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   const opacity = Math.max(
// //     0,
// //     Math.min(0.08 * intensity, 0.18)
// //   )

// //   return (
// //     <>
// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(
// //               rgba(${t.main}, ${opacity}) 1px,
// //               transparent 1px
// //             ),
// //             linear-gradient(
// //               90deg,
// //               rgba(${t.main}, ${opacity}) 1px,
// //               transparent 1px
// //             )
// //           `,
// //           backgroundSize: '48px 48px',
// //         }}
// //       />

// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background:
// //             'radial-gradient(ellipse 60% 70% at center, transparent 0%, var(--sb-bg, transparent) 85%)',
// //         }}
// //       />
// //     </>
// //   )
// // }

// // /* ================================================================
// //    MESH
// // ================================================================ */

// // function MeshGradient({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   return (
// //     <div
// //       className="absolute inset-0 z-0"
// //       style={{
// //         background: `
// //           radial-gradient(
// //             circle at 15% 20%,
// //             rgba(${t.main}, ${0.16 * intensity}) 0%,
// //             transparent 35%
// //           ),
// //           radial-gradient(
// //             circle at 85% 30%,
// //             rgba(${t.main}, ${0.10 * intensity}) 0%,
// //             transparent 30%
// //           ),
// //           radial-gradient(
// //             circle at 50% 90%,
// //             rgba(${t.main}, ${0.12 * intensity}) 0%,
// //             transparent 40%
// //           )
// //         `,
// //       }}
// //     />
// //   )
// // }

// // /* ================================================================
// //    GLOW ORB
// // ================================================================ */

// // function GlowOrb({ tone, corner, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   const corners = {
// //     'top-right': 'top-[-10%] right-[-5%]',
// //     'top-left': 'top-[-10%] left-[-5%]',
// //     'bottom-right': 'bottom-[-10%] right-[-5%]',
// //     'bottom-left': 'bottom-[-10%] left-[-5%]',
// //   }

// //   const pos = corners[corner] || corners['top-right']

// //   return (
// //     <>
// //       <div
// //         className={`absolute z-0 ${pos} h-[420px] w-[420px] rounded-full blur-3xl`}
// //         style={{
// //           background: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${0.22 * intensity}) 0%,
// //             transparent 70%
// //           )`,
// //         }}
// //       />

// //       <div
// //         className={`absolute z-0 ${pos} h-[260px] w-[260px] rounded-full blur-2xl`}
// //         style={{
// //           background: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${0.14 * intensity}) 0%,
// //             transparent 70%
// //           )`,
// //         }}
// //       />
// //     </>
// //   )
// // }

// // /* ================================================================
// //    WAVES
// // ================================================================ */

// // function Waves({ tone, position, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   const fillColor = `rgba(
// //     ${t.main},
// //     ${0.08 * intensity}
// //   )`

// //   return (
// //     <>
// //       {position === 'top' && (
// //         <svg
// //           className="absolute left-0 top-0 z-0 h-32 w-full"
// //           viewBox="0 0 1200 120"
// //           preserveAspectRatio="none"
// //           fill="none"
// //         >
// //           <path
// //             d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,0 L0,0 Z"
// //             fill={fillColor}
// //           />

// //           <path
// //             d="M0,80 C200,120 500,40 800,80 C1000,110 1100,60 1200,80 L1200,0 L0,0 Z"
// //             fill={fillColor}
// //             opacity="0.5"
// //           />
// //         </svg>
// //       )}

// //       {position === 'bottom' && (
// //         <svg
// //           className="absolute bottom-0 left-0 z-0 h-32 w-full"
// //           viewBox="0 0 1200 120"
// //           preserveAspectRatio="none"
// //           fill="none"
// //         >
// //           <path
// //             d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z"
// //             fill={fillColor}
// //           />

// //           <path
// //             d="M0,80 C200,40 500,120 800,80 C1000,50 1100,100 1200,80 L1200,120 L0,120 Z"
// //             fill={fillColor}
// //             opacity="0.5"
// //           />
// //         </svg>
// //       )}
// //     </>
// //   )
// // }

// // /* ================================================================
// //    BLOBS
// // ================================================================ */

// // function Blobs({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   return (
// //     <>
// //       <div
// //         className="
// //           absolute left-[5%] top-[8%]
// //           z-0
// //           h-72 w-72
// //           rounded-full
// //           opacity-40
// //           blur-3xl
// //           animate-float-slow
// //         "
// //         style={{
// //           background: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${0.3 * intensity}) 0%,
// //             transparent 70%
// //           )`,
// //         }}
// //       />

// //       <div
// //         className="
// //           absolute bottom-[10%] right-[8%]
// //           z-0
// //           h-96 w-96
// //           rounded-full
// //           opacity-30
// //           blur-3xl
// //           animate-float-medium
// //         "
// //         style={{
// //           background: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${0.2 * intensity}) 0%,
// //             transparent 70%
// //           )`,
// //         }}
// //       />
// //     </>
// //   )
// // }

// // /* ================================================================
// //    RINGS
// // ================================================================ */

// // function Rings({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   return (
// //     <>
// //       <div
// //         className="
// //           absolute -right-20 -top-20
// //           z-0
// //           h-80 w-80
// //           rounded-full
// //           border-[20px]
// //         "
// //         style={{
// //           borderColor: `rgba(${t.main}, ${0.12 * intensity})`,
// //         }}
// //       />

// //       <div
// //         className="
// //           absolute -bottom-16 -left-16
// //           z-0
// //           h-64 w-64
// //           rounded-full
// //           border-[14px]
// //         "
// //         style={{
// //           borderColor: `rgba(${t.main}, ${0.10 * intensity})`,
// //         }}
// //       />

// //       <div
// //         className="
// //           absolute right-[15%] top-[30%]
// //           z-0
// //           h-24 w-24
// //           rounded-full
// //         "
// //         style={{
// //           background: `rgba(${t.main}, ${0.08 * intensity})`,
// //         }}
// //       />
// //     </>
// //   )
// // }

// // /* ================================================================
// //    AURORA
// // ================================================================ */

// // function Aurora({ tone, intensity }) {
// //   const t = TONES[tone] || TONES.brand

// //   return (
// //     <>
// //       <div
// //         className="absolute -inset-20 z-0 opacity-60"
// //         style={{
// //           background: `
// //             radial-gradient(
// //               circle at 20% 30%,
// //               rgba(${t.main}, ${0.18 * intensity}) 0%,
// //               transparent 40%
// //             ),
// //             radial-gradient(
// //               circle at 80% 20%,
// //               rgba(${t.main}, ${0.14 * intensity}) 0%,
// //               transparent 40%
// //             ),
// //             radial-gradient(
// //               circle at 50% 80%,
// //               rgba(${t.main}, ${0.12 * intensity}) 0%,
// //               transparent 40%
// //             )
// //           `,
// //           animation: 'auroraShift 20s ease-in-out infinite',
// //         }}
// //       />

// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           backgroundImage: `radial-gradient(
// //             circle,
// //             rgba(${t.main}, ${0.10 * intensity}) 1px,
// //             transparent 1px
// //           )`,
// //           backgroundSize: '28px 28px',
// //         }}
// //       />
// //     </>
// //   )
// // }

// // export default SectionBackground
// import React from 'react'
// import { cn } from '../../utils/cn.js'

// /**
//  * SectionBackground — premium dynamic section backgrounds
//  * Dark-mode safe: all fades use CSS variables with safe fallbacks.
//  * z-0 ensures it stays behind content (which uses z-10+).
//  *
//  * Variants: dots | grid | mesh | glow | waves | blobs | rings | aurora
//  * Tones:    brand | teal | accent | success | warning | ink
//  */
// export function SectionBackground({
//   variant = 'dots',
//   tone = 'brand',
//   className,
//   position = 'top',
//   corner = 'top-right',
//   intensity = 1,
// }) {
//   return (
//     <div
//       className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}
//       aria-hidden="true"
//     >
//       {variant === 'dots'   && <DotsPattern   tone={tone} intensity={intensity} />}
//       {variant === 'grid'   && <GridPattern   tone={tone} intensity={intensity} />}
//       {variant === 'mesh'   && <MeshGradient  tone={tone} intensity={intensity} />}
//       {variant === 'glow'   && <GlowOrb       tone={tone} corner={corner} intensity={intensity} />}
//       {variant === 'waves'  && <Waves         tone={tone} position={position} intensity={intensity} />}
//       {variant === 'blobs'  && <Blobs         tone={tone} intensity={intensity} />}
//       {variant === 'rings'  && <Rings         tone={tone} intensity={intensity} />}
//       {variant === 'aurora' && <Aurora        tone={tone} intensity={intensity} />}
//     </div>
//   )
// }

// const TONES = {
//   brand:   { main: '14, 165, 233',  soft: '186, 230, 253',  hex: '#0ea5e9' },
//   teal:    { main: '20, 184, 166',  soft: '153, 246, 228',  hex: '#14b8a6' },
//   accent:  { main: '249, 115, 22',  soft: '254, 215, 170',  hex: '#f97316' },
//   success: { main: '34, 197, 94',   soft: '187, 247, 208',  hex: '#22c55e' },
//   warning: { main: '245, 158, 11',  soft: '254, 240, 138',  hex: '#f59e0b' },
//   ink:     { main: '100, 116, 139', soft: '203, 213, 225',  hex: '#64748b' },
// }

// /* ─── DOTS ─────────────────────────────────────────────────────── */
// function DotsPattern({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   const opacity = Math.max(0, Math.min(0.18 * intensity, 0.35))
//   return (
//     <>
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `radial-gradient(circle, rgba(${t.main}, ${opacity}) 1.5px, transparent 1.5px)`,
//           backgroundSize: '20px 20px',
//         }}
//       />
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: 'radial-gradient(ellipse 70% 80% at center, transparent 30%, var(--sb-bg, transparent) 90%)',
//         }}
//       />
//     </>
//   )
// }

// /* ─── GRID ─────────────────────────────────────────────────────── */
// function GridPattern({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   const opacity = Math.max(0, Math.min(0.08 * intensity, 0.18))
//   return (
//     <>
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(${t.main}, ${opacity}) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(${t.main}, ${opacity}) 1px, transparent 1px)
//           `,
//           backgroundSize: '48px 48px',
//         }}
//       />
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: 'radial-gradient(ellipse 60% 70% at center, transparent 0%, var(--sb-bg, transparent) 85%)',
//         }}
//       />
//     </>
//   )
// }

// /* ─── MESH ─────────────────────────────────────────────────────── */
// function MeshGradient({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   return (
//     <div
//       className="absolute inset-0 z-0"
//       style={{
//         background: `
//           radial-gradient(circle at 15% 20%, rgba(${t.main}, ${0.16 * intensity}) 0%, transparent 35%),
//           radial-gradient(circle at 85% 30%, rgba(${t.main}, ${0.10 * intensity}) 0%, transparent 30%),
//           radial-gradient(circle at 50% 90%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)
//         `,
//       }}
//     />
//   )
// }

// /* ─── GLOW ORB ─────────────────────────────────────────────────── */
// function GlowOrb({ tone, corner, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   const corners = {
//     'top-right':   'top-[-10%] right-[-5%]',
//     'top-left':    'top-[-10%] left-[-5%]',
//     'bottom-right':'bottom-[-10%] right-[-5%]',
//     'bottom-left': 'bottom-[-10%] left-[-5%]',
//   }
//   const pos = corners[corner] || corners['top-right']
//   return (
//     <>
//       <div
//         className={`absolute z-0 ${pos} h-[420px] w-[420px] rounded-full blur-3xl`}
//         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.22 * intensity}) 0%, transparent 70%)` }}
//       />
//       <div
//         className={`absolute z-0 ${pos} h-[260px] w-[260px] rounded-full blur-2xl`}
//         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.14 * intensity}) 0%, transparent 70%)` }}
//       />
//     </>
//   )
// }

// /* ─── WAVES ────────────────────────────────────────────────────── */
// function Waves({ tone, position, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   const fillColor = `rgba(${t.main}, ${0.08 * intensity})`
//   return (
//     <>
//       {position === 'top' && (
//         <svg className="absolute left-0 top-0 z-0 h-32 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
//           <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,0 L0,0 Z" fill={fillColor} />
//           <path d="M0,80 C200,120 500,40 800,80 C1000,110 1100,60 1200,80 L1200,0 L0,0 Z" fill={fillColor} opacity="0.5" />
//         </svg>
//       )}
//       {position === 'bottom' && (
//         <svg className="absolute bottom-0 left-0 z-0 h-32 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
//           <path d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z" fill={fillColor} />
//           <path d="M0,80 C200,40 500,120 800,80 C1000,50 1100,100 1200,80 L1200,120 L0,120 Z" fill={fillColor} opacity="0.5" />
//         </svg>
//       )}
//     </>
//   )
// }

// /* ─── BLOBS ────────────────────────────────────────────────────── */
// function Blobs({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   return (
//     <>
//       <div
//         className="absolute left-[5%] top-[8%] z-0 h-72 w-72 rounded-full opacity-40 blur-3xl animate-float-slow"
//         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.3 * intensity}) 0%, transparent 70%)` }}
//       />
//       <div
//         className="absolute bottom-[10%] right-[8%] z-0 h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-medium"
//         style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.2 * intensity}) 0%, transparent 70%)` }}
//       />
//     </>
//   )
// }

// /* ─── RINGS ────────────────────────────────────────────────────── */
// function Rings({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   return (
//     <>
//       <div
//         className="absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full border-[20px]"
//         style={{ borderColor: `rgba(${t.main}, ${0.12 * intensity})` }}
//       />
//       <div
//         className="absolute -bottom-16 -left-16 z-0 h-64 w-64 rounded-full border-[14px]"
//         style={{ borderColor: `rgba(${t.main}, ${0.10 * intensity})` }}
//       />
//       <div
//         className="absolute right-[15%] top-[30%] z-0 h-24 w-24 rounded-full"
//         style={{ background: `rgba(${t.main}, ${0.08 * intensity})` }}
//       />
//     </>
//   )
// }

// /* ─── AURORA ───────────────────────────────────────────────────── */
// function Aurora({ tone, intensity }) {
//   const t = TONES[tone] || TONES.brand
//   return (
//     <>
//       <div
//         className="absolute -inset-20 z-0 opacity-60"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 30%, rgba(${t.main}, ${0.18 * intensity}) 0%, transparent 40%),
//             radial-gradient(circle at 80% 20%, rgba(${t.main}, ${0.14 * intensity}) 0%, transparent 40%),
//             radial-gradient(circle at 50% 80%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)
//           `,
//           animation: 'auroraShift 20s ease-in-out infinite',
//         }}
//       />
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `radial-gradient(circle, rgba(${t.main}, ${0.10 * intensity}) 1px, transparent 1px)`,
//           backgroundSize: '28px 28px',
//         }}
//       />
//     </>
//   )
// }

// export default SectionBackground
import React from 'react'
import { cn } from '../../utils/cn.js'

export function SectionBackground({ variant = 'dots', tone = 'brand', className, position = 'top', corner = 'top-right', intensity = 1 }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)} aria-hidden="true">
      {variant === 'dots'   && <DotsPattern   tone={tone} intensity={intensity} />}
      {variant === 'grid'   && <GridPattern   tone={tone} intensity={intensity} />}
      {variant === 'mesh'   && <MeshGradient  tone={tone} intensity={intensity} />}
      {variant === 'glow'   && <GlowOrb       tone={tone} corner={corner} intensity={intensity} />}
      {variant === 'waves'  && <Waves         tone={tone} position={position} intensity={intensity} />}
      {variant === 'blobs'  && <Blobs         tone={tone} intensity={intensity} />}
      {variant === 'rings'  && <Rings         tone={tone} intensity={intensity} />}
      {variant === 'aurora' && <Aurora        tone={tone} intensity={intensity} />}
    </div>
  )
}

const TONES = {
  brand:   { main: '14, 165, 233' },
  teal:    { main: '20, 184, 166' },
  accent:  { main: '249, 115, 22' },
  success: { main: '34, 197, 94' },
  warning: { main: '245, 158, 11' },
  ink:     { main: '100, 116, 139' },
}

function DotsPattern({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<div className="absolute inset-0 z-0" style={{ backgroundImage: `radial-gradient(circle, rgba(${t.main}, ${0.18 * intensity}) 1.5px, transparent 1.5px)`, backgroundSize: '20px 20px' }} />)
}
function GridPattern({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<div className="absolute inset-0 z-0" style={{ backgroundImage: `linear-gradient(rgba(${t.main}, ${0.08 * intensity}) 1px, transparent 1px), linear-gradient(90deg, rgba(${t.main}, ${0.08 * intensity}) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />)
}
function MeshGradient({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<div className="absolute inset-0 z-0" style={{ background: `radial-gradient(circle at 15% 20%, rgba(${t.main}, ${0.16 * intensity}) 0%, transparent 35%), radial-gradient(circle at 85% 30%, rgba(${t.main}, ${0.10 * intensity}) 0%, transparent 30%), radial-gradient(circle at 50% 90%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)` }} />)
}
function GlowOrb({ tone, corner, intensity }) {
  const t = TONES[tone] || TONES.brand
  const corners = { 'top-right': 'top-[-10%] right-[-5%]', 'top-left': 'top-[-10%] left-[-5%]', 'bottom-right': 'bottom-[-10%] right-[-5%]', 'bottom-left': 'bottom-[-10%] left-[-5%]' }
  const pos = corners[corner] || corners['top-right']
  return (<div className={`absolute z-0 ${pos} h-[420px] w-[420px] rounded-full blur-3xl`} style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.22 * intensity}) 0%, transparent 70%)` }} />)
}
function Waves({ tone, position, intensity }) {
  const t = TONES[tone] || TONES.brand
  const fillColor = `rgba(${t.main}, ${0.08 * intensity})`
  return position === 'top' ? (<svg className="absolute left-0 top-0 z-0 h-32 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none"><path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,0 L0,0 Z" fill={fillColor} /></svg>) : (<svg className="absolute bottom-0 left-0 z-0 h-32 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none"><path d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z" fill={fillColor} /></svg>)
}
function Blobs({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<><div className="absolute left-[5%] top-[8%] z-0 h-72 w-72 rounded-full opacity-40 blur-3xl animate-float-slow" style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.3 * intensity}) 0%, transparent 70%)` }} /><div className="absolute bottom-[10%] right-[8%] z-0 h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-medium" style={{ background: `radial-gradient(circle, rgba(${t.main}, ${0.2 * intensity}) 0%, transparent 70%)` }} /></>)
}
function Rings({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<><div className="absolute -right-20 -top-20 z-0 h-80 w-80 rounded-full border-[20px]" style={{ borderColor: `rgba(${t.main}, ${0.12 * intensity})` }} /><div className="absolute -bottom-16 -left-16 z-0 h-64 w-64 rounded-full border-[14px]" style={{ borderColor: `rgba(${t.main}, ${0.10 * intensity})` }} /></>)
}
function Aurora({ tone, intensity }) {
  const t = TONES[tone] || TONES.brand
  return (<div className="absolute -inset-20 z-0 opacity-60" style={{ background: `radial-gradient(circle at 20% 30%, rgba(${t.main}, ${0.18 * intensity}) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(${t.main}, ${0.14 * intensity}) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(${t.main}, ${0.12 * intensity}) 0%, transparent 40%)`, animation: 'auroraShift 20s ease-in-out infinite' }} />)
}

export default SectionBackground