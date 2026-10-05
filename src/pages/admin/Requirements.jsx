import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { listLeads } from '../../services/leadService.js'
import { formatDateTime } from '../../utils/format.js'

export default function AdminRequirements() {
  const { data: leads } = useAsync(() => listLeads(), [])
  return (
    <>
      <Seo path="/admin/requirements" title="Requirements | Srijee CRM" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Requirements</h1>
          <p className="mt-2 text-ink-600">All submitted tuition requirements, with full details.</p>
        </div>
        <Card>
          <CardBody className="!p-0">
            {!leads || leads.length === 0 ? (
              <EmptyState title="No requirements yet" />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                    <tr>
                      <th className="px-5 py-3">ID</th>
                      <th className="px-5 py-3">Class / Board</th>
                      <th className="px-5 py-3">Subject</th>
                      <th className="px-5 py-3">Location</th>
                      <th className="px-5 py-3">Mode</th>
                      <th className="px-5 py-3">Budget</th>
                      <th className="px-5 py-3">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {leads.map((l) => (
                      <tr key={l.id} className="hover:bg-ink-50/50">
                        <td className="px-5 py-3 font-mono text-ink-700">{l.id}</td>
                        <td className="px-5 py-3 text-ink-700">{l.class} · {l.board || 'Any'}</td>
                        <td className="px-5 py-3 font-medium text-ink-900">{l.subject}</td>
                        <td className="px-5 py-3 text-ink-700">{l.location}</td>
                        <td className="px-5 py-3 text-ink-700">{l.mode}</td>
                        <td className="px-5 py-3 text-ink-700">{l.budget || '—'}</td>
                        <td className="px-5 py-3 text-ink-600">{formatDateTime(l.createdAt)}</td>
                      </tr>
                    ))}
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
