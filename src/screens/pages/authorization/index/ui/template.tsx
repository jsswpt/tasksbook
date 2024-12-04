type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'AuthorizationPage' template {isFallback ? 'fallback' : 'component'}</>
)
