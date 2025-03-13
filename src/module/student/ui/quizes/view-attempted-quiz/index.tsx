import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { Button, Card, Col, Descriptions, DescriptionsProps, Row } from "antd";
import { useParams } from "react-router-dom";
import { getQuizDescriptions } from "../view-all/helper";
import { RenderQuiz } from "@/module/admin/ui/quizes/components/render-quiz";
import { RedoOutlined } from "@ant-design/icons";
import { customConcatString } from "@/helper/custom-concat";

export const ViewAttemptedQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);

  const resultItems: DescriptionsProps["items"] = [
    { label: "Score", children: data.score },
    { label: "Average Score", children: data.averageScore },
    { label: "Rank", children: data.rank },
    { label: "Time Taken", children: customConcatString("Min")(data.timeTaken) },
    // { label: "Average Time Taken", children: customConcatString("Min")(data.averageTime) },
  ];

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      loading={isLoading}
      title={"Test Result For " + data.title}
      styles={{ header: { textAlign: "left" } }}
      extra={<Button type="primary" children={"Redo Test"} icon={<RedoOutlined />} disabled />}
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
