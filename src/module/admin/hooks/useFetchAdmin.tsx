import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchAdminAction } from "../service/Admins/fetch/action";
import { resetError } from "../service/Admins/fetch/reducer";

const useFetchAdmin = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  // const { success: paymentRecorded } = useAppSelector((state) => state.AddTransaction);

  useEffect(() => {
    if (id) dispatch(fetchAdminAction({ id }));
  }, [dispatch, id]);

  const { data, error, isLoading } = useAppSelector((root) => root.FetchAdmin);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchAdmin;
