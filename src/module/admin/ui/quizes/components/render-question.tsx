import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { Descriptions, Space, Form, DescriptionsProps } from "antd";
import { SaveQuizKeys } from "../add/type";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { renderImage } from "@/component/render-image";

export const renderQuestion = (
  question: DetailedQuestion,
  index: number = 0,
  items: DescriptionsProps["items"] = [],
  showAnswers: boolean = false,
) => (
  <Descriptions
    column={1}
    colon={false}
    size="small"
    style={{ marginBlock: 32, textAlign: "left" }}
    items={[
      ...items,
      {
        label: "Q " + index + ".",
        children: (
          <Space direction="vertical" align="start">
            {question.question}
            {renderImage(question.qImage, "question image")}
            <Form.Item name={[SaveQuizKeys.questionIds, index - 1]} initialValue={question.id} noStyle hidden />
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
            {showAnswers && question.correctAnswer !== "a" && question.choosedAnswer === "a" && <CloseCircleFilled style={{ color: "red" }} />}
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
            {showAnswers && question.correctAnswer !== "b" && question.choosedAnswer === "b" && <CloseCircleFilled style={{ color: "red" }} />}
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
            {showAnswers && question.correctAnswer !== "c" && question.choosedAnswer === "c" && <CloseCircleFilled style={{ color: "red" }} />}
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
            {showAnswers && question.correctAnswer !== "d" && question.choosedAnswer === "d" && <CloseCircleFilled style={{ color: "red" }} />}
          </Space>
        ),
      },
      {
        label: "explanation :",
        children: (
          <Space direction="vertical" align="start">
            {question.explanation}
            {renderImage(question.eImage, "explanation image")}
          </Space>
        ),
      },
    ]}
  />
);
