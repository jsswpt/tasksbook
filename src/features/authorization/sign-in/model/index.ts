import { createEffect, sample } from 'effector'
import { createForm } from 'effector-forms'

import { signInReq } from '../api'

import { session } from '@/entities'

import { rules } from '@/shared/lib/validation'
import userJson from '@/shared/mock/user.json'

const signInFx = createEffect(signInReq)

type SignInForm = {
  email: string
  password: string
}

export const signInForm = createForm<SignInForm>({
  fields: {
    email: {
      init: userJson.email,
      rules: [
        { ...rules.required(), errorText: 'Поле должно быть заполнено' },
        {
          ...rules.email(),
          errorText: 'Невалидный email',
        },
      ],
    },
    password: {
      init: userJson.password,
      rules: [
        { ...rules.required(), errorText: 'Поле должно быть заполнено' },
        {
          ...rules.minLength(5),
          errorText: 'Минимальная длина пароля - 5 символов',
        },
      ],
    },
  },
  validateOn: ['submit'],
})

export const $isLoading = signInFx.pending

sample({
  clock: signInForm.formValidated,
  target: signInFx,
})

// TODO: УДАЛИТЬ
sample({
  clock: signInFx.done,
  fn: ({ params }) => {
    Object.entries(params).forEach(([key, value]) =>
      localStorage.setItem(key, value)
    )
  },
})

sample({
  clock: signInFx.doneData,
  target: session.$user,
})
