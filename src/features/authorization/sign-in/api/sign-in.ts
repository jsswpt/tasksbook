import { session } from '@/entities'

import userJson from '@/shared/mock/user.json'

type SignInReq = {
  (data: { email: string; password: string }): Promise<session.SessionUser>
}

const userResponse = Object.fromEntries(
  Object.entries(userJson).filter(([key]) => key !== 'password')
) as session.SessionUser

export const signInReq: SignInReq = async ({ email, password }) =>
  new Promise<session.SessionUser>((res, rej) =>
    setTimeout(() => {
      if (userJson.email !== email || userJson.password !== password) {
        rej(new Error('Неверный адрес эл. почты или пароль'))
      }

      res(userResponse)
    }, 2000)
  )
