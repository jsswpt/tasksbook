import { Template } from './template'

import { Appbar } from '@/widgets/appbar'
import { Sidebar } from '@/widgets/sidebar/ui'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template header={<Appbar isFallback />} sidebar={<Sidebar isFallback />}>
    {children}
  </Template>
)
