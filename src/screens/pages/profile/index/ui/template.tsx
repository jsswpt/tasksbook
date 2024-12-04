type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'ProfilePage' template {isFallback ? 'fallback' : 'component'}</>
)
