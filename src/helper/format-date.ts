import dayjs from "dayjs";

export const formatDateTime = (date: string | Date | undefined) => {
  if (!date || !dayjs(date).isValid()) return "";
  return dayjs(date).format("YYYY MMM DD (ddd) hh:mm A");
};
