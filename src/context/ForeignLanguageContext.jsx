import React, { createContext, useContext, useState, useCallback } from 'react'
import { ForeignLanguageModal } from '../components/student-enrollment/ForeignLanguageModal.jsx'

/**
 * ForeignLanguageContext — opens the foreign language inquiry modal.
 *
 * Usage:
 *   const { openForeignLanguage } = useForeignLanguage()
 *   <button onClick={() => openForeignLanguage('French')}>Learn French</button>
 */
const ForeignLanguageContext = createContext(null)

export function ForeignLanguageProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [initialLanguage, setInitialLanguage] = useState('')

  const openForeignLanguage = useCallback((language = '') => {
    setInitialLanguage(language)
    setOpen(true)
  }, [])

  const closeForeignLanguage = useCallback(() => setOpen(false), [])

  return (
    <ForeignLanguageContext.Provider value={{ openForeignLanguage, closeForeignLanguage }}>
      {children}
      <ForeignLanguageModal
        open={open}
        onClose={closeForeignLanguage}
        initialLanguage={initialLanguage}
      />
    </ForeignLanguageContext.Provider>
  )
}

export function useForeignLanguage() {
  const ctx = useContext(ForeignLanguageContext)
  if (!ctx) throw new Error('useForeignLanguage must be used within ForeignLanguageProvider')
  return ctx
}
