import { AppBar, Stack, Toolbar } from '@mui/material'
import React from 'react'

import { APPBAR_HEIGHT_XS } from '@/shared/lib/mui'

type TemplateProps = {
  startItem: React.ReactNode
  centerItem: React.ReactNode
  endItem?: React.ReactNode
}

export const Template = ({ centerItem, endItem, startItem }: TemplateProps) => (
  <AppBar color="transparent" elevation={0}>
    <Toolbar
      disableGutters
      sx={({ palette, spacing }) => ({
        background: palette.background.default,
        height: spacing(APPBAR_HEIGHT_XS),
        paddingX: spacing(16),
        position: 'relative',
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={({ spacing }) => spacing(16)}
        width="100%"
      >
        <Stack justifyContent="center">{startItem}</Stack>
        <Stack
          flex={endItem ? 1 : 0}
          sx={
            !endItem
              ? {
                  left: '50%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }
              : {}
          }
        >
          {centerItem}
        </Stack>
        {endItem && (
          <Stack
            direction="row"
            alignItems="center"
            gap={({ spacing }) => spacing(8)}
          >
            {endItem}
          </Stack>
        )}
      </Stack>
    </Toolbar>
  </AppBar>
)
