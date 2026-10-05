import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * useAsync — wraps an async function and exposes loading/error/data state.
 *
 * @param {Function} asyncFn — returns a Promise
 * @param {Array} deps — re-run when these change
 * @returns { data, loading, error, refetch }
 */
export function useAsync(asyncFn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const mountedRef = useRef(true)
  const fnRef = useRef(asyncFn)
  fnRef.current = asyncFn

  const refetch = useCallback(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: true, error: null }))
    Promise.resolve()
      .then(() => fnRef.current())
      .then((data) => {
        if (!cancelled && mountedRef.current) {
          setState({ data, loading: false, error: null })
        }
      })
      .catch((error) => {
        if (!cancelled && mountedRef.current) {
          setState({ data: null, loading: false, error })
        }
      })
    return () => { cancelled = true }
  }, deps)

  useEffect(() => {
    mountedRef.current = true
    const cancel = refetch()
    return () => {
      mountedRef.current = false
      cancel()
    }
  }, [refetch])

  return { ...state, refetch }
}
