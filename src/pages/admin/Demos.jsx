import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState } from '../../components/ui/States.jsx'
import { formatDate } from '../../utils/format.js'

export default function AdminDemos() {
  // Demo data for demos
  const demos = [
    { id: 'DM-01', lead: 'LD-2047 — Sanghamitra Roy', tutor: 'Sourav Banerjee', subject: 'Physics', when: '2025-09-23T11:00:00Z', status: 'SCHEDULED' },
    { id: 'DM-02', lead: 'LD-2046 — Anirban Sen', tutor: 'Priyanka Saha', subject: 'All Subjects', when: '2025-09-19T10:00:00Z', status: 'COMPLETED' },
    { id: 'DM-03', lead: 'LD-2044 — Subhankar Mitra', tutor: 'Madhuri Mondal', subject: 'Mathematics', when: '2025-09-18T15:00:00Z', status: 'COMPLETED' },
  ]
  return (
    <>
      <Seo path="/admin/demos" title="Demo Classes | Srijee CRM" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Demo Classes</h1>
          <p className="mt-2 text-ink-600">Trial sessions between shortlisted tutors and parents.</p>
        </div>
        <Card>
          <CardBody className="!p-0">
            {demos.length === 0 ? (
              <EmptyState title="No demos scheduled" />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                    <tr>
                      <th className="px-5 py-3">Demo ID</th>
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">Tutor</th>
                      <th className="px-5 py-3">Subject</th>
                      <th className="px-5 py-3">When</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {demos.map((d) => (
                      <tr key={d.id} className="hover:bg-ink-50/50">
                        <td className="px-5 py-3 font-mono text-ink-700">{d.id}</td>
                        <td className="px-5 py-3 text-ink-700">{d.lead}</td>
                        <td className="px-5 py-3 font-medium text-ink-900">{d.tutor}</td>
                        <td className="px-5 py-3 text-ink-700">{d.subject}</td>
                        <td className="px-5 py-3 text-ink-600">{formatDate(d.when)}</td>
                        <td className="px-5 py-3"><Badge tone={d.status === 'COMPLETED' ? 'success' : 'warning'} size="sm" dot>{d.status}</Badge></td>
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
