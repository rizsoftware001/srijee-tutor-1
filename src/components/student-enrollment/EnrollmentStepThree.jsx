import React from 'react'
import { Field, Input, Select } from '../ui/Input.jsx'
import { PREFERRED_TIME_OPTIONS } from './enrollmentConfig.js'
import { locations } from '../../data/locations.js'

/**
 * Step 3 — student / parent details.
 */
export function EnrollmentStepThree({ values, errors, setField }) {
  const set = (key) => (event) => setField(key, event.target.value)

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-ink-100 bg-ink-50/50 p-4 dark:border-ink-700 dark:bg-ink-800/30">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-300">
          Enrollment summary
        </p>
        <p className="mt-1 text-sm font-medium text-ink-800 dark:text-white">
          {values.subject} · {values.classLevel} · {values.board} · {values.learningMode}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Student Name" htmlFor="studentName" required error={errors.studentName}>
          <Input
            id="studentName"
            value={values.studentName}
            onChange={set('studentName')}
            error={errors.studentName}
            placeholder="Student's full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Parent / Guardian Name" htmlFor="parentName" required error={errors.parentName}>
          <Input
            id="parentName"
            value={values.parentName}
            onChange={set('parentName')}
            error={errors.parentName}
            placeholder="Parent or guardian's name"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Mobile Number" htmlFor="phone" required error={errors.phone} hint="10-digit Indian mobile">
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            error={errors.phone}
            placeholder="98300 12345"
            autoComplete="tel"
            leftIcon={<PhoneIcon />}
          />
        </Field>

        <Field label="Email Address" htmlFor="email" error={errors.email} hint="For receipts & updates">
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={set('email')}
            error={errors.email}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Location / Area" htmlFor="location" required error={errors.location}>
          <Select
            id="location"
            value={values.location}
            onChange={set('location')}
            error={errors.location}
            placeholder="Select your area"
          >
            {locations.map((location) => (
              <option key={location.slug} value={location.label}>
                {location.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Preferred Time" htmlFor="preferredTime">
          <Select
            id="preferredTime"
            value={values.preferredTime}
            onChange={set('preferredTime')}
            placeholder="Any time"
          >
            {PREFERRED_TIME_OPTIONS.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </Select>
        </Field>
      </div>

      <label className="mt-2 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/40"
          checked={values.consent}
          onChange={(event) => setField('consent', event.target.checked)}
        />
        <span className="text-sm text-ink-700 dark:text-ink-200">
          I consent to be contacted by Srijee Tutor regarding my enrollment request. I understand my details will be used only for this purpose.
          <span className="ml-0.5 text-danger-500">*</span>
        </span>
      </label>
      {errors.consent && <p className="error-text -mt-3">{errors.consent}</p>}
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default EnrollmentStepThree
