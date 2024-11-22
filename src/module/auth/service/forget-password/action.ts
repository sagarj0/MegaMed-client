import { parseError } from "@/helper/parse-error";
import { login } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { ForgetPasswordRequest } from "./type";

export const forgetPassword = (props: ForgetPasswordRequest) => async (dispatch: AppDispatch) => {
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
