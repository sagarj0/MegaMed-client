import { parseError } from "@/helper/parse-error";
import { patchQuestion } from "./api";
import { AppDispatch } from "@/store";
import { setLoading, resetLoading, setSuccess, setError } from "./reducer";
import { parseEditRequest } from "./parse-request";
import { AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";

interface Props {
  id: string;
  oldData: AddQuestionsProps;
  newData: AddQuestionsProps;
}

export const editQuestionAction = (props: Props) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());

    const request = parseEditRequest(props);

    const response = await patchQuestion(request, props.id);

    const { message } = response.data;

    dispatch(setSuccess(message));
  } catch (error) {
    dispatch(setError(parseError(error)));
  } finally {
    dispatch(resetLoading());
  }
};
