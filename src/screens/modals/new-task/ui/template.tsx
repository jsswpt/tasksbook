type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'NewTaskModal' template {isFallback ? 'fallback' : 'component'}</>
)
