import React from "react";
import { Box, Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      <Footer />
    </Stack>
  );
};
