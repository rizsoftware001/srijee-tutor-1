/**
 * apiClient — single network abstraction point.
 *
 * In this demo build it dispatches to in-browser mock handlers
 * (localStorage-backed) so the whole UI is fully functional without
 * a backend. When the real backend is ready, replace the body of
 * `request()` with `fetch()` (or axios) — service files do not
 * need to change because they only call `apiClient.get/post/...`.
 *
 * Mock behaviour:
 *  - simulates network latency
 *  - persists writes to localStorage (see utils/storage.js)
 *  - throws structured { status, message } errors on failure
 *
 * Real API contract (when backend is connected):
 *   GET    /api/v1/<resource>
 *   GET    /api/v1/<resource>/:id
 *   POST   /api/v1/<resource>
 *   PATCH  /api/v1/<resource>/:id
 *   DELETE /api/v1/<resource>/:id
 */

import { storage } from '../utils/storage.js'
import { delay, uid } from '../utils/mock.js'

const DEFAULT_LATENCY = 450

export class ApiError extends Error {
  constructor(status, message, details = null) {
    super(message)
    this.status = status
    this.details = details
  }
}

/**
 * Internal request handler.
 * Routes a { method, resource, id, body, query } to a mock store.
 */
async function request({ method, resource, id, body, query }) {
  await delay(DEFAULT_LATENCY)

  // --- MOCK STORE ---
  // Each resource is a JSON array in localStorage.
  const storeKey = `db:${resource}`
  let records = storage.get(storeKey, [])

  switch (method) {
    case 'GET': {
      if (id) {
        const rec = records.find((r) => r.id === id)
        if (!rec) throw new ApiError(404, `${resource}/${id} not found`)
        return rec
      }
      // simple query filter
      if (query) {
        records = records.filter((r) =>
          Object.entries(query).every(([k, v]) => r[k] === v)
        )
      }
      return records
    }
    case 'POST': {
      const newRec = { id: uid(resource), ...body, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      records.unshift(newRec)
      storage.set(storeKey, records)
      return newRec
    }
    case 'PATCH': {
      const idx = records.findIndex((r) => r.id === id)
      if (idx === -1) throw new ApiError(404, `${resource}/${id} not found`)
      records[idx] = { ...records[idx], ...body, updatedAt: new Date().toISOString() }
      storage.set(storeKey, records)
      return records[idx]
    }
    case 'DELETE': {
      const idx = records.findIndex((r) => r.id === id)
      if (idx === -1) throw new ApiError(404, `${resource}/${id} not found`)
      const [removed] = records.splice(idx, 1)
      storage.set(storeKey, records)
      return removed
    }
    default:
      throw new ApiError(405, `Method ${method} not allowed`)
  }
}

/**
 * Public API — used by all service files.
 * Mirrors a typical REST client surface so swapping to fetch/axios
 * later is a one-file change.
 */
export const apiClient = {
  get:    (resource, opts = {}) => request({ method: 'GET',    resource, ...opts }),
  post:   (resource, body)      => request({ method: 'POST',   resource, body }),
  patch:  (resource, id, body)  => request({ method: 'PATCH',  resource, id, body }),
  put:    (resource, id, body)  => request({ method: 'PATCH',  resource, id, body }),
  delete: (resource, id)        => request({ method: 'DELETE', resource, id }),

  /** Seed a resource with default records if empty (idempotent). */
  seed(resource, seedData = []) {
    const storeKey = `db:${resource}`
    const existing = storage.get(storeKey, null)
    if (existing === null) storage.set(storeKey, seedData)
  },
}
