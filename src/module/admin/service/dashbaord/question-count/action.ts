import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError, setData } from "./reducer";
import { getQuestionCount } from "./api";

export const questionCountAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getQuestionCount();

    const { message, data } = response.data;

    dispatch(setSuccess(message));
    dispatch(setData({ questionCount: data }));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
