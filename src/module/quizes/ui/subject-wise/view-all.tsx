import { properCase } from "@/helper/proper-case";
import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Typography, Row, Col, Card, Descriptions } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizUrls } from "../../util/url";

export const ViewAllSubjectWiseTestPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchAllQuiz({ filter: { subject, type: "subject" } });

  const handleOnClick = (id: string) => navigate(QuizUrls.quiz + id);

  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center" }}>{`All the Published ${properCase(subject)} Tests`}</Typography.Title>

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
