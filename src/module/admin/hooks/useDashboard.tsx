import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError } from "../service/dashbaord/question-count/reducer";
import { questionCountAction } from "../service/dashbaord/question-count/action";

const useFetchDashboardData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(questionCountAction());
  }, [dispatch]);

  const { data, error, isLoading } = useAppSelector((root) => root.DashboardReducer);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchDashboardData;
