import useFetchAllQuestion from "@/module/admin/hooks/useFetchAllQuestion";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns, tablist } from "./helper";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const defaultActiveTab = "physics";
  const handleAddQuestion = () => navigate(AdminUrls.adminquestions.add);
  const { data, handleQueryChange } = useFetchAllQuestion({ filter: { subject: defaultActiveTab as subject } });
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
      <Table columns={columns} dataSource={data} onChange={handleQueryChange} />
    </Card>
  );
};
