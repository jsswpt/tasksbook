import { Template } from './template'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template>{children}</Template>
)
