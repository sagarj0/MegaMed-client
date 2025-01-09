import { Card, Select } from "antd";
import { QuestionChartData } from "../question-chart-data";
import { useAppSelector } from "@/store/hook";
import useFetchMentorDetails from "@/module/admin/hooks/useFetchMentorDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const QuestionAddedDetails: React.FC = () => {
  const [timeValue, setTimeValue] = useState<any>("thisWeek");

  const { id } = useParams();
  const { data, isLoading } = useFetchMentorDetails(id, timeValue);
  const {
    data: { user },
    isLoading: fetchingUser,
  } = useAppSelector((root) => root.FetchUser);

  return (
    <>
      <Card
        bordered={false}
        style={{ boxShadow: "none" }}
        styles={{ extra: { padding: 0 }, body: { paddingInline: 0 }, header: { textAlign: "left", paddingInline: 0 }, title: { padding: 0 } }}
        loading={isLoading || fetchingUser}
        title={`By ${user?.name}`}
        extra={
          <Select
            options={[
              { label: "This Week", value: "thisWeek" },
              { label: "This Month", value: "thisMonth" },
              { label: "All Time", value: "allTime" },
            ]}
            value={timeValue}
            style={{ width: 120 }}
            onChange={setTimeValue}
          />
        }
      >
        <QuestionChartData data={data?.questionChartData} questionCounts={data?.totalQuestions} loading={isLoading} />
      </Card>
    </>
  );
};
