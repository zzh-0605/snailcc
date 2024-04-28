import React from "react";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, TextField, IconButton, InputAdornment } from "@mui/material";
import { Iconify } from "./Iconify";

interface ICopyClipboardProps {
  value: string;
  [x: string]: any;
}

export function CopyClipboard({ value, ...other }: ICopyClipboardProps) {
  const { enqueueSnackbar } = useSnackbar();

  const onCopy = () => {
    enqueueSnackbar("Copied!");
  };

  return (
    <TextField
      size="small"
      fullWidth
      disabled
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={value} onCopy={onCopy}>
              <Tooltip title="Copy">
                <IconButton>
                  <Iconify icon={"eva:copy-outline"} width={24} height={24} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
}
