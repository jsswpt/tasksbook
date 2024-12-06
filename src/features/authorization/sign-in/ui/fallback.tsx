import { Skeleton } from '@mui/material'

import { Template } from './template'

const Input = (
  <Skeleton
    variant="rounded"
    sx={({ spacing }) => ({ height: spacing(40), width: '100%' })}
  />
)

const Button = (
  <Skeleton
    variant="rounded"
    sx={({ spacing }) => ({ height: spacing(36), width: '100%' })}
  />
)

export const Fallback = () => (
  <Template inputs={[Input, Input]} buttons={[Button, Button]} />
)
