import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'

type TemplateProps = {
  icon?: JSX.Element
  title: JSX.Element
}

export const Template = ({ icon, title }: TemplateProps) => (
  <MenuItem
    component="button"
    sx={{
      overflow: 'hidden',
      paddingX: ({ spacing }) => spacing(20),
      width: '100%',
    }}
  >
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <ListItemText>{title}</ListItemText>
  </MenuItem>
)
