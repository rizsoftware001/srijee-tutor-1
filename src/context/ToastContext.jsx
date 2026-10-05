import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

let idCounter = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const push = useCallback(
    ({ type = 'info', title, message, duration = 4000 }) => {
      const id = ++idCounter
      setToasts((prev) => [...prev, { id, type, title, message }])
      if (duration > 0) {
        setTimeout(() => remove(id), duration)
      }
      return id
    },
    [remove]
  )

  const toast = {
    info:    (msg, title = 'Notice')      => push({ type: 'info',    title, message: msg }),
    success: (msg, title = 'Success')     => push({ type: 'success', title, message: msg }),
    error:   (msg, title = 'Something went wrong') => push({ type: 'error',   title, message: msg, duration: 6000 }),
    warning: (msg, title = 'Heads up')    => push({ type: 'warning', title, message: msg }),
  }

  return (
    <ToastContext.Provider value={{ toast, toasts, remove }}>
      {children}
      <ToastViewport toasts={toasts} remove={remove} />
    </ToastContext.Provider>
  )
}

function ToastViewport({ toasts, remove }) {
  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onClose }) {
  const palette = {
    info:    { bg: 'bg-brand-50',     border: 'border-brand-200',     text: 'text-brand-900',     icon: 'ℹ', iconBg: 'bg-brand-600' },
    success: { bg: 'bg-success-50',   border: 'border-success-200',   text: 'text-success-900',   icon: '✓', iconBg: 'bg-success-600' },
    error:   { bg: 'bg-danger-50',    border: 'border-danger-200',    text: 'text-danger-900',    icon: '!', iconBg: 'bg-danger-600' },
    warning: { bg: 'bg-warning-50',   border: 'border-warning-200',   text: 'text-warning-900',   icon: '⚠', iconBg: 'bg-warning-600' },
  }[toast.type]

  return (
    <div
      role="status"
      className={`pointer-events-auto flex items-start gap-3 rounded-lg border ${palette.border} ${palette.bg} p-3.5 shadow-lift animate-fade-up`}
    >
      <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${palette.iconBg} text-xs font-bold text-white`}>
        {palette.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${palette.text}`}>{toast.title}</p>
        {toast.message && <p className="mt-0.5 text-sm text-ink-700 break-words">{toast.message}</p>}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="flex-none rounded p-1 text-ink-400 hover:bg-white/60 hover:text-ink-700"
        aria-label="Dismiss notification"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
      </button>
    </div>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx.toast
}
