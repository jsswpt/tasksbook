import { Stack } from '@mui/material'
import React from 'react'

type TemplateProps = {
  inputs: React.ReactNode
  buttons: React.ReactNode
}

export const Template = ({ buttons, inputs }: TemplateProps) => (
  <Stack gap={({ spacing }) => spacing(16)}>
    <Stack gap={({ spacing }) => spacing(8)}>{inputs}</Stack>
    <Stack gap={({ spacing }) => spacing(8)}>{buttons}</Stack>
  </Stack>
)
