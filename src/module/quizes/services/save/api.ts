import { api } from "@/util/apis";
import { SaveQuizRes, SaveQuizReq } from "./type";
import { QuizEndpoints } from "../../util/endpoint";

export const saveQuiz = (data: SaveQuizReq): Promise<SaveQuizRes> => {
  return api.post(QuizEndpoints.create, data);
};
