import React from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Stat } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { listLeads } from '../../services/leadService.js'
import { listTeachers } from '../../services/teacherService.js'
import { LEAD_STATUSES } from '../../data/mockLeads.js'
import { TEACHER_STATUSES } from '../../data/mockTeachers.js'
import { formatRelative } from '../../utils/format.js'

export default function AdminDashboard() {
  const { data: leads } = useAsync(() => listLeads(), [])
  const { data: teachers } = useAsync(() => listTeachers(), [])

  const newLeads = (leads || []).filter((l) => l.status === 'NEW').length
  const inProgress = (leads || []).filter((l) => !['NEW', 'CONVERTED', 'LOST'].includes(l.status)).length
  const converted = (leads || []).filter((l) => l.status === 'CONVERTED').length
  const activeTeachers = (teachers || []).filter((t) => t.verificationStatus === 'ACTIVE').length
  const pendingTeachers = (teachers || []).filter((t) => ['PROFILE_SUBMITTED', 'UNDER_REVIEW'].includes(t.verificationStatus)).length

  // Pipeline distribution
  const pipeline = LEAD_STATUSES.map((s) => ({
    ...s,
    count: (leads || []).filter((l) => l.status === s.key).length,
  }))

  return (
    <>
      <Seo path="/admin/dashboard" title="CRM Dashboard | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">CRM Dashboard</h1>
          <p className="mt-2 text-ink-600">Real-time overview of leads, tutors, and pipeline.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="New Leads" value={newLeads} tone="brand" hint="Need first contact" />
          <Stat label="In Progress" value={inProgress} tone="warning" hint="Active pipeline" />
          <Stat label="Converted" value={converted} tone="success" hint="Tuition started" />
          <Stat label="Active Tutors" value={activeTeachers} tone="accent" hint={`${pendingTeachers} pending verification`} />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Pipeline */}
          <Card className="lg:col-span-2">
            <CardHeader
              title="Lead Pipeline"
              subtitle="Distribution by status"
              action={<Button as={Link} to="/admin/leads" variant="ghost" size="sm">View all →</Button>}
            />
            <CardBody>
              <div className="space-y-3">
                {pipeline.map((p) => {
                  const max = Math.max(...pipeline.map((x) => x.count), 1)
                  const pct = (p.count / max) * 100
                  return (
                    <div key={p.key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ink-700">{p.label}</span>
                        <span className="font-semibold text-ink-900">{p.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-ink-100 overflow-hidden">
                        <div className={`h-full rounded-full bg-${p.color}-500`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardBody>
          </Card>

          {/* Recent leads */}
          <Card>
            <CardHeader title="Recent Leads" />
            <CardBody className="!p-0">
              <ul className="divide-y divide-ink-100">
                {(leads || []).slice(0, 5).map((l) => (
                  <li key={l.id} className="p-4">
                    <Link to={`/admin/leads/${l.id}`} className="block hover:bg-ink-50/50 -m-4 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-ink-900">{l.name}</p>
                        <Badge tone={LEAD_STATUSES.find((s) => s.key === l.status)?.color || 'ink'} size="xs">{LEAD_STATUSES.find((s) => s.key === l.status)?.label}</Badge>
                      </div>
                      <p className="text-xs text-ink-500">{l.subject} · {l.class} · {l.location}</p>
                      <p className="text-xs text-ink-400 mt-1">{formatRelative(l.createdAt)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Pending tutor verifications */}
        {pendingTeachers > 0 && (
          <Card>
            <CardHeader
              title="Pending Tutor Verifications"
              subtitle={`${pendingTeachers} tutor(s) awaiting review`}
              action={<Button as={Link} to="/admin/teachers" variant="ghost" size="sm">View all →</Button>}
            />
            <CardBody className="!p-0">
              <ul className="divide-y divide-ink-100">
                {(teachers || []).filter((t) => ['PROFILE_SUBMITTED', 'UNDER_REVIEW'].includes(t.verificationStatus)).map((t) => (
                  <li key={t.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-ink-900">{t.name}</p>
                      <p className="text-xs text-ink-500">{t.qualification} · {t.subjects?.join(', ')}</p>
                    </div>
                    <Button as={Link} to={`/admin/teachers/${t.id}`} variant="secondary" size="sm">Review</Button>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}
