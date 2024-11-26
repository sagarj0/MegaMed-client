import { parseError } from "@/helper/parse-error";
import { postQuestion } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";
import { parseQuestionRequest } from "./parse-request";

export const addQuestionAction = (props: AddQuestionsProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseQuestionRequest(props);

    const response = await postQuestion(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
