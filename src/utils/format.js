/**
 * Formatting helpers — dates, currency, phone numbers, etc.
 */

export const formatDate = (date, opts = {}) => {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...opts,
  })
}

export const formatDateTime = (date) => {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export const formatRelative = (date) => {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  const diff = Date.now() - d.getTime()
  const sec = Math.floor(diff / 1000)
  if (sec < 60) return 'just now'
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const day = Math.floor(hr / 24)
  if (day < 7) return `${day}d ago`
  return formatDate(d)
}

export const formatINR = (amount, { compact = false } = {}) => {
  if (amount === null || amount === undefined || isNaN(amount)) return '—'
  if (compact) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      notation: amount >= 100000 ? 'compact' : 'standard',
    }).format(amount)
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export const formatPhone = (raw) => {
  if (!raw) return ''
  const digits = String(raw).replace(/\D/g, '').slice(-10)
  if (digits.length !== 10) return raw
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
}

export const maskPhone = (raw) => {
  if (!raw) return ''
  const digits = String(raw).replace(/\D/g, '').slice(-10)
  if (digits.length !== 10) return raw
  return `+91 ••••• ${digits.slice(-4)}`
}

export const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || '')
    .join('')

export const truncate = (str, n = 80) =>
  typeof str === 'string' && str.length > n ? str.slice(0, n - 1) + '…' : str

export const slugify = (str = '') =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const titleCase = (str = '') =>
  str.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
