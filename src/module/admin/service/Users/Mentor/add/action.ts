import { parseError } from "@/helper/parse-error";
import { postMentor } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseMentorReq } from "./parse-request";
import { AddMentorProps } from "@/module/admin/ui/mentors/add/type";

export const addMentor = (props: AddMentorProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseMentorReq(props);

    const response = await postMentor(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
