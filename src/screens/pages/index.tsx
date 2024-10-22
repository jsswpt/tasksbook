import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { AuthLayout } from "root/layouts/auth-layout";

import { AuthGuard } from "root/entities/session";

import { CategoriesPage } from "./categories";
import { IndexPage } from "./index/index";
import { ProfilePage } from "./profile";
import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <IndexPage />,
        path: "",
      },
      {
        element: <ProfilePage />,
        path: "profile",
      },
      {
        element: <CategoriesPage />,
        path: "categories",
      },
    ],
    element: (
      <AuthGuard>
        <AuthLayout />
      </AuthGuard>
    ),
    path: "/",
  },
  {
    children: [
      {
        element: <SignInPage />,
        path: "sign-in",
      },
      {
        element: <SignUpPage />,
        path: "sign-up",
      },
    ],
    element: (
      <AuthGuard reverse>
        <Outlet />
      </AuthGuard>
    ),
    path: "/auth",
  },
]);

export const PageRouter = () => <RouterProvider router={router} />;
