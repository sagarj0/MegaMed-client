import { parseError } from "@/helper/parse-error";
import { fetchStudent } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError } from "./reducer";
import { FetchAllStudentReq } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { setData } from "../repo/reducer";

export const fetchAllStudentAction = (props: FetchAllStudentReq) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseRequest(props);

    const response = await fetchStudent(request);

    const { data } = response.data;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
