import { Avatar, Link, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link as RouterLink } from "react-router-dom";

import { sessionModel } from "root/entities/session";

import { Template } from "./template";

export const Component = observer(() => {
  const { user } = sessionModel;

  return (
    <Template
      avatar={
        <Link component={RouterLink} to="/profile" underline="none">
          <Avatar src={user?.avatar}>
            {user!.firstName[0]} {user!.lastName[0]}
          </Avatar>
        </Link>
      }
      greeting={
        <Typography variant="subtitle2">
          Hello,{" "}
          <Typography variant="inherit" component="span" fontWeight={600}>
            @{user!.nickName}!
          </Typography>
        </Typography>
      }
    />
  );
});
