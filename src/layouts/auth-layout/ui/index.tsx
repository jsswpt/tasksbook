import { lazy, Suspense, useLayoutEffect } from "react";

import { categoryModel } from "root/entities/category";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

export const AuthLayout = () => {
  const { getCategoriesOnLoad } = categoryModel;
  useLayoutEffect(() => getCategoriesOnLoad(), []);

  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
};
