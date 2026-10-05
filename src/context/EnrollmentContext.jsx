import React, { createContext, useContext, useState, useCallback } from 'react'
import { StudentEnrollmentModal } from '../components/student-enrollment/StudentEnrollmentModal.jsx'

/**
 * EnrollmentContext — opens the student enrollment modal from anywhere.
 *
 * Usage:
 *   const { openEnrollment } = useEnrollment()
 *   <button onClick={openEnrollment}>Enroll as Student</button>
 *
 * The provider renders the modal once at the app root, so individual
 * pages/components don't have to manage modal state themselves.
 */
const EnrollmentContext = createContext(null)

export function EnrollmentProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openEnrollment = useCallback(() => setOpen(true), [])
  const closeEnrollment = useCallback(() => setOpen(false), [])

  return (
    <EnrollmentContext.Provider value={{ openEnrollment, closeEnrollment, isEnrollmentOpen: open }}>
      {children}
      <StudentEnrollmentModal open={open} onClose={closeEnrollment} />
    </EnrollmentContext.Provider>
  )
}

export function useEnrollment() {
  const ctx = useContext(EnrollmentContext)
  if (!ctx) throw new Error('useEnrollment must be used within EnrollmentProvider')
  return ctx
}
