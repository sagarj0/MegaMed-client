import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { DetailedQuiz } from "@/module/admin/service/quizes/fetch/type";

export const isQuizRedoable = (quiz: DetailedQuiz | SaveQuizResponse): boolean => {
  return !Boolean(quiz.type === "mock_test" || quiz.type === "custom");
};
