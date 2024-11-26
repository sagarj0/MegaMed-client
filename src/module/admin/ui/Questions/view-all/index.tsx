import useFetchAllQuestion from "@/module/admin/hooks/useFetchAllQuestion";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, CardProps, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuestion = () => navigate(AdminUrls.adminquestions.add);

  const tablist: CardProps["tabList"] = [
    {
      key: "physics",
      tab: "Physics",
    },
    {
      key: "chemistry",
      tab: "Chemistry",
    },
    {
      key: "zoology",
      tab: "Zoology",
    },
    {
      key: "botany",
      tab: "Botany",
    },
    {
      key: "mat",
      tab: "MAT",
    },
  ];

  const columns: TableProps["columns"] = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Option A",
      dataIndex: "optionA",
      key: "optionA",
    },
    {
      title: "Option B",
      dataIndex: "optionB",
      key: "optionB",
    },
    {
      title: "Option C",
      dataIndex: "optionC",
      key: "optionC",
    },
    {
      title: "Option D",
      dataIndex: "optionD",
      key: "optionD",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
  ];

  const { data } = useFetchAllQuestion({ filter: {} });

  return (
    <Card
      bordered={false}
      style={{ height: "100%", boxShadow: "none" }}
      styles={{ header: { border: "none" } }}
      tabList={tablist}
      tabProps={{ destroyInactiveTabPane: true }}
      tabBarExtraContent={
        <Button type="primary" onClick={handleAddQuestion}>
          Add Question
        </Button>
      }
      defaultActiveTabKey="physics"
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
