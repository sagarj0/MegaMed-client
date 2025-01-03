import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { renderImage } from "@/module/quizes/ui/components/render-image";
import { Descriptions, Space, Form } from "antd";
import { SaveQuizKeys } from "../add/type";
import { CheckCircleFilled } from "@ant-design/icons";

export const renderQuestion = (question: DetailedQuestion, index: number) => (
  <Descriptions
    column={1}
    colon={false}
    size="small"
    style={{ marginBlock: 32, textAlign: "left" }}
    items={[
      {
        label: "Q " + (index + 1) + ".",
        children: (
          <Space direction="vertical" align="start">
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
);
