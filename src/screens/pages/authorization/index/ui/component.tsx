import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    buttons={[
      <Button
        component={RouterLink}
        to="/authorization/sign-in"
        variant="contained"
        key="sign-in"
      >
        Вход
      </Button>,
      <Button
        component={RouterLink}
        to="/authorization/sign-up"
        variant="text"
        key="sign-up"
      >
        Регистрация
      </Button>,
    ]}
  />
)
