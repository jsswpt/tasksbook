type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'SignUpPage' template {isFallback ? 'fallback' : 'component'}</>
)
