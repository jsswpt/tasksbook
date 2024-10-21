import { Link, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type TemplateProps = {
  icon: JSX.Element;
  title: string | JSX.Element;
  id?: string;
};

export const Template = ({ icon, id, title }: TemplateProps) => (
  <MenuItem sx={{ position: "relative" }} key={title + (id || "")}>
    {id && (
      <Link
        component={RouterLink}
        to={`#${id}`}
        sx={{
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
    )}
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography
      variant="inherit"
      component="div"
      width="100%"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {title}
    </Typography>
  </MenuItem>
);
