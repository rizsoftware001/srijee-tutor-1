import React, { useState, useCallback, useMemo } from 'react'
import { Button } from '../ui/Button.jsx'
import { cn } from '../../utils/cn.js'
import { validate, isRequired, isIndianMobile, isEmail } from '../../utils/validation.js'
import { INITIAL_ENROLLMENT_STATE, STEPS } from './enrollmentConfig.js'
import { EnrollmentStepOne } from './EnrollmentStepOne.jsx'
import { EnrollmentStepTwo } from './EnrollmentStepTwo.jsx'
import { EnrollmentStepThree } from './EnrollmentStepThree.jsx'
import { EnrollmentSuccess } from './EnrollmentSuccess.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { createLead } from '../../services/leadService.js'

/**
 * StudentEnrollmentWizard — progressive student enrollment flow.
 *
 * Step 1: Learning Mode → Board → Class → Subject
 * Step 2: Tell Us About Your Requirement
 * Step 3: Student / Parent Details
 */
export function StudentEnrollmentWizard({ onClose }) {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState(() => ({ ...INITIAL_ENROLLMENT_STATE }))
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const setField = useCallback((key, value) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current))
  }, [])

  const stepValidators = useMemo(
    () => [
      {
        learningMode: (value) => (isRequired(value) ? true : 'Please select a preferred learning mode'),
        board: (value) => (isRequired(value) ? true : 'Please select a board'),
        classLevel: (value) => (isRequired(value) ? true : 'Please select a class'),
        subject: (value) => (isRequired(value) ? true : 'Please select a subject'),
      },
      {
        message: (value) => (isRequired(value) ? true : 'Please tell us about your requirement'),
      },
      {
        studentName: (value) => (isRequired(value) ? true : 'Please enter the student name'),
        parentName: (value) => (isRequired(value) ? true : 'Please enter the parent/guardian name'),
        phone: (value) => {
          if (!isRequired(value)) return 'Please enter your mobile number'
          if (!isIndianMobile(value)) return 'Enter a valid 10-digit mobile number'
          return true
        },
        email: (value) => (!value || isEmail(value) ? true : 'Enter a valid email address'),
        location: (value) => (isRequired(value) ? true : 'Please select your location'),
        consent: (value) => (value ? true : 'Please provide consent to be contacted'),
      },
    ],
    []
  )

  const next = () => {
    const result = validate(values, stepValidators[step])
    if (!result.isValid) {
      setErrors(result.errors)
      return
    }

    setErrors({})
    setStep((current) => Math.min(current + 1, STEPS.length - 1))
  }

  const back = () => {
    setErrors({})
    setStep((current) => Math.max(current - 1, 0))
  }

  const submit = async () => {
    const result = validate(values, stepValidators[2])
    if (!result.isValid) {
      setErrors(result.errors)
      toast.error('Please fix the highlighted fields before submitting.')
      return
    }

    setSubmitting(true)

    try {
      await createLead({
        name: values.parentName || values.studentName,
        phone: values.phone,
        email: values.email,
        class: values.classLevel,
        board: values.board,
        subject: values.subject,
        location: values.location,
        mode: values.learningMode,
        preferredTime: values.preferredTime,
        budget: '',
        notes: values.message,
        source: 'Website — Enroll as Student',
      })

      setSubmitted(true)
      toast.success('Enrollment request submitted!')
    } catch (err) {
      toast.error(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setValues({ ...INITIAL_ENROLLMENT_STATE })
    setErrors({})
    setStep(0)
    setSubmitted(false)
  }

  if (submitted) {
    return <EnrollmentSuccess values={values} onClose={onClose} onAnother={reset} />
  }

  const stepTitles = [
    '1. Choose Your Learning Requirement',
    '2. Tell Us About Your Requirement',
    '3. Your Details',
  ]

  return (
    <div className="flex flex-col">
      <ProgressIndicator currentStep={step} />

      <div className="px-5 pb-3 pt-5 sm:px-8">
        <h2 className="h4 text-ink-900 dark:text-white">{stepTitles[step]}</h2>
        {step === 0 && (
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
            Select each option and the next section will appear automatically.
          </p>
        )}
      </div>

      <div className="max-h-[55vh] overflow-y-auto px-5 pb-5 sm:px-8">
        {step === 0 && (
          <EnrollmentStepOne values={values} errors={errors} setField={setField} />
        )}
        {step === 1 && (
          <EnrollmentStepTwo values={values} errors={errors} setField={setField} />
        )}
        {step === 2 && (
          <EnrollmentStepThree values={values} errors={errors} setField={setField} />
        )}
      </div>

      <div className="flex flex-col-reverse gap-2 border-t border-ink-100 bg-ink-50/50 px-5 py-4 dark:border-ink-700 dark:bg-ink-800/40 sm:flex-row sm:justify-between sm:rounded-b-xl sm:px-8">
        {step > 0 ? (
          <Button type="button" variant="secondary" onClick={back}>
            ← Back
          </Button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <Button type="button" variant="primary" onClick={next}>
            Next: {step === 0 ? 'Requirement Details' : 'Your Details'} →
          </Button>
        ) : (
          <Button type="button" variant="primary" onClick={submit} loading={submitting}>
            Submit Enrollment Request
          </Button>
        )}
      </div>
    </div>
  )
}

function ProgressIndicator({ currentStep }) {
  return (
    <div className="border-b border-ink-100 px-5 pb-4 pt-6 dark:border-ink-700 sm:px-8">
      <ol className="flex items-center" aria-label="Enrollment progress">
        {STEPS.map((step, index) => {
          const isComplete = index < currentStep
          const isActive = index === currentStep
          const isUpcoming = index > currentStep

          return (
            <li
              key={step.key}
              className={cn('flex items-center', index < STEPS.length - 1 && 'flex-1')}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    'flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-semibold transition-all',
                    isComplete && 'bg-brand-600 text-white',
                    isActive && 'bg-brand-600 text-white ring-4 ring-brand-100 dark:ring-brand-900/40',
                    isUpcoming && 'bg-ink-100 text-ink-400 dark:bg-ink-700 dark:text-ink-300'
                  )}
                  aria-label={`Step ${step.n}: ${step.label}`}
                >
                  {isComplete ? <CheckIcon /> : step.n}
                </span>
                <span
                  className={cn(
                    'hidden text-sm font-medium sm:inline',
                    isActive
                      ? 'text-brand-700 dark:text-brand-300'
                      : isComplete
                        ? 'text-ink-700 dark:text-ink-200'
                        : 'text-ink-400 dark:text-ink-300'
                  )}
                >
                  {step.label}
                </span>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  className={cn(
                    'mx-3 h-0.5 flex-1 rounded-full transition-colors',
                    index < currentStep ? 'bg-brand-600' : 'bg-ink-200 dark:bg-ink-700'
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default StudentEnrollmentWizard
