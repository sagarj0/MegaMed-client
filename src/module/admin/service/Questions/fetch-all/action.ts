import { parseError } from "@/helper/parse-error";
import { fetchQuestion } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { FetchAllQuestionRequest } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData } from "../repo/reducer";

export const fetchAllQuestionAciton = (props: FetchAllQuestionRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await fetchQuestion(request);

    const { data } = response;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
