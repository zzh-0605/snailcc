import { parseISO, format } from "date-fns";
import React from "react";

interface Props {
  dateString: string;
}

export default function DatePanel({ dateString }: Props) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-gray-500">
      {format(date, "yyyy年MM月dd日")}
    </time>
  );
}
