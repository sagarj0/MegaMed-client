import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError } from "@/module/admin/service/Questions/fetch/reducer";
import { fetchQuestionAciton } from "../service/Questions/fetch/action";

const useFetchQuestion = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchQuestionAciton({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading } = useAppSelector((root) => root.MentorFetchQuestion);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchQuestion;
