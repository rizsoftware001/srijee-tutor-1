/**
 * Simulates network latency for mock API services.
 * Swap with real fetch — service files become drop-in ready.
 */
export const delay = (ms = 600) => new Promise((r) => setTimeout(r, ms))

/** Generates a pseudo id for demo records. */
export const uid = (prefix = 'id') =>
  `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`

/** Random OTP for demo — NEVER do this in production. */
export const generateDemoOTP = () =>
  String(Math.floor(100000 + Math.random() * 900000))
