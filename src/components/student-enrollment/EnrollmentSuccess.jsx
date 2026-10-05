import React from 'react'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'

/**
 * Success state — shown after frontend mock submission.
 *
 * No backend is called. The submission is purely mock; the success
 * state clearly shows what was captured so the user can verify.
 */
export function EnrollmentSuccess({ values, onClose, onAnother }) {
  // Resolve "Other Subject" free-text into the displayed subject list
  const subjectsDisplay = values.subjects
    .filter((s) => s !== '__other__')
    .concat(values.otherSubject ? [values.otherSubject] : [])

  return (
    <div className="text-center py-4">
      {/* Success icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 16l6 6 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h2 className="h3 mt-5 text-ink-900 dark:text-white">Enrollment Request Submitted!</h2>
      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 max-w-md mx-auto">
        Thank you. Our counsellor will review your requirement and contact you soon.
      </p>

      {/* Demo notice — honest about frontend-only state */}
      <div className="mt-4 inline-flex">
        <Badge tone="warning" size="sm">Demo · saved to browser only</Badge>
      </div>

      {/* Summary card */}
      <div className="mt-6 rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50/60 dark:bg-ink-800/40 p-5 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-3">
          Summary
        </p>
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <SummaryRow label="Programme(s)" value={values.programmes.join(', ')} />
          <SummaryRow label="Subject(s)" value={subjectsDisplay.join(', ')} />
          <SummaryRow label="Board" value={values.board} />
          <SummaryRow label="Class" value={values.classLevel} />
          <SummaryRow label="Learning Mode" value={values.learningMode} />
          <SummaryRow label="Preferred Time" value={values.preferredTime || '—'} />
          <SummaryRow label="Student Name" value={values.studentName} />
          <SummaryRow label="Parent Name" value={values.parentName} />
          <SummaryRow label="Mobile" value={values.phone} />
          <SummaryRow label="Email" value={values.email || '—'} />
          <SummaryRow label="Location" value={values.location} />
          {values.message && (
            <div className="sm:col-span-2">
              <dt className="text-xs text-ink-500 dark:text-ink-300">Additional Requirement</dt>
              <dd className="mt-0.5 font-medium text-ink-900 dark:text-white">{values.message}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Actions */}
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button variant="primary" size="md" onClick={onClose}>Done</Button>
        <Button variant="secondary" size="md" onClick={onAnother}>Submit Another</Button>
      </div>
    </div>
  )
}

function SummaryRow({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500 dark:text-ink-300">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900 dark:text-white break-words">{value || '—'}</dd>
    </div>
  )
}

export default EnrollmentSuccess
