import { mockMCQs } from "@/util/data/mock-question";
import { Form } from "antd";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";

export const MockTestPage: React.FC = () => {
  const [form] = Form.useForm();
  const questionData = Form.useWatch("questionData", form);

  const handleSubmit = (vals: any) => {
    console.log(vals);

    const firstUnansweredIndex = questionData.findIndex((question: any) => !question.answer);

    if (firstUnansweredIndex !== -1) {
      const timelineItem = document.querySelectorAll(".ant-timeline-item")[firstUnansweredIndex] as HTMLElement;
      if (timelineItem) {
        timelineItem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
  };

  const time = 1000 * 60 * 180; // 180 minutes

  return (
    <Form form={form} onFinish={handleSubmit}>
      <InteractiveMCQ MCQs={mockMCQs} title={"Mock Test"} time={time} timeFormat={"HH:mm:ss"} />
      <FormDebug />
    </Form>
  );
};
