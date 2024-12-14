import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SidebarCategoriesListProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SidebarCategoriesList = ({
  isFallback,
}: SidebarCategoriesListProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
