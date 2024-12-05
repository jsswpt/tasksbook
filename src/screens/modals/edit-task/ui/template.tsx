type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'EditTaskModal' template {isFallback ? 'fallback' : 'component'}</>
)
