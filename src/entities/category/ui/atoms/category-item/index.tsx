import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = {
  title: string
  icon?: JSX.Element
}

type CategoryItemProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const CategoryItem = ({ isFallback, ...rest }: CategoryItemProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
