import { parseError } from "@/helper/parse-error";
import { fetchUser } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { FetchAllUserReq } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData } from "../repo/reducer";

export const fetchAllUserAction = (props: FetchAllUserReq) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await fetchUser(request);

    const { data } = response;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
