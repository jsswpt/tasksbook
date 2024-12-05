import { Template } from './template'

import { Appbar } from '@/widgets/appbar'
import { Bottombar } from '@/widgets/bottombar'
import { Sidebar } from '@/widgets/sidebar'

type ComponentProps = {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => (
  <Template header={<Appbar />} sidebar={<Sidebar />} bottombar={<Bottombar />}>
    {children}
  </Template>
)
