type TemplateProps = {
  header: JSX.Element
  children: React.ReactNode
  footer: JSX.Element
}

export const Template = ({ children, footer, header }: TemplateProps) => (
  <>
    {header}
    <main style={{ minHeight: '100svh' }}>{children}</main>
    {footer}
  </>
)
