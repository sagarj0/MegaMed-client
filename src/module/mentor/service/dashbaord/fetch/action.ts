import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError, setData } from "./reducer";
import { getDashboardData } from "./api";

export const dashboardAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getDashboardData();

    const { message, data } = response.data;

    dispatch(setSuccess(message));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
