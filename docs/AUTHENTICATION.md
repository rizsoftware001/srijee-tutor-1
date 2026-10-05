# Authentication

## Architecture

Frontend-only auth using OTP (teacher + student) and email/password (admin). Sessions persist in `localStorage` under the `srijee:session` key.

```
src/services/authService.js
  ├── sendOtp({ mobile, role, name }) → { sent, demoOtp, expiresInSec }
  ├── verifyOtp({ mobile, otp, role }) → { session, user }
  ├── getSession() → session | null
  ├── logout()
  └── adminLogin({ email, password }) → { session }
```

`AuthContext` exposes:

```js
const { session, user, role, isAuthenticated, loading, login, logout, hasRole } = useAuth()
```

## Roles

| Role | Login route | Portal |
|------|-------------|--------|
| `STUDENT` | `/student/login` | `/student/*` |
| `PARENT` | `/student/login` | `/student/*` |
| `TEACHER` | `/teacher/login` | `/teacher/*` |
| `COUNSELLOR` | (future) | `/counsellor/*` |
| `ADMIN` | `/admin/login` | `/admin/*` |
| `SUPER_ADMIN` | `/admin/login` | `/admin/*` |

## OTP Flow

```
User enters mobile
  ↓
POST sendOtp({ mobile, role })  → 6-digit OTP generated
  ↓                              → stored in localStorage (5-min expiry)
  ↓                              → in demo: returned as `demoOtp` AND logged to console
UI shows OTP input (6 boxes)
  ↓
POST verifyOtp({ mobile, otp })
  ↓
On success:
  - Find or create user record (Teacher or Student)
  - Create session in localStorage
  - Call onVerified callback → navigate to dashboard
On failure:
  - Decrement remaining attempts (max 5)
  - Show error message
```

### Demo Affordances (clearly labeled)

- OTP is shown in the UI as a "Demo OTP" badge.
- OTP is logged to `console.info` with `[DEMO OTP]` prefix.
- No real SMS is sent.

### Resend Cooldown

30-second cooldown between OTP resends. UI shows countdown.

## Admin Login (Demo)

```
Email: admin@srijee.demo
Password: admin123
```

Real admin auth will use backend-issued JWT after email/password (or SSO) verification.

## Protected Routes

```jsx
<Route element={
  <ProtectedRoute roles={['TEACHER']}>
    <TeacherLayout />
  </ProtectedRoute>
}>
  <Route path="/teacher/dashboard" element={<Dashboard/>} />
</Route>
```

- Unauthenticated → redirect to appropriate login.
- Authenticated but wrong role → render 403 view.
- Loading state → spinner.

## Future: Real Backend Integration

Replace `sendOtp` and `verifyOtp` bodies in `authService.js` with:

```js
export async function sendOtp({ mobile, role }) {
  const res = await fetch('/api/v1/auth/otp/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile, role }),
  })
  if (!res.ok) throw new ApiError(res.status, (await res.json()).message)
  return res.json()  // { sent: true, expiresInSec: 300 } — no demoOtp
}

export async function verifyOtp({ mobile, otp, role }) {
  const res = await fetch('/api/v1/auth/otp/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile, otp, role }),
  })
  if (!res.ok) throw new ApiError(res.status, (await res.json()).message)
  const { session, user } = await res.json()
  storage.set('session', session)
  return { session, user }
}
```

No component changes required.
