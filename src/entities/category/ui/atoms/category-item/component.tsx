import { Typography } from '@mui/material'

import { Template } from './template'

type ComponentProps = {
  title: string
  icon?: JSX.Element
}

export const Component = ({ icon, title }: ComponentProps) => (
  <Template
    icon={icon}
    title={
      <Typography textAlign="start" variant="inherit">
        {title}
      </Typography>
    }
  />
)
