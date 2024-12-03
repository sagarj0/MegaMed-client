import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { bulkUpdateUsers } from "./api";
import { PostBulkUpdateRequest } from "./type";

export const bulkEditAction = (props: PostBulkUpdateRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await bulkUpdateUsers(props);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
