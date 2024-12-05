import { AppBar, Stack, Toolbar } from '@mui/material'

import { APPBAR_HEIGHT_LG, SIDEBAR_WIDTH_LG } from '@/shared/lib/mui'

type TemplateProps = {
  newTaskButton: JSX.Element
  avatar: JSX.Element
}

export const Template = ({ avatar, newTaskButton }: TemplateProps) => (
  <>
    <AppBar
      color="transparent"
      elevation={0}
      sx={({ spacing }) => ({
        left: spacing(SIDEBAR_WIDTH_LG),
        width: `calc(100% - ${spacing(SIDEBAR_WIDTH_LG)})`,
      })}
    >
      <Toolbar
        disableGutters
        sx={({ palette, spacing }) => ({
          background: palette.background.default,
          height: spacing(APPBAR_HEIGHT_LG),
          paddingX: spacing(16),
        })}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          {newTaskButton}
          {avatar}
        </Stack>
      </Toolbar>
    </AppBar>
    <Toolbar
      disableGutters
      sx={{
        height: ({ spacing }) => spacing(APPBAR_HEIGHT_LG),
      }}
    />
  </>
)
