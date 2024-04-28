import type { AppProps } from "next/app";

import { ThemeProvider } from "../theme";
import { ThemeColorPresets } from "../components/ThemeColorPresets";
import { CssBaseline } from "@mui/material";

import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";
import Head from "next/head";

// font source
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

// import "../components/cron/styles.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

type Props = AppProps & {
  Component: Page;
  pageProps: any;
};

export default function App(props: Props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <ThemeColorPresets>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeColorPresets>
      </ThemeProvider>
    </>
  );
}
