import { createEvent, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { category } from '@/entities'

import { Normalized } from '@/shared/lib/normalize-data'

type Option = {
  id: string
}

export const handleSubimt = createEvent()

export const handleSearchValueChange = createEvent<string>()

export const cacheSearchResult = createEvent<{
  searchValue: string
  categories: Normalized<category.Category>
}>()

export const setFilteredCategories = createEvent<string>()

const addOption = createEvent<Option>()

export const $options = createStore<Normalized<Option> | null>(null)

export const $optionsList = $options.map((state) => Object.values(state ?? {}))

export const $searchValue = createStore('')

$searchValue.on(handleSearchValueChange, (_, value) => value)

export const gate = createGate()

sample({
  clock: gate.open,
  fn: () => {
    const storedOptions = localStorage.getItem('options')

    return JSON.parse(storedOptions ?? '{}') as Normalized<Option>
  },
  target: $options,
})

sample({
  clock: gate.close,
  fn: () => '',
  target: setFilteredCategories,
})

sample({
  clock: handleSubimt,
  filter: ({ cachedFilteredCategories, searchValue }) =>
    searchValue.trim() !== '' &&
    !(searchValue in (cachedFilteredCategories ?? {})),
  fn: ({ categories, searchValue }) => ({
    categories: Object.fromEntries(
      Object.entries(categories ?? {}).filter(([, value]) =>
        value.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    ),
    searchValue,
  }),
  source: {
    cachedFilteredCategories: category.$cachedFilteredCategories,
    categories: category.$categories,
    searchValue: $searchValue,
  },
  target: cacheSearchResult,
})

sample({
  clock: cacheSearchResult,
  fn: (cachedFilteredCategories, { categories, searchValue }) => ({
    ...cachedFilteredCategories,
    [searchValue]: categories,
  }),
  source: category.$cachedFilteredCategories,
  target: category.$cachedFilteredCategories,
})

sample({
  clock: handleSubimt,
  source: $searchValue,
  target: setFilteredCategories,
})

sample({
  clock: setFilteredCategories,
  filter: (cachedFilteredCategories) => cachedFilteredCategories !== null,
  fn: (cachedFilteredCategories, searchValue) =>
    searchValue ? cachedFilteredCategories![searchValue] : null,
  source: category.$cachedFilteredCategories,
  target: category.$filteredCategories,
})

sample({
  clock: handleSubimt,
  filter: (searchValue) => searchValue.trim() !== '',
  fn: (searchValue): Option => ({ id: searchValue }),
  source: $searchValue,
  target: addOption,
})

sample({
  clock: addOption,
  fn: (options, option) => {
    const prevOptions = options ?? {}

    return { ...prevOptions, [option.id]: option }
  },
  source: $options,
  target: $options,
})

sample({
  clock: $options,
  filter: (options) => options !== null,
  fn: (options) => {
    localStorage.setItem('options', JSON.stringify(options))

    return null
  },
})
