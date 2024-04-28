import React, { useCallback, useMemo } from "react";
import { Select, MenuItem, FormControl, Typography } from "@mui/material";

import { PeriodProps } from "../types";
import { DEFAULT_LOCALE_EN } from "../locale";

export default function Period(props: PeriodProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    shortcuts,
    ...selectProps
  } = props;
  let options = [
    {
      value: "year",
      label: locale.yearOption || DEFAULT_LOCALE_EN.yearOption,
    },
    {
      value: "month",
      label: locale.monthOption || DEFAULT_LOCALE_EN.monthOption,
    },
    {
      value: "week",
      label: locale.weekOption || DEFAULT_LOCALE_EN.weekOption,
    },
    {
      value: "day",
      label: locale.dayOption || DEFAULT_LOCALE_EN.dayOption,
    },
    {
      value: "hour",
      label: locale.hourOption || DEFAULT_LOCALE_EN.hourOption,
    },
    {
      value: "minute",
      label: locale.minuteOption || DEFAULT_LOCALE_EN.minuteOption,
    },
  ];

  if (shortcuts && (shortcuts === true || shortcuts.includes("@reboot"))) {
    options = [
      ...options,
      {
        value: "reboot",
        label: locale.rebootOption || DEFAULT_LOCALE_EN.rebootOption,
      },
    ];
  }

  const handleChange = useCallback(
    (event: any) => {
      if (!readOnly) {
        setValue(event.target.value);
      }
    },
    [setValue, readOnly]
  );

  return (
    <>
      {locale.prefixPeriod !== "" && (
        <Typography sx={{ verticalAlign: "bottom" }}>
          {locale.prefixPeriod || DEFAULT_LOCALE_EN.prefixPeriod}
        </Typography>
      )}
      <FormControl variant="standard">
        <Select
          key={JSON.stringify(locale)}
          defaultValue={value}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          open={readOnly ? false : undefined}
          {...selectProps}
        >
          {options.map((obj) => (
            <MenuItem key={obj.value} value={obj.value}>
              {obj.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
