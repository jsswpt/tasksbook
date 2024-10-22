import {
  AddOutlined,
  CategoryOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { Template } from "./template";

export const Component = () => {
  const { pathname } = useLocation();

  return (
    <Template
      value={pathname}
      items={[
        <BottomNavigationAction
          component={Link}
          to="/categories"
          value="/categories"
          label="Категории"
          icon={<CategoryOutlined />}
          key="categories"
        />,
        <BottomNavigationAction
          component={Link}
          to="?modal=new-task"
          label="Новая задача"
          icon={<AddOutlined />}
          key="new-task"
        />,
        <BottomNavigationAction
          component={Link}
          to="/profile"
          value="/profile"
          label="Профиль"
          icon={<PersonOutline />}
          key="profile"
        />,
      ]}
    />
  );
};
