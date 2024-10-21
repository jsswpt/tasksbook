import { lazy, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

export const AppBar = () => (
  <Suspense fallback={<Fallback />}>
    <Component />
  </Suspense>
);
