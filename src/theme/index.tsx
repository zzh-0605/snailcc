"use client";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
// hooks
import { useSettings } from "../hooks/useSettings";
//
import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { ComponentsOverrides } from "./overrides";
import { shadows, customShadows } from "./shadows";
import { ThemeOptions, Theme } from "@/models/Theme";

// ----------------------------------------------------------------------

interface IThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === "light";

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = ComponentsOverrides(theme as Theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
