import { parseError } from "@/helper/parse-error";
import { fetchQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setData, setError, setSuccess } from "./reducer";
import { FetchQuizReq } from "./type";

export const fetchQuizAction = (props: FetchQuizReq) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await fetchQuiz(props);

    const { data, message } = response.data;

    dispatch(setData(data));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
