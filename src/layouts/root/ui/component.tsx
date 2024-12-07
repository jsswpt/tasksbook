import { Template } from './template'

import { Appbar } from '@/widgets/appbar'
import { AppbarMobile } from '@/widgets/appbar-mobile'
import { Bottombar } from '@/widgets/bottombar'
import { Sidebar } from '@/widgets/sidebar'

type ComponentProps = {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => (
  <Template
    appbar={<Appbar />}
    appbarMobile={<AppbarMobile />}
    sidebar={<Sidebar />}
    bottombar={<Bottombar />}
  >
    {children}
  </Template>
)
