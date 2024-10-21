import { AddBoxOutlined, LogoutOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Link,
  ListItemIcon,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from "root/shared/lib/mui";
import { Logo } from "root/shared/ui";

type TemplateProps = {
  categories: JSX.Element;
};

export const Template = ({ categories }: TemplateProps) => (
  <Drawer
    variant="permanent"
    open
    PaperProps={{
      elevation: 8,
      sx: {
        width: ({ spacing }) => spacing(SIDEBAR_WIDTH),
      },
    }}
  >
    <Stack height="100svh">
      <Stack
        marginBottom={({ spacing }) => spacing(16)}
        paddingLeft={({ spacing }) => spacing(20)}
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        height={({ spacing }) => spacing(APPBAR_HEIGHT)}
      >
        <Link
          component={RouterLink}
          to="/"
          height={({ spacing }) => spacing(54)}
          sx={{
            "&>*": {
              color: ({ palette }) => palette.primary.main,
              height: "100%",
            },
          }}
        >
          <Logo />
        </Link>
      </Stack>
      <Stack
        marginBottom={({ spacing }) => spacing(64)}
        flex={1}
        gap={({ spacing }) => spacing(16)}
        overflow="hidden"
      >
        <Box paddingLeft={({ spacing }) => spacing(20)}>
          <Typography variant="h6" color="textDisabled">
            Категории
          </Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            "&::-webkit-scrollbar": {
              background: ({ palette }) => palette.background.default,
              borderRadius: "8px",
              width: ({ spacing }) => spacing(8),
            },
            "&::-webkit-scrollbar-thumb": {
              background: ({ palette }) => palette.divider,
              borderRadius: "8px",
              width: ({ spacing }) => spacing(8),
            },
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {categories}
        </Box>
        <Box>
          <MenuItem component={RouterLink} to="?modal=new-category">
            <ListItemIcon>
              <AddBoxOutlined color="primary" />
            </ListItemIcon>
            <Typography variant="inherit" color="primary">
              Добавить
            </Typography>
          </MenuItem>
        </Box>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        height={({ spacing }) => spacing(APPBAR_HEIGHT)}
      >
        <Box width="100%">
          <MenuItem component={RouterLink} to="?modal=logout">
            <ListItemIcon>
              <LogoutOutlined color="warning" />
            </ListItemIcon>
            <Typography variant="inherit" color="warning">
              Выйти
            </Typography>
          </MenuItem>
        </Box>
      </Stack>
    </Stack>
  </Drawer>
);
