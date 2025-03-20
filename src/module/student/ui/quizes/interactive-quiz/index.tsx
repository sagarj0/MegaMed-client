import { useParams } from "react-router-dom";
import InteractiveMCQ from "./interactive-component";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import React from "react";
import { Form, FormProps } from "antd";
import { useAppDispatch } from "@/store/hook";
import { updateScoreAction } from "@/module/student/services/quizes/update-score/action";
import { UpdateScoreKey, UpdateScoreProps } from "../type";
import { getQuizRemainingTime } from "@/helper/get-quiz-time";
import useAuthHook from "@/module/auth/hook/useAuthHook";
import { useSubmissionModal } from "./useSubmissionModal";

export const InteractiveQuizPage: React.FC = () => {
  useAuthHook({ checkIsPaid: true });
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UpdateScoreProps>();

  const { data, isLoading } = useFetchQuiz(id);
  const time = getQuizRemainingTime({ quiz: data });

  const handleSubmit: FormProps<UpdateScoreProps>["onFinish"] = (vals) => dispatch(updateScoreAction(vals));

  useSubmissionModal();

  return (
    <Form form={form} onFinish={handleSubmit} colon={false} labelAlign="left">
      <Form.Item name={UpdateScoreKey.quizId} initialValue={id} noStyle hidden />
      <Form.Item name={UpdateScoreKey.score} noStyle hidden />
      <Form.Item name={UpdateScoreKey.timeTaken} noStyle hidden />
      <InteractiveMCQ MCQs={data.questions} title={data?.title!} time={time} isLoading={isLoading} />
      <FormDebug />
    </Form>
  );
};
