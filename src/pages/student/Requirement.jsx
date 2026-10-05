import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section } from '../../components/common/SectionHeading.jsx'
import { Field, Input, Select, Textarea, RadioGroup } from '../../components/ui/Input.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { ProgressBar } from '../../components/ui/States.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { createLead } from '../../services/leadService.js'
import { classes } from '../../data/classes.js'
import { boards } from '../../data/boards.js'
import { subjects } from '../../data/subjects.js'
import { locations } from '../../data/locations.js'
import { validate, required, emailFmt, mobileFmt, minLen } from '../../utils/validation.js'

const STEPS = ['Student/Parent Details', 'Tuition Requirement', 'Review & Submit']

export default function Requirement() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const toast = useToast()

  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    classLevel: searchParams.get('class') || '',
    board: searchParams.get('board') || '',
    subject: searchParams.get('subject') || '',
    location: searchParams.get('location') || '',
    mode: searchParams.get('mode') || '',
    preferredTime: searchParams.get('preferredTime') || '',
    budget: '',
    notes: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(null)

  const set = (k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: value }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
  }

  const stepSchema = [
    { name: required('Please enter your name'), phone: [required('Please enter your mobile number'), mobileFmt()], email: emailFmt(), consent: (v) => v || 'Please provide consent to be contacted' },
    { classLevel: required('Please select a class'), subject: required('Please select a subject'), location: required('Please select a location'), mode: required('Please select a mode') },
    {},
  ]

  const next = () => {
    const { isValid, errors } = validate(form, stepSchema[step])
    if (!isValid) { setErrors(errors); return }
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submit = async (e) => {
    e?.preventDefault()
    // Re-validate all steps
    const allSchema = Object.assign({}, ...stepSchema)
    const { isValid, errors } = validate(form, allSchema)
    if (!isValid) {
      setErrors(errors)
      // jump to first broken step
      if (errors.name || errors.phone || errors.email || errors.consent) setStep(0)
      else if (errors.classLevel || errors.subject || errors.location || errors.mode) setStep(1)
      toast.error('Please fix the highlighted fields before submitting.')
      return
    }
    setSubmitting(true)
    try {
      const lead = await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        class: form.classLevel,
        board: form.board,
        subject: form.subject,
        location: form.location,
        mode: form.mode,
        preferredTime: form.preferredTime,
        budget: form.budget,
        notes: form.notes,
      })
      setSubmitted(lead)
      toast.success('Your tuition requirement has been submitted. A counsellor will reach out shortly.')
    } catch (err) {
      toast.error(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return <SuccessScreen lead={submitted} onAnother={() => { setSubmitted(null); setStep(0); setForm({ name: '', phone: '', email: '', classLevel: '', board: '', subject: '', location: '', mode: '', preferredTime: '', budget: '', notes: '', consent: false }) }} />
  }

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <>
      <Seo
        path="/student/requirement"
        title="Find My Tutor — Share Your Tuition Requirement | Srijee Tutor"
        description="Tell us your tuition requirement. A Srijee counsellor will call you back with verified, matched tutors."
      />
      <Section>
        <Container size="narrow">
          <div className="text-center mb-8">
            <span className="eyebrow justify-center">Step {step + 1} of {STEPS.length}</span>
            <h1 className="h2 mt-3">Find My Tutor</h1>
            <p className="mt-3 text-ink-600">Register yourself as a Student</p>
            <p className="mt-3 text-ink-600">Share your tuition requirement. A counsellor will call you back with matched tutors.</p>
          </div>

          <div className="mb-8">
            <ProgressBar value={progress} showLabel />
            <div className="mt-2 flex justify-between text-xs text-ink-500">
              {STEPS.map((s, i) => (
                <span key={s} className={i <= step ? 'font-semibold text-brand-700' : ''}>{s}</span>
              ))}
            </div>
          </div>

          <Card>
            <CardBody>
              <form onSubmit={submit} className="space-y-5">
                {step === 0 && (
                  <>
                    <Field label="Full Name" htmlFor="name" required error={errors.name}>
                      <Input id="name" value={form.name} onChange={set('name')} error={errors.name} placeholder="e.g. Sanghamitra Roy" autoComplete="name" />
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Mobile Number" htmlFor="phone" required error={errors.phone} hint="10-digit Indian mobile">
                        <Input id="phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="98300 12345" autoComplete="tel" leftIcon={<PhoneIcon />} />
                      </Field>
                      <Field label="Email" htmlFor="email" error={errors.email} hint="Optional — for receipts and updates">
                        <Input id="email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" autoComplete="email" />
                      </Field>
                    </div>
                    <label className="flex items-start gap-2.5 mt-2">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600" checked={form.consent} onChange={set('consent')} />
                      <span className="text-sm text-ink-700">
                        I consent to be contacted by Srijee Tutor regarding my tuition requirement. I understand my details will be used only for this purpose.
                      </span>
                    </label>
                    {errors.consent && <p className="error-text">{errors.consent}</p>}
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Class" required error={errors.classLevel}>
                        <Select value={form.classLevel} onChange={set('classLevel')} error={errors.classLevel} placeholder="Select class">
                          {classes.map((c) => <option key={c.slug} value={c.label}>{c.label}</option>)}
                        </Select>
                      </Field>
                      <Field label="Board" hint="Optional — pick if specific">
                        <Select value={form.board} onChange={set('board')} placeholder="Any">
                          {boards.map((b) => <option key={b.slug} value={b.label}>{b.label}</option>)}
                        </Select>
                      </Field>
                    </div>
                    <Field label="Subject" required error={errors.subject}>
                      <Select value={form.subject} onChange={set('subject')} error={errors.subject} placeholder="Select subject">
                        {subjects.map((s) => <option key={s.slug} value={s.label}>{s.label}</option>)}
                      </Select>
                    </Field>
                    <Field label="Location" required error={errors.location} hint="Your area / locality">
                      <Select value={form.location} onChange={set('location')} error={errors.location} placeholder="Select location">
                        {locations.map((l) => <option key={l.slug} value={l.label}>{l.label}</option>)}
                      </Select>
                    </Field>
                    <Field label="Learning Mode" required error={errors.mode}>
                      <RadioGroup
                        name="mode"
                        value={form.mode}
                        onChange={(v) => setForm((f) => ({ ...f, mode: v }))}
                        columns={3}
                        options={[
                          { value: 'Home', label: 'Home Tuition', desc: 'Tutor visits your home' },
                          { value: 'Online', label: 'Online Tuition', desc: 'Live online classes' },
                          { value: 'Both', label: 'Both / Flexible', desc: 'Open to either' },
                        ]}
                      />
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Preferred Time" hint="Optional">
                        <Select value={form.preferredTime} onChange={set('preferredTime')} placeholder="Any time">
                          <option>Morning</option>
                          <option>Afternoon</option>
                          <option>Evening</option>
                          <option>Weekend</option>
                        </Select>
                      </Field>
                      <Field label="Budget (per month)" hint="Optional — helps us match better">
                        <Select value={form.budget} onChange={set('budget')} placeholder="No preference">
                          <option>₹2,000 – ₹3,000</option>
                          <option>₹3,000 – ₹4,000</option>
                          <option>₹4,000 – ₹6,000</option>
                          <option>₹6,000+</option>
                        </Select>
                      </Field>
                    </div>
                    <Field label="Additional Requirement" hint="Optional — share anything specific">
                      <Textarea value={form.notes} onChange={set('notes')} placeholder="e.g. Daughter needs help with numericals. Prefers a female tutor. Available Mon/Wed/Fri evenings." rows={3} />
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="rounded-lg bg-brand-50 border border-brand-100 p-4">
                      <h3 className="text-sm font-semibold text-brand-900">Please review your requirement</h3>
                      <p className="mt-1 text-xs text-brand-700">Confirm details below before submitting. You can edit any step.</p>
                    </div>
                    <ReviewRow label="Name" value={form.name} onEdit={() => setStep(0)} />
                    <ReviewRow label="Mobile" value={form.phone} onEdit={() => setStep(0)} />
                    {form.email && <ReviewRow label="Email" value={form.email} onEdit={() => setStep(0)} />}
                    <ReviewRow label="Class" value={form.classLevel} onEdit={() => setStep(1)} />
                    {form.board && <ReviewRow label="Board" value={form.board} onEdit={() => setStep(1)} />}
                    <ReviewRow label="Subject" value={form.subject} onEdit={() => setStep(1)} />
                    <ReviewRow label="Location" value={form.location} onEdit={() => setStep(1)} />
                    <ReviewRow label="Mode" value={form.mode} onEdit={() => setStep(1)} />
                    {form.preferredTime && <ReviewRow label="Preferred Time" value={form.preferredTime} onEdit={() => setStep(1)} />}
                    {form.budget && <ReviewRow label="Budget" value={form.budget} onEdit={() => setStep(1)} />}
                    {form.notes && <ReviewRow label="Notes" value={form.notes} onEdit={() => setStep(1)} />}
                  </>
                )}

                <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 pt-3 border-t border-ink-100">
                  {step > 0 ? (
                    <Button type="button" variant="secondary" onClick={back}>← Back</Button>
                  ) : <span />}
                  {step < STEPS.length - 1 ? (
                    <Button type="button" variant="primary" onClick={next}>Continue →</Button>
                  ) : (
                    <Button type="submit" variant="primary" loading={submitting}>Submit Requirement</Button>
                  )}
                </div>
              </form>
            </CardBody>
          </Card>

          {/* <p className="mt-6 text-center text-xs text-ink-500">
            <Badge tone="warning" size="xs" className="mr-2">Demo</Badge>
            This is a demo build — your submission will be saved to your browser's local storage. No real SMS or email will be sent.
          </p> */}
        </Container>
      </Section>
    </>
  )
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-ink-100 last:border-0">
      <div>
        <p className="text-xs text-ink-500">{label}</p>
        <p className="text-sm font-medium text-ink-900">{value || '—'}</p>
      </div>
      <button type="button" onClick={onEdit} className="text-xs font-semibold text-brand-700 hover:underline">Edit</button>
    </div>
  )
}

function SuccessScreen({ lead, onAnother }) {
  return (
    <Section>
      <Container size="narrow">
        <div className="card p-8 sm:p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-700">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 16l6 6 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h1 className="h2 mt-6">Requirement Submitted!</h1>
          <p className="mt-3 text-ink-600 max-w-md mx-auto">
            Thank you. A Srijee counsellor will call you back shortly to verify your requirement and share matched tutors.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-ink-50 px-5 py-3">
            <span className="text-xs text-ink-500">Reference ID</span>
            <span className="font-mono text-sm font-semibold text-ink-900">{lead.id}</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button as="a" href="/" variant="primary">Back to Home</Button>
            <Button onClick={onAnother} variant="secondary">Submit Another</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3c0 6 5 11 11 11l1-2-3-2-2 1c-1.5-.5-3-2-3.5-3.5L6 5 4 2 2 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
}
