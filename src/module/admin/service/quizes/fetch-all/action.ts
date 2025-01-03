import { parseError } from "@/helper/parse-error";
import { fetchQuiz } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { FetchAllQuizRequest } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData, setIsFetched } from "../repo/reducer";

export const fetchAllQuizAciton = (props: FetchAllQuizRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await fetchQuiz(request);

    const { data } = response;

    dispatch(setData(data));
    dispatch(setIsFetched(true));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
