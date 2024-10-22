import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppBar } from "root/widgets/app-bar";
import { BottomBar } from "root/widgets/bottom-bar";
import { Sidebar } from "root/widgets/sidebar";

import { lightTheme } from "root/shared/lib/mui";

import { Template } from "./template";

export const Component = () => {
  const md = useMediaQuery((theme: typeof lightTheme) =>
    theme.breakpoints.up("md"),
  );

  const smProps = {
    bottomBar: <BottomBar />,
  };

  const mdProps = {
    appBar: <AppBar />,
    sidebar: <Sidebar />,
  };

  return <Template {...(md ? mdProps : smProps)} children={<Outlet />} />;
};
