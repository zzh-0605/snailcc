import React from "react";
import { Box, Typography, Link, SxProps } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";

// ----------------------------------------------------------------------

interface IBreadcrumbLink {
  name: string;
  href?: string;
}

interface IHeaderBreadcrumbsProps {
  links?: IBreadcrumbLink[];
  action?: React.ReactNode;
  heading: string;
  moreLinks?: string[];
  sx?: SxProps;
}

export function HeaderBreadcrumbs(props: IHeaderBreadcrumbsProps) {
  const { links, action, heading, moreLinks = [], sx, ...other } = props;

  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Breadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {moreLinks.map((href: string) => (
          <Link
            noWrap
            key={href}
            href={href}
            variant="body2"
            target="_blank"
            sx={{ display: "table" }}
          >
            {href}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
