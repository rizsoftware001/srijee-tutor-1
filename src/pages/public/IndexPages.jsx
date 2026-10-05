// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
// import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
// import { Card, CardBody } from '../../components/ui/Card.jsx'
// import { Button } from '../../components/ui/Button.jsx'
// import { FinalCTA } from '../../components/sections/CTASections.jsx'
// import { classes, classGroups } from '../../data/classes.js'
// import { boards } from '../../data/boards.js'
// import { subjects } from '../../data/subjects.js'
// import { courses } from '../../data/courses.js'

// export function TuitionIndex() {
//   const types = [
//     { to: '/online-tuition', icon: '💻', title: 'Online Tuition', desc: 'Live, one-to-one classes from anywhere. Recorded for revision.' },
//     { to: '/home-tuition', icon: '🏠', title: 'Home Tuition', desc: 'Verified tutors visit your home for in-person classes.' },
//     { to: '/one-to-one-tuition', icon: '🎯', title: 'One-to-One Tuition', desc: 'Dedicated personal attention — at home or online.' },
//   ]
//   return (
//     <>
//       <Seo path="/tuition" />
//       <Section className="!pb-0">
//         <Container>
//           <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tuition' }]} />
//           <div className="mt-6 max-w-3xl">
//             <span className="eyebrow">Tuition Types</span>
//             <h1 className="h1 mt-3">Choose your tuition mode</h1>
//             <p className="mt-5 text-lg text-ink-600">Online, home, or one-to-one — every mode is staffed by verified tutors and supported by a dedicated counsellor.</p>
//           </div>
//         </Container>
//       </Section>
//       <Section>
//         <Container>
//           <div className="grid gap-6 md:grid-cols-3">
//             {types.map((t) => (
//               <Card key={t.to} hover className="p-7 flex flex-col">
//                 <span className="text-3xl">{t.icon}</span>
//                 <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{t.title}</h3>
//                 <p className="mt-2 text-sm text-ink-600 flex-1">{t.desc}</p>
//                 <Button as={Link} to={t.to} variant="outline" size="md" className="mt-4 self-start">Learn more →</Button>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </Section>
//       <FinalCTA />
//     </>
//   )
// }

// export function ClassesIndex() {
//   return (
//     <>
//       <Seo path="/classes" />
//       <Section>
//         <Container>
//           <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes' }]} />
//           <div className="mt-6 max-w-3xl">
//             <span className="eyebrow">By Class</span>
//             <h1 className="h1 mt-3">Tuition for every grade</h1>
//             <p className="mt-5 text-lg text-ink-600">From middle school basics to board-year specialisation — find a tutor who teaches your class.</p>
//           </div>
//           <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {classGroups.map((group) => (
//               <Card key={group} className="p-6">
//                 <h3 className="font-display text-base font-semibold text-ink-900">{group}</h3>
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {classes.filter((c) => c.group === group).map((c) => (
//                     <Link key={c.slug} to="/student/requirement" className="chip bg-brand-50 text-brand-700 hover:bg-brand-100">{c.label}</Link>
//                   ))}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </Section>
//     </>
//   )
// }

// export function BoardsIndex() {
//   return (
//     <>
//       <Seo path="/boards" />
//       <Section>
//         <Container>
//           <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Boards' }]} />
//           <div className="mt-6 max-w-3xl">
//             <span className="eyebrow">By Board</span>
//             <h1 className="h1 mt-3">Board-specific tuition</h1>
//             <p className="mt-5 text-lg text-ink-600">Tutors who understand your syllabus, exam pattern, and marking scheme.</p>
//           </div>
//           <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {boards.map((b) => (
//               <Card key={b.slug} hover className="p-6">
//                 <h3 className="font-display text-lg font-semibold text-ink-900">{b.label}</h3>
//                 <p className="mt-1 text-xs text-ink-500">{b.desc}</p>
//                 <Button as={Link} to="/student/requirement" variant="ghost" size="sm" className="mt-3 -ml-2">Find a {b.label} tutor →</Button>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </Section>
//     </>
//   )
// }

// export function SubjectsIndex() {
//   return (
//     <>
//       <Seo path="/subjects" />
//       <Section>
//         <Container>
//           <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Subjects' }]} />
//           <div className="mt-6 max-w-3xl">
//             <span className="eyebrow">By Subject</span>
//             <h1 className="h1 mt-3">Subject-wise expert tutors</h1>
//             <p className="mt-5 text-lg text-ink-600">Pick a subject — get matched with verified tutors who specialise in it.</p>
//           </div>
//           <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
//             {subjects.map((s) => (
//               <Link key={s.slug} to="/student/requirement" className="card card-hover flex items-center gap-3 p-4">
//                 <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-base font-semibold text-brand-700">{s.icon}</span>
//                 <div>
//                   <p className="text-sm font-medium text-ink-900">{s.label}</p>
//                   {s.popular && <p className="text-2xs text-brand-600">Popular</p>}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </Container>
//       </Section>
//     </>
//   )
// }

// export function CoursesIndex() {
//   return (
//     <>
//       <Seo path="/courses" />
//       <Section>
//         <Container>
//           <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses' }]} />
//           <div className="mt-6 max-w-3xl">
//             <span className="eyebrow">Courses</span>
//             <h1 className="h1 mt-3">Beyond school tuition</h1>
//             <p className="mt-5 text-lg text-ink-600">Specialised courses for languages, computers, and competitive exams — taught by domain experts.</p>
//           </div>
//           <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {courses.map((c) => (
//               <Card key={c.slug} hover className="p-6 flex flex-col">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl">{c.icon}</span>
//                 <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{c.label}</h3>
//                 <p className="mt-2 text-sm text-ink-600 flex-1">{c.desc}</p>
//                 <ul className="mt-4 space-y-1">
//                   {c.items.map((i) => <li key={i} className="text-xs text-ink-600">• {i}</li>)}
//                 </ul>
//               </Card>
//             ))}
//           </div>
//         </Container>
//       </Section>
//       <FinalCTA />
//     </>
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom'
import { Seo, Breadcrumbs } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { FinalCTA } from '../../components/sections/CTASections.jsx'
import { classes, classGroups } from '../../data/classes.js'
import { boards } from '../../data/boards.js'
import { subjects } from '../../data/subjects.js'
import { courses } from '../../data/courses.js'

export function TuitionIndex() {
  const types = [
    { to: '/online-tuition', icon: '💻', title: 'Online Tuition', desc: 'Live, one-to-one classes from anywhere. Recorded for revision.' },
    { to: '/home-tuition', icon: '🏠', title: 'Home Tuition', desc: 'Verified tutors visit your home for in-person classes.' },
    { to: '/one-to-one-tuition', icon: '🎯', title: 'One-to-One Tuition', desc: 'Dedicated personal attention — at home or online.' },
  ]
  return (
    <>
      <Seo path="/tuition" />
      <Section className="!pb-0">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tuition' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Tuition Types</span>
            <h1 className="h1 mt-3">Choose your tuition mode</h1>
            <p className="mt-5 text-lg text-ink-600">Online, home, or one-to-one — every mode is staffed by verified tutors and supported by a dedicated counsellor.</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {types.map((t) => (
              <Card key={t.to} hover className="p-7 flex flex-col">
                <span className="text-3xl">{t.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-sm text-ink-600 flex-1">{t.desc}</p>
                <Button as={Link} to={t.to} variant="outline" size="md" className="mt-4 self-start">Learn more →</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  )
}

export function ClassesIndex() {
  return (
    <>
      <Seo path="/classes" />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">By Class</span>
            <h1 className="h1 mt-3">Tuition for every grade</h1>
            <p className="mt-5 text-lg text-ink-600">From middle school basics to board-year specialisation — find a tutor who teaches your class.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classGroups.map((group) => (
              <Card key={group} className="p-6">
                <h3 className="font-display text-base font-semibold text-ink-900">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {classes.filter((c) => c.group === group).map((c) => (
                    <Link key={c.slug} to="/student/requirement" className="chip bg-brand-50 text-brand-700 hover:bg-brand-100">{c.label}</Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export function BoardsIndex() {
  return (
    <>
      <Seo path="/boards" />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Boards' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">By Board</span>
            <h1 className="h1 mt-3">Board-specific tuition</h1>
            <p className="mt-5 text-lg text-ink-600">Tutors who understand your syllabus, exam pattern, and marking scheme.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boards.map((b) => (
              <Card key={b.slug} hover className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900">{b.label}</h3>
                <p className="mt-1 text-xs text-ink-500">{b.desc}</p>
                <Button as={Link} to="/student/requirement" variant="ghost" size="sm" className="mt-3 -ml-2">Find a {b.label} tutor →</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export function SubjectsIndex() {
  return (
    <>
      <Seo path="/subjects" />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Subjects' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">By Subject</span>
            <h1 className="h1 mt-3">Subject-wise expert tutors</h1>
            <p className="mt-5 text-lg text-ink-600">Pick a subject — get matched with verified tutors who specialise in it.</p>
          </div>
          <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {subjects.map((s) => (
              <Link key={s.slug} to="/student/requirement" className="card card-hover flex items-center gap-3 p-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-base font-semibold text-brand-700">{s.icon}</span>
                <div>
                  <p className="text-sm font-medium text-ink-900">{s.label}</p>
                  {s.popular && <p className="text-2xs text-brand-600">Popular</p>}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export function CoursesIndex() {
  return (
    <>
      <Seo path="/courses" />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Courses</span>
            <h1 className="h1 mt-3">Beyond school tuition</h1>
            <p className="mt-5 text-lg text-ink-600">Specialised courses for languages, computers, and competitive exams — taught by domain experts.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => (
              <Card key={c.slug} hover className="p-6 flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl">{c.icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{c.label}</h3>
                <p className="mt-2 text-sm text-ink-600 flex-1">{c.description}</p>
                <ul className="mt-4 space-y-1">
                  {c.features.map((i) => <li key={i} className="text-xs text-ink-600">• {i}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  )
}
