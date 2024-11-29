import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
// import { mockMCQs } from "@/util/data/mock-question";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "../../hooks/useFetchQuiz";
import React from "react";
import { Form } from "antd";

export const ChapterWiseTestPage: React.FC = () => {
  const { chapter } = useParams();
  const { data, isLoading } = useFetchQuiz({ type: "chapterWise", value: chapter, current: 1, pageSize: 10 });

  const [form] = Form.useForm();
  const time = 1000 * 60 * 10;
  const questionData = Form.useWatch("questionData", form);

  const handleSubmit = (vals: any) => {
    console.log(vals);

    const firstUnansweredIndex = questionData?.findIndex((question: any) => !question.answer);

    if (firstUnansweredIndex !== -1) {
      const timelineItem = document.querySelectorAll(".ant-timeline-item")[firstUnansweredIndex] as HTMLElement;
      if (timelineItem) {
        timelineItem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <InteractiveMCQ MCQs={data} title={chapter!} time={time} isLoading={isLoading} />
      <FormDebug />
    </Form>
  );
};
