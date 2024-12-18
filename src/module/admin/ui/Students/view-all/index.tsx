import useStatusMessage from "@/helper/hooks/use-message";
import useFetchAllUser from "@/module/admin/hooks/useFetchAllUser";
import { bulkEditAction } from "@/module/admin/service/Users/bulk-edit/action";
import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button, Card, Row, Table, TableProps, Tag, Typography } from "antd";
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
      key: "isPaidUser",
      filters: [
        { text: "PAID", value: true },
        { text: "UNPAID", value: false },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.isPaidUser === value,
      render: (status) => <Tag color={status ? "blue" : "red"} children={status ? "PAID" : "UNPAID"} />,
    },
  ];

  const { data, handleQueryChange, isLoading, pagination } = useFetchAllUser({ filter: { role: "student" } });
  const onModifyToPaid = () => dispatch(bulkEditAction({ userIds: selectedRowKeys, properties: { isPaidUser: true } }));
  const { isLoading: bulkeditLoading, success, error } = useAppSelector((root) => root.BulkEditUser);
  useStatusMessage({ success, error, resetSuccess, resetError });

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      title={selectedRowKeys.length ? <Row children={<Typography.Text children={`Selected ${selectedRowKeys.length} user(s)`} />} /> : undefined}
      extra={
        <Button loading={bulkeditLoading} type="primary" onClick={onModifyToPaid} disabled={!selectedRowKeys.length} children={"Modify to paid"} />
      }
      children={
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleQueryChange}
          pagination={pagination}
          loading={isLoading}
          rowKey={(record) => record.id}
          rowSelection={{ onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys as string[]), fixed: true }}
          scroll={{ x: 500 }}
        />
      }
    />
  );
};
