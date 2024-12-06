import { Box } from '@mui/material'

import { session } from '@/entities'

type TemplateProps = {
  signUpForm: React.ReactNode
}

export const Template = ({ signUpForm }: TemplateProps) => (
  <Box maxWidth={({ spacing }) => spacing(320)} width="100%">
    <session.AuthCard title="Регистрация">{signUpForm}</session.AuthCard>
  </Box>
)
