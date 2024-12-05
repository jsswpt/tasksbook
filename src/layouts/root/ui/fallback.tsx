import { Template } from './template'

import { Appbar } from '@/widgets/appbar'
import { Bottombar } from '@/widgets/bottombar'
import { Sidebar } from '@/widgets/sidebar/ui'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template
    header={<Appbar isFallback />}
    sidebar={<Sidebar isFallback />}
    bottombar={<Bottombar isFallback />}
  >
    {children}
  </Template>
)
