import { AdminUrls } from "@/module/admin/util/urls";
import { tablist, columns } from "../../../../Questions/view-all/helper";
import { useNavigate, useParams } from "react-router-dom";
import { subject } from "@/module/admin/service/Questions/fetch-all/type";
import useFetchAllMentorAddedQuestions from "@/module/admin/hooks/questions/useFetchMentorAddedQuestion";
import { FetchMentorDetailsReq } from "@/module/admin/service/Users/Mentor/fetch-details/type";
import { Card, Table } from "antd";

interface Props {
  timeValue: FetchMentorDetailsReq["timeValue"];
}

export const ViewAllMentorAddedQuestions: React.FC<Props> = ({ timeValue }) => {
  const { id: mentorId } = useParams();
  const navigate = useNavigate();

  const { data, handleQueryChange, pagination, isLoading, subject } = useFetchAllMentorAddedQuestions({ filter: { timeValue, mentorId } });
  const onTabChange = (key: string) => handleQueryChange(undefined, { subject: key as subject });

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
            columns={columns}
            dataSource={data}
            onChange={handleQueryChange}
            pagination={pagination}
            loading={isLoading}
            scroll={{ x: 500 }}
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
