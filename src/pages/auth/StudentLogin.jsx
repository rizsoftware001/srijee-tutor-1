import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Field, Input } from '../../components/ui/Input.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { useOTP } from '../../hooks/useOTP.js'
import { ROLES } from '../../services/authService.js'
import { isIndianMobile } from '../../utils/validation.js'

export function StudentLogin() {
  const navigate = useNavigate()
  const toast = useToast()
  const { login } = useAuth()
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState(null)
  const [otpValue, setOtpValue] = useState('')

  const otp = useOTP({
    role: ROLES.PARENT,
    onVerified: ({ session }) => {
      login(session)
      toast.success('Logged in successfully.')
      navigate('/student/dashboard')
    },
  })

  const send = async (e) => {
    e.preventDefault()
    setError(null)
    if (!isIndianMobile(mobile)) return setError('Enter a valid 10-digit mobile number.')
    otp.setMobile(mobile)
    try { await otp.sendOtp() } catch (err) { setError(err.message) }
  }
  const verify = async (e) => {
    e.preventDefault()
    try { await otp.verifyOtp(otpValue) } catch {}
  }

  return (
    <>
      <Seo path="/student/login" title="Student/Parent Login | Srijee Tutor" />
      <Section>
        <Container size="narrow">
          <div className="text-center mb-8">
            <h1 className="h2">Student / Parent Login</h1>
            <p className="mt-2 text-ink-600">Log in to track your requirement and suggested tutors.</p>
          </div>
          <Card>
            <CardBody>
              {otp.status === 'idle' && (
                <form onSubmit={send} className="space-y-4">
                  <Field label="Mobile Number" htmlFor="s-mobile" required>
                    <Input id="s-mobile" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="98300 12345" leftIcon={<PhoneIcon />} />
                  </Field>
                  {error && <p className="error-text">{error}</p>}
                  <Button type="submit" variant="primary" size="lg" fullWidth loading={otp.status === 'sending'}>Send OTP</Button>
                </form>
              )}
              {otp.status !== 'idle' && otp.status !== 'verified' && (
                <form onSubmit={verify} className="space-y-4">
                  <div className="rounded-lg bg-brand-50 border border-brand-100 p-3.5">
                    <p className="text-sm font-semibold text-brand-900">Enter OTP</p>
                    <p className="mt-0.5 text-xs text-brand-700">Sent to {mobile}
                      {otp.demoOtp && <span className="ml-2 inline-block rounded bg-warning-100 px-1.5 py-0.5 text-2xs font-bold text-warning-800">Demo: {otp.demoOtp}</span>}
                    </p>
                  </div>
                  <OTPInput value={otpValue} onChange={setOtpValue} />
                  {otp.error && <p className="error-text">{otp.error}</p>}
                  <div className="flex justify-between text-sm">
                    <button type="button" onClick={() => { otp.reset(); setOtpValue('') }} className="text-ink-500 hover:text-ink-700">← Change number</button>
                    {otp.canResend ? <button type="button" onClick={() => otp.sendOtp()} className="font-semibold text-brand-700">Resend OTP</button>
                                    : <span className="text-ink-400">Resend in {otp.cooldown}s</span>}
                  </div>
                  <Button type="submit" variant="primary" size="lg" fullWidth loading={otp.status === 'verifying'}>Verify & Login</Button>
                </form>
              )}
              <div className="mt-6 pt-5 border-t border-ink-100 text-center text-sm text-ink-600">
                New here? <Link to="/student/requirement" className="font-semibold text-brand-700 hover:underline">Find a tutor →</Link>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>
    </>
  )
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3c0 6 5 11 11 11l1-2-3-2-2 1c-1.5-.5-3-2-3.5-3.5L6 5 4 2 2 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
}

function OTPInput({ value, onChange }) {
  const digits = Array.from({ length: 6 }, (_, i) => (value || '')[i] || '')
  const refs = React.useRef([])
  React.useEffect(() => { refs.current[0]?.focus() }, [])
  const set = (i, v) => {
    if (!/^\d?$/.test(v)) return
    onChange(digits.map((d, idx) => (idx === i ? v : d)).join(''))
    if (v && i < 5) refs.current[i + 1]?.focus()
  }
  return (
    <div className="flex gap-2 justify-center">
      {digits.map((d, i) => (
        <input key={i} ref={(el) => (refs.current[i] = el)} type="text" inputMode="numeric" maxLength={1} value={d}
          onChange={(e) => set(i, e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Backspace' && !digits[i] && i > 0) refs.current[i - 1]?.focus() }}
          className="h-14 w-12 rounded-lg border border-ink-200 bg-white text-center font-display text-2xl font-bold text-ink-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none"
          aria-label={`OTP digit ${i + 1}`} />
      ))}
    </div>
  )
}
