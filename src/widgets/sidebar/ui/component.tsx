import { AddOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    categoriesList={<Box marginLeft={({ spacing }) => spacing(20)}>TODO</Box>}
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
