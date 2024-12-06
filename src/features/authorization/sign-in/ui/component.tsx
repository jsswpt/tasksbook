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
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          name="password"
          fullWidth
          size="small"
          key="password"
        />,
      ]}
      buttons={[
        <Button type="submit" variant="contained" key="sign-in">
          Войти
        </Button>,
        <Button
          component={RouterLink}
          to="/authorization/sign-up"
          color="info"
          key="sign-up"
        >
          Регистрация
        </Button>,
      ]}
    />
  </form>
)
