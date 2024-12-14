import useFetchQuiz from "@/module/admin/hooks/useFetchQuiz";
import { useParams } from "react-router-dom";
import { RenderQuiz } from "../components/render-quiz";
import { Button, Card, Descriptions, DescriptionsProps } from "antd";
import { EditOutlined } from "@ant-design/icons";


export const ViewQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);

  const descriptionItems: DescriptionsProps["items"] = [
    {
      label: "Type",
      children: data.type || "N/A",
    },
    {
      label: "Subject",
      children: data.subject || "N/A",
    },
    {
      label: "Unit",
      children: data.unit || "N/A",
    },
    {
      label: "Chapter",
      children: data.chapter || "N/A",
    },
    {
      label: "Question Count",
      children: data.questionCount,
    },
  ];

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="link" children={"Edit Quiz"} disabled icon={<EditOutlined />} />}>
      <Descriptions column={1} colon={false} size="small" style={{ marginBlockEnd: 12 }} items={descriptionItems} />
      <RenderQuiz data={data?.questions} title={data?.title} isLoading={isLoading} />
    </Card>
  );
};
