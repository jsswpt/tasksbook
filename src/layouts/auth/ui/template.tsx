import { Box, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Logo } from '@/shared/ui'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <Box component="main">
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={({ spacing }) => spacing(32)}
      minHeight="100svh"
    >
      <Stack alignItems="center">
        <Box
          component={RouterLink}
          to="/authorization"
          sx={({ spacing }) => ({
            '&>*': { height: '100%' },
            height: spacing(64),
          })}
        >
          <Logo />
        </Box>
      </Stack>
      {children}
    </Stack>
  </Box>
)
