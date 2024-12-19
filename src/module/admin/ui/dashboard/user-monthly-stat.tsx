import React, { useState } from "react";
import { Card, Select } from "antd";
import { Line, LineConfig, Column, ColumnConfig } from "@ant-design/plots";
import { UserMonthlyStat } from "../../service/dashbaord/fetch/type";

const { Option } = Select;

interface UserMonthlyStatChartProps {
  isLoading: boolean;
  userMonthlyStat: UserMonthlyStat[];
}

const UserMonthlyStatChart: React.FC<UserMonthlyStatChartProps> = ({ isLoading, userMonthlyStat }) => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  const lineConfig: LineConfig = {
    data: userMonthlyStat,
    xField: "month",
    yField: "user",
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

  const columnconfig: ColumnConfig = {
    data: userMonthlyStat,
    xField: "month",
    yField: "user",
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      columnWidthRatio: 0.2,
    },
    legend: true,
  };

  return (
    <Card
      title="User Monthly Stat"
      loading={isLoading}
      extra={
        <Select defaultValue="line" onChange={(value) => setChartType(value as "line" | "bar")}>
          <Option value="line">Line</Option>
          <Option value="bar">Bar</Option>
        </Select>
      }
    >
      {chartType === "line" ? <Line {...lineConfig} /> : <Column {...columnconfig} />}
    </Card>
  );
};

export default UserMonthlyStatChart;
