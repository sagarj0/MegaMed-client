import React from "react";
import { Card } from "antd";
import { Line, LineConfig } from "@ant-design/plots";
import { UserMonthlyStat } from "../../service/dashbaord/fetch/type";

interface UserMonthlyStatChartProps {
  isLoading: boolean;
  userMonthlyStat: UserMonthlyStat[];
}

const UserMonthlyStatChart: React.FC<UserMonthlyStatChartProps> = ({ isLoading, userMonthlyStat }) => {
  const config: LineConfig = {
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

  return (
    <Card title="User Monthly Stat" loading={isLoading}>
      <Line {...config} />
    </Card>
  );
};

export default UserMonthlyStatChart;
