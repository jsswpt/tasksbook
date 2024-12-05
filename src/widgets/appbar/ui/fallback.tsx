import { Skeleton } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template
    newTaskButton={
      <Skeleton
        variant="rounded"
        sx={({ spacing }) => ({ height: spacing(36), width: spacing(171) })}
      />
    }
    avatar={
      <Skeleton
        variant="circular"
        sx={({ spacing }) => ({ height: spacing(40), width: spacing(40) })}
      />
    }
  />
)
