import { Form, FormProps } from "antd";
import { InteractiveMCQ } from "../components/interactive-mcq";
import FormDebug from "@/helper/form/form-debug";
import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { UpdateScoreProps } from "../type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setScoreChecked } from "@/store/reducers/quiz-helper/reducer";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/quizes/services/update-score/reducer";
import { useParams } from "react-router-dom";
import { updateScoreAction } from "../../services/update-score/action";

export const MockTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<UpdateScoreProps>();
  const time = 1000 * 60 * 180; // 180 minutes

  const { data, isLoading } = useFetchQuiz(id);

  const handleSubmit: FormProps<UpdateScoreProps>["onFinish"] = (vals) => dispatch(updateScoreAction(vals));

  const { success, error } = useAppSelector((root) => root.UpdateScore);
  const onSuccessReset = () => dispatch(setScoreChecked(true));
  const onErrorReset = () => dispatch(setScoreChecked(true));
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset });
  return (
    <Form form={form} onFinish={handleSubmit} colon={false} labelAlign="left">
      <Form.Item name={"quizId"} initialValue={id} noStyle hidden />
      <Form.Item name={"score"} noStyle hidden />
      <InteractiveMCQ MCQs={data.questions} isLoading={isLoading} title={"Mock Test"} time={time} timeFormat={"HH:mm:ss"} />
      <FormDebug />
    </Form>
  );
};
