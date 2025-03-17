import { Card, Statistic } from "antd";
import { useState } from "react";
import { commonCardStyle } from "../dashboard-layout";

export const TotalTestCount: React.FC = () => {
  const testCount = 27;
  const [showActual, setShowActual] = useState(false);

  return (
    <Card
      style={commonCardStyle}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        },
      }}
      onMouseEnter={() => setShowActual(true)}
      onMouseLeave={() => setShowActual(false)}
    >
      <Statistic
        title="Tests Attempted"
        value={showActual ? testCount : `${Math.floor(testCount / 10) * 10}+`}
        valueStyle={{ textAlign: "center" }}
      />
    </Card>
  );
};
