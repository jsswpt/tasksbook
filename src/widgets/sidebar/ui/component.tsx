import { AddOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useUnit } from 'effector-react'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

import { SearchCategories } from '@/features/search-categories'

import { category } from '@/entities'

const CategoriesList = () => {
  const isPending = useUnit(category.$isPending)

  return <category.NavCategoriesList isFallback={isPending} />
}

export const Component = () => (
  <Template
    categoriesList={<CategoriesList />}
    newCategoryButton={
      <Button
        component={RouterLink}
        to="~/new-category"
        startIcon={<AddOutlined />}
      >
        Новая категория
      </Button>
    }
    searchCategories={<SearchCategories />}
  />
)
