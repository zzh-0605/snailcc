import { Theme } from "@/models/Theme";

export function Progress(theme: Theme) {
  const isLight = theme.palette.mode === "light";

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: "hidden",
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          backgroundColor:
            theme.palette.primary[isLight ? "lighter" : "darker"],
        },
        buffer: {
          backgroundColor: "transparent",
        },
      },
    },
  };
}
