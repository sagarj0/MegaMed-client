import React, { useState } from "react";
import { Card, Select } from "antd";
import { Column, ColumnConfig, Line, LineConfig } from "@ant-design/plots";
import { QuestionMonthlyStat } from "../../service/dashbaord/fetch/type";
const { Option } = Select;

interface QuestionMonthlyStatChartProps {
  isLoading: boolean;
  questionMonthlyStat: QuestionMonthlyStat[];
}

const QuestionMonthlyStatChart: React.FC<QuestionMonthlyStatChartProps> = ({ isLoading, questionMonthlyStat }) => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");

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

  const columnConfig: ColumnConfig = {
    data: questionMonthlyStat,
    xField: "month",
    yField: "question",
    tooltip: {
      showMarkers: false,
    },
    style: {
      columnWidthRatio: 0.2,
    },
    legend: true,
  };

  return (
    <Card
      title="Question Count Monthly Stat"
      styles={{ title: { textAlign: "left" } }}
      loading={isLoading}
      extra={
        <Select defaultValue="line" onChange={(value) => setChartType(value as "line" | "bar")}>
          <Option value="line">Line</Option>
          <Option value="bar">Bar</Option>
        </Select>
      }
    >
      {chartType === "line" ? <Line {...config} /> : <Column {...columnConfig} />}
    </Card>
  );
};

export default QuestionMonthlyStatChart;
