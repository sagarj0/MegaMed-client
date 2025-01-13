import { useNavigate, useParams } from "react-router-dom";
import { renderQuestion } from "../../quizes/components/render-question";
import { Button, Card, DescriptionsProps, Row } from "antd";
// import useFetchQuestion from "@/module/admin/hooks/questions/useFetchQuestion";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { AllUrls } from "@/router/urls";
import { useAppSelector } from "@/store/hook";

export const ViewQuestion: React.FC = () => {
  const { id } = useParams();
  // const { data, isLoading } = useFetchQuestion(id);

  const { data: allQuestion } = useAppSelector((root) => root.QuestionRepo);
  const data = allQuestion.find((question) => question.id === id);
  const isLoading = false;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
      title={<Row children={<Button type={"text"} children={"Back"} icon={<ArrowLeftOutlined />} onClick={goBack} />} justify={"start"} />}
    >
      {renderQuestion(data!, data?.questionNo, subjectData)}
    </Card>
  );
};
