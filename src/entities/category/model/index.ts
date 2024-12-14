import { createEffect, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { getCategoriesReq } from '../api'

import { Normalized, normalizeData } from '@/shared/lib/normalize-data'

export const getCategoriesFx = createEffect(getCategoriesReq)

export type Category = {
  id: number
  creator_id: number
  title: string
}

export const $categories = createStore<Normalized<Category> | null>(null)

$categories.on(getCategoriesFx.doneData, (_, value) => normalizeData(value))

export const $isPending = getCategoriesFx.pending

export const $isRequested = createStore(false)

export const categoryGate = createGate()

sample({
  clock: categoryGate.open,
  filter: (isRequested) => !isRequested,
  source: $isRequested,
  target: getCategoriesFx,
})

sample({
  clock: categoryGate.open,
  fn: () => true,
  target: $isRequested,
})
