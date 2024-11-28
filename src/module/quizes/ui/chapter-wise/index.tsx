import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import { mockMCQs } from "@/util/data/mock-question";
import FormDebug from "@/helper/form/form-debug";
import { Form } from "antd";

export const ChapterWiseTestPage: React.FC = () => {
  const { chapter } = useParams();
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
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <InteractiveMCQ MCQs={mockMCQs} title={chapter!} time={1000 * 60 * 10} />
      <FormDebug />
    </Form>
  );
};
