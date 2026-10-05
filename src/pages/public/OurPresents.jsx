import React from 'react'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { teamMembers } from '../../data/teamMembers.js'

export default function OurPresents() {
  return (
    <>
      <Seo path="/our-presents" title="Our Team — Meet the People Behind Srijee | Srijee Tutor" description="Meet the educators, leaders, and visionaries behind Srijee Tutor." />
      <section className="relative overflow-hidden bg-brand-teal-gradient">
        <Container>
          <div className="relative py-12 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Our Team' }]} />
            <span className="eyebrow text-brand-100 mt-4 inline-block">Our Presents</span>
            <h1 className="h1 mt-3 text-white">Meet Our Team</h1>
            <p className="mt-4 max-w-2xl text-base text-brand-50">The educators, leaders, and visionaries who make Srijee Tutor what it is.</p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden card-hover group">
                <CardBody className="!p-0">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                    <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/85">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.credentials.map((c) => (<span key={c} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-2xs">{c}</span>))}
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