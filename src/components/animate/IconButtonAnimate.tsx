import React from "react";
import { m } from "framer-motion";
import { forwardRef } from "react";

import { Box, IconButton } from "@mui/material";

// ----------------------------------------------------------------------

interface IIconButtonAnimateProps {
  children: React.ReactNode;
  color:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  size: "small" | "medium" | "large";
  [x: string]: any;
}

export const IconButtonAnimate = ({
  children,
  size = "medium",
  ...other
}: IIconButtonAnimateProps) => {
  return (
    <AnimateWrap size={size}>
      <IconButton size={size} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  );
};

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

interface IAnimateWrapProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

const AnimateWrap = ({ size, children }: IAnimateWrapProps) => {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: "inline-flex",
      }}
    >
      {children}
    </Box>
  );
};
