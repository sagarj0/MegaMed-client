import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/useFetchQuiz";
import React from "react";
import { Form, FormProps } from "antd";
import { UpdateScoreKey, UpdateScoreProps } from "../type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setScoreChecked } from "@/store/reducers/quiz-helper/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/quizes/services/update-score/reducer";
import { updateScoreAction } from "../../services/update-score/action";

export const ChapterWiseTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UpdateScoreProps>();
  const time = 1000 * 60 * 40;

  const { data, isLoading } = useFetchQuiz(id);

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
