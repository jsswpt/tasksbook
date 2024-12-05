import { BottomNavigation, Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

type TemplateProps = {
  items: React.ReactNode
}

export const Template = ({ items }: TemplateProps) => {
  const [, basePath] = useLocation().pathname.split('/')

  return (
    <Box component="nav" position="fixed" bottom={0} left={0} right={0}>
      <BottomNavigation
        value={basePath}
        showLabels
        sx={{
          backdropFilter: 'blur(8px)',
          background: ({ palette }) =>
            `color-mix(in srgb, ${palette.background.default}, transparent 40%)`,
          borderRadius: '1.5rem 1.5rem 0 0',
          boxShadow: ({ shadows }) => shadows[10],
          overflow: 'hidden',
        }}
      >
        {items}
      </BottomNavigation>
    </Box>
  )
}
