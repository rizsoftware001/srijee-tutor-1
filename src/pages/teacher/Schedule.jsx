import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { EmptyState } from '../../components/ui/States.jsx'

export default function TeacherSchedule() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const slots = ['4–5 PM', '5–6 PM', '6–7 PM', '7–8 PM', '8–9 PM']
  // Mock schedule
  const grid = {
    Mon: { '6–7 PM': 'A. Das — Mathematics — Class 10' },
    Wed: { '6–7 PM': 'A. Das — Mathematics — Class 10' },
    Fri: { '6–7 PM': 'A. Das — Mathematics — Class 10' },
    Tue: { '7–8 PM': 'B. Roy — Physics — Class 12' },
    Thu: { '7–8 PM': 'B. Roy — Physics — Class 12' },
    Sat: { '7–8 PM': 'B. Roy — Physics — Class 12' },
    Sun: { '10–11 AM': 'C. Mitra — Physics (NEET) — Class 11', '11–12 PM': 'C. Mitra — Physics (NEET) — Class 11' },
  }
  return (
    <>
      <Seo path="/teacher/schedule" title="My Schedule | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">My Schedule</h1>
          <p className="mt-2 text-ink-600">Weekly calendar of your tuition sessions.</p>
        </div>
        <Card>
          <CardBody>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-1">
                <thead>
                  <tr>
                    <th className="w-24"></th>
                    {days.map((d) => <th key={d} className="px-2 py-2 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">{d}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {slots.map((s) => (
                    <tr key={s}>
                      <td className="px-2 py-2 text-xs font-medium text-ink-600 text-right">{s}</td>
                      {days.map((d) => {
                        const cls = grid[d]?.[s]
                        return (
                          <td key={d} className="p-1">
                            {cls ? (
                              <div className="rounded-lg bg-brand-50 border border-brand-200 px-2 py-1.5 text-xs text-brand-900">
                                {cls}
                              </div>
                            ) : (
                              <div className="h-12 rounded-lg bg-ink-50" />
                            )}
                          </td>
                        )
                      })}
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
