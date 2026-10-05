/**
 * teacherService — teacher registration, profile, verification.
 */

import { apiClient } from './apiClient.js'
import { mockTeachers } from '../data/mockTeachers.js'

apiClient.seed('teachers', mockTeachers)

export async function listTeachers({ status, search } = {}) {
  let teachers = await apiClient.get('teachers')
  if (status && status !== 'ALL') teachers = teachers.filter((t) => t.verificationStatus === status)
  if (search) {
    const q = search.toLowerCase()
    teachers = teachers.filter(
      (t) =>
        t.name?.toLowerCase().includes(q) ||
        t.id?.toLowerCase().includes(q) ||
        t.mobile?.includes(q) ||
        t.subjects?.some((s) => s.toLowerCase().includes(q)) ||
        t.locality?.toLowerCase().includes(q)
    )
  }
  return teachers
}

export async function getTeacher(id) {
  return apiClient.get('teachers', { id })
}

export async function getTeacherByMobile(mobile) {
  const all = await apiClient.get('teachers')
  return all.find((t) => t.mobile === mobile) || null
}

export async function updateTeacher(id, patch) {
  // Recompute profile completion if a step is being saved
  if (patch.stepCompleted) {
    const cur = await apiClient.get('teachers', { id })
    const completed = new Set(cur.stepsCompleted || [])
    completed.add(patch.stepCompleted)
    delete patch.stepCompleted
    patch.stepsCompleted = Array.from(completed)
    patch.profileCompletion = Math.min(100, completed.size * 20) // 5 steps × 20%
    if (patch.profileCompletion === 100 && cur.verificationStatus === 'REGISTERED') {
      patch.verificationStatus = 'PROFILE_SUBMITTED'
    }
  }
  return apiClient.patch('teachers', id, patch)
}

export async function submitTeacherProfile(id) {
  return apiClient.patch('teachers', id, {
    verificationStatus: 'PROFILE_SUBMITTED',
    profileSubmittedAt: new Date().toISOString(),
  })
}

export async function setVerificationStatus(id, status) {
  return apiClient.patch('teachers', id, { verificationStatus: status })
}
