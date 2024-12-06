import { Button, TextField } from '@mui/material'
import { useForm } from 'effector-forms'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { $isLoading, signInForm } from '../model'
import { Template } from './template'

export const Component = () => {
  const { eachValid, fields, reset, submit } = useForm(signInForm)
  const isLoading = useUnit($isLoading)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  useEffect(() => {
    return () => reset()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <Template
        inputs={[
          <TextField
            label="Эл. почта"
            placeholder="Введите адрес эл. почты"
            type="email"
            name="email"
            value={fields.email.value}
            onChange={(e) => fields.email.onChange(e.currentTarget.value)}
            error={fields.email.hasError()}
            helperText={fields.email.firstError?.errorText}
            disabled={isLoading}
            fullWidth
            size="small"
            key="email"
          />,
          <TextField
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            name="password"
            value={fields.password.value}
            onChange={(e) => fields.password.onChange(e.currentTarget.value)}
            error={fields.password.hasError()}
            helperText={fields.password.firstError?.errorText}
            disabled={isLoading}
            fullWidth
            size="small"
            key="password"
          />,
        ]}
        buttons={[
          <Button
            disabled={!eachValid || isLoading}
            type="submit"
            variant="contained"
            key="sign-in"
          >
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
}
