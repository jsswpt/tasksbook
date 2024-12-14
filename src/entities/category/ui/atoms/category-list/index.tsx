import { useUnit } from 'effector-react'

import {
  $categoriesList,
  $filteredCategoriesList,
  Category,
} from '@/entities/category/model'

export type CategoryListProps = {
  render: (item: Category, index: number) => React.ReactNode
  preferFiltered?: boolean
}

export const CategoryList = ({ preferFiltered, render }: CategoryListProps) => {
  const [categoriesList, filteredCategoriesList] = useUnit([
    $categoriesList,
    $filteredCategoriesList,
  ])

  const list = preferFiltered
    ? (filteredCategoriesList ?? categoriesList ?? [])
    : (categoriesList ?? [])

  return list.map(render)
}
