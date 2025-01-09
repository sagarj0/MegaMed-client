import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchQuizAciton } from "../../service/quizes/fetch/action";
import { resetError, resetSuccess } from "../../service/quizes/fetch/reducer";

const useFetchQuiz = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  // const { success: paymentRecorded } = useAppSelector((state) => state.AddTransaction);

  useEffect(() => {
    if (id) dispatch(fetchQuizAciton({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading, success } = useAppSelector((root) => root.FetchQuiz);

  useStatusMessage({ error, resetError, success, resetSuccess });

  return { isLoading, data };
};

export default useFetchQuiz;
