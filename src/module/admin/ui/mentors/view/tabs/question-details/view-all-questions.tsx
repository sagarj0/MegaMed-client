import { AdminUrls } from "@/module/admin/util/urls";
import { tablist, getColumns } from "./helper";
import { useNavigate, useParams } from "react-router-dom";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";
import useFetchAllMentorAddedQuestions from "@/module/admin/hooks/questions/useFetchMentorAddedQuestion";
import { Card, Table } from "antd";
import { useMemo } from "react";
import { constants } from "@/util/constants";

export const ViewAllMentorAddedQuestions: React.FC = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  const { data, handleQueryChange, pagination, isLoading, subject } = useFetchAllMentorAddedQuestions({ filter: { userId } });
  const onTabChange = (key: string) => handleQueryChange(undefined, { subject: key as subject });

  const memoizedColumns = useMemo(() => getColumns(subject), [subject]);

  return (
    <>
      <Card
        bordered={false}
        style={{ height: "100%", boxShadow: "none" }}
        styles={{ header: { border: "none", paddingInline: 0 }, body: { paddingInline: 0 } }}
        tabList={tablist}
        tabProps={{ destroyInactiveTabPane: true }}
        onTabChange={onTabChange}
        activeTabKey={subject}
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
              onClick: () => navigate(AdminUrls.adminMentor.viewAddedQuestion + id),
            })}
          />
        }
      />
    </>
  );
};
