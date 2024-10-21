import { Box } from "@mui/material";

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
    <Box
      paddingBottom={bottomBar ? ({ spacing }) => spacing(60) : 16}
      paddingLeft={sidebar ? ({ spacing }) => spacing(SIDEBAR_WIDTH + 16) : 16}
      paddingRight={({ spacing }) => spacing(16)}
      paddingTop={appBar ? ({ spacing }) => spacing(APPBAR_HEIGHT + 16) : 0}
    >
      {children}
    </Box>
  </>
);
