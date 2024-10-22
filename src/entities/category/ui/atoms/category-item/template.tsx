import { Link, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type TemplateProps = {
  icon: JSX.Element;
  title: string | JSX.Element;
  id?: number;
  disabled?: boolean;
};

export const Template = ({ disabled, icon, id, title }: TemplateProps) => (
  <MenuItem disabled={disabled} sx={{ position: "relative" }}>
    {id && (
      <Link
        component={RouterLink}
        to={`/categories/${id}`}
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
