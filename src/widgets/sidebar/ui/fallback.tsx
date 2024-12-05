import { Box, Skeleton } from '@mui/material'

import { Template } from './template'

export const Fallback = () => (
  <Template
    categoriesList={
      <Box marginLeft={({ spacing }) => spacing(20)}>loading...</Box>
    }
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
