import { Button, Card, Table, TableProps, Tag } from "antd";

export const ViewAllStudents: React.FC = () => {
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
      render: (status: string) => <Tag color={status === "Paid" ? "success" : "error"} children={status} />,
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
      status: "Paid",
      action: "Edit",
    },
    {
      key: "2",
      name: "Jim Green",
      email: "jim@gmail.com",
      phone: "1234567890",
      status: "Unpaid",
      action: "Edit",
    },
  ];

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="primary">Modify to paid</Button>}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
