type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'CategoryPage' template {isFallback ? 'fallback' : 'component'}</>
)
