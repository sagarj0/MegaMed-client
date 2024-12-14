import { parseError } from "@/helper/parse-error";
import { getUser } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setData, setError } from "./reducer";

interface Props {
  id: string;
}

export const fetchUserAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getUser(props);

    const { data } = response.data;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
