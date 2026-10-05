import React from 'react'
import { Seo, Breadcrumbs, StructuredData } from '../../components/common/SEO.jsx'
import { Section, Container, SectionHeading } from '../../components/common/SectionHeading.jsx'
import { Card, CardBody } from '../../components/ui/Card.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Badge } from '../../components/ui/Badge.jsx'
import { useTrainingCourse } from '../../context/TrainingCourseContext.jsx'
import { SITE } from '../../config/site.js'
import { FinalCTA } from '../../components/sections/CTASections.jsx'

const COURSES = [
  {
    icon: '🐍',
    name: 'Python Programming',
    level: 'Beginner → Advanced',
    duration: '8 weeks',
    desc: 'Master Python fundamentals, data structures, OOP, file handling, and an introduction to data analysis with Pandas & NumPy.',
    topics: ['Variables, loops, functions', 'Lists, dicts, tuples', 'OOP & modules', 'File I/O & error handling', 'Intro to Pandas/NumPy'],
    color: 'from-yellow-500 to-blue-600',
    ageGroup: 'Class 8+ & adults',
  },
  {
    icon: '🌐',
    name: 'Web Development',
    level: 'Beginner → Intermediate',
    duration: '10 weeks',
    desc: 'Build modern responsive websites from scratch — HTML5, CSS3, JavaScript, and an introduction to React.',
    topics: ['HTML5 semantics', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'Responsive design', 'Intro to React'],
    color: 'from-orange-500 to-pink-600',
    ageGroup: 'Class 9+ & adults',
  },
  {
    icon: '📊',
    name: 'MS Office Suite',
    level: 'Beginner',
    duration: '4 weeks',
    desc: 'Master Word, Excel, PowerPoint, and Outlook — essential for school, college, and every workplace.',
    topics: ['Word formatting', 'Excel formulas & charts', 'PowerPoint design', 'Outlook email', 'Office 365 basics'],
    color: 'from-blue-600 to-red-600',
    ageGroup: 'Class 6+ & adults',
  },
  {
    icon: '📒',
    name: 'Tally ERP / Prime',
    level: 'Beginner → Intermediate',
    duration: '6 weeks',
    desc: 'Master Tally accounting software — bookkeeping, inventory, GST, TDS, and payroll in one practical course.',
    topics: ['Company setup', 'Accounting & vouchers', 'Inventory management', 'GST & TDS', 'Payroll & reports'],
    color: 'from-red-500 to-yellow-600',
    ageGroup: 'Class 11+ (Commerce) & adults',
  },
  {
    icon: '🧒',
    name: 'Coding for Kids — Scratch',
    level: 'Beginner',
    duration: '6 weeks',
    desc: 'Block-based coding for young learners — build games, animations, and stories while learning programming logic.',
    topics: ['Block coding basics', 'Loops & conditionals', 'Sprites & costumes', 'Game projects', 'Story animations'],
    color: 'from-orange-400 to-pink-500',
    ageGroup: 'Class 2–6',
  },
  {
    icon: '💾',
    name: 'Computer Science (Class 11–12)',
    level: 'Board-aligned',
    duration: 'Full academic year',
    desc: 'CBSE/ICSE/ISC Computer Science syllabus — Python, SQL, Boolean logic, and data structures, board-exam focused.',
    topics: ['Python (CBSE syllabus)', 'SQL & database concepts', 'Boolean algebra', 'Data structures', 'Board exam prep'],
    color: 'from-brand-500 to-teal-700',
    ageGroup: 'Class 11–12',
  },
  {
    icon: '🗄',
    name: 'Database & SQL',
    level: 'Intermediate',
    duration: '5 weeks',
    desc: 'Learn relational database design, SQL queries, joins, and an introduction to PostgreSQL & MySQL.',
    topics: ['DB design & normalization', 'SQL SELECT/INSERT/UPDATE', 'Joins & subqueries', 'Indexes & views', 'MySQL/PostgreSQL'],
    color: 'from-teal-500 to-brand-700',
    ageGroup: 'Class 10+ & adults',
  },
  {
    icon: '🎨',
    name: 'Graphic Design Basics',
    level: 'Beginner',
    duration: '6 weeks',
    desc: 'Learn design fundamentals with Canva, Figma, and Photoshop basics — for school projects, social media, or freelancing.',
    topics: ['Design principles', 'Canva for posters', 'Figma UI basics', 'Photoshop intro', 'Project work'],
    color: 'from-pink-500 to-purple-700',
    ageGroup: 'Class 7+ & adults',
  },
]

export default function ComputerCourses() {
  const { openTrainingCourse } = useTrainingCourse()

  // Open direct registration form for a specific computer course
  const openForm = (course) => openTrainingCourse({
    courseName: course.name,
    courseType: 'Computer Course',
    icon: course.icon,
    gradient: course.color,
  })

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Who can join these computer courses?', acceptedAnswer: { '@type': 'Answer', text: 'We have courses for every age group — Coding for Kids (Class 2–6), Python/Web Dev for Class 8+ and adults, Tally for Commerce students, and MS Office for everyone.' } },
      { '@type': 'Question', name: 'Do I need my own laptop?', acceptedAnswer: { '@type': 'Answer', text: 'For online classes, yes. For classroom coaching at our Kolkata centre, systems are provided. We recommend having a laptop for practice at home.' } },
      { '@type': 'Question', name: 'Are certificates provided?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, on successful completion of any course, you receive a Srijee Tutor certificate. Some courses also prepare you for industry certifications.' } },
    ],
  }

  return (
    <>
      <Seo
        path="/courses/computer-course"
        title="Computer Courses in Kolkata — Python, Web Dev, Tally, Coding for Kids | Srijee Tutor"
        description="Computer courses at Srijee Tutor — Python, Web Development, MS Office, Tally ERP, Coding for Kids (Scratch), Computer Science (Class 11–12), SQL, and Graphic Design. Online & classroom."
      />
      <StructuredData data={faqJsonLd} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
        <Container>
          <div className="relative py-14 sm:py-16 text-white">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Computer Courses' }]} />
            <span className="eyebrow text-brand-200 mt-4 inline-block">💻 Computer Course</span>
            <h1 className="h1 mt-3 text-white">Code. Build. Create.</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-brand-100 text-pretty leading-relaxed">
              From Coding for Kids to advanced Python, web development, Tally, SQL, and graphic design — Srijee's computer courses are designed for every age and skill level. Hands-on projects, certified trainers, and real-world skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="accent" size="lg" onClick={() => openForm({ name: 'Computer Course', icon: '💻', color: 'from-brand-600 to-ink-900' })}>Enroll Now</Button>
              <Button as="a" href={`tel:${SITE.phoneHref}`} variant="secondary" size="lg" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">📞 {SITE.phoneDisplay}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Course grid */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Courses"
            title="8 computer courses — pick your path"
            description="Each course is project-based, with weekly assessments and a final capstone."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c, i) => (
              <Card key={c.name} className="overflow-hidden card-hover animate-fade-up">
                <div className={`aspect-[3/1] bg-gradient-to-r ${c.color} relative flex items-center px-5`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <span className="text-4xl relative">{c.icon}</span>
                  <div className="ml-4 relative">
                    <p className="font-display text-base font-bold text-white">{c.name}</p>
                    <p className="text-2xs text-white/80">{c.duration}</p>
                  </div>
                </div>
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Badge tone="brand" size="xs">{c.level}</Badge>
                    <span className="text-2xs text-ink-500 dark:text-ink-300">{c.ageGroup}</span>
                  </div>
                  <p className="text-sm text-ink-600 dark:text-ink-300">{c.desc}</p>
                  <ul className="mt-3 space-y-1">
                    {c.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-ink-600 dark:text-ink-300">
                        <span className="mt-1 h-1 w-1 rounded-full bg-brand-500 flex-none" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Button type="button" variant="outline" size="sm" fullWidth className="mt-4" onClick={() => openForm(c)}>
                    Enroll for {c.name} →
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Srijee for computer courses */}
      <Section tone="subtle">
        <Container>
          <SectionHeading eyebrow="Why Srijee" title="What makes our computer courses different" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '👨‍🏫', title: 'Certified Trainers', desc: 'Learn from trainers with industry experience, not just academic qualifications.' },
              { icon: '🛠', title: 'Project-Based Learning', desc: 'Every course ends with a real project you can show on your resume or GitHub.' },
              { icon: '📜', title: 'Certificate on Completion', desc: 'Receive a Srijee Tutor certificate, plus prep for industry certifications.' },
              { icon: '💻', title: 'Online + Classroom', desc: 'Choose your mode — live online classes or in-person at our Kolkata centre.' },
              { icon: '👥', title: 'Small Batch Size', desc: 'Max 6–10 students per batch for personal attention.' },
              { icon: '📚', title: 'Practice Worksheets', desc: 'Daily practice problems and weekly assessments to track progress.' },
              { icon: '🆓', title: 'Free Demo Class', desc: 'Try before you commit — book a no-obligation demo class.' },
              { icon: '🎯', title: 'Job-Ready Skills', desc: 'Curriculum aligned with what employers actually ask for.' },
            ].map((b) => (
              <Card key={b.title} className="p-5 card-hover">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="mt-3 font-display text-sm font-semibold text-ink-900 dark:text-white">{b.title}</h3>
                <p className="mt-1 text-xs text-ink-600 dark:text-ink-300">{b.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
