import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SidebarProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const Sidebar = ({ isFallback }: SidebarProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
