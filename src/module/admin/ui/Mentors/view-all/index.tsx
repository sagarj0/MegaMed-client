import useFetchAllMentor from "@/module/admin/hooks/usefetchAllMentor";
import { DetailedMentor } from "@/module/admin/service/Mentor/fetch/type";
import { Button, Card, Table, TableProps, Tag } from "antd";

export const ViewAllMentors: React.FC = () => {
  const columns: TableProps<DetailedMentor>["columns"] = [
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
  ];

  const { data, handleQueryChange } = useFetchAllMentor({ filter: {} });

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="primary">Add Mentor</Button>}>
      <Table columns={columns} dataSource={data} onChange={handleQueryChange} />
    </Card>
  );
};
