import { isQuizFinished, isQuizStarted } from "@/helper/is-quiz-active";
// import { isQuizRedoable } from "@/helper/is-quiz-redoable";
import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { StudentUrls } from "@/module/student/util/urls";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

export const useModal = () => {
  const navigate = useNavigate();

  const handleQuizCardClick = (quiz: SaveQuizResponse) => {
    const id = quiz.id;
    const isFinished = isQuizFinished(quiz);
    const isStarted = isQuizStarted(quiz);
    const isAttempted = Boolean(quiz.score);

    // const isRedoable = isQuizRedoable(quiz);
    // if (isRedoable && isAttempted) return navigate(StudentUrls.studentAttemptedQuizes + id);
    // if (isRedoable && !isAttempted) return navigate(StudentUrls.studentQuizes + id);

    if (!isStarted) {
      Modal.warning({
        title: "Quiz not started",
        content: "Quiz will start on the scheduled time, please wait for the quiz to start.",
      });
      return;
    } //if not started return
    if (!isFinished && isAttempted) {
      Modal.info({
        title: "Quiz not finished",
        content: "You have already attempted this quiz, please wait for the quiz to finish.",
      });
      return;
    } //if not finished but student attempted and has score

    if (!isFinished) navigate(StudentUrls.studentQuizes + id); // if not finished give quiz
    else navigate(StudentUrls.studentAttemptedQuizes + id); //else review answers
  };

  return { handleQuizCardClick };
};
