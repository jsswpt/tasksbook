import { Checkbox } from "@mui/material";

type ComponentProps = {
  id: number;
  isDone: boolean;
  categoryId: number;
};

export const Component = ({ id, isDone }: ComponentProps) => {
  return (
    <Checkbox
      size="small"
      id={id.toString()}
      checked={isDone}
      onChange={() => alert(`Set to ${JSON.stringify(!isDone)}`)}
    />
  );
};
