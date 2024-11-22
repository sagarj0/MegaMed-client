import { parseError } from "@/helper/parse-error";
import { login } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { ResetPasswordRequest } from "./type";

export const resetPassword = (props: ResetPasswordRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await login(props);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
