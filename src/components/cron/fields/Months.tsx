import React, { useMemo } from "react";

import { MonthsProps } from "../types";
import CustomSelect from "../components/CustomSelect";
import { DEFAULT_LOCALE_EN } from "../locale";
import { classNames } from "../utils";
import { UNITS } from "../constants";
import { FormControl, Typography } from "@mui/material";

export default function Months(props: MonthsProps) {
  const {
    value,
    setValue,
    locale,
    className,
    humanizeLabels,
    disabled,
    readOnly,
    period,
    ...selectProps
  } = props;
  const optionsList = locale.months || DEFAULT_LOCALE_EN.months;

  return (
    <>
      {locale.prefixMonths !== "" && (
        <Typography>
          {locale.prefixMonths || DEFAULT_LOCALE_EN.prefixMonths}
        </Typography>
      )}
      <FormControl variant="standard">
        <CustomSelect
          placeholder={locale.emptyMonths || DEFAULT_LOCALE_EN.emptyMonths}
          optionsList={optionsList}
          grid={false}
          value={value}
          unit={{
            ...UNITS[3],
            // Allow translation of alternative labels when using "humanizeLabels"
            // Issue #3
            alt: locale.altMonths || DEFAULT_LOCALE_EN.altMonths,
          }}
          setValue={setValue}
          locale={locale}
          className={className}
          humanizeLabels={humanizeLabels}
          disabled={disabled}
          readOnly={readOnly}
          period={period}
          {...selectProps}
        />
      </FormControl>
    </>
  );
}
