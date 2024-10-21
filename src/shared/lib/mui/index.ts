import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      lineHeight: "125%",
    },
  },
});
