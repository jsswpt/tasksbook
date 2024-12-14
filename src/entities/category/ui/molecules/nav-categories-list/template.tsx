import { MenuList } from '@mui/material'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <MenuList>{children}</MenuList>
)
