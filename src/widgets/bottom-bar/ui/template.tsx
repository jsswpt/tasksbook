import { BottomNavigation, Box } from "@mui/material";

type TemplateProps = {
  items: React.ReactNode;
  value?: string;
  onChange?: (event: React.SyntheticEvent, value: string) => void;
};

export const Template = ({ items, onChange, value }: TemplateProps) => (
  <Box position="fixed" left={0} right={0} bottom={0}>
    <BottomNavigation
      value={value}
      onChange={onChange}
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
