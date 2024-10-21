import { CssBaseline, ThemeProvider } from "@mui/material";

import { Router } from "root/screens";

import { lightTheme } from "root/shared/lib/mui";

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>
);
