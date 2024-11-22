import { Button, Card, Table, TableProps, Tag } from "antd";

export const ViewAllMentors: React.FC = () => {
  const columns: TableProps["columns"] = [
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
      dataIndex: "status",
      key: "status",
      render: (status: string) => <Tag color={status === "Active" ? "blue" : "gray"} children={status} />,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "john@gmail.com",
      phone: "1234567890",
      status: "Active",
      action: "Edit",
    },
    {
      key: "2",
      name: "Jim Green",
      email: "jim@gmail.com",
      phone: "1234567890",
      status: "Inactive",
      action: "Edit",
    },
  ];

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="primary">Add Mentor</Button>}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
