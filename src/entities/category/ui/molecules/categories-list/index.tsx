import { observer } from "mobx-react-lite";
import { lazy, Suspense } from "react";

import { categoryModel } from "root/entities/category";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type CategoriesListProps = {
  isFallback?: boolean;
};

export const CategoriesList = observer(
  ({ isFallback }: CategoriesListProps) => {
    const { status } = categoryModel;

    if (status !== "done" || isFallback) {
      return <Fallback />;
    }

    return (
      <Suspense fallback={<Fallback />}>
        <Component />
      </Suspense>
    );
  },
);
