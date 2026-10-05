import React from 'react'
import { Section, Container } from '../common/SectionHeading.jsx'
import { Button } from '../ui/Button.jsx'
import { SITE } from '../../config/site.js'
import { teamMembers } from '../../data/teamMembers.js'

export function FounderSection() {
  const f = SITE.founder

  const founder = teamMembers.find(
    (member) => member.id === 'tm1'
  )

  const coFounder = teamMembers.find(
    (member) => member.id === 'tm2'
  )

  return (
    <Section className="!py-4 lg:!py-6">
      <Container>
        {/* Main parent container */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-ink-200
            bg-white
            shadow-sm
            dark:border-ink-700
            dark:bg-ink-900
          "
        >
          {/* Header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-ink-200
              bg-gradient-to-r
              from-brand-50
              via-white
              to-teal-50
              px-5
              py-1
              dark:border-ink-700
              dark:from-brand-950/40
              dark:via-ink-900
              dark:to-teal-950/30
            "
          >
            <div>
              <span className="eyebrow">Leadership</span>

              <h3
                className="
                  mt-1
                  font-display
                  text-lg
                  font-bold
                  text-ink-900
                  dark:text-white
                "
              >
                Our Founders
              </h3>
            </div>

            <span
              className="
                rounded-full
                border
                border-brand-200
                bg-brand-50
                px-3
                py-1
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-brand-700
                dark:border-brand-800
                dark:bg-brand-900/30
                dark:text-brand-300
              "
            >
              Since 2013
            </span>
          </div>

          {/* Main content */}
          <div className="grid items-stretch lg:grid-cols-12">
            {/* Left — founder profiles */}
            <div
              className="
                flex
                h-full
                flex-col
                gap-3
                border-b
                border-ink-200
                px-6
                py-4
                dark:border-ink-700
                lg:col-span-5
                lg:border-b-0
                lg:border-r
                lg:px-5
                lg:py-2
              "
            >
              <ExecutiveProfile
                person={founder}
                number="01"
                accent="brand"
              />

              <ExecutiveProfile
                person={coFounder}
                number="02"
                accent="teal"
              />
            </div>

            {/* Right — existing content */}
            <div className="lg:col-span-7">
              <div
                className="
                  px-5
                  py-5
                  lg:px-10
                  lg:py-6
                "
              >
                <span className="eyebrow">Our Founders</span>

                <h2 className="h2 mt-3 text-balance">
                  Built by educators, for every learner.
                </h2>

                <div
                  className="
                    mt-5
                    space-y-4
                    text-pretty
                    text-ink-600
                    dark:text-ink-300
                  "
                >
                  <p className="text-lg leading-relaxed">
                    {f.bio}
                  </p>

                  <p className="leading-relaxed">
                    {f.mission}
                  </p>
                </div>

                <figure
                  className="
                    mt-5
                    rounded-xl2
                    border-l-4
                    border-brand-500
                    bg-brand-50/50
                    p-5
                    dark:bg-brand-900/20
                  "
                >
                  <blockquote
                    className="
                      italic
                      leading-relaxed
                      text-ink-700
                      dark:text-ink-200
                    "
                  >
                    "{f.quote}"
                  </blockquote>

                  <figcaption
                    className="
                      mt-3
                      // text-sm
                      font-semibold
                      text-ink-900
                      dark:text-white
                    "
                  >
                    — {f.name},{' '}
                    <span
                      className="
                        text-brand-700
                        dark:text-brand-400
                      "
                    >
                      {SITE.name}
                    </span>
                  </figcaption>
                </figure>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  <Button
                    as="a"
                    href="/about"
                    variant="primary"
                    size="md"
                  >
                    Read Our Story →
                  </Button>

                  <Button
                    as="a"
                    href={`tel:${SITE.phoneHref}`}
                    variant="secondary"
                    size="md"
                  >
                    {SITE.phoneDisplay}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/* =============================================================
   EXECUTIVE PROFILE
   Full-height compact leadership card
============================================================= */

function ExecutiveProfile({
  person,
  number,
  accent = 'brand',
}) {
  if (!person) return null

  const isTeal = accent === 'teal'

  const styles = isTeal
    ? {
        border:
          'border-teal-200 dark:border-teal-800',
        accent:
          'from-teal-500 to-cyan-500',
        badge:
          'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
        number:
          'bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
      }
    : {
        border:
          'border-brand-200 dark:border-brand-800',
        accent:
          'from-brand-500 to-blue-500',
        badge:
          'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300',
        number:
          'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
      }

  return (
    <article
      className={`
        group
        relative
        flex
        min-h-0
        flex-1
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
        dark:bg-ink-800
        ${styles.border}
      `}
    >
      {/* Top accent */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-1
          bg-gradient-to-r
          ${styles.accent}
        `}
      />

      <div className="flex h-full items-center gap-4 p-4">
        {/* Image */}
        <div
          className="
            relative
            h-190px]
            w-[142px]
            shrink-0
            overflow-hidden
            rounded-lg
            bg-ink-100
            dark:bg-ink-700
          "
        >
          <img
            src={person.image}
            alt={person.name}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
            "
            loading="lazy"
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-ink-950/40
              to-transparent
            "
          />
        </div>

        {/* Information */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between">
            <span
              className={`
                inline-flex
                rounded-full
                px-2
                py-0.5
                text-[11px]
                font-bold
                tracking-wider
                ${styles.number}
              `}
            >
              {number}
            </span>
          </div>

          <h3
            className="
              font-display
              text-[20px]
              font-bold
              leading-tight
              text-ink-900
              dark:text-white
            "
          >
            {person.name}
          </h3>

          <p
            className="
              mt-1
              text-[13px]
              font-bold
              uppercase
              tracking-wide
              text-brand-600
              dark:text-brand-400
            "
          >
            {person.role}
          </p>

          <p
            className="
              mt-2
              line-clamp-2
              text-[13px]
              leading-relaxed
              text-ink-500
              dark:text-ink-400
            "
          >
            {person.bio}
          </p>

          <div className="mt-2 flex flex-wrap gap-1">
            {person.credentials
              ?.slice(0, 2)
              .map((credential) => (
                <span
                  key={credential}
                  className={`
                    rounded-full
                    px-2
                    py-0.5
                    text-[10px]
                    font-semibold
                    ${styles.badge}
                  `}
                >
                  {credential}
                </span>
              ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default FounderSection
