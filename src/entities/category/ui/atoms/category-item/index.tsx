import { lazy, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type CategoryItem = {
  icon: JSX.Element;
  title: string;
  id: string;
};

export const CategoryItem = ({ icon, id, title }: CategoryItem) => (
  <Suspense fallback={<Fallback />}>
    <Component icon={icon} id={id} title={title} />
  </Suspense>
);
