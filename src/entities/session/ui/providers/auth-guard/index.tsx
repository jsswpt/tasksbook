import { Box, Stack } from '@mui/material'
import { useGate, useUnit } from 'effector-react'
import { Navigate } from 'react-router-dom'

import { session } from '@/entities'

import { Logo } from '@/shared/ui'

export type AuthGuardProps = {
  reverse?: boolean
  children: JSX.Element
}

export const AuthGuard = ({ children, reverse }: AuthGuardProps) => {
  const [isAuth, isAuthorizing, isRequested] = useUnit([
    session.$isAuth,
    session.$isAuthorizing,
    session.$isRequested,
  ])

  useGate(session.authGate)

  if (isAuthorizing || !isRequested) {
    return (
      <Stack minHeight="100svh" alignItems="center" justifyContent="center">
        <Box
          sx={({ spacing }) => ({
            '&>*': { height: '100%' },
            height: spacing(54),
          })}
        >
          <Logo />
        </Box>
      </Stack>
    )
  }

  return (reverse ? !isAuth : isAuth) ? (
    children
  ) : (
    <Navigate to={reverse ? '/' : '/authorization/sign-in'} />
  )
}
