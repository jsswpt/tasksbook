import { Box } from "@mui/material";

type TemplateProps = {
  tasks: React.ReactNode;
};

export const Template = ({ tasks }: TemplateProps) => (
  <Box
    padding={({ spacing }) => spacing(16)}
    maxWidth={({ spacing }) => spacing(768)}
  >
    {tasks}
  </Box>
);
