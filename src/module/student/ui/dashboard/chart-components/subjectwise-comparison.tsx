import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { Radar, RadarConfig } from "@ant-design/plots";

export const SubjectWiseComparison: React.FC = () => {
  const data = [
    { subject: "physics", type: "me", score: 90 },
    { subject: "physics", type: "average", score: 80 },
    { subject: "physics", type: "topper", score: 100 },
    { subject: "chemistry", type: "me", score: 80 },
    { subject: "chemistry", type: "average", score: 90 },
    { subject: "chemistry", type: "topper", score: 100 },
    { subject: "maths", type: "me", score: 60 },
    { subject: "maths", type: "average", score: 70 },
    { subject: "maths", type: "topper", score: 80 },
    { subject: "biology", type: "me", score: 40 },
    { subject: "biology", type: "average", score: 50 },
    { subject: "biology", type: "topper", score: 60 },
  ];

  const config: RadarConfig = {
    data,
    xField: "subject",
    yField: "score",
    colorField: "type",
    shapeField: "smooth",
    title: "Subject Wise Comparison",
    area: {
      style: {
        fillOpacity: 0.5,
      },
    },
    scale: { x: { padding: 0.5, align: 0 }, y: { tickCount: 5, domainMax: 100 } },
    axis: { x: { grid: true }, y: { zIndex: 1, title: false } },
    style: {
      lineWidth: 1,
    },
  };

  return (
    <Card
      style={commonCardStyle}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        },
      }}
    >
      <Radar {...config} />
    </Card>
  );
};
