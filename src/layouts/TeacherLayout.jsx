import React from 'react'
import { DashboardLayout } from './DashboardLayout.jsx'
import { teacherNav } from '../config/nav.js'

export function TeacherLayout() {
  return <DashboardLayout nav={teacherNav} title="Teacher Portal" accentColor="brand" homeLink="/teacher/dashboard" />
}
