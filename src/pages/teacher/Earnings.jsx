import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Stat, EmptyState } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { mockEarnings } from '../../data/mockOpportunities.js'
import { formatINR, formatDate } from '../../utils/format.js'

export default function TeacherEarnings() {
  const total = mockEarnings.reduce((a, b) => a + b.amount, 0)
  const pending = mockEarnings.filter((e) => e.status === 'PENDING').reduce((a, b) => a + b.amount, 0)
  const paid = mockEarnings.filter((e) => e.status === 'PAID').reduce((a, b) => a + b.amount, 0)

  return (
    <>
      <Seo path="/teacher/earnings" title="Earnings | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Earnings</h1>
          <p className="mt-2 text-ink-600">Monthly payout summary. Demo data shown.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Total Earnings" value={formatINR(total, { compact: true })} tone="brand" />
          <Stat label="Paid Out" value={formatINR(paid, { compact: true })} tone="success" />
          <Stat label="Pending" value={formatINR(pending, { compact: true })} tone="warning" />
        </div>
        <Card>
          <CardHeader title="Payout History" />
          <CardBody className="!p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                  <tr>
                    <th className="px-5 py-3">Month</th>
                    <th className="px-5 py-3">Students</th>
                    <th className="px-5 py-3">Amount</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {mockEarnings.map((e) => (
                    <tr key={e.month} className="hover:bg-ink-50/50">
                      <td className="px-5 py-3 font-medium text-ink-900">{e.month}</td>
                      <td className="px-5 py-3 text-ink-700">{e.students}</td>
                      <td className="px-5 py-3 font-semibold text-ink-900">{formatINR(e.amount)}</td>
                      <td className="px-5 py-3"><Badge tone={e.status === 'PAID' ? 'success' : 'warning'} size="sm">{e.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
