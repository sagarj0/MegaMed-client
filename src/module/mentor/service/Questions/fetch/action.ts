import { parseError } from "@/helper/parse-error";
import { fetchQuestion } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setData, setError } from "./reducer";

interface Props {
  id: string;
}

export const fetchQuestionAciton = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await fetchQuestion(props);

    const { data } = response.data;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
