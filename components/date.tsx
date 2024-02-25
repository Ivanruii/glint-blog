import { format, parseISO } from "date-fns";
import { es } from 'date-fns/locale';

import React from "react";

interface DateProps {
  dateString: string;
}

export const Date: React.FC<DateProps> = ({ dateString }) => {
  if (!dateString) return undefined;

  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL d, yyyy", { locale: es });
  const capitalizedFormattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  return <time dateTime={dateString}>{capitalizedFormattedDate}</time>;
};
