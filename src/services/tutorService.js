/**
 * tutorService — public-facing tutor search & matching.
 * Used by student "Suggested Tutors" page and admin Tutor Matching.
 */

import { apiClient } from './apiClient.js'
import { mockTeachers } from '../data/mockTeachers.js'

apiClient.seed('teachers', mockTeachers)

/**
 * Rule-based tutor matching against a requirement.
 * The real backend will run the same rules (or smarter) on the server.
 *
 * @param {Object} requirement — { class, board, subject, location, mode }
 * @returns {Array<{ tutor, score, reasons }>}
 */
export async function matchTutors(requirement) {
  await new Promise((r) => setTimeout(r, 600))
  const all = await apiClient.get('teachers')
  const active = all.filter((t) => t.verificationStatus === 'ACTIVE')

  const scored = active.map((tutor) => {
    let score = 50
    const reasons = []

    if (requirement.subject && tutor.subjects?.some((s) => s.toLowerCase().includes(requirement.subject.toLowerCase()))) {
      score += 25; reasons.push('Subject match')
    }
    if (requirement.class && tutor.classes?.includes(requirement.class)) {
      score += 15; reasons.push('Teaches this class')
    }
    if (requirement.board && tutor.boards?.includes(requirement.board)) {
      score += 10; reasons.push('Board expertise')
    }
    if (requirement.mode && tutor.teachingModes?.includes(requirement.mode)) {
      score += 10; reasons.push('Offers preferred mode')
    }
    if (requirement.location && tutor.preferredLocations?.some(
      (l) => l.toLowerCase().includes(requirement.location.toLowerCase())
    )) {
      score += 15; reasons.push('Serves your area')
    }
    if (tutor.rating) {
      score += Math.round(tutor.rating); // up to +5
    }

    return { tutor, score: Math.min(100, score), reasons }
  })

  return scored
    .filter((s) => s.score >= 50)
    .sort((a, b) => b.score - a.score)
}
