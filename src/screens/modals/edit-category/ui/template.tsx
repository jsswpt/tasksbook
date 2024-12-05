type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'EditCategoryModal' template {isFallback ? 'fallback' : 'component'}</>
)
