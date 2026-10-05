import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { Select } from '../../components/ui/Input.jsx'
import { listLeads } from '../../services/leadService.js'
import { matchTutors } from '../../services/tutorService.js'
import { useToast } from '../../context/ToastContext.jsx'

export default function TutorMatching() {
  const [leads, setLeads] = useState([])
  const [selectedLead, setSelectedLead] = useState(null)
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [matching, setMatching] = useState(false)
  const toast = useToast()

  useEffect(() => {
    listLeads({ status: 'REQUIREMENT_VERIFIED' })
      .then((l) => { setLeads(l); setSelectedLead(l[0] || null); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!selectedLead) { setMatches([]); return }
    setMatching(true)
    matchTutors({
      class: selectedLead.class,
      board: selectedLead.board,
      subject: selectedLead.subject,
      location: selectedLead.location,
      mode: selectedLead.mode,
    }).then((m) => { setMatches(m); setMatching(false) })
  }, [selectedLead?.id])

  const assign = (tutor) => toast.success(`${tutor.tutor?.name} shortlisted for ${selectedLead.name}. Demo request initiated.`)

  if (loading) return <div className="skeleton h-96" />

  return (
    <>
      <Seo path="/admin/matching" title="Tutor Matching | Srijee CRM" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Tutor Matching</h1>
          <p className="mt-2 text-ink-600">Pick a verified lead, see matched tutors, and shortlist for demo.</p>
        </div>

        <Card>
          <CardHeader title="Select Lead" />
          <CardBody>
            <Select value={selectedLead?.id || ''} onChange={(e) => setSelectedLead(leads.find((l) => l.id === e.target.value))} placeholder="Choose a verified lead">
              {leads.map((l) => <option key={l.id} value={l.id}>{l.id} — {l.name} — {l.subject} ({l.class})</option>)}
            </Select>
          </CardBody>
        </Card>

        {selectedLead && (
          <Card>
            <CardHeader
              title="Matched Tutors"
              subtitle={`For ${selectedLead.name} — ${selectedLead.subject} · ${selectedLead.class} · ${selectedLead.location} · ${selectedLead.mode}`}
            />
            <CardBody className="!p-0">
              {matching ? (
                <div className="p-5 space-y-3">{Array.from({length:3}).map((_,i)=><div key={i} className="skeleton h-24" />)}</div>
              ) : matches.length === 0 ? (
                <EmptyState title="No matches found" description="Try lowering the criteria or expanding the location." />
              ) : (
                <ul className="divide-y divide-ink-100">
                  {matches.map(({ tutor, score, reasons }) => (
                    <li key={tutor.id} className="p-5 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-ink-900">{tutor.name}</p>
                          <Badge tone="success" size="xs">{score}% match</Badge>
                          {tutor.rating && <Badge tone="warning" size="xs">★ {tutor.rating}</Badge>}
                        </div>
                        <p className="mt-0.5 text-xs text-ink-500">{tutor.qualification} · {tutor.experience} · {tutor.locality}</p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {reasons.map((r) => <li key={r} className="chip bg-success-50 text-success-700">{r}</li>)}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="primary" onClick={() => assign({ tutor })}>Shortlist</Button>
                        <Button as={Link} to={`/admin/teachers/${tutor.id}`} size="sm" variant="ghost">Profile</Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}
