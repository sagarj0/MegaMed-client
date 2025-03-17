import { Card, Statistic } from "antd";
import { commonCardStyle } from "../dashboard-layout";

export const OverallPerformance: React.FC = () => {
  const performance = 80;
  const change = 0.5;
  const isNegative = change < 0;

  return (
    <Card
      style={{
        ...commonCardStyle,
        backgroundColor: isNegative ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 128, 0, 0.3)", // 30% opacity
        position: "relative",
      }}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        },
      }}
    >
      <Statistic
        value={change}
        precision={2}
        suffix={["%"]}
        prefix={isNegative ? "▼" : "▲"}
        valueStyle={{
          textAlign: "center",
          color: isNegative ? "red" : "green",
          fontSize: 14,
        }}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      />

      <Statistic
        title="Overall Performance"
        value={performance}
        suffix={"%"}
        valueStyle={{
          textAlign: "center",

          color: isNegative ? "red" : "green",
        }}
      />
    </Card>
  );
};
