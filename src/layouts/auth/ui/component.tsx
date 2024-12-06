import { Template } from './template'

type ComponentProps = {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => (
  <Template>{children}</Template>
)
