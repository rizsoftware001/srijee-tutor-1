import React from 'react'
import { Field, Textarea } from '../ui/Input.jsx'

/**
 * Step 2 — requirement details.
 * This appears after the student has selected learning mode, board, class and subject.
 */
export function EnrollmentStepTwo({ values, errors, setField }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-4 dark:border-brand-900/50 dark:bg-brand-900/20">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
          Your selection
        </p>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-ink-700 dark:text-ink-200">
          <SummaryChip>{values.learningMode}</SummaryChip>
          <SummaryChip>{values.board}</SummaryChip>
          <SummaryChip>{values.classLevel}</SummaryChip>
          <SummaryChip>{values.subject}</SummaryChip>
        </div>
      </div>

      <Field
        label="Tell Us About Your Requirement"
        htmlFor="message"
        required
        error={errors.message}
        hint="Tell us anything that will help us understand the student's needs."
      >
        <Textarea
          id="message"
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          error={errors.message}
          placeholder="e.g. My child needs help with Mathematics concepts and regular exam preparation. We prefer an experienced tutor who can focus on fundamentals."
          rows={6}
        />
      </Field>
    </div>
  )
}

function SummaryChip({ children }) {
  return (
    <span className="rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm dark:bg-ink-800 dark:text-ink-200">
      {children}
    </span>
  )
}

export default EnrollmentStepTwo
