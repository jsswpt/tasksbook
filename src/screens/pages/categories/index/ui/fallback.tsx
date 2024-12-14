import { Template } from './template'

import { category } from '@/entities'

export const Fallback = () => (
  <Template categories={<category.NavCategoriesList isFallback />} />
)
