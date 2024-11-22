import { Button, Card, CardProps, Table, TableProps } from "antd";

export const ViewAllQuestion: React.FC = () => {
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

  const data = [
    {
      key: "1",
      question: "What is the capital of India?",
      optionA: "Delhi",
      optionB: "Mumbai",
      optionC: "Kolkata",
      optionD: "Chennai",
      answer: "Delhi",
    },
    {
      key: "2",
      question: "What is the capital of USA?",
      optionA: "New York",
      optionB: "Washington DC",
      optionC: "Los Angeles",
      optionD: "Chicago",
      answer: "Washington",
    },
  ];
  return (
    <Card
      bordered={false}
      style={{ height: "100%", boxShadow: "none" }}
      styles={{ header: { border: "none" } }}
      tabList={tablist}
      tabProps={{ destroyInactiveTabPane: true }}
      tabBarExtraContent={<Button type="primary">Add Question</Button>}
      defaultActiveTabKey="physics"
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
