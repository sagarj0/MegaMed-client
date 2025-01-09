import { useNavigate, useParams } from "react-router-dom";
import { renderQuestion } from "../../quizes/components/render-question";
import { Button, Card, DescriptionsProps } from "antd";
import useFetchQuestion from "@/module/admin/hooks/questions/useFetchQuestion";
import { EditOutlined } from "@ant-design/icons";
import { AllUrls } from "@/router/urls";

export const ViewQuestion: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchQuestion(id);
  const navigate = useNavigate();
  const onEdit = () => navigate(AllUrls.adminquestions.edit + id, { state: data });

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
