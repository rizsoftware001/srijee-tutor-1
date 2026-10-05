import React, { useState } from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Field, Input, Select } from '../../components/ui/Input.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { useToast } from '../../context/ToastContext.jsx'

export default function TeacherSettings() {
  const toast = useToast()
  const [form, setForm] = useState({ name: '', email: '', city: '', expectedFee: '', notifications: { sms: true, email: true, whatsapp: false } })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const setNotif = (k) => (e) => setForm((f) => ({ ...f, notifications: { ...f.notifications, [k]: e.target.checked } }))

  return (
    <>
      <Seo path="/teacher/settings" title="Settings | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Settings</h1>
          <p className="mt-2 text-ink-600">Manage your account and notification preferences.</p>
        </div>
        <Card>
          <CardHeader title="Account" />
          <CardBody className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name"><Input value={form.name} onChange={set('name')} /></Field>
              <Field label="Email"><Input type="email" value={form.email} onChange={set('email')} /></Field>
              <Field label="City"><Input value={form.city} onChange={set('city')} /></Field>
              <Field label="Expected Fee (per hour)"><Input type="number" value={form.expectedFee} onChange={set('expectedFee')} /></Field>
            </div>
            <Button onClick={() => toast.success('Account updated.')} variant="primary">Save Changes</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Notifications" />
          <CardBody className="space-y-3">
            <label className="flex items-center justify-between">
              <div><p className="text-sm font-medium text-ink-900">SMS notifications</p><p className="text-xs text-ink-500">New opportunities, demo reminders</p></div>
              <input type="checkbox" checked={form.notifications.sms} onChange={setNotif('sms')} className="h-5 w-9 appearance-none rounded-full bg-ink-200 checked:bg-brand-600 relative transition-colors before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform checked:before:translate-x-4" />
            </label>
            <label className="flex items-center justify-between">
              <div><p className="text-sm font-medium text-ink-900">Email notifications</p><p className="text-xs text-ink-500">Weekly summary, important updates</p></div>
              <input type="checkbox" checked={form.notifications.email} onChange={setNotif('email')} className="h-5 w-9 appearance-none rounded-full bg-ink-200 checked:bg-brand-600 relative transition-colors before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform checked:before:translate-x-4" />
            </label>
            <label className="flex items-center justify-between">
              <div><p className="text-sm font-medium text-ink-900">WhatsApp notifications</p><p className="text-xs text-ink-500">Quick opportunity alerts</p></div>
              <input type="checkbox" checked={form.notifications.whatsapp} onChange={setNotif('whatsapp')} className="h-5 w-9 appearance-none rounded-full bg-ink-200 checked:bg-brand-600 relative transition-colors before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform checked:before:translate-x-4" />
            </label>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
