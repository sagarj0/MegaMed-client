import { Card } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { SubjectDonutChart } from "./subject-donut-chart";
import { useAppSelector } from "@/store/hook";
import { properCase } from "@/helper/proper-case";

export const SubjectWiseProgress: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchSubjectPerformance);

  return (
    <Card loading={isLoading} style={commonCardStyle} styles={{ body: { height: "100%", width: "100%", padding: 0 } }}>
      <div
        style={{
          display: "grid",
          height: "87vh",
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "repeat(5, 1fr)",
        }}
      >
        <div style={{ gridArea: "1 / 1 / 6 / 2" }}>
          {data?.map((subject, index) => (
            <SubjectDonutChart key={index} data={subject.performance} count={subject.count} title={properCase(subject.subject)} />
          ))}
        </div>
      </div>
    </Card>
  );
};
