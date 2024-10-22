import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

type TemplateProps = {
  title: React.ReactNode;
  toggleStatusButton: JSX.Element;
  editButton: JSX.Element;
  deleteButton: JSX.Element;
};

export const Template = ({
  deleteButton,
  editButton,
  title,
  toggleStatusButton,
}: TemplateProps) => (
  <Card variant="outlined">
    <Stack
      paddingX={({ spacing }) => spacing(16)}
      paddingY={({ spacing }) => spacing(8)}
      flexDirection="row"
      alignItems="center"
      gap={({ spacing }) => spacing(16)}
    >
      <Box>{toggleStatusButton}</Box>
      <Box flex={1} overflow="hidden">
        <Typography
          variant="body2"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {title}
        </Typography>
      </Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={({ spacing }) => spacing(8)}
      >
        {editButton}
        {deleteButton}
      </Stack>
    </Stack>
  </Card>
);
