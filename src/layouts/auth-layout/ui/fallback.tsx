import {
  AddOutlined,
  CategoryOutlined,
  PersonOutline,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppBar } from "root/widgets/app-bar";
import { Sidebar } from "root/widgets/sidebar";

import { lightTheme } from "root/shared/lib/mui";

import { Template } from "./template";

export const Fallback = () => {
  const md = useMediaQuery((theme: typeof lightTheme) =>
    theme.breakpoints.up("md"),
  );

  const smProps = {
    bottomBar: (
      // TODO: вынести
      <Box position="fixed" left={0} right={0} bottom={0}>
        <BottomNavigation
          showLabels
          sx={{
            backdropFilter: "blur(8px)",
            background: "transparent",
          }}
        >
          <BottomNavigationAction
            label="Категории"
            icon={<CategoryOutlined />}
          />
          <BottomNavigationAction label="Новая задача" icon={<AddOutlined />} />
          <BottomNavigationAction label="Профиль" icon={<PersonOutline />} />
        </BottomNavigation>
      </Box>
    ),
  };

  const mdProps = {
    appBar: <AppBar />,
    sidebar: <Sidebar />,
  };

  return <Template {...(md ? mdProps : smProps)} children={<Outlet />} />;
};
