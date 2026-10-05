import React, { useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import {
  ukGradeLevels,
  ukGradeGroups,
  ukSubjects,
  ukLocations,
  ukCurriculum,
} from '../data/ukContent.js'
import { SITE } from '../../../config/site.js'
import { expertTeachers } from '../../../data/expertTeachers.js'
import { matchTutors } from '../../../services/tutorService.js'
import { createLead } from '../../../services/leadService.js'
import { useToast } from '../../../context/ToastContext.jsx'
import { validate, required, mobileFmt, emailFmt } from '../../../utils/validation.js'

/**
 * UKFindTutor — the UK "Find My Tutor" wizard.
 *
 * 3 steps:
 *   1. Student & Parent Details (name, mobile, email, consent)
 *   2. Tutoring Requirement (key stage, subject, location, mode, goal, message)
 *   3. Review & Submit
 *
 * Submits via leadService.createLead with `region: 'GB'` and a UK-specific
 * source label. The matched-tutors preview uses tutorService.matchTutors,
 * which queries the existing India mock teacher pool — those teachers are
 * available online to UK families.
 *
 * Per spec §7: UK English spelling throughout (Personalised, Programme,
 * Centre). Goals: gcse-prep, a-level-prep, ib-prep, 11-plus, etc.
 */

const STEPS = ['Student & Parent Details', 'Tutoring Requirement', 'Review & Submit']

const SUBJECT_OPTIONS = ukSubjects
const GRADE_OPTIONS = ukGradeLevels
const LOCATION_OPTIONS = ukLocations
const MODES = ['Online', 'In-Home', 'Either']
const GOALS = [
  { value: 'grade-improvement', label: 'Improve my grades' },
  { value: 'gcse-prep', label: 'GCSE prep' },
  { value: 'a-level-prep', label: 'A-Level prep' },
  { value: 'ib-prep', label: 'IB prep' },
  { value: '11-plus', label: '11+/13+ Common Entrance' },
  { value: 'homework-help', label: 'Homework help' },
  { value: 'university-prep', label: 'University preparation' },
  { value: 'enrichment', label: 'Enrichment / advanced' },
]

export default function UKFindTutor() {
  const toast = useToast()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const [step, setStep] = useState(0)
  const [form, setForm] = useState(() => ({
    name: '',
    phone: '',
    email: '',
    consent: false,
    grade: params.get('grade') || '',
    subject: params.get('subject') || '',
    location: '',
    mode: 'Online',
    goal: params.get('goal') || '',
    message: '',
  }))
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(null) // lead object on success

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const stepSchema = [
    {
      name: required('Please enter your name'),
      phone: [required('Please enter your mobile'), mobileFmt()],
      email: emailFmt(),
      consent: (v) => v === true || 'Please agree to be contacted',
    },
    {
      grade: required('Please select a key stage'),
      subject: required('Please select a subject'),
    },
    {},
  ]

  const next = () => {
    const { isValid, errors: errs } = validate(form, stepSchema[step])
    if (!isValid) {
      setErrors(errs)
      toast.error('Please fix the highlighted fields before continuing.')
      return
    }
    setErrors({})
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const back = () => {
    setErrors({})
    setStep((s) => Math.max(s - 1, 0))
  }

  const submit = async () => {
    // Re-validate all steps
    const fullSchema = Object.assign({}, ...stepSchema)
    const { isValid, errors: errs } = validate(form, fullSchema)
    if (!isValid) {
      setErrors(errs)
      const firstErrorStep = stepSchema.findIndex((s, i) =>
        Object.keys(s).some((k) => errs[k])
      )
      if (firstErrorStep >= 0) setStep(firstErrorStep)
      toast.error('Please fix the highlighted fields before submitting.')
      return
    }
    setSubmitting(true)
    try {
      const lead = await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email || '',
        class: form.grade,
        board: 'UK Curriculum',
        subject: SUBJECT_OPTIONS.find((s) => s.slug === form.subject)?.label || form.subject,
        location: LOCATION_OPTIONS.find((l) => l.slug === form.location)?.label || 'Not specified',
        mode: form.mode,
        preferredTime: '',
        budget: '',
        notes: form.message || `Goal: ${GOALS.find((g) => g.value === form.goal)?.label || 'General'}`,
        source: 'Website — UK Find My Tutor',
        region: 'GB',
      })
      setSubmitted(lead)
      toast.success('Your tutor request has been submitted! A consultant will reach out within 24 hours.')
    } catch (e) {
      toast.error(e.message || 'Could not submit. Please try again or contact us.')
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setSubmitted(null)
    setForm({ name: '', phone: '', email: '', consent: false, grade: '', subject: '', location: '', mode: 'Online', goal: '', message: '' })
    setStep(0)
  }

  if (submitted) {
    return <SuccessScreen lead={submitted} onReset={reset} onHome={() => navigate('/uk')} />
  }

  return (
    <>
      <RegionSeo
        path="/uk/find-tutor"
        title="Find a Tutor — Srijee Tutor UK"
        description="Tell us your key stage, subject, and goal — get matched with 2-3 verified UK-aligned tutors."
      />
      <div className="bg-stone-50 min-h-screen">
        {/* Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Home', to: '/uk' }, { label: 'Find a Tutor' }]} />
            <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance tracking-tight">
              Find My Tutor
            </h1>
            <p className="mt-3 text-stone-200/90 max-w-xl">
              Three quick steps. Get matched with 2–3 verified tutors. Always try a
              free demo lesson first.
            </p>
          </div>
        </div>

        {/* Wizard */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Progress */}
          <ProgressBar step={step} />
          <div className="bg-white rounded-2xl border border-stone-300 shadow-sm p-6 sm:p-8 mt-6">
            {step === 0 && <StepOne form={form} errors={errors} set={set} />}
            {step === 1 && <StepTwo form={form} errors={errors} set={set} />}
            {step === 2 && <StepThree form={form} onEdit={(s) => setStep(s)} />}
          </div>

          {/* Nav */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-5">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                Next: {STEPS[step + 1]} →
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-800 text-white font-semibold hover:bg-amber-900 transition-colors disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Request →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

/* ============================================================
   PROGRESS BAR
   ============================================================ */

function ProgressBar({ step }) {
  return (
    <div className="flex items-center justify-between max-w-md mx-auto">
      {STEPS.map((label, i) => {
        const isActive = i === step
        const isComplete = i < step
        return (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  isComplete
                    ? 'bg-emerald-700 text-white'
                    : isActive
                    ? 'bg-slate-900 text-white ring-4 ring-amber-100'
                    : 'bg-stone-200 text-stone-500'
                }`}
              >
                {isComplete ? '✓' : i + 1}
              </div>
              <span className={`text-xs ${isActive ? 'text-amber-800 font-semibold' : 'text-stone-500'}`}>
                {label.split(' ')[0]}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 flex-1 mx-2 transition-colors ${isComplete ? 'bg-emerald-700' : 'bg-stone-200'}`} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

/* ============================================================
   STEP 1 — Student & Parent Details
   ============================================================ */

function StepOne({ form, errors, set }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold text-stone-900 mb-1 tracking-tight">Student &amp; Parent Details</h2>
        <p className="text-sm text-stone-600">So our consultant can reach out — your details stay private.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Student / Parent Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="e.g., Eleanor Roberts"
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </Field>
        <Field label="Mobile Number" required error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="e.g., +44 7700 900123"
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          placeholder="e.g., parent@example.co.uk"
          className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
        />
      </Field>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={set('consent')}
            className="mt-1 h-4 w-4 rounded text-amber-800 focus:ring-amber-200"
          />
          <span className="text-sm text-stone-700">
            I agree to be contacted by Srijee Tutor's consultant about my tuition request. <span className="text-amber-800">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-amber-800 mt-1.5">{errors.consent}</p>}
      </div>
    </div>
  )
}

/* ============================================================
   STEP 2 — Tutoring Requirement
   ============================================================ */

function StepTwo({ form, errors, set }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold text-stone-900 mb-1 tracking-tight">Tutoring Requirement</h2>
        <p className="text-sm text-stone-600">Tell us what you need — this drives the matching.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Key Stage / Year" required error={errors.grade}>
          <select
            value={form.grade}
            onChange={set('grade')}
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
          >
            <option value="">Select a key stage</option>
            {ukGradeGroups.map((g) => (
              <optgroup key={g} label={g}>
                {GRADE_OPTIONS.filter((l) => l.group === g).map((l) => (
                  <option key={l.slug} value={l.slug}>{l.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field label="Subject" required error={errors.subject}>
          <select
            value={form.subject}
            onChange={set('subject')}
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
          >
            <option value="">Select a subject</option>
            {SUBJECT_OPTIONS.map((s) => (
              <option key={s.slug} value={s.slug}>{s.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Area (optional)">
          <select
            value={form.location}
            onChange={set('location')}
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
          >
            <option value="">Select an area</option>
            {LOCATION_OPTIONS.map((l) => (
              <option key={l.slug} value={l.slug}>{l.label}</option>
            ))}
          </select>
        </Field>
        <Field label="Tuition Mode">
          <div className="grid grid-cols-3 gap-2">
            {MODES.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => set('mode')({ target: { type: 'text', value: m } })}
                className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                  form.mode === m
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <Field label="Primary Goal (optional)">
        <select
          value={form.goal}
          onChange={set('goal')}
          className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
        >
          <option value="">Select a goal</option>
          {GOALS.map((g) => (
            <option key={g.value} value={g.value}>{g.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Anything else we should know? (optional)">
        <textarea
          rows={4}
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your child's learning style, schedule, or specific goals..."
          className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none resize-none"
        />
      </Field>
    </div>
  )
}

/* ============================================================
   STEP 3 — Review
   ============================================================ */

function StepThree({ form, onEdit }) {
  const subjectLabel = SUBJECT_OPTIONS.find((s) => s.slug === form.subject)?.label || form.subject
  const gradeLabel = GRADE_OPTIONS.find((g) => g.slug === form.grade)?.label || form.grade
  const locationLabel = LOCATION_OPTIONS.find((l) => l.slug === form.location)?.label || 'Not specified'
  const goalLabel = GOALS.find((g) => g.value === form.goal)?.label || 'Not specified'

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold text-stone-900 mb-1 tracking-tight">Review &amp; Submit</h2>
        <p className="text-sm text-stone-600">Please confirm your details before submitting.</p>
      </div>

      <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
          Your details
        </h3>
        <ReviewRow label="Name" value={form.name} onEdit={() => onEdit(0)} />
        <ReviewRow label="Mobile" value={form.phone} onEdit={() => onEdit(0)} />
        <ReviewRow label="Email" value={form.email || 'Not provided'} onEdit={() => onEdit(0)} />
      </div>

      <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
          Tutoring requirement
        </h3>
        <ReviewRow label="Key Stage" value={gradeLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Subject" value={subjectLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Area" value={locationLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Mode" value={form.mode} onEdit={() => onEdit(1)} />
        <ReviewRow label="Goal" value={goalLabel} onEdit={() => onEdit(1)} />
        {form.message && <ReviewRow label="Notes" value={form.message} onEdit={() => onEdit(1)} />}
      </div>

      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900">
        <p className="font-semibold mb-1">What happens next?</p>
        <p>
          Within 24 hours, a UK-based consultant will call you to confirm requirements,
          share 2–3 verified tutor matches, and schedule your free demo lesson.
        </p>
      </div>
    </div>
  )
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-stone-200 last:border-0">
      <div>
        <p className="text-xs text-stone-500">{label}</p>
        <p className="text-sm text-stone-900 mt-0.5">{value}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs font-semibold text-amber-800 hover:text-amber-900"
      >
        Edit
      </button>
    </div>
  )
}

/* ============================================================
   SUCCESS SCREEN
   ============================================================ */

function SuccessScreen({ lead, onReset, onHome }) {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl border border-stone-300 shadow-lg p-8 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16l5 5 13-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-stone-900 mb-2 tracking-tight">
          Tutor request submitted!
        </h1>
        <p className="text-sm text-stone-600 mb-5">
          Thank you. A UK-based Srijee Tutor consultant will reach out within 24 hours.
        </p>
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-left mb-5">
          <p className="text-xs text-stone-500">Your reference ID</p>
          <p className="font-mono text-sm font-semibold text-stone-900 mt-0.5">{lead.id}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={onHome}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            Back to Home
          </button>
          <button
            type="button"
            onClick={onReset}
            className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-700 font-medium hover:bg-stone-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   SHARED
   ============================================================ */

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
        {label} {required && <span className="text-amber-800">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-amber-800 mt-1">{error}</p>}
    </div>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-amber-100/80">
      <ol className="flex items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-white">{it.label}</Link>
            ) : (
              <span className="text-white">{it.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
