import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { Line } from "@ant-design/plots";
import { useAppSelector } from "@/store/hook";

export const OverallPerformanceTrend: React.FC = () => {
  const { isLoading, data } = useAppSelector((root) => root.FetchOverallPerformance);
  const { performanceTrend } = data;

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
          padding: 0,
        },
      }}
    >
      <Line
        {...{
          data: performanceTrend,
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
