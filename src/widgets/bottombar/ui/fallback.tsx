import { BottomNavigationAction, Skeleton } from '@mui/material'

import { Template } from './template'

const Icon = (
  <Skeleton
    variant="circular"
    sx={({ spacing }) => ({ height: spacing(20), width: spacing(20) })}
  />
)
const Label = (
  <Skeleton variant="text" sx={({ spacing }) => ({ width: spacing(56) })} />
)

export const Fallback = () => (
  <Template
    items={[
      <BottomNavigationAction label={Label} icon={Icon} />,
      <BottomNavigationAction label={Label} icon={Icon} />,
      <BottomNavigationAction label={Label} icon={Icon} />,
    ]}
  />
)
