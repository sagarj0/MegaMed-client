import { parseError } from "@/helper/parse-error";
import { getMe } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { changeUser } from "../repo/reducer";

export const fetchMe = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getMe();

    const { data, message } = response.data;

    dispatch(changeUser(data));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
