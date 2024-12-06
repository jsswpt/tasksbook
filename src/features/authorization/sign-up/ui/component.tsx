import { Button, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <form>
    <Template
      inputs={[
        <TextField
          label="Эл. почта"
          placeholder="Введите адрес эл. почты"
          type="email"
          name="email"
          fullWidth
          size="small"
          key="email"
        />,
        <TextField
          label="Логин"
          placeholder="Введите логин"
          type="text"
          name="login"
          fullWidth
          size="small"
          key="login"
        />,
        <TextField
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          name="password"
          fullWidth
          size="small"
          key="password"
        />,
        <TextField
          label="Подтверждение пароля"
          placeholder="Введите подтверждение пароля"
          type="password"
          name="password-confirmation"
          fullWidth
          size="small"
          key="password-confirm"
        />,
      ]}
      buttons={[
        <Button type="submit" variant="contained" key="sign-up">
          Продолжить
        </Button>,
        <Button
          component={RouterLink}
          to="/authorization/sign-in"
          color="info"
          key="sign-in"
        >
          Вход
        </Button>,
      ]}
    />
  </form>
)
