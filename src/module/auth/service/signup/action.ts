import { parseError } from "@/helper/parse-error";
import { signup } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { changeUser, changeAccessToken } from "../repo/reducer";
import { SignupFormProps } from "../../ui/type";
import { UserRoleEnum } from "../login/type";

export const signUpWithCrednetial = (props: SignupFormProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const req = { ...props, role: UserRoleEnum.STUDENT };

    const response = await signup(req);

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
