import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/quizes/generate/reducer";
import { GenerateQuizReq } from "../service/quizes/generate/type";
import { generateQuizAction } from "../service/quizes/generate/action";

const useGenerateQuiz = (props: GenerateQuizReq) => {
  const { type, value, current = 1, pageSize } = props;
  const dispatch = useAppDispatch();

  const handleGenerate = () => {
    if (type) dispatch(generateQuizAction({ type, value, current, pageSize }));
  };

  const { isLoading, error, data, success } = useAppSelector((root) => root.GenerateQuiz);

  useStatusMessage({ success, resetSuccess, error, resetError });

  return { isLoading, data, handleGenerate };
};

export default useGenerateQuiz;
