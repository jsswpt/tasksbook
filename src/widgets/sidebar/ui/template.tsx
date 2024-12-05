import { Box, Drawer, Link, Stack, Typography, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { APPBAR_HEIGHT_LG, SIDEBAR_WIDTH_LG } from '@/shared/lib/mui'
import { Logo } from '@/shared/ui'

type TemplateProps = {
  newCategoryButton: JSX.Element
  searchCategories: JSX.Element
  categoriesList: JSX.Element
}

export const Template = ({
  categoriesList,
  newCategoryButton,
  searchCategories,
}: TemplateProps) => {
  const { palette, spacing } = useTheme()

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ elevation: 8, sx: { border: 'none' } }}
    >
      <Stack
        width={spacing(SIDEBAR_WIDTH_LG)}
        height="100svh"
        overflow="hidden"
      >
        <Stack
          paddingLeft={spacing(20)}
          justifyContent="center"
          height={spacing(APPBAR_HEIGHT_LG)}
        >
          <Link
            component={RouterLink}
            to="/"
            display="block"
            sx={{
              '&>*': { height: '100%' },
              height: spacing(54),
              width: spacing(119),
            }}
          >
            <Logo
              bgColor={palette.primary.main}
              textColor={palette.background.default}
            />
          </Link>
        </Stack>
        <Stack
          paddingY={spacing(20)}
          gap={spacing(8)}
          flex={1}
          overflow="hidden"
        >
          <Stack paddingX={spacing(20)}>
            <Typography variant="h5" color={palette.text.secondary}>
              Категории
            </Typography>
          </Stack>
          <Box paddingX={spacing(20)}>{searchCategories}</Box>
          <Stack
            flex={1}
            sx={{
              '&::-webkit-scrollbar': {
                width: spacing(8),
              },
              '&::-webkit-scrollbar-thumb': {
                background: palette.divider,
                borderRadius: spacing(16),
              },
              '&::-webkit-scrollbar-track': {
                background: palette.divider,
                borderRadius: spacing(16),
              },
              overflowY: 'auto',
            }}
          >
            <Box>{categoriesList}</Box>
          </Stack>
          {newCategoryButton}
        </Stack>
      </Stack>
    </Drawer>
  )
}
