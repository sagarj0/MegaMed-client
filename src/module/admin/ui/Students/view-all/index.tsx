import useStatusMessage from "@/helper/hooks/use-message";
import useFetchAllUser from "@/module/admin/hooks/useFetchAllUser";
import { bulkEditAction } from "@/module/admin/service/Users/bulk-edit/action";
import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button, Card, Table, TableProps, Tag } from "antd";
import { useState } from "react";
import { resetError, resetSuccess } from "@/module/admin/service/Users/bulk-edit/reducer";

export const ViewAllStudents: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

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
      title: "Is Verified",
      dataIndex: "isEmailVerified",
      key: "isVerified",
      render: (isVerified) => <Tag color={isVerified ? "green" : "red"} children={isVerified ? "VERIFIED" : "UNVERIFIED"} />,
    },
    {
      title: "Is Paid",
      dataIndex: "isPaidUser",
      key: "status",
      render: (status) => <Tag color={status ? "blue" : "red"} children={status ? "PAID" : "UNPAID"} />,
    },
  ];

  const { data, handleQueryChange, isLoading, pagination } = useFetchAllUser({ filter: { role: "student" } });
  const students = data?.filter((user) => user.role === "student");
  const studentPagination = { ...pagination, total: students.length };

  const onModifyToPaid = () => dispatch(bulkEditAction({ userIds: selectedRowKeys, properties: { isPaidUser: true } }));
  const { isLoading: bulkeditLoading, success, error } = useAppSelector((root) => root.BulkEditUser);
  useStatusMessage({ success, error, resetSuccess, resetError });

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={
        <Button loading={bulkeditLoading} type="primary" onClick={onModifyToPaid} disabled={!selectedRowKeys.length} children={"Modify to paid"} />
      }
      children={
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleQueryChange}
          pagination={studentPagination}
          loading={isLoading}
          rowKey={(record) => record.id}
          rowSelection={{ onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys as string[]) }}
          scroll={{ x: 500 }}
        />
      }
    />
  );
};
