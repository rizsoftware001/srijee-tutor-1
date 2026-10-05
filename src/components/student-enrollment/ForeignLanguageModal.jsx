import React, { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../ui/Button.jsx'
import { Field, Input, Select, Textarea } from '../ui/Input.jsx'
import { Badge } from '../ui/Badge.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { validate, isRequired, isIndianMobile, isEmail } from '../../utils/validation.js'
import { createLead } from '../../services/leadService.js'
import { SITE } from '../../config/site.js'

const LANGUAGES = ['French', 'Spanish', 'German']
const LEVELS = ['Beginner (A1)', 'Elementary (A2)', 'Intermediate (B1)', 'Advanced (B2)']
const MODES = ['Online', 'Home Tuition', 'Classroom']

/**
 * ForeignLanguageModal — opens when a user clicks any foreign language.
 * Collects student details and submits to Srijee as a lead.
 *
 * Usage:
 *   const { openForeignLanguage } = useForeignLanguage()
 *   <button onClick={() => openForeignLanguage('French')}>French</button>
 */
export function ForeignLanguageModal({ open, onClose, initialLanguage = '' }) {
  const toast = useToast()
  const [step, setStep] = useState(0) // 0 = form, 1 = success
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    language: initialLanguage,
    level: '',
    mode: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})

  const set = useCallback((k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: value }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
  }, [])

  const submit = async (e) => {
    e?.preventDefault()
    const schema = {
      name:      (v) => isRequired(v) ? true : 'Please enter your name',
      phone:     (v) => {
        if (!isRequired(v)) return 'Please enter your mobile number'
        if (!isIndianMobile(v)) return 'Enter a valid 10-digit mobile number'
        return true
      },
      email:     (v) => !v || isEmail(v) ? true : 'Enter a valid email address',
      language:  (v) => isRequired(v) ? true : 'Please select a language',
      level:     (v) => isRequired(v) ? true : 'Please select your level',
      mode:      (v) => isRequired(v) ? true : 'Please select a preferred mode',
      consent:   (v) => v ? true : 'Please provide consent to be contacted',
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
        subject: form.language,
        class: 'Language Course',
        board: 'N/A',
        location: 'N/A',
        mode: form.mode,
        preferredTime: '',
        budget: '',
        notes: `[Foreign Language Inquiry] Level: ${form.level}${form.message ? ' | ' + form.message : ''}`,
        source: `Website — Foreign Language (${form.language})`,
      })
      setStep(1)
      toast.success(`${form.language} inquiry submitted! Our counsellor will call you soon.`)
    } catch (err) {
      toast.error(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const reset = useCallback(() => {
    setStep(0)
    setForm({ name: '', phone: '', email: '', language: initialLanguage, level: '', mode: '', message: '', consent: false })
    setErrors({})
  }, [initialLanguage])

  const handleClose = () => {
    reset()
    onClose()
  }

  if (!open) return null

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
        aria-label="Foreign Language course inquiry form"
        className="
          relative z-10 w-full bg-white dark:bg-ink-900 shadow-2xl animate-scale-in
          flex flex-col h-screen sm:h-auto sm:max-h-[92vh]
          sm:rounded-2xl sm:max-w-lg
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-ink-100 dark:border-ink-700">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-teal-600 text-white text-sm">
                🌍
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold text-ink-900 dark:text-white truncate">
                Foreign Language Inquiry
              </h2>
            </div>
            <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">
              {step === 0 ? 'Fill this form — our counsellor will call you back.' : 'Your request has been received.'}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex-none rounded-md p-2 text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-ink-700 dark:hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
          {step === 0 ? (
            <form onSubmit={submit} className="space-y-4">
              {/* Language selection — pre-selected if initialLanguage was passed */}
              <Field label="Which language?" htmlFor="language" required error={errors.language}>
                <Select id="language" value={form.language} onChange={set('language')} error={errors.language} placeholder="Select a language">
                  {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                </Select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" htmlFor="name" required error={errors.name}>
                  <Input id="name" value={form.name} onChange={set('name')} error={errors.name} placeholder="Your full name" />
                </Field>
                <Field label="Mobile Number" htmlFor="phone" required error={errors.phone} hint="10-digit Indian mobile">
                  <Input id="phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="98300 12345" />
                </Field>
              </div>

              <Field label="Email (optional)" htmlFor="email" error={errors.email}>
                <Input id="email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Current Level" htmlFor="level" required error={errors.level}>
                  <Select id="level" value={form.level} onChange={set('level')} error={errors.level} placeholder="Select your level">
                    {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </Select>
                </Field>
                <Field label="Preferred Mode" htmlFor="mode" required error={errors.mode}>
                  <Select id="mode" value={form.mode} onChange={set('mode')} error={errors.mode} placeholder="Select mode">
                    {MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </Select>
                </Field>
              </div>

              <Field label="Message (optional)" htmlFor="message" hint="Any specific requirement?">
                <Textarea id="message" value={form.message} onChange={set('message')} placeholder="e.g. Need weekend batches, preparing for DELF exam, etc." rows={2} />
              </Field>

              <label className="flex items-start gap-2.5 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/40"
                  checked={form.consent}
                  onChange={set('consent')}
                />
                <span className="text-sm text-ink-700 dark:text-ink-200">
                  I consent to be contacted by Srijee Tutor about this inquiry. <span className="text-danger-500">*</span>
                </span>
              </label>
              {errors.consent && <p className="error-text -mt-3">{errors.consent}</p>}

              <Button type="submit" variant="primary" size="lg" fullWidth loading={submitting}>
                Submit Inquiry
              </Button>
              <p className="text-center text-xs text-ink-500 dark:text-ink-400">
                Or call us: <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-brand-700 dark:text-brand-400 hover:underline">{SITE.phoneDisplay}</a>
              </p>
            </form>
          ) : (
            <SuccessView form={form} onClose={handleClose} onAnother={reset} />
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

/* ─── Success view ─────────────────────────────────────────────── */

function SuccessView({ form, onClose, onAnother }) {
  return (
    <div className="text-center py-4">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M6 14l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="h4 mt-4 text-ink-900 dark:text-white">Inquiry Submitted!</h3>
      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 max-w-sm mx-auto">
        Thank you for your interest in <strong>{form.language}</strong>. Our counsellor will call you on <strong>{form.phone}</strong> within 24 hours.
      </p>

      <div className="mt-5 rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800/50 p-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">Summary</p>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <SummaryRow label="Language" value={form.language} />
          <SummaryRow label="Level" value={form.level} />
          <SummaryRow label="Mode" value={form.mode} />
          <SummaryRow label="Name" value={form.name} />
          <SummaryRow label="Phone" value={form.phone} />
          <SummaryRow label="Email" value={form.email || '—'} />
        </dl>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button variant="primary" size="md" onClick={onClose}>Done</Button>
        <Button variant="secondary" size="md" onClick={onAnother}>Submit Another</Button>
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

export default ForeignLanguageModal
