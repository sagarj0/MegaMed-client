import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { useNavigate, useParams } from "react-router-dom";
import { RenderQuiz } from "../components/render-quiz";
import { Button, Card, Descriptions, DescriptionsProps, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { formatDateTime } from "@/helper/format-date";
import { customConcatString } from "@/helper/custom-concat";
import { properCase } from "@/helper/proper-case";
import { UpdateQuizStatus } from "./update-status";
import { renderTag } from "@/component/globar-tag-renderer";
import { isQuizActive, isQuizFinished } from "@/helper/is-quiz-active";
import { RotatingClockIcon } from "@/component/rotating-clock-icon";
import { AdminUrls } from "@/module/admin/util/urls";
import { QuizStatus } from "../add/type";

export const ViewQuiz: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);
  const handleViewReport = () => navigate(AdminUrls.adminquizes.viewReport + id);

  const descriptionItems: DescriptionsProps["items"] = [
    { label: "Type", children: properCase(data.type) || "N/A" },
    { label: "Subject", children: properCase(data.subject) || "N/A" },
    { label: "Unit", children: properCase(data.unit) || "N/A" },
    { label: "Chapter", children: properCase(data.chapter) || "N/A" },
    { label: "Question Count", children: data.questionCount },
    { label: "Start Time", children: formatDateTime(data.startTime) },
    { label: "Duration", children: customConcatString("min")(data.duration) },
    { label: "Buffer Time", children: customConcatString("min")(data.bufferTime) },
  ];

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      loading={isLoading}
      title={
        <Space>
          {data.title} {renderTag(data.status)}
          {isQuizActive(data) && <RotatingClockIcon />}
        </Space>
      }
      styles={{ header: { textAlign: "left" } }}
      extra={
        <Space size={0}>
          <Button
            type="link"
            children="View Ranking Detail"
            onClick={handleViewReport}
            disabled={data?.status === QuizStatus.Draft || !isQuizFinished(data)}
          />
          <UpdateQuizStatus />
          <Button type="link" children={"Edit Quiz"} disabled icon={<EditOutlined />} />
        </Space>
      }
    >
      <Descriptions column={1} colon={false} size="small" style={{ marginBlockEnd: 12 }} items={descriptionItems} />
      <RenderQuiz data={data?.questions} title={data?.title} noStyle />
    </Card>
  );
};
