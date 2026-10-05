import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Stat, EmptyState, ProgressBar } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { listLeads, updateLeadStatus } from '../../services/leadService.js'
import { mockOpportunities } from '../../data/mockOpportunities.js'
import { LEAD_STATUSES } from '../../data/mockLeads.js'
import { formatRelative } from '../../utils/format.js'

export default function StudentDashboard() {
  const { user } = useAuth()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listLeads({ search: user?.mobile }).then((all) => {
      setLeads(all)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [user?.mobile])

  const lead = leads[0]
  const statusOrder = LEAD_STATUSES.findIndex((s) => s.key === lead?.status)

  return (
    <>
      <Seo path="/student/dashboard" title="My Dashboard | Srijee Tutor" />
      <div className="space-y-6">
        <div className="card p-6 sm:p-7 bg-accent-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
          <div className="text-white">
            <p className="text-accent-100 text-sm">Welcome,</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mt-1">{user?.name || 'Parent'}</h1>
            <p className="mt-2 text-sm text-accent-50">Track your tuition requirement and suggested tutors.</p>
          </div>
        </div>

        {loading ? (
          <div className="skeleton h-48" />
        ) : !lead ? (
          <EmptyState
            icon={<ClipboardIcon />}
            title="No requirement submitted yet"
            description="Share your tuition requirement — a counsellor will call you back with matched tutors."
            action={<Button as={Link} to="/student/requirement" variant="primary">Find My Tutor</Button>}
          />
        ) : (
          <>
            <Card>
              <CardHeader
                title="Your Requirement"
                subtitle={`Reference ${lead.id}`}
                action={<Badge tone={LEAD_STATUSES[statusOrder]?.color || 'ink'} size="sm" dot>{LEAD_STATUSES[statusOrder]?.label}</Badge>}
              />
              <CardBody>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <Detail label="Class" value={lead.class} />
                  <Detail label="Board" value={lead.board || '—'} />
                  <Detail label="Subject" value={lead.subject} />
                  <Detail label="Location" value={lead.location} />
                  <Detail label="Mode" value={lead.mode} />
                  <Detail label="Preferred Time" value={lead.preferredTime || '—'} />
                  <Detail label="Budget" value={lead.budget || '—'} />
                  <Detail label="Submitted" value={formatRelative(lead.createdAt)} />
                </div>
                {lead.notes && <div className="mt-4 rounded-lg bg-ink-50 p-3 text-sm text-ink-700">{lead.notes}</div>}

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">Progress</p>
                  <div className="space-y-2">
                    {LEAD_STATUSES.slice(0, 9).map((s, i) => {
                      const done = i <= statusOrder
                      const current = i === statusOrder
                      return (
                        <div key={s.key} className="flex items-center gap-3">
                          <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-2xs font-bold ${done ? 'bg-success-100 text-success-700' : 'bg-ink-100 text-ink-400'} ${current ? 'ring-2 ring-success-300' : ''}`}>
                            {done ? '✓' : i + 1}
                          </span>
                          <span className={`text-sm ${done ? 'text-ink-900 font-medium' : 'text-ink-400'}`}>{s.label}</span>
                          {current && <Badge tone="success" size="xs">Current</Badge>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Suggested Tutors" subtitle="Matched to your requirement" action={<Button as={Link} to="/student/tutors" variant="ghost" size="sm">View all →</Button>} />
              <CardBody className="!p-0">
                <ul className="divide-y divide-ink-100">
                  {mockOpportunities.slice(0, 3).map((o) => (
                    <li key={o.id} className="p-5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-ink-900">{o.title}</p>
                        <p className="text-xs text-ink-500">{o.schedule} · {o.budget}</p>
                      </div>
                      <Badge tone="brand" size="sm">{o.matchScore}% match</Badge>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </>
        )}
      </div>
    </>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-500">{label}</p>
      <p className="mt-0.5 font-medium text-ink-900">{value}</p>
    </div>
  )
}

function ClipboardIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="4" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 3h6v3H8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
}
