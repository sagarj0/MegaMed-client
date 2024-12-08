import { parseError } from "@/helper/parse-error";
import { updateScore } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setSuccess } from "./reducer";
import { UpdateScoreProps } from "../../ui/type";
import { parseRequest } from "./parse";

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
