import React, { useState } from 'react'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Field, Input, Textarea, Select } from '../../components/ui/Input.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useEnrollment } from '../../context/EnrollmentContext.jsx'
import { SITE } from '../../config/site.js'
import { validate, required, emailFmt, mobileFmt } from '../../utils/validation.js'

export default function Contact() {
  const toast = useToast()
  const { openEnrollment } = useEnrollment()
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'Free Counselling', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((p) => ({ ...p, [k]: undefined }))
  }
  const submit = (e) => {
    e.preventDefault()
    const { isValid, errors } = validate(form, {
      name: required('Please enter your name'),
      phone: [required('Please enter your mobile'), mobileFmt()],
      email: emailFmt(),
      message: required('Please tell us how we can help'),
    })
    if (!isValid) { setErrors(errors); return }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      toast.success('Thank you! Our team will reach out within 24 hours.')
      setForm({ name: '', phone: '', email: '', subject: 'Free Counselling', message: '' })
    }, 700)
  }

  return (
    <>
      <Seo path="/contact" />

      {/* ─── Banner ─── */}
      <section className="relative overflow-hidden bg-brand-teal-gradient">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
            <span className="eyebrow text-brand-100 mt-4 inline-block">Get in touch</span>
            <h1 className="h1 mt-3 text-white">Get In Touch With Us</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-brand-50 text-pretty">
              Have a question about tuition, courses, or want to talk to a counsellor? We're here to help — call us, email us, or send a quick message.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white !text-brand-700 hover:!bg-brand-50">
                📞 {SITE.phoneDisplay}
              </Button>
              <Button type="button" variant="accent" size="lg" onClick={openEnrollment}>
                Enroll as Student
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left — Contact info cards */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="h3 mb-2">Reach us directly</h2>
              <p className="text-sm text-ink-600 dark:text-ink-300 mb-4">
                For any admission-related queries, feel free to contact us. Our counsellors respond within 24 hours.
              </p>

              <ContactRow
                icon={<PinIcon />}
                title="Address"
                lines={[
                  SITE.address.line1,
                  SITE.address.line2,
                  `${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`,
                  SITE.address.country,
                ]}
                action={
                  <a href={SITE.address.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-700 dark:text-brand-400 hover:underline mt-2 inline-flex items-center gap-1">
                    View on Google Maps
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3h6v6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                }
              />
              <ContactRow
                icon={<MailIcon />}
                title="Email"
                lines={[SITE.email, SITE.emailSecondary]}
                action={
                  <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-brand-700 dark:text-brand-400 hover:underline mt-2 inline-block">
                    Send email →
                  </a>
                }
              />
              <ContactRow
                icon={<PhoneIcon />}
                title="Phone"
                lines={[SITE.phoneDisplay]}
                action={
                  <a href={`tel:${SITE.phoneHref}`} className="text-sm font-semibold text-brand-700 dark:text-brand-400 hover:underline mt-2 inline-block">
                    Call now →
                  </a>
                }
              />

              {/* Quick enquiry CTA */}
              <div className="rounded-xl border border-dashed border-brand-300 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/20 p-4">
                <p className="text-sm font-semibold text-ink-900 dark:text-white">Prefer to enroll right now?</p>
                <p className="text-xs text-ink-500 dark:text-ink-300 mt-1 mb-3">Skip the wait — submit your requirement in 3 steps.</p>
                <Button type="button" variant="primary" size="sm" fullWidth onClick={openEnrollment}>
                  Enroll as Student
                </Button>
              </div>
            </div>

            {/* Right — Form + Map */}
            <div className="lg:col-span-7 space-y-6">
              <Card>
                <CardBody>
                  <h3 className="h5 text-ink-900 dark:text-white">Send us a quick message</h3>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-300 mb-4">
                    If you have any query in your mind, feel free to write us!
                  </p>
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Name" htmlFor="c-name" required error={errors.name}>
                        <Input id="c-name" value={form.name} onChange={set('name')} error={errors.name} placeholder="Your name" />
                      </Field>
                      <Field label="Phone Number" htmlFor="c-phone" required error={errors.phone}>
                        <Input id="c-phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="98300 12345" />
                      </Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Email" htmlFor="c-email" error={errors.email}>
                        <Input id="c-email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" />
                      </Field>
                      <Field label="Subject" htmlFor="c-subject">
                        <Select id="c-subject" value={form.subject} onChange={set('subject')}>
                          <option>Free Counselling</option>
                          <option>Enroll as Student</option>
                          <option>Become a Tutor</option>
                          <option>Foreign Language Demo</option>
                          <option>General Enquiry</option>
                          <option>Feedback</option>
                        </Select>
                      </Field>
                    </div>
                    <Field label="Message" htmlFor="c-msg" required error={errors.message}>
                      <Textarea id="c-msg" value={form.message} onChange={set('message')} error={errors.message} placeholder="How can we help?" rows={5} />
                    </Field>
                    <Button type="submit" variant="primary" size="lg" fullWidth loading={sending}>
                      SUBMIT
                    </Button>
                  </form>
                </CardBody>
              </Card>

              {/* ─── Map ─── */}
              <Card className="overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-ink-100 dark:border-ink-700">
                  <div>
                    <h3 className="h5 text-ink-900 dark:text-white">Find us on the map</h3>
                    <p className="text-xs text-ink-500 dark:text-ink-300 mt-0.5">{SITE.address.line1}</p>
                  </div>
                  <a href={SITE.address.mapLink} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-brand-700 dark:text-brand-400 hover:underline">
                    Open in Maps →
                  </a>
                </div>
                <div className="aspect-video bg-ink-100 dark:bg-ink-800 relative">
                  <iframe
                    title="Srijee Tutor location on Google Maps"
                    src={SITE.address.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ filter: 'grayscale(0.1) contrast(1.05)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function ContactRow({ icon, title, lines, action }) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">{title}</p>
          <div className="mt-1.5 space-y-0.5">
            {lines.map((l, i) => (
              <p key={i} className="text-sm font-medium text-ink-900 dark:text-white break-words">{l}</p>
            ))}
          </div>
          {action}
        </div>
      </div>
    </Card>
  )
}

function PhoneIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function MailIcon()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg> }
function PinIcon()   { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
