import { Skeleton, Typography } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template
    icon={
      <Skeleton
        variant="circular"
        sx={({ spacing }) => ({ height: spacing(24), width: spacing(24) })}
      />
    }
    title={
      <Typography textAlign="start" variant="inherit">
        <Skeleton width="88%" />
      </Typography>
    }
  />
)
