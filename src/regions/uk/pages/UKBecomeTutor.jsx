import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegionSeo from '../../us/components/RegionSeo.jsx'
import { SITE } from '../../../config/site.js'
import { useToast } from '../../../context/ToastContext.jsx'
import { useOTP } from '../../../hooks/useOTP.js'
import { ROLES } from '../../../services/authService.js'
import { useAuth } from '../../../context/AuthContext.jsx'
import { isIndianMobile } from '../../../utils/validation.js'

/**
 * UKBecomeTutor — landing + register flow for prospective UK tutors.
 *
 * Per spec §4: shares the same Srijee Tutor business model and authentication
 * infrastructure with India. Per spec §17: shared authentication, forms, buttons.
 * The OTP flow is identical to the India BecomeTutor page; only the marketing
 * language and visual design are UK-specific.
 *
 * On successful OTP verify, the user is routed to the existing India Profile
 * Wizard at /in/teacher/profile/edit (per spec §17 "shared authentication").
 *
 * Per spec §7: warm navy/amber palette, GCSE/A-Level mentions, UK English.
 */

const BENEFITS = [
  { title: 'Verified Badge', desc: 'Stand out with our verified-tutor mark after passing our 5-step review.', icon: '✓' },
  { title: 'Matched Families', desc: 'We connect you with UK families whose needs fit your expertise and schedule.', icon: '🎯' },
  { title: 'Flexible Schedule', desc: 'Set your own availability — sessions that fit around your time zone.', icon: '🕒' },
  { title: 'Dedicated Support', desc: 'A Srijee consultant supports every match from first demo to ongoing sessions.', icon: '🤝' },
  { title: 'Demo-First Model', desc: 'Every family takes a free demo before committing — you teach, they choose.', icon: '🎬' },
  { title: 'Global Pool', desc: 'Join a verified tutor pool serving families across India, the US, UK, Canada, and the UAE.', icon: '🌐' },
]

const PROCESS = [
  { n: 1, title: 'Register', desc: 'Enter your name and mobile number. Verify with a 6-digit OTP.' },
  { n: 2, title: 'Complete Profile', desc: '5-step wizard: personal details, education, experience, preferences, documents.' },
  { n: 3, title: 'Get Verified', desc: 'Our team reviews your profile, credentials, and documents within 2–3 business days.' },
  { n: 4, title: 'Start Teaching', desc: 'Once verified and activated, you appear in matched-tutor lists for families.' },
  { n: 5, title: 'Get Paid', desc: 'Track earnings, schedule, and student progress in your teacher dashboard.' },
]

export default function UKBecomeTutor() {
  return (
    <>
      <RegionSeo
        path="/uk/become-a-tutor"
        title="Become a Tutor — Srijee Tutor UK"
        description="Join Srijee Tutor as a verified UK tutor. Get matched with families near you."
      />

      {/* Hero */}
      <Hero />

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">Why join us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-balance tracking-tight">
              Built for verified tutors who care about outcomes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-stone-300 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 text-xl mb-4">
                  {b.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-2 tracking-tight">{b.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">5-step process</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-balance tracking-tight">
              From registration to first lesson
            </h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS.map((step) => (
              <li key={step.n} className="bg-white rounded-2xl border border-stone-300 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white text-sm font-bold mb-3">
                  {String(step.n).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-stone-900 mb-1.5 text-sm">{step.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Register form */}
      <RegisterForm />
    </>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-100 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              For verified UK tutors
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Teach. Inspire. <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Grow with Srijee.</span>
            </h1>
            <p className="mt-5 text-lg text-stone-200/90 leading-relaxed max-w-xl">
              Join Srijee Tutor as a verified online tutor. Get matched with UK
              families whose needs fit your expertise — from KS1 to GCSE, A-Level,
              IB, and Common Entrance. Set your own schedule. Earn while you teach.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-colors"
              >
                Apply Now →
              </a>
              <Link
                to="/teacher/login"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Tutor Login
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Verified', value: '✓' },
              { label: 'Matched', value: '🎯' },
              { label: 'Flexible', value: '🕒' },
              { label: 'Supported', value: '🤝' },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-2">{card.value}</div>
                <p className="text-sm text-stone-200">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RegisterForm() {
  const toast = useToast()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState('')
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', ''])
  const otpRefs = React.useRef([])

  const otp = useOTP({
    role: ROLES.TEACHER,
    onVerified: ({ session, user }) => {
      login(session)
      toast.success('Verified! Redirecting to your profile…')
      setTimeout(() => {
        navigate(user?.profileCompletion === 0 ? '/in/teacher/profile/edit' : '/in/teacher/dashboard')
      }, 700)
    },
  })

  const send = () => {
    setError('')
    if (!name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!isIndianMobile(mobile)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    otp.setName(name)
    otp.setMobile(mobile)
    otp.sendOtp()
  }

  const verify = () => {
    const code = otpValue.join('')
    if (code.length !== 6) {
      setError('Please enter all 6 digits.')
      return
    }
    otp.verifyOtp(code)
  }

  const handleOtpChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otpValue]
    next[i] = val
    setOtpValue(next)
    if (val && i < 5) otpRefs.current[i + 1]?.focus()
  }

  const handleOtpKey = (i, e) => {
    if (e.key === 'Backspace' && !otpValue[i] && i > 0) {
      otpRefs.current[i - 1]?.focus()
    }
  }

  return (
    <section id="register" className="py-12 sm:py-16 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-300 shadow-sm p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-1 tracking-tight">
            Apply as a Tutor
          </h2>
          <p className="text-sm text-stone-600 mb-5">
            Enter your name and mobile. We'll send a 6-digit OTP to verify.
          </p>

          {otp.status === 'idle' || otp.status === 'sending' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                  placeholder="e.g., Oliver Wilson"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                  placeholder="e.g., +44 7700 900123"
                />
              </div>
              {error && <p className="text-xs text-amber-800">{error}</p>}
              <button
                type="button"
                onClick={send}
                disabled={otp.status === 'sending'}
                className="w-full px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-60"
              >
                {otp.status === 'sending' ? 'Sending OTP...' : 'Send OTP →'}
              </button>
            </div>
          ) : otp.status === 'sent' || otp.status === 'verifying' ? (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
                <p className="font-semibold mb-1">Enter the 6-digit OTP</p>
                <p className="text-xs">Sent to {mobile}</p>
                {otp.demoOtp && (
                  <p className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-2xs font-semibold">
                    Demo OTP: {otp.demoOtp}
                  </p>
                )}
              </div>
              <div className="flex gap-1.5 justify-between">
                {otpValue.map((v, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={v}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKey(i, e)}
                    className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none"
                  />
                ))}
              </div>
              {error && <p className="text-xs text-amber-800">{error}</p>}
              {otp.error && <p className="text-xs text-amber-800">{otp.error}</p>}
              <button
                type="button"
                onClick={verify}
                disabled={otp.status === 'verifying'}
                className="w-full px-5 py-3 rounded-xl bg-amber-800 text-white font-semibold hover:bg-amber-900 transition-colors disabled:opacity-60"
              >
                {otp.status === 'verifying' ? 'Verifying...' : 'Verify & Continue →'}
              </button>
              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => {
                    otp.reset()
                    setOtpValue(['', '', '', '', '', ''])
                  }}
                  className="text-stone-600 hover:text-stone-900"
                >
                  ← Change number
                </button>
                {otp.canResend ? (
                  <button
                    type="button"
                    onClick={() => otp.sendOtp()}
                    className="text-amber-800 hover:text-amber-900 font-semibold"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span className="text-stone-400">Resend in {otp.cooldown}s</span>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
