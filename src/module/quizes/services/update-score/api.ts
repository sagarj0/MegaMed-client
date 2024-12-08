import { api } from "@/util/apis";
import { UpdateScore, UpdateScoreRes } from "./type";
import { QuizEndpoints } from "../../util/endpoint";

export const saveQuiz = (data: UpdateScore): Promise<UpdateScoreRes> => {
  return api.post(QuizEndpoints.create, data);
};
