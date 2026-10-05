/**
 * authService — frontend-only mock auth.
 *
 * Implements OTP-based authentication for Teacher & Student roles
 * using localStorage. A real backend would replace the bodies of
 * `sendOtp()` and `verifyOtp()` with API calls; the function
 * signatures and return shapes are designed to match a future
 * /api/v1/auth/* contract.
 *
 * Roles: STUDENT, PARENT, TEACHER, COUNSELLOR, ADMIN, SUPER_ADMIN
 */

import { apiClient } from './apiClient.js'
import { storage } from '../utils/storage.js'
import { delay, generateDemoOTP } from '../utils/mock.js'

const SESSION_KEY = 'session'
const OTP_REGISTRY_KEY = 'otp-registry'

export const ROLES = {
  STUDENT: 'STUDENT',
  PARENT: 'PARENT',
  TEACHER: 'TEACHER',
  COUNSELLOR: 'COUNSELLOR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
}

/**
 * Send an OTP to the given mobile.
 * Demo behaviour: stores OTP in localStorage and "logs" it to console
 * so the demo user can read it. Real backend would send SMS.
 */
export async function sendOtp({ mobile, role = ROLES.TEACHER, name = '' }) {
  await delay(700)
  if (!mobile) throw new Error('Mobile is required')

  const otp = generateDemoOTP()
  const expiresAt = Date.now() + 5 * 60 * 1000 // 5 min

  const registry = storage.get(OTP_REGISTRY_KEY, {})
  registry[mobile] = { otp, expiresAt, attempts: 0, role, name }
  storage.set(OTP_REGISTRY_KEY, registry)

  // Demo affordance — clearly label as demo.
  // eslint-disable-next-line no-console
  console.info(`[DEMO OTP] ${mobile} → ${otp}  (expires in 5 min)`)

  return {
    sent: true,
    expiresInSec: 300,
    // Demo only: surface the OTP so reviewers can test the flow.
    demoOtp: otp,
    notice: 'Demo build — OTP is shown in the UI for testing only.',
  }
}

/**
 * Verify an OTP. On success, creates a session and (for teachers)
 * a teacher record if it doesn't yet exist.
 */
export async function verifyOtp({ mobile, otp, role = ROLES.TEACHER, name = '' }) {
  await delay(500)
  const registry = storage.get(OTP_REGISTRY_KEY, {})
  const entry = registry[mobile]

  if (!entry) throw new Error('No OTP requested for this mobile. Please request a new OTP.')
  if (Date.now() > entry.expiresAt) throw new Error('OTP expired. Please request a new OTP.')

  entry.attempts = (entry.attempts || 0) + 1
  if (entry.attempts > 5) {
    delete registry[mobile]
    storage.set(OTP_REGISTRY_KEY, registry)
    throw new Error('Too many incorrect attempts. Please request a new OTP.')
  }
  if (entry.otp !== otp) {
    storage.set(OTP_REGISTRY_KEY, registry)
    throw new Error(`Invalid OTP. ${5 - entry.attempts} attempt(s) remaining.`)
  }

  // success — clear OTP
  delete registry[mobile]
  storage.set(OTP_REGISTRY_KEY, registry)

  // Find or create user record (demo)
  const resourceName = role === ROLES.TEACHER ? 'teachers' : 'students'
  apiClient.seed(resourceName, [])
  const existing = await apiClient.get(resourceName).catch(() => [])
  let user = existing.find((u) => u.mobile === mobile)
  if (!user) {
    user = await apiClient.post(resourceName, {
      mobile,
      mobileVerified: true,
      name: name || entry.name || 'New User',
      role,
      verificationStatus:
        role === ROLES.TEACHER ? 'REGISTERED' : 'ACTIVE',
      profileCompletion: 0,
    })
  }

  // Create session
  const session = {
    userId: user.id,
    role,
    mobile,
    name: user.name,
    loggedAt: new Date().toISOString(),
    token: `demo-token-${Date.now()}`, // real backend would issue JWT
  }
  storage.set(SESSION_KEY, session)
  return { session, user }
}

export function getSession() {
  return storage.get(SESSION_KEY, null)
}

export function logout() {
  storage.remove(SESSION_KEY)
}

/**
 * Demo admin login (mobile + demo password).
 * Real backend will replace with proper auth.
 */
export async function adminLogin({ email, password }) {
  await delay(500)
  if (email === 'admin@srijee.demo' && password === 'admin123') {
    const session = {
      userId: 'admin-demo',
      role: ROLES.ADMIN,
      email,
      name: 'Admin (Demo)',
      loggedAt: new Date().toISOString(),
      token: `demo-token-${Date.now()}`,
    }
    storage.set(SESSION_KEY, session)
    return { session }
  }
  throw new Error('Invalid admin credentials. Try admin@srijee.demo / admin123')
}
