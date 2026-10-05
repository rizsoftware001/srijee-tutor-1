import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

/**
 * ProtectedRoute — gates a route behind authentication + (optional) role check.
 *
 * Usage:
 *   <Route element={<ProtectedRoute roles={['TEACHER']} />}>
 *     <Route path="/teacher/dashboard" element={<Dashboard/>} />
 *   </Route>
 *
 * Redirects to /login (or a custom path) when unauthenticated.
 * Renders a 403 view when authenticated but missing role.
 */
export function ProtectedRoute({ children, roles, redirect='/login' }) {
  const { isAuthenticated, loading, hasRole } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="skeleton h-12 w-12 rounded-full" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={redirect} state={{ from: location.pathname }} replace />
  }

  if (roles && !hasRole(roles)) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="card max-w-md p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-danger-100 text-danger-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h1 className="h3 mt-4">Access denied</h1>
          <p className="mt-2 text-sm text-ink-600">You don’t have permission to view this page. Please log in with the correct account.</p>
          <a href="/" className="btn-primary btn-md mt-6 inline-flex">Back to Home</a>
        </div>
      </div>
    )
  }

  return children
}
