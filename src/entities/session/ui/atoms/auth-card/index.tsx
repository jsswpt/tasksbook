import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'

export type AuthCardProps = {
  title: string
  children: React.ReactNode
}

export const AuthCard = ({ children, title }: AuthCardProps) => (
  <Card
    variant="outlined"
    sx={{ borderRadius: ({ spacing }) => spacing(16), width: '100%' }}
  >
    <Stack
      gap={({ spacing }) => spacing(16)}
      paddingX={({ spacing }) => spacing(32)}
      paddingY={({ spacing }) => spacing(16)}
    >
      <Box>
        <Typography
          variant="h6"
          component="h1"
          textAlign="center"
          color={({ palette }) => palette.text.secondary}
        >
          {title}
        </Typography>
      </Box>
      {children}
    </Stack>
  </Card>
)
