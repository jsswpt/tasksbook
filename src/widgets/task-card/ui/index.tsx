import { lazy, memo, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type TaskCardProps =
  | {
      isFallback?: false;
      id: number;
      categoryId: number;
      title: string;
      isDone: boolean;
    }
  | { isFallback: true };

export const TaskCard = memo((props: TaskCardProps) =>
  !props.isFallback ? (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  ) : (
    <Fallback />
  ),
);
