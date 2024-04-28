import NextLink from "next/link";

import {
  Box,
  Link,
  Typography,
  Breadcrumbs as MUIBreadcrumbs,
} from "@mui/material";

interface IBreadcrumbsProps {
  activeLast?: boolean;
  links?: { href?: string; name: string; icon?: React.ReactNode }[];
  [x: string]: any;
}

export default function Breadcrumbs({
  links,
  activeLast = false,
  ...other
}: IBreadcrumbsProps) {
  const currentLink = links?.[links.length - 1].name;

  const listDefault = links?.map((link) => (
    <LinkItem key={link.name} link={link} />
  ));

  const listActiveLast = links?.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "text.disabled",
            textOverflow: "ellipsis",
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Box
          component="span"
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled",
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

interface ILinkItemProps {
  link: { href?: string; name: string; icon?: React.ReactNode };
}
function LinkItem({ link }: ILinkItemProps) {
  const { href = "", name, icon } = link;
  return (
    <Link
      key={name}
      href={href}
      variant="body2"
      sx={{
        lineHeight: 2,
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        "& > div": { display: "inherit" },
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, "& svg": { width: 20, height: 20 } }}>{icon}</Box>
      )}
      {name}
    </Link>
  );
}
