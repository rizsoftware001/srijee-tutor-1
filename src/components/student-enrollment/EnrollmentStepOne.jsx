import React, { useMemo } from 'react'
import { cn } from '../../utils/cn.js'
import {
  BOARD_OPTIONS,
  CLASS_OPTIONS,
  LEARNING_MODE_OPTIONS,
  getSubjectsForBoardAndClass,
} from './enrollmentConfig.js'

/**
 * Step 1 — progressive requirement selection.
 *
 * The next selector appears automatically after the previous selection:
 * Learning Mode → Board → Class → Subject.
 */
export function EnrollmentStepOne({ values, errors, setField }) {
  const availableSubjects = useMemo(
    () => getSubjectsForBoardAndClass(values.board, values.classLevel),
    [values.board, values.classLevel]
  )

  const handleMode = (value) => {
    setField('learningMode', value)
  }

  const handleBoard = (value) => {
    setField('board', value)
    setField('classLevel', '')
    setField('subject', '')
    setField('subjects', [])
    setField('otherSubject', '')
  }

  const handleClass = (value) => {
    setField('classLevel', value)
    setField('subject', '')
    setField('subjects', [])
    setField('otherSubject', '')
  }

  const handleSubject = (value) => {
    setField('subject', value)
    setField('subjects', [value])
  }

  return (
    <div className="space-y-7">
      {/* Learning mode */}
      <fieldset>
        <legend className="mb-3 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-ink-900 dark:text-white">
            Preferred Learning Mode
            <span className="ml-1 text-danger-500">*</span>
          </span>
          <span className="text-xs text-ink-500 dark:text-ink-300">
            Choose how you want to learn
          </span>
        </legend>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_MODE_OPTIONS.map((mode) => (
            <SelectionTile
              key={mode.value}
              selected={values.learningMode === mode.value}
              onClick={() => handleMode(mode.value)}
              icon={mode.icon}
              label={mode.label}
              description={mode.desc}
            />
          ))}
        </div>
        {errors.learningMode && <p className="error-text">{errors.learningMode}</p>}
      </fieldset>

      {/* Board — appears after learning mode */}
      {values.learningMode && (
        <RevealSection>
          <fieldset>
            <legend className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                Select Board
                <span className="ml-1 text-danger-500">*</span>
              </span>
            </legend>

            <div className="flex flex-wrap gap-2">
              {BOARD_OPTIONS.map((board) => (
                <OptionPill
                  key={board}
                  selected={values.board === board}
                  onClick={() => handleBoard(board)}
                >
                  {board}
                </OptionPill>
              ))}
            </div>
            {errors.board && <p className="error-text">{errors.board}</p>}
          </fieldset>
        </RevealSection>
      )}

      {/* Class — appears after board */}
      {values.board && (
        <RevealSection>
          <fieldset>
            <legend className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                Select Class
                <span className="ml-1 text-danger-500">*</span>
              </span>
            </legend>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {CLASS_OPTIONS.map((className) => (
                <OptionButton
                  key={className}
                  selected={values.classLevel === className}
                  onClick={() => handleClass(className)}
                >
                  {className}
                </OptionButton>
              ))}
            </div>
            {errors.classLevel && <p className="error-text">{errors.classLevel}</p>}
          </fieldset>
        </RevealSection>
      )}

      {/* Subject — appears after class and is filtered by board + class */}
      {values.classLevel && (
        <RevealSection>
          <fieldset>
            <legend className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                Select Subject
                <span className="ml-1 text-danger-500">*</span>
              </span>
              <span className="text-xs text-ink-500 dark:text-ink-300">
                Based on {values.board} · {values.classLevel}
              </span>
            </legend>

            <div className="flex flex-wrap gap-2">
              {availableSubjects.map((subject) => (
                <OptionPill
                  key={subject}
                  selected={values.subject === subject}
                  onClick={() => handleSubject(subject)}
                >
                  {subject}
                </OptionPill>
              ))}
            </div>

            {availableSubjects.length === 0 && (
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
                No subjects are configured for this selection yet. Please contact us for assistance.
              </p>
            )}

            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </fieldset>
        </RevealSection>
      )}
    </div>
  )
}

function RevealSection({ children }) {
  return (
    <div className="animate-fade-in rounded-xl border border-ink-100 bg-ink-50/40 p-4 dark:border-ink-700 dark:bg-ink-800/30 sm:p-5">
      {children}
    </div>
  )
}

function SelectionTile({ selected, onClick, icon, label, description }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        'relative flex min-h-[92px] flex-col items-start rounded-xl border p-4 text-left transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        selected
          ? 'border-brand-500 bg-brand-50 shadow-sm dark:bg-brand-900/30'
          : 'border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:bg-ink-800 dark:hover:bg-ink-700'
      )}
    >
      <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
      <span className="mt-2 text-sm font-semibold text-ink-900 dark:text-white">{label}</span>
      <span className="mt-0.5 text-xs text-ink-500 dark:text-ink-300">{description}</span>
      {selected && <SelectionCheck />}
    </button>
  )
}

function OptionPill({ selected, onClick, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        selected
          ? 'border-brand-500 bg-brand-600 text-white shadow-sm'
          : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700'
      )}
    >
      {selected && <CheckIcon />}
      {children}
    </button>
  )
}

function OptionButton({ selected, onClick, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        'rounded-lg border px-2.5 py-2.5 text-sm font-medium transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        selected
          ? 'border-brand-500 bg-brand-600 text-white shadow-sm'
          : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700'
      )}
    >
      {children}
    </button>
  )
}

function SelectionCheck() {
  return (
    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white" aria-hidden="true">
      <CheckIcon />
    </span>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default EnrollmentStepOne
