import React, { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../ui/Button.jsx'
import { Field, Input, Select, Textarea } from '../ui/Input.jsx'
import { Badge } from '../ui/Badge.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { validate, isRequired, isIndianMobile, isEmail } from '../../utils/validation.js'
import { createLead } from '../../services/leadService.js'
import { SITE } from '../../config/site.js'

/**
 * TrainingCourseModal — direct registration form for training courses.
 * Skips the programme/subject selection step because these courses
 * don't need it (Foreign Language, Computer Course, Spoken English, etc.)
 *
 * Usage:
 *   const { openTrainingCourse } = useTrainingCourse()
 *   <button onClick={() => openTrainingCourse({
 *     courseName: 'Spoken English',
 *     courseType: 'Language Course',
 *   })}>Enroll</button>
 */
export function TrainingCourseModal({ open, onClose, course = null }) {
  const toast = useToast()
  const [step, setStep] = useState(0) // 0 = form, 1 = success
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    ageGroup: '',
    preferredMode: '',
    preferredTime: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})

  // Reset form when modal opens with a new course
  useEffect(() => {
    if (open && course) {
      setStep(0)
      setForm({
        name: '',
        phone: '',
        email: '',
        ageGroup: '',
        preferredMode: '',
        preferredTime: '',
        message: '',
        consent: false,
      })
      setErrors({})
    }
  }, [open, course])

  const set = useCallback((k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: value }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
  }, [])

  const submit = async (e) => {
    e?.preventDefault()
    if (!course) return

    const schema = {
      name: (v) => isRequired(v) ? true : 'Please enter your name',
      phone: (v) => {
        if (!isRequired(v)) return 'Please enter your mobile number'
        if (!isIndianMobile(v)) return 'Enter a valid 10-digit mobile number'
        return true
      },
      email: (v) => !v || isEmail(v) ? true : 'Enter a valid email address',
      ageGroup: (v) => isRequired(v) ? true : 'Please select your age group',
      preferredMode: (v) => isRequired(v) ? true : 'Please select a preferred mode',
      consent: (v) => v ? true : 'Please provide consent to be contacted',
    }
    const { isValid, errors } = validate(form, schema)
    if (!isValid) {
      setErrors(errors)
      toast.error('Please fix the highlighted fields.')
      return
    }
    setSubmitting(true)
    try {
      await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: course.courseName,
        class: 'Training Course',
        board: 'N/A',
        location: 'N/A',
        mode: form.preferredMode,
        preferredTime: form.preferredTime,
        budget: '',
        notes: `[${course.courseType}] Age: ${form.ageGroup}${form.message ? ' | ' + form.message : ''}`,
        source: `Website — Training Course (${course.courseName})`,
      })
      setStep(1)
      toast.success(`${course.courseName} registration submitted! Our counsellor will call you soon.`)
    } catch (err) {
      toast.error(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(0)
    setForm({ name: '', phone: '', email: '', ageGroup: '', preferredMode: '', preferredTime: '', message: '', consent: false })
    setErrors({})
    onClose()
  }

  // ESC key to close
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && handleClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open || !course) return null

  const AGE_GROUPS = ['Class 2-5', 'Class 6-8', 'Class 9-10', 'Class 11-12', 'College Student', 'Adult / Professional']
  const MODES = ['Online', 'Home Tuition', 'Classroom', 'Any']
  const TIMES = ['Morning', 'Afternoon', 'Evening', 'Weekend', 'Flexible']

  return createPortal(
    <div className="fixed inset-0 z-[95] flex items-stretch sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${course.courseName} registration form`}
        className="
          relative z-10 w-full bg-white dark:bg-ink-900 shadow-2xl animate-scale-in
          flex flex-col h-screen sm:h-auto sm:max-h-[92vh]
          sm:rounded-2xl sm:max-w-lg
        "
      >
        {/* Header — course-specific */}
        <div className="relative overflow-hidden border-b border-ink-100 dark:border-ink-700">
          {/* Course-colored gradient header */}
          <div className={`bg-gradient-to-br ${course.gradient || 'from-brand-600 to-teal-700'} px-5 sm:px-6 py-5`}>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{course.icon || '📚'}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{course.courseType}</p>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-white">{course.courseName}</h2>
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-white/80">
                  {step === 0 ? 'Fill this form to register — our counsellor will call you back.' : 'Your registration is confirmed!'}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex-none rounded-md p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
          {step === 0 ? (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" htmlFor="name" required error={errors.name}>
                  <Input id="name" value={form.name} onChange={set('name')} error={errors.name} placeholder="Your full name" />
                </Field>
                <Field label="Mobile Number" htmlFor="phone" required error={errors.phone} hint="10-digit mobile">
                  <Input id="phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="98300 12345" />
                </Field>
              </div>

              <Field label="Email (optional)" htmlFor="email" error={errors.email}>
                <Input id="email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Age Group / Class" htmlFor="ageGroup" required error={errors.ageGroup}>
                  <Select id="ageGroup" value={form.ageGroup} onChange={set('ageGroup')} error={errors.ageGroup} placeholder="Select">
                    {AGE_GROUPS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </Select>
                </Field>
                <Field label="Preferred Mode" htmlFor="mode" required error={errors.preferredMode}>
                  <Select id="mode" value={form.preferredMode} onChange={set('preferredMode')} error={errors.preferredMode} placeholder="Select mode">
                    {MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </Select>
                </Field>
              </div>

              <Field label="Preferred Time" htmlFor="time">
                <Select id="time" value={form.preferredTime} onChange={set('preferredTime')} placeholder="Any time">
                  {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                </Select>
              </Field>

              <Field label="Message (optional)" htmlFor="message" hint="Any specific requirement?">
                <Textarea id="message" value={form.message} onChange={set('message')} placeholder="e.g. Need weekend batches, preparing for a specific exam, etc." rows={2} />
              </Field>

              <label className="flex items-start gap-2.5 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/40"
                  checked={form.consent}
                  onChange={set('consent')}
                />
                <span className="text-sm text-ink-700 dark:text-ink-200">
                  I consent to be contacted by Srijee Tutor about this registration. <span className="text-danger-500">*</span>
                </span>
              </label>
              {errors.consent && <p className="error-text -mt-3">{errors.consent}</p>}

              <Button type="submit" variant="primary" size="lg" fullWidth loading={submitting}>
                Register for {course.courseName}
              </Button>
              <p className="text-center text-xs text-ink-500 dark:text-ink-300">
                Or call us: <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-brand-700 dark:text-brand-400 hover:underline">{SITE.phoneDisplay}</a>
              </p>
            </form>
          ) : (
            <SuccessView course={course} form={form} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

/* ─── Success view ─────────────────────────────────────────────── */

function SuccessView({ course, form, onClose }) {
  return (
    <div className="text-center py-4">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M6 14l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="h4 mt-4 text-ink-900 dark:text-white">Registration Confirmed!</h3>
      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 max-w-sm mx-auto">
        Thank you for registering for <strong>{course.courseName}</strong>. Our counsellor will call you on <strong>{form.phone}</strong> within 24 hours.
      </p>

      <div className="mt-5 rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 p-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-2">Registration Summary</p>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <SummaryRow label="Course" value={course.courseName} />
          <SummaryRow label="Type" value={course.courseType} />
          <SummaryRow label="Name" value={form.name} />
          <SummaryRow label="Phone" value={form.phone} />
          <SummaryRow label="Age Group" value={form.ageGroup} />
          <SummaryRow label="Mode" value={form.preferredMode} />
          <SummaryRow label="Email" value={form.email || '—'} />
          <SummaryRow label="Time" value={form.preferredTime || 'Flexible'} />
        </dl>
      </div>

      <div className="mt-6">
        <Button variant="primary" size="md" onClick={onClose}>Done</Button>
      </div>
    </div>
  )
}

function SummaryRow({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500 dark:text-ink-400">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900 dark:text-white break-words">{value}</dd>
    </div>
  )
}

export default TrainingCourseModal
