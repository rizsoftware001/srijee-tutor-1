import React from 'react'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { centers } from '../../data/centers.js'

export default function OurCenters() {
  return (
    <>
      <Seo path="/our-centers" title="Our Centres — Kolkata, Delhi, Mumbai, Abu Dhabi | Srijee Tutor" description="Srijee Tutor centres across India and the UAE." />
      <section className="relative overflow-hidden bg-brand-teal-gradient">
        <Container>
          <div className="relative py-12 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Our Centres' }]} />
            <span className="eyebrow text-brand-100 mt-4 inline-block">Our Centres</span>
            <h1 className="h1 mt-3 text-white">Find a centre near you</h1>
            <p className="mt-4 max-w-2xl text-base text-brand-50">Srijee Tutor centres across India and the UAE.</p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="space-y-6">
            {centers.map((center) => (
              <Card key={center.id} className="overflow-hidden card-hover">
                <CardBody className="!p-0">
                  <div className="grid lg:grid-cols-12">
                    <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <img src={center.image} alt={`${center.city} centre`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${center.gradient} opacity-30`} />
                      <div className="absolute bottom-4 left-4">
                        <Badge tone={center.type === 'Head Office' ? 'accent' : 'brand'} size="sm" className="!bg-white/90 backdrop-blur-sm">{center.type}</Badge>
                      </div>
                    </div>
                    <div className="lg:col-span-7 p-6">
                      <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">{center.city}</h2>
                      <p className="text-sm text-ink-500 dark:text-ink-300">{center.region}</p>
                      <div className="mt-4 space-y-2 text-sm text-ink-700 dark:text-ink-200">
                        <div className="flex items-start gap-2"><span>📍</span><span>{center.address}</span></div>
                        {!center.phone.includes('Confirm') && (<div className="flex items-center gap-2"><span>📞</span><a href={`tel:${center.phone}`} className="hover:text-brand-700 dark:hover:text-brand-300">{center.phone}</a></div>)}
                        {!center.email.includes('Confirm') && (<div className="flex items-center gap-2"><span>✉</span><a href={`mailto:${center.email}`} className="hover:text-brand-700 dark:hover:text-brand-300 break-all">{center.email}</a></div>)}
                      </div>
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300 mb-2">Programs Available</p>
                        <div className="flex flex-wrap gap-1.5">
                          {center.programs.map((p) => (<span key={p} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{p}</span>))}
                        </div>
                      </div>
                      <a href={center.mapLink} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm mt-5 inline-flex">📍 View on Maps →</a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}