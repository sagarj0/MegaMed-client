import { parseError } from "@/helper/parse-error";
import { saveQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setSuccess } from "./reducer";
import { SaveQuizProps } from "../../ui/type";
import { parseRequest } from "./convert";

export const saveQuizAction = (props: SaveQuizProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const req = parseRequest(props);

    const response = await saveQuiz(req);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
