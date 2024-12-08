import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PostQuizRequest, PostQuizResponse } from "./type";

export const postQuiz = (data: PostQuizRequest): Promise<PostQuizResponse> => {
  return api.post(AdminEndpoints.createQuiz, data);
};
