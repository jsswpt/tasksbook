import { Stack } from "@mui/material";

type TemplateProps = {
  greeting: JSX.Element;
  avatar: JSX.Element;
};

export const Template = ({ avatar, greeting }: TemplateProps) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    gap={({ spacing }) => spacing(16)}
  >
    {greeting}
    {avatar}
  </Stack>
);
