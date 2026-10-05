import React from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { cn } from '../../utils/cn.js'

/**
 * ThemeToggle — animated light/dark mode switch.
 * Uses ThemeContext; respects user's saved preference.
 */
export function ThemeToggle({ className, size = 'md' }) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-11 w-11',
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300 transition-all overflow-hidden',
        sizes[size] || sizes.md,
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon (visible in light mode) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={cn(
          'absolute transition-all duration-500',
          isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        )}
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {/* Moon icon (visible in dark mode) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={cn(
          'absolute transition-all duration-500',
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
        )}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
