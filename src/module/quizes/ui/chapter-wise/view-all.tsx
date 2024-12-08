import { properCase } from "@/helper/proper-case";
import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Card, Col, Descriptions, Row, Typography, Empty, Space, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizUrls } from "../../util/url";

export const ViewAllChapterWiseTestPage: React.FC = () => {
  const { chapter } = useParams<{ chapter: string }>();
  const { data, isLoading } = useFetchAllQuiz({ filter: { chapter, type: "chapter" } });
  const navigate = useNavigate();

  const handleOnClick = (id: string) => navigate(QuizUrls.giveChapterWiseTest + id);

  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center" }}>{`All the Published ${properCase(chapter)} Tests`}</Typography.Title>

      {data?.length === 0 && (
        <Empty
          description={
            <Space direction="vertical" size="middle">
              <Typography.Text>Sorry, There are no tests available for this chapter.</Typography.Text>
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
            <Card
              title={quiz.title}
              key={quiz.id}
              loading={isLoading}
              onClick={() => !quiz.score && handleOnClick(quiz.id)}
              style={{ cursor: quiz.score ? "not-allowed" : "pointer" }}
              hoverable={quiz.score ? false : true}
            >
              <Descriptions
                colon={false}
                size="small"
                column={1}
                items={[
                  {
                    label: "Chapter",
                    children: quiz.chapter,
                  },
                  {
                    label: "Question Count",
                    children: quiz.questionCount,
                  },
                  {
                    label: "Time",
                    children: "10 Min",
                  },
                  {
                    label: "Marks Obtained",
                    children: quiz.score ? quiz.score : "Not Attempted",
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
