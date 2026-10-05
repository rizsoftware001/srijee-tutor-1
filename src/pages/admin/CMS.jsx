import React, { useState } from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Input, Textarea, Field } from '../../components/ui/Input.jsx'
import { useToast } from '../../context/ToastContext.jsx'

export default function AdminCMS() {
  const toast = useToast()
  const [hero, setHero] = useState({
    headline: 'Find the Right Tutor for Your Child',
    subheadline: 'Srijee Tutor matches students with verified, expert tutors — for school, boards, languages, and competitive exams.',
    primaryCta: 'Find My Tutor',
    secondaryCta: 'Free Counselling',
  })
  const [seo, setSeo] = useState({
    title: 'Srijee Tutor — Find the Right Tutor for Your Child',
    description: 'Find verified, personalised home and online tuition for your child.',
    canonical: 'https://srijeetutor.com',
  })

  const setH = (k) => (e) => setHero((h) => ({ ...h, [k]: e.target.value }))
  const setS = (k) => (e) => setSeo((s) => ({ ...s, [k]: e.target.value }))

  return (
    <>
      <Seo path="/admin/cms" title="CMS | Srijee CRM" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Content Management</h1>
          <p className="mt-2 text-ink-600">Edit homepage hero, SEO metadata, and other public content. (Demo — changes are not persisted.)</p>
        </div>

        <Card>
          <CardHeader title="Homepage Hero" />
          <CardBody className="space-y-4">
            <Field label="Headline"><Input value={hero.headline} onChange={setH('headline')} /></Field>
            <Field label="Subheadline"><Textarea value={hero.subheadline} onChange={setH('subheadline')} rows={3} /></Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Primary CTA"><Input value={hero.primaryCta} onChange={setH('primaryCta')} /></Field>
              <Field label="Secondary CTA"><Input value={hero.secondaryCta} onChange={setH('secondaryCta')} /></Field>
            </div>
            <Button variant="primary" onClick={() => toast.success('Hero content saved (demo).')}>Save Hero</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="SEO Metadata" />
          <CardBody className="space-y-4">
            <Field label="SEO Title"><Input value={seo.title} onChange={setS('title')} /></Field>
            <Field label="Meta Description"><Textarea value={seo.description} onChange={setS('description')} rows={2} /></Field>
            <Field label="Canonical URL"><Input value={seo.canonical} onChange={setS('canonical')} /></Field>
            <Button variant="primary" onClick={() => toast.success('SEO metadata saved (demo).')}>Save SEO</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Reference Data" subtitle="Read-only lists used across the site (in production, editable here)" />
          <CardBody>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <DataCard label="Classes" count="7" />
              <DataCard label="Boards" count="8" />
              <DataCard label="Subjects" count="18" />
              <DataCard label="Courses" count="4" />
              <DataCard label="Locations" count="8" />
              <DataCard label="Tuition Types" count="3" />
              <DataCard label="Testimonials" count="3" />
              <DataCard label="FAQs" count="8" />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

function DataCard({ label, count }) {
  return (
    <div className="rounded-lg border border-ink-200 p-3">
      <p className="text-xs text-ink-500">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-ink-900">{count}</p>
    </div>
  )
}
