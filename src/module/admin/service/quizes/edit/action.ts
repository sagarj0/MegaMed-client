import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseEditRequest } from "./parse-request";
import { patchQuiz } from "./api";
import { DetailedQuiz } from "../fetch/type";

interface Props {
  id: string;
  oldData: DetailedQuiz;
  newData: DetailedQuiz;
}

export const editQuizAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseEditRequest(props);

    const response = await patchQuiz(request, props.id);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
