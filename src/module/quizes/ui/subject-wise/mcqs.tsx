import { Form, FormProps, Input, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/useFetchQuiz";
import { resetError, resetSuccess } from "@/module/quizes/services/save/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { resetQuizReducer, setOpenModal } from "@/store/reducers/quiz-helper/reducer";
import { saveQuizAction } from "../../services/save/action";
import { QuizUrls } from "../../util/url";
import { SaveQuizKeys, SaveQuizProps } from "../type";

export const SubjectWiseTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm<SaveQuizProps>();

  const { data, isLoading } = useFetchQuiz(id);

  const { openModal } = useAppSelector((root) => root.QuizHelper);

  const handleSubmit: FormProps<SaveQuizProps>["onFinish"] = (vals) => {
    const firstUnansweredIndex = vals.questionData?.findIndex((question: any) => !question.answer);

    if (firstUnansweredIndex !== -1) {
      const timelineItem = document.querySelectorAll(".ant-timeline-item")[firstUnansweredIndex] as HTMLElement;
      if (timelineItem) timelineItem.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    dispatch(saveQuizAction(vals));
  };

  const { success, error } = useAppSelector((root) => root.SaveQuiz);
  const onSuccessReset = () => {
    dispatch(resetQuizReducer());
    navigate(QuizUrls.quiz);
  };
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset });

  const time = 1000 * 60 * 40; // 40 minutes

  return (
    <Form form={form} onFinish={handleSubmit} colon={false} labelAlign="left">
      <Modal
        open={openModal}
        onCancel={() => dispatch(setOpenModal(false))}
        destroyOnClose
        onOk={form.submit}
        okText="Submit"
        styles={{ body: { padding: "40px 20px" } }}
      >
        <Form.Item name={SaveQuizKeys.title} label={"Name"} labelCol={{ span: 7 }} initialValue={data?.title} children={<Input disabled />} />

        <Form.Item
          name={SaveQuizKeys.type}
          initialValue={"subject" as SaveQuizProps["type"]}
          labelCol={{ span: 7 }}
          label={"Type"}
          children={<Input disabled />}
        />
        <Form.Item name={SaveQuizKeys.score} labelCol={{ span: 7 }} label={"Score Obtained"} children={<Input disabled />} />
      </Modal>
      <InteractiveMCQ MCQs={data?.questions} isLoading={isLoading} title={data?.subject!} time={time} />
      <FormDebug />
    </Form>
  );
};
