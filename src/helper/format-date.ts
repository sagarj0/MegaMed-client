import dayjs from "dayjs";

export const formatDateTime = (date: string | Date | undefined, showYear: boolean = false) => {
  if (!date || !dayjs(date).isValid()) return "";
  if (showYear) return dayjs(date).format("YYYY MMM DD (ddd) hh:mm A");
  return dayjs(date).format("MMM DD (ddd) hh:mm A");
};
