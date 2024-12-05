import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type RootLayoutProps = { children: JSX.Element } & (
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }
)

export const RootLayout = ({ children, isFallback }: RootLayoutProps) =>
  isFallback ? (
    <Fallback children={children} />
  ) : (
    <Suspense fallback={<Fallback children={children} />}>
      <Component children={children} />
    </Suspense>
  )
