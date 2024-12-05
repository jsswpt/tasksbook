import { Template } from './template'

import { Appbar } from '@/widgets/appbar'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template header={<Appbar isFallback />}>{children}</Template>
)
