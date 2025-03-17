import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { Line } from "@ant-design/plots";

export const OverallPerformanceTrend: React.FC = () => {
  const data = [
    { month: "Jan", type: "me", score: 45 },
    { month: "Jan", type: "average", score: 52 },
    { month: "Feb", type: "me", score: 48 },
    { month: "Feb", type: "average", score: 53 },
    { month: "Mar", type: "me", score: 51 },
    { month: "Mar", type: "average", score: 54 },
    { month: "Apr", type: "me", score: 55 },
    { month: "Apr", type: "average", score: 56 },
    { month: "May", type: "me", score: 59 },
    { month: "May", type: "average", score: 58 },
    { month: "Jun", type: "me", score: 52 },
    { month: "Jun", type: "average", score: 60 },
    { month: "Jul", type: "me", score: 47 },
    { month: "Jul", type: "average", score: 62 },
    { month: "Aug", type: "me", score: 58 },
    { month: "Aug", type: "average", score: 63 },
    { month: "Sep", type: "me", score: 67 },
    { month: "Sep", type: "average", score: 65 },
    { month: "Oct", type: "me", score: 75 },
    { month: "Oct", type: "average", score: 66 },
    { month: "Nov", type: "me", score: 71 },
    { month: "Nov", type: "average", score: 68 },
    { month: "Dec", type: "me", score: 82 },
    { month: "Dec", type: "average", score: 70 },
  ];

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
      <Line
        {...{
          data,
          xField: "month",
          yField: "score",
          title: "Overall Performance Trend",
          colorField: "type",
          point: {
            size: 5,
            shape: "circle",
          },
          smooth: true,
          interaction: {
            tooltip: {
              shared: true,
              showMarkers: false,
            },
          },
          style: {
            lineSize: 2,
            shape: "smooth",
          },

          legend: true,

          axis: {
            y: {
              labelFormatter: (v: any) => `${v}%`,
            },
          },
        }}
      />
    </Card>
  );
};
