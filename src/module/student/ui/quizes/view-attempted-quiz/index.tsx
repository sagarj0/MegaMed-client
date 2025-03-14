import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { Button, Card, Col, Descriptions, DescriptionsProps, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizDescriptions } from "../view-all/helper";
import { RenderQuiz } from "@/module/admin/ui/quizes/components/render-quiz";
import { RedoOutlined } from "@ant-design/icons";
import { customConcatString } from "@/helper/custom-concat";
import { StudentUrls } from "@/module/student/util/urls";

export const ViewAttemptedQuiz: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);

  const handleViewReport = () => navigate(StudentUrls.viewQuizReport + id);

  const resultItems: DescriptionsProps["items"] = [
    { label: "Score", children: data.score },
    { label: "Average Score", children: data.averageScore },
    { label: "Rank", children: data.rank },
    { label: "Time Taken", children: customConcatString("Min")(data.timeTaken) },
  ];

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      loading={isLoading}
      title={"Test Result For " + data.title}
      styles={{ header: { textAlign: "left" } }}
      extra={[
        <Button type="link" children="View Ranking Detail" onClick={handleViewReport} />,
        <Button type="primary" children={"Redo Test"} icon={<RedoOutlined />} disabled />,
      ]}
    >
      <Row gutter={[8, 8]}>
        <Col md={12}>
          <Descriptions
            contentStyle={{ textAlign: "left" }}
            size="small"
            column={1}
            items={getQuizDescriptions(data)}
            style={{ textAlign: "left" }}
            title="Quiz Details"
          />
        </Col>
        <Col md={12}>
          <Descriptions
            contentStyle={{ textAlign: "left" }}
            size="small"
            column={1}
            items={resultItems}
            style={{ textAlign: "left" }}
            title="Result Details"
          />
        </Col>
      </Row>
      <RenderQuiz data={data?.questions} noStyle showAnswers />
    </Card>
  );
};
