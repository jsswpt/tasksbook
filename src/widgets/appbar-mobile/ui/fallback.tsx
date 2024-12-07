import { Skeleton, Typography } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template
    startItem={
      <Skeleton
        variant="circular"
        sx={({ spacing }) => ({
          height: spacing(34),
          width: spacing(34),
        })}
      />
    }
    centerItem={
      <Typography variant="h6">
        <Skeleton variant="text" width="70%" />
      </Typography>
    }
    endItem={[
      <Skeleton
        variant="circular"
        sx={({ spacing }) => ({
          height: spacing(34),
          width: spacing(34),
        })}
      />,
      <Skeleton
        variant="circular"
        sx={({ spacing }) => ({
          height: spacing(34),
          width: spacing(34),
        })}
      />,
    ]}
  />
)
