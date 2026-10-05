import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

/**
 * ThemeContext — manages light/dark mode with:
 *  - System preference detection (prefers-color-scheme)
 *  - localStorage persistence
 *  - Manual toggle
 *  - Document <html> classList sync (Tailwind `dark` strategy)
 *
 * Usage:
 *   const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
 *
 * - `theme`: 'light' | 'dark' | 'system' (user preference)
 * - `resolvedTheme`: 'light' | 'dark' (actual applied theme)
 */

const ThemeContext = createContext(null)
const STORAGE_KEY = 'srijee:theme'

export function ThemeProvider({ children, defaultTheme = 'system' }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme
    return localStorage.getItem(STORAGE_KEY) || defaultTheme
  })

  const [resolvedTheme, setResolvedTheme] = useState('light')

  // Compute resolved theme + apply to <html>
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const apply = () => {
      const next = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme
      setResolvedTheme(next)
      const root = document.documentElement
      if (next === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
    }

    apply()
    if (theme === 'system') {
      media.addEventListener('change', apply)
      return () => media.removeEventListener('change', apply)
    }
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  const value = {
    theme,           // user preference: 'light' | 'dark' | 'system'
    resolvedTheme,   // actual applied:  'light' | 'dark'
    isDark: resolvedTheme === 'dark',
    setTheme,        // (next) => void
    toggleTheme,     // () => void
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
