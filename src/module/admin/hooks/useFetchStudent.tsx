import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchStudentAction } from "../service/Student/fetch/action";
import { resetError } from "../service/Student/fetch/reducer";

const useFetchStudent = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  // const { success: paymentRecorded } = useAppSelector((state) => state.AddTransaction);

  useEffect(() => {
    if (id) dispatch(fetchStudentAction({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading } = useAppSelector((root) => root.FetchStudent);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchStudent;
