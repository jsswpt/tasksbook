import { Stack } from "@mui/material";

import { TaskCard } from "root/widgets/task-card";

import { Template } from "./template";

export const Component = () => (
  <Template
    tasks={
      <Stack gap={({ spacing }) => spacing(8)}>
        {Array(50)
          .fill(0)
          .map((_, idx) => (
            <TaskCard id={idx + 1} title={`Task #${idx + 1}`} key={idx} />
          ))}
      </Stack>
    }
  />
);
