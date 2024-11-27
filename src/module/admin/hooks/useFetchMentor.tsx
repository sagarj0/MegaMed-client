import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchMentorAction } from "../service/Mentor/fetch/action";
import { resetError } from "../service/Mentor/fetch/reducer";

const useFetchMentor = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  // const { success: paymentRecorded } = useAppSelector((state) => state.AddTransaction);

  useEffect(() => {
    if (id) dispatch(fetchMentorAction({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading } = useAppSelector((root) => root.FetchMentor);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchMentor;
