import { BrowserRouter } from 'react-router-dom'

import { ModalRouter } from './modals'
import { PagesRouter } from './pages'

export const AppRouter = () => (
  <BrowserRouter>
    <ModalRouter />
    <PagesRouter />
  </BrowserRouter>
)
