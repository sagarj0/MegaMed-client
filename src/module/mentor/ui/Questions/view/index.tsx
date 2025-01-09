import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, DescriptionsProps } from "antd";
import useFetchQuestion from "@/module/admin/hooks/questions/useFetchQuestion";
import { EditOutlined } from "@ant-design/icons";
import { AllUrls } from "@/router/urls";
import { renderQuestion } from "@/module/admin/ui/quizes/components/render-question";

export const ViewQuestion: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchQuestion(id);
  const navigate = useNavigate();
  const onEdit = () => navigate(AllUrls.mentorquestions.edit + id, { state: data });

  const subjectData: DescriptionsProps["items"] = [
    { label: "Subject", children: data?.subject },
    { label: "Chapter", children: data?.chapter },
    { label: "Unit", children: data?.unit, style: { paddingBottom: 20 } },
  ];

  return (
    <Card
      loading={isLoading}
      style={{ border: "none" }}
      styles={{ body: { paddingBlock: 0 } }}
      extra={<Button type={"text"} icon={<EditOutlined />} children={"Edit"} onClick={onEdit} />}
    >
      {renderQuestion(data, data?.questionNo, subjectData)}
    </Card>
  );
};
