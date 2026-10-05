import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getSession, logout as authLogout, ROLES } from '../services/authService.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setSession(getSession())
    setLoading(false)
  }, [])

  const login = useCallback((newSession) => {
    setSession(newSession)
  }, [])

  const logout = useCallback(() => {
    authLogout()
    setSession(null)
  }, [])

  const hasRole = useCallback(
    (roles) => {
      if (!session) return false
      const arr = Array.isArray(roles) ? roles : [roles]
      return arr.includes(session.role)
    },
    [session]
  )

  const value = {
    session,
    user: session,
    role: session?.role || null,
    isAuthenticated: !!session,
    loading,
    login,
    logout,
    hasRole,
    ROLES,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
