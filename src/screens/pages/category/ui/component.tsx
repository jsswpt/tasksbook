import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { TaskCard } from "root/widgets/task-card";

import { taskModel } from "root/entities/task";

import { Fallback } from "./fallback";
import { Template } from "./template";

export const Component = observer(() => {
  const { categoryId } = useParams() as { categoryId: string };

  const { getTasksByCategoryId } = taskModel;

  useLayoutEffect(() => {
    getTasksByCategoryId(Number(categoryId));
  }, [categoryId]);

  const { status, tasks } = taskModel;

  const currentTasks = tasks[Number(categoryId)];

  if (status !== "done") {
    return <Fallback />;
  }

  return (
    <Template
      tasks={
        <Stack gap={({ spacing }) => spacing(8)}>
          {currentTasks?.map((task) => <TaskCard {...task} key={task.id} />)}
        </Stack>
      }
    />
  );
});
