import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Select, Textarea, Field } from '../../components/ui/Input.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { getLead, updateLeadStatus, assignCounsellor, setNextFollowUp } from '../../services/leadService.js'
import { LEAD_STATUSES } from '../../data/mockLeads.js'
import { useToast } from '../../context/ToastContext.jsx'
import { formatDateTime, formatDate } from '../../utils/format.js'

export default function AdminLeadDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { data: lead, loading, refetch } = useAsync(() => getLead(id), [id])
  const [status, setStatus] = useState('')
  const [counsellor, setCounsellor] = useState('')
  const [followUp, setFollowUp] = useState('')
  const [notes, setNotes] = useState('')

  React.useEffect(() => {
    if (lead) {
      setStatus(lead.status)
      setCounsellor(lead.assignedCounsellor || '')
      setFollowUp(lead.nextFollowUp ? lead.nextFollowUp.slice(0, 16) : '')
      setNotes(lead.notes || '')
    }
  }, [lead])

  if (loading) return <div className="skeleton h-96" />
  if (!lead) return <EmptyState title="Lead not found" action={<Button onClick={() => navigate('/admin/leads')} variant="secondary">Back to leads</Button>} />

  const st = LEAD_STATUSES.find((s) => s.key === lead.status)

  const saveStatus = async () => {
    await updateLeadStatus(lead.id, status, notes)
    toast.success('Lead updated.')
    refetch()
  }
  const saveCounsellor = async () => {
    await assignCounsellor(lead.id, counsellor || null)
    toast.success('Counsellor assigned.')
    refetch()
  }
  const saveFollowUp = async () => {
    await setNextFollowUp(lead.id, followUp ? new Date(followUp).toISOString() : null)
    toast.success('Follow-up scheduled.')
    refetch()
  }

  return (
    <>
      <Seo path={`/admin/leads/${id}`} title={`${lead.id} — ${lead.name} | Srijee CRM`} />
      <div className="space-y-6">
        <div>
          <Link to="/admin/leads" className="text-sm text-ink-500 hover:text-brand-700">← All leads</Link>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="h2">{lead.name}</h1>
              <p className="mt-1 text-sm text-ink-500 font-mono">{lead.id}</p>
            </div>
            <Badge tone={st?.color || 'ink'} size="md" dot>{st?.label}</Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader title="Requirement" />
            <CardBody>
              <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                <Detail label="Class" value={lead.class} />
                <Detail label="Board" value={lead.board || '—'} />
                <Detail label="Subject" value={lead.subject} />
                <Detail label="Location" value={lead.location} />
                <Detail label="Mode" value={lead.mode} />
                <Detail label="Preferred Time" value={lead.preferredTime || '—'} />
                <Detail label="Budget" value={lead.budget || '—'} />
                <Detail label="Source" value={lead.source} />
              </dl>
              {lead.notes && <div className="mt-4 rounded-lg bg-ink-50 p-3 text-sm text-ink-700">{lead.notes}</div>}
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Contact" />
            <CardBody className="space-y-3 text-sm">
              <Detail label="Phone" value={lead.phone} />
              <Detail label="Email" value={lead.email || '—'} />
              <Detail label="Created" value={formatDateTime(lead.createdAt)} />
              <Detail label="Last Follow-up" value={lead.lastFollowUp ? formatDateTime(lead.lastFollowUp) : '—'} />
              <Detail label="Next Follow-up" value={lead.nextFollowUp ? formatDateTime(lead.nextFollowUp) : '—'} />
            </CardBody>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader title="Update Status" />
            <CardBody className="space-y-3">
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                {LEAD_STATUSES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </Select>
              <Button variant="primary" size="sm" onClick={saveStatus}>Save Status</Button>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Assign Counsellor" />
            <CardBody className="space-y-3">
              <Select value={counsellor} onChange={(e) => setCounsellor(e.target.value)} placeholder="Unassigned">
                <option value="Priya M.">Priya M.</option>
                <option value="Arnab D.">Arnab D.</option>
                <option value="Sourav B.">Sourav B.</option>
              </Select>
              <Button variant="primary" size="sm" onClick={saveCounsellor}>Save</Button>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Schedule Follow-up" />
            <CardBody className="space-y-3">
              <Field label="Next follow-up date & time">
                <input type="datetime-local" value={followUp} onChange={(e) => setFollowUp(e.target.value)} className="input" />
              </Field>
              <Button variant="primary" size="sm" onClick={saveFollowUp}>Schedule</Button>
            </CardBody>
          </Card>
        </div>

        <Card>
          <CardHeader title="Notes" />
          <CardBody className="space-y-3">
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} placeholder="Add internal notes about this lead…" />
            <Button variant="secondary" size="sm" onClick={saveStatus}>Save Notes</Button>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900 break-words">{value}</dd>
    </div>
  )
}
