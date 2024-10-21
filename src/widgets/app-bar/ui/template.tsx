import { AddOutlined } from "@mui/icons-material";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from "root/shared/lib/mui";

type TemplateProps = {
  welcomeBlock: JSX.Element;
};

export const Template = ({ welcomeBlock }: TemplateProps) => (
  <AppBar
    color="transparent"
    elevation={0}
    sx={{
      background: ({ palette }) => palette.background.default,
      left: ({ spacing }) => spacing(SIDEBAR_WIDTH),
      right: 0,
      width: "auto",
    }}
  >
    <Toolbar disableGutters>
      <Stack
        paddingX={({ spacing }) => spacing(16)}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={({ spacing }) => spacing(APPBAR_HEIGHT)}
        width="100%"
      >
        <Button
          component={Link}
          to="?modal=new-task"
          size="large"
          color="primary"
          variant="contained"
          startIcon={<AddOutlined />}
        >
          Новая задача
        </Button>
        {welcomeBlock}
      </Stack>
    </Toolbar>
  </AppBar>
);
