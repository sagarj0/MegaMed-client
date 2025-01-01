import { QuestionChartDataType } from "@/module/admin/service/dashbaord/fetch/type";
import { Line, LineConfig } from "@ant-design/plots";
import { Card } from "antd";

interface QuestionChartDataProps {
  data: QuestionChartDataType[];
  onDateChange?: (date: string) => void;
}

export const QuestionChartData: React.FC<QuestionChartDataProps> = ({ data }) => {
  const config: LineConfig = {
    data,
    xField: (d: QuestionChartDataType) => new Date(d.date).getDate().toString(),
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

  return (
    <>
      <Card
        bordered={false}
        style={{ boxShadow: "none", marginBlockStart: "1rem" }}
        title="Added Questions"
        styles={{ body: { padding: 0 }, header: { textAlign: "left" } }}
        // extra={
        //   <Select
        //     options={[
        //       { label: "This Week", value: "thisWeek" },
        //       { label: "This Month", value: "thisMonth" },
        //     ]}
        //     defaultValue="thisWeek"
        //     onChange={onDateChange}
        //   />
        // }
        children={<Line {...config} />}
      />
    </>
  );
};
