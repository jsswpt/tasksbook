import { Stack } from "@mui/material";

import { TaskCard } from "root/widgets/task-card";

import { Template } from "./template";

const Tasks = (
  <Stack gap={({ spacing }) => spacing(8)}>
    {Array(5)
      .fill(0)
      .map((_, idx) => (
        <TaskCard isFallback key={idx} />
      ))}
  </Stack>
);

export const Fallback = () => <Template tasks={Tasks} />;
