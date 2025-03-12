import React from "react";
import { DatePicker } from "antd";
import { DatePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface LocalDatePickerProps extends Omit<DatePickerProps, "value" | "onChange"> {
  value?: string | dayjs.Dayjs;
  onChange?: (value: string | null) => void;
}

/**
 * A DatePicker component that handles local time conversion for Ant Design forms
 */
const LocalDatePicker: React.FC<LocalDatePickerProps> = ({ value, onChange, ...props }) => {
  // Convert value to dayjs object if it's a string
  const dayjsValue = value ? (typeof value === "string" ? dayjs(value) : value) : null;

  const handleChange = (date: dayjs.Dayjs | null) => {
    if (onChange) {
      // Convert to ISO string for form storage
      onChange(date ? date.format() : null);
    }
  };

  return (
    <DatePicker
      {...props}
      showTime
      value={dayjsValue}
      onChange={handleChange}
      // Ensure the time is displayed in local timezone
      format="YYYY-MM-DD HH:mm:ss"
    />
  );
};

export default LocalDatePicker;
