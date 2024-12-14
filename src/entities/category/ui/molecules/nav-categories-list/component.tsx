import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

import { category } from '@/entities'

export const Component = () => (
  <Template
    children={
      <category.CategoryList
        preferFiltered
        render={({ id, title }) => (
          <Box component="li" key={id}>
            <Link
              component={RouterLink}
              to={`/categories/${id}`}
              underline="none"
              color="inherit"
            >
              <category.CategoryItem title={title} />
            </Link>
          </Box>
        )}
      />
    }
  />
)
