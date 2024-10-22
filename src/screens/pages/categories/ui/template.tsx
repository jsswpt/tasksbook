import { Box, Stack } from "@mui/material";

type TemplateProps = {
  categories: JSX.Element;
  fab: JSX.Element;
};

export const Template = ({ categories, fab }: TemplateProps) => (
  <Stack flex={1} justifyContent="space-between">
    <Box>{categories}</Box>
    {fab}
  </Stack>
);
