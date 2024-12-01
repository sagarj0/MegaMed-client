import { useNavigate, useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "../../hooks/useFetchQuiz";
import React from "react";
import { Form, FormProps, Input, Modal } from "antd";
import { saveQuizAction } from "../../services/save/action";
import { SaveQuizKeys, SaveQuizProps } from "../type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { resetQuizReducer, setOpenModal } from "@/store/reducers/quiz-helper/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/quizes/services/save/reducer";
import { QuizUrls } from "../../util/url";
import { Rules } from "@/helper/form/form-rules";

export const ChapterWiseTestPage: React.FC = () => {
  const { chapter } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm<SaveQuizProps>();
  const time = 1000 * 60 * 10;

  const { openModal } = useAppSelector((root) => root.QuizHelper);

  const { data, isLoading } = useFetchQuiz({ type: "chapterWise", value: chapter, current: 1, pageSize: 10 });

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
        <Form.Item
          name={SaveQuizKeys.title}
          label={"Name"}
          labelCol={{ span: 7 }}
          rules={[Rules.required]}
          children={<Input placeholder="Enter the name for this quiz" />}
        />
        <Form.Item
          name={SaveQuizKeys.type}
          initialValue={"chapter" as SaveQuizProps["type"]}
          labelCol={{ span: 7 }}
          label={"Type"}
          children={<Input disabled />}
        />
        <Form.Item
          name={SaveQuizKeys.chapter}
          labelCol={{ span: 7 }}
          initialValue={chapter}
          label={"Chapter"}
          children={<Input disabled />}
        />
        <Form.Item name={SaveQuizKeys.score} labelCol={{ span: 7 }} label={"Score Obtained"} children={<Input disabled />} />
      </Modal>
      <InteractiveMCQ MCQs={data} title={chapter!} time={time} isLoading={isLoading} />
      <FormDebug />
    </Form>
  );
};
