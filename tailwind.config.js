/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── Primary: Deep teal-blue (professional, trustworthy) ─────────
        // Inspired by talk2college.com's #0d9488 + #2456c9 palette
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',  // primary action
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // ─── Secondary: Teal (educational, calm) ────────────────────────
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',  // talk2college teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // ─── Accent: Warm orange (CTAs, energy) ─────────────────────────
        accent: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // talk2college orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // ─── Neutral: Refined slate (cooler, more professional) ──────────
        ink: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          50:  '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#14532d',
        },
        warning: {
          50:  '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f',
        },
        danger: {
          50:  '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
          400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
          800: '#991b1b', 900: '#7f1d1d',
        },
      },
      fontFamily: {
        // Manrope = premium geometric sans, more professional than Plus Jakarta
        // Inter = excellent body readability
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs':  ['0.6875rem', { lineHeight: '1rem' }],
      },
      // Professional, subtle shadows (not too glowy)
      boxShadow: {
        'xs':     '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm':     '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'md':     '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'lg':     '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
        'xl':     '0 20px 25px -5px rgba(15, 23, 42, 0.10), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
        '2xl':    '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
        'inner':  'inset 0 2px 4px 0 rgba(15, 23, 42, 0.05)',
        // Brand-tinted shadows for elevated CTAs (subtle, not neon)
        'brand':  '0 4px 14px 0 rgba(2, 132, 199, 0.25)',
        'accent': '0 4px 14px 0 rgba(249, 115, 22, 0.25)',
        'teal':   '0 4px 14px 0 rgba(13, 148, 136, 0.25)',
      },
      borderRadius: {
        'md':  '0.5rem',
        'lg':  '0.625rem',
        'xl':  '0.875rem',
        'xl2': '1.125rem',
        'xl3': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        // Refined 4px-base scale for tighter, professional rhythm
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'out':     'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out':  'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'grid-pattern':    "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        'grid-pattern-dark':"linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'dot-pattern':     'radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'dot-pattern-dark':'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-in':   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-up':   { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in':  { '0%': { opacity: '0', transform: 'scale(0.97)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        'shimmer':   { '100%': { transform: 'translateX(100%)' } },
        'marquee':   { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'float':     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        'pulse-soft':{ '0%,100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
        'ping':      { '75%,100%': { transform: 'scale(2)', opacity: '0' } },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'skeleton-shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.3s ease-out',
        'fade-up':        'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in':       'scale-in 0.25s ease-out',
        'shimmer':        'shimmer 1.5s infinite',
        'marquee':        'marquee 30s linear infinite',
        'float':          'float 5s ease-in-out infinite',
        'pulse-soft':     'pulse-soft 3s ease-in-out infinite',
        'ping':           'ping 1.6s cubic-bezier(0,0,0.2,1) infinite',
        'gradient-pan':   'gradient-pan 8s ease-in-out infinite',
        'skeleton-shimmer':'skeleton-shimmer 2s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'bg-brand-500', 'bg-accent-500', 'bg-success-500', 'bg-warning-500', 'bg-danger-500', 'bg-ink-500', 'bg-teal-500',
    'bg-brand-100', 'text-brand-700', 'bg-accent-100', 'text-accent-700',
    'bg-success-100', 'text-success-700', 'bg-warning-100', 'text-warning-700',
    'bg-danger-100', 'text-danger-700', 'bg-ink-100', 'text-ink-700', 'bg-teal-100', 'text-teal-700',
    'dark:bg-brand-900', 'dark:text-brand-300', 'dark:bg-accent-900', 'dark:text-accent-300', 'dark:bg-teal-900', 'dark:text-teal-300',
    'dark:bg-brand-900/40', 'dark:bg-accent-900/40', 'dark:bg-success-900/40', 'dark:bg-warning-900/40', 'dark:bg-teal-900/40',
    'bg-brand-900/40', 'bg-accent-900/40', 'bg-success-900/40', 'bg-warning-900/40', 'bg-teal-900/40',
    'dark:bg-brand-900/40', 'dark:text-brand-300', 'dark:bg-accent-900/40', 'dark:text-accent-300',
    'dark:bg-success-900/40', 'dark:text-success-300', 'dark:bg-warning-900/40', 'dark:text-warning-300',
    'dark:bg-teal-900/40', 'dark:text-teal-300', 'dark:bg-danger-900/40', 'dark:text-danger-300',
    'dark:bg-ink-900/40', 'dark:text-ink-300',
  ],
  plugins: [],
}
