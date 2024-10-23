import { Checkbox } from "@mui/material";

import { toggleStatusModel } from "../model";

type ComponentProps = {
  id: number;
  isDone: boolean;
  categoryId: number;
};

export const Component = ({ categoryId, id, isDone }: ComponentProps) => (
  <Checkbox
    size="small"
    checked={isDone}
    onChange={() => toggleStatusModel.toggle(id, categoryId)}
  />
);
