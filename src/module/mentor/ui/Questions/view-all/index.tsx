import useFetchAllQuestion from "@/module/mentor/hooks/useFetchAllQuestion";
import { Button, Card, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns, tablist } from "./helper";
import { MentorUrls } from "@/module/mentor/util/urls";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuestion = () => navigate(MentorUrls.mentorquestions.add);
  const { data, handleQueryChange, pagination, isLoading, subject } = useFetchAllQuestion({ filter: {} });
  const onTabChange = (key: string) => handleQueryChange(undefined, { subject: key as subject }, undefined);

  return (
    <Card
      bordered={false}
      style={{ height: "100%", boxShadow: "none" }}
      styles={{ header: { border: "none" } }}
      tabList={tablist}
      tabProps={{ destroyInactiveTabPane: true }}
      onTabChange={onTabChange}
      activeTabKey={subject}
      tabBarExtraContent={<Button type="primary" onClick={handleAddQuestion} children={"Add Question"} />}
      children={
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleQueryChange}
          pagination={pagination}
          loading={isLoading}
          scroll={{ x: 500 }}
          onRow={({ id }) => ({
            style: { cursor: "pointer" },
            onClick: () => navigate(MentorUrls.mentorquestions.view + id),
          })}
        />
      }
    />
  );
};
