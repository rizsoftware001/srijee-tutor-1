import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { EmptyState, Stat } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { mockStudents } from '../../data/mockOpportunities.js'
import { formatDateTime } from '../../utils/format.js'

export default function TeacherStudents() {
  return (
    <>
      <Seo path="/teacher/students" title="My Students | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">My Students</h1>
          <p className="mt-2 text-ink-600">Students currently assigned to you.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Active Students" value={mockStudents.length} />
          <Stat label="Online" value={mockStudents.filter((s) => s.mode === 'Online').length} />
          <Stat label="Home" value={mockStudents.filter((s) => s.mode === 'Home').length} />
        </div>
        <Card>
          <CardBody className="!p-0">
            {mockStudents.length === 0 ? (
              <EmptyState title="No students yet" description="Once a parent confirms your demo, the student will appear here." />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                    <tr>
                      <th className="px-5 py-3">Student</th>
                      <th className="px-5 py-3">Class / Board</th>
                      <th className="px-5 py-3">Subject</th>
                      <th className="px-5 py-3">Schedule</th>
                      <th className="px-5 py-3">Mode</th>
                      <th className="px-5 py-3">Next Session</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {mockStudents.map((s) => (
                      <tr key={s.id} className="hover:bg-ink-50/50">
                        <td className="px-5 py-3 font-medium text-ink-900">{s.name}</td>
                        <td className="px-5 py-3 text-ink-700">{s.classLevel}</td>
                        <td className="px-5 py-3 text-ink-700">{s.subject}</td>
                        <td className="px-5 py-3 text-ink-600">{s.schedule}</td>
                        <td className="px-5 py-3"><Badge tone={s.mode === 'Online' ? 'brand' : 'accent'} size="xs">{s.mode}</Badge></td>
                        <td className="px-5 py-3 text-ink-600">{formatDateTime(s.nextSession)}</td>
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
