import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import { ToggleTaskStatus } from "root/features/toggle-task-status";

import { Template } from "./template";

type ComponentProps = {
  id: number;
  categoryId: number;
  title: string;
  isDone: boolean;
};

export const Component = ({
  categoryId,
  id,
  isDone,
  title,
}: ComponentProps) => (
  <Template
    toggleStatusButton={
      <ToggleTaskStatus id={id} isDone={isDone} categoryId={categoryId} />
    }
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
