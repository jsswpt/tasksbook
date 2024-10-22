import { Stack } from "@mui/material";

import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from "root/shared/lib/mui";

type TemplateProps = {
  appBar?: JSX.Element;
  sidebar?: JSX.Element;
  bottomBar?: JSX.Element;
  children: JSX.Element;
};

export const Template = ({
  appBar,
  bottomBar,
  children,
  sidebar,
}: TemplateProps) => (
  <>
    {appBar}
    {sidebar}
    {bottomBar}
    <Stack
      paddingBottom={bottomBar ? ({ spacing }) => spacing(60) : 0}
      paddingLeft={sidebar ? ({ spacing }) => spacing(SIDEBAR_WIDTH) : 0}
      paddingTop={appBar ? ({ spacing }) => spacing(APPBAR_HEIGHT) : 0}
      minHeight="100svh"
    >
      {children}
    </Stack>
  </>
);
