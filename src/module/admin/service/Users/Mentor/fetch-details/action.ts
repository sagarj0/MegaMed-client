import { parseError } from "@/helper/parse-error";
import { getMentorDetails } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setData, setError } from "./reducer";

interface Props {
  id: string;
  timeValue: "thisWeek" | "thisMonth" | "allTime";
}

export const fetchMentorDetails = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const response = await getMentorDetails(props);

    const { data } = response.data;

    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
