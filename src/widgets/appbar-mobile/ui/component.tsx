import {
  ArrowBackIosNewOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from '@mui/icons-material'
import { Avatar, IconButton, Typography } from '@mui/material'
import { useUnit } from 'effector-react'
import React, { useMemo } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { Template } from './template'

import { session } from '@/entities'

type PagePathToComponents = Record<
  `/${string}`,
  {
    startItem: React.ReactNode
    centerItem: React.ReactNode
    endItem?: React.ReactNode
  }
>

const RenderTitle = ({ title }: { title: string }) => (
  <Typography
    color={({ palette }) => palette.text.primary}
    variant="h6"
    component="h1"
  >
    {title}
  </Typography>
)

const RenderUserName = () => {
  const user = useUnit(session.$user)

  return <RenderTitle title={user?.login ?? ''} />
}

const pagePathToComponents: PagePathToComponents = {
  '/': {
    centerItem: <RenderTitle title="Главная" />,
    endItem: (
      <IconButton size="small">
        <NotificationsNoneOutlined />
      </IconButton>
    ),
    startItem: (
      <Avatar
        component={RouterLink}
        to="/profile"
        sx={({ spacing }) => ({
          height: spacing(34),
          width: spacing(34),
        })}
      />
    ),
  },
  '/categories': {
    centerItem: <RenderTitle title="Категории" />,
    endItem: [
      <IconButton size="small" key="search">
        <SearchOutlined />
      </IconButton>,
      <IconButton size="small" key="notifications">
        <NotificationsNoneOutlined />
      </IconButton>,
    ],
    startItem: (
      <Avatar
        component={RouterLink}
        to="/profile"
        sx={({ spacing }) => ({
          height: spacing(34),
          width: spacing(34),
        })}
      />
    ),
  },
  '/categories/:categoryId': {
    centerItem: <RenderTitle title="Задачи" />,
    endItem: (
      <IconButton size="small" key="search">
        <SearchOutlined />
      </IconButton>
    ),
    startItem: (
      <IconButton size="small" component={RouterLink} to="/categories">
        <ArrowBackIosNewOutlined />
      </IconButton>
    ),
  },
  '/profile': {
    centerItem: <RenderUserName />,
    startItem: (
      <IconButton size="small" component={RouterLink} to="/categories">
        <ArrowBackIosNewOutlined />
      </IconButton>
    ),
  },
}

export const Component = () => {
  const [pagePath] = useLocation().pathname.split('~')

  const { centerItem, endItem, startItem } = useMemo(() => {
    const formattedPath = pagePath.includes('/categories/')
      ? '/categories/:categoryId'
      : pagePath

    return (
      pagePathToComponents[formattedPath as `/${string}`] ?? {
        centerItem: <></>,
        endItem: <></>,
        startItem: <></>,
      }
    )
  }, [pagePath])

  console.log(pagePath)

  return (
    <Template startItem={startItem} centerItem={centerItem} endItem={endItem} />
  )
}
