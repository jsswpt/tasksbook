import { lazy, Suspense } from "react";

import { Fallback } from "./fallback";

const Component = lazy(() =>
  import("./component").then((m) => ({ default: m.Component })),
);

type TaskCardProps =
  | {
      isFallback?: false;
      id: number;
      title: string;
    }
  | { isFallback: true };

export const TaskCard = (props: TaskCardProps) =>
  !props.isFallback ? (
    <Suspense fallback={<Fallback />}>
      <Component id={props.id} title={props.title} />
    </Suspense>
  ) : (
    <Fallback />
  );
