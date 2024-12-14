import { useList } from 'effector-react'

import { $categories, Category } from '@/entities/category/model'

export type CategoryListProps = {
  render: (item: Category, index: number) => React.ReactNode
}

export const CategoryList = ({ render }: CategoryListProps) => {
  const list = useList(
    $categories.map((state) => (state !== null ? Object.values(state) : [])),
    render
  )

  return list
}
