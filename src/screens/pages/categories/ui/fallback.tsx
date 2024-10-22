import { Skeleton } from "@mui/material";

import { CategoriesList } from "root/entities/category";

import { Template } from "./template";

export const Fallback = () => (
  <Template
    categories={<CategoriesList isFallback />}
    fab={
      <Skeleton
        variant="circular"
        sx={{
          bottom: ({ spacing }) => spacing(88),
          height: ({ spacing }) => spacing(56),
          position: "fixed",
          right: ({ spacing }) => spacing(32),
          width: ({ spacing }) => spacing(56),
        }}
      />
    }
  />
);
