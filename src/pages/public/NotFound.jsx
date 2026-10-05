import React from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Section, Container } from '../../components/common/SectionHeading.jsx'
import { Button } from '../../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <>
      <Seo path="/404" title="Page Not Found | Srijee Tutor" />
      <Section>
        <Container size="narrow" className="text-center">
          <p className="font-display text-7xl sm:text-9xl font-extrabold text-brand-600">404</p>
          <h1 className="h2 mt-4">Page not found</h1>
          <p className="mt-3 text-ink-600">The page you’re looking for doesn’t exist or has been moved.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/" variant="primary" size="lg">Back to Home</Button>
            <Button as={Link} to="/contact" variant="secondary" size="lg">Contact Us</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
