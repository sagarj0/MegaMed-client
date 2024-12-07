import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PostQuestionRequest, PostQuestionResponse } from "./type";

export const postQuestion = (data: PostQuestionRequest): Promise<PostQuestionResponse> => {
  return api.post(AdminEndpoints.manageQuestion, data);
};
