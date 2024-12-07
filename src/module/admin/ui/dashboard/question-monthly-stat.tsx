import React from "react";
import { Card } from "antd";
import { Line, LineConfig } from "@ant-design/plots";
import { QuestionMonthlyStat } from "../../service/dashbaord/fetch/type";

interface QuestionMonthlyStatChartProps {
  isLoading: boolean;
  questionMonthlyStat: QuestionMonthlyStat[];
}

const QuestionMonthlyStatChart: React.FC<QuestionMonthlyStatChartProps> = ({ isLoading, questionMonthlyStat }) => {
  const config: LineConfig = {
    data: questionMonthlyStat,
    xField: "month",
    yField: "question",
    point: {
      shapeField: "circle",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
    legend: true,
  };

  return (
    <Card title="Question Count Monthly Stat" loading={isLoading}>
      <Line {...config} />
    </Card>
  );
};

export default QuestionMonthlyStatChart;
