import useFetchAllAdmin from "@/module/admin/hooks/useFetchAllAdmin";
import { DetailedAdmin } from "@/module/admin/service/Admins/fetch/type";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table, TableProps, Tag } from "antd";
import { useNavigate } from "react-router-dom";

export const ViewAllAdmins: React.FC = () => {
  const navigate = useNavigate();
  const onAddAdmin = () => navigate(AdminUrls.adminAdmin.add);

  const columns: TableProps<DetailedAdmin>["columns"] = [
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
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (status: boolean) => <Tag color={status ? "blue" : "gray"} children={status} />,
    },
  ];

  const { data, handleQueryChange } = useFetchAllAdmin({ filter: {} });

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={<Button type="primary" onClick={onAddAdmin} children={"Add Admin"} />}
    >
      <Table columns={columns} dataSource={data} onChange={handleQueryChange} />
    </Card>
  );
};
