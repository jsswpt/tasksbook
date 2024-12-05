type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'NewCategoryModal' template {isFallback ? 'fallback' : 'component'}</>
)
