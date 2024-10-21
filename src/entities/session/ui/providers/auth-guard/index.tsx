import { CircularProgress, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router-dom";

import { sessionModel } from "root/entities/session";

export type AuthGuardProps = {
  children: JSX.Element;
  reverse?: boolean;
};

export const AuthGuard = observer(({ children, reverse }: AuthGuardProps) => {
  const { authorizeOnLoad, isAuth, status } = sessionModel;

  useLayoutEffect(() => authorizeOnLoad(), []);

  if (status !== "done") {
    return (
      <Stack height="100svh" alignItems="center" justifyContent="center">
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  return (!reverse ? isAuth : !isAuth) ? (
    children
  ) : (
    <Navigate to={!reverse ? "/auth/sign-in" : "/"} />
  );
});
