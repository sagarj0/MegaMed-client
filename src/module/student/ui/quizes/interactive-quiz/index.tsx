import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "./interactive-component";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import React from "react";
import { Form, FormProps } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setScoreChecked } from "@/store/reducers/quiz-helper/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/student/services/quizes/update-score/reducer";
import { updateScoreAction } from "@/module/student/services/quizes/update-score/action";
import { UpdateScoreKey, UpdateScoreProps } from "../type";
import { getQuizTime } from "@/helper/get-quiz-time";

export const InteractiveQuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UpdateScoreProps>();

  const { data, isLoading } = useFetchQuiz(id);
  const time = getQuizTime(data?.type);

  const handleSubmit: FormProps<UpdateScoreProps>["onFinish"] = (vals) => dispatch(updateScoreAction(vals));

  const { success, error } = useAppSelector((root) => root.UpdateScore);
  const onSuccessReset = () => dispatch(setScoreChecked(true));
  const onErrorReset = () => dispatch(setScoreChecked(true));
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset });

  return (
    <Form form={form} onFinish={handleSubmit} colon={false} labelAlign="left">
      <Form.Item name={UpdateScoreKey.quizId} initialValue={id} noStyle hidden />
      <Form.Item name={UpdateScoreKey.score} noStyle hidden />
      <InteractiveMCQ MCQs={data.questions} title={data?.chapter!} time={time} isLoading={isLoading} />
      <FormDebug />
    </Form>
  );
};
