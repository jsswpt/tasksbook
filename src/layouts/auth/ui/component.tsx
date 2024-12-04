import { Template } from './template'

type ComponentProps = {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => (
  <Template footer={<footer>footer</footer>} header={<header>header</header>}>
    {children}
  </Template>
)
