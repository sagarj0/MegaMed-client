import { properCase } from "@/helper/proper-case";
import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Card, Col, Descriptions, Row, Typography } from "antd";
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
                ]}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
