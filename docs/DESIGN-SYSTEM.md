# Design System

## Brand Palette

| Token | Use | Hex |
|-------|-----|-----|
| `brand-600` | Primary actions, links | `#1a63e0` |
| `brand-700` | Hover state | `#184fb8` |
| `accent-500` | Secondary CTAs (Become a Tutor) | `#f97316` |
| `success-600` | Verified / converted | `#059669` |
| `warning-500` | Pending / under review | `#f59e0b` |
| `danger-600` | Rejected / error | `#dc2626` |
| `ink-900` | Primary text | `#0f172a` |
| `ink-600` | Secondary text | `#475569` |
| `ink-200` | Borders | `#e2e8f0` |
| `ink-50` | Subtle backgrounds | `#f8fafc` |

Full scale (50–950) for each token available in `tailwind.config.js`.

## Typography

- **Display** (headings): *Plus Jakarta Sans* — 500/600/700/800
- **Body**: *Inter* — 400/500/600/700
- **Mono** (IDs, code): *JetBrains Mono*

Loaded via Google Fonts in `index.html`. Defined as `font-display` and `font-sans` in Tailwind config.

### Type Scale

| Class | Use | Size |
|-------|-----|------|
| `.h1` | Page titles | `text-4xl sm:text-5xl lg:text-6xl` |
| `.h2` | Section titles | `text-3xl sm:text-4xl` |
| `.h3` | Card titles | `text-2xl sm:text-3xl` |
| `.h4` | Subsection | `text-xl sm:text-2xl` |
| `.h5` | Card title (small) | `text-lg` |
| `.eyebrow` | Section eyebrow | `text-xs uppercase tracking-[0.18em]` |

## Spacing

Tailwind defaults. Section rhythm uses `.section` (py-16/20/24) and `.section-tight` (py-10/12/14).

## Containers

| Class | Max-width |
|-------|-----------|
| `.container-page` | 80rem (1280px) — default |
| `.container-narrow` | 4xl (896px) — forms, articles |
| `.container-wide` | 9xl (1536px) — dashboards |

## Components

### Buttons

```jsx
<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button variant="accent">Accent (tutor CTA)</Button>
<Button variant="danger">Danger</Button>
<Button loading>Loading</Button>
<Button as={Link} to="/x">Polymorphic</Button>
```

Sizes: `sm`, `md`, `lg`, `icon`.

### Form Controls

- `Input`, `Textarea`, `Select` — uniform `.input` class
- `Field` — label + hint + error wrapper
- `Checkbox`, `RadioGroup`
- All support `error` prop (red border + message)

### Cards

```jsx
<Card hover>…</Card>
<Card><CardHeader title="…" subtitle="…" action={…}/>…</Card>
```

### Badges

```jsx
<Badge tone="brand|accent|success|warning|danger|ink" size="xs|sm|md" dot>…</Badge>
```

### Modal

```jsx
<Modal open={open} onClose={…} title="…" footer={…}>…</Modal>
```

Portal-rendered, ESC-closes, scroll-locks body.

### States

- `EmptyState` — icon + title + description + action
- `ErrorState` — with retry button
- `ProgressBar` — `tone="brand|success|warning|danger"`
- `Avatar` — initials or image
- `Stat` — KPI card with icon

### Loaders

- `Spinner`, `PageLoader`, `InlineLoader`
- `Skeleton`, `CardSkeleton`, `TableSkeleton`

## Patterns

### Page Section

```jsx
<Section tone="default|subtle|dark|brand" id="…">
  <Container>
    <SectionHeading eyebrow="…" title="…" description="…" align="left|center" />
    …content
  </Container>
</Section>
```

### Form

```jsx
<Field label="Mobile" required error={errors.mobile} hint="10-digit Indian mobile">
  <Input type="tel" value={form.mobile} onChange={set('mobile')} error={errors.mobile} leftIcon={<PhoneIcon/>} />
</Field>
```

## Animation

Subtle and intentional. Defined in Tailwind config:

- `animate-fade-in` (250ms)
- `animate-fade-up` (350ms, ease-out-expo)
- `animate-scale-in` (200ms)
- `animate-shimmer` (1.5s, for skeletons)

`prefers-reduced-motion` is respected — all animations collapse to near-instant.

## Accessibility

- All interactive elements have visible focus rings (`:focus-visible`).
- Form fields always have `<label>` (via `Field`).
- Modals trap focus and restore on close (basic; can be enhanced with focus-trap lib).
- Status messages use `role="status"` and `aria-live="polite"`.
- Color contrast meets WCAG AA on all primary text.
- Reduced-motion media query disables non-essential animation.
