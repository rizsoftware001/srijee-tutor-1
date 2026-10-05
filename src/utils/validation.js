/**
 * Validation utilities — pure functions, no deps.
 * Designed to be used by form validators across the app.
 */

export const isRequired = (v) => {
  if (v === null || v === undefined) return false
  if (typeof v === 'string') return v.trim().length > 0
  if (Array.isArray(v)) return v.length > 0
  return true
}

export const isEmail = (v) =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

// Indian mobile — 10 digits starting 6-9, optional +91/0 prefix
export const isIndianMobile = (v) => {
  if (typeof v !== 'string') return false
  const cleaned = v.replace(/[\s-]/g, '')
  return /^(?:(?:\+91|0)?[6-9]\d{9})$/.test(cleaned)
}

export const isOTP = (v) =>
  typeof v === 'string' && /^\d{6}$/.test(v)

export const minLength = (n) => (v) =>
  typeof v === 'string' && v.trim().length >= n

export const maxLength = (n) => (v) =>
  typeof v === 'string' && v.trim().length <= n

export const isPincode = (v) =>
  typeof v === 'string' && /^[1-9]\d{5}$/.test(v.trim())

export const isPositiveNumber = (v) =>
  !isNaN(parseFloat(v)) && isFinite(v) && parseFloat(v) > 0

export const isUrl = (v) => {
  try {
    new URL(v)
    return true
  } catch {
    return false
  }
}

/**
 * Run a schema of validators against a values object.
 * Schema: { fieldName: [fn, fn, ...] } OR { fieldName: fn }
 * Each fn returns true if valid, or a string error message.
 * Returns { isValid, errors }.
 */
export function validate(values, schema) {
  const errors = {}
  for (const field in schema) {
    const validators = Array.isArray(schema[field]) ? schema[field] : [schema[field]]
    for (const v of validators) {
      const result = v(values[field], values)
      if (result !== true && result !== undefined) {
        errors[field] = result
        break
      }
    }
  }
  return { isValid: Object.keys(errors).length === 0, errors }
}

// Helper to build validator functions that return error strings
export const required = (msg = 'This field is required') => (v) =>
  isRequired(v) || msg

export const emailFmt = (msg = 'Enter a valid email address') => (v) =>
  !v || isEmail(v) || msg

export const mobileFmt = (msg = 'Enter a valid 10-digit mobile number') => (v) =>
  !v || isIndianMobile(v) || msg

export const otpFmt = (msg = 'OTP must be 6 digits') => (v) =>
  !v || isOTP(v) || msg

export const minLen = (n, msg) => (v) =>
  !v || minLength(n)(v) || (msg || `Must be at least ${n} characters`)

export const matchField = (otherField, msg = 'Values do not match') => (v, values) =>
  v === values[otherField] || msg
