type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'DeleteCategoryModal' template {isFallback ? 'fallback' : 'component'}</>
)
