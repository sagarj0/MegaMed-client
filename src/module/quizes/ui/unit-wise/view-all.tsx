import { properCase } from "@/helper/proper-case";
import useFetchAllQuiz from "@/module/admin/hooks/useFetchAllQuiz";
import { Typography, Row, Col, Card, Descriptions } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizUrls } from "../../util/url";

export const ViewAllUnitWiseTestPage: React.FC = () => {
  const { unit } = useParams<{ unit: string }>();
  const { data, isLoading } = useFetchAllQuiz({ filter: { unit, type: "unit" } });
  const navigate = useNavigate();

  const handleOnClick = (id: string) => navigate(QuizUrls.quiz + id);

  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center" }}>{`All the Published ${properCase(unit)} Tests`}</Typography.Title>

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
                    label: "Unit",
                    children: quiz.unit,
                  },
                  {
                    label: "Question Count",
                    children: quiz.questionCount,
                  },
                  {
                    label: "Time",
                    children: "20 Min",
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
