interface TimeDiffOptions {
  startDate: Date | number | string;
  endDate?: Date | number | string;
  unit?: "seconds" | "minutes" | "hours" | "days";
}

export const getTimeDiff = ({ startDate, endDate = new Date(), unit = "seconds" }: TimeDiffOptions): number => {
  const start = startDate instanceof Date ? startDate : new Date(startDate);
  const end = endDate instanceof Date ? endDate : new Date(endDate);

  const diffInMs = end.getTime() - start.getTime();

  let result: number;

  switch (unit) {
    case "seconds":
      result = diffInMs / 1000;
      break;
    case "minutes":
      result = diffInMs / (1000 * 60);
      break;
    case "hours":
      result = diffInMs / (1000 * 60 * 60);
      break;
    case "days":
      result = diffInMs / (1000 * 60 * 60 * 24);
      break;
    default:
      result = diffInMs / 1000; // Default to seconds
  }

  return Math.round(result);
};
