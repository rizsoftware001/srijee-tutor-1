import React, { createContext, useContext, useState, useCallback } from 'react'
import { TrainingCourseModal } from '../components/student-enrollment/TrainingCourseModal.jsx'

/**
 * TrainingCourseContext — opens a direct registration form for training courses.
 *
 * Training courses (Foreign Language, Computer Course, Spoken English, etc.)
 * don't need the 3-step enrollment wizard — they go straight to a registration form.
 *
 * Usage:
 *   const { openTrainingCourse } = useTrainingCourse()
 *   <button onClick={() => openTrainingCourse({
 *     courseName: 'Spoken English',
 *     courseType: 'Language Course',
 *     icon: '💬',
 *     gradient: 'from-accent-500 to-accent-700',
 *   })}>Enroll</button>
 */
const TrainingCourseContext = createContext(null)

export function TrainingCourseProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [course, setCourse] = useState(null)

  const openTrainingCourse = useCallback((courseConfig) => {
    setCourse(courseConfig)
    setOpen(true)
  }, [])

  const closeTrainingCourse = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <TrainingCourseContext.Provider value={{ openTrainingCourse, closeTrainingCourse }}>
      {children}
      <TrainingCourseModal open={open} onClose={closeTrainingCourse} course={course} />
    </TrainingCourseContext.Provider>
  )
}

export function useTrainingCourse() {
  const ctx = useContext(TrainingCourseContext)
  if (!ctx) throw new Error('useTrainingCourse must be used within TrainingCourseProvider')
  return ctx
}
