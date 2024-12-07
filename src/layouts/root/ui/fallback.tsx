import { Template } from './template'

import { Appbar } from '@/widgets/appbar'
import { AppbarMobile } from '@/widgets/appbar-mobile'
import { Bottombar } from '@/widgets/bottombar'
import { Sidebar } from '@/widgets/sidebar'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template
    appbar={<Appbar isFallback />}
    appbarMobile={<AppbarMobile isFallback />}
    sidebar={<Sidebar isFallback />}
    bottombar={<Bottombar isFallback />}
  >
    {children}
  </Template>
)
