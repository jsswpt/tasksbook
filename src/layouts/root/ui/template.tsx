import { Box, useMediaQuery, useTheme } from '@mui/material'

import {
  APPBAR_HEIGHT_LG,
  APPBAR_HEIGHT_XS,
  SIDEBAR_WIDTH_LG,
} from '@/shared/lib/mui'

type TemplateProps = {
  appbar: JSX.Element
  appbarMobile: JSX.Element
  sidebar: JSX.Element
  children: React.ReactNode
  bottombar: JSX.Element
}

export const Template = ({
  appbar,
  appbarMobile,
  bottombar,
  children,
  sidebar,
}: TemplateProps) => {
  const { breakpoints, spacing } = useTheme()

  const isMd = useMediaQuery(breakpoints.up('md'))

  return (
    <>
      {isMd ? appbar : appbarMobile}
      {isMd && sidebar}
      <Box
        paddingTop={spacing(isMd ? APPBAR_HEIGHT_LG : APPBAR_HEIGHT_XS)}
        paddingBottom={!isMd ? spacing(56) : 0}
        paddingLeft={isMd ? spacing(SIDEBAR_WIDTH_LG) : 0}
        minHeight="100svh"
        component="main"
      >
        {children}
      </Box>
      {!isMd && bottombar}
    </>
  )
}
