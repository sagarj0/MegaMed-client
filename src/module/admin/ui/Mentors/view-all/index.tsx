import useFetchAllUser from "@/module/admin/hooks/useFetchAllUser";
import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table, TableProps, Tag } from "antd";
import { useNavigate } from "react-router-dom";

export const ViewAllMentors: React.FC = () => {
  const navigate = useNavigate();
  const onAddMentor = () => navigate(AdminUrls.adminMentor.add);

  const columns: TableProps<DetailedUser>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Question Count",
      dataIndex: "questionCount",
      key: "questionCount",
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "status",
      render: (status) => <Tag color={status ? "blue" : "gray"} children={status ? "ACTIVE" : "INACTIVE"} />,
    },
  ];

  const { data, handleQueryChange, pagination, isLoading } = useFetchAllUser({ filter: { role: "mentor" } });

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={<Button type="primary" onClick={onAddMentor} children={"Add Mentor"} />}
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
            onClick: () => navigate(AdminUrls.adminMentor.view + id),
          })}
        />
      }
    />
  );
};
