import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useCallback, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { TaskCard } from "root/widgets/task-card";

import { TaskItem, TaskList, taskModel } from "root/entities/task";

import { Fallback } from "./fallback";
import { Template } from "./template";

export const Component = observer(() => {
  const { categoryId } = useParams() as { categoryId: string };

  const { getTasksByCategoryId } = taskModel;

  useLayoutEffect(() => {
    getTasksByCategoryId(Number(categoryId));
  }, [categoryId]);

  const Render = useCallback(
    (task: TaskItem) => <TaskCard {...task} key={task.id} />,
    [],
  );

  const { status } = taskModel;

  if (status !== "done") {
    return <Fallback />;
  }

  return (
    <Template
      tasks={
        <Stack gap={({ spacing }) => spacing(8)}>
          <TaskList categoryId={Number(categoryId)}>{Render}</TaskList>
        </Stack>
      }
    />
  );
});
