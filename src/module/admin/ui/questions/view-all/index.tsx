import useFetchAllQuestion from "@/module/admin/hooks/questions/useFetchAllQuestion";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { getColumns, tablist } from "./helper";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";
import { constants } from "@/util/constants";
import { useMemo } from "react";

export const ViewAllQuestion: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuestion = () => navigate(AdminUrls.adminquestions.add);
  const { data, handleQueryChange, pagination, isLoading, subject } = useFetchAllQuestion({ filter: {} });
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
      tabBarExtraContent={<Button type="primary" onClick={handleAddQuestion} children={"Add Question"} />}
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
            onClick: () => navigate(AdminUrls.adminquestions.view + id),
          })}
        />
      }
    />
  );
};
