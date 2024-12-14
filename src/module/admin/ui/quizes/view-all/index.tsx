import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";
import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";

export const ViewAllQuiz: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuiz = () => navigate(AdminUrls.adminquizes.add);

  const columns: TableProps<SaveQuizResponse>["columns"] = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Chapter",
      dataIndex: "chapter",
      key: "chapter",
    },
  ];

  const { data, handleQueryChange, pagination, isLoading } = useFetchAllQuiz({ filter: {} });

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={<Button type="primary" onClick={handleAddQuiz} children={"Add Quiz"} />}
      children={
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleQueryChange}
          pagination={pagination}
          loading={isLoading}
          onRow={({ id }) => ({
            style: { cursor: "pointer" },
            onClick: () => navigate(AdminUrls.adminquizes.view + id),
          })}
          rowKey={(record) => record.id.toString()}
        />
      }
    />
  );
};
