import { format, parseISO } from "date-fns";
import React from "react";

interface DateProps {
  dateString: string;
}

export const Date: React.FC<DateProps> = ({ dateString }) => {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};
