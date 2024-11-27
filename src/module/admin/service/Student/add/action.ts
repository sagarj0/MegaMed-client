import { parseError } from "@/helper/parse-error";
import { postStudent } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseStudentReq } from "./parse-request";
import { AddStudentProps } from "@/module/admin/ui/Students/add/type";

export const addStudent = (props: AddStudentProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseStudentReq(props);

    const response = await postStudent(request);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
