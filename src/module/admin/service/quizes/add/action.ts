import { parseError } from "@/helper/parse-error";
import { postQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { SaveQuizProps } from "@/module/admin/ui/quizes/add/type";
import { parseRequest } from "./convert";

export const addQuizAction = (props: SaveQuizProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const req = parseRequest(props);

    const response = await postQuiz(req);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
