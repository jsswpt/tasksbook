import {
  AddOutlined,
  HomeOutlined,
  WorkspacesOutlined,
} from '@mui/icons-material'
import { BottomNavigationAction } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    items={[
      <BottomNavigationAction
        component={RouterLink}
        to="/"
        value=""
        label="Главная"
        icon={<HomeOutlined />}
      />,
      <BottomNavigationAction
        component={RouterLink}
        to="~/new-task"
        label="Новая задача"
        icon={<AddOutlined />}
      />,
      <BottomNavigationAction
        component={RouterLink}
        to="/categories"
        value="categories"
        label="Категории"
        icon={<WorkspacesOutlined />}
      />,
    ]}
  />
)
