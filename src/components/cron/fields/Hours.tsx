import React from "react";
import CustomSelect from "../components/CustomSelect";
import { HoursProps } from "../types";
import { DEFAULT_LOCALE_EN } from "../locale";
import { UNITS } from "../constants";
import { FormControl, Typography } from "@mui/material";

export default function Hours(props: HoursProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    ...selectProps
  } = props;

  return (
    <>
      {locale.prefixHours !== "" && (
        <Typography>
          {locale.prefixHours || DEFAULT_LOCALE_EN.prefixHours}
        </Typography>
      )}

      <FormControl variant="standard">
        <CustomSelect
          placeholder={locale.emptyHours || DEFAULT_LOCALE_EN.emptyHours}
          value={value}
          unit={UNITS[1]}
          setValue={setValue}
          locale={locale}
          className={className}
          disabled={disabled}
          readOnly={readOnly}
          leadingZero={leadingZero}
          clockFormat={clockFormat}
          period={period}
          {...selectProps}
        />
      </FormControl>
    </>
  );
}
