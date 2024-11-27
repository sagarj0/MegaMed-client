import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseEditRequest } from "./parse-request";
import { AddMentorProps } from "@/module/admin/ui/Mentors/add/type";
import { patchMentor } from "./api";

interface Props {
  oldData: AddMentorProps;
  newData: AddMentorProps;
}

export const editMentorAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseEditRequest(props);

    const response = await patchMentor(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
