import { AddOutlined } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { useUnit } from 'effector-react'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

import { category } from '@/entities'

const CategoriesList = () => {
  const isPending = useUnit(category.$isPending)

  return <category.SidebarCategoriesList isFallback={isPending} />
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
    searchCategories={
      <TextField
        placeholder="Поиск по категориям"
        label="Поиск"
        fullWidth
        size="small"
        variant="standard"
      />
    }
  />
)
