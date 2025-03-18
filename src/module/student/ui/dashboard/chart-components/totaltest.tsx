import { Card, Statistic } from "antd";
import { useState } from "react";
import { commonCardStyle } from "../dashboard-layout";
import { useAppSelector } from "@/store/hook";

export const TotalTestCount: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchOverallPerformance);
  const { totalQuizzes } = data;

  const [showActual, setShowActual] = useState(false);

  return (
    <Card
      loading={isLoading}
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
        value={showActual ? totalQuizzes : totalQuizzes < 10 ? totalQuizzes : `${Math.floor(totalQuizzes / 10) * 10}+`}
        valueStyle={{ textAlign: "center" }}
      />
    </Card>
  );
};
