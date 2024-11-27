import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAllAdminResponse, GetAllAdminRequest } from "./type";

export const fetchAdmin = (data: GetAllAdminRequest): Promise<FetchAllAdminResponse> => {
  return api.get(AdminEndpoints.manageQuestion + "?" + data.query);
};
