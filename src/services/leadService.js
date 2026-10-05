/**
 * leadService — student lead CRUD + status pipeline.
 * Talks to apiClient (mock). Real backend swap is one file.
 */

import { apiClient } from './apiClient.js'
import { mockLeads, LEAD_STATUSES } from '../data/mockLeads.js'

export const LEAD_STATUS_VALUES = LEAD_STATUSES.map((s) => s.key)

// Seed once on first import
apiClient.seed('leads', mockLeads)

export async function listLeads({ status, search, region } = {}) {
  let leads = await apiClient.get('leads')
  if (status && status !== 'ALL') leads = leads.filter((l) => l.status === status)
  if (region && region !== 'ALL') leads = leads.filter((l) => l.region === region)
  if (search) {
    const q = search.toLowerCase()
    leads = leads.filter(
      (l) =>
        l.name?.toLowerCase().includes(q) ||
        l.id?.toLowerCase().includes(q) ||
        l.phone?.includes(q) ||
        l.subject?.toLowerCase().includes(q) ||
        l.location?.toLowerCase().includes(q)
    )
  }
  return leads
}

export async function getLead(id) {
  return apiClient.get('leads', { id })
}

export async function createLead(payload) {
  // Source is inferred client-side for the demo
  const data = {
    ...payload,
    source: payload.source || 'Website — Find My Tutor',
    status: 'NEW',
    assignedCounsellor: null,
    lastFollowUp: null,
    nextFollowUp: null,
  }
  return apiClient.post('leads', data)
}

export async function updateLeadStatus(id, status, notes = null) {
  const patch = {
    status,
    lastFollowUp: new Date().toISOString(),
  }
  if (notes !== null) patch.notes = notes
  return apiClient.patch('leads', id, patch)
}

export async function assignCounsellor(id, counsellor) {
  return apiClient.patch('leads', id, { assignedCounsellor: counsellor })
}

export async function setNextFollowUp(id, isoDate) {
  return apiClient.patch('leads', id, { nextFollowUp: isoDate })
}
