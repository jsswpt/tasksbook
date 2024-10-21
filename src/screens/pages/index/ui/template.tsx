import { Box } from "@mui/material";

import { AppBar } from "root/widgets/app-bar";
import { Sidebar } from "root/widgets/sidebar";

import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from "root/shared/lib/mui";

type TemplateProps = {
  // TODO: удалить
  isFallback?: boolean;
};

export const Template = ({ isFallback }: TemplateProps) => (
  <Box minHeight="100svh">
    <AppBar />
    <Sidebar />
    <Box
      padding={({ spacing }) => spacing(16)}
      paddingLeft={({ spacing }) => spacing(SIDEBAR_WIDTH + 16)}
      paddingTop={({ spacing }) => spacing(APPBAR_HEIGHT + 16)}
    >
      'IndexPage' template {isFallback ? "fallback" : "component"}
    </Box>
  </Box>
);
