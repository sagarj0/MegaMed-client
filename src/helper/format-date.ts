import dayjs, { Dayjs } from "dayjs";

export const formatDateTime = (date: string | Date | Dayjs | undefined, showYear: boolean = false, format?: string) => {
  if (!date || !dayjs(date).isValid()) return "";
  if (format) return dayjs(date).format(format);
  if (showYear) return dayjs(date).format("YYYY MMM DD (ddd) hh:mm A");
  return dayjs(date).format("MMM DD (ddd) hh:mm A");
};
