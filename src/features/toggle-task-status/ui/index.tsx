import { lazy, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type ToggleTaskStatusProps =
  | { isFallback?: false; id: number; isDone: boolean; categoryId: number }
  | { isFallback: true };

export const ToggleTaskStatus = (props: ToggleTaskStatusProps) =>
  !props.isFallback ? (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  ) : (
    <Fallback />
  );
