/**
 * Safe localStorage wrapper — SSR-safe, JSON-aware, error-tolerant.
 * All persistence in the demo layer flows through here so the swap
 * to a real API later requires touching only the service files.
 */

const PREFIX = 'srijee:'

export const storage = {
  get(key, fallback = null) {
    try {
      const raw = window.localStorage.getItem(PREFIX + key)
      if (raw === null) return fallback
      return JSON.parse(raw)
    } catch {
      return fallback
    }
  },

  set(key, value) {
    try {
      window.localStorage.setItem(PREFIX + key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },

  remove(key) {
    try {
      window.localStorage.removeItem(PREFIX + key)
      return true
    } catch {
      return false
    }
  },

  clear() {
    try {
      Object.keys(window.localStorage)
        .filter((k) => k.startsWith(PREFIX))
        .forEach((k) => window.localStorage.removeItem(k))
      return true
    } catch {
      return false
    }
  },
}
