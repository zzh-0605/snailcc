import React, { useMemo } from "react";
import CustomSelect from "../components/CustomSelect";
import { MonthDaysProps } from "../types";
import { DEFAULT_LOCALE_EN } from "../locale";
import { UNITS } from "../constants";
import { FormControl, Typography } from "@mui/material";

export default function MonthDays(props: MonthDaysProps) {
  const {
    value,
    setValue,
    locale,
    className,
    weekDays,
    disabled,
    readOnly,
    leadingZero,
    period,
    ...selectProps
  } = props;
  const noWeekDays = !weekDays || weekDays.length === 0;

  const localeJSON = JSON.stringify(locale);
  const placeholder = useMemo(
    () => {
      if (noWeekDays) {
        return locale.emptyMonthDays || DEFAULT_LOCALE_EN.emptyMonthDays;
      }

      return (
        locale.emptyMonthDaysShort || DEFAULT_LOCALE_EN.emptyMonthDaysShort
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noWeekDays, localeJSON]
  );

  const displayMonthDays =
    !readOnly ||
    (value && value.length > 0) ||
    ((!value || value.length === 0) && (!weekDays || weekDays.length === 0));

  return displayMonthDays ? (
    <>
      {locale.prefixMonthDays !== "" && (
        <Typography>
          {locale.prefixMonthDays || DEFAULT_LOCALE_EN.prefixMonthDays}
        </Typography>
      )}

      <FormControl variant="standard">
        <CustomSelect
          placeholder={placeholder}
          value={value}
          setValue={setValue}
          unit={UNITS[2]}
          locale={locale}
          className={className}
          disabled={disabled}
          readOnly={readOnly}
          leadingZero={leadingZero}
          period={period}
          {...selectProps}
        />
      </FormControl>
    </>
  ) : null;
}
