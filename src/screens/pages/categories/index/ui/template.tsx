type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'CategoriesPage' template {isFallback ? 'fallback' : 'component'}</>
)
