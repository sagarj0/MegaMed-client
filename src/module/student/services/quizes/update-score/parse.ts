import { UpdateScoreProps } from "@/module/student/ui/quizes/type";
import { UpdateScore } from "./type";

export const parseRequest = (data: UpdateScoreProps): UpdateScore => ({
  quizId: data.quizId,
  score: data.score,
  answers: data.answers.map(({ choosedAnswer, questionId }) => ({ choosedAnswer, questionId })),
});
