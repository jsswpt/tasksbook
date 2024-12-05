import { Template } from './template'

import { Appbar } from '@/widgets/appbar'

type ComponentProps = {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => (
  <Template header={<Appbar />}>{children}</Template>
)
