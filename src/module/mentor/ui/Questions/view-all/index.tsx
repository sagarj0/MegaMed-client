import useFetchAllQuestion from "@/module/mentor/hooks/useFetchAllQuestion";
import { Button, Card, Space, Switch, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { getColumns, tablist } from "./helper";
import { MentorUrls } from "@/module/mentor/util/urls";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";
import { useMemo } from "react";
import { constants } from "@/util/constants";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuestion = () => navigate(MentorUrls.mentorquestions.add);
  const { data, handleQueryChange, pagination, isLoading, subject, me } = useFetchAllQuestion({ filter: {} });
  const onTabChange = (key: string) => handleQueryChange(undefined, { subject: key as subject });

  const memoizedColumns = useMemo(() => getColumns(subject), [subject]);

  return (
    <Card
      bordered={false}
      style={{ height: "100%", boxShadow: "none" }}
      styles={{ header: { border: "none" } }}
      tabList={tablist}
      tabProps={{ destroyInactiveTabPane: true }}
      onTabChange={onTabChange}
      activeTabKey={subject}
      tabBarExtraContent={
        <Space>
          <Switch
            title="Me Mode"
            checkedChildren="Me"
            unCheckedChildren="All"
            value={me}
            onChange={(val) => handleQueryChange(undefined, { me: val })}
          />
          <Button type="primary" onClick={handleAddQuestion} children={"Add Question"} />
        </Space>
      }
      children={
        <Table
          columns={memoizedColumns}
          dataSource={data}
          onChange={handleQueryChange}
          pagination={pagination}
          loading={isLoading}
          scroll={{ x: constants.QUES_TABLE_X_SCROLL }}
          onRow={({ id }) => ({
            style: { cursor: "pointer" },
            onClick: () => navigate(MentorUrls.mentorquestions.view + id),
          })}
        />
      }
    />
  );
};
