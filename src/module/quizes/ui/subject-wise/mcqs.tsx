import { Form, FormProps } from "antd";
import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { resetError, resetSuccess } from "@/module/quizes/services/update-score/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setScoreChecked } from "@/store/reducers/quiz-helper/reducer";
import { UpdateScoreKey, UpdateScoreProps } from "../type";
import { updateScoreAction } from "../../services/update-score/action";

export const SubjectWiseTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UpdateScoreProps>();
  const time = 1000 * 60 * 40; // 40 minutes

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
      <InteractiveMCQ MCQs={data?.questions} isLoading={isLoading} title={data?.subject!} time={time} />
      <FormDebug />
    </Form>
  );
};
