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
import { listTeachers } from '../../services/teacherService.js'
import { TEACHER_STATUSES } from '../../data/mockTeachers.js'
import { formatRelative } from '../../utils/format.js'

export default function AdminTeachers() {
  const [status, setStatus] = useState('ALL')
  const [search, setSearch] = useState('')
  const { data: teachers, loading, refetch } = useAsync(
    () => listTeachers({ status, search }),
    [status, search]
  )

  return (
    <>
      <Seo path="/admin/teachers" title="Teachers | Srijee CRM" />
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="h2">Teachers</h1>
            <p className="mt-2 text-ink-600">All registered tutors — review, verify, and manage.</p>
          </div>
          <Button variant="primary" size="md" onClick={refetch}>Refresh</Button>
        </div>

        <Card>
          <CardBody className="!py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Search by name, ID, mobile, subject…" value={search} onChange={(e) => setSearch(e.target.value)} className="sm:flex-1" leftIcon={<SearchIcon />} />
              <Select value={status} onChange={(e) => setStatus(e.target.value)} className="sm:w-56">
                <option value="ALL">All statuses</option>
                {TEACHER_STATUSES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </Select>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="!p-0">
            {loading ? (
              <div className="p-5"><TableSkeleton rows={6} /></div>
            ) : !teachers || teachers.length === 0 ? (
              <EmptyState title="No teachers found" description="Try adjusting your filters." />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ink-50 text-left text-xs uppercase tracking-wider text-ink-500">
                    <tr>
                      <th className="px-5 py-3">Teacher</th>
                      <th className="px-5 py-3">Subjects</th>
                      <th className="px-5 py-3">Location</th>
                      <th className="px-5 py-3">Profile</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Joined</th>
                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {teachers.map((t) => {
                      const st = TEACHER_STATUSES.find((s) => s.key === t.verificationStatus)
                      return (
                        <tr key={t.id} className="hover:bg-ink-50/50">
                          <td className="px-5 py-3">
                            <p className="font-medium text-ink-900">{t.name}</p>
                            <p className="text-xs text-ink-500 font-mono">{t.id} · {t.mobile}</p>
                          </td>
                          <td className="px-5 py-3 text-ink-700">{(t.subjects || []).slice(0,2).join(', ')}{t.subjects?.length > 2 && '…'}</td>
                          <td className="px-5 py-3 text-ink-700">{t.locality || '—'}</td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-500" style={{ width: `${t.profileCompletion || 0}%` }} />
                              </div>
                              <span className="text-xs text-ink-600">{t.profileCompletion || 0}%</span>
                            </div>
                          </td>
                          <td className="px-5 py-3"><Badge tone={st?.color || 'ink'} size="sm" dot>{st?.label}</Badge></td>
                          <td className="px-5 py-3 text-ink-600">{formatRelative(t.createdAt)}</td>
                          <td className="px-5 py-3 text-right">
                            <Button as={Link} to={`/admin/teachers/${t.id}`} variant="ghost" size="sm">View →</Button>
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
