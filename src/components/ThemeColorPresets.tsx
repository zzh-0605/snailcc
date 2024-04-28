import { useMemo } from "react";
// @mui
import {
  alpha,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material/styles";
// hooks
import { useSettings } from "../hooks/useSettings";
//
import { ComponentsOverrides } from "../theme/overrides";
import { Theme, ThemeOptions } from "@/models/Theme";

interface IThemeColorPresetsProps {
  children: React.ReactNode;
}

export function ThemeColorPresets({ children }: IThemeColorPresetsProps) {
  const defaultTheme: Theme = useTheme();
  const { setColor } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor?.main as string, 0.24)}`,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = ComponentsOverrides(theme as Theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
