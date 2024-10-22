import { Skeleton } from "@mui/material";

export const Fallback = () => (
  <Skeleton
    component="div"
    variant="circular"
    sx={{
      height: ({ spacing }) => spacing(38),
      width: ({ spacing }) => spacing(38),
    }}
  />
);
