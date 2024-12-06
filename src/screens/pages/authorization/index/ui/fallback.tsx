import { Skeleton } from '@mui/material'

import { Template } from './template'

const Button = (
  <Skeleton
    variant="rounded"
    sx={({ spacing }) => ({ height: spacing(36), width: '100%' })}
  ></Skeleton>
)

export const Fallback = () => <Template buttons={[Button, Button]} />
