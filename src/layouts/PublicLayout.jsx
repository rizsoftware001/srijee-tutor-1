// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { PublicHeader } from '../components/layout/PublicHeader.jsx'
// import { PublicFooter } from '../components/layout/PublicFooter.jsx'
// import { DemoBanner } from '../components/layout/DemoBanner.jsx'

// export function PublicLayout() {
//   return (
//     <div className="flex min-h-screen flex-col bg-white">
//       <DemoBanner />
//       <PublicHeader />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <PublicFooter />
//     </div>
//   )
// }

// export default PublicLayout
import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicHeader } from '../components/layout/PublicHeader.jsx'
import { PublicFooter } from '../components/layout/PublicFooter.jsx'
import { DemoBanner } from '../components/layout/DemoBanner.jsx'

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-ink-950">
      <DemoBanner />
      <PublicHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
