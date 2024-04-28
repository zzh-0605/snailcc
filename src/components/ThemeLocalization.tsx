import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { useLocales } from "../hooks/useLocales";

interface IThemeLocalizationProps {
  children: React.ReactNode;
}

export function ThemeLocalization({ children }: IThemeLocalizationProps) {
  const defaultTheme = useTheme();
  const { currentLang } = useLocales();

  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
