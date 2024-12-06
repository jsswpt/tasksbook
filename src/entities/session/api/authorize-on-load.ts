import userJson from '@/shared/mock/user.json'

type Response = { id: number; email: string; login: string }

type AuthorizeOnLoadReq = {
  (): Promise<Response>
}

const userResponse = Object.fromEntries(
  Object.entries(userJson).filter(([key]) => key !== 'password')
) as Response

export const authorizeOnLoadReq: AuthorizeOnLoadReq = () =>
  new Promise<Response>((res, rej) =>
    setTimeout(() => {
      const email = localStorage.getItem('email')
      const password = localStorage.getItem('password')

      if (email === userJson.email && password === userJson.password) {
        res(userResponse)
      }
      rej(new Error('Unauthorized'))
    }, 2000)
  )
