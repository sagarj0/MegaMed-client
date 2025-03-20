import { Card, Grid } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { SubjectDonutChart } from "./subject-donut-chart";
import { useAppSelector } from "@/store/hook";
import { properCase } from "@/helper/proper-case";

export const SubjectWiseProgress: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchSubjectPerformance);

  const { xl, xs } = Grid.useBreakpoint();

  return (
    <Card loading={isLoading} style={commonCardStyle} styles={{ body: { height: "100%", width: "100%", padding: 0 } }}>
      <div
        style={{
          display: xl ? "grid" : "flex",
          height: xl ? "87vh" : "auto",
          overflowY: xl ? "auto" : "hidden",
          overflowX: xl ? "hidden" : "auto",
          scrollbarWidth: xl ? "auto" : "none",
          width: "100%",
          gridTemplateColumns: xl ? "1fr" : "unset",
          gridTemplateRows: xl ? "repeat(5, 1fr)" : "unset",
          flexWrap: xl ? "unset" : "nowrap",
          flexDirection: xs ? "column" : "row",
        }}
      >
        {data?.map((subject, index) => (
          <div key={index} style={{ flex: "0 0 auto", minWidth: "200px" }}>
            <SubjectDonutChart data={subject.performance} count={subject.count} title={properCase(subject.subject)} />
          </div>
        ))}
      </div>
    </Card>
  );
};
