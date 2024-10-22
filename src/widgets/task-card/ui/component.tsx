import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import { ToggleTaskStatus } from "root/features/toggle-task-status";

import { Template } from "./template";

type ComponentProps = {
  id: number;
  title: string;
};

export const Component = ({ id, title }: ComponentProps) => (
  <Template
    toggleStatusButton={<ToggleTaskStatus id={id} />}
    title={title}
    deleteButton={
      <IconButton
        component={Link}
        to="?modal=delete-task"
        size="small"
        color="error"
      >
        <DeleteOutlined />
      </IconButton>
    }
    editButton={
      <IconButton
        component={Link}
        to="?modal=edit-task"
        size="small"
        color="inherit"
      >
        <EditOutlined />
      </IconButton>
    }
  />
);
