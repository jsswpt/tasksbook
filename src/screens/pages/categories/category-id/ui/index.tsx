import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

export const CategoryPage = () => (
  <Suspense fallback={<Fallback />}>
    <Component />
  </Suspense>
)
