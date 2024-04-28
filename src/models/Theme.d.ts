import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
  Palette as MUIPalette,
  PaletteColor as MUIPaletteColor,
  Color as MUIColor,
  TypeBackground as MUITypeBackground,
} from "@mui/material";

interface CustomShadow {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
  [x: string]: string;
}

interface Color extends MUIColor {
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

interface TypeBackground extends MUITypeBackground {
  neutral: string;
}

interface Palette extends MUIPalette {
  mode: PaletteMode;
  background: TypeBackground;
  grey: Color;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  [x: string]: any;
}

interface PaletteColor extends MUIPaletteColor {
  lighter: string;
  darker: string;
}

interface Theme extends MUITheme {
  customShadows?: CustomShadow;
  palette: Palette;
  [x: string]: any;
}

interface ThemeOptions extends MUIThemeOptions {
  customShadows?: CustomShadow;
}
