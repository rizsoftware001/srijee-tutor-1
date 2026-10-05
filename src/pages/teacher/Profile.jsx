import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Stat, ProgressBar, EmptyState } from '../../components/ui/States.jsx'
import { Badge as B } from '../../components/ui/Badge.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { getTeacher } from '../../services/teacherService.js'
import { Link } from 'react-router-dom'

export default function TeacherProfile() {
  const { user } = useAuth()
  const { data: teacher, loading } = useAsync(
    () => getTeacher(user.userId).catch(() => null),
    [user?.userId]
  )

  if (loading) return <div className="skeleton h-96" />
  if (!teacher) return <EmptyState title="Profile not found" description="If this persists, please log out and register again." />

  return (
    <>
      <Seo path="/teacher/profile" title="My Profile | Srijee Tutor" />
      <div className="space-y-6">
        <div className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-2xl font-display font-bold text-brand-700">
                {teacher.name?.split(' ').map((p) => p[0]).slice(0,2).join('') || '?'}
              </div>
              <div>
                <h1 className="h3">{teacher.name}</h1>
                <p className="text-sm text-ink-500">{teacher.qualification || 'No qualification added'}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <B tone={teacher.verificationStatus === 'ACTIVE' ? 'success' : 'warning'} size="sm" dot>
                    {teacher.verificationStatus?.replace(/_/g, ' ')}
                  </B>
                  {teacher.rating && <B tone="warning" size="sm">★ {teacher.rating}</B>}
                </div>
              </div>
            </div>
            <Button as={Link} to="/teacher/profile/edit" variant="secondary">Edit Profile</Button>
          </div>
          <div className="mt-5">
            <div className="flex justify-between text-xs text-ink-500 mb-1.5">
              <span>Profile completion</span><span>{teacher.profileCompletion || 0}%</span>
            </div>
            <ProgressBar value={teacher.profileCompletion || 0} tone={teacher.profileCompletion === 100 ? 'success' : 'brand'} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Subjects" value={(teacher.subjects || []).length} />
          <Stat label="Classes" value={(teacher.classes || []).length} />
          <Stat label="Students" value={teacher.studentsCount || 0} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader title="Teaching Details" />
            <CardBody className="space-y-4">
              <Row label="Subjects" value={(teacher.subjects || []).join(', ') || '—'} />
              <Row label="Classes" value={(teacher.classes || []).join(', ') || '—'} />
              <Row label="Boards" value={(teacher.boards || []).join(', ') || '—'} />
              <Row label="Modes" value={(teacher.teachingModes || []).join(', ') || '—'} />
              <Row label="Preferred Locations" value={(teacher.preferredLocations || []).join(', ') || '—'} />
              <Row label="Availability" value={teacher.availability || '—'} />
              <Row label="Expected Fee" value={teacher.expectedFee ? `₹${teacher.expectedFee}/hour` : '—'} />
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Personal & Education" />
            <CardBody className="space-y-4">
              <Row label="Mobile" value={teacher.mobile} />
              <Row label="Email" value={teacher.email || '—'} />
              <Row label="City" value={teacher.city || '—'} />
              <Row label="Locality" value={teacher.locality || '—'} />
              <Row label="Qualification" value={teacher.qualification || '—'} />
              <Row label="Specialisation" value={teacher.specialization || '—'} />
              <Row label="Institution" value={teacher.institution || '—'} />
              <Row label="Experience" value={teacher.experience || '—'} />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-ink-100 last:border-0">
      <dt className="text-sm text-ink-500">{label}</dt>
      <dd className="text-sm font-medium text-ink-900 text-right">{value}</dd>
    </div>
  )
}
