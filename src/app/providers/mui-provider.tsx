import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export type MuiProviderProps = {
  children: React.ReactNode
}

const theme = createTheme({ spacing: (value: number) => value / 16 + 'rem' })

export const MuiProvider = ({ children }: MuiProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
