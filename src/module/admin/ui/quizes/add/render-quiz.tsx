import { DetailedQuiz } from "@/module/admin/service/quizes/generate/type";
import { Card, Typography, Col, Descriptions, Form, Space } from "antd";
import { SaveQuizKeys } from "./type";
import { CheckCircleFilled } from "@ant-design/icons";

interface Props {
  data: DetailedQuiz;
  isLoading?: boolean;
  title?: string;
}

export const RenderQuiz: React.FC<Props> = ({ data, isLoading, title }) => {
  return (
    <>
      <Card loading={isLoading} title={<Typography.Title level={4}> {title || "Generated Questions"}</Typography.Title>}>
        <Col sm={{ offset: 4 }} md={{ offset: 3 }} lg={{ offset: 2 }}>
          {data?.map((question, index) => (
            <Descriptions
              column={1}
              colon={false}
              size="small"
              style={{ marginBlock: 24 }}
              items={[
                {
                  label: "Q " + (index + 1) + ".",
                  children: (
                    <>
                      {question.question}
                      <Form.Item name={[SaveQuizKeys.questionIds, index]} initialValue={question.id} noStyle hidden />
                    </>
                  ),
                },
                {
                  label: "a.",
                  children: (
                    <Space>
                      {question.optionA} {question.correctAnswer === "a" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "b.",
                  children: (
                    <Space>
                      {question.optionB} {question.correctAnswer === "b" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "c.",
                  children: (
                    <Space>
                      {question.optionC} {question.correctAnswer === "c" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "d.",
                  children: (
                    <Space>
                      {question.optionD} {question.correctAnswer === "d" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "explanation",
                  children: question.explanation,
                },
              ]}
            />
          ))}
        </Col>
      </Card>
    </>
  );
};
