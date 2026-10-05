import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { EmptyState } from '../../components/ui/States.jsx'

export default function AdminSettings() {
  return (
    <>
      <Seo path="/admin/settings" title="Settings | Srijee CRM" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Settings</h1>
          <p className="mt-2 text-ink-600">Admin account and CRM configuration.</p>
        </div>
        <Card>
          <CardBody>
            <EmptyState
              title="Settings coming soon"
              description="In the demo build, admin settings are not editable. The production version will include counsellor management, role-based access, and integration configs."
            />
          </CardBody>
        </Card>
      </div>
    </>
  )
}
