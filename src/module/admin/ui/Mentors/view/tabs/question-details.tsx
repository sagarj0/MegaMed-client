import { Card, Select } from "antd";
import { QuestionChartData } from "../question-chart-data";
import { useAppSelector } from "@/store/hook";

export const QuestionAddedDetails: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchUser);

  return (
    <>
      <Card
        bordered={false}
        style={{ boxShadow: "none" }}
        styles={{ extra: { padding: 0 }, body: { paddingInline: 0 }, header: { textAlign: "left", paddingInline: 0 }, title: { padding: 0 } }}
        loading={isLoading}
        title={`By ${data?.user?.name}`}
        extra={
          <Select
            options={[
              { label: "This Week", value: "thisWeek" },
              { label: "This Month", value: "thisMonth" },
              { label: "All Time", value: "allTime" },
            ]}
            defaultValue="thisWeek"
            style={{ width: 120 }}
          />
        }
      >
        <QuestionChartData data={data?.questionChartData} questionCounts={data?.totalQuestions} loading={isLoading} />
      </Card>
    </>
  );
};
