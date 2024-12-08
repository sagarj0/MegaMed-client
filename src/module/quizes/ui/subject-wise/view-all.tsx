import { properCase } from "@/helper/proper-case";
import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Typography, Row, Col, Card, Descriptions, Button, Empty, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizUrls } from "../../util/url";

export const ViewAllSubjectWiseTestPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchAllQuiz({ filter: { subject, type: "subject" } });

  const handleOnClick = (id: string) => navigate(QuizUrls.giveSubjectWiseTest + id);

  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center" }}>{`All the Published ${properCase(subject)} Tests`}</Typography.Title>

      {data?.length === 0 && (
        <Empty
          description={
            <Space direction="vertical" size="middle">
              <Typography.Text>Sorry, There are no tests available for this subject.</Typography.Text>
              <Button type="primary" onClick={() => navigate(QuizUrls.quiz)}>
                Go Back
              </Button>
            </Space>
          }
        />
      )}

      <Row gutter={[24, 24]}>
        {data?.map((quiz) => (
          <Col span={24} xs={12} sm={8} lg={6}>
            <Card title={quiz.title} key={quiz.id} loading={isLoading} onClick={() => handleOnClick(quiz.id)} style={{ cursor: "pointer" }}>
              <Descriptions
                colon={false}
                size="small"
                column={1}
                items={[
                  {
                    label: "Subject",
                    children: quiz.subject,
                  },
                  {
                    label: "Question Count",
                    children: quiz.questionCount,
                  },
                  {
                    label: "Time",
                    children: "40 Min",
                  },
                ]}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
