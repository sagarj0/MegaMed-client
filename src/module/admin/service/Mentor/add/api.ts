import { api } from "@/util/apis";
import { PostMentorRequest, PostMentorResponse } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const postMentor = (data: PostMentorRequest): Promise<PostMentorResponse> => {
  return api.post(AdminEndpoints.addmentor, data);
};
