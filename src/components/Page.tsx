import React from "react";
import Head from "next/head";
import { Box, BoxProps } from "@mui/material";

interface IPageProps extends BoxProps {
  children: React.ReactNode;
  title?: string;
  meta?: React.ReactNode;
}

export const Page = ({ children, title = "", meta, ...other }: IPageProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | 深白色`}</title>
        {meta}
      </Head>

      <Box {...other}>{children}</Box>
    </>
  );
};
