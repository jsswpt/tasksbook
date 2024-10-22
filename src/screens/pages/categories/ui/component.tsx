import {
  AddOutlined,
  CloseOutlined,
  EditOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  FabProps,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

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
          FabProps={
            {
              component: Link,
              to: "?modal=new-category",
            } as Partial<FabProps>
          }
          icon={<AddOutlined />}
          tooltipTitle="Добавить"
          onContextMenu={(e) => e.preventDefault()}
        />
        <SpeedDialAction
          FabProps={
            {
              component: Link,
              to: "?mode=edit",
            } as Partial<FabProps>
          }
          icon={<EditOutlined />}
          tooltipTitle="Редактировать"
          onContextMenu={(e) => e.preventDefault()}
        />
      </SpeedDial>
    }
  />
);
