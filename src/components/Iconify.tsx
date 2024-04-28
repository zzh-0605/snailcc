import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { Box, SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

export interface IIconifyProps {
  icon: string | IconifyIcon;
  sx?: SxProps<Theme>;
  [x: string]: any;
}

export const Iconify = ({ icon, sx, ...other }: IIconifyProps) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};
