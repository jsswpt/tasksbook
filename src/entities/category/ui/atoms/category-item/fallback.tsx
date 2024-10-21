import { Skeleton } from "@mui/material";

import { Template } from "./template";

export const Fallback = () => (
  <Template
    icon={<Skeleton width={24} height={24} variant="circular" />}
    title={<Skeleton width="100%" />}
  />
);
