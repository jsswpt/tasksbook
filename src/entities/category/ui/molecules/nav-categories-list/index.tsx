import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type NavCategoriesListProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const NavCategoriesList = ({ isFallback }: NavCategoriesListProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
