import { Box } from '@mui/material'

import { session } from '@/entities'

type TemplateProps = {
  signInForm: JSX.Element
}

export const Template = ({ signInForm }: TemplateProps) => (
  <Box maxWidth={({ spacing }) => spacing(320)} width="100%">
    <session.AuthCard title="Вход в аккаунт">{signInForm}</session.AuthCard>
  </Box>
)
