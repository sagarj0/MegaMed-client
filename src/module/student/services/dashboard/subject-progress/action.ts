import { parseError } from "@/helper/parse-error";
import { getSubjectProgress } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setSuccess, setData } from "./reducer";

export const fetchSubjectsProgress = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getSubjectProgress();

    const { message, data } = response.data;

    dispatch(setData(data ?? []));
    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
