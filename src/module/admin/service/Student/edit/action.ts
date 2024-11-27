import { parseError } from "@/helper/parse-error";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseEditRequest } from "./parse-request";
import { AddStudentProps } from "@/module/admin/ui/Students/add/type";
import { patchStudent } from "./api";

interface Props {
  oldData: AddStudentProps;
  newData: AddStudentProps;
}

export const editStudentAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseEditRequest(props);

    const response = await patchStudent(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
