import { UpdateScoreProps } from "../../ui/type";
import { UpdateScore } from "./type";

export const parseRequest = (data: UpdateScoreProps): UpdateScore => {
  return {
    quizId: data.quizId,
    score: data.score,
  };
};
