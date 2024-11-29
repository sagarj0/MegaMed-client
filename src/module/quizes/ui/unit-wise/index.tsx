import { Form } from "antd";
import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "../../hooks/useFetchQuiz";

export const UnitWiseTestPage: React.FC = () => {
  const { unit } = useParams();

  const { data, isLoading } = useFetchQuiz({ type: "unitWise", value: unit, current: 1, pageSize: 10 });

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

  const time = 1000 * 60 * 20; // 20 minutes

  return (
    <Form form={form} onFinish={handleSubmit}>
      <InteractiveMCQ MCQs={data} isLoading={isLoading} title={unit!} time={time} />
      <FormDebug />
    </Form>
  );
};
