import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { Alert, Button, Card, Col, Descriptions, DescriptionsProps, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizDescriptions } from "../view-all/helper";
import { RenderQuiz } from "@/module/admin/ui/quizes/components/render-quiz";
import { customConcatString } from "@/helper/custom-concat";
import { StudentUrls } from "@/module/student/util/urls";
import { RedoOutlined } from "@ant-design/icons";
import { isQuizRedoable } from "@/helper/is-quiz-redoable";

export const ViewAttemptedQuiz: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);

  const handleViewReport = () => navigate(StudentUrls.viewQuizReport + id);
  const handleRedoTest = () => navigate(StudentUrls.studentQuizes + id);
  const isRedoable = isQuizRedoable(data);

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
        <Button type="primary" children={"Redo Test"} icon={<RedoOutlined />} disabled={!isRedoable} onClick={handleRedoTest} />,
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

      <Alert
        showIcon
        type="info"
        style={{ marginTop: 24, fontSize: 13, textAlign: "left", padding: 12 }}
        description={
          <>
            Except <strong> Mock Test</strong> , Other Test are for practice purpose. You can redo the test as many times as you want. Your last
            attempt will be considered for ranking and score.
          </>
        }
      />

      <RenderQuiz data={data?.questions} noStyle showAnswers />
    </Card>
  );
};
