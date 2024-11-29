import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchQuizAction } from "../services/fetch/action";
import { resetError, resetSuccess } from "../services/fetch/reducer";
import { FetchQuizReq } from "../services/fetch/type";

const useFetchQuiz = (props: FetchQuizReq) => {
  const { type, value, current, pageSize } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type && value) dispatch(fetchQuizAction({ type, value, current, pageSize }));
  }, [dispatch, type, value, current, pageSize]);

  const { isLoading, error, data, success } = useAppSelector((root) => root.FetchQuiz);

  useStatusMessage({ success, resetSuccess, error, resetError });

  return { isLoading, data: data };
};

export default useFetchQuiz;
