// import React, { useEffect, useState } from 'react'

// const REGION_CARDS = [
//   {
//     code: 'IN',
//     name: 'INDIA',
//     image: '/images/regions/india.jpg',
//     gradient: 'linear-gradient(135deg, #f97316, #dc2626)',
//   },
//   {
//     code: 'AE',
//     name: 'UAE',
//     image: '/images/regions/uae.jpg',
//     gradient: 'linear-gradient(135deg, #1e3a8a, #b8860b)',
//   },
//   {
//     code: 'GLOBAL',
//     name: 'USA / UK',
//     image: '/images/regions/usa.jpg',
//     gradient: 'linear-gradient(135deg, #2563eb, #1e3a8a)',
//   },
// ]

// export default function OriginModal({ open, onClose, onSelect }) {
//   const [entered, setEntered] = useState(false)
//   const [imageErrors, setImageErrors] = useState({})
//   const [globalChoiceOpen, setGlobalChoiceOpen] = useState(false)

//   useEffect(() => {
//     if (open) {
//       const timer = setTimeout(() => {
//         setEntered(true)
//       }, 20)

//       return () => clearTimeout(timer)
//     }

//     setEntered(false)
//     setGlobalChoiceOpen(false)
//   }, [open])

//   if (!open) return null

//   const handleImageError = (code) => {
//     setImageErrors((previous) => ({
//       ...previous,
//       [code]: true,
//     }))
//   }

//   const handleCardSelect = (code) => {
//     if (code === 'GLOBAL') {
//       setGlobalChoiceOpen((previous) => !previous)
//       return
//     }

//     onSelect(code)
//   }

//   const handleGlobalSelect = (code) => {
//     setGlobalChoiceOpen(false)
//     onSelect(code)
//   }

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
//       role="dialog"
//       aria-modal="true"
//       aria-label="Select Your Origin"
//     >
//       {/* Backdrop */}
//       <button
//         type="button"
//         aria-label="Close origin selection"
//         onClick={onClose}
//         className="absolute inset-0 cursor-default bg-slate-950/45 transition-opacity duration-300"
//         style={{
//           opacity: entered ? 1 : 0,
//         }}
//       />

//       {/* Modal */}
//       <div
//         className={`
//           relative
//           w-full
//           max-w-[940px]
//           overflow-hidden
//           rounded-[26px]
//           bg-white
//           shadow-[0_30px_90px_rgba(15,23,42,0.28)]
//           transition-all
//           duration-300
//           ease-out
//           ${
//             entered
//               ? 'translate-y-0 scale-100 opacity-100'
//               : 'translate-y-3 scale-[0.98] opacity-0'
//           }
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-start justify-between gap-5 px-5 pb-4 pt-6 sm:px-7 sm:pb-5 sm:pt-7">
//           <div>
//             <div className="mb-2 flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
//                 Srijee Tutor Global
//               </span>
//             </div>

//             <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-[30px]">
//               Select Your Origin
//             </h2>

//             <p className="mt-1.5 text-sm text-slate-500 sm:text-[15px]">
//               Choose your preferred learning experience.
//             </p>
//           </div>

//           {/* Close */}
//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close origin selection"
//             className="
//               flex
//               h-9
//               w-9
//               flex-none
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-slate-200
//               bg-slate-50
//               text-slate-500
//               transition-all
//               duration-200
//               hover:border-slate-300
//               hover:bg-slate-100
//               hover:text-slate-900
//               focus-visible:outline-none
//               focus-visible:ring-2
//               focus-visible:ring-blue-600
//               focus-visible:ring-offset-2
//             "
//           >
//             <svg
//               width="17"
//               height="17"
//               viewBox="0 0 18 18"
//               fill="none"
//               aria-hidden="true"
//             >
//               <path
//                 d="M4 4l10 10M14 4L4 14"
//                 stroke="currentColor"
//                 strokeWidth="1.7"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Cards */}
//         <div className="px-4 pb-5 sm:px-7 sm:pb-7">
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {REGION_CARDS.map((region, index) => (
//               <CountryCard
//                 key={region.code}
//                 region={region}
//                 imageFailed={imageErrors[region.code]}
//                 onImageError={() => handleImageError(region.code)}
//                 onSelect={() => handleCardSelect(region.code)}
//                 delay={index * 70}
//               />
//             ))}
//           </div>
//         </div>

//         {/* USA / UK selection */}
//         {globalChoiceOpen && (
//           <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 sm:px-7">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   Choose your destination
//                 </p>

//                 <p className="mt-0.5 text-xs text-slate-500">
//                   Select the experience you want to explore.
//                 </p>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={() => handleGlobalSelect('US')}
//                   className="
//                     rounded-xl
//                     border
//                     border-slate-200
//                     bg-white
//                     px-4
//                     py-2.5
//                     text-sm
//                     font-semibold
//                     text-slate-900
//                     shadow-sm
//                     transition
//                     hover:-translate-y-0.5
//                     hover:border-blue-300
//                     hover:shadow-md
//                   "
//                 >
//                   USA
//                   <span className="ml-1.5">→</span>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => handleGlobalSelect('GB')}
//                   className="
//                     rounded-xl
//                     border
//                     border-slate-200
//                     bg-white
//                     px-4
//                     py-2.5
//                     text-sm
//                     font-semibold
//                     text-slate-900
//                     shadow-sm
//                     transition
//                     hover:-translate-y-0.5
//                     hover:border-blue-300
//                     hover:shadow-md
//                   "
//                 >
//                   UK
//                   <span className="ml-1.5">→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="border-t border-slate-100 bg-slate-50/80 px-5 py-3 sm:px-7">
//           <p className="text-center text-[11px] leading-5 text-slate-400 sm:text-xs">
//             You can change your region anytime using the{' '}
//             <span className="font-semibold text-slate-600">
//               Region
//             </span>{' '}
//             button in the header.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ------------------------------------------------------------------
//    COUNTRY CARD
// ------------------------------------------------------------------- */

// function CountryCard({
//   region,
//   imageFailed,
//   onImageError,
//   onSelect,
//   delay,
// }) {
//   const isGlobal = region.code === 'GLOBAL'

//   return (
//     <button
//       type="button"
//       onClick={onSelect}
//       style={{
//         animationDelay: `${delay}ms`,
//       }}
//       aria-label={`Explore ${region.name}`}
//       className="
//         group
//         relative
//         h-[235px]
//         overflow-hidden
//         rounded-[20px]
//         border
//         border-slate-200
//         bg-slate-100
//         text-left
//         shadow-[0_4px_18px_rgba(15,23,42,0.07)]
//         transition-all
//         duration-300
//         ease-out
//         hover:-translate-y-1
//         hover:border-slate-300
//         hover:shadow-[0_18px_38px_rgba(15,23,42,0.16)]
//         focus-visible:outline-none
//         focus-visible:ring-2
//         focus-visible:ring-blue-600
//         focus-visible:ring-offset-2
//         animate-fade-up
//       "
//     >
//       {/* Image */}
//       {!imageFailed ? (
//         <img
//           src={region.image}
//           alt=""
//           aria-hidden="true"
//           onError={onImageError}
//           loading="eager"
//           className="
//             absolute
//             inset-0
//             h-full
//             w-full
//             object-cover
//             transition-transform
//             duration-700
//             ease-out
//             group-hover:scale-[1.07]
//           "
//         />
//       ) : (
//         <div
//           className="
//             absolute
//             inset-0
//             transition-transform
//             duration-700
//             group-hover:scale-[1.07]
//           "
//           style={{
//             background:
//               region.gradient ||
//               'linear-gradient(135deg, #0f172a, #334155)',
//           }}
//           aria-hidden="true"
//         />
//       )}

//       {/* Very light image enhancement */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-black/5
//           transition-all
//           duration-300
//           group-hover:bg-black/0
//         "
//         aria-hidden="true"
//       />

//       {/* Bottom gradient */}
//       <div
//         className="
//           absolute
//           inset-x-0
//           bottom-0
//           h-[65%]
//           bg-gradient-to-t
//           from-black/80
//           via-black/35
//           to-transparent
//         "
//         aria-hidden="true"
//       />

//       {/* Content */}
//       <div className="absolute inset-x-0 bottom-0 p-5">
//         <h3
//           className="
//             font-display
//             text-[22px]
//             font-bold
//             tracking-tight
//             text-white
//             drop-shadow-md
//           "
//         >
//           {region.name}
//         </h3>

//         <div
//           className="
//             mt-3
//             inline-flex
//             items-center
//             gap-2
//             rounded-full
//             bg-white
//             px-4
//             py-2
//             text-xs
//             font-bold
//             text-slate-900
//             shadow-lg
//             transition-all
//             duration-200
//             group-hover:bg-slate-950
//             group-hover:text-white
//           "
//         >
//           Explore
//           <svg
//             width="12"
//             height="12"
//             viewBox="0 0 12 12"
//             fill="none"
//             className="transition-transform duration-200 group-hover:translate-x-1"
//             aria-hidden="true"
//           >
//             <path
//               d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"
//               stroke="currentColor"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         {/* Small hint only for USA / UK */}
//         {isGlobal && (
//           <span className="ml-2 text-[10px] font-medium text-white/80">
//             Choose USA or UK
//           </span>
//         )}
//       </div>
//     </button>
//   )
// }


// DIFF UI


import React, { useEffect, useState } from 'react'

/* ------------------------------------------------------------------
   REGION DATA
------------------------------------------------------------------- */

const REGION_CARDS = [
  {
    code: 'IN',
    name: 'India',
    image: '/images/regions/india.jpg',
    accent: 'orange',
  },
  {
    code: 'AE',
    name: 'UAE',
    image: '/images/regions/uae.jpg',
    accent: 'cyan',
  },
  {
    code: 'GLOBAL',
    name: 'USA / UK',
    image: '/images/regions/usa.jpg',
    accent: 'purple',
  },
]

/* ------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------- */

export default function OriginModal({ open, onClose, onSelect }) {
  const [entered, setEntered] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const [globalChoiceOpen, setGlobalChoiceOpen] = useState(false)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setEntered(true)
      }, 40)

      return () => clearTimeout(timer)
    }

    setEntered(false)
    setGlobalChoiceOpen(false)
  }, [open])

  if (!open) return null

  const handleImageError = (code) => {
    setImageErrors((previous) => ({
      ...previous,
      [code]: true,
    }))
  }

  const handleRegionClick = (code) => {
    if (code === 'GLOBAL') {
      setGlobalChoiceOpen((previous) => !previous)
      return
    }

    onSelect(code)
  }

  const selectGlobalRegion = (code) => {
    setGlobalChoiceOpen(false)
    onSelect(code)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Select Your Origin"
    >
      {/* ============================================================
          BACKDROP
      ============================================================ */}

      <button
        type="button"
        aria-label="Close origin selection"
        onClick={onClose}
        className="
          absolute
          inset-0
          cursor-default
          bg-slate-950/60
          backdrop-blur-[7px]
          transition-opacity
          duration-500
        "
        style={{
          opacity: entered ? 1 : 0,
        }}
      />

      {/* ============================================================
          MAIN MODAL
      ============================================================ */}

      <div
        className={`
          relative
          z-10
          w-full
          max-w-[1380px]
          overflow-hidden
          rounded-[30px]
          border
          border-white/70
          bg-white
          shadow-[0_40px_120px_rgba(15,23,42,0.38)]
          transition-all
          duration-500
          ease-out

          ${
            entered
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-8 scale-[0.96] opacity-0'
          }
        `}
      >
        {/* ==========================================================
            DECORATIVE BACKGROUND
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute
              -left-24
              -top-24
              h-[360px]
              w-[360px]
              rounded-full
              bg-blue-400/20
              blur-[90px]
              animate-pulse
            "
          />

          <div
            className="
              absolute
              -bottom-32
              right-[25%]
              h-[330px]
              w-[330px]
              rounded-full
              bg-cyan-300/20
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              right-[-100px]
              top-[-100px]
              h-[300px]
              w-[300px]
              rounded-full
              bg-violet-400/15
              blur-[90px]
            "
          />
        </div>

        {/* ==========================================================
            CLOSE BUTTON
        ========================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close origin selection"
          className="
            absolute
            right-5
            top-5
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white/90
            text-slate-500
            shadow-sm
            backdrop-blur
            transition-all
            duration-200
            hover:rotate-90
            hover:border-blue-200
            hover:bg-white
            hover:text-slate-900
            hover:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
          "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ==========================================================
            CONTENT GRID
        ========================================================== */}

        <div className="relative grid lg:grid-cols-[0.85fr_1.45fr]">

          {/* ========================================================
              LEFT HERO
          ======================================================== */}

          <div
            className="
              relative
              min-h-[390px]
              overflow-hidden
              bg-slate-950
              lg:min-h-[680px]
            "
          >
            {/* Hero image */}

            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                transition-transform
                duration-[2000ms]
                ease-out
              "
              style={{
                backgroundImage:
                  "url('/images/regions/origin-global.jpg')",
              }}
            />

            {/* Dynamic gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#063b73]/55
                via-[#0879bd]/25
                to-[#0b1027]/55
              "
            />

            {/* Animated light */}

            <div
              className="
                absolute
                -right-24
                top-20
                h-[300px]
                w-[300px]
                rounded-full
                bg-cyan-300/20
                blur-[80px]
                animate-pulse
              "
            />

            <div
              className="
                absolute
                -bottom-32
                -left-20
                h-[350px]
                w-[350px]
                rounded-full
                bg-blue-400/25
                blur-[90px]
              "
            />

            {/* Decorative grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.08]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,.5) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,.5) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: '45px 45px',
              }}
            />

            {/* Decorative orbit */}

            <div
              className="
                absolute
                -right-20
                top-[22%]
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                absolute
                -right-8
                top-[30%]
                h-[180px]
                w-[180px]
                rounded-full
                border
                border-cyan-200/10
              "
            />

            {/* Hero content */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-[390px]
                flex-col
                justify-between
                p-7
                sm:p-9
                lg:min-h-[680px]
                lg:p-12
              "
            >
              {/* Logo */}

              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      shadow-lg
                    "
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5L12 4l9 4.5L12 13 3 8.5Z"
                        fill="#1677FF"
                      />

                      <path
                        d="M6 10.5V16c0 1.8 2.7 3.5 6 3.5s6-1.7 6-3.5v-5.5"
                        stroke="#1677FF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M21 9v5"
                        stroke="#1677FF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="text-[19px] font-bold tracking-tight text-white">
                      Srijee Tutor
                    </div>

                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Global Education
                    </div>
                  </div>
                </div>
              </div>

              {/* Main message */}

              <div className="relative max-w-[510px]">
                <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200">
                  One platform • multiple education systems
                </div>

                <h1 className="text-[40px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px]">
                  Learning
                  <br />

                  has{' '}
                  <span className="relative inline-block text-cyan-300">
                    no borders.
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[3px]
                        w-[105%]
                        rotate-[-2deg]
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-300
                        to-yellow-300
                      "
                    />
                  </span>
                </h1>

                <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/75 sm:text-[15px]">
                  One platform. Multiple education systems.
                  A brighter future for every learner.
                </p>

                {/* Floating journey line */}

                <div className="mt-7 flex items-center gap-3 text-xs font-medium text-white/65">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                    →
                  </span>

                  <span>
                    Your global learning journey starts here
                  </span>
                </div>
              </div>

              {/* Bottom information */}

              <div className="hidden items-center gap-3 sm:flex">
                <div className="h-px w-10 bg-white/30" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Learn • Grow • Succeed
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT SIDE
          ======================================================== */}

          <div
  className="
    relative
    flex
    min-h-[390px]
    flex-col
    justify-between
    overflow-hidden
    bg-[#f7faff]
    p-6
    sm:p-8
    lg:min-h-[680px]
    lg:p-12
  "
>
  {/* ==========================================================
    PREMIUM RIGHT-SIDE BACKGROUND
========================================================== */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
  "
  aria-hidden="true"
>
  {/* Main blue glow */}
  <div
    className="
      absolute
      -right-32
      -top-32
      h-[420px]
      w-[420px]
      rounded-full
      bg-blue-200/35
      blur-[90px]
    "
  />

  {/* Cyan glow */}
  <div
    className="
      absolute
      left-[15%]
      top-[28%]
      h-[260px]
      w-[260px]
      rounded-full
      bg-cyan-200/25
      blur-[90px]
    "
  />

  {/* Purple glow */}
  <div
    className="
      absolute
      -bottom-32
      right-[5%]
      h-[360px]
      w-[360px]
      rounded-full
      bg-violet-200/25
      blur-[100px]
    "
  />

  {/* Soft yellow glow */}
  <div
    className="
      absolute
      bottom-[20%]
      left-[-100px]
      h-[220px]
      w-[220px]
      rounded-full
      bg-indigo-100/30
      blur-[80px]
    "
  />

  {/* Subtle dot pattern */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.32]
    "
    style={{
      backgroundImage:
        'radial-gradient(circle, rgba(37,99,235,0.16) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      maskImage:
        'linear-gradient(to bottom right, black, transparent 70%)',
      WebkitMaskImage:
        'linear-gradient(to bottom right, black, transparent 70%)',
    }}
  />

  {/* Large decorative ring */}
  <div
    className="
      absolute
      -right-28
      top-[18%]
      h-[330px]
      w-[330px]
      rounded-full
      border
      border-blue-200/35
    "
  />

  {/* Inner ring */}
  <div
    className="
      absolute
      -right-8
      top-[25%]
      h-[220px]
      w-[220px]
      rounded-full
      border
      border-cyan-200/30
    "
  />

  {/* Small floating circles */}
  <div
    className="
      absolute
      right-[27%]
      top-[13%]
      h-3
      w-3
      rounded-full
      bg-blue-400/30
    "
  />

  <div
    className="
      absolute
      left-[8%]
      bottom-[17%]
      h-2
      w-2
      rounded-full
      bg-violet-400/30
    "
  />

  <div
    className="
      absolute
      right-[12%]
      bottom-[12%]
      h-4
      w-4
      rounded-full
      bg-cyan-400/20
    "
  />
</div>
            {/* Top heading */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.28em]
                    text-blue-600
                  "
                >
                  Select Your Origin
                </span>

                <span className="h-px w-14 bg-blue-300" />
              </div>

              <h2
                className="
                  mt-5
                  max-w-[650px]
                  text-[32px]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-slate-900
                  sm:text-[40px]
                  lg:text-[44px]
                "
              >
                Choose Your
                <br className="hidden sm:block" />
                region
              </h2>
            </div>

            {/* ======================================================
                REGION CARDS
            ====================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10">
              {REGION_CARDS.map((region, index) => (
                <RegionCard
                  key={region.code}
                  region={region}
                  index={index}
                  imageFailed={imageErrors[region.code]}
                  onImageError={() =>
                    handleImageError(region.code)
                  }
                  onClick={() =>
                    handleRegionClick(region.code)
                  }
                />
              ))}
            </div>

            {/* USA / UK selector */}

            {globalChoiceOpen && (
              <div
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-blue-100
                  bg-white
                  p-4
                  shadow-[0_12px_35px_rgba(37,99,235,0.10)]
                  animate-fade-up
                "
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Choose your destination
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      Select USA or United Kingdom.
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => selectGlobalRegion('US')}
                      className="
                        rounded-xl
                        bg-slate-950
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-white
                        transition
                        hover:-translate-y-0.5
                        hover:bg-blue-600
                      "
                    >
                      USA →
                    </button>

                    <button
                      type="button"
                      onClick={() => selectGlobalRegion('GB')}
                      className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-slate-900
                        transition
                        hover:-translate-y-0.5
                        hover:border-blue-300
                      "
                    >
                      UK →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================
                BOTTOM TRUST STRIP
            ====================================================== */}

            <div className="mt-8 border-t border-slate-200 pt-5 lg:mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <TrustItem
                  icon="globe"
                  title="Multiple Education Systems"
                />

                <TrustItem
                  icon="shield"
                  title="Trusted by Learners Worldwide"
                />

                <TrustItem
                  icon="cap"
                  title="Personalized Learning Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
   REGION CARD
------------------------------------------------------------------- */

function RegionCard({
  region,
  index,
  imageFailed,
  onImageError,
  onClick,
}) {
  const accentStyles = {
    orange: {
      border: 'hover:border-orange-300',
      glow: 'bg-orange-400',
    },

    cyan: {
      border: 'hover:border-cyan-300',
      glow: 'bg-cyan-400',
    },

    purple: {
      border: 'hover:border-violet-300',
      glow: 'bg-violet-500',
    },
  }

  const accent = accentStyles[region.accent]

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Explore ${region.name}`}
      className={`
        group
        relative
        h-[290px]
        overflow-hidden
        rounded-[22px]
        border
        border-slate-200
        bg-slate-100
        text-left
        shadow-[0_10px_28px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_24px_45px_rgba(15,23,42,0.18)]
        ${accent.border}
        animate-fade-up
      `}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}

      {!imageFailed ? (
        <img
          src={region.image}
          alt=""
          aria-hidden="true"
          onError={onImageError}
          loading="eager"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[900ms]
            ease-out
            group-hover:scale-[1.10]
          "
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-slate-900"
          aria-hidden="true"
        />
      )}

      {/* Image lighting */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/0
          via-black/10
          to-black/85
        "
      />

      {/* Top light */}

      <div
        className={`
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          opacity-0
          blur-2xl
          transition-all
          duration-500
          group-hover:opacity-70
          ${accent.glow}
        `}
      />

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3
          className="
            text-[25px]
            font-extrabold
            tracking-tight
            text-white
            drop-shadow-lg
          "
        >
          {region.name}
        </h3>

        <div
          className="
            mt-4
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-white
            px-5
            py-2.5
            text-xs
            font-extrabold
            text-slate-900
            shadow-xl
            transition-all
            duration-300
            group-hover:gap-4
            group-hover:bg-slate-950
            group-hover:text-white
          "
        >
          Explore

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7h9M7.5 3.5L11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}

/* ------------------------------------------------------------------
   TRUST ITEM
------------------------------------------------------------------- */

function TrustItem({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          flex-none
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-blue-600
        "
      >
        {icon === 'globe' && (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M3 12h18M12 3c2.2 2.4 3.4 5.4 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.4-3.4-9S9.8 5.4 12 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        )}

        {icon === 'shield' && (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3l7 3v5c0 4.7-2.9 8.1-7 10-4.1-1.9-7-5.3-7-10V6l7-3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />

            <path
              d="m9 12 2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {icon === 'cap' && (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />

            <path
              d="M6 11.5v4c0 1.6 2.7 3 6 3s6-1.4 6-3v-4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M21 10v4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <span className="text-[11px] font-semibold leading-4 text-slate-600">
        {title}
      </span>
    </div>
  )
}