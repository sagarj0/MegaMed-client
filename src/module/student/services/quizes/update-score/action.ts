import { parseError } from "@/helper/parse-error";
import { updateScore } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setSuccess } from "./reducer";
import { parseRequest } from "./parse";
import { UpdateScoreProps } from "@/module/student/ui/quizes/type";

export const updateScoreAction = (props: UpdateScoreProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const req = parseRequest(props);

    const response = await updateScore(req);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
