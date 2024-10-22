import {
  AddOutlined,
  CloseOutlined,
  EditOutlined,
  MoreVert,
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import { CategoriesList } from "root/entities/category";

import { Template } from "./template";

export const Component = () => (
  <Template
    categories={<CategoriesList />}
    fab={
      <SpeedDial
        ariaLabel="actions"
        icon={
          <SpeedDialIcon icon={<MoreVert />} openIcon={<CloseOutlined />} />
        }
        sx={{
          bottom: ({ spacing }) => spacing(88),
          position: "fixed",
          right: ({ spacing }) => spacing(32),
        }}
      >
        <SpeedDialAction
          icon={<AddOutlined />}
          tooltipTitle="Добавить"
          onContextMenu={(e) => e.preventDefault()}
        />
        <SpeedDialAction
          icon={<EditOutlined />}
          tooltipTitle="Редактировать"
          onContextMenu={(e) => e.preventDefault()}
        />
      </SpeedDial>
    }
  />
);
