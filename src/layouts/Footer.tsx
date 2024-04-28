import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { Logo } from "../components/Logo";

export const Footer = () => {
  return (
    <Container sx={{ pt: 10 }}>
      <Box
        sx={{
          py: 5,
          textAlign: "center",
          position: "relative",
          bgcolor: "background.default",
        }}
      >
        <Container>
          <Logo sx={{ mb: 1, mx: "auto" }} />

          <Typography variant="caption" component="p">
            <Link href="https://beian.miit.gov.cn/" target="_blank">
              粤ICP备17119408号-1
            </Link>
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};
