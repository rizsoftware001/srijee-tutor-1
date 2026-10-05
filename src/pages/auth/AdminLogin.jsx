import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Seo } from '../../components/common/SEO.jsx'
import { Container, Section } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Field, Input } from '../../components/ui/Input.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useToast } from '../../context/ToastContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { adminLogin } from '../../services/authService.js'

export function AdminLogin() {
  const navigate = useNavigate()
  const toast = useToast()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { session } = await adminLogin({ email, password })
      login(session)
      toast.success('Welcome back, Admin.')
      navigate('/admin/dashboard')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Seo path="/admin/login" title="Admin Login | Srijee Tutor" />
      <Section>
        <Container size="narrow">
          <div className="text-center mb-8">
            <h1 className="h2">Admin Login</h1>
            <p className="mt-2 text-ink-600">Access the Srijee CRM.</p>
          </div>
          <Card>
            <CardBody>
              <form onSubmit={submit} className="space-y-4">
                <Field label="Email" htmlFor="a-email" required>
                  <Input id="a-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@srijee.demo" />
                </Field>
                <Field label="Password" htmlFor="a-pass" required>
                  <Input id="a-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                </Field>
                <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>Login</Button>
              </form>
              <div className="mt-5 rounded-lg bg-warning-50 border border-warning-200 p-3 text-xs text-warning-800">
                <p className="font-semibold flex items-center gap-1.5"><Badge tone="warning" size="xs">Demo</Badge> Admin credentials</p>
                <p className="mt-1">Email: <code className="bg-white px-1.5 py-0.5 rounded">admin@srijee.demo</code></p>
                <p className="mt-0.5">Password: <code className="bg-white px-1.5 py-0.5 rounded">admin123</code></p>
              </div>
              <div className="mt-5 pt-4 border-t border-ink-100 text-center text-sm text-ink-600">
                <Link to="/" className="hover:text-brand-700">← Back to website</Link>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>
    </>
  )
}
