import { Template } from './template'

type FallbackProps = {
  children: JSX.Element
}

export const Fallback = ({ children }: FallbackProps) => (
  <Template
    header={<header>loading...</header>}
    footer={<footer>loading...</footer>}
  >
    {children}
  </Template>
)
