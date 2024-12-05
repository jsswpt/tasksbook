import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type BottombarProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const Bottombar = ({ isFallback }: BottombarProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
