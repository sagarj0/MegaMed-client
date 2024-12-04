import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PostBulkUpdateRequest, PostBulkUpdateResponse } from "./type";

export const bulkUpdateUsers = (data: PostBulkUpdateRequest): Promise<PostBulkUpdateResponse> => {
  return api.post(AdminEndpoints.bulkUpdateUsers, data);
};
