import React, { useState, useEffect } from "react";
import { Typography } from "antd";

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Define short month names
      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      // Format time with short month name
      const formattedTime =
        `${now.getFullYear().toString()}:` + // Last 2 digits of year
        monthNamesShort[now.getMonth()] +
        ":" + // Short month name
        String(now.getDate()).padStart(2, "0") +
        ":" + // Day (1-31)
        String(now.getHours()).padStart(2, "0") +
        ":" + // Hours (0-23)
        String(now.getMinutes()).padStart(2, "0") +
        ":" + // Minutes (0-59)
        String(now.getSeconds()).padStart(2, "0"); // Seconds (0-59)

      setCurrentTime(formattedTime);
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography.Title level={4} type="danger" style={{ display: "inline-block", marginBlock: 0, marginInline: 6 }}>
      {currentTime}
    </Typography.Title>
  );
};

export default TimeDisplay;
