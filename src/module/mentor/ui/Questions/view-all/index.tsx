import useFetchAllQuestion from "@/module/mentor/hooks/useFetchAllQuestion";
import { Button, Card, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns, tablist } from "./helper";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";
import { MentorUrls } from "@/module/mentor/util/urls";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const defaultActiveTab = "physics";
  const handleAddQuestion = () => navigate(MentorUrls.mentorquestions.add);
  const { data, handleQueryChange, pagination, isLoading } = useFetchAllQuestion({ filter: { subject: defaultActiveTab as subject } });
  const onTabChange = (key: string) => handleQueryChange(undefined, { subject: key }, undefined);

  return (
    <Card
      bordered={false}
      style={{ height: "100%", boxShadow: "none" }}
      styles={{ header: { border: "none" } }}
      tabList={tablist}
      tabProps={{ destroyInactiveTabPane: true }}
      onTabChange={onTabChange}
      tabBarExtraContent={
        <Button type="primary" onClick={handleAddQuestion}>
          Add Question
        </Button>
      }
      defaultActiveTabKey={defaultActiveTab}
    >
      <Table columns={columns} dataSource={data} onChange={handleQueryChange} pagination={pagination} loading={isLoading} />
    </Card>
  );
};
