import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AppbarMobileProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const AppbarMobile = ({ isFallback }: AppbarMobileProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
