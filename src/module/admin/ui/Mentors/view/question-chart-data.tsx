import { QuestionChartDataType } from "@/module/admin/service/dashbaord/fetch/type";
import { Line, LineConfig } from "@ant-design/plots";
import { Divider, Typography } from "antd";

export const QuestionChartData: React.FC<{ data: QuestionChartDataType[] }> = ({ data }) => {
  const config: LineConfig = {
    data,
    xField: (d: QuestionChartDataType) => new Date(d.date).getDate(),
    yField: "count",
    legend: { size: false },
    colorField: "subject",
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    point: {
      shapeField: "circle",
      sizeField: 4,
    },
    style: {
      lineWidth: 2,
    },
  };

  const date = new Date(data?.[0]?.date);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <>
      <Divider />
      <Typography.Title level={5} style={{ textAlign: "left" }}>
        Questions Added in {`${month} ${year}`}
      </Typography.Title>
      <Line {...config} />
    </>
  );
};
