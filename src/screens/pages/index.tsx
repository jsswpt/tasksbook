import { Outlet, RouteObject, useLocation, useRoutes } from 'react-router-dom'

import { AuthorizationPage } from './authorization/index'
import { SignInPage } from './authorization/sign-in'
import { SignUpPage } from './authorization/sign-up'
import { CategoryPage } from './categories/category-id'
import { CategoriesPage } from './categories/index'
import { IndexPage } from './index/ui'
import { ProfilePage } from './profile/index'

import { AuthLayout } from '@/layouts/auth'
import { RootLayout } from '@/layouts/root'

const routesConfig: RouteObject[] = [
  {
    children: [
      {
        element: <IndexPage />,
        path: '',
      },
      {
        element: <CategoriesPage />,
        path: 'categories',
      },
      {
        element: <CategoryPage />,
        path: 'categories/:categoryId',
      },
      {
        element: <ProfilePage />,
        path: 'profile',
      },
    ],
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    path: '/',
  },
  {
    children: [
      {
        element: <AuthorizationPage />,
        path: '',
      },
      {
        element: <SignInPage />,
        path: 'sign-in',
      },
      {
        element: <SignUpPage />,
        path: 'sign-up',
      },
    ],
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    path: '/authorization',
  },
]

export const PagesRouter = () => {
  const [pagePath] = useLocation().pathname.split('~')

  const routes = useRoutes(routesConfig, {
    pathname: pagePath,
  })

  return routes
}