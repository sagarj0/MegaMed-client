import useStatusMessage from "@/helper/hooks/use-message";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setSubmitted } from "@/store/reducers/quiz-helper/reducer";
import { resetError, resetSuccess } from "@/module/student/services/quizes/update-score/reducer";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";

export const useSubmissionModal = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { success, error } = useAppSelector((root) => root.UpdateScore);
  const onSuccessReset = () => {
    dispatch(setSubmitted(true));
    Modal.success({
      title: "Submission Status",
      content: "Your quiz has been submitted successfully. Please View your score and ranking details after the quiz ends.",
      onOk: () => {
        navigate(StudentUrls.studentQuizes);
        dispatch(setSubmitted(false));
      },
    });
  };
  const onErrorReset = () => {
    dispatch(setSubmitted(true));
    Modal.error({
      title: "Submission Status",
      content: "We are Sorry, Something went wrong while submitting the quiz.",
      onOk: () => {
        navigate(StudentUrls.studentQuizes);
        dispatch(setSubmitted(false));
      },
    });
  };
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset });

  return null;
};
