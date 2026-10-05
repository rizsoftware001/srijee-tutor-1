import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button.jsx'
import HeroBackground from './HeroBackground.jsx'
import { heroMarqueeItems, heroStats } from '../../data/whySrijee.js'
import { SITE, ENROLL_CTA, TUTOR_CTA } from '../../config/site.js'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'

export function Hero() {
  const { openEnrollment } = useEnrollment()

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-ink-950">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <HeroBackground />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}
      <div className="container-page relative z-10">

        <div
          className="
            grid min-h-[700px] items-center gap-8 py-4
            sm:py-4
            lg:grid-cols-[1fr_0.78fr]
            lg:gap-8
            lg:py-4
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-20 max-w-2xl animate-fade-up">

            {/* =================================================
                HEADING
            ================================================== */}
            <h1
              className="
                max-w-3xl text-balance font-display text-[3rem]
                font-extrabold leading-[0.98] tracking-[-0.045em]
                text-ink-950
                sm:text-[4rem]
                lg:text-[4.5rem]
                xl:text-[5rem]
                dark:text-white
              "
            >
              Be{' '}
              <span
                className="
                  bg-gradient-to-r from-brand-600
                  via-cyan-500 to-teal-500
                  bg-clip-text text-transparent
                "
              >
                Future Ready
              </span>{' '}
              with Expert Guidance
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-6 max-w-2xl text-base leading-7 text-ink-700
                dark:text-ink-200
                sm:text-lg sm:leading-8
              "
            >
              Kolkata&apos;s premium institute for CBSE, ICSE, ISC, IGCSE
              &amp; A-Level tuition. Online classes, home tuition,
              JEE/NEET prep, foreign languages, coding, chess &amp; more
              — for every learner, every goal.
            </p>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              <Button
                type="button"
                variant="primary"
                size="lg"
                onClick={openEnrollment}
                leftIcon={<GraduationIcon />}
              >
                {ENROLL_CTA}
              </Button>

              <Button
                as={Link}
                to="/become-a-tutor"
                variant="secondary"
                size="lg"
              >
                {TUTOR_CTA}
              </Button>

            </div>

            {/* =================================================
                CONTACT REASSURANCE
            ================================================== */}
            <div
              className="
                mt-5 flex flex-wrap items-center gap-x-3 gap-y-1
                text-sm text-ink-500 dark:text-ink-300
              "
            >
              <span>Prefer to talk?</span>

              <a
                href={`tel:${SITE.phoneHref}`}
                className="
                  font-semibold text-brand-700 transition
                  hover:text-brand-800 hover:underline
                  dark:text-brand-400
                "
              >
                {SITE.phoneDisplay}
              </a>

              {/* <span className="text-ink-300 dark:text-ink-700">
                •
              </span>

              <span>Free counselling, no spam</span> */}
            </div>

            {/* =================================================
                STATS / LEARNING HIGHLIGHTS
            ================================================== */}
            <div
              className="
                mt-9 grid grid-cols-2 overflow-hidden rounded-2xl
                border border-ink-200/70 bg-white/65
                shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                backdrop-blur-md
                sm:grid-cols-4
                dark:border-ink-800 dark:bg-ink-900/60
              "
            >
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative min-w-0 px-4 py-6
                    sm:px-2 sm:py-5
                    ${
                      index !== 0
                        ? 'border-l border-ink-200/70 dark:border-ink-800'
                        : ''
                    }
                    ${
                      index >= 2
                        ? 'border-t border-ink-200/70 sm:border-t-0 dark:border-ink-800'
                        : ''
                    }
                  `}
                >

                  {/* LABEL */}
                  <dt
                    className="
                      text-[9px] font-semibold uppercase
                      leading-[1.4] tracking-[0.08em]
                      text-ink-500 dark:text-ink-300
                      sm:text-[10px]
                    "
                  >
                    {stat.label}
                  </dt>

                  {/* VALUE */}
                  {/* VALUE */}
<dd
  className="
    mt-2
    font-display
    whitespace-nowrap
    text-[12px]
    font-extrabold
    leading-none
    tracking-[-0.035em]
    text-ink-950
    sm:text-[13px]
    lg:text-[13px]
    dark:text-white
  "
>
  {stat.type === 'text' ? (
    stat.value
  ) : (
    <>
      <Counter value={stat.value} />
      {stat.suffix}
    </>
  )}
</dd>

                </div>
              ))}
            </div>

          </div>

          {/* =====================================================
              RIGHT HERO VISUAL
          ====================================================== */}
          <div
            className="
              relative z-10
              flex w-full
              items-center justify-center
              lg:min-w-0
            "
          >
            <HeroVisual onEnroll={openEnrollment} />
          </div>

        </div>

        {/* =======================================================
            PROGRAMME MARQUEE
        ======================================================== */}
        <div className="relative z-20 -mt-2 pb-8 sm:pb-10">

          <div className="mask-fade-x overflow-hidden">

            <div className="hero-marquee-track flex w-max gap-3 whitespace-nowrap">

              {[...heroMarqueeItems, ...heroMarqueeItems].map(
                (item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="
                      inline-flex items-center gap-2 rounded-full
                      border border-ink-200/80 bg-white/75 px-2 py-1
                      text-sm font-medium text-ink-700 shadow-sm
                      backdrop-blur-md
                      dark:border-ink-700 dark:bg-ink-900/75
                      dark:text-ink-200
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {item}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


/* ===============================================================
   HERO VISUAL
   Smaller desktop banner with stable aspect ratio
================================================================ */

const HERO_IMAGES = [
  {
    src: '/images/TuitionModes.png',
    alt: 'Students learning together in a classroom',
    label: 'Hybrid Tuition Available ',
  },
  {
    src: '/images/abuDhabi.jpeg',
    alt: 'Student studying with laptop and notebooks',
    label: 'Online Tuition',
  },
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=85',
    alt: 'Happy student raising hand in class',
    label: 'Confidence Building',
  },
  {
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=85',
    alt: 'Teacher helping young student with homework',
    label: 'Personal Attention',
  },
]


function HeroVisual({ onEnroll }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="
        relative
        w-full
        max-w-[440px]
        aspect-[4/4.2]
        sm:max-w-[480px]
        sm:aspect-[4/4.1]
        lg:max-w-[500px]
        lg:aspect-[4/4]
        xl:max-w-[520px]
        xl:aspect-[4/3.9]
      "
    >

      {/* =====================================================
          MAIN IMAGE GALLERY
      ====================================================== */}
      <div
        className="
          absolute inset-0
          overflow-visible
        "
      >

        {/* Actual image container */}
        <div
          className="
            absolute inset-0
            overflow-hidden
            rounded-[1.75rem]
            bg-ink-100
            shadow-[0_30px_70px_rgba(15,23,42,0.18)]
            dark:bg-ink-800
          "
        >
        {/* <div
  className="
    absolute
    left-0
    right-0
    top-1/2
    -translate-y-1/2
    aspect-[3/2]
    overflow-hidden
    rounded-[1.75rem]
    bg-ink-100
    shadow-[0_30px_70px_rgba(15,23,42,0.18)]
    dark:bg-ink-800
  "
> */}

          {HERO_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className="
                absolute inset-0
                transition-all duration-1000 ease-in-out
              "
              style={{
                opacity: index === activeImage ? 1 : 0,
                transform:
                  index === activeImage
                    ? 'scale(1)'
                    : 'scale(1.06)',
              }}
            >

              {/* <img
                src={img.src}
                alt={img.alt}
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
                loading={index === 0 ? 'eager' : 'lazy'}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              /> */}
<img
  src={img.src}
  alt={img.alt}
  className="block h-full w-full object-cover"
  loading={index === 0 ? 'eager' : 'lazy'}
  onError={(event) => {
    console.error('Hero image failed:', event.currentTarget.src)
  }}
/>
              {/* Image overlays */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-ink-950/70
                  via-ink-950/15
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-r
                  from-brand-900/25
                  to-transparent
                "
              />

            </div>
          ))}

          {/* =================================================
              SRIJEE BADGE
          ================================================== */}
          <div className="absolute left-5 top-5 z-20">

            <div
              className="
                flex items-center gap-2
                rounded-xl
                bg-ink-950/80
                px-3 py-0.5
                backdrop-blur-md
              "
            >

              <span
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded-lg
                  bg-brand-teal-gradient
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6h16v3H4zM4 11h16v3H4zM4 16h10v3H4z"
                    fill="white"
                  />

                  <circle
                    cx="18"
                    cy="17.5"
                    r="3"
                    fill="#fbbf24"
                  />
                </svg>
              </span>

              <span className="font-display text-xs font-bold text-white">
                Srijee Tutor
              </span>

            </div>

          </div>

          {/* =================================================
              IMAGE LABEL
          ================================================== */}
          <div className="absolute bottom-5 left-5 z-20">

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-white/95
                px-3.5 py-1.5
                shadow-lg
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />

              <span className="text-xs font-bold text-ink-900 sm:text-sm">
                {HERO_IMAGES[activeImage].label}
              </span>
            </div>

          </div>

          {/* =================================================
              IMAGE DOTS
          ================================================== */}
          <div
            className="
              absolute bottom-5 right-5
              z-20 flex gap-1.5
            "
          >
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`
                  h-1.5 rounded-full
                  transition-all duration-300
                  ${
                    index === activeImage
                      ? 'w-7 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }
                `}
              />
            ))}
          </div>

        </div>

        {/* =====================================================
            FLOATING CARD 1 — EXPERT TUTORS
        ====================================================== */}
        <div
          className="
            absolute
            -left-3
            top-[12%]
            -ml-[20px]
    -mr-[40px]
            z-30
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            border-white
            bg-white/95
            px-1
            py-1
            shadow-[0_20px_50px_rgba(15,23,42,0.14)]
            backdrop-blur-xl
            sm:flex
            animate-float-slow
            dark:border-ink-700
            dark:bg-ink-900/95
          "
        >

          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-brand-50
              text-brand-600
              dark:bg-brand-900/30
              dark:text-brand-400
            "
          >
            <StarIcon />
          </div>

          <div>
            <p className="text-sm font-bold text-ink-900 dark:text-white">
              Expert Tutors
            </p>

            <p className="text-xs text-ink-500 dark:text-ink-300">
              Experienced educators
            </p>
          </div>

        </div>

        {/* =====================================================
            FLOATING CARD 2 — PERSONALISED
        ====================================================== */}
        {/* <div
          className="
            absolute
            -right-3
            top-[28%]
            z-30
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            border-white
            bg-white/95
            px-1
            py-1
            shadow-[0_20px_50px_rgba(15,23,42,0.14)]
            backdrop-blur-xl
            md:flex
            animate-float-medium
            dark:border-ink-700
            dark:bg-ink-900/95
          "
        > */}
<div
  className="
    absolute
    -right-3
    top-[28%]
    -ml-[40px]
    -mr-[60px]
    z-30
    hidden
    items-center
    gap-3
    rounded-2xl
    border
    border-white
    bg-white/95
    px-1
    py-1
    shadow-[0_20px_50px_rgba(15,23,42,0.14)]
    backdrop-blur-xl
    md:flex
    animate-float-medium
    dark:border-ink-700
    dark:bg-ink-900/95
  "
>
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-teal-50
              text-teal-600
              dark:bg-teal-900/30
              dark:text-teal-400
            "
          >
            <BookIcon />
          </div>

          <div>
            <p className="text-sm font-bold text-ink-900 dark:text-white">
              Personalised
            </p>

            <p className="text-xs text-ink-500 dark:text-ink-300">
              Learning experience
            </p>
          </div>

        </div>

        {/* =====================================================
            FLOATING CARD 3 — ONLINE CLASSES
        ====================================================== */}
        <div
          className="
            absolute
            -right-3
            top-[52%]
            z-30
            -ml-[40px]
    -mr-[60px]
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            border-white
            bg-white/95
            px-1
            py-1
            shadow-[0_20px_50px_rgba(15,23,42,0.14)]
            backdrop-blur-xl
            lg:flex
            animate-float-slow
            dark:border-ink-700
            dark:bg-ink-900/95
          "
          style={{ animationDelay: '1s' }}
        >

          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-sky-50
              text-sky-600
              dark:bg-sky-900/30
              dark:text-sky-400
            "
          >
            <LaptopIcon />
          </div>

          <div>
            <p className="text-sm font-bold text-ink-900 dark:text-white">
              Online Classes
            </p>

            <p className="text-xs text-ink-500 dark:text-ink-300">
              Learn anywhere
            </p>
          </div>

        </div>

        {/* =====================================================
            TRUSTED LEARNING CARD
        ====================================================== */}
        {/* <div
          className="
            absolute
            -left-3
            bottom-[10%]
            z-30
            hidden
            items-center
            gap-3
            rounded-2xl
            bg-ink-950
            px-3
            py-2.5
            text-white
            shadow-[0_25px_50px_rgba(15,23,42,0.25)]
            sm:flex
            animate-float-medium
          "
        >

          <div className="flex -space-x-2">
            <span className="h-7 w-7 rounded-full border-2 border-ink-950 bg-sky-400" />
            <span className="h-7 w-7 rounded-full border-2 border-ink-950 bg-cyan-400" />
            <span className="h-7 w-7 rounded-full border-2 border-ink-950 bg-orange-300" />
          </div>

          <div>
            <p className="text-xs font-bold">
              Trusted learning
            </p>

            <p className="text-[11px] text-white/60">
              Students &amp; parents
            </p>
          </div>

        </div> */}

        {/* =====================================================
            CTA CHIP
        ====================================================== */}
        <button
          type="button"
          onClick={onEnroll}
          className="
            absolute
            -right-3
            bottom-[6%]
            z-40
            hidden
            items-center
            gap-2
            rounded-full
            bg-brand-600
            px-4
            py-2.5
            text-xs
            font-bold
            text-white
            shadow-xl
            shadow-brand-600/25
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-brand-700
            lg:flex
          "
        >
          Find your learning path

          <span aria-hidden="true">
            →
          </span>
        </button>

      </div>
    </div>
  )
}


/* ===============================================================
   COUNTER
   Supports:
   - Numbers
   - Numeric strings
   - Normal text strings
================================================================ */

function Counter({ value }) {
  const numericValue =
    typeof value === 'number'
      ? value
      : typeof value === 'string' &&
          value.trim() !== '' &&
          Number.isFinite(Number(value))
        ? Number(value)
        : null

  if (numericValue === null) {
    return (
      <span className="break-words">
        {value}
      </span>
    )
  }

  return <AnimatedNumber value={numericValue} />
}


/* ===============================================================
   ANIMATED NUMBER
================================================================ */

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) {
          return
        }

        started.current = true

        const duration = 1400
        const start = performance.now()

        const animate = (now) => {
          const progress = Math.min(
            (now - start) / duration,
            1
          )

          const eased = 1 - Math.pow(1 - progress, 3)

          setDisplay(value * eased)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setDisplay(value)
          }
        }

        requestAnimationFrame(animate)
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value])

  const isDecimal = value % 1 !== 0

  return (
    <span
      ref={ref}
      className="tabular-nums"
    >
      {isDecimal
        ? display.toFixed(1)
        : Math.round(display).toLocaleString('en-IN')}
    </span>
  )
}


/* ===============================================================
   ICONS
================================================================ */

function GraduationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}


function StarIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  )
}


function BookIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  )
}


function LaptopIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="12"
        rx="2"
      />

      <path d="M2 20h20" />
    </svg>
  )
}


export default Hero