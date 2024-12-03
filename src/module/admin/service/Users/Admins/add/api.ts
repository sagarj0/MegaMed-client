import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PostAdminRequest, PostAdminResponse } from "./type";

export const postAdmin = (data: PostAdminRequest): Promise<PostAdminResponse> => {
  return api.post(AdminEndpoints.addAdmin, data);
};
