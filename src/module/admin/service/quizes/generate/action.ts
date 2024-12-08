import { parseError } from "@/helper/parse-error";
import { generateQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setData, setError, setSuccess } from "./reducer";
import { GenerateQuizReq } from "./type";

export const generateQuizAction = (props: GenerateQuizReq) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await generateQuiz(props);

    const { data, message } = response.data;

    dispatch(setData(data));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
