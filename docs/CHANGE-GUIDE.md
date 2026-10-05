# Change Guide — Swapping Mocks for Real APIs

This document explains how to evolve the demo build into a production app **without rewriting the UI**.

## Architecture Recap

```
Component → service → apiClient → [mock store today | real API tomorrow]
```

The key invariant: **no component or page ever calls `fetch()` or reads `localStorage` directly** (except `storage.js`, which is the only file allowed to touch localStorage). All data access flows through services.

## Step 1 — Replace `apiClient`

File: `src/services/apiClient.js`

The current implementation dispatches to localStorage-backed mock handlers. To connect a real backend, replace the body of `request()`:

```js
// BEFORE (mock):
async function request({ method, resource, id, body, query }) {
  await delay(DEFAULT_LATENCY)
  // …localStorage logic…
}

// AFTER (real):
async function request({ method, resource, id, body, query }) {
  const url = new URL(`${API_BASE}/${resource}${id ? `/${id}` : ''}`)
  if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(getSessionToken() ? { Authorization: `Bearer ${getSessionToken()}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new ApiError(res.status, err.message || `HTTP ${res.status}`)
  }
  return res.json()
}
```

Add to top of file:
```js
const API_BASE = import.meta.env.VITE_API_BASE || '/api/v1'
import { getSession } from '../utils/storage.js'  // for token
function getSessionToken() { return getSession()?.token }
```

That's it. All services (`leadService`, `teacherService`, etc.) automatically use the new client.

## Step 2 — Replace `authService`

File: `src/services/authService.js`

```js
export async function sendOtp({ mobile, role, name }) {
  const res = await fetch(`${API_BASE}/auth/otp/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile, role, name }),
  })
  if (!res.ok) throw new Error((await res.json()).message)
  return res.json()  // { sent: true, expiresInSec: 300 }
  // No `demoOtp` in production — remove from useOTP.js UI display
}

export async function verifyOtp({ mobile, otp, role, name }) {
  const res = await fetch(`${API_BASE}/auth/otp/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile, otp, role, name }),
  })
  if (!res.ok) throw new Error((await res.json()).message)
  const { session, user } = await res.json()
  storage.set('session', session)
  return { session, user }
}

export async function adminLogin({ email, password }) {
  const res = await fetch(`${API_BASE}/auth/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error((await res.json()).message)
  const { session } = await res.json()
  storage.set('session', session)
  return { session }
}
```

Also remove the `demoOtp` display from:
- `src/hooks/useOTP.js` (drop the `demoOtp` state)
- `src/pages/public/BecomeTutor.jsx`
- `src/pages/auth/TeacherLogin.jsx`
- `src/pages/auth/StudentLogin.jsx`

And remove the `[DEMO OTP]` console.info line.

## Step 3 — Replace `contentService` (optional)

File: `src/services/contentService.js`

Currently reads from `src/data/*.js`. To drive from a CMS:

```js
export const contentService = {
  getClasses:        () => apiClient.get('content/classes'),
  getBoards:         () => apiClient.get('content/boards'),
  getSubjects:       () => apiClient.get('content/subjects'),
  getCourses:        () => apiClient.get('content/courses'),
  getTuitionTypes:   () => apiClient.get('content/tuition-types'),
  getLocations:      () => apiClient.get('content/locations'),
  getTestimonials:   () => apiClient.get('content/testimonials'),
  getFaqs:           () => apiClient.get('content/faqs'),
  getBlogPosts:      () => apiClient.get('content/blog-posts'),
  getBlogPost:       (slug) => apiClient.get('content/blog-posts', { id: slug }),
  getBlogCategories: () => apiClient.get('content/blog-categories'),
}
```

Note: removing the `await delay()` wrapper. The pages already use `useAsync(contentService.getX)` and will work as-is.

## Step 4 — File Uploads

The teacher profile wizard currently treats file inputs as local-only (no upload). For production, add an upload service:

```js
// src/services/uploadService.js
export async function uploadFile(file, category) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('category', category)
  const res = await fetch(`${API_BASE}/uploads`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getSessionToken()}` },
    body: formData,
  })
  return res.json()  // { url: 'https://cdn.srijeetutor.com/…' }
}
```

Then in the wizard's `FileUpload` component, call `uploadFile` on change and store the returned URL in the form state.

## Step 5 — Environment Variables

Add a `.env` file:

```
VITE_API_BASE=https://api.srijeetutor.com/v1
```

Vite exposes this as `import.meta.env.VITE_API_BASE`.

## Step 6 — Remove Demo Affordances

After all the above:

1. Remove `<DemoBanner />` from layouts.
2. Set `SITE.isDemo = false` in `src/config/site.js`.
3. Remove the "Demo" badge from testimonials, blog posts, lead form.
4. Replace `[PLACEHOLDER: …]` strings in `src/config/site.js` and `src/data/faqs.js` with real business data.
5. Remove `mockLeads.js`, `mockTeachers.js`, `mockOpportunities.js` from the seed calls in services (or keep as initial seed data — your call).

## Step 7 — Production SEO

For full SEO with server-rendered metadata:

1. Move `index.html` generation to a server (Next.js or a server template) — OR keep the SPA approach and rely on Google's JS rendering.
2. Per-page OG images: generate dynamically (Cloudinary, Vercel OG, etc.) and pass via `ogImage` prop to `<Seo>`.
3. Add `<link rel="alternate" hreflang="…">` for any future multilingual support.
4. Submit XML sitemap (build from `seoByRoute` keys + blog posts + future CMS pages).

## What Does NOT Change

- All `src/pages/**` — no edits.
- All `src/components/**` — no edits.
- All `src/layouts/**` — no edits.
- All `src/routes/**` — no edits.
- All `src/context/**` — no edits.
- All `src/hooks/**` — no edits (except removing demo OTP display).

This is the backend-ready promise: **swap the data sources, keep the UI**.
