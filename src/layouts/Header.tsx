import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, AppBar, Toolbar, Container, Typography } from "@mui/material";
import { useOffSetTop } from "../hooks/useOffSetTop";
import { cssStyles } from "../utils/cssStyles";
import { Logo } from "../components/Logo";
import { HEADER } from "../configs/header";
import { Theme } from "@/models/Theme";

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }: { theme?: Theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme?.customShadows?.z8,
}));

export const Header = () => {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: 72 },
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />

          <Typography color="InfoText" variant="h4" sx={{ ml: 1 }}>
            深白色
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
};
