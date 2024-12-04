type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean
}

export const Template = ({ isFallback }: TemplateProps) => (
  <>'DeleteTaskModal' template {isFallback ? 'fallback' : 'component'}</>
)
