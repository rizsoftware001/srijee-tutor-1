import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Input, Select } from '../../components/ui/Input.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { TableSkeleton } from '../../components/ui/Skeleton.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { listLeads } from '../../services/leadService.js'
import { LEAD_STATUSES } from '../../data/mockLeads.js'
import { formatRelative } from '../../utils/format.js'

export default function AdminLeads() {
  const [status, setStatus] = useState('ALL')
  const [search, setSearch] = useState('')
  const { data: leads, loading, refetch } = useAsync(
    () => listLeads({ status, search }),
    [status, search]
  )

  return (
    <>
      <Seo path="/admin/leads" title="Leads | Srijee CRM" />
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="h2">Leads</h1>
            <p className="mt-2 text-ink-600">All student tuition requirements — from new to converted.</p>
          </div>
          <Button variant="primary" size="md" onClick={refetch}>Refresh</Button>
        </div>

        {/* Filters */}
        <Card>
          <CardBody className="!py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Search by name, ID, phone, subject…" value={search} onChange={(e) => setSearch(e.target.value)} className="sm:flex-1" leftIcon={<SearchIcon />} />
              <Select value={status} onChange={(e) => setStatus(e.target.value)} className="sm:w-56">
                <option value="ALL">All statuses</option>
                {LEAD_STATUSES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </Select>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="!p-0">
            {loading ? (
              <div className="p-5"><TableSkeleton rows={6} /></div>
            ) : !leads || leads.length === 0 ? (
              <EmptyState
                title="No leads found"
                description={search || status !== 'ALL' ? 'Try adjusting your filters.' : 'Leads from the Find My Tutor form will appear here.'}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                    <tr>
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">Requirement</th>
                      <th className="px-5 py-3">Location</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Counsellor</th>
                      <th className="px-5 py-3">Created</th>
                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {leads.map((l) => {
                      const st = LEAD_STATUSES.find((s) => s.key === l.status)
                      return (
                        <tr key={l.id} className="hover:bg-ink-50/50">
                          <td className="px-5 py-3">
                            <p className="font-medium text-ink-900">{l.name}</p>
                            <p className="text-xs text-ink-500 font-mono">{l.id}</p>
                          </td>
                          <td className="px-5 py-3 text-ink-700">
                            <p>{l.subject}</p>
                            <p className="text-xs text-ink-500">{l.class} · {l.board || 'Any board'}</p>
                          </td>
                          <td className="px-5 py-3 text-ink-700">{l.location}</td>
                          <td className="px-5 py-3"><Badge tone={st?.color || 'ink'} size="sm" dot>{st?.label}</Badge></td>
                          <td className="px-5 py-3 text-ink-700">{l.assignedCounsellor || <span className="text-ink-400">Unassigned</span>}</td>
                          <td className="px-5 py-3 text-ink-600">{formatRelative(l.createdAt)}</td>
                          <td className="px-5 py-3 text-right">
                            <Button as={Link} to={`/admin/leads/${l.id}`} variant="ghost" size="sm">View →</Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  )
}

function SearchIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> }
