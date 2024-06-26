import React from "react";
import NextLink from "next/link";
import { useTheme, SxProps } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

interface ILogoProps {
  disabledLink?: boolean;
  sx?: SxProps;
}

export const Logo = (props: ILogoProps) => {
  const { disabledLink = false, sx } = props;

  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M264,0c5.58,3.13,11.19,6.21,16.73,9.41,1.27.73,2.35,1.83,3.4,2.88,37.73,37.68,75.45,75.37,113.17,113.06.46.46.84.99.98,1.16-10.68-.29-21.64-1.47-32.47-.72-23.63,1.65-45.85,7.69-63.1,25.41-9.31,9.57-14.81,21.26-17.43,34.26-3.3,16.33-4.53,32.69,1.27,48.77,5.95,16.52,16.35,29.51,32.35,37.02,10.8,5.07,22.32,8.58,33.35,13.21,6.05,2.54,11.97,5.58,17.55,9.03,7.37,4.56,9.15,14.89,3.84,21.76-1.55,2-4.31,3.48-6.81,4.25-10.04,3.1-20.23,1.88-30.2-.33-18.79-4.15-35.52-12.72-50.43-24.86-.36-.29-.87-.39-1.96-.86v77.19c14.96,4.33,29.9,9.43,45.22,12.91,28.07,6.38,55.26,3.38,81.29-10.45-7,7-13.77,13.77-20.55,20.55-35,35-70,69.99-104.99,105-5.81,5.81-12.22,10.58-20.53,12.21-.29.06-.46.75-.68,1.14h-16c-5.58-3.13-11.18-6.22-16.73-9.41-1.13-.65-2.11-1.6-3.04-2.53-38.06-38.04-76.12-76.1-114.16-114.16-.8-.8-1.49-1.71-2.72-3.15,2.03-.16,3.43-.36,4.83-.36,15.33-.02,30.67.44,45.98-.11,28.3-1.03,53.36-10.29,72.52-31.96,13.91-15.73,22.79-34.42,26.42-54.96,2.68-15.2,4.18-30.84,4-46.26-.28-23.44-3.77-46.47-14.79-67.86-14.38-27.89-35.78-46.53-67.03-52.54-8.69-1.67-17.61-2.65-26.46-2.97-13.47-.49-26.97-.13-41.41-.13,1.14-1.54,1.74-2.58,2.55-3.4,37.09-37.13,74.09-74.36,111.47-111.19,4.38-4.32,10.9-6.47,16.42-9.63.74-.42,1.43-.93,2.15-1.39,5.33,0,10.67,0,16,0Z"
          />
          <path
            fill="url(#BG2)"
            d="M512,264c-3.13,5.58-6.23,11.18-9.4,16.73-.57.99-1.37,1.87-2.18,2.69-20.37,20.37-40.75,40.73-61.61,61.58,5.54-10.94,8.27-21.82,8.77-33.55.62-14.66-.5-28.8-6.44-42.38-7.39-16.89-19.47-29.51-35.94-37.27-13.17-6.2-27.08-10.8-40.62-16.24-5.21-2.09-10.46-4.2-12.22-10.54-1.68-6.04.8-10.65,4.86-14.48,4.3-4.06,9.5-5.93,15.68-6.3,14.22-.87,26.96,3.63,39.47,9.42,8.77,4.06,17.47,8.27,26.92,12.76v-38.71c1.59,1.42,2.44,2.12,3.21,2.88,18.5,18.5,36.96,37.02,55.48,55.49,6.06,6.04,11.2,12.57,12.9,21.24.06.29.75.46,1.14.68v16Z"
          />
          <path
            fill="url(#BG3)"
            d="M0,248c3.12-5.58,6.24-11.16,9.38-16.72.4-.71.9-1.4,1.48-1.97,17.29-17.29,34.59-34.56,52.37-52.31v157.78c-1.24-1.12-2.32-2.01-3.3-3-15.31-15.29-30.58-30.62-45.91-45.88-6.06-6.03-11.18-12.56-12.88-21.22-.06-.29-.74-.45-1.14-.68,0-5.33,0-10.67,0-16Z"
          />
          <path
            fill="url(#BG3)"
            d="M128.38,248.21c0-18.48.1-36.96-.08-55.44-.04-4.08,1.1-5.79,5.36-5.44,9.7.81,19.55.57,29.09,2.22,18.8,3.25,30.9,15.16,36.66,32.91,5.78,17.79,6.45,36.1.05,53.89-7.33,20.41-22.66,31.49-44.57,32.27-6.28.23-12.54.81-18.82.94-7.7.17-7.7.04-7.7-7.42,0-17.98,0-35.96,0-53.94Z"
          />
        </g>
      </svg>
    </Box>
  );
  return disabledLink ? logo : <NextLink href="/">{logo}</NextLink>;
};
