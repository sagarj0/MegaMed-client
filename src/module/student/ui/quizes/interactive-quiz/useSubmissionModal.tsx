import useStatusMessage from "@/helper/hooks/use-message";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setSubmitted } from "@/store/reducers/quiz-helper/reducer";
import { resetError, resetSuccess } from "@/module/student/services/quizes/update-score/reducer";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";

export const SubmissionModal: React.FC = () => {
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState<string>("");

  const dispatch = useAppDispatch();
  const { success, error } = useAppSelector((root) => root.UpdateScore);
  const { isSubmitted } = useAppSelector((root) => root.QuizHelper);
  const onSuccessReset = () => {
    setModalMessage("Your quiz has been submitted successfully. Please View your score and ranking details after the quiz ends.");
    dispatch(setSubmitted(true));
  };
  const onErrorReset = () => {
    setModalMessage("We are Sorry, Something went wrong while submitting the quiz. Please try again.");
    // dispatch(setSubmitted(true));
  };
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset });

  const onCancel = () => {
    navigate(StudentUrls.studentQuizes);
    dispatch(setSubmitted(false));
  };

  return (
    <Modal open={isSubmitted} title="Submission Status" cancelButtonProps={{ style: { display: "none" } }} onCancel={onCancel} onOk={onCancel}>
      {modalMessage}
    </Modal>
  );
};
