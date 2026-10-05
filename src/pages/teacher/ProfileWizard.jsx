import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Field, Input, Select, Textarea, Checkbox, RadioGroup } from '../../components/ui/Input.jsx'
import { ProgressBar } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { updateTeacher, submitTeacherProfile } from '../../services/teacherService.js'
import { classes } from '../../data/classes.js'
import { boards } from '../../data/boards.js'
import { subjects } from '../../data/subjects.js'
import { locations } from '../../data/locations.js'

const STEPS = [
  { key: 'personal',  label: 'Personal',   fields: ['name', 'mobile', 'email', 'gender', 'dateOfBirth', 'city', 'locality'] },
  { key: 'education', label: 'Education',  fields: ['qualification', 'specialization', 'institution', 'completionYear'] },
  { key: 'experience',label: 'Experience', fields: ['experience', 'subjects', 'classes', 'boards'] },
  { key: 'preferences',label:'Preferences',fields: ['teachingModes', 'preferredLocations', 'availability', 'expectedFee'] },
  { key: 'documents', label: 'Documents',  fields: ['profilePhoto', 'idProof', 'qualificationProof'] },
]

export default function ProfileWizard() {
  const { user, role } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [step, setStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: user?.name || '',
    mobile: user?.mobile || '',
    email: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    locality: '',
    qualification: '',
    specialization: '',
    institution: '',
    completionYear: '',
    experience: '',
    subjects: [],
    classes: [],
    boards: [],
    teachingModes: [],
    preferredLocations: [],
    availability: '',
    expectedFee: '',
    profilePhoto: null,
    idProof: null,
    qualificationProof: null,
  })

  useEffect(() => {
    if (!user || role !== 'TEACHER') {
      navigate('/teacher/login')
    }
  }, [user, role, navigate])

  const set = (k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: value }))
  }
  const setArray = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const toggleArrayItem = (k, item) =>
    setForm((f) => {
      const cur = f[k] || []
      return { ...f, [k]: cur.includes(item) ? cur.filter((x) => x !== item) : [...cur, item] }
    })

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const saveStep = async (opts = {}) => {
    setSaving(true)
    try {
      await updateTeacher(user.userId, {
        ...Object.fromEntries(STEPS[step].fields.map((f) => [f, form[f]])),
        stepCompleted: STEPS[step].key,
      })
      if (!opts.silent) toast.success(`${STEPS[step].label} step saved.`)
      if (step < STEPS.length - 1) next()
    } catch (e) {
      toast.error(e.message || 'Failed to save step.')
    } finally {
      setSaving(false)
    }
  }

  const submitProfile = async () => {
    setSubmitting(true)
    try {
      // Save the last step first
      await updateTeacher(user.userId, {
        ...Object.fromEntries(STEPS[step].fields.map((f) => [f, form[f]])),
        stepCompleted: STEPS[step].key,
      })
      await submitTeacherProfile(user.userId)
      toast.success('Profile submitted! Our team will review and verify your details.')
      navigate('/teacher/dashboard')
    } catch (e) {
      toast.error(e.message || 'Failed to submit profile.')
    } finally {
      setSubmitting(false)
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <>
      <Seo path="/teacher/profile" title="Complete Your Tutor Profile | Srijee Tutor" />
      <Section>
        <Container size="narrow">
          <div className="mb-8">
            <span className="eyebrow">Profile Completion</span>
            <h1 className="h2 mt-3">Complete Your Profile</h1>
            <p className="mt-2 text-ink-600">A complete profile gets better matches. Take your time — you can save and return.</p>
          </div>

          <div className="mb-8">
            <ProgressBar value={progress} showLabel />
            <div className="mt-3 hidden sm:flex justify-between">
              {STEPS.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setStep(i)}
                  className={`text-xs font-medium ${i === step ? 'text-brand-700' : i < step ? 'text-success-600' : 'text-ink-400'}`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-2xs ${i === step ? 'bg-brand-600 text-white' : i < step ? 'bg-success-100 text-success-700' : 'bg-ink-100 text-ink-500'}`}>
                    {i < step ? '✓' : i + 1}
                  </span>
                  <span className="mt-1 block">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <Card>
            <CardBody>
              {/* Step 1 — Personal */}
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="h5">Personal Information</h2>
                  <Field label="Full Name" htmlFor="t-name" required>
                    <Input id="t-name" value={form.name} onChange={set('name')} placeholder="Your full name" />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Mobile" htmlFor="t-mobile" required hint="Verified at registration">
                      <Input id="t-mobile" value={form.mobile} disabled />
                    </Field>
                    <Field label="Email" htmlFor="t-email">
                      <Input id="t-email" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Gender" htmlFor="t-gender">
                      <Select id="t-gender" value={form.gender} onChange={set('gender')} placeholder="Select">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </Select>
                    </Field>
                    <Field label="Date of Birth" htmlFor="t-dob">
                      <Input id="t-dob" type="date" value={form.dateOfBirth} onChange={set('dateOfBirth')} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="City" htmlFor="t-city" required>
                      <Input id="t-city" value={form.city} onChange={set('city')} placeholder="e.g. Kolkata" />
                    </Field>
                    <Field label="Locality" htmlFor="t-locality" required>
                      <Input id="t-locality" value={form.locality} onChange={set('locality')} placeholder="e.g. New Town" />
                    </Field>
                  </div>
                </div>
              )}

              {/* Step 2 — Education */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="h5">Education</h2>
                  <Field label="Highest Qualification" htmlFor="t-qual" required>
                    <Input id="t-qual" value={form.qualification} onChange={set('qualification')} placeholder="e.g. M.Sc in Physics" />
                  </Field>
                  <Field label="Specialisation" htmlFor="t-spec">
                    <Input id="t-spec" value={form.specialization} onChange={set('specialization')} placeholder="e.g. Physics" />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Institution" htmlFor="t-inst">
                      <Input id="t-inst" value={form.institution} onChange={set('institution')} placeholder="e.g. University of Calcutta" />
                    </Field>
                    <Field label="Completion Year" htmlFor="t-year">
                      <Input id="t-year" type="number" min="1970" max="2030" value={form.completionYear} onChange={set('completionYear')} placeholder="e.g. 2018" />
                    </Field>
                  </div>
                </div>
              )}

              {/* Step 3 — Experience */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="h5">Teaching Experience</h2>
                  <Field label="Years of Experience" htmlFor="t-exp">
                    <Select id="t-exp" value={form.experience} onChange={set('experience')} placeholder="Select">
                      <option>Less than 1 year</option>
                      <option>1–3 years</option>
                      <option>3–5 years</option>
                      <option>5–10 years</option>
                      <option>10+ years</option>
                    </Select>
                  </Field>
                  <Field label="Subjects you teach" required>
                    <ChipPicker options={subjects.map((s) => s.label)} selected={form.subjects} onToggle={(v) => toggleArrayItem('subjects', v)} />
                  </Field>
                  <Field label="Classes you teach">
                    <ChipPicker options={classes.map((c) => c.label)} selected={form.classes} onToggle={(v) => toggleArrayItem('classes', v)} />
                  </Field>
                  <Field label="Boards you teach">
                    <ChipPicker options={boards.map((b) => b.label)} selected={form.boards} onToggle={(v) => toggleArrayItem('boards', v)} />
                  </Field>
                </div>
              )}

              {/* Step 4 — Preferences */}
              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="h5">Teaching Preferences</h2>
                  <Field label="Teaching Mode">
                    <RadioGroup
                      name="modes"
                      value={form.teachingModes[0] || ''}
                      onChange={(v) => setArray('teachingModes', [v])}
                      columns={3}
                      options={[
                        { value: 'Home', label: 'Home Tuition' },
                        { value: 'Online', label: 'Online Tuition' },
                        { value: 'Both', label: 'Both' },
                      ]}
                    />
                  </Field>
                  <Field label="Preferred Locations" hint="Areas you’re willing to travel to (for home tuition)">
                    <ChipPicker options={locations.map((l) => l.label)} selected={form.preferredLocations} onToggle={(v) => toggleArrayItem('preferredLocations', v)} />
                  </Field>
                  <Field label="Availability" htmlFor="t-avail" hint="e.g. Mon/Wed/Fri — 6 PM to 9 PM">
                    <Textarea id="t-avail" value={form.availability} onChange={set('availability')} placeholder="Days and time slots you’re available" rows={2} />
                  </Field>
                  <Field label="Expected Fee (per hour, INR)" htmlFor="t-fee">
                    <Input id="t-fee" type="number" min="100" step="50" value={form.expectedFee} onChange={set('expectedFee')} placeholder="e.g. 500" />
                  </Field>
                </div>
              )}

              {/* Step 5 — Documents */}
              {step === 4 && (
                <div className="space-y-5">
                  <h2 className="h5">Documents</h2>
                  <p className="text-sm text-ink-500">Upload clear scans or photos. Documents are used only for verification.</p>
                  <FileUpload label="Profile Photo" required value={form.profilePhoto} onChange={(f) => setForm((p) => ({ ...p, profilePhoto: f }))} />
                  <FileUpload label="ID Proof (Aadhaar / PAN / Voter ID)" required value={form.idProof} onChange={(f) => setForm((p) => ({ ...p, idProof: f }))} />
                  <FileUpload label="Qualification Certificate" required value={form.qualificationProof} onChange={(f) => setForm((p) => ({ ...p, qualificationProof: f }))} />
                  <FileUpload label="Experience Certificate (optional)" value={form.experienceProof} onChange={(f) => setForm((p) => ({ ...p, experienceProof: f }))} />
                  <div className="rounded-lg bg-brand-50 border border-brand-100 p-4 text-sm text-brand-900">
                    <p className="font-semibold">After you submit</p>
                    <p className="mt-1 text-brand-700">Your profile enters <Badge tone="warning" size="xs">Under Review</Badge>. Our team verifies your details — typically within 2–3 business days.</p>
                  </div>
                </div>
              )}

              {/* Footer nav */}
              <div className="mt-7 flex flex-col-reverse sm:flex-row sm:justify-between gap-3 pt-5 border-t border-ink-100">
                {step > 0 ? (
                  <Button type="button" variant="secondary" onClick={back}>← Back</Button>
                ) : <span />}
                <div className="flex gap-2">
                  <Button type="button" variant="ghost" onClick={() => saveStep({ silent: true })} loading={saving}>Save draft</Button>
                  {step < STEPS.length - 1 ? (
                    <Button type="button" variant="primary" onClick={() => saveStep()} loading={saving}>Save & Continue →</Button>
                  ) : (
                    <Button type="button" variant="primary" onClick={submitProfile} loading={submitting}>Submit Profile</Button>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>
    </>
  )
}

function ChipPicker({ options, selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              active
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-ink-200 text-ink-700 hover:border-brand-300 hover:bg-brand-50/50'
            }`}
          >
            {active && <span className="mr-1">✓</span>}
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function FileUpload({ label, required, value, onChange }) {
  const fileName = value?.name
  return (
    <Field label={label} required={required}>
      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-ink-300 p-4 hover:border-brand-400 hover:bg-brand-50/50 transition-colors">
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 12V3M5 7l4-4 4 4M3 14v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-sm">
            {fileName ? <span className="font-medium text-ink-900">{fileName}</span> : <span className="text-ink-500">Click to upload — JPG, PNG, PDF up to 5MB</span>}
          </span>
        </span>
        <input
          type="file"
          accept="image/*,.pdf"
          className="sr-only"
          onChange={(e) => onChange(e.target.files?.[0] || null)}
        />
        <span className="text-xs font-semibold text-brand-700">Browse</span>
      </label>
    </Field>
  )
}
