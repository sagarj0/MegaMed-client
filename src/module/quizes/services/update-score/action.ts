import { parseError } from "@/helper/parse-error";
import { saveQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setSuccess } from "./reducer";
import { UpdateScore } from "./type";

export const updateScoreAction = (props: UpdateScore) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await saveQuiz(props);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
