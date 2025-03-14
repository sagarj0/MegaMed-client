import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchQuizReportAction } from "../service/action";
import { resetError, resetSuccess } from "../service/reducer";

const useFetchQuizReport = (quizId: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (quizId) dispatch(fetchQuizReportAction({ quizId }));
  }, [dispatch, quizId]);

  const { data, error, isLoading, success } = useAppSelector((root) => root.FetchQuizReport);

  useStatusMessage({ error, resetError, success, resetSuccess });

  return { isLoading, data };
};

export default useFetchQuizReport;
