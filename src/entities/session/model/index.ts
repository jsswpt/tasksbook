import { createEffect, createStore } from 'effector'

export const authorizeOnLoadFx = createEffect(
  async () =>
    new Promise((res) =>
      setTimeout(() => {
        res(null)
      }, 2000)
    )
)

export const $user = createStore(null)

$user.on(authorizeOnLoadFx.doneData, (value) => value)

export const $isAuth = $user.map((state) => !!state)

export const $isAuthorizing = authorizeOnLoadFx.pending
