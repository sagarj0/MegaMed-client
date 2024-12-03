import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAllUserResponse, GetAllUserRequest } from "./type";

export const fetchUser = (data: GetAllUserRequest): Promise<FetchAllUserResponse> => {
  return api.get(AdminEndpoints.user + "?" + data.query);
};
