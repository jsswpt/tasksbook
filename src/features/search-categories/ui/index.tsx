import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type SearchCategoriesProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const SearchCategories = ({ isFallback }: SearchCategoriesProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )