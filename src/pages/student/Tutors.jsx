import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { matchTutors } from '../../services/tutorService.js'
import { useAsync } from '../../hooks/useAsync.js'
import { listLeads } from '../../services/leadService.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useToast } from '../../context/ToastContext.jsx'

export default function SuggestedTutors() {
  const { user } = useAuth()
  const toast = useToast()

  const { data: leads } = useAsync(() => listLeads({ search: user?.mobile }), [user?.mobile])
  const lead = leads?.[0]

  const matchReq = useMemo(() => ({
    class: lead?.class,
    board: lead?.board,
    subject: lead?.subject,
    location: lead?.location,
    mode: lead?.mode,
  }), [lead])

  const { data: matches, loading } = useAsync(
    () => matchReq.subject ? matchTutors(matchReq) : Promise.resolve([]),
    [matchReq.subject, matchReq.class, matchReq.location, matchReq.mode]
  )

  const bookDemo = (tutor) => toast.success(`Demo request sent to ${tutor.tutor?.name || 'tutor'}. Our counsellor will confirm the slot.`)

  if (!lead) {
    return (
      <>
        <Seo path="/student/tutors" title="Suggested Tutors | Srijee Tutor" />
        <EmptyState
          title="No requirement yet"
          description="Submit a tuition requirement first — we’ll match you with verified tutors."
          action={<Button as={Link} to="/student/requirement" variant="primary">Find My Tutor</Button>}
        />
      </>
    )
  }

  return (
    <>
      <Seo path="/student/tutors" title="Suggested Tutors | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Suggested Tutors</h1>
          <p className="mt-2 text-ink-600">Matched to your requirement: {lead.class} · {lead.subject} · {lead.location} · {lead.mode}</p>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2">{Array.from({length:4}).map((_,i)=><div key={i} className="skeleton h-64" />)}</div>
        ) : !matches || matches.length === 0 ? (
          <EmptyState title="No matches yet" description="We're still searching for tutors that match your requirement. A counsellor will reach out shortly." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {matches.map(({ tutor, score, reasons }) => (
              <Card key={tutor.id} hover>
                <CardBody>
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700 font-display font-bold">
                      {tutor.name?.split(' ').map((p)=>p[0]).slice(0,2).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-base font-semibold text-ink-900">{tutor.name}</h3>
                          <p className="text-xs text-ink-500">{tutor.qualification}</p>
                        </div>
                        <Badge tone="success" size="sm">{score}% match</Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {tutor.subjects?.slice(0,3).map((s) => <Badge key={s} tone="brand" size="xs">{s}</Badge>)}
                        {tutor.boards?.slice(0,2).map((b) => <Badge key={b} tone="ink" size="xs">{b}</Badge>)}
                      </div>
                      {tutor.rating && <p className="mt-2 text-xs text-ink-600">★ {tutor.rating} · {tutor.studentsCount} students · {tutor.experience}</p>}
                      <ul className="mt-3 space-y-1">
                        {reasons.map((r) => (
                          <li key={r} className="flex items-center gap-1.5 text-xs text-success-700">
                            <span className="h-1 w-1 rounded-full bg-success-500" /> {r}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="primary" onClick={() => bookDemo({ tutor })}>Book Demo</Button>
                        <Button size="sm" variant="secondary">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
