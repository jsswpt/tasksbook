import { Skeleton } from "@mui/material";

import { ToggleTaskStatus } from "root/features/toggle-task-status";

import { Template } from "./template";

const Button = (
  <Skeleton
    variant="circular"
    component="div"
    sx={{
      height: ({ spacing }) => spacing(28),
      width: ({ spacing }) => spacing(28),
    }}
  />
);

export const Fallback = () => (
  <Template
    toggleStatusButton={<ToggleTaskStatus isFallback />}
    title={<Skeleton width="80%" />}
    deleteButton={Button}
    editButton={Button}
  />
);
