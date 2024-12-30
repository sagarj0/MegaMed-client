import React, { useState, useEffect } from "react";
import { Typography } from "antd";

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const formattedTime =
        `${now.getFullYear().toString()}:` +
        monthNamesShort[now.getMonth()] +
        ":" +
        String(now.getDate()).padStart(2, "0") +
        ":" +
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0") +
        ":" +
        String(now.getSeconds()).padStart(2, "0");

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography.Title level={4} type="danger" style={{ display: "inline-block", marginBlock: 0, marginInline: 6 }}>
      {currentTime}
    </Typography.Title>
  );
};

export default TimeDisplay;
