import { BottomNavigation, Box } from "@mui/material";

type TemplateProps = {
  items: React.ReactNode;
  value?: string;
};

export const Template = ({ items, value }: TemplateProps) => (
  <Box zIndex={1000} position="fixed" left={0} right={0} bottom={0}>
    <BottomNavigation
      value={value}
      showLabels
      sx={{
        backdropFilter: "blur(8px)",
        background: "transparent",
      }}
    >
      {items}
    </BottomNavigation>
  </Box>
);
