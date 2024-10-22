import { Checkbox } from "@mui/material";

type ComponentProps = {
  id: number;
};

export const Component = ({ id }: ComponentProps) => (
  <Checkbox size="small" id={id.toString()} />
);
