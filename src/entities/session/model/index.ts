import { createEffect, createStore } from 'effector'
import { createGate } from 'effector-react'

import { authorizeOnLoadReq } from '../api'

export const authorizeOnLoadFx = createEffect(authorizeOnLoadReq)

export type SessionUser = {
  id: number
  email: string
  login: string
}

export const $user = createStore<SessionUser | null>(null)

$user.on(authorizeOnLoadFx.doneData, (_, value) => value)

export const $isAuth = $user.map((state) => !!state)

export const $isAuthorizing = authorizeOnLoadFx.pending

export const authGate = createGate()

authGate.status.watch((opened) => opened && authorizeOnLoadFx())
