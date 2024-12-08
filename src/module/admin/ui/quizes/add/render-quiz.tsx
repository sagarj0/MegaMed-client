import { DetailedQuiz } from "@/module/admin/service/quizes/generate/type";
import { Card, Typography, Col, Descriptions, Form, Space } from "antd";
import { SaveQuizKeys } from "./type";
import { CheckCircleFilled } from "@ant-design/icons";
import { renderImage } from "@/module/quizes/ui/components/render-image";

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
              style={{ marginBlock: 32 }}
              items={[
                {
                  label: "Q " + (index + 1) + ".",
                  children: (
                    <Space direction="vertical">
                      {question.question}
                      {renderImage(question.qImage, "question image")}
                      <Form.Item name={[SaveQuizKeys.questionIds, index]} initialValue={question.id} noStyle hidden />
                    </Space>
                  ),
                },
                {
                  label: "a.",
                  children: (
                    <Space>
                      <Space direction="vertical" align="start">
                        {question.optionA}
                        {renderImage(question.aImage, "option a image")}
                      </Space>
                      {question.correctAnswer === "a" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "b.",
                  children: (
                    <Space>
                      <Space direction="vertical" align="start">
                        {question.optionB}
                        {renderImage(question.bImage, "option b image")}
                      </Space>
                      {question.correctAnswer === "b" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "c.",
                  children: (
                    <Space>
                      <Space direction="vertical" align="start">
                        {question.optionC}
                        {renderImage(question.cImage, "option c image")}
                      </Space>
                      {question.correctAnswer === "c" && <CheckCircleFilled style={{ color: "green" }} />}
                    </Space>
                  ),
                },
                {
                  label: "d.",
                  children: (
                    <Space>
                      <Space direction="vertical" align="start">
                        {question.optionD}
                        {renderImage(question.dImage, "option d image")}
                      </Space>
                      {question.correctAnswer === "d" && <CheckCircleFilled style={{ color: "green" }} />}
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
