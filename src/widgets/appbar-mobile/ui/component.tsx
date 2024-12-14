import {
  ArrowBackIosNewOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from '@mui/icons-material'
import { Avatar, Box, IconButton, Link, Stack, Typography } from '@mui/material'
import { useUnit } from 'effector-react'
import React, { useMemo, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { Template } from './template'

import { SearchCategories } from '@/features/search-categories'

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

const CategoriesSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    return (
      <Stack
        zIndex={1}
        position="absolute"
        left={0}
        right={0}
        top={0}
        bottom={0}
        paddingX={({ spacing }) => spacing(16)}
        direction="row"
        alignItems="center"
        gap={({ spacing }) => spacing(8)}
        bgcolor="Background"
      >
        <Box flex={1}>
          <SearchCategories />
        </Box>
        <Link
          component="button"
          variant="body2"
          underline="none"
          color={({ palette }) => palette.primary.main}
          onClick={() => setIsOpen(false)}
          sx={{
            '&:active': {
              opacity: '0.6',
            },
            cursor: 'pointer',
            transition: ({ transitions }) =>
              transitions.duration.shortest + 'ms',
            userSelect: 'none',
          }}
        >
          Отмена
        </Link>
      </Stack>
    )
  }

  return (
    <IconButton onClick={() => setIsOpen(true)} size="small" key="search">
      <SearchOutlined />
    </IconButton>
  )
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
      <CategoriesSearchBar />,
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
