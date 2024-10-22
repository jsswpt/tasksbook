import { lazy, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type CategoryItem =
  | {
      isFallback?: false;
      icon: JSX.Element;
      title: string;
      id: number;
    }
  | {
      isFallback: true;
    };

export const CategoryItem = (props: CategoryItem) => {
  if (props.isFallback) {
    return <Fallback />;
  }

  const { icon, id, title } = props;

  return (
    <Suspense fallback={<Fallback />}>
      <Component icon={icon} id={id} title={title} />
    </Suspense>
  );
};
