import {
  AddOutlined,
  PersonOutlined,
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
        to="/categories"
        value="categories"
        label="Категории"
        icon={<WorkspacesOutlined />}
      />,
      <BottomNavigationAction
        component={RouterLink}
        to="~/new-task"
        label="Новая задача"
        icon={<AddOutlined />}
      />,
      <BottomNavigationAction
        component={RouterLink}
        to="/profile"
        value="profile"
        label="Профиль"
        icon={<PersonOutlined />}
      />,
    ]}
  />
)
