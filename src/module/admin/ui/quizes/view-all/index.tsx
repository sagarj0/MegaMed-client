import useFetchAllQuiz from "@/module/admin/hooks/quizes/useFetchAllQuiz";
import { AdminUrls } from "@/module/admin/util/urls";
import { Button, Card, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";
import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { formatDateTime } from "@/helper/format-date";
import { renderTag } from "@/component/globar-tag-renderer";
import { customConcatString } from "@/helper/custom-concat";

export const ViewAllQuiz: React.FC = () => {
  const navigate = useNavigate();
  const handleAddQuiz = () => navigate(AdminUrls.adminquizes.add);

  const columns: TableProps<SaveQuizResponse>["columns"] = [
    { title: "Name", dataIndex: "title", key: "title" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Count", dataIndex: "questionCount", key: "questionCount" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderTag,
      filters: [
        { text: "Draft", value: "Draft" },
        { text: "Published", value: "Published" },
      ],
      filterMultiple: false,
    },
    { title: "Start Time", dataIndex: "startTime", key: "startTime", render: formatDateTime },
    { title: "Duration", dataIndex: "duration", key: "duration", render: customConcatString("min") },
    { title: "Buffer Time", dataIndex: "bufferTime", key: "bufferTime", render: customConcatString("min") },
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
          scroll={{ x: 500 }}
          rowKey={(record) => record.id.toString()}
        />
      }
    />
  );
};
