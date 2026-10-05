import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { mockOpportunities } from '../../data/mockOpportunities.js'
import { useToast } from '../../context/ToastContext.jsx'
import { formatRelative } from '../../utils/format.js'

export default function Opportunities() {
  const toast = useToast()
  const apply = (id) => toast.success(`Applied to opportunity ${id}. Our team will reach out if shortlisted.`)

  return (
    <>
      <Seo path="/teacher/opportunities" title="Matched Opportunities | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Matched Opportunities</h1>
          <p className="mt-2 text-ink-600">Tuition requirements that match your subjects, classes, and locations.</p>
        </div>

        <div className="grid gap-4">
          {mockOpportunities.length === 0 ? (
            <EmptyState
              icon={<SparkIcon />}
              title="No opportunities yet"
              description="Once your profile is verified and active, matched tuition requirements will appear here."
            />
          ) : (
            mockOpportunities.map((o) => (
              <Card key={o.id} hover>
                <CardBody>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-lg font-semibold text-ink-900">{o.title}</h2>
                        <Badge tone={o.status === 'OPEN' ? 'success' : 'ink'} size="xs">{o.status}</Badge>
                        <Badge tone="brand" size="xs">{o.matchScore}% match</Badge>
                      </div>
                      <p className="mt-1 text-xs text-ink-500">Posted {formatRelative(o.postedAt)}</p>
                      <dl className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                        <Detail label="Class" value={o.classLevel} />
                        <Detail label="Board" value={o.board} />
                        <Detail label="Mode" value={o.mode} />
                        <Detail label="Subject" value={o.subject} />
                        <Detail label="Location" value={o.location} />
                        <Detail label="Schedule" value={o.schedule} />
                        <Detail label="Budget" value={o.budget} />
                        {o.distanceKm && <Detail label="Distance" value={`${o.distanceKm} km`} />}
                      </dl>
                    </div>
                    <div className="flex flex-col gap-2 lg:w-44">
                      {o.status === 'OPEN' ? (
                        <Button variant="primary" onClick={() => apply(o.id)}>Apply</Button>
                      ) : (
                        <Button variant="secondary" disabled>Applied</Button>
                      )}
                      <Button variant="ghost">Save for later</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900">{value}</dd>
    </div>
  )
}

function SparkIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
}
