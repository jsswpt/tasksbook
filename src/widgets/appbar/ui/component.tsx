import { AddOutlined } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { Template } from './template'

export const Component = () => (
  <Template
    newTaskButton={
      <Link to="~/new-task">
        <Button variant="contained" color="primary" startIcon={<AddOutlined />}>
          Новая задача
        </Button>
      </Link>
    }
    avatar={
      <Link to="/profile">
        <Avatar />
      </Link>
    }
  />
)
