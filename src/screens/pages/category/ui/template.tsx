import { Box, useMediaQuery } from "@mui/material";

import { lightTheme } from "root/shared/lib/mui";

type TemplateProps = {
  tasks: React.ReactNode;
};

export const Template = ({ tasks }: TemplateProps) => {
  const md = useMediaQuery((theme: typeof lightTheme) =>
    theme.breakpoints.up("md"),
  );

  return (
    <Box
      padding={({ spacing }) => spacing(16)}
      width={({ spacing }) => (md ? spacing(576) : "100%")}
    >
      {tasks}
    </Box>
  );
};
