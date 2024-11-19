import { parseError } from "@/helper/parse-error";
import { getMe, mockgetMe } from "./api";
import { AppDispatch } from "@/store";
import { config } from "@/util/config";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { changeUser } from "../repo/reducer";

export const fetchMe = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = config.database === "MOCK" ? await mockgetMe() : await getMe();

    const { user, message } = response.data;

    dispatch(changeUser(user));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
