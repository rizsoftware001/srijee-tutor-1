import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegionSeo from '../components/RegionSeo.jsx'
import { SITE } from '../../../config/site.js'
import { createLead } from '../../../services/leadService.js'
import { useToast } from '../../../context/ToastContext.jsx'
import { validate, required, mobileFmt, emailFmt } from '../../../utils/validation.js'

/**
 * USAContact — US Contact page with validated lead-capture form.
 *
 * Submits via createLead with `region: 'US'` and a US-specific source label.
 */

const SUBJECT_OPTIONS = [
  'Free Counselling',
  'Find a Tutor',
  'Become a Tutor',
  'Demo Class Inquiry',
  'General Inquiry',
  'Feedback',
]

export default function USAContact() {
  const toast = useToast()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Free Counselling',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const { isValid, errors: errs } = validate(form, {
      name: required('Please enter your name'),
      phone: [required('Please enter your mobile'), mobileFmt()],
      email: emailFmt(),
      message: required('Please tell us how we can help'),
    })
    if (!isValid) {
      setErrors(errs)
      return
    }
    setSending(true)
    try {
      // Simulate a brief send delay so the user sees the spinner
      await new Promise((r) => setTimeout(r, 700))
      await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email || '',
        class: 'Not specified',
        board: 'US Curriculum',
        subject: form.subject,
        location: 'Not specified',
        mode: 'Online',
        notes: form.message,
        source: 'Website — USA Contact',
        region: 'US',
      })
      toast.success('Thank you! Our team will reach out within 24 hours.')
      setForm({ name: '', phone: '', email: '', subject: 'Free Counselling', message: '' })
    } catch (err) {
      toast.error('Could not submit. Please try again or call us.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <RegionSeo
        path="/us/contact"
        title="Contact Srijee Tutor USA — Free Counsellor Consultation"
        description="Talk to a US-based Srijee Tutor counsellor about your child's tutoring needs."
      />

      {/* Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/us' }, { label: 'Contact' }]} />
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-balance">
            Let's talk about your tutoring needs
          </h1>
          <p className="mt-3 text-blue-100/90 max-w-xl">
            Reach out for a free consultation with a US-based counsellor. We typically
            respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Get in touch
              </h2>
              <div className="space-y-4">
                <ContactRow
                  icon="📞"
                  label="Phone"
                  lines={[SITE.phoneDisplay]}
                  action={{ label: 'Call now', href: `tel:${SITE.phoneHref}` }}
                />
                <ContactRow
                  icon="✉️"
                  label="Email"
                  lines={[SITE.email]}
                  action={{ label: 'Send email', href: `mailto:${SITE.email}` }}
                />
                <ContactRow
                  icon="🏢"
                  label="Headquarters (India)"
                  lines={[SITE.address?.street, `${SITE.address?.city}, ${SITE.address?.state} ${SITE.address?.zip}`].filter(Boolean)}
                />
                <ContactRow
                  icon="🌐"
                  label="Hours"
                  lines={['Mon–Sat: 9 AM – 8 PM IST', 'US counsellor available in your time zone']}
                />
              </div>

              {/* Quick CTA */}
              <div className="mt-6 p-5 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Ready to find a tutor?
                </p>
                <p className="text-sm text-slate-600 mb-3">
                  Skip the form and use our quick 3-step wizard.
                </p>
                <Link
                  to="/us/find-tutor"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Start Find My Tutor →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={submit}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5"
              >
                <div>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">
                    Send us a message
                  </h2>
                  <p className="text-sm text-slate-600">All fields marked * are required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your Name" required error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="e.g., Sarah Miller"
                    />
                  </Field>
                  <Field label="Mobile Number" required error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="e.g., +1 555 123 4567"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email (optional)" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="e.g., parent@example.com"
                    />
                  </Field>
                  <Field label="Topic">
                    <select
                      value={form.subject}
                      onChange={set('subject')}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none bg-white"
                    >
                      {SUBJECT_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Your Message" required error={errors.message}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                    placeholder="Tell us about your child's grade level, subjects of interest, scheduling, and any specific goals..."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60"
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Your information stays private. We never share it with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */

function ContactRow({ icon, label, lines, action }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg flex-none">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
          {label}
        </p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-slate-900">{l}</p>
        ))}
        {action && (
          <a
            href={action.href}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 mt-1"
          >
            {action.label} →
          </a>
        )}
      </div>
    </div>
  )
}

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
