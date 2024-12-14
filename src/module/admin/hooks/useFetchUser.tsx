import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchUserAction } from "../service/Users/fetch/action";
import { resetError } from "../service/Users/fetch/reducer";

const useFetchUser = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchUserAction({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading } = useAppSelector((root) => root.FetchUser);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchUser;
