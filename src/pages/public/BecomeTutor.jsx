import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Field, Input } from '../../components/ui/Input.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useOTP } from '../../hooks/useOTP.js'
import { ROLES } from '../../services/authService.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { isIndianMobile } from '../../utils/validation.js'

export default function BecomeTutor() {
  return (
    <>
      <Seo
        path="/become-a-tutor"
        title="Become a Tutor — Teach. Inspire. Grow with Srijee"
        description="Join Srijee Tutor as a verified tutor. Get matched with relevant students near you. Flexible timings, dedicated support."
      />
      <BecomeTutorHero />
      <BecomeTutorBenefits />
      <BecomeTutorProcess />
      <BecomeTutorRegister />
    </>
  )
}

function BecomeTutorHero() {
  return (
    <Section className="!pb-0">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">For Teachers</span>
            <h1 className="h1 mt-3 text-balance">Teach. Inspire. Grow with Srijee.</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-600 text-pretty">
              Join a curated network of verified tutors. Get matched with relevant students near you — for home tuition, online classes, or both. Flexible timings, dedicated support, fair fees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#register" className="btn-primary btn-lg">Join as a Tutor</a>
              <Link to="/teacher/login" className="btn-secondary btn-lg">Tutor Login</Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-700">
              {['Verified badge', 'Relevant matches', 'Flexible schedule', 'Dedicated support'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl2 bg-brand-gradient p-8 text-white">
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  ['Verified', 'Document-checked'],
                  ['Matched', 'Relevant students'],
                  ['Flexible', 'Home or online'],
                  ['Supported', 'A real counsellor'],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-lg bg-white/10 p-5 backdrop-blur">
                    <p className="font-display text-lg font-semibold">{t}</p>
                    <p className="mt-1 text-xs text-brand-100">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function BecomeTutorBenefits() {
  const benefits = [
    { title: 'Verified badge', desc: 'Stand out with a Srijee-verified profile that parents trust.' },
    { title: 'Relevant matches', desc: 'Receive opportunities matched to your subjects, classes, and areas — not random leads.' },
    { title: 'Flexible schedule', desc: 'Choose your slots, modes (home/online), and locations. You stay in control.' },
    { title: 'Dedicated counsellor', desc: 'A real person handles parent coordination, demos, and follow-ups. You focus on teaching.' },
    { title: 'Fair, transparent fees', desc: 'Set your expected fee. Srijee’s role is transparent — no hidden cuts.' },
    { title: 'Long-term students', desc: 'We aim for retention — the same student, weekly, for months. Not one-off gigs.' },
  ]
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading eyebrow="Why teach with Srijee" title="Built for serious educators" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">{b.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function BecomeTutorProcess() {
  const steps = [
    ['Register', 'Name + mobile. Verify with OTP.'],
    ['Complete profile', 'Education, experience, preferences.'],
    ['Submit for review', 'Upload documents for verification.'],
    ['Get verified', 'Our team reviews and approves.'],
    ['Start teaching', 'Receive matched opportunities.'],
  ]
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="How it works" title="Five steps to your first Srijee class" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="card p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i+1}</span>
              <p className="mt-3 font-display text-base font-semibold text-ink-900">{t}</p>
              <p className="mt-1 text-xs text-ink-500">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function BecomeTutorRegister() {
  const navigate = useNavigate()
  const toast = useToast()
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)

  const otp = useOTP({
    role: ROLES.TEACHER,
    onVerified: ({ session, user }) => {
      login(session)
      toast.success('Verified! Redirecting to your profile…')
      setTimeout(() => {
        navigate(user.profileCompletion === 0 ? '/teacher/profile/edit' : '/teacher/dashboard')
      }, 700)
    },
  })

  const startRegister = async (e) => {
    e.preventDefault()
    setError(null)
    if (!name.trim()) return setError('Please enter your full name.')
    if (!isIndianMobile(mobile)) return setError('Please enter a valid 10-digit mobile number.')
    setSending(true)
    try {
      otp.setMobile(mobile)
      otp.setName(name)
      await otp.sendOtp()
      toast.success('OTP sent! Check the OTP box below to continue.')
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  const [otpValue, setOtpValue] = useState('')
  const [verifying, setVerifying] = useState(false)

  const verify = async (e) => {
    e.preventDefault()
    setVerifying(true)
    try {
      await otp.verifyOtp(otpValue)
    } catch (err) {
      // error already in otp.error
    } finally {
      setVerifying(false)
    }
  }

  return (
    <Section tone="subtle" id="register">
      <Container size="narrow">
        <SectionHeading eyebrow="Get Started" title="Register as a Srijee Tutor" description="Just your name and mobile number. We'll verify with OTP." />

        <Card className="mt-10">
          <CardBody>
            {/* Step 1: Name + Mobile */}
            <form onSubmit={startRegister} className="space-y-4">
              <Field label="Full Name" htmlFor="r-name" required>
                <Input id="r-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sourav Banerjee" autoComplete="name" />
              </Field>
              <Field label="Mobile Number" htmlFor="r-mobile" required hint="We'll send a 6-digit OTP to verify">
                <Input id="r-mobile" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="98300 12345" autoComplete="tel" leftIcon={<PhoneIcon />} />
              </Field>
              {error && <p className="error-text">{error}</p>}
              <Button type="submit" variant="primary" size="lg" fullWidth loading={sending} disabled={otp.status === 'sent' || otp.status === 'verifying'}>
                Send OTP
              </Button>
            </form>

            {/* Step 2: OTP */}
            {otp.status !== 'idle' && otp.status !== 'verified' && (
              <form onSubmit={verify} className="mt-6 pt-6 border-t border-ink-100 space-y-4 animate-fade-up">
                <div className="rounded-lg bg-brand-50 border border-brand-100 p-3.5">
                  <p className="text-sm font-semibold text-brand-900">Enter the 6-digit OTP</p>
                  <p className="mt-0.5 text-xs text-brand-700">
                    Sent to <span className="font-mono">{mobile}</span>.
                    {otp.demoOtp && (
                      <span className="ml-2 inline-block rounded bg-warning-100 px-1.5 py-0.5 text-2xs font-bold text-warning-800">
                        Demo OTP: {otp.demoOtp}
                      </span>
                    )}
                  </p>
                </div>
                <OTPInput value={otpValue} onChange={setOtpValue} />
                {otp.error && <p className="error-text">{otp.error}</p>}
                <div className="flex items-center justify-between text-sm">
                  <button type="button" onClick={() => { otp.reset(); setOtpValue('') }} className="text-ink-500 hover:text-ink-700">← Change number</button>
                  {otp.canResend ? (
                    <button type="button" onClick={() => otp.sendOtp()} className="font-semibold text-brand-700 hover:underline">Resend OTP</button>
                  ) : (
                    <span className="text-ink-400">Resend in {otp.cooldown}s</span>
                  )}
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth loading={verifying || otp.status === 'verifying'}>
                  Verify & Continue
                </Button>
              </form>
            )}

            <p className="mt-6 text-center text-xs text-ink-500">
              By registering, you agree to Srijee's <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </CardBody>
        </Card>
      </Container>
    </Section>
  )
}

function OTPInput({ value, onChange }) {
  const digits = Array.from({ length: 6 }, (_, i) => (value || '')[i] || '')
  const refs = React.useRef([])
  React.useEffect(() => { refs.current[0]?.focus() }, [])
  const set = (i, v) => {
    if (!/^\d?$/.test(v)) return
    const next = digits.map((d, idx) => (idx === i ? v : d)).join('')
    onChange(next)
    if (v && i < 5) refs.current[i + 1]?.focus()
  }
  const onKey = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) refs.current[i - 1]?.focus()
    if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus()
    if (e.key === 'ArrowRight' && i < 5) refs.current[i + 1]?.focus()
  }
  const onPaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted) onChange(pasted)
  }
  return (
    <div className="flex gap-2" onPaste={onPaste}>
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={(e) => set(i, e.target.value)}
          onKeyDown={(e) => onKey(i, e)}
          className="h-14 w-12 rounded-lg border border-ink-200 bg-white text-center font-display text-2xl font-bold text-ink-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none"
          aria-label={`OTP digit ${i + 1}`}
        />
      ))}
    </div>
  )
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3c0 6 5 11 11 11l1-2-3-2-2 1c-1.5-.5-3-2-3.5-3.5L6 5 4 2 2 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
}
