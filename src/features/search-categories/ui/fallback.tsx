import { Skeleton } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template>
    <Skeleton
      variant="rectangular"
      width="100%"
      sx={({ spacing }) => ({ height: spacing(29), marginTop: spacing(16) })}
    />
  </Template>
)
