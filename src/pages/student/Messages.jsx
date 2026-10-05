import React from 'react'
import { Seo } from '../../components/common/SEO.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { EmptyState } from '../../components/ui/States.jsx'

export default function StudentMessages() {
  return (
    <>
      <Seo path="/student/messages" title="Messages | Srijee Tutor" />
      <div className="space-y-6">
        <div>
          <h1 className="h2">Messages</h1>
          <p className="mt-2 text-ink-600">Chat with your counsellor and matched tutors.</p>
        </div>
        <Card>
          <CardBody>
            <EmptyState
              icon={<ChatIcon />}
              title="No messages yet"
              description="Once you submit a requirement, your counsellor will reach out here. For now, please use the contact page."
            />
          </CardBody>
        </Card>
      </div>
    </>
  )
}
function ChatIcon() { return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> }
