import React, { useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import {
  aeAcademicLevels,
  aeAcademicGroups,
  aeSubjects,
  aeLocations,
  aeCurriculum,
} from '../data/aeContent.js'
import { SITE } from '../../../config/site.js'
import { createLead } from '../../../services/leadService.js'
import { useToast } from '../../../context/ToastContext.jsx'
import { validate, required, mobileFmt, emailFmt } from '../../../utils/validation.js'

/**
 * UAEFindTutor — the UAE "Find My Tutor" wizard.
 *
 * 3 steps:
 *   1. Student & Parent Details (name, mobile, email, consent)
 *   2. Tutoring Requirement (curriculum, academic level, subject, location, mode, goal, message)
 *   3. Review & Submit
 *
 * Submits via leadService.createLead with `region: 'AE'` and a UAE-specific
 * source label. Curriculum is a critical matching field for the UAE — it
 * drives tutor shortlisting across MOE, British, American, IB, CBSE, and ICSE.
 *
 * British English spelling throughout.
 */

const STEPS = ['Student & Parent Details', 'Tutoring Requirement', 'Review & Submit']

const SUBJECT_OPTIONS = aeSubjects
const LEVEL_OPTIONS = aeAcademicLevels
const LOCATION_OPTIONS = aeLocations
const CURRICULUM_OPTIONS = aeCurriculum
const MODES = ['Online', 'Home Tuition', 'One-to-One', 'Group']
const GOALS = [
  { value: 'grade-improvement', label: 'Improve my grades' },
  { value: 'gcse-prep', label: 'GCSE / IGCSE prep' },
  { value: 'a-level-prep', label: 'A-Level prep' },
  { value: 'ib-prep', label: 'IB prep' },
  { value: 'cbse-prep', label: 'CBSE Board prep' },
  { value: 'moe-exam-prep', label: 'MOE exam prep' },
  { value: 'arabic-language', label: 'Arabic language support' },
  { value: 'homework-help', label: 'Homework help' },
  { value: 'enrichment', label: 'Enrichment / advanced' },
]

export default function UAEFindTutor() {
  const toast = useToast()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const [step, setStep] = useState(0)
  const [form, setForm] = useState(() => ({
    name: '',
    phone: '',
    email: '',
    consent: false,
    curriculum: params.get('curriculum') || '',
    level: params.get('level') || '',
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
      curriculum: required('Please select a curriculum'),
      level: required('Please select an academic level'),
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
        class: form.level,
        board: CURRICULUM_OPTIONS.find((c) => c.slug === form.curriculum)?.label || 'UAE Multi-Curriculum',
        subject: SUBJECT_OPTIONS.find((s) => s.slug === form.subject)?.label || form.subject,
        location: LOCATION_OPTIONS.find((l) => l.slug === form.location)?.label || 'Not specified',
        mode: form.mode,
        preferredTime: '',
        budget: '',
        notes: form.message || `Goal: ${GOALS.find((g) => g.value === form.goal)?.label || 'General'}`,
        source: 'Website — UAE Find My Tutor',
        region: 'AE',
      })
      setSubmitted(lead)
      toast.success('Your tutor request has been submitted! An educational consultant will reach out within 24 hours.')
    } catch (e) {
      toast.error(e.message || 'Could not submit. Please try again or contact us.')
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setSubmitted(null)
    setForm({ name: '', phone: '', email: '', consent: false, curriculum: '', level: '', subject: '', location: '', mode: 'Online', goal: '', message: '' })
    setStep(0)
  }

  if (submitted) {
    return <SuccessScreen lead={submitted} onReset={reset} onHome={() => navigate('/ae')} />
  }

  return (
    <>
      <RegionSeo
        path="/ae/find-tutor"
        title="Find a Tutor — Srijee Tutor UAE"
        description="Tell us your curriculum, academic level, and goal — get matched with 2-3 verified UAE-aligned tutors."
      />
      <div className="bg-slate-50 min-h-screen">
        {/* Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Home', to: '/ae' }, { label: 'Find a Tutor' }]} />
            <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
              Find My Tutor
            </h1>
            <p className="mt-3 text-blue-100/90 max-w-xl">
              Three quick steps. Tell us your curriculum — MOE, British, American, IB, CBSE,
              or ICSE — and get matched with 2–3 verified tutors. Always try a free demo class first.
            </p>
          </div>
        </div>

        {/* Wizard */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Progress */}
          <ProgressBar step={step} />
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mt-6">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm"
              >
                Next: {STEPS[step + 1]} →
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 shadow-sm"
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
                    ? 'bg-emerald-600 text-white'
                    : isActive
                    ? 'bg-blue-900 text-white ring-4 ring-blue-100'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isComplete ? '✓' : i + 1}
              </div>
              <span className={`text-xs ${isActive ? 'text-blue-900 font-semibold' : 'text-slate-500'}`}>
                {label.split(' ')[0]}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 flex-1 mx-2 transition-colors ${isComplete ? 'bg-emerald-600' : 'bg-slate-200'}`} />
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
        <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Student &amp; Parent Details</h2>
        <p className="text-sm text-slate-600">So our educational consultant can reach out — your details stay private.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Student / Parent Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="e.g., Aisha Al Mansoori"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </Field>
        <Field label="Mobile Number" required error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="e.g., +971 50 123 4567"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          placeholder="e.g., parent@example.com"
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none"
        />
      </Field>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={set('consent')}
            className="mt-1 h-4 w-4 rounded text-blue-900 focus:ring-blue-200"
          />
          <span className="text-sm text-slate-700">
            I agree to be contacted by Srijee Tutor's educational consultant about my tutoring request. <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1.5">{errors.consent}</p>}
      </div>
    </div>
  )
}

/* ============================================================
   STEP 2 — Tutoring Requirement (UAE — includes Curriculum field)
   ============================================================ */

function StepTwo({ form, errors, set }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Tutoring Requirement</h2>
        <p className="text-sm text-slate-600">Tell us what you need — curriculum is critical for matching in the UAE.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Curriculum" required error={errors.curriculum}>
          <select
            value={form.curriculum}
            onChange={set('curriculum')}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
          >
            <option value="">Select a curriculum</option>
            <optgroup label="UAE National">
              <option value="uae-moe">UAE / MOE Curriculum</option>
            </optgroup>
            <optgroup label="International">
              <option value="british">British Curriculum</option>
              <option value="american">American Curriculum</option>
              <option value="ib">IB Curriculum</option>
            </optgroup>
            <optgroup label="Indian">
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
            </optgroup>
          </select>
        </Field>
        <Field label="Academic Level" required error={errors.level}>
          <select
            value={form.level}
            onChange={set('level')}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
          >
            <option value="">Select a level</option>
            {aeAcademicGroups.map((g) => (
              <optgroup key={g} label={g}>
                {LEVEL_OPTIONS.filter((l) => l.group === g).map((l) => (
                  <option key={l.slug} value={l.slug}>{l.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Subject" required error={errors.subject}>
          <select
            value={form.subject}
            onChange={set('subject')}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
          >
            <option value="">Select a subject</option>
            {SUBJECT_OPTIONS.map((s) => (
              <option key={s.slug} value={s.slug}>{s.label}</option>
            ))}
          </select>
        </Field>
        <Field label="Emirate / Area (optional)">
          <select
            value={form.location}
            onChange={set('location')}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
          >
            <option value="">Select an area</option>
            {LOCATION_OPTIONS.map((l) => (
              <option key={l.slug} value={l.slug}>{l.label}{l.featured ? ' — Featured' : ''}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tuition Mode">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => set('mode')({ target: { type: 'text', value: m } })}
              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                form.mode === m
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Primary Goal (optional)">
        <select
          value={form.goal}
          onChange={set('goal')}
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
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
          placeholder="Tell us about your child's learning style, school, schedule, or specific goals..."
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
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
  const levelLabel = LEVEL_OPTIONS.find((l) => l.slug === form.level)?.label || form.level
  const curriculumLabel = CURRICULUM_OPTIONS.find((c) => c.slug === form.curriculum)?.label || form.curriculum
  const locationLabel = LOCATION_OPTIONS.find((l) => l.slug === form.location)?.label || 'Not specified'
  const goalLabel = GOALS.find((g) => g.value === form.goal)?.label || 'Not specified'

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Review &amp; Submit</h2>
        <p className="text-sm text-slate-600">Please confirm your details before submitting.</p>
      </div>

      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
          Your details
        </h3>
        <ReviewRow label="Name" value={form.name} onEdit={() => onEdit(0)} />
        <ReviewRow label="Mobile" value={form.phone} onEdit={() => onEdit(0)} />
        <ReviewRow label="Email" value={form.email || 'Not provided'} onEdit={() => onEdit(0)} />
      </div>

      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
          Tutoring requirement
        </h3>
        <ReviewRow label="Curriculum" value={curriculumLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Academic Level" value={levelLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Subject" value={subjectLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Emirate / Area" value={locationLabel} onEdit={() => onEdit(1)} />
        <ReviewRow label="Mode" value={form.mode} onEdit={() => onEdit(1)} />
        <ReviewRow label="Goal" value={goalLabel} onEdit={() => onEdit(1)} />
        {form.message && <ReviewRow label="Notes" value={form.message} onEdit={() => onEdit(1)} />}
      </div>

      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900">
        <p className="font-semibold mb-1">What happens next?</p>
        <p>
          Within 24 hours, a UAE-based educational consultant will call you to confirm
          requirements, share 2–3 verified tutor matches, and schedule your free demo class.
        </p>
      </div>
    </div>
  )
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-200 last:border-0">
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm text-slate-900 mt-0.5">{value}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs font-semibold text-blue-900 hover:text-amber-700"
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-lg p-8 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16l5 5 13-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-slate-900 mb-2">
          Tutor request submitted!
        </h1>
        <p className="text-sm text-slate-600 mb-5">
          Thank you. A UAE-based Srijee Tutor educational consultant will reach out within 24 hours.
        </p>
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left mb-5">
          <p className="text-xs text-slate-500">Your reference ID</p>
          <p className="font-mono text-sm font-semibold text-slate-900 mt-0.5">{lead.id}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={onHome}
            className="w-full px-4 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors shadow-sm"
          >
            Back to Home
          </button>
          <button
            type="button"
            onClick={onReset}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
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
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-blue-100/80">
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
