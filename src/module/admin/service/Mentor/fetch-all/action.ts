import { parseError } from "@/helper/parse-error";
import { fetchMentor } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { FetchAllMentorReq } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData } from "../repo/reducer";

export const fetchAllMentorAction = (props: FetchAllMentorReq) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await fetchMentor(request);

    const { data } = response.data;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
