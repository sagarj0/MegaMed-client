import useFetchQuiz from "@/module/admin/hooks/useFetchQuiz";
import { useParams } from "react-router-dom";
import { RenderQuiz } from "../add/render-quiz";
import { Descriptions, DescriptionsProps } from "antd";

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
    <>
      <Descriptions column={1} colon={false} size="small" style={{ marginBlock: 24, padding: 8 }} items={descriptionItems} />

      <RenderQuiz data={data?.questions} title={data?.title} isLoading={isLoading} />
    </>
  );
};
