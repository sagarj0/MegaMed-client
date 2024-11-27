import { api } from "@/util/apis";
import { PostStudentRequest, PostStudentResponse } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const postStudent = (data: PostStudentRequest): Promise<PostStudentResponse> => {
  return api.post(AdminEndpoints.manageStudent, data);
};
