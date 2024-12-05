import { Box, useMediaQuery, useTheme } from '@mui/material'

import { APPBAR_HEIGHT_LG, SIDEBAR_WIDTH_LG } from '@/shared/lib/mui'

type TemplateProps = {
  header: JSX.Element
  sidebar: JSX.Element
  children: React.ReactNode
  bottombar: JSX.Element
}

export const Template = ({
  bottombar,
  children,
  header,
  sidebar,
}: TemplateProps) => {
  const { breakpoints, spacing } = useTheme()

  const isMd = useMediaQuery(breakpoints.up('md'))

  return (
    <>
      {isMd && header}
      {isMd && sidebar}
      <Box
        paddingTop={isMd ? spacing(APPBAR_HEIGHT_LG) : 0}
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
