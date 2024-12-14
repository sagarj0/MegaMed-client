import useFetchAllUser from "@/module/admin/hooks/useFetchAllUser";
import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table, TableProps, Tag } from "antd";
import { useNavigate } from "react-router-dom";

export const ViewAllAdmins: React.FC = () => {
  const navigate = useNavigate();
  const onAddAdmin = () => navigate(AdminUrls.adminAdmin.add);

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
      title: "Is Verified",
      dataIndex: "isEmailVerified",
      key: "isVerified",
      render: (isVerified) => <Tag color={isVerified ? "green" : "red"} children={isVerified ? "VERIFIED" : "UNVERIFIED"} />,
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "status",
      render: (status) => <Tag color={status ? "blue" : "gray"} children={status ? "ACTIVE" : "INACTIVE"} />,
    },
  ];

  const { data, handleQueryChange, pagination, isLoading } = useFetchAllUser({ filter: { role: "admin" } });

  const admins = data?.filter((user) => user.role === "admin");
  const adminPagination = { ...pagination, total: admins.length };

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={<Button type="primary" onClick={onAddAdmin} children={"Add Admin"} />}
      children={<Table columns={columns} dataSource={admins} loading={isLoading} onChange={handleQueryChange} pagination={adminPagination} />}
    />
  );
};
