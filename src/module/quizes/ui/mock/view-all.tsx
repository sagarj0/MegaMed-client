import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Typography, Row, Col, Card, Descriptions } from "antd";
import { useNavigate } from "react-router-dom";
import { QuizUrls } from "../../util/url";

export const ViewAllMockTestPage: React.FC = () => {
  const { data, isLoading } = useFetchAllQuiz({ filter: { type: "mock_test" } });

  const navigate = useNavigate();
  const handleOnClick = (id: string) => navigate(QuizUrls.quiz + id);

  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center" }}>{`All the Published Mock Tests`}</Typography.Title>

      <Row>
        {data?.map((quiz) => (
          <Col span={24} xs={12} sm={8} lg={6}>
            <Card title={quiz.title} key={quiz.id} loading={isLoading} onClick={() => handleOnClick(quiz.id)} style={{ cursor: "pointer" }}>
              <Descriptions
                colon={false}
                size="small"
                column={1}
                items={[
                  {
                    label: "Question Count",
                    children: quiz.questionCount,
                  },
                  {
                    label: "Time",
                    children: "180 Min",
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
