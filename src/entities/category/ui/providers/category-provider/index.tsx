import { useGate } from 'effector-react'

import { categoryGate } from '@/entities/category/model'

export const CategoryProvider = () => {
  useGate(categoryGate)

  return null
}
