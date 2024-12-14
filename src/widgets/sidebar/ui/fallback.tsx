import { Skeleton } from '@mui/material'

import { Template } from './template'

import { category } from '@/entities'

export const Fallback = () => (
  <Template
    categoriesList={<category.SidebarCategoriesList isFallback />}
    newCategoryButton={
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{ height: ({ spacing }) => spacing(36) }}
      />
    }
    searchCategories={
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={({ spacing }) => ({ height: spacing(29), marginTop: spacing(16) })}
      />
    }
  />
)
