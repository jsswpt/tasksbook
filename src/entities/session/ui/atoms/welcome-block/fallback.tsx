import { Skeleton, Typography } from "@mui/material";

import { Template } from "./template";

export const Fallback = () => (
  <Template
    avatar={<Skeleton variant="circular" width={40} height={40} />}
    greeting={
      <Typography variant="subtitle2">
        <Skeleton width={160} />
      </Typography>
    }
  />
);
