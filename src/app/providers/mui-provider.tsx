import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export type MuiProviderProps = {
  children: React.ReactNode
}

const theme = createTheme()

export const MuiProvider = ({ children }: MuiProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
