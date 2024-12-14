import { Skeleton } from '@mui/material'

import { Template } from './template'

import { SearchCategories } from '@/features/search-categories'

import { category } from '@/entities'

export const Fallback = () => (
  <Template
    categoriesList={<category.NavCategoriesList isFallback />}
    newCategoryButton={
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{ height: ({ spacing }) => spacing(36) }}
      />
    }
    searchCategories={<SearchCategories isFallback />}
  />
)
