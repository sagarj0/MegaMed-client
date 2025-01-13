import { parseError } from "@/helper/parse-error";
import { getAllMentorAdded } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData, setIsFetched } from "../repo/reducer";
import { FetchAllQuestionRequest } from "../fetch-all/type";

export const fetchAllMentorAddedAction = (props: FetchAllQuestionRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await getAllMentorAdded(request);

    const { data } = response;

    dispatch(setData(data));
    dispatch(setIsFetched(true));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
