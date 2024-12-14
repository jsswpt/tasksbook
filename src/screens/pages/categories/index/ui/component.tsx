import { useUnit } from 'effector-react'

import { Template } from './template'

import { category } from '@/entities'

const CategoriesList = () => {
  const isPending = useUnit(category.$isPending)

  return <category.NavCategoriesList isFallback={isPending} />
}

export const Component = () => <Template categories={<CategoriesList />} />
