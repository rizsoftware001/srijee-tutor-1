import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { EmptyState, ProgressBar } from '../../components/ui/States.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { getTeacher, setVerificationStatus } from '../../services/teacherService.js'
import { TEACHER_STATUSES } from '../../data/mockTeachers.js'
import { useToast } from '../../context/ToastContext.jsx'
import { formatDate } from '../../utils/format.js'

export default function AdminTeacherDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { data: teacher, loading, refetch } = useAsync(() => getTeacher(id), [id])

  const setStatus = async (newStatus) => {
    await setVerificationStatus(teacher.id, newStatus)
    toast.success(`Status updated to ${newStatus.replace(/_/g, ' ')}.`)
    refetch()
  }

  if (loading) return <div className="skeleton h-96" />
  if (!teacher) return <EmptyState title="Teacher not found" action={<Button onClick={() => navigate('/admin/teachers')} variant="secondary">Back to teachers</Button>} />

  const st = TEACHER_STATUSES.find((s) => s.key === teacher.verificationStatus)

  return (
    <>
      <Seo path={`/admin/teachers/${id}`} title={`${teacher.name} | Srijee CRM`} />
      <div className="space-y-6">
        <div>
          <Link to="/admin/teachers" className="text-sm text-ink-500 hover:text-brand-700">← All teachers</Link>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-xl font-display font-bold text-brand-700">
                {teacher.name?.split(' ').map((p)=>p[0]).slice(0,2).join('')}
              </div>
              <div>
                <h1 className="h2">{teacher.name}</h1>
                <p className="text-sm text-ink-500 font-mono">{teacher.id} · joined {formatDate(teacher.createdAt)}</p>
              </div>
            </div>
            <Badge tone={st?.color || 'ink'} size="md" dot>{st?.label}</Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader title="Profile" />
            <CardBody>
              <div className="mb-5">
                <p className="text-xs text-ink-500 mb-1.5">Profile completion</p>
                <ProgressBar value={teacher.profileCompletion || 0} tone={teacher.profileCompletion === 100 ? 'success' : 'brand'} showLabel />
              </div>
              <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                <Detail label="Qualification" value={teacher.qualification} />
                <Detail label="Specialisation" value={teacher.specialization} />
                <Detail label="Institution" value={teacher.institution} />
                <Detail label="Experience" value={teacher.experience} />
                <Detail label="Subjects" value={(teacher.subjects || []).join(', ')} />
                <Detail label="Classes" value={(teacher.classes || []).join(', ')} />
                <Detail label="Boards" value={(teacher.boards || []).join(', ')} />
                <Detail label="Modes" value={(teacher.teachingModes || []).join(', ')} />
                <Detail label="Preferred Locations" value={(teacher.preferredLocations || []).join(', ')} />
                <Detail label="Availability" value={teacher.availability} />
                <Detail label="Expected Fee" value={teacher.expectedFee ? `₹${teacher.expectedFee}/hour` : '—'} />
                <Detail label="Rating" value={teacher.rating ? `★ ${teacher.rating} (${teacher.studentsCount} students)` : '—'} />
              </dl>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Contact" />
            <CardBody className="space-y-3 text-sm">
              <Detail label="Mobile" value={teacher.mobile} />
              <Detail label="Email" value={teacher.email || '—'} />
              <Detail label="City" value={teacher.city} />
              <Detail label="Locality" value={teacher.locality} />
              <Detail label="Gender" value={teacher.gender || '—'} />
            </CardBody>
          </Card>
        </div>

        {['PROFILE_SUBMITTED', 'UNDER_REVIEW'].includes(teacher.verificationStatus) && (
          <Card>
            <CardHeader title="Verification Actions" subtitle="Review documents and approve or reject this tutor" />
            <CardBody className="flex flex-wrap gap-3">
              <Button variant="success" onClick={() => setStatus('VERIFIED')}>Approve & Verify</Button>
              <Button variant="danger" onClick={() => setStatus('REJECTED')}>Reject</Button>
              <Button variant="secondary" onClick={() => setStatus('UNDER_REVIEW')}>Mark Under Review</Button>
            </CardBody>
          </Card>
        )}

        {teacher.verificationStatus === 'VERIFIED' && (
          <Card>
            <CardHeader title="Activation" />
            <CardBody className="flex flex-wrap gap-3">
              <Button variant="success" onClick={() => setStatus('ACTIVE')}>Activate (enable matching)</Button>
              <Button variant="secondary" onClick={() => setStatus('INACTIVE')}>Deactivate</Button>
              <Button variant="danger" onClick={() => setStatus('SUSPENDED')}>Suspend</Button>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900 break-words">{value || '—'}</dd>
    </div>
  )
}
