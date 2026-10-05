import React from 'react'
import { DashboardLayout } from './DashboardLayout.jsx'
import { adminNav } from '../config/nav.js'

export function AdminLayout() {
  return <DashboardLayout nav={adminNav} title="Admin CRM" accentColor="ink" homeLink="/admin/dashboard" />
}
