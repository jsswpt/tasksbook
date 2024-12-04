type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'SignInPage' template {isFallback ? 'fallback' : 'component'}</>
)
