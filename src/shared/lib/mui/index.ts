import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  spacing: (value: number) => value / 16 + "rem",
  typography: {
    allVariants: {
      lineHeight: "125%",
    },
  },
});

export const SIDEBAR_WIDTH = 240;
export const APPBAR_HEIGHT = 84;
