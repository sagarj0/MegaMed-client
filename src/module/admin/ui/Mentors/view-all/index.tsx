import useFetchAllUser from "@/module/admin/hooks/useFetchAllUser";
import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { Button, Card, Table, TableProps, Tag } from "antd";

export const ViewAllMentors: React.FC = () => {
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
      title: "Status",
      dataIndex: "active",
      key: "status",
      render: (status) => <Tag color={status ? "blue" : "gray"} children={status ? "ACTIVE" : "INACTIVE"} />,
    },
  ];

  const { data, handleQueryChange, pagination, isLoading } = useFetchAllUser({ filter: { role: "mentor" } });

  const mentors = data?.filter((user) => user.role === "mentor");
  const mentorPagination = { ...pagination, total: mentors.length };

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="primary">Add Mentor</Button>}>
      <Table columns={columns} dataSource={mentors} onChange={handleQueryChange} pagination={mentorPagination} loading={isLoading} />
    </Card>
  );
};
