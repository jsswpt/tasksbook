import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type AuthLayoutProps = { children: JSX.Element } & (
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }
)

export const AuthLayout = ({ children, isFallback }: AuthLayoutProps) =>
  isFallback ? (
    <Fallback children={children} />
  ) : (
    <Suspense fallback={<Fallback children={children} />}>
      <Component children={children} />
    </Suspense>
  )
