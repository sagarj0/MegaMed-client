import { parseError } from "@/helper/parse-error";
import { login } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { changeUser, changeAccessToken } from "../repo/reducer";
import { LoginRequest } from "./type";

export const loginWithCredential = (props: LoginRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await login(props);

    const { data, token, message } = response.data;

    dispatch(changeUser(data));
    dispatch(changeAccessToken(token));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
