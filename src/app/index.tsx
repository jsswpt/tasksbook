import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme } from "root/shared/lib/mui";

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    App
  </ThemeProvider>
);
