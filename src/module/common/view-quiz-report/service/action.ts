import { parseError } from "@/helper/parse-error";
import { getQuizReport } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setError, setData } from "./reducer";
import { ViewQuizReportRequest } from "./type";

export const fetchQuizReportAction = (prop: ViewQuizReportRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getQuizReport(prop);
    const { data } = response.data;

    dispatch(setData(data ?? {}));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
