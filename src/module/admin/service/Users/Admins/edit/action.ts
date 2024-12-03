import { parseError } from "@/helper/parse-error";
import { patchQuestion } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseEditRequest } from "./parse-request";
import { AddAdminProps } from "@/module/admin/ui/admins/add/type";

interface Props {
  oldData: AddAdminProps;
  newData: AddAdminProps;
}

export const editAdminAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseEditRequest(props);

    const response = await patchQuestion(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
