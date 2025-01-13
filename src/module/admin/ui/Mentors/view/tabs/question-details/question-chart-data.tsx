import { QuestionChartDataType } from "@/module/admin/service/dashbaord/fetch/type";
import { TotalQuestions } from "@/module/mentor/service/dashbaord/fetch/type";
import { Line, LineConfig } from "@ant-design/plots";
import { Col, Descriptions, DescriptionsProps, Divider, Grid, Row } from "antd";

interface QuestionChartDataProps {
  data: QuestionChartDataType[];
  questionCounts?: TotalQuestions;
  loading?: boolean;
}

export const QuestionChartData: React.FC<QuestionChartDataProps> = ({ data, questionCounts }) => {
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

  const items: DescriptionsProps["items"] = [
    ...(questionCounts?.subjectWiseCounts || []).map((subject) => ({
      label: subject.subject,
      children: subject.count,
    })),
    {
      label: "Total Questions",
      children: questionCounts?.totalQuestionCount,
    },
  ];

  const { lg } = Grid.useBreakpoint();

  return (
    <>
      <Row align={"stretch"} justify={"space-between"} style={{ width: "100%", flexFlow: lg ? "" : "column-reverse nowrap" }}>
        <Col span={24} lg={16}>
          <Line {...config} />
        </Col>
        <Col span={0} lg={1}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span={24} lg={6}>
          <Descriptions colon column={1} items={items} />
        </Col>
      </Row>
    </>
  );
};
