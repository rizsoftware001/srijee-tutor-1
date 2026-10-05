import React from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody, CardHeader } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Stat, ProgressBar, EmptyState } from '../../components/ui/States.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { useAsync } from '../../hooks/useAsync.js'
import { getTeacher } from '../../services/teacherService.js'
import { mockOpportunities, mockStudents } from '../../data/mockOpportunities.js'
import { formatRelative, formatINR, formatDateTime } from '../../utils/format.js'

export default function TeacherDashboard() {
  const { user } = useAuth()
  const { data: teacher, loading, error, refetch } = useAsync(
    () => getTeacher(user.userId).catch(() => null),
    [user?.userId]
  )

  return (
    <>
      <Seo path="/teacher/dashboard" title="Teacher Dashboard | Srijee Tutor" />
      <div className="space-y-6">
        {/* Welcome */}
        <div className="card p-6 sm:p-7 bg-brand-gradient text-white">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-brand-100 text-sm">Welcome back,</p>
              <h1 className="font-display text-2xl sm:text-3xl font-bold mt-1">{user?.name || 'Teacher'}</h1>
              <p className="mt-2 text-sm text-brand-100">
                {teacher?.verificationStatus === 'ACTIVE'
                  ? 'Your profile is verified and active. New opportunities await below.'
                  : teacher?.verificationStatus === 'PROFILE_SUBMITTED' || teacher?.verificationStatus === 'UNDER_REVIEW'
                  ? 'Your profile is under review. We will notify you once verified.'
                  : 'Complete your profile to start receiving matched opportunities.'}
              </p>
            </div>
            <Badge tone={statusTone(teacher?.verificationStatus)} size="md" className="bg-white/95">
              {teacher?.verificationStatus || 'REGISTERED'}
            </Badge>
          </div>
          {teacher && teacher.profileCompletion < 100 && (
            <div className="mt-5">
              <div className="flex justify-between text-xs text-brand-100 mb-1.5">
                <span>Profile completion</span>
                <span>{teacher.profileCompletion || 0}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full transition-all" style={{ width: `${teacher.profileCompletion || 0}%` }} />
              </div>
              <div className="mt-3">
                <Link to="/teacher/profile/edit" className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50">
                  Complete Profile →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Active Students" value={mockStudents.length} tone="brand" icon={<UsersIcon />} />
          <Stat label="Open Opportunities" value={mockOpportunities.filter((o) => o.status === 'OPEN').length} tone="accent" icon={<SparkIcon />} />
          <Stat label="This Month" value={formatINR(18500, { compact: true })} hint="Earnings (pending)" tone="success" icon={<WalletIcon />} />
          <Stat label="Rating" value={teacher?.rating || '—'} hint={teacher?.rating ? `${teacher.studentsCount} students taught` : 'No ratings yet'} tone="warning" icon={<StarIcon />} />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Opportunities */}
          <Card className="lg:col-span-2">
            <CardHeader
              title="Matched Opportunities"
              subtitle="Tuition requirements matched to your profile"
              action={<Button as={Link} to="/teacher/opportunities" variant="ghost" size="sm">View all →</Button>}
            />
            <CardBody className="!p-0">
              {loading ? (
                <div className="p-6 space-y-3">{Array.from({length:3}).map((_,i)=><div key={i} className="skeleton h-20" />)}</div>
              ) : mockOpportunities.length === 0 ? (
                <EmptyState title="No opportunities yet" description="Once your profile is verified, matched opportunities will appear here." />
              ) : (
                <ul className="divide-y divide-ink-100">
                  {mockOpportunities.slice(0, 3).map((o) => (
                    <li key={o.id} className="p-5 hover:bg-ink-50/60">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-ink-900">{o.title}</p>
                            <Badge tone={o.status === 'OPEN' ? 'success' : 'ink'} size="xs">{o.status}</Badge>
                          </div>
                          <p className="mt-1 text-xs text-ink-500">{o.schedule}</p>
                          <div className="mt-2 flex flex-wrap gap-2 text-xs text-ink-600">
                            <span className="chip bg-ink-100">{o.mode}</span>
                            <span className="chip bg-brand-50 text-brand-700">{o.budget}</span>
                            {o.distanceKm && <span className="chip bg-accent-50 text-accent-700">{o.distanceKm} km away</span>}
                            <span className="chip bg-success-50 text-success-700">{o.matchScore}% match</span>
                          </div>
                        </div>
                        <Button as={Link} to="/teacher/opportunities" variant="secondary" size="sm">View</Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>

          {/* Upcoming */}
          <Card>
            <CardHeader title="Upcoming Classes" subtitle="Next 7 days" />
            <CardBody className="!p-0">
              {mockStudents.length === 0 ? (
                <EmptyState title="No upcoming classes" />
              ) : (
                <ul className="divide-y divide-ink-100">
                  {mockStudents.slice(0, 4).map((s) => (
                    <li key={s.id} className="p-4">
                      <p className="text-sm font-semibold text-ink-900">{s.name}</p>
                      <p className="text-xs text-ink-500">{s.subject} · {s.classLevel}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-xs text-ink-600">{formatDateTime(s.nextSession)}</p>
                        <Badge tone="brand" size="xs">{s.mode}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

function statusTone(s) {
  return {
    REGISTERED: 'ink',
    PROFILE_INCOMPLETE: 'warning',
    PROFILE_SUBMITTED: 'brand',
    UNDER_REVIEW: 'warning',
    VERIFIED: 'success',
    ACTIVE: 'success',
    REJECTED: 'danger',
    SUSPENDED: 'danger',
    INACTIVE: 'ink',
  }[s] || 'ink'
}

function UsersIcon() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1.5 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> }
function SparkIcon() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.5 4.5L15 8l-4.5 1.5L9 14l-1.5-4.5L3 8l4.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg> }
function WalletIcon() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="4.5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2.5 7.5h13" stroke="currentColor" strokeWidth="1.5"/></svg> }
function StarIcon() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l2 5 5 .5-3.5 3.5L13 16l-4-2.5L5 16l.5-5L2 7.5l5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg> }
