import { GeneralizedQuiz, MockDetailedQuiz } from "@/module/admin/service/quizes/generate/type";
import { Card, Typography, Col } from "antd";
import { renderQuestion } from "./render-question";

interface Props {
  data: GeneralizedQuiz;
  isLoading?: boolean;
  title?: string;
  noStyle?: boolean;
  showAnswers?: boolean;
}

export const RenderQuiz: React.FC<Props> = ({ data, isLoading, title, noStyle, showAnswers }) => {
  const isMockDetailedQuiz = (quiz: GeneralizedQuiz): quiz is MockDetailedQuiz => {
    return Array.isArray(quiz) && quiz.every((item) => "questions" in item);
  };

  let questionCounter = 1;

  return (
    <Card
      loading={isLoading}
      title={<Typography.Title level={4}>{title || "Generated Questions"}</Typography.Title>}
      styles={{ header: { textAlign: "left", display: noStyle ? "none" : "" }, body: { padding: noStyle ? 0 : "" } }}
      style={{ padding: noStyle ? 0 : "", border: noStyle ? "none" : "" }}
    >
      <Col sm={{ offset: noStyle ? 0 : 1 }}>
        {isMockDetailedQuiz(data)
          ? data.map((mockQuiz, subjectIndex) => (
              <div key={subjectIndex}>
                <Typography.Title level={4}>{mockQuiz.subject}</Typography.Title>
                {mockQuiz.questions.map((question) => renderQuestion(question, questionCounter++, [], showAnswers))}
              </div>
            ))
          : data?.map((question, index) => renderQuestion(question, index + 1, [], showAnswers))}
      </Col>
    </Card>
  );
};
