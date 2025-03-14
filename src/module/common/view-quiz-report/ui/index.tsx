import { useParams } from "react-router-dom";
import useFetchQuizReport from "../hooks/useFetchQuizReport";
import { Card, Descriptions, DescriptionsProps, Table, TableProps } from "antd";
import { ScoresType } from "../service/type";
import { customConcatString } from "@/helper/custom-concat";

const ViewQuizReport: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useFetchQuizReport(id);

  const descItems: DescriptionsProps["items"] = [
    { label: "Type", children: data.type },
    { label: "Subject", children: data.subject },
    { label: "Unit", children: data.unit },
    { label: "Chapter", children: data.chapter },
    { label: "Total Questions", children: data.questionCount },
  ];

  const columns: TableProps<ScoresType>["columns"] = [
    { title: "Rank", dataIndex: "rank", key: "rank", sorter: true, width: 50 },
    { title: "Name", dataIndex: "userName", key: "userName" },
    { title: "Score", dataIndex: "score", key: "score" },
    { title: "Time Taken", dataIndex: "timeTaken", key: "timeTaken", render: customConcatString("Min") },
  ];

  return (
    <Card style={{ border: "none" }} title={"Test Report For " + data.title} styles={{ header: { textAlign: "left" } }}>
      <Descriptions column={1} items={descItems} size="small" title="Quiz Details" style={{ marginBlockEnd: "2em", textAlign: "left" }} />
      <Table dataSource={data.scores} loading={isLoading} columns={columns} pagination={false} virtual />
    </Card>
  );
};

export default ViewQuizReport;
