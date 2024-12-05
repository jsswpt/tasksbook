import { Box, useMediaQuery, useTheme } from '@mui/material'

import { SIDEBAR_WIDTH_LG } from '@/shared/lib/mui'

type TemplateProps = {
  header: JSX.Element
  children: React.ReactNode
}

export const Template = ({ children, header }: TemplateProps) => {
  const { breakpoints } = useTheme()

  const isMd = useMediaQuery(breakpoints.up('md'))

  return (
    <>
      {isMd && header}
      <Box
        paddingLeft={isMd ? ({ spacing }) => spacing(SIDEBAR_WIDTH_LG) : 0}
        component="main"
      >
        {children}
      </Box>
    </>
  )
}
