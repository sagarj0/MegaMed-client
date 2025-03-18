import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { Pie } from "@ant-design/plots";
import { useAppSelector } from "@/store/hook";

export const RightWronPie: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchOverallPerformance);
  const { lastQuizData } = data;

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
      <Pie
        {...{
          data: lastQuizData,
          appendPadding: 10,
          autoFit: true,
          angleField: "value",
          colorField: "type",
          radius: 1,
          title: "Last Test Right vs Wrong",
          color: ["#28a745", "#dc3545"],
          label: {
            type: "inner",
            offset: "-30%",
            content: "{value}",
            style: {
              textAlign: "center",
              fontSize: 14,
            },
          },
          interactions: [{ type: "element-active" }],
        }}
      />
    </Card>
  );
};
