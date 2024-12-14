import { Skeleton } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template>
    <Skeleton
      variant="rounded"
      width="100%"
      sx={({ spacing }) => ({ height: spacing(40) })}
    />
  </Template>
)
