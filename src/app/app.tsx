import { MuiProvider } from './providers'

import { AppRouter } from '@/screens'

export const App = () => (
  <MuiProvider>
    <AppRouter />
  </MuiProvider>
)
