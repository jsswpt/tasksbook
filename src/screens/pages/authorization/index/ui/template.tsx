import { Stack } from '@mui/material'
import React from 'react'

type TemplateProps = {
  // TODO: удалить
  buttons: React.ReactNode
}

export const Template = ({ buttons }: TemplateProps) => (
  <Stack
    gap={({ spacing }) => spacing(8)}
    maxWidth={({ spacing }) => spacing(320)}
    width="100%"
  >
    {buttons}
  </Stack>
)
