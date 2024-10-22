import { BottomNavigationAction, Skeleton } from "@mui/material";

import { Template } from "./template";

export const Fallback = () => (
  <Template
    items={[
      <BottomNavigationAction
        disabled
        showLabel
        key="1"
        label={<Skeleton width="3rem" />}
        icon={<Skeleton variant="circular" width={16} height={16} />}
      />,
      <BottomNavigationAction
        disabled
        showLabel
        key="2"
        label={<Skeleton width="3rem" />}
        icon={<Skeleton variant="circular" width={16} height={16} />}
      />,
      <BottomNavigationAction
        disabled
        showLabel
        key="3"
        label={<Skeleton width="3rem" />}
        icon={<Skeleton variant="circular" width={16} height={16} />}
      />,
    ]}
  />
);
