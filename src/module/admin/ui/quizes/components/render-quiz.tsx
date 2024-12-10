import { GeneralizedQuiz, MockDetailedQuiz } from "@/module/admin/service/quizes/generate/type";
import { Card, Typography, Col } from "antd";
import { renderQuestion } from "./render-question";

interface Props {
  data: GeneralizedQuiz;
  isLoading?: boolean;
  title?: string;
}

export const RenderQuiz: React.FC<Props> = ({ data, isLoading, title }) => {
  const isMockDetailedQuiz = (quiz: GeneralizedQuiz): quiz is MockDetailedQuiz => {
    return Array.isArray(quiz) && quiz.every((item) => "questions" in item);
  };

  return (
    <Card loading={isLoading} title={<Typography.Title level={4}>{title || "Generated Questions"}</Typography.Title>}>
      <Col sm={{ offset: 4 }} md={{ offset: 3 }} lg={{ offset: 2 }}>
        {isMockDetailedQuiz(data)
          ? data.map((mockQuiz, subjectIndex) => (
              <div key={subjectIndex}>
                <Typography.Title level={5}>{mockQuiz.subject}</Typography.Title>
                {mockQuiz.questions.map((question, index) => renderQuestion(question, index))}
              </div>
            ))
          : data?.map((question, index) => renderQuestion(question, index))}
      </Col>
    </Card>
  );
};
