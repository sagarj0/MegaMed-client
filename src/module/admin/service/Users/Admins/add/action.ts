import { parseError } from "@/helper/parse-error";
import { postAdmin } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseAdminReq } from "./parse-request";
import { AddAdminProps } from "@/module/admin/ui/admins/add/type";

export const addAdmin = (props: AddAdminProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseAdminReq(props);

    const response = await postAdmin(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
