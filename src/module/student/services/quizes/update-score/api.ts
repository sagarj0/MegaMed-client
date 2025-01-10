import { api } from "@/util/apis";
import { UpdateScore, UpdateScoreRes } from "./type";
import { StudentEndpoints } from "@/module/student/util/endpoints";

export const updateScore = (data: UpdateScore): Promise<UpdateScoreRes> => {
  return api.patch(StudentEndpoints.quizEndpoints.update, data);
};
