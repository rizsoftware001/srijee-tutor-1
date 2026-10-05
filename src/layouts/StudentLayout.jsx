import React from 'react'
import { DashboardLayout } from './DashboardLayout.jsx'
import { studentNav } from '../config/nav.js'

export function StudentLayout() {
  return <DashboardLayout nav={studentNav} title="Student Portal" accentColor="accent" homeLink="/student/dashboard" />
}
